import json

def migrate_unidades():
    with open('src/data/unidades.json', 'r', encoding='utf-8') as f:
        unidades = json.load(f)

    for u in unidades:
        if u['id'] == 'foxone-software':
            u['id'] = 'etarp-locacoes'
            u['name'] = 'Etarp Locações'
            u['shortName'] = 'Locações'
            u['slug'] = '/etarp-locacoes'
            u['colorVar'] = 'var(--unit-locacoes)'
            u['colorHex'] = '#FF7A00'
            u['icon'] = 'Repeat'  # Loop/Rental icon
            u['description'] = 'Locação inteligente de equipamentos de coleta de dados e impressão. Reduza custos, elimine depreciação e mantenha sua operação rodando com suporte técnico incluso.'
            u['bullets'] = [
                'Coletores de Dados e Leitores',
                'Impressoras Térmicas e Etiquetas',
                'Backup garantido (Spare Part)'
            ]
            u['heroTitle'] = 'Aluguel Inteligente para sua Operação'
            u['heroLead'] = 'Não imobilize capital. Alugue os melhores equipamentos de automação com manutenção inclusa e garantia de substituição em caso de falha.'
            
            u['services'] = [
                {
                    "title": "Coletores de Dados",
                    "description": "Locação de coletores modernos (Android) para logística e varejo. Diversos modelos e formatos de leitura.",
                    "icon": "Smartphone"
                },
                {
                    "title": "Impressoras Térmicas",
                    "description": "Impressoras desktop e industriais para etiquetas e códigos de barras com manutenção inclusa.",
                    "icon": "Printer"
                },
                {
                    "title": "Leitores de Código de Barras",
                    "description": "Leitores 1D/2D, com e sem fio, para ponto de venda e controle de estoque.",
                    "icon": "Scan"
                },
                {
                    "title": "Equipamentos de Backup",
                    "description": "Spare part incluso. Quebrou, trocou. Sua operação não para nunca.",
                    "icon": "RefreshCcw"
                },
                {
                    "title": "Manutenção SLA",
                    "description": "Equipe técnica dedicada e suporte remoto rápido, garantido em contrato.",
                    "icon": "Wrench"
                },
                {
                    "title": "Atualização Tecnológica",
                    "description": "Ao fim do contrato, renove com equipamentos de última geração sem custos absurdos.",
                    "icon": "ArrowUpCircle"
                }
            ]
            u['faq'] = [
                {
                    "question": "Qual o tempo mínimo de contrato?",
                    "answer": "Trabalhamos com contratos flexíveis, desde locações curtas para inventários (sazonais) até contratos de 12 a 36 meses."
                },
                {
                    "question": "O que acontece se o equipamento quebrar?",
                    "answer": "Nosso contrato prevê Spare Part (equipamento de backup). Caso não possa ser resolvido remotamente, enviamos uma peça de reposição imediatamente."
                },
                {
                    "question": "A manutenção já está inclusa no valor?",
                    "answer": "Sim. Todos os custos de manutenção preventiva e corretiva por desgaste natural estão cobertos pelo contrato."
                },
                {
                    "question": "Posso comprar os equipamentos ao final do contrato?",
                    "answer": "Dependendo da modalidade do contrato, oferecemos condições facilitadas para a aquisição do parque tecnológico."
                },
                {
                    "question": "Quais marcas vocês alugam?",
                    "answer": "Trabalhamos com os melhores parceiros do mercado global, focando em equipamentos robustos e homologados."
                }
            ]

    with open('src/data/unidades.json', 'w', encoding='utf-8') as f:
        json.dump(unidades, f, ensure_ascii=False, indent=2)

def migrate_solucoes():
    with open('src/data/solucoes.json', 'r', encoding='utf-8') as f:
        solucoes = json.load(f)

    # We will just rewrite the 6 solutions of foxone-software
    new_services = [
        {
            "name": "Locação de Coletores",
            "description": "Aluguel de coletores de dados Android robustos para chão de fábrica e logística.",
            "details": "Modelos com leitura 1D/2D, baterias de longa duração e opções de hand-strap."
        },
        {
            "name": "Locação de Impressoras",
            "description": "Impressoras térmicas Zebra, Argox e outras para alto volume de impressão.",
            "details": "Inclui instalação, calibração e suporte técnico prioritário."
        },
        {
            "name": "Leitores e Scanners",
            "description": "Leitores de código de barras para PDV e centros de distribuição.",
            "details": "Leitura rápida e precisa. Opções bluetooth ou cabeado."
        },
        {
            "name": "Locação para Inventário",
            "description": "Contratos curtos e pontuais para épocas de balanço e alta sazonalidade.",
            "details": "Aumente seu parque produtivo temporariamente sem imobilizar capital."
        },
        {
            "name": "Spare Part (Backup)",
            "description": "Equipamentos de reserva disponíveis para substituição imediata.",
            "details": "Garantia de operação sem paradas (downtime zero) por quebra de máquina."
        },
        {
            "name": "Outsourcing Completo",
            "description": "Terceirização integral do seu parque de identificação e automação.",
            "details": "Nós cuidamos da tecnologia, manutenção e renovação. Você foca no seu negócio."
        }
    ]

    idx = 0
    for s in solucoes:
        if s['unit'] == 'foxone-software':
            s['unit'] = 'etarp-locacoes'
            if idx < len(new_services):
                s['name'] = new_services[idx]['name']
                s['description'] = new_services[idx]['description']
                s['details'] = new_services[idx]['details']
                idx += 1

    with open('src/data/solucoes.json', 'w', encoding='utf-8') as f:
        json.dump(solucoes, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    migrate_unidades()
    migrate_solucoes()
    print("JSON files migrated successfully.")
