import { CalculationMode } from '@/lib/types';

interface Step2ChoiceProps {
  onNext: (mode: CalculationMode) => void;
  onBack: () => void;
}

export default function Step2Choice({ onNext, onBack }: Step2ChoiceProps) {
  return (
    <div style={{ padding: '40px 20px' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#FF2E00',
          textDecoration: 'underline',
          marginBottom: '20px',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#FFA500')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#FF2E00')}
      >
        ← Volver
      </button>

      <h2
        style={{
          fontSize: '22px',
          marginBottom: '28px',
          color: '#FF2E00',
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
        }}
      >
        ¿Qué quieres calcular?
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          {
            mode: 'A' as CalculationMode,
            emoji: '💰',
            title: '¿Cuánto me prestan según mi sueldo?',
            desc: 'Ingresa tu sueldo y descubre cuántas UF puedes pedir prestado',
          },
          {
            mode: 'B' as CalculationMode,
            emoji: '🏠',
            title: '¿Cuánto sueldo necesito para una propiedad?',
            desc: 'Elige el valor de la propiedad que te interesa y sabe cuánto sueldo necesitas',
          },
        ].map((option) => (
          <button
            key={option.mode}
            onClick={() => onNext(option.mode)}
            style={{
              display: 'block',
              width: '100%',
              padding: '24px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              background: 'white',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#FFA500';
              e.currentTarget.style.background =
                'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 24px rgba(255, 46, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
              {option.emoji}
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FF2E00',
                fontFamily: "'Space Mono', monospace",
                marginBottom: '8px',
              }}
            >
              {option.title}
            </div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              {option.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
