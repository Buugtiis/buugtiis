# BUUGTIIS — Your Digital Library

App-ka wuxuu ku dhisan yahay Next.js + Supabase.

## Waxyaabaha ku jira
- Login / Signup
- User Library
- Book Store
- PDF reader gudaha app-ka
- Search
- Audiobooks upload + playback-ready URL
- Admin Dashboard
- Cover/PDF/Audio upload
- Database
- Reading progress table
- Orders/payment-pending workflow
- Responsive iPhone/Android/Chromebook

## Sida loo bilaabo

### 1. Samee Supabase project
Tag https://supabase.com oo samee project.

### 2. Database
Supabase dashboard → SQL Editor → New query.
Fur faylka `supabase/schema.sql`, dhammaan ku copy garee SQL Editor, kadib Run.

### 3. Samee account
Marka app-ku shaqeeyo, samee account-kaaga.

### 4. Admin ka dhig
Supabase → SQL Editor:
```sql
select id,email from auth.users;
```
Copy garee UUID-ga account-kaaga, kadib:
```sql
update public.profiles
set role='admin'
where id='UUID-HALKAN-KU-QOR';
```

### 5. Environment variables
Samee `.env.local` oo ku qor:
```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Values-ka waxaad ka heli kartaa Supabase → Project Settings → API.

### 6. Run
Terminal:
```bash
npm install
npm run dev
```

## Payment
Orders table iyo pending checkout way ku jiraan. Payment dhab ah (Stripe/PayPal ama provider kale) iyo webhook waa in lagu xiraa provider-ka aad doorato ka hor inta aan lacag dhab ah la qaadin.

## Muhiim
Ha gelin `service_role` key gudaha browser-ka ama `.env` variable ka bilaaban waayay `NEXT_PUBLIC_`. Browser-ka waxaa loogu talagalay publishable key oo keliya.
