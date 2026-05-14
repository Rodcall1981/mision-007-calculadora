import { FormData } from '@/lib/types';
import React from 'react';

interface Step1FormProps {
  onNext: (data: FormData) => void;
}

export default function Step1Form({ onNext }: Step1FormProps) {
  const [email, setEmail] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!nombre) {
      newErrors.nombre = 'Nombre es requerido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext({ email, nombre });
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '16px',
    border: `2px solid ${
      errors[field]
        ? '#ef4444'
        : focusedField === field
          ? '#FFA500'
          : '#e2e8f0'
    }`,
    borderRadius: '12px',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box' as const,
    boxShadow: focusedField === field ? '0 0 0 3px rgba(255, 46, 0, 0.1)' : 'none',
  });

  return (
    <form onSubmit={handleSubmit} style={{ padding: '40px 20px' }}>
      <h2
        style={{
          fontSize: '22px',
          marginBottom: '28px',
          color: '#FF2E00',
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
        }}
      >
        Cuéntame quién eres
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: 600,
            color: '#FF2E00',
            fontSize: '14px',
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Tu correo electrónico
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder="tu@email.com"
          style={inputStyle('email') as React.CSSProperties}
        />
        {errors.email && (
          <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>
            {errors.email}
          </p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: 600,
            color: '#FF2E00',
            fontSize: '14px',
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Nombre completo
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onFocus={() => setFocusedField('nombre')}
          onBlur={() => setFocusedField(null)}
          placeholder="Juan Pérez"
          style={inputStyle('nombre') as React.CSSProperties}
        />
        {errors.nombre && (
          <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>
            {errors.nombre}
          </p>
        )}
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '14px 40px',
          background: 'linear-gradient(135deg, #FF2E00 0%, #FFA500 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(26, 58, 82, 0.2)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(26, 58, 82, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 58, 82, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Siguiente
      </button>
    </form>
  );
}
