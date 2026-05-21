import React from 'react';
import './Partners.css';

const PARTNERS = [
  'Zebra Technologies',
  'Honeywell',
  'Datamax-O\'Neil',
  'Elgin',
  'Argox',
  'Sato',
  'Epson',
  'Bematech',
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <span className="partners-label">TECNOLOGIAS E HARDWARE COMPATÍVEIS</span>
        <div className="partners-grid">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="partner-logo">
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={partner}>
                <rect width="120" height="40" rx="4" fill="var(--etarp-surface-alt)" />
                <text x="60" y="24" fontFamily="var(--font-display)" fontWeight="600" fontSize="10" fill="var(--text-muted)" textAnchor="middle">
                  {partner}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
