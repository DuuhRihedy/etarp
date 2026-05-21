import useCountUp from '../../hooks/useCountUp';
import './StatNumber.css';

export default function StatNumber({ value, suffix = '', label }) {
  const numericValue = parseInt(value, 10) || 0;
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <div className="stat" ref={ref}>
      <span className="stat__number kpi-number">
        {count}{suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
}
