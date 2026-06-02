import React, { useState } from 'react';
import './Branding.css';
import Container from '../components/layout/Container';

const brands = [
  {
    id: 'grupo',
    name: 'Grupo Etarp',
    folder: 'grupo-etarp',
    color1: '#0D2B4E',
    color2: '#0D2B4E',
    desc: 'O pilar corporativo que sustenta todas as operações do Grupo.'
  },
  {
    id: 'etiquetas',
    name: 'Etarp Etiquetas',
    folder: 'etarp-etiquetas',
    color1: '#0D1324',
    color2: '#0D1324',
    desc: 'Impressão que marca. Qualidade que permanece.'
  },
  {
    id: 'automacao',
    name: 'Etarp Automação',
    folder: 'etarp-automacao',
    color1: '#0D2B4E',
    color2: '#7AC943',
    desc: 'Conectando dados. Impulsionando resultados.'
  },
  {
    id: 'locacoes',
    name: 'Etarp Locações',
    folder: 'etarp-locacoes',
    color1: '#0D2B4E',
    color2: '#FF7A00',
    desc: 'Soluções inteligentes. Equipamentos de ponta.'
  }
];

export default function Branding() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <>
      <div className="branding-page">
        <section className="branding-hero">
          <Container>
            <h1>Brand Guidelines</h1>
            <p>Conheça a identidade visual oficial das marcas do Grupo Etarp.</p>
          </Container>
        </section>

        <section className="branding-nav-section">
          <Container>
            <div className="brand-tabs">
              {brands.map((brand) => (
                <button 
                  key={brand.id}
                  className={`brand-tab ${activeBrand.id === brand.id ? 'active' : ''}`}
                  onClick={() => setActiveBrand(brand)}
                  style={{ borderBottomColor: activeBrand.id === brand.id ? brand.color2 : 'transparent' }}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </Container>
        </section>

        <section className="brand-content" style={{ '--primary': activeBrand.color1, '--accent': activeBrand.color2 }}>
          <Container>
            <div className="brand-header">
              <h2>{activeBrand.name}</h2>
              <p className="brand-desc">{activeBrand.desc}</p>
            </div>

            <div className="logos-grid">
              <div className="logo-card light">
                <h3>Horizontal Escuro</h3>
                <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal.svg`} alt="Horizontal Light" />
              </div>
              <div className="logo-card dark">
                <h3>Horizontal Claro (Dark Mode)</h3>
                <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal-dark.svg`} alt="Horizontal Dark" />
              </div>
              <div className="logo-card icon-card">
                <h3>Ícone Base</h3>
                <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/icon.svg`} alt="Ícone" className="only-icon" />
              </div>
              <div className="logo-card square-card">
                <h3>Avatar (Square)</h3>
                <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/square.svg`} alt="Avatar" className="square-img" />
              </div>
            </div>

            <div className="mockups-section">
              <h2>Aplicações Reais (Mockups)</h2>
              <p>Simulação das assinaturas visuais em ambientes físicos.</p>
              
              <div className="mockups-grid">
                
                {/* T-SHIRT MOCKUP */}
                <div className="mockup-card">
                  <img src={`${import.meta.env.BASE_URL}mockups/tshirt.png`} alt="T-Shirt Mockup" className="mockup-bg" />
                  <div className="mockup-overlay tshirt-overlay">
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal-dark.svg`} alt="Logo" />
                  </div>
                </div>

                {/* VAN MOCKUP */}
                <div className="mockup-card">
                  <img src={`${import.meta.env.BASE_URL}mockups/van.png`} alt="Van Mockup" className="mockup-bg" />
                  <div className="mockup-overlay van-overlay">
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal.svg`} alt="Logo" />
                  </div>
                </div>

                {/* MUG MOCKUP */}
                <div className="mockup-card">
                  <img src={`${import.meta.env.BASE_URL}mockups/mug.png`} alt="Mug Mockup" className="mockup-bg" />
                  <div className="mockup-overlay mug-overlay">
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/icon.svg`} alt="Logo" />
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
