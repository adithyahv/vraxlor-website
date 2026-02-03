import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Generative AI Technology in Business',
    text: 'Generative AI is transforming business operations and leverages large datasets to create novel content, automate tasks, and streamline workflows.'
  },
  {
    title: 'Precision Customization',
    text: 'Domain-specific Generative AI models are trained on data specific to a particular industry, delivering tailored and context-aware outputs.'
  },
  {
    title: 'Improved Data Privacy',
    text: 'Our Generative AI consulting services place the highest priority on data integrity, minimizing risk and reducing hallucinations.'
  }
];

const checklist = [
  { title: 'Setting Gen AI Goals', text: 'Define the specific generative tasks and desired outputs clearly.' },
  { title: 'Aligning with Organizational Goals', text: 'Conduct a comprehensive assessment of current AI capabilities and alignment.' },
  { title: 'Develop a Roadmap', text: 'Create a detailed phased roadmap for data, models, integration, and governance.' },
  { title: 'Assess Readiness', text: 'Evaluate data quality, security posture, infrastructure, and team skills.' },
  { title: 'Identify Use Cases', text: 'Discover high-value, transformative use cases with measurable KPIs.' }
];

const industries = [
  {
    title: 'Generative AI Consulting in Private Investment',
    points: ['Deal Sourcing', 'Due Diligence Automation', 'Portfolio Management']
  },
  {
    title: 'Generative AI Consulting in Legal Industry',
    points: ['Streamlined Legal Research', 'Efficient Document Drafting']
  }
];

const faq = [
  {
    q: 'What are the most important limitations and drawbacks of using Generative AI in business?',
    a: 'Lack of true creativity, limited contextual understanding, data privacy concerns, bias, and hallucinations require careful mitigation.'
  },
  {
    q: 'How consulting Gen AI companies can overcome the Gen AI limitations?',
    a: 'Ensuring data quality, human oversight, transparency, guardrails, and rigorous evaluation reduce the risks of Generative AI.'
  },
  {
    q: 'What are some best practices for managing the risks of Generative AI in business?',
    a: 'Implement governance, monitor outputs, enforce privacy and access controls, and measure business impact continuously.'
  }
];

const clients = ['SimpleCater', 'Inpost', 'Pernod Ricard', 'ABB', 'Jabil', 'Continental', 'Porsche', 'BMW', 'Nissan'];

const GenAIConsultingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="text-sm text-gray-500 flex flex-wrap items-center gap-1">
              <span>Home</span>
              <span>»</span>
              <span>Generative AI</span>
              <span>»</span>
              <span>Generative AI Consulting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Generative AI Consulting</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Accelerate your digital transformation and increase productivity with domain-specific Generative AI solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#00D0BB] text-black font-semibold rounded-full px-6 py-3 hover:bg-white transition-colors">
              Let&apos;s talk <ArrowRight size={18} />
            </Link>
          </div>
          <div className="w-full h-[320px] md:h-[420px] rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937] border border-white/10 shadow-2xl flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-xl bg-[#0B0E14] border border-white/10 flex items-center justify-center text-gray-500">
              Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          {benefits.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#1F2937] border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Clients that trusted us</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {clients.map((c) => (
              <div key={c} className="bg-[#111827] border border-white/10 rounded-xl py-4 px-3 text-center text-gray-200">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Checklist for Successful Gen AI Adoption</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {checklist.map((item, idx) => (
              <div key={item.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#00D0BB] text-black font-semibold flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Generative AI Technology in Various Industries: Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((item) => (
              <div key={item.title} className="bg-[#1F2937] border border-white/10 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-gray-300">
                      <Check size={18} className="text-[#00D0BB] mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Generative AI Consulting - FAQ</h2>
          <div className="divide-y divide-white/10 border border-white/10 rounded-2xl bg-[#0F1117]">
            {faq.map((item, idx) => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white">
                  <span className="text-lg font-semibold">{item.q}</span>
                  <ChevronDown className="text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 bg-[#111827] border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Let&apos;s discuss a solution</h3>
            <p className="text-gray-400 leading-relaxed">Share a few details and our team will get back to you quickly.</p>
          </div>
          <form className="grid grid-cols-1 gap-4">
            <input className="bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500" placeholder="Full Name" />
            <input className="bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500" placeholder="Business Email" />
            <input className="bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500" placeholder="Company" />
            <input className="bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500" placeholder="Phone" />
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#00D0BB] text-black font-semibold rounded-full px-6 py-3 hover:bg-white transition-colors">
              Let&apos;s talk <ArrowRight size={18} />
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GenAIConsultingPage;
