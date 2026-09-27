-- BUUGTIIS database
create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  description text,
  cover_url text,
  pdf_url text,
  audio_url text,
  category text,
  price numeric(10,2) not null default 0,
  is_free boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.library (
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id uuid not null references public.books(id) on delete cascade,
  added_at timestamptz not null default now(),
  primary key(user_id, book_id)
);

create table if not exists public.progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id uuid not null references public.books(id) on delete cascade,
  progress numeric(5,2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key(user_id, book_id)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id uuid not null references public.books(id) on delete cascade,
  amount numeric(10,2) not null,
  status text not null default 'pending' check(status in ('pending','paid','cancelled')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles(id,email) values(new.id,new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.books enable row level security;
alter table public.library enable row level security;
alter table public.progress enable row level security;
alter table public.orders enable row level security;

create policy "profiles own read" on public.profiles for select using (auth.uid()=id);
create policy "books public read" on public.books for select using (true);
create policy "library own all" on public.library for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "progress own all" on public.progress for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "orders own read" on public.orders for select using (auth.uid()=user_id);
create policy "orders own insert" on public.orders for insert with check (auth.uid()=user_id);

-- Admin policies: only users whose profile role is admin.
create policy "admin books insert" on public.books for insert
with check (exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin books update" on public.books for update
using (exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin books delete" on public.books for delete
using (exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin'));

-- Storage bucket for covers, PDFs and audio.
insert into storage.buckets (id,name,public) values ('books','books',true)
on conflict (id) do update set public=true;

create policy "public book files read" on storage.objects for select
using (bucket_id='books');

create policy "admins upload book files" on storage.objects for insert
with check (
  bucket_id='books' and exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin')
);

create policy "admins update book files" on storage.objects for update
using (
  bucket_id='books' and exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin')
);

create policy "admins delete book files" on storage.objects for delete
using (
  bucket_id='books' and exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin')
);

-- After creating your first account, replace the UUID below and run:
-- update public.profiles set role='admin' where id='YOUR-USER-UUID';