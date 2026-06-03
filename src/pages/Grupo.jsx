import React from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import CtaBlock from '../components/sections/CtaBlock';
import './Grupo.css';

export default function Grupo() {
  return (
    <div className="grupo-page">
      {/* Hero Section */}
      <header className="grupo-hero">
        <div className="grupo-hero__container">
          <Eyebrow>SOBRE O GRUPO</Eyebrow>
          <h1>Do rótulo ao sistema que governa sua operação</h1>
          <p className="lead">Conectamos hardware de automação, etiquetas autoadesivas industriais e desenvolvimento de software sob medida em uma única operação integrada.</p>
        </div>
      </header>

      {/* Mission / Vision / Values */}
      <Section id="mvs" bg="alt">
        <div className="mvs-grid">
          <Card className="mvs-card">
            <Icons.Target size={32} className="mvs-icon" />
            <h3>Missão</h3>
            <p>Aprimorar ideias e gerar soluções industriais e tecnológicas integradas que facilitem a operação, rastreabilidade e eficiência dos nossos clientes.</p>
          </Card>
          <Card className="mvs-card">
            <Icons.Eye size={32} className="mvs-icon" />
            <h3>Visão</h3>
            <p>Ser referência nacional como o principal grupo industrial-tech que entrega soluções ponta a ponta, unindo insumos físicos a sistemas inteligentes.</p>
          </Card>
          <Card className="mvs-card">
            <Icons.Award size={32} className="mvs-icon" />
            <h3>Valores</h3>
            <p>Confiabilidade técnica, precisão industrial, agilidade nas entregas, inovação orientada ao cliente e integridade em todas as parcerias.</p>
          </Card>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" bg="white">
        <div className="hub-section-header">
          <Eyebrow>NOSSA HISTÓRIA</Eyebrow>
          <h2>Construindo confiança década após década</h2>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="timeline-year">1990s</div>
            <div className="timeline-content">
              <h4>Fundação da Etarp Etiquetas</h4>
              <p>Nascimento da fábrica própria em Ribeirão Preto, focada em atender a demanda regional por etiquetas e rótulos flexográficos de alta qualidade.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2000s</div>
            <div className="timeline-content">
              <h4>Expansão para Automação Comercial</h4>
              <p>Início da distribuição de impressoras térmicas e leitores de código de barras. Lançamento dos modelos de comodato para suprimentos.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010s</div>
            <div className="timeline-content">
              <h4>Fundação da Etarp Locações</h4>
              <p>Criação do braço de terceirização do grupo para responder à necessidade crescente de redução de custos com imobilizado, fornecendo equipamentos como serviço (HaaS).</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020s</div>
            <div className="timeline-content">
              <h4>Integração 360°</h4>
              <p>Consolidação do posicionamento do Grupo Etarp como provedor integral para grandes indústrias, redes varejistas e operadores logísticos no Brasil.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Placeholders */}
      <Section id="equipe" bg="alt">
        <div className="hub-section-header">
          <Eyebrow>LIDERANÇA</Eyebrow>
          <h2>Quem direciona nossa missão</h2>
        </div>
        <div className="team-grid">
          <Card className="team-card">
            <div className="team-avatar-placeholder">
              <Icons.User size={40} className="team-avatar-icon" />
            </div>
            <h4>{"{{NOME_DIRETOR_1}}"}</h4>
            <p className="team-role">Diretoria Executiva</p>
          </Card>
          <Card className="team-card">
            <div className="team-avatar-placeholder">
              <Icons.User size={40} className="team-avatar-icon" />
            </div>
            <h4>{"{{NOME_DIRETOR_2}}"}</h4>
            <p className="team-role">Diretoria de Operações</p>
          </Card>
          <Card className="team-card">
            <div className="team-avatar-placeholder">
              <Icons.User size={40} className="team-avatar-icon" />
            </div>
            <h4>{"{{NOME_DIRETOR_3}}"}</h4>
            <p className="team-role">Diretoria de Tecnologia</p>
          </Card>
        </div>
      </Section>

      {/* CTA Final */}
      <CtaBlock
        title="Quer fazer parte desta história ou automatizar seu negócio?"
        lead="Nossos especialistas estão prontos para avaliar a infraestrutura e os fluxos de trabalho da sua empresa."
        primaryText="Falar Conosco"
      />
    </div>
  );
}
