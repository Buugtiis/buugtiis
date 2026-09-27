'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Tusaale buugaagta la heli karo
  const books = [
    { id: 1, title: 'Milk and Honey', author: 'Rupi Kaur', status: 'purchased', price: '$5' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', status: 'available', price: '$8' },
    { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', status: 'available', price: '$6' },
  ];

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingBottom: '80px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header / Raadinta */}
      <header style={{ backgroundColor: '#fff', padding: '20px 30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '22px', color: '#333' }}>BOOKTIIS Dashboard</h1>
          <Link href="/login" style={{ fontSize: '14px', color: '#e74c3c', textDecoration: 'none', fontWeight: 'bold' }}>
            Ka Bax (Logout)
          </Link>
        </div>
        
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Raadi buug ama qoraa..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px 15px', borderRadius: '6px', border: '1px solid #ddd', width: '100%', fontSize: '14px', outline: 'none' }}
        />
      </header>

      {/* Qeybta Buugaagta */}
      <main style={{ padding: '20px 30px', maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ color: '#444', marginBottom: '15px' }}>Buugaagta La Heli Karo</h3>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          {filteredBooks.map((book) => (
            <div key={book.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#222' }}>{book.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Qoraa: {book.author}</p>
                <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '12px', padding: '3px 8px', borderRadius: '4px', background: book.status === 'purchased' ? '#e1f5fe' : '#fff3e0', color: book.status === 'purchased' ? '#0288d1' : '#f57c00' }}>
                  {book.status === 'purchased' ? 'Waa la iibsaday' : `Qiimaha: ${book.price}`}
                </span>
              </div>

              {/* Badhannada Action-ka */}
              <div>
                {book.status === 'purchased' ? (
                  <Link href="/read" style={{ backgroundColor: '#27ae60', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
                    Read Now
                  </Link>
                ) : (
                  <Link href="/checkout" style={{ backgroundColor: '#2980b9', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
                    Iibso (Buy)
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation Bar-ka Hoose */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-around', padding: '12px 0', boxShadow: '0 -2px 5px rgba(0,0,0,0.05)' }}>
        <Link href="/dashboard" style={{ color: '#2980b9', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span>🏠</span> Home
        </Link>
        <Link href="/read" style={{ color: '#555', textDecoration: 'none', fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span>📖</span> Reading
        </Link>
        <Link href="/dashboard" style={{ color: '#555', textDecoration: 'none', fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span>👤</span> Profile
        </Link>
      </nav>
    </div>
  );
}