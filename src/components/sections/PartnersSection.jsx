import './PartnersSection.css';

const PartnersSection = () => {
  // Duplicate the partners array for seamless infinite scroll
  const partners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png' },
    { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
    { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
    { name: 'Anthropic', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg' },
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-header">
        <p className="partners-eyebrow">Technology Ecosystem</p>
        <h2 className="partners-title">Our Technology Partners</h2>
        <p className="partners-subtitle">
          We collaborate with industry-leading platforms to deliver robust, scalable solutions.
        </p>
      </div>

      <div className="partners-banner">
        <div className="partners-track">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div key={`partner-1-${index}`} className="partner-logo-card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo-img"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="partner-logo-text" style={{ display: 'none' }}>
                {partner.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`partner-2-${index}`} className="partner-logo-card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="partner-logo-text" style={{ display: 'none' }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
