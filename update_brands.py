import re

def update_branding_js():
    s = open('src/pages/Branding.jsx', 'r', encoding='utf-8').read()
    
    new_brands = """const brands = [
  {
    id: 'grupo',
    name: 'Grupo Etarp',
    folder: 'grupo-etarp',
    color1: '#0D2B4E',
    color2: '#0D2B4E',
    desc: 'O pilar corporativo que sustenta todas as operações do Grupo.',
    logoTitle: 'GRUPO',
    logoSubtitle: 'ETARP',
    iconSrc: 'logo-certo.svg',
    colors: [
      { name: 'AZUL ESCURO', hex: '#0D2B4E' },
      { name: 'BRANCO', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'etiquetas',
    name: 'Etarp Etiquetas',
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
    ]
  },
  {
    id: 'automacao',
    name: 'Etarp Automação',
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
    ]
  },
  {
    id: 'locacoes',
    name: 'Etarp Locações',
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
    ]
  }
];"""

    s = re.sub(r'const brands = \[.*?\];', new_brands, s, flags=re.DOTALL)
    open('src/pages/Branding.jsx', 'w', encoding='utf-8').write(s)

update_branding_js()
