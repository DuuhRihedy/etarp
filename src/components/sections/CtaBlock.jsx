import Button from '../ui/Button';
import './CtaBlock.css';

export default function CtaBlock({ title = 'Vamos conversar sobre o seu projeto', lead = 'Conte para nossa equipe o que sua operação precisa. Respondemos em até 24 horas úteis.', primaryText = 'Pedir um orçamento', primaryHref = '/contato', secondaryText = 'Agendar uma demo', secondaryHref = '/contato' }) {
  return (
    <section className="cta-block" id="cta-final">
      <div className="cta-block__container">
        <h2 className="cta-block__title">{title}</h2>
        <p className="cta-block__lead">{lead}</p>
        <div className="cta-block__actions">
          <Button variant="inverse" href={primaryHref} size="lg">{primaryText}</Button>
          {secondaryText && (
            <Button variant="ghost-inverse" href={secondaryHref} size="lg">{secondaryText}</Button>
          )}
        </div>
      </div>
    </section>
  );
}
