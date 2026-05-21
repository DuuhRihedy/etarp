import StatNumber from '../ui/StatNumber';
import './KpiBar.css';

const KPIS = [
  { value: '25', suffix: '+', label: 'anos de mercado' },
  { value: '800', suffix: '+', label: 'clientes ativos' },
  { value: '5', suffix: 'M+', label: 'etiquetas/mês' },
  { value: '18', suffix: '', label: 'estados atendidos' },
];

export default function KpiBar() {
  return (
    <section className="kpi-bar" id="kpi-bar">
      <div className="kpi-bar__container">
        {KPIS.map((kpi) => (
          <StatNumber key={kpi.label} value={kpi.value} suffix={kpi.suffix} label={kpi.label} />
        ))}
      </div>
    </section>
  );
}
