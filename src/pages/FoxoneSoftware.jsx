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

export default function FoxoneSoftware() {
  const unit = unidades.find(u => u.id === 'foxone-software');
  if (!unit) return null;

  return (
    <div className="hub-page">
      {/* Visual top indicator bar */}
      <div className="hub-page__top-bar" style={{ backgroundColor: unit.colorHex }}></div>

      {/* Hero Section */}
      <header className="hub-hero">
        <div className="hub-hero__container">
          <Eyebrow color="cyan">DESENVOLVIMENTO DE SOFTWARE</Eyebrow>
          <h1 className="hub-hero__title">{unit.heroTitle}</h1>
          <p className="lead hub-hero__lead">{unit.heroLead}</p>
          <div className="hub-hero__actions">
            <Button variant="inverse" href="/contato" size="lg">Agendar Diagnóstico</Button>
            <Button variant="ghost-inverse" href="#servicos" size="lg">Nossas Tecnologias</Button>
          </div>
        </div>
      </header>

      {/* What we do */}
      <Section id="servicos" bg="alt">
        <div className="hub-section-header">
          <Eyebrow>O QUE FAZEMOS</Eyebrow>
          <h2>Sistemas sob medida e integrações complexas</h2>
        </div>
        <div className="hub-services-grid">
          {unit.services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Code2;
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
          <Eyebrow>PORTFÓLIO DE PROJETOS</Eyebrow>
          <h2>Aplicações corporativas modernas</h2>
        </div>
        <div className="hub-gallery-grid">
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Smartphone size={48} className="hub-gallery-item__icon" />
              <span>Desenvolvimento de Apps Mobile</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.Monitor size={48} className="hub-gallery-item__icon" />
              <span>Sistemas Desktop e Retaguarda</span>
            </div>
          </div>
          <div className="hub-gallery-item">
            <div className="hub-gallery-item__placeholder">
              <Icons.LayoutDashboard size={48} className="hub-gallery-item__icon" />
              <span>Dashboards e BI em Tempo Real</span>
            </div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="operacao" bg="tint">
        <div className="hub-section-header">
          <Eyebrow>COMO DESENVOLVEMOS</Eyebrow>
          <h2>Metodologia ágil focada em resultados práticos</h2>
        </div>
        <div className="hub-steps">
          <div className="hub-step">
            <div className="hub-step__num">01</div>
            <h4>Levantamento e UX</h4>
            <p>Mapeamos os processos, definimos os requisitos e desenhamos as telas do sistema.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">02</div>
            <h4>Desenvolvimento Ágil</h4>
            <p>Codificação em sprints com entregas parciais para que você acompanhe a evolução real.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">03</div>
            <h4>Homologação e Testes</h4>
            <p>Testes rigorosos de segurança, estabilidade e integração com hardware de automação.</p>
          </div>
          <div className="hub-step">
            <div className="hub-step__num">04</div>
            <h4>Deploy e Suporte</h4>
            <p>Lançamento do sistema, treinamento dos usuários e contrato de evolução contínua.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="white">
        <div className="hub-section-header">
          <Eyebrow>DÚVIDAS FREQUENTES</Eyebrow>
          <h2>Tudo sobre prazos, tecnologias e código-fonte</h2>
        </div>
        <div className="hub-faq-wrapper">
          <Accordion items={unit.faq} />
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        title="Fale com a equipe da Foxone Software"
        lead="Transforme suas ideias em software robusto e integrado com sua operação industrial ou comercial."
        primaryText="Falar com Arquiteto de Software"
      />
    </div>
  );
}
