import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion__item ${openIndex === i ? 'accordion__item--open' : ''}`}>
          <button
            className="accordion__trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`accordion-panel-${i}`}
            id={`accordion-trigger-${i}`}
          >
            <span className="accordion__title">{item.question}</span>
            <ChevronDown className="accordion__icon" size={20} />
          </button>
          <div
            className="accordion__panel"
            id={`accordion-panel-${i}`}
            role="region"
            aria-labelledby={`accordion-trigger-${i}`}
          >
            <div className="accordion__content">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
