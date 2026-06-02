# Lista de Conteúdo Pendente e Placeholders — Grupo Etarp

Para garantir conformidade com as regras de desenvolvimento e evitar a invenção de dados corporativos ou depoimentos fictícios, o site foi desenvolvido utilizando a notação standard de placeholders `{{PLACEHOLDER_NOMEADO}}`.

Abaixo estão todos os placeholders mapeados e prontos para serem substituídos por dados de produção:

## 📊 KPIs Institucionais (Home Page)

| Placeholder | Contexto de Uso | Descrição |
| :--- | :--- | :--- |
| `25` | `KpiBar.jsx` | Anos de mercado / atuação no segmento B2B. |
| `800` | `KpiBar.jsx` | Número total de clientes ativos atendidos. |
| `5` | `KpiBar.jsx` | Volume total de etiquetas produzidas por mês (em milhões). |
| `18` | `KpiBar.jsx` | Quantidade de estados atendidos em território nacional. |

## 🏭 Insumos e Automação (Hubs de Unidade)

| Placeholder | Arquivo | Contexto / Uso |
| :--- | :--- | :--- |
| `{{PRAZO_ENTREGA_ETIQUETAS}}` | `unidades.json` | Prazo médio de entrega de lotes industriais de etiquetas. |
| `{{PEDIDO_MINIMO_ETIQUETAS}}` | `unidades.json` | Pedido mínimo em metros quadrados ou tiragem para flexografia. |
| `{{PRAZO_WMS}}` | `unidades.json` | Prazo de entrega/implantação de projetos WMS. |
| `{{PRAZO_LOCACAO_ETARP}}` | `unidades.json` | Tempo médio para entrega de projetos e locações. |

## 👥 Liderança e Governança (`/grupo`)

| Placeholder | Arquivo | Função / Destino |
| :--- | :--- | :--- |
| `{{NOME_DIRETOR_1}}` | `Grupo.jsx` | Nome do Diretor Executivo. |
| `{{NOME_DIRETOR_2}}` | `Grupo.jsx` | Nome do Diretor de Operações. |
| `{{NOME_DIRETOR_3}}` | `Grupo.jsx` | Nome do Diretor de Tecnologia. |

## 🤝 Cases de Sucesso (`/cases`)

| Placeholder | Arquivo | Contexto do Case |
| :--- | :--- | :--- |
| `{{CLIENTE_1}}` a `{{CLIENTE_8}}` | `cases.json` | Nome fantasia ou razão social dos clientes parceiros. |
| `{{RESULTADO_CASE_1}}` | `cases.json` | Resultado obtido (Ex: "Redução de 40% em erros de separação"). |
| `{{RESULTADO_CASE_2}}` | `cases.json` | Resultado obtido (Ex: "Redução de 15% em custos de frete"). |
| `{{RESULTADO_CASE_3}}` | `cases.json` | Resultado obtido (Ex: "Aumento de 50% na velocidade da expedição"). |
| `{{RESULTADO_CASE_4}}` | `cases.json` | Resultado obtido (Ex: "Rastreabilidade de 100% dos ativos em tempo real"). |
| `{{RESULTADO_CASE_5}}` | `cases.json` | Resultado obtido (Ex: "Redução de 95% em inconsistências de ponto"). |
| `{{RESULTADO_CASE_6}}` | `cases.json` | Resultado obtido (Ex: "Aumento de 30% na produtividade das vendas"). |
| `{{RESULTADO_CASE_7}}` | `cases.json` | Resultado obtido (Ex: "Acuracidade de estoque de 99.8%"). |
| `{{RESULTADO_CASE_8}}` | `cases.json` | Resultado obtido (Ex: "Zero paradas de linha por falta de insumos"). |

## 🏢 Dados Legais (Footer)

| Placeholder | Arquivo | Função / Destino |
| :--- | :--- | :--- |
| `{{CNPJ_GRUPO_ETARP}}` | `Footer.jsx` | CNPJ oficial do Grupo Etarp. |
