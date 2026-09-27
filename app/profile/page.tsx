import Link from 'next/link';

export default function UserProfile() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50' }}>User Profile</h1>
      
      <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p><strong>Magaca:</strong> Isticmaalaha BOOKTIIS</p>
        <p><strong>Iimaylka:</strong> user@booktiis.com</p>
        <p><strong>Heerka Akhriska:</strong> Akhriste Firfircoon</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Ku noqo Dashboard-ka
        </Link>
      </div>
    </div>
  );
}