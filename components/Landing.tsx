import React, { useState } from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [isHovering, setIsHovering] = useState(false);

  const styles = {
    container: {
      animation: 'fadeIn 0.8s ease-out',
    },
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #FF2E00 0%, #FFA500 100%)',
      color: 'white',
      padding: '60px 20px',
      borderBottomLeftRadius: '24px',
      borderBottomRightRadius: '24px',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    decorativeCircle: {
      position: 'absolute' as const,
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 212, 255, 0.1)',
      top: '-100px',
      right: '-100px',
      zIndex: 0,
    },
    heroContent: {
      position: 'relative' as const,
      zIndex: 1,
      textAlign: 'center' as const,
      maxWidth: '800px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '42px',
      fontFamily: 'Space Mono, monospace',
      fontWeight: 700,
      margin: '0 0 16px 0',
    },
    heroDescription: {
      fontSize: '18px',
      opacity: 0.95,
      margin: 0,
      lineHeight: '1.5',
    },
    // Features Grid Section
    featuresSection: {
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    featuresTitle: {
      fontSize: '28px',
      fontFamily: 'Space Mono, monospace',
      color: '#FF2E00',
      margin: '0 0 32px 0',
      textAlign: 'center' as const,
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
    },
    card: (idx: number) => ({
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      animation: `fadeIn 0.6s ease-out ${idx * 0.2}s both`,
      transition: 'all 0.3s ease',
    }),
    cardEmoji: {
      fontSize: '32px',
      marginBottom: '16px',
      display: 'block',
    },
    cardTitle: {
      fontSize: '18px',
      fontFamily: 'Space Mono, monospace',
      fontWeight: 600,
      color: '#FF2E00',
      margin: '0 0 12px 0',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#4a5568',
      margin: 0,
      lineHeight: '1.5',
    },
    // CTA Section
    ctaSection: {
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)',
      padding: '32px',
      borderRadius: '12px',
      border: '2px solid #00d4ff',
      margin: '40px 20px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center' as const,
    },
    ctaTitle: {
      fontSize: '20px',
      fontFamily: 'Space Mono, monospace',
      color: '#FF2E00',
      margin: '0 0 12px 0',
      fontWeight: 600,
    },
    ctaDescription: {
      fontSize: '14px',
      color: '#4a5568',
      margin: '0 0 24px 0',
      lineHeight: '1.5',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #FF2E00 0%, #FFA500 100%)',
      color: 'white',
      padding: '14px 40px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(26, 58, 82, 0.3)',
      transition: 'all 0.3s ease',
      transform: isHovering ? 'translateY(-2px)' : 'translateY(0)',
      boxShadowHover: isHovering ? '0 6px 16px rgba(26, 58, 82, 0.4)' : '0 4px 12px rgba(26, 58, 82, 0.3)',
    } as React.CSSProperties,
  };

  // Apply box shadow based on hover state
  const buttonStyle = {
    ...styles.ctaButton,
    boxShadow: isHovering ? '0 6px 16px rgba(26, 58, 82, 0.4)' : '0 4px 12px rgba(26, 58, 82, 0.3)',
  };

  const cardsData = [
    {
      emoji: '📋',
      title: 'Opción A',
      description: 'Ingresa tu sueldo y descubre cuánto puedes pedir prestado.',
    },
    {
      emoji: '🏠',
      title: 'Opción B',
      description: 'Elige la propiedad y calcula el sueldo que necesitas.',
    },
    {
      emoji: '⚡',
      title: 'Cálculos en Tiempo Real',
      description: 'Usa valores reales del mercado para resultados precisos.',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.decorativeCircle}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>🕵️ Misión 007: TU PRIMERA INVERSIÓN</h1>
            <p style={styles.heroDescription}>
              Calcula tu capacidad de préstamo o el sueldo que necesitas para invertir
            </p>
          </div>
        </div>

        {/* Features Grid Section */}
        <div style={styles.featuresSection}>
          <h2 style={styles.featuresTitle}>¿Cómo Funciona?</h2>
          <div style={styles.cardsGrid}>
            {cardsData.map((card, idx) => (
              <div key={idx} style={styles.card(idx)}>
                <span style={styles.cardEmoji}>{card.emoji}</span>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>🚀 Comienza Ahora</h3>
          <p style={styles.ctaDescription}>
            Descubre tu capacidad de compra en menos de 2 minutos
          </p>
          <button
            style={buttonStyle}
            onClick={onStart}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Ir a la Calculadora
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
