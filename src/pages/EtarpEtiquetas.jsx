import React from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import CtaBlock from '../components/sections/CtaBlock';
import unidades from '../data/unidades.json';
import './Hub.css';

export default function EtarpEtiquetas() {
  const unit = unidades.find(u => u.id === 'etarp-etiquetas');
  if (!unit) return null;

  return (
    <div className="hub-page">
      {/* Visual top indicator bar */}
      <div className="hub-page__top-bar" style={{ backgroundColor: unit.colorHex }}></div>

      {/* Hero Section */}
      <header className="hub-hero">
        <div className="hub-hero__container">
          <img src={`${import.meta.env.BASE_URL}etarp-etiquetas.png`} alt="Etarp Etiquetas" className="hub-hero__logo" height="60" style={{ marginBottom: 'var(--space-4)', maxWidth: '100%', height: 'auto' }} />
          <h1 className="hub-hero__title">{unit.heroTitle}</h1>
          <p className="lead hub-hero__lead">{unit.heroLead}</p>
          <div className="hub-hero__actions">
            <Button variant="inverse" href="/contato" size="lg">Solicitar Orçamento</Button>
            <Button variant="ghost-inverse" href="#servicos" size="lg">Conhecer Serviços</Button>
          </div>
        </div>
      </header>

      {/* What we do */}
      <Section id="servicos" bg="alt">
        <div className="hub-section-header">
          <Eyebrow>O QUE FAZEMOS</Eyebrow>
          <h2>Soluções completas sob medida</h2>
        </div>
        <div className="hub-services-grid">
          {unit.services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Tag;
            return (
              <Card key={index} className="hub-service-card">
                <div className="hub-service-card__icon" style={{ color: unit.colorHex }}>
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Gallery/Portfolio Section */}
      <Section id="galeria" bg="white">
        <div className="hub-section-header">
          <Eyebrow>PORTFÓLIO E INFRAESTRUTURA</Eyebrow>
          <h2>Entrega em escala e precisão industrial</h2>
        </div>
        <div className="hub-gallery-grid">
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Printer size={48} className="hub-gallery-item__icon" />
              <span>Linha de Produção Flexográfica</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Tag size={48} className="hub-gallery-item__icon" />
              <span>Etiquetas Técnicas e de Gôndola</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Layers size={48} className="hub-gallery-item__icon" />
              <span>Rótulos Personalizados com Hot Stamping</span>
            </div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="operacao" bg="tint">
        <div className="hub-section-header">
          <Eyebrow>COMO TRABALHAMOS</Eyebrow>
          <h2>Do contato inicial ao suporte contínuo</h2>
        </div>
        <div className="hub-steps">
          <div className="hub-step">
            <div className="hub-step__num">01</div>
            <h4>Briefing e Análise</h4>
            <p>Entendemos as especificações técnicas, materiais e volumes necessários.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">02</div>
            <h4>Proposta e Amostra</h4>
            <p>Desenvolvemos a cotação e enviamos amostras de materiais para testes de aplicação.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">03</div>
            <h4>Produção Industrial</h4>
            <p>Impressão em alta velocidade na nossa fábrica própria sob rigoroso controle de qualidade.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">04</div>
            <h4>Entrega e Assistência</h4>
            <p>Logística ágil e garantia de compatibilidade com seus equipamentos térmicos.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="white">
        <div className="hub-section-header">
          <Eyebrow>DÚVIDAS FREQUENTES</Eyebrow>
          <h2>Perguntas frequentes sobre nossa produção</h2>
        </div>
        <div className="hub-faq-wrapper">
          <Accordion items={unit.faq} />
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        title="Fale com a equipe de Etiquetas e Rótulos"
        lead="Desenvolva seu projeto gráfico com quem entende de escala, precisão e confiabilidade industrial."
        primaryText="Orçamento Sem Compromisso"
      />
    </div>
  );
}
