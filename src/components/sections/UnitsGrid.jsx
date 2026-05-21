import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';
import Section from '../ui/Section';
import unidades from '../../data/unidades.json';
import './UnitsGrid.css';

export default function UnitsGrid() {
  return (
    <Section id="unidades" bg="white">
      <div className="units-grid__header">
        <Eyebrow>NOSSAS UNIDADES</Eyebrow>
        <h2>Três frentes, uma operação integrada</h2>
      </div>
      <div className="units-grid__cards">
        {unidades.map((unit) => {
          const Icon = Icons[unit.icon] || Icons.Building2;
          return (
            <Card key={unit.id} accentColor={unit.colorHex} className="unit-card">
              <div className="unit-card__icon" style={{ color: unit.colorHex }}>
                <Icon size={32} />
              </div>
              <h3 className="unit-card__name">{unit.shortName}</h3>
              <p className="unit-card__desc">{unit.description}</p>
              <ul className="unit-card__bullets">
                {unit.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <Link to={unit.slug} className="unit-card__link">
                Saiba mais <Icons.ArrowRight size={16} />
              </Link>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
