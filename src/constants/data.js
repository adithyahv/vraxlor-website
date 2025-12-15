// Navigation Links
export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Strategic AI Service Lifecycle Phases
export const SERVICE_LIFECYCLE = [
  {
    phase: '01',
    name: 'Discover',
    subtitle: 'Strategy & Alignment',
    description: 'Define business objectives, assess AI opportunities, and map high-value use cases.',
  },
  {
    phase: '02',
    name: 'Organize Data',
    subtitle: 'Foundation & Readiness',
    description: 'Establish robust data infrastructure, ensure quality, and design AI-ready architecture.',
  },
  {
    phase: '03',
    name: 'Develop',
    subtitle: 'Specialization & Creation',
    description: 'Build advanced AI systems with cutting-edge techniques and custom solutions.',
  },
  {
    phase: '04',
    name: 'Deploy',
    subtitle: 'Value & Longevity',
    description: 'Ensure continuous value through MLOps, monitoring, and ongoing optimization.',
  },
];

// Core Services Data - Organized by Strategic Lifecycle
export const SERVICES = [
  // Phase 1: Discovery & Strategy
  {
    id: 'ai-strategy-consulting',
    title: 'AI Strategy & Enablement',
    phase: 'discover',
    description:
      'End-to-end AI transformation management: from organizational vision to measurable outcomes. We build Centers of Excellence and institutionalize AI capabilities.',
    icon: '🎯',
    deliverables: ['AI Strategy Roadmap', 'Use Case Identification', 'ROI Analysis', 'Center of Excellence Setup'],
  },
  {
    id: 'ai-poc-mvp',
    title: 'AI Proof of Concept & MVP',
    phase: 'discover',
    description:
      'Rapid prototyping and validation to de-risk investment. Sprint-built solutions that prove technical feasibility and business fit before full-scale deployment.',
    icon: '🚀',
    deliverables: ['Working Prototype', 'Feasibility Report', 'Cost-Benefit Analysis', 'Technical Blueprint'],
  },
  {
    id: 'data-maturity-assessment',
    title: 'Data Maturity Assessment',
    phase: 'discover',
    description:
      'Comprehensive evaluation of data sources, quality, and AI readiness. Define actionable strategies aligned with business goals and technical reality.',
    icon: '📊',
    deliverables: ['Maturity Scorecard', 'Gap Analysis', 'Compliance Review', 'Readiness Roadmap'],
  },

  // Phase 2: Data Foundation
  {
    id: 'data-engineering',
    title: 'AI-Ready Data Engineering',
    phase: 'organize',
    description:
      'Build robust data pipelines and infrastructure for high-volume, real-time processing. Specialized for AI model training with Delta Lakes and streaming applications.',
    icon: '🔧',
    deliverables: ['Data Pipelines', 'Data Lakes', 'ETL Automation', 'Real-time Streaming'],
  },
  {
    id: 'modern-data-platforms',
    title: 'Modern Data Platforms',
    phase: 'organize',
    description:
      'Enterprise-grade cloud-native platforms built for scale. Expert implementation of Databricks, Snowflake, and modern data stacks.',
    icon: '☁️',
    deliverables: ['Platform Architecture', 'Cloud Migration', 'Integration Layer', 'Security Framework'],
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Analytics',
    phase: 'organize',
    description:
      'Operationalize analytics with embedded dashboards, real-time alerts, and self-service tools that drive measurable business outcomes.',
    icon: '📈',
    deliverables: ['Interactive Dashboards', 'Automated Reports', 'Self-Service Analytics', 'KPI Tracking'],
  },

  // Phase 3: Core AI Development
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Autonomous Orchestration',
    phase: 'develop',
    description:
      'Sophisticated goal-oriented systems that autonomously plan, execute multi-step workflows, and interact with enterprise systems. The pinnacle of AI automation.',
    icon: '🤖',
    deliverables: ['Autonomous Agents', 'Workflow Orchestration', 'Multi-System Integration', 'Goal Management'],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI & LLMs',
    phase: 'develop',
    description:
      'Custom large language models fine-tuned for your domain. RAG architectures, semantic search, automated content generation, and intelligent summarization.',
    icon: '✨',
    deliverables: ['Custom LLMs', 'RAG Systems', 'Content Automation', 'Knowledge Bases'],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    phase: 'develop',
    description:
      'Advanced visual intelligence for object detection, classification, segmentation, and spatial analysis. Automate visual inspection and decision-making at scale.',
    icon: '👁️',
    deliverables: ['Object Detection', 'Image Classification', 'Video Analytics', 'Quality Control'],
  },

  // Phase 4: Deployment & Operations
  {
    id: 'mlops',
    title: 'MLOps & Continuous Operations',
    phase: 'deploy',
    description:
      'Enterprise MLOps with 24/7 monitoring, automated retraining, and CI/CD pipelines. Ensure models deliver sustained value with real-time drift detection.',
    icon: '⚙️',
    deliverables: ['CI/CD Pipelines', 'Model Monitoring', 'Auto-Retraining', 'Performance Dashboards'],
  },
  {
    id: 'trustworthy-ai',
    title: 'Trustworthy AI & Governance',
    phase: 'deploy',
    description:
      'Comprehensive governance frameworks aligned with EU AI Act and ethical guidelines. Bias monitoring, explainability, and regulatory compliance built into operations.',
    icon: '🛡️',
    deliverables: ['Compliance Framework', 'Bias Detection', 'AI Auditing', 'Ethics Guidelines'],
  },
  {
    id: 'ai-ux-design',
    title: 'AI Interface Architecture & XAI',
    phase: 'deploy',
    description:
      'Specialized UX design for AI systems. Implement Explainable AI principles, trust indicators, and human-controllable interfaces that maximize adoption.',
    icon: '🎨',
    deliverables: ['XAI Interfaces', 'Trust Indicators', 'User Testing', 'Adoption Strategy'],
  },
];

