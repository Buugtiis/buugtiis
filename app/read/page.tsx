'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReadPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Tusaale ahaan tirada bogagga buugga

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', display: 'flex', flexDirection: 'column' }}>
      {/* Header-ka Akhriska */}
      <header style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>BOOKTIIS Reader - Milk and Honey</h2>
        <Link href="/dashboard" style={{ color: '#fff', textDecoration: 'none', background: '#444', padding: '8px 15px', borderRadius: '4px', fontSize: '14px' }}>
          Ku Noqo Dashboard-ka
        </Link>
      </header>

      {/* Qeybta Dhexeysa ee Muujineysa Buugga */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <div style={{ width: '100%', maxWidth: '700px', height: '500px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '40px', boxSizing: 'border-box', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Cutubka 1-aad</span>
            <h3 style={{ marginTop: '10px', color: '#333' }}>Tusaale Qoraalka Buugga</h3>
            <p style={{ lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
              Halkan waxaa ka muuqan doona erayada iyo bogagga buuggaaga aad iibsatay. 
              Waxaad akhrisan kartaa adigoo rogaya bogagga hoose adoo isticmaalaya badhannada.
            </p>
          </div>

          {/* Badhannada Bog-rogista */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            <button 
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              style={{ padding: '8px 16px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              Bogga Hore
            </button>
            <span style={{ fontSize: '14px', color: '#666' }}>Bogga {currentPage} ee {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              style={{ padding: '8px 16px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              Bogga Xiga
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}