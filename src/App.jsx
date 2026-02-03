import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import UseCasesPage from './pages/UseCasesPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePageTemplate from './pages/ServicePageTemplate';
import GenerativeAIPage from './pages/GenerativeAIPage';
import AIAdvisoryPage from './pages/AIAdvisoryPage';
import ResourcesBlog from './pages/ResourcesBlog';
import ResourcesGuides from './pages/ResourcesGuides';
import ResourcesCareers from './pages/ResourcesCareers';
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
