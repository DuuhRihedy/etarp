# Plano de Correção — Identidade Visual Grupo Etarp

## Onde eu errei (Comparação com a Referência)

Após analisar **profundamente** a imagem de referência `WhatsApp Image 2026-05-22 at 07.12.01 (1).jpeg`, confirmo que o que eu gerei **não condiz em quase nada** com o que foi pedido. Aqui estão os pontos exatos do meu erro:

### 1. A Estrutura / Construção (O Padrão)
- **Referência:** O padrão exigido tem o Ícone à esquerda, uma **barra vertical fina (|)** de separação, e os textos à direita alinhados à esquerda. Debaixo de "ETIQUETAS E RÓTULOS" há o slogan "IMPRESSÃO QUE MARCA. QUALIDADE QUE PERMANECE."
- **Meu erro:** Eu não coloquei a barra vertical, não coloquei o slogan e centralizei os elementos de forma genérica.

### 2. O Erro Bizarro do Modo Escuro (Por que os ícones sumiram)
- **Referência:** Na seção "APLICAÇÕES EM MODO ESCURO", a base da letra "E" muda de Azul Escuro para **Branco**.
- **Meu erro:** Eu mantive o ícone na cor Azul Escuro e coloquei um fundo Azul Escuro atrás. Resultado: o ícone ficou invisível na sua tela (preto no preto). O mesmo erro aconteceu no "Ícone Quadrado".

### 3. O Desenho da Letra "E"
- **Referência:** A letra "E" tem cantos superiores chanfrados (cortados na diagonal no canto superior esquerdo e nas pontas das três barras). O "page curl" (dobra) ocupa um espaço bem maior e mais orgânico na base.
- **Meu erro:** Eu usei as coordenadas daquele SVG tracejado antigo que você mesmo disse que estava errado ("pintura estranha, borda não está retinha"). O "E" que eu gerei ficou quadrado, duro e totalmente fora das proporções elegantes do Brandbook real.

---

## Como vou consertar (Plano de Ação)

### Fase 1: O "E" Perfeito
Vou escrever um código SVG do zero, na mão, para desenhar a letra "E" **exatamente** como na imagem:
- Fazer os recortes diagonais (chanfros) nos cantos superiores.
- Refazer a dobra CMYK com as curvas exatas e gradientes mostrados na imagem.

### Fase 2: O Padrão de Construção (Aplicado às 3 Marcas)
Vou refazer o gerador Python para que todas as 3 marcas respeitem essa matemática exata:

```text
[ ÍCONE ]  |  ETARP
           |  SUB-MARCA
           |  SLOGAN (quando houver)
```

### Fase 3: A Lógica do Modo Escuro
- **Fundo Claro:** Ícone Azul Escuro (`#0D1324`) + Texto Azul Escuro.
- **Fundo Escuro:** Ícone **Branco** (`#FFFFFF`) + Texto **Branco**.
- Isso se aplicará ao "E" (Etiquetas), ao "Hexágono Circuito" (Grupo) e ao "Hexágono Automação".

### Fase 4: O Ícone Quadrado (Avatar)
- Em vez de um fundo branco com ícone escuro, o padrão do avatar da imagem de referência é: **Fundo Azul Escuro + Ícone Branco** (com a dobra CMYK mantendo as cores).

---

## Aguardando Autorização
Você me perdoa por esse deslize? Se você aprovar, eu vou reescrever toda a matemática dos SVGs agora mesmo para espelhar **exatamente** o layout dessa imagem.
