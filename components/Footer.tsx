import React, { useState } from 'react';

export default function Footer() {
  const [instagramHover, setInstagramHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const informationLinks = [
    { label: 'Términos de Uso', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  const socialLinkStyle = (isHovered: boolean) => ({
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: isHovered ? 'rgba(255, 46, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    color: 'white',
    textDecoration: 'none' as const,
    fontSize: '14px',
    transition: 'all 0.3s',
    border: `1px solid ${isHovered ? '#FFA500' : 'rgba(255, 255, 255, 0.2)'}`,
  });

  const infoLinkStyle = (isHovered: boolean) => ({
    color: isHovered ? '#FFA500' : 'rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
    transition: 'color 0.3s',
  });

  return (
    <footer
      style={{
        backgroundColor: '#FF2E00',
        color: 'white',
        padding: '40px 20px',
        marginTop: '60px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Column 1: Company Info */}
        <div>
          <h4
            style={{
              fontSize: '16px',
              fontFamily: 'Space Mono, monospace',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Calculadora Financiera
          </h4>
          <p
            style={{
              fontSize: '14px',
              opacity: 0.8,
              lineHeight: 1.8,
            }}
          >
            Herramienta gratuita para calcular tu capacidad de préstamo e inversión inmobiliaria en Chile.
          </p>
        </div>

        {/* Column 2: Social Media Links */}
        <div>
          <h4
            style={{
              fontSize: '16px',
              fontFamily: 'Space Mono, monospace',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Sígueme
          </h4>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.instagram.com/rodrigo.callejon/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle(instagramHover)}
              onMouseOver={() => setInstagramHover(true)}
              onMouseOut={() => setInstagramHover(false)}
            >
              📸 Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-callej%C3%B3n-70b76715b/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle(linkedinHover)}
              onMouseOver={() => setLinkedinHover(true)}
              onMouseOut={() => setLinkedinHover(false)}
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* Column 3: Information Links */}
        <div>
          <h4
            style={{
              fontSize: '16px',
              fontFamily: 'Space Mono, monospace',
              marginBottom: '16px',
              fontWeight: 700,
            }}
          >
            Información
          </h4>
          <ul
            style={{
              listStyle: 'none',
              fontSize: '14px',
              padding: 0,
              margin: 0,
            }}
          >
            {informationLinks.map((link, index) => (
              <li
                key={link.label}
                style={{
                  marginBottom: index < informationLinks.length - 1 ? '8px' : '0',
                }}
              >
                <a
                  href={link.href}
                  style={{
                    ...infoLinkStyle(hoveredLink === link.label),
                    textDecoration: 'none',
                  }}
                  onMouseOver={() => setHoveredLink(link.label)}
                  onMouseOut={() => setHoveredLink(null)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '13px',
          opacity: 0.7,
          marginTop: '40px',
        }}
      >
        <p style={{ margin: 0 }}>
          © 2026 Calculadora Financiera. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