// Partners Data
export const PARTNERS = [
  'AWS',
  'Microsoft Azure',
  'Google Cloud',
  'OpenAI',
  'Databricks',
  'Snowflake',
  'NVIDIA',
  'Anthropic',
];

// Approach Steps
// Approach Steps
// Enterprise Approach Data (5-Phase Methodology)
export const ENTERPRISE_APPROACH = [
  {
    id: 'discover',
    phase: '01',
    title: 'Discover: Immersion & Insight',
    summary: 'We begin by immersing ourselves in your world – learning your business goals, users, and pain points.',
    description: 'Our team conducts in-depth research, stakeholder interviews, and data audits to pinpoint opportunities and challenges. By asking the right questions up front, we find the right problem to solve before jumping to a solution, ensuring a foundation built on insight (we leverage techniques like Design Thinking workshops to uncover real needs).',
    deliverable: 'Strategic Roadmap & Discovery Report',
  },
  {
    id: 'define',
    phase: '02',
    title: 'Define: Strategy & Roadmap',
    summary: 'Next, we translate insights into a clear action plan. We define a tailored strategy that aligns with your vision.',
    description: 'We outline technical architectures, success metrics, and a product roadmap. Every requirement is clarified and prioritized. The outcome is a blueprint for solution development, including timelines and deliverables, so all stakeholders know what’s coming. This phase ensures we’re building on a solid plan that mitigates risks.',
    deliverable: 'Technical Blueprint & Defined Feature Set',
  },
  {
    id: 'develop',
    phase: '03',
    title: 'Develop: Build & Iterate',
    summary: 'With a roadmap in hand, we move into development with agility and precision.',
    description: 'Our engineers build the solution in iterative sprints – from prototypes and MVPs to full-feature implementations. We leverage the latest technologies (AI, cloud, and automation) and global coding standards to create a robust, scalable product. Continuous testing and client feedback loops are incorporated at every step.',
    deliverable: 'Functional MVP or Beta Release',
  },
  {
    id: 'deliver',
    phase: '04',
    title: 'Deliver: Launch & Integrate',
    summary: 'Once the solution passes quality benchmarks, we deploy it seamlessly into your environment.',
    description: 'This phase covers final testing, user acceptance, and launch orchestration. We handle cloud or on-premise setup, integrations with existing IT systems, and team training for a smooth handover. The result is a flawless delivery – on time and within budget. We ensure your new solution is fully operational and secure.',
    deliverable: 'Integrated Production System & Handoff',
  },
  {
    id: 'optimize',
    phase: '05',
    title: 'Optimize: Continuous Improvement',
    summary: 'Our partnership doesn’t end at launch – it’s just the beginning. We monitor performance and gather data to identify enhancements.',
    description: 'Using analytics and AI-driven insights, we iteratively refine the product, adding new features, improving UX, and fine-tuning for better performance. We also provide ongoing support and maintenance, ensuring reliability as your user base grows. This commitment means your solution stays ahead of the curve.',
    deliverable: 'Quarterly Performance Review & Roadmap',
  },
];

