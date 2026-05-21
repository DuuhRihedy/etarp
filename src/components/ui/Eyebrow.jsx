export default function Eyebrow({ children, color = 'cyan', className = '' }) {
  const style = { color: color === 'blue' ? 'var(--etarp-blue)' : 'var(--etarp-cyan)' };
  return <span className={`eyebrow ${className}`} style={style}>{children}</span>;
}
