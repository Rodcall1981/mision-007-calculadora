// components/Step3Input.tsx
import { CalculationMode } from '@/lib/types';
import React from 'react';

interface Step3InputProps {
  mode: CalculationMode;
  onNext: (value: number) => void;
  onBack: () => void;
}

export default function Step3Input({ mode, onNext, onBack }: Step3InputProps) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const numValue = parseFloat(value);

    if (!value) {
      setError('Por favor ingresa un valor');
      return;
    }

    if (isNaN(numValue)) {
      setError('Solo números permitidos');
      return;
    }

    if (numValue <= 0) {
      setError('Ingresa un número mayor a 0');
      return;
    }

    onNext(numValue);
  };

  const isModeA = mode === 'A';
  const label = isModeA ? 'Tu sueldo líquido mensual (en pesos)' : 'Valor de la propiedad (en UF)';
  const placeholder = isModeA ? '1500000' : '2000';
  const hint = isModeA
    ? 'Ingresa el monto que recibes cada mes en tu cuenta'
    : 'Ejemplo: si la propiedad cuesta 2000 UF, ingresa 2000';

  return (
    <form onSubmit={handleSubmit} style={{ padding: '30px 20px' }}>
      <button
        type="button"
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#1a3a52',
          textDecoration: 'underline',
          marginBottom: '15px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '14px',
          transition: 'color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#FFA500')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#1a3a52')}
      >
        ← Volver
      </button>

      <h2 style={{ fontSize: '22px', marginBottom: '28px', color: '#1a3a52', fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>
        {isModeA ? '¿Cuál es tu sueldo líquido?' : '¿Cuál es el valor de la propiedad?'}
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontFamily: "'Space Mono', monospace", color: '#1a3a52', fontSize: '14px' }}>
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '16px',
            border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
            borderRadius: '12px',
            fontSize: '16px',
            transition: 'all 0.3s',
            fontFamily: 'inherit',
            outline: 'none',
            boxSizing: 'border-box' as const,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#FFA500';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 46, 0, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? '#ef4444' : '#e2e8f0';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
        {error && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>{error}</p>}
      </div>

      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', fontFamily: "'Space Mono', monospace" }}>{hint}</p>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '14px 40px',
          background: 'linear-gradient(135deg, #1a3a52 0%, #FFA500 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: "'Space Mono', monospace",
          fontSize: '16px',
          transition: 'all 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(26, 58, 82, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Ver resultado
      </button>
    </form>
  );
}
