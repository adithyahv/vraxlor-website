import { DIFFERENTIATORS, STATS } from '../../constants/data';
import './Sections.css';

const WhyVroxlarSection = () => {
  return (
    <section className="section why-vroxlar">
      <div className="why-grid container">
        <div className="why-benefits">
          <p className="eyebrow">Why choose us</p>
          <h2>Why Vroxlar?</h2>
          {DIFFERENTIATORS.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="stats-panel">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVroxlarSection;
