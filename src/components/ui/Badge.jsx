import './Badge.css';

export default function Badge({ children, color, className = '' }) {
  const style = color ? { '--badge-color': color } : {};
  return <span className={`badge ${className}`} style={style}>{children}</span>;
}
