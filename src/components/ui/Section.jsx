import './Section.css';

export default function Section({ children, id, bg = 'white', className = '', ...props }) {
  const bgClass = bg === 'alt' ? 'section--alt' : bg === 'tint' ? 'section--tint' : bg === 'navy' ? 'section--navy' : '';
  return (
    <section id={id} className={`section ${bgClass} ${className}`} {...props}>
      <div className="section__container">{children}</div>
    </section>
  );
}
