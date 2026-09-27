'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Markuu soo galo, wuxuu aadaa dashboard-ka app-ka
    router.push('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfbf7', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#ffffff', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f3e8dc' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }}>B</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>BOOKTIIS</span>
        </div>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>← Ku noqo Bogga Hore</Link>
      </header>

      <main style={{ maxWidth: '420px', width: '100%', margin: '40px auto', padding: '0 20px', flex: '1' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f3e8dc' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', textAlign: 'center' }}>Soo Gal (Login)</h1>
          <p style={{ color: '#6b7280', marginBottom: '24px', textAlign: 'center', fontSize: '14px' }}>Fadlan geli Gmail-kaaga iyo erayga sirta ah.</p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Gmail / Email:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tusaale: magac@gmail.com" 
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Erayga Sirta ah (Password):</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <button 
              type="submit" 
              style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Soo Gal Hadda
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
            Aan lahayn xisaab? <Link href="/register" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Is-diiwaangeli</Link>
          </div>
        </div>
      </main>
    </div>
  );
}