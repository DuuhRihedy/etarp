import './Card.css';

export default function Card({ children, accentColor, hover = true, className = '', onClick, ...props }) {
  const style = accentColor ? { '--card-accent': accentColor } : {};
  return (
    <div
      className={`card ${accentColor ? 'card--accent' : ''} ${hover ? 'card--hover' : ''} ${className}`}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e); } } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
