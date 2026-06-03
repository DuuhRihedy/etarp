import React, { useState } from 'react';
import { Barcode, Truck, Package, Settings, Printer, Headset, CheckCircle, ShieldCheck, Leaf } from 'lucide-react';
import './Branding.css';
import Container from '../components/layout/Container';

const brands = [
  {
    id: 'grupo',
    name: 'Grupo ETARP',
    folder: 'grupo-etarp',
    color1: '#0D2B4E',
    color2: '#0D2B4E',
    desc: 'O pilar corporativo que sustenta todas as operações do Grupo.',
    logoTitle: 'ETARP',
    logoSubtitle: 'GRUPO',
    iconSrc: 'logo-certo.svg',
    colors: [
      { name: 'AZUL ESCURO', hex: '#0D2B4E' },
      { name: 'BRANCO', hex: '#FFFFFF' }
    ],
    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #204C85 100%)'
  },
  {
    id: 'etiquetas',
    name: 'ETARP Etiquetas',
    folder: 'etarp-etiquetas',
    color1: '#0D1324',
    color2: '#0D1324',
    desc: 'Impressão que marca. Qualidade que permanece.',
    logoTitle: 'ETARP',
    logoSubtitle: 'ETIQUETAS E RÓTULOS',
    logoSlogan: 'IMPRESSÃO QUE MARCA. QUALIDADE QUE PERMANECE.',
    iconSrc: 'logo-certo-e-melhor.svg',
    colors: [
      { name: 'AZUL ESCURO', hex: '#0D1324' },
      { name: 'MAGENTA', hex: '#E6007E' },
      { name: 'AMARELO', hex: '#FFD200' },
      { name: 'CIANO', hex: '#00ABE1' },
      { name: 'PRETO', hex: '#1A1A1A' },
      { name: 'CINZA CLARO', hex: '#E9EAEC' }
    ],
    gradient: 'linear-gradient(90deg, #E6007E 0%, #FFD200 50%, #00ABE1 100%)'
  },
  {
    id: 'automacao',
    name: 'ETARP Automação',
    folder: 'etarp-automacao',
    color1: '#0D2B4E',
    color2: '#7AC943',
    desc: 'Conectando dados. Impulsionando resultados.',
    logoTitle: 'ETARP',
    logoSubtitle: 'AUTOMAÇÃO',
    iconFile: 'icon.svg',
    colors: [
      { name: 'AZUL MARINHO', hex: '#0D2B4E' },
      { name: 'VERDE LIMA', hex: '#7AC943' },
      { name: 'AZUL GRAFITE', hex: '#1E2A38' },
      { name: 'AZUL AÇO', hex: '#566275' },
      { name: 'CINZA CLARO', hex: '#E6E9ED' }
    ],
    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #7AC943 100%)'
  },
  {
    id: 'locacoes',
    name: 'ETARP Locações',
    folder: 'etarp-locacoes',
    color1: '#0D2B4E',
    color2: '#FF7A00',
    desc: 'Soluções inteligentes. Equipamentos de ponta.',
    logoTitle: 'ETARP',
    logoSubtitle: 'LOCAÇÕES',
    iconFile: 'icon.svg',
    colors: [
      { name: 'AZUL MARINHO', hex: '#0D2B4E' },
      { name: 'LARANJA', hex: '#FF7A00' },
      { name: 'LARANJA CLARO', hex: '#FFB885' },
      { name: 'CINZA CLARO', hex: '#E6E9ED' }
    ],
    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #FF7A00 100%)'
  }
];

