import { Factory, Handshake, HeadsetIcon, RotateCcw } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import './DifferentialsGrid.css';

const DIFFS = [
  { icon: Factory, title: 'Fábrica própria de etiquetas', desc: 'Produção in-house com controle total de qualidade, prazo e custo. Flexografia e digital sob o mesmo teto.' },
  { icon: Handshake, title: 'Modelo de comodato e locação', desc: 'Hardware sem investimento inicial. Equipamentos cedidos mediante contrato de insumos ou locação flexível.' },
  { icon: HeadsetIcon, title: 'Suporte técnico nacional', desc: 'Assistência autorizada das principais marcas. Atendimento presencial e remoto em todo o Brasil.' },
  { icon: RotateCcw, title: 'Solução 360° hardware + software', desc: 'Da etiqueta ao sistema que a governa. Integração ponta a ponta entre insumos, equipamentos e software.' },
];

export default function DifferentialsGrid() {
  return (
    <Section id="diferenciais" bg="alt">
      <div className="diffs__header">
        <Eyebrow>DIFERENCIAIS</Eyebrow>
        <h2>Por que indústrias e redes escolhem o Grupo Etarp</h2>
      </div>
      <div className="diffs__grid">
        {DIFFS.map(({ icon: Icon, title, desc }) => (
          <div className="diff-item" key={title}>
            <div className="diff-item__icon">
              <Icon size={32} />
            </div>
            <h3 className="diff-item__title">{title}</h3>
            <p className="diff-item__desc">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
