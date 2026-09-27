'use client';

import Link from 'next/link';

const sampleBooks = [
  {
    id: 1,
    title: 'Taariikhda Soomaaliya',
    price: 10,
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Cilmiga Kombuyuutarka iyo Aasaaskiisa',
    price: 15,
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'Dhaqaalaha iyo Ganacsiga Casriga ah',
    price: 12,
    cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Header / Navigation */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#111827', color: '#ffffff', padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold' }}>B</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>BUUGTIIS</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/admin" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>Maamulaha (Admin)</Link>
          <Link href="/checkout" style={{ backgroundColor: '#111827', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>Kaarka Lacag-bixinta</Link>
        </div>
      </header>

      {/* Hero Section with Library Background */}
      <section style={{ 
        position: 'relative', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: '#ffffff', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '1px' }}>KUSOO DHOWO BOOKTIIS</h1>
          <p style={{ fontSize: '18px', color: '#e5e7eb', lineHeight: '1.5' }}>Iibso oo kala deg buugaagtaada aad jeceshahay si sahlan oo degdeg ah.</p>
        </div>
      </section>

      {/* Books Grid */}
      <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Buugaagta La Soo Kordhiyay</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {sampleBooks.map((book) => (
            <div key={book.id} style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                <img src={book.cover} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{book.title}</h3>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#2563eb', marginBottom: '16px' }}>${book.price}</p>
                </div>
                <Link 
                  href="/checkout" 
                  style={{ display: 'block', textAlign: 'center', backgroundColor: '#111827', color: '#ffffff', padding: '10px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}
                >
                  Iibso Hadda
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}