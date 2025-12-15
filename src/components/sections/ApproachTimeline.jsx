import { useEffect, useRef, useState } from 'react';
import { ENTERPRISE_APPROACH } from '../../constants/data';
import './ApproachTimeline.css';

const ApproachStep = ({ step, index, isActive, onVisible }) => {
    const stepRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onVisible(index);
                    setIsVisible(true);
                }
            },
            {
                rootMargin: '-30% 0px -30% 0px',
                threshold: 0.2,
            }
        );

        const currentRef = stepRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [index, onVisible]);

    return (
        <div
            ref={stepRef}
            className={`approach-step ${isVisible ? 'is-visible' : ''} ${isActive ? 'is-active' : ''}`}
            id={`phase-${index}`}
        >
            <div className="step-marker">
                <div className="marker-circle">
                    <span className="marker-number">{step.phase}</span>
                </div>
            </div>

            <div className="step-content">
                <div className="step-image">
                    <img
                        src={`/images/approach/approach-${index + 1}.jpg`}
                        alt={step.title}
                    />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-summary">{step.summary}</p>
                <p className="step-description">{step.description}</p>
            </div>
        </div>
    );
};

const ApproachTimeline = () => {
    const [activeStep, setActiveStep] = useState(0);
    const timelineRef = useRef(null);
    const progressRef = useRef(null);

    // Update progress line height based on active step
    useEffect(() => {
        if (progressRef.current) {
            // Calculate percentage based on active step
            const percentage = (activeStep / (ENTERPRISE_APPROACH.length - 1)) * 100;
            progressRef.current.style.height = `${percentage}%`;
        }
    }, [activeStep]);

    return (
        <section className="approach-section">
            <div className="container">
                <div className="approach-header">
                    <h2 className="section-title">Our Systematic Approach to <br /><span className="text-highlight">AI-Powered Innovation</span></h2>
                    <p className="section-intro">
                        We tackle complex challenges with a proven, step-by-step methodology that blends state-of-the-art strategies and bold innovation.
                        By combining globally accepted best practices with our industry expertise, we ensure every solution drives tangible business value.
                    </p>
                </div>

                <div className="timeline-wrapper" ref={timelineRef}>
                    {/* Vertical Progress Line */}
                    <div className="timeline-line-container">
                        <div className="timeline-line-track"></div>
                        <div className="timeline-line-progress" ref={progressRef}></div>
                    </div>

                    {/* Steps */}
                    <div className="steps-container">
                        {ENTERPRISE_APPROACH.map((step, index) => (
                            <ApproachStep
                                key={step.id}
                                step={step}
                                index={index}
                                isActive={index <= activeStep}
                                onVisible={setActiveStep}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachTimeline;
