'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#111827', color: '#ffffff', padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold' }}>B</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>BUUGTIIS</span>
        </div>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '500' }}>← Ku noqo Guriga</Link>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Xaqiijinta Lacag-bixinta</h1>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>Ku dir lacagta nambarka ganacsiga EVC Plus, kadibna soo geli lambarka xawaaladda (Transaction ID).</p>

          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
            <p style={{ fontSize: '14px', color: '#1e40af', margin: '0 0 4px 0' }}>Nambarka Ganacsiga (Merchant):</p>
            <h2 style={{ fontSize: '28px', color: '#1d4ed8', margin: '0', fontWeight: 'bold' }}>0613424271</h2>
          </div>

          {success ? (
            <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <h3 style={{ color: '#065f46', margin: '0 0 8px 0' }}>Codkaaga Xaqiijinta waa la helay!</h3>
              <p style={{ color: '#047857', margin: '0' }}>Lambarka xawaaladda: <strong>{transactionId}</strong>. Waan hubin doonaa dhawaan.</p>
            </div>
          ) : (
            <form onSubmit={handlePayment}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Lambarka Xawaaladda (Transaction ID / SMS Code):</label>
                <input 
                  type="text" 
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Tusaale: ABC123XYZ" 
                  required
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '16px', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ width: '100%', backgroundColor: '#111827', color: '#ffffff', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
              >
                {loading ? 'Fadlan sug...' : 'Xaqiiji Lacag-bixinta'}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}