// Industries Data
export const INDUSTRIES = [
  {
    id: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    description: 'Personalized recommendation engines, customer behavior analysis, and omnichannel experiences that increase conversions.',
    icon: 'ShoppingBag',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Secure, scalable solutions for investment analysis, automated compliance reporting, and intelligent advisory systems.',
    icon: 'Landmark',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Connected healthcare solutions through AI automation to improve outcomes, lower costs, and boost operational efficiency.',
    icon: 'Stethoscope',
  },
  {
    id: 'automotive-manufacturing',
    name: 'Automotive & Manufacturing',
    description: 'Generative AI for customer support optimization and agentic systems for quality control and predictive maintenance.',
    icon: 'Car',
  },
  {
    id: 'high-tech',
    name: 'High-Tech & SaaS',
    description: 'AI-driven engineering to scale faster, build impactful products, and embed intelligence into software platforms.',
    icon: 'Cpu',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Predictive routing, warehouse intelligence, demand forecasting, and autonomous supply chain optimization.',
    icon: 'Truck',
  },
  {
    id: 'travel-hospitality',
    name: 'Travel & Hospitality',
    description: 'Dynamic pricing models, personalized itinerary planning, and 24/7 intelligent customer support agents.',
    icon: 'Plane',
  },
  {
    id: 'utilities-energy',
    name: 'Utilities & Energy',
    description: 'Smart grid management, predictive maintenance for infrastructure, and consumption forecasting models.',
    icon: 'Zap',
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    description: 'Content personalization, automated metadata tagging, and generative AI for creative workflows.',
    icon: 'Clapperboard',
  },
  {
    id: 'aviation',
    name: 'Aviation',
    description: 'Flight operations optimization, predictive maintenance for aircraft, and enhanced crew scheduling systems.',
    icon: 'PlaneTakeoff',
  },
  {
    id: 'vc-pe',
    name: 'Venture Capital & PE',
    description: 'Data-driven deal sourcing, automated due diligence, and portfolio performance prediction models.',
    icon: 'TrendingUp',
  },
];

// Key Differentiators
export const DIFFERENTIATORS = [
  {
    title: 'Autonomous Orchestration',
    copy: 'We design agentic AI systems that set goals, plan execution, and autonomously manage complex workflows—not just respond to prompts.',
  },
  {
    title: 'Trustworthy AI & Compliance',
    copy: 'Enterprise-grade governance frameworks aligned with EU AI Act, ensuring ethical deployment and regulatory compliance from day one.',
  },
  {
    title: 'MLOps-First Delivery',
    copy: '24/7 monitoring, automated retraining, and continuous optimization ensure your models maintain value throughout their lifecycle.',
  },
  {
    title: 'End-to-End Ownership',
    copy: 'From strategy to operationalization—one accountable team managing the complete AI lifecycle with measurable outcomes.',
  },
];

// Stats Data
export const STATS = [
  { value: '15+', label: 'Enterprise AI frameworks deployed' },
  { value: '40%', label: 'Faster time to market with MLOps' },
  { value: '99.5%', label: 'Model accuracy in production' },
  { value: '24/7', label: 'Continuous monitoring & operations' },
];

// Footer Links
export const FOOTER_LINKS = {
  Services: [
    'Agentic AI',
    'Generative AI & LLMs',
    'Computer Vision',
    'MLOps & Governance',
    'Data Engineering',
    'AI Strategy',
  ],
  Company: ['About Us', 'Industries', 'Case Studies', 'Contact'],
  Resources: ['AI Insights', 'Thought Leadership', 'Careers', 'Privacy Policy'],
};

// Company Info
export const COMPANY_INFO = {
  name: 'Vraxlor',
  tagline: 'Autonomous AI • Enterprise Intelligence • Trustworthy Systems',
  email: 'info@vraxlor.com',
  phone: '+1 (000) 000-0000',
};
