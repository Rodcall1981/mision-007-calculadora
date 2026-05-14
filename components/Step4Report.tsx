// components/Step4Report.tsx
import { CalculationMode, CalculationResult, CalculationResultA, CalculationResultB } from '@/lib/types';

interface Step4ReportProps {
  mode: CalculationMode;
  result: CalculationResult;
  inputValue: number;
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Report({ mode, result, inputValue, onNext, onBack }: Step4ReportProps) {
  const isModeA = mode === 'A';
  const formattedInput = inputValue.toLocaleString('es-CL');
  const resultA = result as CalculationResultA;
  const resultB = result as CalculationResultB;

  return (
    <div style={{ padding: '30px 20px' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#FF2E00',
          textDecoration: 'underline',
          marginBottom: '15px',
          transition: 'color 0.3s',
          fontFamily: "'Space Mono', monospace",
          fontSize: '14px',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#FFA500')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#FF2E00')}
      >
        ← Volver
      </button>

      <h2 style={{ fontSize: '18px', marginBottom: '20px', color: '#333', fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>
        {isModeA
          ? `Con tu sueldo de $${formattedInput} puedes pedir prestado:`
          : `Para esa propiedad de ${formattedInput} UF necesitas:`
        }
      </h2>

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

      {isModeA ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '24px',
              borderRadius: '12px',
              textAlign: 'center',
              border: '2px solid #FFA500',
              animation: 'fadeIn 0.6s ease-out',
            }}
          >
            <div style={{ fontSize: '12px', color: '#0369a1', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Space Mono', monospace" }}>
              Con subsidio a la tasa
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF2E00', fontFamily: "'Space Mono', monospace" }}>
              {resultA.conSubsidio?.toLocaleString('es-CL')} UF
            </div>
          </div>
          <div
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              padding: '24px',
              borderRadius: '12px',
              textAlign: 'center',
              border: '2px solid #cbd5e1',
              animation: 'fadeIn 0.6s ease-out 0.2s both',
            }}
          >
            <div style={{ fontSize: '12px', color: '#475569', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Space Mono', monospace" }}>
              Sin subsidio a la tasa
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF2E00', fontFamily: "'Space Mono', monospace" }}>
              {resultA.sinSubsidio?.toLocaleString('es-CL')} UF
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: 'linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)',
            padding: '32px 24px',
            borderRadius: '12px',
            marginBottom: '20px',
            borderLeft: '6px solid #10b981',
            animation: 'fadeIn 0.6s ease-out',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              color: '#047857',
              marginBottom: '8px',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: "'Space Mono', monospace",
            }}
          >
            Sueldo líquido mínimo
          </div>
          <div style={{ fontSize: '36px', fontWeight: 700, color: '#10b981', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
            ${resultB.sueldoRequerido?.toLocaleString('es-CL')}
          </div>
          <div style={{ fontSize: '13px', color: '#059669', fontFamily: "'Space Mono', monospace" }}>
            mensual para calificar
          </div>
        </div>
      )}

      <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginTop: '20px', fontFamily: "'Space Mono', monospace" }}>
        ℹ️ {isModeA ? 'Estos montos son aproximados basados en tu sueldo líquido' : 'Este monto es aproximado y considera cuota a 30 años'}
      </p>

      <button
        onClick={onNext}
        style={{
          width: '100%',
          padding: '12px',
          background: 'linear-gradient(135deg, #FF2E00 0%, #2c5282 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: '30px',
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
        Siguiente
      </button>
    </div>
  );
}
