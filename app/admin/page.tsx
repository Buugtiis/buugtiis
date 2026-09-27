'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#111827', color: '#ffffff', padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold' }}>B</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>BUUGTIIS - Maamulaha (Admin)</span>
        </div>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '500' }}>← Ku noqo App-ka</Link>
      </header>

      {/* Main Form */}
      <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>KUDAR BOOK CUSUB</h1>

          {submitted ? (
            <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <h3 style={{ color: '#065f46', margin: '0 0 8px 0' }}>Buugga si guul leh ayaa loo daray!</h3>
              <p style={{ color: '#047857', margin: '0' }}>Sawirka daboolka iyo faylka PDF-ka waa la diiwaangeliyay.</p>
              <button 
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '16px', backgroundColor: '#065f46', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                Ku dar Buug Kale
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Magaca Buugga:</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Tusaale: Taariikhda Soomaaliya" 
                  required
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '16px', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Qiimaha Buugga ($):</label>
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Tusaale: 10" 
                  required
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '16px', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Sawirka Daboolka Buugga (Cover Image):</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                  required
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '16px', backgroundColor: '#f9fafb', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Faylka Buugga (PDF):</label>
                <input 
                  type="file" 
                  accept="application/pdf"
                  onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                  required
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '16px', backgroundColor: '#f9fafb', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ width: '100%', backgroundColor: '#111827', color: '#ffffff', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
              >
                Geli Buugga Hadda
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}