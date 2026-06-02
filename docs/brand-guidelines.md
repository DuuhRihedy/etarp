# Brand Guidelines — Grupo Etarp

Este documento oficializa o sistema de identidade visual do **Grupo Etarp**, projetado para garantir consistência B2B em todos os pontos de contato físicos e digitais.

---

## 🏗️ Arquitetura da Marca

O Grupo Etarp utiliza uma arquitetura de marca endossada. O "Grupo" é a holding que sustenta a confiança B2B, e cada unidade de negócio possui sua identidade única, porém unificada pela tipografia e estética geométrica moderna.

| Marca | Foco | Cores Base | Elemento Visual |
|---|---|---|---|
| **Grupo Etarp** | Holding Empresarial | Azul Marinho | Hexágono Circuito |
| **Etarp Etiquetas e Rótulos** | Indústria Gráfica | Azul Marinho + CMYK | Letra E com dobra (Curl) |
| **Etarp Automação** | Equipamentos e Software | Azul Marinho + Verde Lima | Hexágono dividido + Código de Barras |
| **Etarp Locações** | Locação de Equipamentos | (A definir) | (A definir) |

---

## 🎨 Paleta de Cores

O Azul Marinho (`#0D2B4E`) é a cor primária que unifica todas as marcas. As unidades de negócio usam cores de acento para criar diferenciação e contraste.

### Primárias (Todo o Grupo)
- **Azul Marinho:** `#0D2B4E` (Confiança, tecnologia e estabilidade)
- **Branco:** `#FFFFFF` (Clareza, respiro)
- **Preto/Dark:** `#1A1A1A` (Leituras densas)

### Acentos por Unidade
**Automação:**
- **Verde Lima:** `#7AC943` (Inovação, crescimento e eficiência)
- **Azul Aço:** `#566275` (Suporte, hardware)
- **Cinza Claro:** `#E6E9ED` (Fundos neutros)

**Etiquetas e Rótulos:**
- **Navy Escuro:** `#0D1324` (Base do E)
- **Magenta:** `#E6007E` (Cores de impressão)
- **Amarelo:** `#FFD200` (Cores de impressão)
- **Ciano:** `#00A8E1` (Cores de impressão)

---

## 🔠 Tipografia

A família tipográfica unificada para todas as marcas (Títulos e Logos) é a **Montserrat**.

- **Logotipo Principal (ETARP):** Montserrat Black (Weight 900)
- **Subtítulos de Unidade:** Montserrat Medium (Weight 500) com espaçamento de letras (letter-spacing: 0.3em).
- **Caixa:** O nome "ETARP" deve ser escrito **Sempre em CAIXA ALTA**, por tratar-se de uma abreviação.

---

## 📦 Inventário de SVGs

A pasta `logos/` contém todos os assets já exportados e otimizados em SVG para uso na web e impressos.

Para cada marca, as seguintes variações estão disponíveis:
1. `icon.svg` — O ícone isolado. Use como avatar pequeno ou marcador.
2. `horizontal.svg` — A versão principal. Ícone + Texto. Use em Headers e materiais institucionais (sobre fundos brancos/claros).
3. `horizontal-dark.svg` — A versão principal para fundos escuros (Onde "ETARP" fica branco).
4. `square.svg` — O ícone centralizado num container com fundo (Ideal para fotos de perfil do WhatsApp, Instagram, LinkedIn).
5. `mono.svg` (Pendente) — Versão em 1 só cor para carimbos ou impressões P&B.
6. `seal.svg` (Pendente) — Versão em selo/badge.

> **Importante:**
> Os SVGs não contêm as fontes embutidas fisicamente. Ao usar em CSS/HTML, garanta que a fonte `Montserrat` esteja sendo importada (via Google Fonts).

---

## 📏 Regras de Aplicação e Boas Práticas

1. **Área de Proteção:** Respeite uma margem equivalente a 50% da altura da letra "E" ao redor de todo o logotipo.
2. **Uso em Fundos:** Use sempre o `horizontal-dark.svg` em fundos Azul Marinho ou Preto. O `horizontal.svg` padrão deve ser usado exclusivamente sobre Branco ou tons muito pastéis.
3. **Não Distorça:** SVGs escalam infinitamente sem perder qualidade. Nunca altere a proporção (`aspect-ratio`) das imagens.
4. **Alinhamento:** Em peças conjuntas, alinhe as marcas pelo topo da letra "E", não pelo ícone, pois o ícone da Etiquetas tem uma curvatura que desce além da base.
