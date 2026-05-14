import React from 'react';

interface Step5CTAProps {
  email: string;
  nombre: string;
  onRestart: () => void;
}

export default function Step5CTA({ email, nombre, onRestart }: Step5CTAProps) {
  const handleWhatsAppClick = async () => {
    try {
      await fetch('/api/mark-whatsapp-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error('Error marking WhatsApp click:', error);
    }

    const message = encodeURIComponent(
      'Hola, según la calculadora tengo capacidad de compra. Quiero conocer qué proyectos podrían ser para mí.'
    );
    const whatsappNumber = '56940408494';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1
        style={{
          fontSize: '28px',
          marginBottom: '28px',
          color: '#FFA500',
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        ¿Quieres Ir Más Allá?
      </h1>

      <div
        style={{
          background: 'linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)',
          padding: '32px 24px',
          borderRadius: '12px',
          marginBottom: '20px',
          textAlign: 'center',
          border: '2px solid #FF2E00',
          animation: 'fadeIn 0.6s ease-out',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            color: '#047857',
            marginBottom: '12px',
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
          }}
        >
          ¿Quieres conocer qué proyectos podrías comprar con esto?
        </p>
        <p style={{ fontSize: '14px', marginBottom: '20px', color: '#FFA500' }}>
          Conecta con nuestro equipo y te mostraremos opciones reales de inversión
        </p>
        <button
          onClick={handleWhatsAppClick}
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
            boxShadow: '0 4px 12px rgba(255, 46, 0, 0.2)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 0, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 46, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          💬 Agendar en WhatsApp
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)',
            color: '#FFA500',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Space Mono', monospace",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#FFA500';
            e.currentTarget.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)';
          }}
        >
          Calcular de nuevo
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
