import React, { useRef } from 'react';
import { INDUSTRIES } from '../../constants/data';
import * as LucideIcons from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="industries-scroll-section" id="industries" style={{ backgroundColor: '#EBE9E4' }}>
      <div className="industries-sticky-container">
        <div className="industries-header-horizontal">
          <span className="industries-eyebrow">Sectors</span>
          <h2 className="industries-title">Industries We Serve</h2>
          <p className="industries-intro">
            AI solutions tuned to the realities of each market.
          </p>
        </div>

        <div className="industries-horizontal-wrapper">
          <motion.div style={{ x }} className="industries-horizontal-track">
            {INDUSTRIES.map((industry) => {
              const IconComponent = LucideIcons[industry.icon] || LucideIcons.HelpCircle;

              return (
                <article key={industry.id} className="industry-card-horizontal">
                  <div className="industry-icon-wrapper">
                    <IconComponent size={28} className="industry-icon" strokeWidth={1.5} />
                  </div>
                  <h3 className="industry-name">{industry.name}</h3>
                  <p className="industry-description">{industry.description}</p>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
