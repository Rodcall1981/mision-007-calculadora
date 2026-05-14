// app/page.tsx
'use client';

import React from 'react';
import Step1Form from '@/components/Step1Form';
import Step2Choice from '@/components/Step2Choice';
import Step3Input from '@/components/Step3Input';
import Step4Report from '@/components/Step4Report';
import Step5CTA from '@/components/Step5CTA';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import { FormData, CalculationMode, CalculationResult } from '@/lib/types';

export default function Home() {
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState<FormData | null>(null);
  const [mode, setMode] = React.useState<CalculationMode | null>(null);
  const [inputValue, setInputValue] = React.useState<number | null>(null);
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleStep1Next = (data: FormData) => {
    setFormData(data);
    setStep(2);
  };

  const handleStep2Next = (selectedMode: CalculationMode) => {
    setMode(selectedMode);
    setStep(3);
  };

  const handleStep3Next = async (value: number) => {
    setInputValue(value);
    setLoading(true);

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          valor: value,
        }),
      });

      if (!response.ok) throw new Error('Calculation failed');

      const calculationResult = await response.json();
      setResult(calculationResult);

      // Save to database
      await fetch('/api/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData?.email,
          nombre: formData?.nombre,
          modo: mode,
          valor_ingresado: value,
          resultado: calculationResult,
        }),
      });

      setStep(4);
    } catch (error) {
      alert('Error al calcular. Intenta de nuevo.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStep4Next = () => {
    setStep(5);
  };

  const handleStart = () => {
    setStep(1);
  };

  const handleRestart = () => {
    setStep(1);
    setFormData(null);
    setMode(null);
    setInputValue(null);
    setResult(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {step === 0 && (
        <Landing onStart={handleStart} />
      )}

      {step > 0 && (
        <div
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
            minHeight: '100vh',
            padding: '20px',
            flex: 1,
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #FF2E00 0%, #FFA500 100%)',
                color: 'white',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <img
                src="/logo-white.svg"
                alt="Logo"
                style={{
                  height: '72px',
                  width: 'auto',
                  flexShrink: 0,
                }}
              />
              <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>
                Calculadora Financiera
              </h1>
            </div>

            {loading && (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    border: '4px solid #e2e8f0',
                    borderTop: '4px solid #FF2E00',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                  }}
                />
                <p style={{ marginTop: '16px', color: '#64748b' }}>
                  Calculando...
                </p>
              </div>
            )}

            {!loading && (
              <>
                {step === 1 && <Step1Form onNext={handleStep1Next} />}
                {step === 2 && (
                  <Step2Choice
                    onNext={handleStep2Next}
                    onBack={() => setStep(1)}
                  />
                )}
                {step === 3 && mode && (
                  <Step3Input
                    mode={mode}
                    onNext={handleStep3Next}
                    onBack={() => setStep(2)}
                  />
                )}
                {step === 4 && result && inputValue !== null && (
                  <Step4Report
                    mode={mode!}
                    result={result}
                    inputValue={inputValue}
                    onNext={handleStep4Next}
                    onBack={() => setStep(3)}
                  />
                )}
                {step === 5 && formData && (
                  <Step5CTA
                    email={formData.email}
                    nombre={formData.nombre}
                    onRestart={handleRestart}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
