import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <Eyebrow>GRUPO ETARP</Eyebrow>
          <h1 className="hero__title">
            Do <span className="text-cyan">rótulo</span> na linha de produção ao <span className="text-cyan">sistema</span> que governa sua operação.
          </h1>
          <p className="lead hero__lead">
            Etiquetas, automação comercial, equipamentos e software sob medida. Três unidades, uma operação integrada para indústria, varejo e logística.
          </p>
          <div className="hero__actions">
            <Button variant="inverse" href="/solucoes" size="lg">Conheça as soluções</Button>
            <Button variant="ghost-inverse" href="/contato" size="lg">Falar com especialista</Button>
          </div>
        </div>
        <div className="hero__graphic" aria-hidden="true">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="400" height="400" rx="8" stroke="var(--etarp-cyan)" strokeWidth="0.5" opacity="0.2" />
            <rect x="100" y="100" width="300" height="300" rx="6" stroke="var(--etarp-cyan)" strokeWidth="0.5" opacity="0.3" />
            <rect x="150" y="150" width="200" height="200" rx="4" stroke="var(--etarp-blue)" strokeWidth="0.5" opacity="0.2" />
            <line x1="0" y1="250" x2="500" y2="250" stroke="var(--etarp-cyan)" strokeWidth="0.3" opacity="0.15" />
            <line x1="250" y1="0" x2="250" y2="500" stroke="var(--etarp-cyan)" strokeWidth="0.3" opacity="0.15" />
            <circle cx="250" cy="250" r="120" stroke="var(--etarp-cyan)" strokeWidth="0.5" opacity="0.2" />
            <circle cx="250" cy="250" r="60" stroke="var(--etarp-blue)" strokeWidth="0.5" opacity="0.15" />
            <circle cx="250" cy="250" r="4" fill="var(--etarp-cyan)" opacity="0.6" />
            <line x1="50" y1="50" x2="450" y2="450" stroke="var(--etarp-cyan)" strokeWidth="0.3" opacity="0.1" />
            <line x1="450" y1="50" x2="50" y2="450" stroke="var(--etarp-cyan)" strokeWidth="0.3" opacity="0.1" />
            {[80, 160, 240, 320, 400].map(x => (
              [80, 160, 240, 320, 400].map(y => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="var(--etarp-cyan)" opacity="0.25" />
              ))
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
