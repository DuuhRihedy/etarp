import React from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import CtaBlock from '../components/sections/CtaBlock';
import HtmlLogo from '../components/ui/HtmlLogo';
import unidades from '../data/unidades.json';
import './Hub.css';

export default function EtarpAutomacao() {
  const unit = unidades.find(u => u.id === 'etarp-automacao');
  if (!unit) return null;

  return (
    <div className="hub-page">
      {/* Visual top indicator bar */}
      <div className="hub-page__top-bar" style={{ backgroundColor: unit.colorHex }}></div>

      {/* Hero Section */}
      <header className="hub-hero">
        <div className="hub-hero__container">
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <HtmlLogo brand={{ id: 'automacao', folder: 'etarp-automacao', color1: '#0D2B4E', color2: '#7AC943', logoTitle: 'ETARP', logoSubtitle: 'AUTOMAÇÃO COMERCIAL' }} scale={0.7} withBadge={true} />
          </div>
          <h1 className="hub-hero__title">{unit.heroTitle}</h1>
          <p className="lead hub-hero__lead">{unit.heroLead}</p>
          <div className="hub-hero__actions">
            <Button variant="inverse" href="/contato" size="lg">Falar com Consultor</Button>
            <Button variant="ghost-inverse" href="#servicos" size="lg">Modelos de Contrato</Button>
          </div>
        </div>
      </header>

      {/* What we do */}
      <Section id="servicos" bg="alt">
        <div className="hub-section-header">
          <Eyebrow>EQUIPAMENTOS E PROJETOS</Eyebrow>
          <h2>Infraestrutura robusta para sua operação</h2>
        </div>
        <div className="hub-services-grid">
          {unit.services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.ScanBarcode;
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

      {/* Portfolio / Showcase */}
      <Section id="galeria" bg="white">
        <div className="hub-section-header">
          <Eyebrow>CATÁLOGO DE HARDWARE</Eyebrow>
          <h2>Equipamentos de alta performance</h2>
        </div>
        <div className="hub-gallery-grid">
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Printer size={48} className="hub-gallery-item__icon" />
              <span>Linha de Impressoras Térmicas</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Smartphone size={48} className="hub-gallery-item__icon" />
              <span>Coletores de Dados Robustos</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Clock size={48} className="hub-gallery-item__icon" />
              <span>Relógios de Ponto REP</span>
            </div>
          </div>
        </div>
      </Section>

      {/* How we hire/model */}
      <Section id="operacao" bg="tint">
        <div className="hub-section-header">
          <Eyebrow>MODELOS DE CONTRATAÇÃO</Eyebrow>
          <h2>Flexibilidade total para seu fluxo de caixa</h2>
        </div>
        <div className="hub-steps">
          <div className="hub-step">
            <div className="hub-step__num">01</div>
            <h4>Venda Direta</h4>
            <p>Aquisição definitiva de equipamentos com faturamento facilitado e suporte técnico inicial.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">02</div>
            <h4>Comodato de Impressoras</h4>
            <p>Hardware cedido sem custo inicial, atrelado ao consumo mensal de nossas etiquetas.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">03</div>
            <h4>Locação Mensal</h4>
            <p>Mensalidade fixa com substituição rápida de equipamentos (backup) e suporte 100% incluso.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">04</div>
            <h4>Projetos Turnkey</h4>
            <p>Entregamos a solução completa: WMS/RFID + Coletores + Infraestrutura + Suporte.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="white">
        <div className="hub-section-header">
          <Eyebrow>DÚVIDAS FREQUENTES</Eyebrow>
          <h2>Tudo o que você precisa saber sobre comodato e suporte</h2>
        </div>
        <div className="hub-faq-wrapper">
          <Accordion items={unit.faq} />
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        title="Fale com a equipe de Automação Comercial"
        lead="Escolha o melhor modelo para sua empresa: compra, locação ou comodato de impressoras e coletores."
        primaryText="Falar com Especialista"
      />
    </div>
  );
}
