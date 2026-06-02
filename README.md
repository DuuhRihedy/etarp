# Grupo Etarp — Novo Site Institucional B2B

Este repositório contém a reformulação completa do portal do **Grupo Etarp**, consolidando 21 páginas legadas em uma plataforma B2B moderna, limpa, robusta e responsiva, inspirada nos padrões estéticos **V360, Senior Sistemas e TOTVS Cloud**. O ecossistema abrange as unidades de Etiquetas, Automação e Locações.

## 🚀 Como Executar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org) (v18 ou superior) instalado em sua máquina.

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abrir no navegador:**
   Acesse a URL informada no terminal (normalmente `http://localhost:5173/etarp/`).

---

## 📦 Como Realizar o Deploy

O deploy é configurado para ser 100% automatizado via **GitHub Actions** em cada push para a branch `main`.

Se preferir realizar o deploy manual pelo terminal:
```bash
npm run deploy
```

O site estará acessível no domínio oficial de testes do GitHub Pages:
[duuhrihedy.github.io/etarp](https://duuhrihedy.github.io/etarp)

---

## 🛠️ Tecnologias e Stack Técnico

- **Core:** React 18, React Router 6, Vite.
- **Estética & Estilo:** CSS Puro customizado (Custom Properties), importação local de fontes de alta performance do Google Fonts via Fontsource (`@fontsource/inter`, `@fontsource/space-grotesk`, `@fontsource/jetbrains-mono`), Lucide React para iconografia leve e moderna.
- **Acessibilidade (A11y):** Navegação por teclado assistida, foco visível de alto contraste (`--etarp-cyan`), contraste em conformidade com as diretrizes WCAG e semântica HTML estruturada.
- **SEO:** Title, Description e OpenGraph tags customizadas e injetadas por rota para excelente ranqueamento orgânico.

---

## 📂 Estrutura do Projeto

```
etarp/
├── .github/workflows/deploy.yml   # Deploy automatizado do GitHub Actions
├── public/
│   └── favicon.svg                # Favicon com monograma "EG"
├── src/
│   ├── main.jsx                   # Entrypoint com imports locais de fontes e CSS global
│   ├── App.jsx                    # Shell da aplicação (Header, Main, Footer e ScrollToTop)
│   ├── routes.jsx                 # Configuração das 9 rotas da aplicação
│   ├── styles/
│   │   ├── tokens.css             # Paleta de cores, tipografia, espaçamentos e raios B2B
│   │   ├── reset.css              # Reset moderno e reset de foco
│   │   └── global.css             # Estilos compartilhados e classes utilitárias
│   ├── components/
│   │   ├── layout/                # Header sticky, Footer e Containers
│   │   ├── ui/                    # Botões primários/ghost, Cards interativos, Sections, Eyebrows
│   │   └── sections/              # Seções da Home (Hero, KPI com CountUp, Segments, Differentials)
│   ├── pages/                     # Todas as 9 telas institucionais e 404
│   ├── data/                      # Estruturas JSON integradas com placeholders nomeados
│   └── hooks/                     # Custom hooks (IntersectionObserver para KPI e ScrollSpy)
├── docs/
│   ├── site-audit.md              # Mapeamento do site legado para as novas rotas consolidadas
│   └── CONTEUDO-PENDENTE.md       # Lista completa dos placeholders de dados de negócio B2B
└── package.json                   # Dependências e scripts de automação
```

---

## 🛡️ Regras de Dados B2B e Governança

Para evitar a invenção de dados corporativos ou depoimentos, toda informação não-pública foi parametrizada utilizando placeholders nomeados. A lista completa com os dados a serem solicitados ao cliente final pode ser acessada em [docs/CONTEUDO-PENDENTE.md](./docs/CONTEUDO-PENDENTE.md).

Para entender a consolidação das 21 páginas legadas em nosso fluxo simplificado de 9 rotas, acesse a [Auditoria de Rotas](./docs/site-audit.md).
