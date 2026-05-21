import React from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CtaBlock from '../components/sections/CtaBlock';
import casesData from '../data/cases.json';
import './Cases.css';

export default function Cases() {
  return (
    <div className="cases-page">
      {/* Hero Section */}
      <header className="cases-hero">
        <div className="cases-hero__container">
          <Eyebrow>CASES DE SUCESSO</Eyebrow>
          <h1>Resultados que comprovam nossa entrega</h1>
          <p className="lead">Veja como indústrias, redes varejistas e operadores logísticos otimizaram suas operações com as soluções integradas do Grupo Etarp.</p>
        </div>
      </header>

      {/* Grid of cases */}
      <Section id="cases-grid" bg="alt">
        <div className="cases-grid">
          {casesData.map((c) => (
            <Card key={c.id} hover={true} className="case-card">
              <div className="case-card__header">
                <div className="case-card__logo-placeholder">
                  <Icons.Building2 size={24} className="case-logo-icon" />
                  <span>{c.client}</span>
                </div>
                <Badge color="var(--etarp-cyan)">{c.segment}</Badge>
              </div>
              <div className="case-card__content">
                <h3 className="case-card__challenge-title">Desafio:</h3>
                <p className="case-card__challenge">{c.challenge}</p>
                
                <h3 className="case-card__result-title">Resultado:</h3>
                <p className="case-card__result">{c.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <CtaBlock
        title="Quer atingir resultados semelhantes na sua operação?"
        lead="Nossos especialistas podem desenhar um projeto sob medida focado em redução de custos, automação e zero erro."
        primaryText="Pedir Diagnóstico Gratuito"
      />
    </div>
  );
}
