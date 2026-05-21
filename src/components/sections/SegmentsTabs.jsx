import { useState } from 'react';
import * as Icons from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import segmentos from '../../data/segmentos.json';
import './SegmentsTabs.css';

export default function SegmentsTabs() {
  const [active, setActive] = useState(0);
  const current = segmentos[active];
  const ActiveIcon = Icons[current.icon] || Icons.Briefcase;

  return (
    <Section id="segmentos" bg="alt">
      <div className="segments__header">
        <Eyebrow>SEGMENTOS</Eyebrow>
        <h2>Para onde sua operação for</h2>
      </div>
      <div className="segments__tabs" role="tablist">
        {segmentos.map((seg, i) => {
          const TabIcon = Icons[seg.icon] || Icons.Briefcase;
          return (
            <button
              key={seg.id}
              role="tab"
              aria-selected={i === active}
              className={`segments__tab ${i === active ? 'segments__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <TabIcon size={20} />
              <span>{seg.name}</span>
            </button>
          );
        })}
      </div>
      <div className="segments__panel" role="tabpanel">
        <div className="segments__panel-icon" style={{ color: 'var(--etarp-cyan)' }}>
          <ActiveIcon size={40} />
        </div>
        <div className="segments__panel-content">
          <h3>{current.name}</h3>
          <ul className="segments__list">
            {current.solutions.map((s, i) => (
              <li key={i}>
                <Icons.Check size={16} className="segments__check" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
