import { DIFFERENTIATORS } from '../../constants/data';
import './Sections.css';

const DifferentiatorsSection = () => {
  return (
    <section className="differentiators-home-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Market-Leading Differentiators</h2>
          <p className="section-subtitle">
            What sets Vroxlar apart in enterprise AI delivery
          </p>
        </div>

        <div className="differentiators-grid">
          {DIFFERENTIATORS.map((diff, index) => (
            <div key={index} className="differentiator-card">
              <div className="diff-icon">
                {index === 0 && '🎯'}
                {index === 1 && '🛡️'}
                {index === 2 && '⚙️'}
                {index === 3 && '🤝'}
              </div>
              <h3>{diff.title}</h3>
              <p>{diff.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;

