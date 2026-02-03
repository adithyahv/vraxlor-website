import { INDUSTRIES } from '../../constants/data';
import './Industries.css';

const Industries = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Industries We Serve</h1>
        <p>AI solutions tuned to the realities of each market.</p>
      </div>

      <div className="industries-grid container">
        {INDUSTRIES.map((industry) => (
          <article key={industry.id} className="industry-card-detailed">
            <h2>{industry.name}</h2>
            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Industries;