const HtmlLogo = ({ brand, scale = 1 }) => {
  const isGrupo = brand.id === 'grupo';
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '24px', 
      justifyContent: 'center', 
      width: '100%',
      transform: `scale(${scale})`,
      transformOrigin: 'center'
    }}>
      <img 
        src={`${import.meta.env.BASE_URL}logos/${brand.iconSrc ? '_reference' : brand.folder}/${brand.iconSrc || 'icon.svg'}`} 
        alt="Icon" 
        style={{ height: '85px', width: 'auto', display: 'block' }} 
      />
      <div style={{ width: '2px', height: '70px', backgroundColor: brand.color1 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
        {isGrupo ? (
          <>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.34em', color: brand.color2 || brand.color1, marginBottom: '6px' }}>
              {brand.logoSubtitle}
            </div>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '52px', color: brand.color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
              {brand.logoTitle}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '52px', color: brand.color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
              {brand.logoTitle}
            </div>
            <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.34em', color: brand.color2 || brand.color1, marginTop: '6px' }}>
              {brand.logoSubtitle}
            </div>
          </>
        )}
        {brand.logoSlogan && (
          <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.15em', color: brand.color1, marginTop: '6px' }}>
            {brand.logoSlogan}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Branding() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <>
      <div className="branding-page">
        <section className="branding-hero">
          <Container>
            <h1>Brand Guidelines</h1>
            <p>Conheça a identidade visual oficial das marcas do Grupo ETARP.</p>
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

            <div className="brand-presentation-board">
              
              <div className="presentation-section top-section">
                <div className="presentation-badge">LOGO PRINCIPAL - MODO CLARO</div>
                <div className="main-logo-display">
                  <HtmlLogo brand={activeBrand} />
                </div>
              </div>
              
              <hr className="presentation-divider" />
              
              <div className="board-grid">
                
                <div className="board-panel">
                  <div className="presentation-badge">PALETA DE CORES</div>
                  <div className="colors-grid">
                    {activeBrand.colors.map((color, idx) => {
                      const isLight = color.hex.toUpperCase() === '#FFFFFF' || color.hex.toUpperCase() === '#FAFAFA';
                      return (
                        <div key={idx} className="color-swatch-wrapper">
                          <div className={`color-swatch ${isLight ? 'light' : ''}`} style={{ backgroundColor: color.hex }}></div>
                          <div className="color-name">{color.name}</div>
                          <div className="color-hex">{color.hex}</div>
                        </div>
                      );
                    })}
                  </div>
                  {activeBrand.gradient && (
                    <div style={{ marginTop: '30px' }}>
                      <div className="presentation-badge" style={{ marginBottom: '12px', fontSize: '10px' }}>GRADIENTE DE APOIO</div>
                      <div style={{ 
                        width: '100%', 
                        height: '40px', 
                        borderRadius: '20px', 
                        background: activeBrand.gradient,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                      }}></div>
                    </div>
                  )}
                </div>

                <div className="board-panel">
                  <div className="presentation-badge">TIPOGRAFIA</div>
                  <div className="typography-display">
                    <div className="typo-big-letters">Aa</div>
                    <div className="typo-details">
                      <div className="typo-name">MONTSERRAT</div>
                      <div className="typo-alphabet">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                        abcdefghijklmnopqrstuvwxyz<br/>
                        0123456789
                      </div>
                      <div className="typo-weights">
                        TÍTULOS: <strong>MONTSERRAT BLACK (900)</strong><br/>
                        SUBTÍTULOS E TEXTOS: <strong>MONTSERRAT MEDIUM (500)</strong>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <hr className="presentation-divider" />
              
              <div className="presentation-section bottom-section">
                <div className="presentation-badge">ÍCONES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginTop: '20px' }}>
                  {[
                    { icon: CheckCircle, label: 'QUALIDADE' },
                    { icon: Printer, label: 'IMPRESSÃO' },
                    { icon: Barcode, label: 'CÓDIGO DE BARRAS' },
                    { icon: Package, label: 'LOGÍSTICA' },
                    { icon: ShieldCheck, label: 'DURABILIDADE' },
                    { icon: Truck, label: 'FROTA' },
                    { icon: Settings, label: 'EQUIPAMENTO' },
                    { icon: Headset, label: 'ATENDIMENTO' },
                    { icon: Leaf, label: 'SUSTENTABILIDADE' }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100px' }}>
                        <Icon size={42} color={activeBrand.color1} strokeWidth={1.5} />
                        <span style={{ fontSize: '10px', fontWeight: 600, color: '#1A1A1A', textAlign: 'center', textTransform: 'uppercase' }}>
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>


            </div>

            <div className="applications-section" style={{ backgroundColor: '#0B1727', padding: '40px', borderRadius: '16px', marginTop: '60px' }}>
              <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '8px 24px', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '30px', letterSpacing: '0.05em' }}>
                APLICAÇÕES
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                
                {/* CARTÕES DE VISITA (CSS MOCKUP) */}
                <div style={{ backgroundColor: '#E9EAEC', borderRadius: '12px', overflow: 'hidden', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', width: '220px', height: '140px', backgroundColor: activeBrand.color1, transform: 'rotate(-8deg)', left: '40px', top: '100px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}></div>
                  <div style={{ position: 'absolute', width: '260px', height: '160px', backgroundColor: '#FFF', transform: 'rotate(4deg)', left: '80px', top: '70px', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ transform: 'scale(0.5)' }}>
                       <HtmlLogo brand={activeBrand} />
                    </div>
                  </div>
                </div>

                {/* MUG MOCKUP */}
                <div style={{ backgroundColor: '#E9EAEC', borderRadius: '12px', overflow: 'hidden', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <img src={`${import.meta.env.BASE_URL}mockups/mug.png`} alt="Mug" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.35)', opacity: 0.9 }}>
                      <HtmlLogo brand={activeBrand} />
                    </div>
                </div>

                {/* WEBSITE MOCKUP (CSS) */}
                <div style={{ backgroundColor: '#334155', borderRadius: '12px', overflow: 'hidden', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: '90%', height: '85%', backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                    <div style={{ height: '40px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between' }}>
                        <div style={{ transform: 'scale(0.25)', transformOrigin: 'left center' }}>
                          <HtmlLogo brand={activeBrand} />
                        </div>
                      <div style={{ display: 'flex', gap: '15px', fontSize: '9px', color: '#94A3B8', fontWeight: 500 }}>
                        <span>Home</span><span>Serviços</span><span>Sobre</span><span>Contato</span>
                      </div>
                    </div>
                    <div style={{ padding: '40px 30px', flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       <h3 style={{ color: '#FFF', fontSize: '24px', width: '80%', margin: '0 0 15px 0', lineHeight: 1.2, fontFamily: '"Montserrat", sans-serif', fontWeight: 800 }}>
                         Soluções de {activeBrand.name.split(' ')[1] || 'Inovação'}
                       </h3>
                       <p style={{ color: '#94A3B8', fontSize: '10px', width: '60%', marginBottom: '25px', lineHeight: 1.5 }}>
                         {activeBrand.desc}
                       </p>
                       <button style={{ backgroundColor: activeBrand.color2 || activeBrand.color1, color: '#FFF', border: 'none', padding: '8px 20px', borderRadius: '20px', fontSize: '10px', fontWeight: 700, width: 'fit-content' }}>
                         Saiba Mais
                       </button>
                    </div>
                  </div>
                </div>

                {/* VAN MOCKUP */}
                <div style={{ backgroundColor: '#E9EAEC', borderRadius: '12px', overflow: 'hidden', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <img src={`${import.meta.env.BASE_URL}mockups/van.png`} alt="Van" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '40%', left: '72%', transform: 'translate(-50%, -50%) scale(0.45)', opacity: 0.9 }}>
                    <HtmlLogo brand={activeBrand} />
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