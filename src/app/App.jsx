import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../features/home/Home';
import Services from '../features/services/Services';
import Industries from '../features/industries/Industries';
import UseCasesPage from '../features/use-cases/UseCasesPage';
import UseCaseDetailPage from '../features/use-cases/UseCaseDetailPage';
import CaseStudies from '../features/case-studies/CaseStudies';
import About from '../features/about/About';
import Contact from '../features/contact/Contact';
import ServicePageTemplate from '../features/services/ServicePageTemplate';
import GenerativeAIPage from '../features/services/generative-ai/GenerativeAIPage';
import AIAdvisoryPage from '../features/services/ai-advisory/AIAdvisoryPage';
import ResourcesBlog from '../features/resources/ResourcesBlog';
import ResourcesGuides from '../features/resources/ResourcesGuides';
import ResourcesCareers from '../features/resources/ResourcesCareers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/generative-ai" element={<GenerativeAIPage />} />
          <Route path="services/ai-advisory" element={<AIAdvisoryPage />} />
          <Route path="services/:serviceId" element={<ServicePageTemplate />} />
          <Route path="industries" element={<Industries />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="use-cases/:id" element={<UseCaseDetailPage />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="resources/blogs" element={<ResourcesBlog />} />
          <Route path="resources/guides" element={<ResourcesGuides />} />
          <Route path="resources/careers" element={<ResourcesCareers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
