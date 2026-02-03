import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../../constants/data';
import ServiceDetail from './ServiceDetail';
import './ServicePageTemplate.css';

const ServicePageTemplate = () => {
    const { serviceId } = useParams();
    const service = SERVICES.find(s => s.id === serviceId);

    // Scroll to top on load
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="service-not-found">
                <div className="container">
                    <h2>Service Not Found</h2>
                    <p>The service you are looking for does not exist.</p>
                    <Link to="/services" className="primary-btn">View All Services</Link>
                </div>
            </div>
        );
    }

    return <ServiceDetail service={service} />;
};

export default ServicePageTemplate;
