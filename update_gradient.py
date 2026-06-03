import re

def update_brands_gradients():
    with open('src/pages/Branding.jsx', 'r', encoding='utf-8') as f:
        s = f.read()

    # Add gradient property to each brand object based on their primary/secondary colors
    s = s.replace(
        "    colors: [\n      { name: 'AZUL ESCURO', hex: '#0D2B4E' },\n      { name: 'BRANCO', hex: '#FFFFFF' }\n    ]",
        "    colors: [\n      { name: 'AZUL ESCURO', hex: '#0D2B4E' },\n      { name: 'BRANCO', hex: '#FFFFFF' }\n    ],\n    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #204C85 100%)'"
    )
    s = s.replace(
        "    colors: [\n      { name: 'AZUL ESCURO', hex: '#0D1324' },\n      { name: 'MAGENTA', hex: '#E6007E' },\n      { name: 'AMARELO', hex: '#FFD200' },\n      { name: 'CIANO', hex: '#00ABE1' },\n      { name: 'PRETO', hex: '#1A1A1A' },\n      { name: 'CINZA CLARO', hex: '#E9EAEC' }\n    ]",
        "    colors: [\n      { name: 'AZUL ESCURO', hex: '#0D1324' },\n      { name: 'MAGENTA', hex: '#E6007E' },\n      { name: 'AMARELO', hex: '#FFD200' },\n      { name: 'CIANO', hex: '#00ABE1' },\n      { name: 'PRETO', hex: '#1A1A1A' },\n      { name: 'CINZA CLARO', hex: '#E9EAEC' }\n    ],\n    gradient: 'linear-gradient(90deg, #E6007E 0%, #FFD200 50%, #00ABE1 100%)'"
    )
    s = s.replace(
        "    colors: [\n      { name: 'AZUL MARINHO', hex: '#0D2B4E' },\n      { name: 'VERDE LIMA', hex: '#7AC943' },\n      { name: 'AZUL GRAFITE', hex: '#1E2A38' },\n      { name: 'AZUL AÇO', hex: '#566275' },\n      { name: 'CINZA CLARO', hex: '#E6E9ED' }\n    ]",
        "    colors: [\n      { name: 'AZUL MARINHO', hex: '#0D2B4E' },\n      { name: 'VERDE LIMA', hex: '#7AC943' },\n      { name: 'AZUL GRAFITE', hex: '#1E2A38' },\n      { name: 'AZUL AÇO', hex: '#566275' },\n      { name: 'CINZA CLARO', hex: '#E6E9ED' }\n    ],\n    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #7AC943 100%)'"
    )
    s = s.replace(
        "    colors: [\n      { name: 'AZUL MARINHO', hex: '#0D2B4E' },\n      { name: 'LARANJA', hex: '#FF7A00' },\n      { name: 'LARANJA CLARO', hex: '#FFB885' },\n      { name: 'CINZA CLARO', hex: '#E6E9ED' }\n    ]",
        "    colors: [\n      { name: 'AZUL MARINHO', hex: '#0D2B4E' },\n      { name: 'LARANJA', hex: '#FF7A00' },\n      { name: 'LARANJA CLARO', hex: '#FFB885' },\n      { name: 'CINZA CLARO', hex: '#E6E9ED' }\n    ],\n    gradient: 'linear-gradient(90deg, #0D2B4E 0%, #FF7A00 100%)'"
    )

    # Now we need to render the gradient in the UI.
    # Look for the closing tag of colors-grid and insert the gradient pill.
    ui_insert = """                  </div>
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
                </div>"""
                
    s = re.sub(r'                  </div>\s*</div>\s*<div className="board-panel">', ui_insert + '\n\n                <div className="board-panel">', s)

    with open('src/pages/Branding.jsx', 'w', encoding='utf-8') as f:
        f.write(s)

update_brands_gradients()
