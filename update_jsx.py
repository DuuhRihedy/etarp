import re

def rewrite_jsx():
    with open('src/pages/Branding.jsx', 'r', encoding='utf-8') as f:
        s = f.read()

    new_content = """const HtmlLogo = ({ brand, scale = 1 }) => {
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
        src={`${import.meta.env.BASE_URL}logos/${isGrupo ? '_reference' : brand.folder}/${brand.iconSrc || 'icon.svg'}`} 
        alt="Icon" 
        style={{ height: '85px', width: 'auto', display: 'block' }} 
      />
      <div style={{ width: '2px', height: '70px', backgroundColor: brand.color1 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
        <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 900, fontSize: '52px', color: brand.color1, lineHeight: '0.9', letterSpacing: '0.02em', margin: 0 }}>
          {brand.logoTitle}
        </div>
        <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '15px', letterSpacing: '0.34em', color: brand.color2 || brand.color1, marginTop: '6px' }}>
          {brand.logoSubtitle}
        </div>
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
                <div className="presentation-badge">MARCA SIMPLIFICADA / VARIAÇÕES</div>
                <div className="variations-grid">
                  <div className="variation-item">
                    <div className="variation-image-container">
                      <HtmlLogo brand={activeBrand} scale={0.55} />
                    </div>
                    <div className="variation-label">HORIZONTAL</div>
                  </div>
                  <div className="variation-item">
                    <div className="variation-image-container">
                      <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/icon.svg?v=4`} alt="Ícone Isolado" className="only-icon" />
                    </div>
                    <div className="variation-label">ÍCONE ISOLADO</div>
                  </div>
                  <div className="variation-item">
                    <div className="variation-image-container">
                      <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/square.svg?v=4`} alt="Ícone Quadrado" className="square-img-var" />
                    </div>
                    <div className="variation-label">ÍCONE QUADRADO</div>
                  </div>
                </div>
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
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal-dark.svg?v=4`} alt="Logo" />
                  </div>
                </div>

                {/* VAN MOCKUP */}
                <div className="mockup-card">
                  <img src={`${import.meta.env.BASE_URL}mockups/van.png`} alt="Van Mockup" className="mockup-bg" />
                  <div className="mockup-overlay van-overlay">
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/horizontal.svg?v=4`} alt="Logo" />
                  </div>
                </div>

                {/* MUG MOCKUP */}
                <div className="mockup-card">
                  <img src={`${import.meta.env.BASE_URL}mockups/mug.png`} alt="Mug Mockup" className="mockup-bg" />
                  <div className="mockup-overlay mug-overlay">
                    <img src={`${import.meta.env.BASE_URL}logos/${activeBrand.folder}/icon.svg?v=4`} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}"""

    s = re.sub(r'const HtmlLogoEtiquetas.*?export default function Branding\(\) \{.*', new_content, s, flags=re.DOTALL)
    with open('src/pages/Branding.jsx', 'w', encoding='utf-8') as f:
        f.write(s)

rewrite_jsx()
