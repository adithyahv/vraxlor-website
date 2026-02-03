// Navigation Links
export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Resources', href: '/resources' },
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
  // Phase 1: Discover
  {
    id: 'ai-consulting',
    layout: 'premium',
    title: 'AI Consulting',
    phase: 'discover',
    description: 'Strategic roadmap and implementation of AI solutions.',
    icon: 'Brain',
    heroTitle: 'AI Consulting Company',
    heroSubtitle: 'Vraxlor is an AI consulting company that develops AI-driven services enabling your company to take full advantage of collected data and emerging opportunities.',
    whyInvest: [
      {
        title: 'AI Strategy Roadmap',
        description: 'We help you identify the most high-impact AI opportunities aligned with your business goals.',
        icon: 'Map'
      },
      {
        title: 'AI proof-of-concept (PoC)',
        description: 'Rapid prototyping to validate feasibility and business value before full-scale deployment.',
        icon: 'FlaskConical'
      },
      {
        title: 'Production grade AI implementation',
        description: 'Scalable, secure, and robust AI solutions integrated into your existing infrastructure.',
        icon: 'Rocket'
      },
      {
        title: 'Support and Model Validation',
        description: 'Continuous monitoring and validation to ensure models perform optimally over time.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Post-implementation warranty',
        description: 'Guaranteed support and maintenance to handle any issues after deployment.',
        icon: 'Award'
      }
    ],
    // Content sections for dynamic switching
    contentSections: {
      'ai-consulting-services': {
        title: 'What AI consulting services can you expect?',
        intro: 'Vraxlor offers unique <strong>AI consulting services that will help you realize how many opportunities come from implementing AI solutions into your business.</strong>',
        description: 'Artificial Intelligence influences most industries, among the most popular are: retail, eCommerce, manufacturing, finance, healthcare, aviation, digital transformation, and legal sectors. Let\'s discover how AI can become a real game-changer for your organization.',
        points: [
          {
            title: 'AI Strategy Roadmap',
            description: 'Validate feasibility of using AI in your company, analyze available data and data monetization potential'
          },
          {
            title: 'AI proof-of-concept (PoC)',
            description: 'Test assumptions and hypotheses. We deliver fast and reliable MVP solutions in 4-6 weeks.'
          },
          {
            title: 'Production grade AI implementation',
            description: 'Implementing algorithms and models to support your business\'s production systems and deliver insights in real-time'
          },
          {
            title: 'Support',
            description: 'We help our customers in model validation, quality control and system stability'
          },
          {
            title: 'Post-implementation warranty',
            description: 'We guarantee that our AI algorithms will bring you value and high accuracy'
          }
        ],
        additionalText: 'However, it is often difficult to find the proper use cases, especially since every case is different and requires a tailored approach.\n\nWithin Artificial Intelligence Consulting Services, we bridge this gap by thoroughly evaluating your processes, business logic, and data infrastructure. We determine where and which AI technologies will bring you the best business value.'
      },
      'ai-strategy': {
        title: 'Comprehensive AI Plan',
        intro: 'AI strategy is a comprehensive plan developed by organizations to leverage Artificial Intelligence (AI) technologies effectively for their goals and objectives.',
        description: 'An AI strategy outlines how AI will be integrated into various aspects of an entity\'s operations, innovation, decision-making processes, and overall business or societal objectives.',
        points: [
          {
            title: 'Strategic Alignment',
            description: 'Aligning an AI strategy with a broader business strategy is essential to ensure that the use of Artificial Intelligence supports and enhances the organization\'s overall objectives.'
          },
          {
            title: 'Business Goal Understanding',
            description: 'Developing an AI strategy, starting with Artificial Intelligence consulting, involves understanding your business goals, whether they involve increasing revenue, improving customer satisfaction, optimizing operations, or expanding into new markets, and determining how AI can contribute to achieving them.'
          },
          {
            title: 'Value Prioritization',
            description: 'Not all AI applications will be equally beneficial to your business. Prioritize AI use cases based on their potential to generate value and align with your business goals.'
          }
        ],
        additionalText: 'Vraxlor may offer you a variety of AI consulting services, starting from an AI strategy roadmap to building a scalable AI infrastructure and production-grade AI solution deployment. Our Artificial Intelligence Consulting services can cover:'
      },
      'ai-technologies': {
        title: 'Our team develops customized AI solutions based on recent technologies',
        intro: 'Our team specializes in developing customized AI solutions, leveraging the latest technologies available. We implement solutions based on high-tech solutions such as Computer Vision, Natural Language Processing, Predictive Analytics, Image Recognition, Recommendation Engines, Smart Search Engine, and many more.',
        description: 'At Vraxlor, we harness the power of advanced Machine Learning algorithms such as Random Forest, XGBoost, and Support Vector Machines (SVM) to address various predictive analytics and classification tasks. For deep learning, we turn to deep learning algorithms known for their remarkable success, including Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs).',
        points: [
          {
            title: 'Transformer Architectures',
            description: 'We utilize Transformer-based architectures like BERT, GPT-3, and their derivatives, which have transformed Natural Language Processing (NLP) and other state-of-the-art tasks such as text generation, language understanding, and translation.'
          },
          {
            title: 'Computer Vision',
            description: 'To ensure robust image recognition, object detection, and semantic segmentation, we integrate Computer Vision algorithms into our solutions. This includes leveraging the latest advancements in CNN architectures such as ResNet, DenseNet, and EfficientNet.'
          },
          {
            title: 'Best Outcomes',
            description: 'At the heart of our approach is a commitment to selecting technologies that deliver the best possible business outcomes while optimizing costs and time. We are dedicated to providing AI Consulting services that meet the unique needs of each client, empowering them to achieve their goals efficiently and effectively.'
          }
        ]
      },
      'ai-benefits': {
        title: 'The biggest advantages of AI are self-learning capabilities and scalability',
        intro: 'It gives SaaS applications the ability to use algorithms for thousands of customers.',
        description: 'Due to the fact that AI learns the history of all users, it gives amazing opportunities for the Marketplace. One of the examples is using a recommendation system based on the preferences of each individual person.',
        points: [
          {
            title: 'Market Investment',
            description: 'More than 9 in 10 leading businesses have ongoing investments in AI.'
          },
          {
            title: 'Business Benefits',
            description: 'Artificial Intelligence consulting will help you discover how AI can benefit your company.'
          }
        ]
      },
      'our-team': {
        title: 'At Vraxlor, our AI consultants stay in touch on a daily basis with our clients',
        intro: 'This way you can be sure that your project is our top priority.',
        description: 'Our AI consulting experts will help you to:',
        points: [
          {
            title: 'Complex Challenges',
            description: 'Solve complex business challenges using analytic algorithms and AI'
          },
          {
            title: 'Predictive Models',
            description: 'Design, build and deploy predictive and prescriptive models using statistical modeling and optimization'
          },
          {
            title: 'Decision-Making',
            description: 'Use structured decision-making to complete projects'
          },
          {
            title: 'Project Management',
            description: 'Manage an entire AI project from business issue identification, data audit to model maintenance in production'
          }
        ]
      }
    },
    // Development Process - Vertical Timeline with Icons (Addepto style)
    developmentTimeline: {
      title: 'Development process',
      intro: 'We design and build custom AI solutions alongside your team, creating systems that solve your unique business problems and work seamlessly with what you already have—delivering real results, fast.',
      steps: [
        {
          step: 1,
          icon: 'Search',
          title: "Discovering client's needs",
          description: "Our first step is to understand our clients and their requirements thoroughly. We analyze areas for improvement and explore cutting-edge solutions that would be most effective. We identify where AI can be strategically injected into processes to maximize business value."
        },
        {
          step: 2,
          icon: 'ClipboardList',
          title: "Feasibility study",
          description: "During this stage, we work closely with the client's team, gaining access to vital data and exchanging information regularly. We meticulously map the process, evaluating the quality and quantity of data involved, as well as the data infrastructure."
        },
        {
          step: 3,
          icon: 'FlaskConical',
          title: "Building a Proof of Concept (PoC)",
          description: "Once we've reached an agreement, we focus on bringing the idea to life. We develop a prototype that aligns with our main objective and review it with the client to finalize details."
        },
        {
          step: 4,
          icon: 'Server',
          title: "Integration, Production Deployment, Testing",
          description: "The team implements tailor-made AI solutions into the client's existing systems. Our experts conduct rigorous testing, thoroughly examining functionality and performance. We address any potential issues promptly to optimize system performance."
        },
        {
          step: 5,
          icon: 'TrendingUp',
          title: "Final results / Transformation",
          description: "With integration complete, your company harnesses the latest technological solutions. We emphasize knowledge sharing, ensuring the client receives comprehensive manuals and documentation, facilitating a seamless transition by passing entire ownership over to you."
        }
      ]
    },
    // Why Work With Us - Stats
    stats: [
      { number: '50+', label: 'AI Experts on board' },
      { number: '150+', label: 'Finished projects' },
      { number: '200+', label: 'Digital experts in group' },
      { number: '12+', label: 'Industries we work with' }
    ],
    // Technology Stack - Tabbed Categories (like Addepto)
    techStackTabs: {
      categories: ['ML Development Tools', 'Database', 'Frameworks', 'AI & Machine Learning'],
      items: {
        'ML Development Tools': ['Python', 'R', 'PySpark', 'Hadoop', 'Jupyter', 'NumPy', 'Pandas', 'SciPy'],
        'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra', 'Neo4j', 'InfluxDB'],
        'Frameworks': ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'FastAPI', 'Flask', 'Django'],
        'AI & Machine Learning': ['OpenCV', 'BERT', 'GPT', 'XGBoost', 'LightGBM', 'Hugging Face', 'LangChain', 'spaCy']
      }
    },
    // Industry Expertise - Tabbed with Deep-Dive Use Cases (like Addepto)
    industryTabs: [
      {
        id: 'private-investments',
        name: 'Private Investments',
        headline: 'AI Consulting for Private Investment',
        description: 'We help investment firms leverage AI for smarter decision-making and portfolio optimization.',
        useCases: [
          { title: 'Predictive Analytics', description: 'Forecast market trends and asset performance using machine learning models trained on historical data.' },
          { title: 'Risk Assessment', description: 'Quantify and manage investment risks with AI-powered analytics and scenario modeling.' },
          { title: 'Due Diligence Automation', description: 'Accelerate deal evaluation with automated document analysis and data extraction.' }
        ]
      },
      {
        id: 'aviation',
        name: 'Aviation',
        headline: 'AI Solutions for Aviation Industry',
        description: 'Transform aviation operations with cutting-edge AI solutions for safety, efficiency, and passenger experience.',
        useCases: [
          { title: 'Digital Twins', description: 'Create virtual replicas of aircraft for predictive maintenance and performance optimization.' },
          { title: 'Computer Vision', description: 'Improve baggage tracking accuracy and automate visual inspections with AI-powered imaging.' },
          { title: 'Passenger Experience', description: 'Personalize travel experiences with AI-driven recommendations and smart customer service.' }
        ]
      },
      {
        id: 'retail',
        name: 'Retail & eCommerce',
        headline: 'AI for Retail & eCommerce Excellence',
        description: 'We\'ve helped global retail & eCommerce companies optimize advertising processes using AI, ML, and ad targeting.',
        useCases: [
          { title: 'Recommendation Engines', description: 'Boost sales with personalized product recommendations based on customer behavior and preferences.' },
          { title: 'Inventory Optimization', description: 'Predict demand patterns and optimize stock levels to reduce costs and prevent stockouts.' },
          { title: 'Customer Segmentation', description: 'Identify high-value customer segments and tailor marketing strategies for maximum ROI.' }
        ]
      },
      {
        id: 'legal',
        name: 'Legal',
        headline: 'AI Solutions for Legal Practice',
        description: 'We leverage advanced AI technologies to optimize various aspects of legal practice.',
        useCases: [
          { title: 'Contract Analysis', description: 'Automate contract review, clause extraction, and risk identification with NLP-powered tools.' },
          { title: 'Legal Research', description: 'Accelerate case research with AI that surfaces relevant precedents and legal documents.' },
          { title: 'Compliance Monitoring', description: 'Continuously monitor regulatory changes and ensure compliance with automated alerts.' }
        ]
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing',
        headline: 'AI for Manufacturing Excellence',
        description: 'We\'ve helped leading manufacturing companies enhance management efficiency and production quality.',
        useCases: [
          { title: 'Predictive Maintenance', description: 'Prevent equipment failures with AI models that predict maintenance needs before breakdowns.' },
          { title: 'Quality Control', description: 'Automate visual inspection and detect defects in real-time with computer vision.' },
          { title: 'Supply Chain Optimization', description: 'Optimize logistics and inventory with AI-driven demand forecasting and route planning.' }
        ]
      },
      {
        id: 'healthcare',
        name: 'Healthcare',
        headline: 'AI Solutions for Healthcare',
        description: 'Transform patient care and operational efficiency with AI-powered healthcare solutions.',
        useCases: [
          { title: 'Medical Imaging', description: 'Enhance diagnostic accuracy with AI-powered analysis of X-rays, MRIs, and CT scans.' },
          { title: 'Patient Outcome Prediction', description: 'Predict patient risks and outcomes to enable proactive, personalized care.' },
          { title: 'Clinical Workflow Optimization', description: 'Streamline administrative tasks and optimize resource allocation with intelligent automation.' }
        ]
      }
    ],
    // Glossary - Expanded Q&A (like Addepto)
    glossary: [
      {
        question: 'What is artificial intelligence?',
        answer: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think, learn, and make decisions. AI systems can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.',
        type: 'paragraph'
      },
      {
        question: 'How does artificial intelligence work?',
        answer: 'AI works by combining large datasets with intelligent algorithms that allow the software to learn from patterns in the data. The process involves: 1) Data collection and preprocessing, 2) Training machine learning models on this data, 3) Testing and validating the models, 4) Deploying the models for real-world predictions, 5) Continuous learning and improvement based on new data.',
        type: 'numbered'
      },
      {
        question: 'How to prepare for AI implementation?',
        answer: 'Preparing for AI implementation involves several key steps: 1) Define clear business objectives and use cases, 2) Assess your data quality and availability, 3) Build or acquire the right technical infrastructure, 4) Develop internal AI literacy and skills, 5) Start with a proof of concept before full-scale deployment, 6) Establish governance and ethical guidelines.',
        type: 'numbered'
      },
      {
        question: 'What business problems could we solve with AI?',
        answer: 'AI can address numerous business challenges including: Fraud detection and prevention, Customer service automation through chatbots, Predictive maintenance for equipment, Demand forecasting and inventory optimization, Personalized marketing and recommendations, Quality control and defect detection, Risk assessment and credit scoring, Document processing and data extraction.',
        type: 'list',
        items: ['Fraud detection', 'Customer service automation', 'Predictive maintenance', 'Demand forecasting', 'Personalized marketing', 'Quality control', 'Risk assessment', 'Document processing']
      },
      {
        question: 'What are the 7 stages of artificial intelligence?',
        answer: 'The evolution of AI is often described in 7 stages:',
        type: 'stages',
        stages: [
          { stage: 1, title: 'Rule-based AI systems', description: 'Simple if-then rules programmed by humans.' },
          { stage: 2, title: 'Context-awareness', description: 'Systems that understand context and adapt responses.' },
          { stage: 3, title: 'Domain-specific expertise', description: 'AI specialized in specific fields like medical diagnosis.' },
          { stage: 4, title: 'Reasoning machines', description: 'Systems capable of logical reasoning and inference.' },
          { stage: 5, title: 'Self-aware AI', description: 'AI with understanding of its own existence (theoretical).' },
          { stage: 6, title: 'Artificial General Intelligence', description: 'Human-level intelligence across all domains.' },
          { stage: 7, title: 'Artificial Superintelligence', description: 'Intelligence surpassing human capabilities (theoretical).' }
        ]
      },
      {
        question: 'How to integrate AI solutions with internal systems?',
        answer: 'Integrating AI with internal systems requires: API-based integration for real-time communication, Data pipeline setup for training and inference, Security protocols for data protection, Gradual rollout with parallel running of old and new systems, Performance monitoring and feedback loops, Employee training on new AI-powered workflows.',
        type: 'paragraph'
      },
      {
        question: 'What does an AI consultant do?',
        answer: 'An AI consultant helps organizations identify opportunities for AI adoption, develops implementation strategies, and guides the technical execution. Key responsibilities include: Assessing business processes for AI potential, Defining project scope and success metrics, Selecting appropriate AI technologies and vendors, Managing proof of concept development, Overseeing production deployment, Ensuring knowledge transfer to internal teams.',
        type: 'paragraph'
      }
    ],
    expertise: ['Retail & eCommerce', 'Logistics', 'Finance & Banking', 'Manufacturing', 'Aviation', 'Healthcare'],
    deliverables: ['AI Opportunity Radar', 'ROI Analysis', 'Technology Roadmap', 'Make vs Buy Strategy'],
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    phase: 'discover',
    description: 'Strategic guidance to identify AI opportunities and build an intelligence-first roadmap.',
    icon: 'Compass',
    heroTitle: 'AI Strategy & Consulting',
    heroSubtitle: 'Align AI initiatives with business goals through roadmap design, use-case prioritization, and governance planning.',
    deliverables: ['AI Maturity Assessment', 'Use Case Portfolio', 'Transformation Roadmap', 'Governance Framework'],
    whyInvest: [
      {
        title: 'Aligned priorities',
        description: 'Focus AI investment on the use cases that move revenue, margin, or efficiency.',
        icon: 'Target'
      },
      {
        title: 'Reduced risk',
        description: 'Validate feasibility, data readiness, and compliance before building.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Stakeholder buy-in',
        description: 'Create business cases and KPIs that secure executive support.',
        icon: 'Users'
      },
      {
        title: 'Actionable roadmap',
        description: 'Define the phases, milestones, and owners needed to execute.',
        icon: 'Map'
      }
    ],
    process: [
      { title: 'Discovery & stakeholder interviews', description: 'Align objectives, constraints, and success metrics across teams.' },
      { title: 'Data & systems assessment', description: 'Evaluate data quality, tooling, and integration complexity.' },
      { title: 'Use-case prioritization', description: 'Score opportunities by impact, feasibility, and timeline.' },
      { title: 'Roadmap & governance', description: 'Define delivery phases, KPIs, and responsible AI guardrails.' }
    ],
    expertise: ['AI opportunity mapping', 'ROI modeling', 'Responsible AI governance', 'Executive workshops'],
  },
  {
    id: 'ai-poc',
    layout: 'premium',
    title: 'AI Proof of Concept (PoC)',
    phase: 'discover',
    description: 'Rapid prototyping to validate technical feasibility and business value.',
    icon: 'TestTube',
    heroTitle: 'AI Proof of Concept (PoC) Services',
    heroSubtitle: 'Eliminate the guesswork from AI investments. Our rapid PoC services help you test, validate, and refine your AI concepts before scaling—saving you time, money, and costly mistakes.',
    contentIntroTitle: 'AI Proof of Concept — structured validation for reliable AI outcomes',
    subNavLinks: [
      { id: 'poc-business-benefits', label: 'PoC Business Benefits' },
      { id: 'poc-validation', label: 'Why validate' },
      { id: 'poc-risks', label: 'What happens when you skip validation' },
      { id: 'poc-acceleration', label: 'Can validation accelerate?' },
      { id: 'poc-buyin', label: 'Executive buy-in' },
      { id: 'poc-value', label: 'Value beyond project' },
    ],
    sidebarNav: [
      { id: 'business-benefits', label: 'Business benefits' },
      { id: 'development-process', label: 'PoC process' },
      { id: 'key-benefits', label: 'Key benefits' },
      { id: 'technology-stack', label: 'Technology stack' },
      { id: 'industry-expertise', label: 'Applications' },
      { id: 'glossary', label: 'FAQ' },
    ],
    contentSections: {
      'poc-business-benefits': {
        title: 'Business Benefits of AI PoC',
        intro: 'Why you need PoC',
        description: 'Validate feasibility, de-risk investments, and secure stakeholder support before scaling.',
        points: [
          { title: 'Reduce risk', description: 'Validate assumptions early and avoid costly surprises and budget overruns.' },
          { title: 'Faster delivery', description: 'Deliver AI solutions faster by proving core functionality upfront.' },
          { title: 'Stakeholder buy-in', description: 'Use transparent PoC results to secure executive support.' },
          { title: 'Capability building', description: 'Develop repeatable AI evaluation skills across the organization.' },
          { title: 'Evidence-driven decisions', description: 'Base investment on measured outcomes, not assumptions.' },
        ],
      },
      'poc-validation': {
        title: 'Why AI projects need validation before development',
        intro: 'AI PoCs address AI-specific risks: data variability, performance drift, and integration complexity.',
        description: 'Traditional software assumptions rarely hold for AI. PoCs validate that your models perform with your real-world data, constraints, and workloads.',
        points: [
          { title: 'Real-world data check', description: 'Prove accuracy and robustness against messy, varied production data.' },
          { title: 'Integration realism', description: 'Surface integration and performance limits before full build.' },
        ],
        additionalText: 'PoCs ensure your AI strategy is built on measured reality rather than optimistic projections.'
      },
      'poc-risks': {
        title: 'What happens when you skip validation?',
        intro: 'Most AI project failures are slow and expensive, not dramatic.',
        description: 'Teams often build interfaces around models that cannot deliver promised accuracy. Data preparation and edge cases consume unplanned time and budget.',
        points: [
          { title: 'Hidden data costs', description: 'Unbudgeted preprocessing and labeling work delays delivery.' },
          { title: 'Performance gaps', description: 'Models that work in lab settings fail under production constraints.' },
        ],
      },
      'poc-acceleration': {
        title: 'Can validation accelerate your timeline?',
        intro: 'Yes—PoCs are shortcuts, not detours.',
        description: 'By validating core AI functionality upfront, teams avoid mid-project rework and focus on features that actually work.',
        points: [
          { title: 'Fewer pivots later', description: 'Catch blockers when they are cheap to fix.' },
          { title: 'Focused delivery', description: 'Ship working AI instead of debugging impossible features.' },
        ],
      },
      'poc-buyin': {
        title: 'How to gain executive buy-in for AI initiatives',
        intro: 'Executives fund what they can see and measure.',
        description: 'PoCs provide concrete performance data, realistic timelines, and clear risk profiles to enable informed investment decisions.',
        points: [
          { title: 'Transparent evidence', description: 'Show real metrics instead of promises.' },
          { title: 'Investment clarity', description: 'Provide honest feasibility, cost, and ROI projections.' },
        ],
      },
      'poc-value': {
        title: 'Value beyond the current project',
        intro: 'The biggest PoC outcome is organizational AI fluency.',
        description: 'Teams learn how to evaluate AI opportunities, set realistic expectations, and avoid expensive dead ends.',
        points: [
          { title: 'Reusable playbooks', description: 'Create repeatable validation methods for future AI work.' },
          { title: 'Realistic expectations', description: 'Know data, performance, and integration needs before committing.' },
        ],
      },
    },
    developmentTimeline: {
      title: 'AI PoC process',
      intro: 'A six-stage approach to validate feasibility and business value before full development.',
      steps: [
        { step: 1, icon: 'MessageSquare', title: 'Initial consultation & scoping', description: 'Align on goals, data landscape, risks, scope, and realistic timelines.' },
        { step: 2, icon: 'Search', title: 'Technical feasibility deep-dive', description: 'Assess data quality, system constraints, and integration complexity with a candid feasibility report.' },
        { step: 3, icon: 'FlaskConical', title: 'Rapid prototype development', description: 'Build a working prototype focused on core AI logic using your data and constraints.' },
        { step: 4, icon: 'Activity', title: 'Real-world testing & validation', description: 'Test against real data volumes, edge cases, and system constraints for hard performance evidence.' },
        { step: 5, icon: 'BarChart', title: 'Results analysis & business case', description: 'Translate technical findings into ROI, cost-to-scale, and risk assessments for stakeholders.' },
        { step: 6, icon: 'Compass', title: 'Strategic recommendation & next steps', description: 'Clear go/pivot/stop guidance with actionable next steps based on data, not optimism.' },
      ]
    },
    stats: [
      { number: '4+', label: 'AI Experts on board' },
      { number: '5+', label: 'Finished projects' },
      { number: '15+', label: 'Digital experts in group' },
      { number: '1+', label: 'Industries we work with' }
    ],
    techStackTabs: {
      categories: ['AI & Machine Learning', 'MLOps Tools', 'Cloud & Infrastructure', 'Data Engineering', 'ML Development Tools', 'Visualization'],
      items: {
        'AI & Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'JAX', 'Hugging Face Transformers'],
        'MLOps Tools': ['MLflow', 'Weights & Biases', 'Kubeflow', 'Apache Airflow', 'Metaflow', 'TensorFlow Serving'],
        'Cloud & Infrastructure': ['AWS SageMaker', 'Azure ML', 'Vertex AI', 'Docker', 'Kubernetes', 'Terraform'],
        'Data Engineering': ['Apache Spark', 'Databricks', 'Snowflake', 'Redshift', 'Apache Kafka'],
        'ML Development Tools': ['Python', 'R', 'Jupyter', 'VSCode', 'Git', 'DVC'],
        'Visualization': ['Tableau']
      }
    },
    industrySectionTitle: 'Real-world AI PoC applications',
    // Real-world PoC applications across industries (tabbed)
    industryTabs: [
      {
        id: 'private-investments',
        name: 'Private Investments',
        headline: 'Portfolio analysis and risk modeling',
        description: 'Validate robo-advisory logic, credit risk scoring, and due diligence automation against real market conditions before production rollout.',
        useCases: [
          { title: 'Risk modeling', description: 'Stress-test credit and portfolio risk models to balance detection accuracy with false positives.' },
          { title: 'Automation checks', description: 'Validate due-diligence and document automation against messy, unstructured data.' },
          { title: 'Scenario testing', description: 'Model performance under volatile or sparse data to avoid surprises post-launch.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      },
      {
        id: 'aviation',
        name: 'Aviation',
        headline: 'Flight safety, efficiency, and passenger experience',
        description: 'Prove computer vision, digital twin, and predictive models against realistic operational data to ensure reliability and safety.',
        useCases: [
          { title: 'Predictive maintenance', description: 'Benchmark digital twin and sensor models against edge cases and noisy signals.' },
          { title: 'Visual inspections', description: 'Validate vision models for baggage and airframe inspection under variable lighting and angles.' },
          { title: 'Passenger experience', description: 'Test personalization and disruption-management models with live operational constraints.' }
        ],
        image: '/assets/images/industries/industry_aviation_real.png'
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing',
        headline: 'Predictive maintenance and quality control',
        description: 'Validate plant-floor AI against harsh environments so pilots translate into production ROI.',
        useCases: [
          { title: 'Anomaly detection', description: 'Test anomaly and defect detection models on real sensor noise and image variability.' },
          { title: 'Yield optimization', description: 'Experiment with process-parameter tuning models to quantify throughput impact.' },
          { title: 'Safety & compliance', description: 'Verify models meet safety thresholds before integrating with control systems.' }
        ],
        image: '/assets/images/industries/industry_manufacturing_real.png'
      },
      {
        id: 'retail-ecommerce',
        name: 'Retail & eCommerce',
        headline: 'Personalization and demand forecasting',
        description: 'Validate recommenders, pricing, and demand models with real inventory, seasonality, and catalog constraints.',
        useCases: [
          { title: 'Recommendation engines', description: 'Prove uplift on live behavioral data before full rollout.' },
          { title: 'Dynamic pricing', description: 'Model margin and conversion impacts under competitive pressure and stock limits.' },
          { title: 'Demand forecasting', description: 'Test forecast accuracy against historical volatility and promotions.' }
        ],
        image: '/assets/images/industries/industry_retail_real.png'
      },
      {
        id: 'healthcare',
        name: 'Healthcare',
        headline: 'Clinical AI validation',
        description: 'Ensure diagnostic and triage models meet clinical safety, bias, and compliance requirements before deployment.',
        useCases: [
          { title: 'Imaging and NLP', description: 'Validate accuracy on real clinical images and notes across diverse populations.' },
          { title: 'Operational AI', description: 'Test bed-management and staffing models against real throughput constraints.' },
          { title: 'Governance', description: 'Document model behavior, drift, and auditability to satisfy regulatory review.' }
        ],
        image: '/assets/images/industries/industry_healthcare_real.png'
      }
    ],
    applications: [
      { title: 'Predictive maintenance & quality control', description: 'Validate models against noisy sensor data and production constraints before scale.' },
      { title: 'Personalization & demand forecasting', description: 'Test recommendation, dynamic pricing, and demand models with realistic inventory and seasonality.' },
      { title: 'Document intelligence & chatbots', description: 'Prove NLP accuracy on real documents and FAQs before integrating into workflows.' },
    ],
    keyBenefitsDetailed: [
      { title: 'Evidence-based investment decisions', description: 'Replace assumptions with measured feasibility, performance, and ROI before you fund a full build.' },
      { title: 'Comprehensive risk assessment', description: 'Surface data gaps, integration complexity, latency constraints, and model limitations early.' },
      { title: 'Accelerated delivery', description: 'Avoid mid-project pivots by validating core AI behavior first, keeping builds focused on what works.' },
      { title: 'Strategic implementation guidance', description: 'Walk away with a scale plan, cost model, and phased roadmap aligned to stakeholder expectations.' },
      { title: 'Capability building', description: 'Transfer PoC playbooks, evaluation criteria, and lessons so your team repeats success across use cases.' },
      { title: 'Scalability clarity', description: 'Know infra needs, performance ceilings, and optimization levers before you move to production.' }
    ],
    clients: ['ABB', 'Porsche', 'Volvo', 'BMW', 'Nissan', 'Hertz', 'Continental', 'Property Finder', 'Pernod Ricard', 'Ziff Davis', 'WGU', 'PaperPlanes'],
    testimonials: [
      { quote: 'Addepto has an individual approach from the very beginning. They are open to change and ready to face difficulties.', name: 'Bobby Newman', title: 'VP Engineering, J2 Global' },
      { quote: 'They investigated our needs and advised on the best processes. They felt like a part of our team.', name: 'CEO', title: 'SimpleCater' },
      { quote: 'Addepto\'s flexible team reacts to tasks rapidly.', name: 'Head of IT', title: 'SMEO S.A.' },
      { quote: 'Their approach allowed us to improve the product taking into account all our requirements. The result fully satisfied our company.', name: 'Matthew Muldoon', title: 'CPO, KeyedIn Solutions' }
    ],
    methodology: {
      title: 'Our AI PoC methodology',
      intro: 'Rapid experimentation, clear evidence, and production-grade rigor where it matters. We prioritize speed of learning over code polish so you can make confident investment decisions fast.',
      steps: [
        { title: 'Hypothesis first', description: 'Define the business hypothesis, success metrics, and data requirements up front.' },
        { title: 'Use production-grade tools in PoC mode', description: 'Containerized environments, experiment tracking, and reusable components for fast iteration.' },
        { title: 'Validate with real-world constraints', description: 'Test on representative data volumes, edge cases, latency limits, and integration touchpoints.' },
        { title: 'Evidence > promises', description: 'Deliver clear performance data, risks, and cost-to-scale so stakeholders can decide with confidence.' },
        { title: 'Transfer the playbook', description: 'Document what worked, what did not, and how to repeat validation across future AI initiatives.' }
      ]
    },
    successStories: [
      { title: 'Predictive maintenance & quality control', description: 'Validated computer vision and sensor models against noisy plant-floor data to cut unplanned downtime and false alarms.' },
      { title: 'Personalization & demand forecasting', description: 'Proved uplift of recommenders and dynamic pricing models with live inventory and seasonality constraints before scaling.' },
      { title: 'Document intelligence & chatbots', description: 'Measured NLP accuracy on real contracts and FAQs to ensure bots and automation could handle production queries reliably.' }
    ],
    relatedArticles: [
      { title: 'AI Proof of Concept – Steps and Benefits', date: 'March 27, 2025' },
      { title: 'Challenges of Implementing AI: How to Overcome Them', date: 'February 17, 2022' },
      { title: 'Proof of Concept (PoC) in Data Science Projects', date: 'December 21, 2021' },
      { title: 'Best practices for Databricks PoC (Proof of Concept)', date: 'November 04, 2025' }
    ],
    glossary: [
      {
        question: 'How long does an AI PoC typically take?',
        answer: 'Most AI PoCs complete in 2–6 weeks depending on complexity and data readiness. Timeline includes assessment, prototype, testing, and results analysis.',
        type: 'paragraph'
      },
      {
        question: 'What\'s the difference between a PoC and full AI implementation?',
        answer: 'A PoC validates feasibility and business viability with minimal investment. Full implementation builds production-ready systems with UI, security, scalability, and full integration.',
        type: 'paragraph'
      },
      {
        question: 'What data do we need for an AI PoC?',
        answer: 'Representative business data samples (often 3–6 months) to test model performance. Discovering data limitations is a common, valuable PoC outcome.',
        type: 'paragraph'
      },
      {
        question: 'How do you measure PoC success?',
        answer: 'Success is defined upfront: technical performance (accuracy, speed, integration), business impact (ROI, efficiency), and implementation viability (resources, timeline, risks).',
        type: 'paragraph'
      }
    ],
    deliverables: ['Working Prototype', 'Feasibility Report', 'Cost-Benefit Analysis', 'Technical Blueprint'],
  },
  {
    id: 'big-data-consulting',
    layout: 'premium',
    title: 'Big Data Consulting',
    phase: 'discover',
    description: 'Strategies to handle massive data scales and extract meaningful insights.',
    icon: 'Database',
    heroTitle: 'Big Data Consulting Services',
    heroSubtitle: 'We help you harness the power of your data to drive business growth. Our Big Data consulting services enable you to store, process, and analyze massive datasets efficiently.',
    contentIntroTitle: 'Big Data Consulting – unlock value from your data',

    // Content sections for dynamic switching
    contentSections: {
      'big-data-services': {
        title: 'Big Data Consulting Services',
        navLabel: 'Big Data Services',
        intro: 'We provide comprehensive <strong>Big Data consulting services to help you manage volume, velocity, and variety of your data assets.</strong>',
        description: 'From data strategy to implementation of complex data lakes and analytics platforms, we guide you through every step of your data journey.',
        points: [
          {
            title: 'Big Data Strategy',
            description: 'Define a roadmap for data maturity, governance, and monetization.'
          },
          {
            title: 'Data Architecture',
            description: 'Design scalable, secure, and cost-effective data infrastructure on cloud or on-premise.'
          },
          {
            title: 'Data Engineering',
            description: 'Build robust ETL/ELT pipelines to ingest, clean, and transform data for analysis.'
          },
          {
            title: 'Real-time Analytics',
            description: 'Implement streaming architectures for instant insights and decision making.'
          }
        ],
        additionalText: 'Our experts help you choose the right technologies and architectures to solve your specific data challenges, ensuring scalability and performance.'
      },
      'data-strategy': {
        title: 'Data Strategy & Governance',
        navLabel: 'Data Strategy',
        intro: 'A solid data strategy is the foundation of a data-driven organization.',
        description: 'We help you establish capabilities to manage data as a strategic asset, ensuring quality, security, and compliance.',
        points: [
          {
            title: 'Data Governance',
            description: 'Establish policies and standards to ensure data accuracy, consistency, and security across the enterprise.'
          },
          {
            title: 'Data Quality Management',
            description: 'Implement processes and tools to monitor and improve data quality continuously.'
          },
          {
            title: 'Compliance & Security',
            description: 'Ensure your data practices meet regulatory requirements (GDPR, HIPAA, etc.) and security standards.'
          }
        ]
      },
      'big-data-tech': {
        title: 'Advanced Big Data Technologies',
        navLabel: 'Technologies',
        intro: 'We leverage the latest open-source and cloud-native technologies to build modern data platforms.',
        description: 'Our team is proficient in the modern data stack, including distributed computing, cloud data warehouses, and orchestrators.',
        points: [
          {
            title: 'Cloud Data Platforms',
            description: 'Expertise in AWS, Azure, and Google Cloud data ecosystems (Redshift, Synapse, BigQuery).'
          },
          {
            title: 'Distributed Processing',
            description: 'Utilizing frameworks like Apache Spark and Databricks for massive scale data processing.'
          },
          {
            title: 'Modern Data Stack',
            description: 'Implementing modern tools like Snowflake, dbt, and Airflow for agile data operations.'
          }
        ]
      },
      'data-benefits': {
        title: 'Benefits of Big Data Implementation',
        navLabel: 'Benefits',
        intro: 'Transforming raw data into insights leads to tangible business outcomes.',
        description: 'Effective Big Data initiatives drive efficiency, innovation, and competitive advantage.',
        points: [
          {
            title: 'Informed Decision Making',
            description: 'Replace guesswork with evidence-based decisions derived from comprehensive data analysis.'
          },
          {
            title: 'Operational Efficiency',
            description: 'Optimize processes and reduce costs by identifying inefficiencies hidden in operational data.'
          }
        ]
      },
      'our-team': {
        title: 'Expert Big Data Consultants',
        navLabel: 'Our Team',
        intro: 'Our team consists of certified data engineers, architects, and scientists.',
        description: 'We work as an extension of your team to transfer knowledge and build internal capabilities.',
        points: [
          {
            title: 'Experienced Architects',
            description: 'Designers of petabyte-scale data platforms for global enterprises.'
          },
          {
            title: 'Certified Engineers',
            description: 'Experts certified in major cloud platforms and big data technologies.'
          },
          {
            title: 'End-to-End Support',
            description: 'From initial assessment to production deployment and 24/7 support.'
          }
        ]
      }
    },

    // Development Process
    developmentTimeline: {
      title: 'Big Data Implementation Process',
      intro: 'A structured approach to transforming your data landscape, minimizing risk and maximizing value.',
      steps: [
        {
          step: 1,
          icon: 'Search',
          title: "Assessment & Strategy",
          description: "We analyze your current data maturity, business goals, and technical gaps to define a tailored big data strategy."
        },
        {
          step: 2,
          icon: 'Layout', // Changed icon
          title: "Architecture Design",
          description: "We design a scalable data architecture (Data Lake, Lakehouse, or Warehouse) that meets your performance and cost requirements."
        },
        {
          step: 3,
          icon: 'Database', // Changed icon
          title: "Platform Setup & Ingestion",
          description: "Setting up the infrastructure and building pipelines to ingest data from various sources (databases, APIs, logs)."
        },
        {
          step: 4,
          icon: 'Code', // Changed icon
          title: "Processing & Transformation",
          description: "Implementing data processing logic (ETL/ELT) to clean, enrich, and model data for consumption."
        },
        {
          step: 5,
          icon: 'BarChart', // Changed icon
          title: "Analytics & consumption",
          description: "Connecting BI tools and data science environments to the processed data for insights and reporting."
        }
      ]
    },

    // Stats
    stats: [
      { number: '40+', label: 'Data Engineers' },
      { number: '100+', label: 'Data Platforms Built' },
      { number: '10PB+', label: 'Data Processed' },
      { number: '98%', label: 'Client Satisfaction' }
    ],

    // Tech Stack Tabs
    techStackTabs: {
      categories: ['Cloud Platforms', 'Processing & Compute', 'Storage & Warehousing', 'Orchestration & ETL'],
      items: {
        'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud Platform (GCP)'],
        'Processing & Compute': ['Apache Spark', 'Databricks', 'Hadoop', 'Flink', 'Kafka'],
        'Storage & Warehousing': ['Snowflake', 'Amazon Redshift', 'Google BigQuery', 'Azure Synapse', 'Delta Lake'],
        'Orchestration & ETL': ['Apache Airflow', 'dbt', 'Dagster', 'Talend', 'Informatica']
      }
    },

    // Industry Expertise
    industryTabs: [
      {
        id: 'finance',
        name: 'Finance',
        headline: 'Big Data for FinTech & Banking',
        description: 'Secure, compliant, and real-time data solutions for the financial sector.',
        useCases: [
          { title: 'Fraud Detection', description: 'Real-time transaction analysis to detect and prevent fraud.' },
          { title: 'Risk Management', description: 'Aggregating data for comprehensive risk modeling and reporting.' },
          { title: 'Personalized Banking', description: '360-degree customer views for tailored financial products.' }
        ]
      },
      {
        id: 'retail',
        name: 'Retail',
        headline: 'Data-Driven Retail Operations',
        description: 'Optimize inventory, pricing, and customer experience with big data.',
        useCases: [
          { title: 'Supply Chain Analytics', description: 'End-to-end visibility and optimization of supply chain logistics.' },
          { title: 'Customer 360', description: 'Unified customer profiles for omnichannel personalization.' },
          { title: 'Demand Forecasting', description: 'Accurate inventory planning based on historical and real-time data.' }
        ]
      },
      {
        id: 'telecom',
        name: 'Telecom',
        headline: 'Big Data for Telecommunications',
        description: 'Managing massive data volumes for network optimization and customer retention.',
        useCases: [
          { title: 'Network Analytics', description: 'Predictive maintenance and capacity planning for network infrastructure.' },
          { title: 'Churn Prediction', description: 'Analyzing usage patterns to identify and retain at-risk customers.' },
          { title: 'CDR Analysis', description: 'Processing Call Detail Records for billing and usage insights.' }
        ]
      }
    ],

    // Glossary
    glossary: [
      {
        question: 'What is Big Data?',
        answer: 'Big Data refers to datasets that are too large or complex to be dealt with by traditional data-processing application software. It is characterized by the 3 Vs: Volume, Velocity, and Variety.',
        type: 'paragraph'
      },
      {
        question: 'What is a Data Lake?',
        answer: 'A Data Lake is a centralized repository that allows you to store all your structured and unstructured data at any scale. You can store your data as-is, without having to first structure the data, and run different types of analytics.',
        type: 'paragraph'
      },
      {
        question: 'What is the difference between ETL and ELT?',
        answer: 'ETL (Extract, Transform, Load) transforms data before loading it into the target system, common in traditional data warehousing. ELT (Extract, Load, Transform) loads raw data directly into the target system and transforms it there, leveraging modern cloud warehouse power.',
        type: 'paragraph'
      },
      {
        question: 'How do you ensure data security?',
        answer: 'We implement security at multiple layers including encryption at rest and in transit, robust identity and access management (IAM), network security groups, and regular security audits.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'generative-ai-consulting',
    title: 'Generative AI Consulting',
    phase: 'discover',
    description: 'Accelerate your digital transformation with domain-specific Generative AI solutions.',
    icon: 'Lightbulb',
    heroTitle: 'Generative AI Consulting',
    heroSubtitle: 'Accelerate your digital transformation and increase productivity with domain-specific Generative AI solutions.',
    valueProps: [
      {
        title: 'Generative AI Technology in Business',
        paragraph: 'By leveraging large datasets and recognizing patterns, Generative AI technology can generate new content, ideas, and solutions tailored to the needs of each organization. This enables businesses to automate tasks, create personalized content, and even develop new products and services.'
      },
      {
        title: 'Precision Customization for Industry-Specific Usage',
        paragraph: 'Domain-Specific Generative AI models can enhance operational efficiency, elevate customer experiences, and make more informed decisions by tailoring responses and outputs to the nuances of each industry. These models utilize enterprise data to ensure accuracy and relevance in every interaction.',
        bullets: ['More accurate', 'Lower hallucinations', 'Better flexibility', 'Lower cost of usage']
      },
      {
        title: 'Improved Data Privacy and Reduced Hallucinations',
        paragraph: 'By using a closed, secured environment for data processing, domain-specific models reduce the likelihood of hallucinations and ensure data integrity. Models trained on enterprise data provide accurate, predictable results while minimizing risk.'
      },
      {
        title: 'Why Generative AI is crucial?',
        bullets: [
          'Develop a robust strategy to leverage Gen AI for the right use cases',
          'Choose the optimal technology and models aligned with your data & security needs',
          'Implement governance and compliance to reduce risk',
          'Avoid costly missteps by validating feasibility early'
        ]
      },
      {
        title: 'Generative AI Proof of Concept (PoC): Benefits',
        bullets: [
          'Validates Technical Feasibility',
          'Secures Stakeholder Buy-in',
          'Minimizes Deployment Risks',
          'Optimizes Resource Allocation',
          'Accelerates Time to Market'
        ]
      }
    ],
    clients: ['SimpleCater', 'Inpost', 'Pernod Ricard', 'ABB', 'Jabil', 'Continental', 'Porsche', 'BMW', 'Nissan', 'Hertz'],
    checklist: [
      { title: 'Setting Gen AI Goals', text: 'Clearly define the specific generative tasks and desired outputs, such as content generation, code assistance, or customer support automation.' },
      { title: 'Aligning with Organizational Goals', text: 'Conduct a comprehensive assessment of your current AI capabilities and how they align with broader business objectives.' },
      { title: 'Develop a Roadmap', text: 'Create a detailed, phased roadmap outlining data requirements, model selection, integration steps, and governance milestones.' },
      { title: 'Assess Readiness', text: 'Perform a thorough readiness evaluation across data quality, security, infrastructure, and team skills before committing to build.' },
      { title: 'Identify Use Cases', text: 'Discover high-value, transformative use cases where Gen AI can deliver measurable impact with clear KPIs.' }
    ],
    industryUseCases: [
      {
        title: 'Generative AI Consulting in Private Investment',
        points: ['Deal Sourcing', 'Due Diligence Automation', 'Portfolio Management']
      },
      {
        title: 'Generative AI Consulting in Legal Industry',
        points: ['Streamlined Legal Research', 'Efficient Document Drafting', 'Data-Driven Insights']
      }
    ],
    keyBenefits: [
      'Accelerated Gen AI Adoption and Implementation',
      'Strategic Guidance and Roadmap Gen AI Development',
      'Customized Solutions and Recommendations',
      'Expertise in Ethical and Responsible AI'
    ],
    faq: [
      {
        q: 'What are the most important limitations and drawbacks of using Generative AI in business?',
        a: 'Limitations include hallucinations, data privacy concerns, model bias, cost of inference, and integration complexity. Each must be managed with the right data, guardrails, and governance.'
      },
      {
        q: 'How consulting Gen AI companies can overcome the Gen AI limitations?',
        a: 'Through careful use case selection, retrieval-augmented generation (RAG), domain fine-tuning, human-in-the-loop validation, and robust security/privacy controls.'
      },
      {
        q: 'What are some best practices for managing the risks of Generative AI in business?',
        a: 'Establish governance, monitor outputs for quality and bias, enforce data privacy, implement access controls, and measure business impact continuously.'
      }
    ]
  },
  {
    id: 'custom-ai-chatbot',
    layout: 'premium',
    title: 'Custom AI Chatbot Development',
    phase: 'discover',
    description: 'Build intelligent, domain-specific chatbots that deliver accurate, hallucination-free responses tailored to your business.',
    icon: 'MessageCircle',
    heroTitle: 'AI Chatbot Development Services',
    heroSubtitle: 'Unlock the power of AI chatbots that stay on point and deliver reliable, domain-specific answers—no hallucinations, just accurate responses tailored to your business needs.',

    // Sidebar navigation
    sidebarNav: [
      { id: 'business-benefits', label: 'Business benefits' },
      { id: 'development-process', label: 'Development process' },
      { id: 'industry-expertise', label: 'Industry expertise' },
      { id: 'technology-stack', label: 'Technology stack' },
      { id: 'key-benefits', label: 'Key benefits' },
      { id: 'glossary', label: 'FAQ' },
    ],

    // Content sections for Key Insights tabs
    contentSections: {
      'what-is-chatbot': {
        title: 'What is a custom AI chatbot?',
        navLabel: 'What is a chatbot?',
        intro: 'A custom AI chatbot is a <strong>tailored software application designed to interact with users through text or voice</strong>, providing responses and services based on specific business needs.',
        description: 'Unlike generic chatbots that use a one-size-fits-all approach, custom chatbots are developed using data unique to a business, enabling them to understand and respond to customer inquiries in a personalized manner.',
        points: [
          { title: '24/7 Availability', description: 'Provide round-the-clock support ensuring customer inquiries are addressed promptly at any time, improving satisfaction and preventing lost sales.' },
          { title: 'Lead Generation', description: 'Engage website visitors, qualify leads, and guide potential customers towards relevant products and services to drive higher conversion rates.' },
          { title: 'Scalability', description: 'As customer interactions increase, chatbots effortlessly handle larger volumes of inquiries without the need for additional resources.' },
          { title: 'System Integration', description: 'Custom chatbots integrate with existing systems, adhere to brand voice, and handle specific tasks like processing transactions or managing appointments.' }
        ],
        additionalText: 'Custom AI provides round-the-clock availability, ensuring that customer inquiries are addressed promptly at any time. This constant support not only improves customer satisfaction but also prevents potential lost sales that might occur due to delayed responses.'
      },
      'limitations': {
        title: 'Typical limitations of non-customized chatbots',
        navLabel: 'Limitations',
        intro: 'Non-customized AI chatbots generally face several limitations that can hinder their effectiveness in business environments.',
        description: 'Understanding these limitations is crucial for making informed decisions about chatbot development.',
        points: [
          { title: 'Lack of Personalization', description: 'Generic responses that do not cater to the specific needs or preferences of individual users, leading to less engaging interactions.' },
          { title: 'Inflexibility', description: 'Non-customized chatbot solutions may not integrate well with existing business systems, limiting their functionality and ability to provide seamless user experiences.' },
          { title: 'Hallucinations', description: 'Large Language Models can sometimes generate responses that appear plausible but are factually incorrect or nonsensical, leading to misleading or confusing information.' },
          { title: 'Lack of Contextual Awareness', description: 'LLM-based AI chatbots may struggle with nuanced or context-dependent queries, resulting in misinterpretation of user intent and delivery of oversimplified answers.' },
          { title: 'Interpretability', description: 'LLMs\' decision-making processes can be opaque, making it difficult for users to understand how chatbots arrive at specific conclusions.' },
          { title: 'Security Risks', description: 'LLMs can be vulnerable to prompt injection attacks where malicious users manipulate input prompts to generate harmful content.' }
        ]
      },
      'techniques': {
        title: 'Key techniques for enhancing LLM-based chatbots',
        navLabel: 'Techniques',
        intro: 'Here are some key techniques for enhancing and overcoming the limitations of LLM-based chatbots.',
        description: 'Our team leverages these advanced methods to build reliable, accurate chatbot solutions.',
        points: [
          { title: 'Retrieval Augmented Generation (RAG)', description: 'RAG combines the capabilities of pre-trained LLMs with an external data source. It allows LLMs to access relevant information to generate more accurate, up-to-date and contextually relevant responses, reducing "hallucinated" responses by grounding outputs in domain-specific knowledge.' },
          { title: 'Fine-tuning', description: 'Fine-tuning involves further training an LLM on domain-specific data to improve its understanding and response generation for a particular application. This helps overcome the limitations of generic LLMs by adapting them to the specific context and terminology of the chatbot\'s use case.' },
          { title: 'Prompt Engineering', description: 'Prompt engineering focuses on crafting effective prompts to guide the chatbot\'s response. By designing prompts that elicit the desired information or responses from the LLM, it can enhance the quality of interactions and mitigate issues like lack of context or irrelevant outputs.' },
          { title: 'Robust Evaluation Methods', description: 'Rigorous evaluation methods including human evaluation, automated metrics, adversarial testing, fairness evaluation, and out-of-distribution testing help pinpoint issues with nonsensical outputs, biases, and lack of generalization.' }
        ]
      },
      'costs-challenges': {
        title: 'Costs and challenges of LLM chatbot implementation',
        navLabel: 'Costs & Challenges',
        intro: 'Implementing LLM-based custom AI chatbots presents several challenges that organizations must navigate.',
        description: 'Understanding these challenges helps ensure effective deployment and operation.',
        points: [
          { title: 'Context Retention', description: 'Unlike traditional chatbots, LLMs can lose track of prior interactions, leading to repeated requests for information from users. This lack of contextual awareness can frustrate users.' },
          { title: 'Knowledge Stagnation', description: 'Once trained, LLMs have a fixed knowledge base that does not update with new information. This means chatbots may provide outdated responses in fast-paced industries.' },
          { title: 'Computational Resources', description: 'Training and fine-tuning LLMs require substantial computational power and resources, which can be a barrier for organizations lacking infrastructure or budget for high-performance computing.' },
          { title: 'Integration Complexity', description: 'Integrating LLM-based chatbots with existing business systems can be challenging. Organizations must ensure the chatbot can communicate effectively with various databases, APIs, and software solutions.' },
          { title: 'Security and Privacy', description: 'Deployment raises significant security and privacy concerns as chatbots often handle sensitive user data, making them potential targets for cyberattacks.' }
        ]
      }
    },

    // Development Process - 5-step vertical timeline
    developmentTimeline: {
      title: 'Learn about our chatbot development process',
      intro: 'We follow a structured approach to building custom AI chatbots that deliver real business value.',
      steps: [
        {
          step: 1,
          icon: 'Target',
          title: 'Defining objectives and use cases',
          description: 'Clarify AI chatbot goals by determining the primary purpose (customer support, information retrieval, sales assistance). Identify target audience and set success metrics such as response accuracy, user engagement, and satisfaction rates.'
        },
        {
          step: 2,
          icon: 'Database',
          title: 'Collecting and preparing training data',
          description: 'Gather relevant data including examples of user queries, responses, and domain-specific language. Ensure data quality by cleaning and preprocessing to remove inconsistencies and reflect expected interactions.'
        },
        {
          step: 3,
          icon: 'Cpu',
          title: 'Selecting and customizing the LLM',
          description: 'Choose an appropriate pre-trained LLM (e.g., GPT-4, Claude, Llama) that aligns with your chatbot\'s requirements. Customize the model using techniques like RAG, prompt engineering, or fine-tuning to generate relevant responses.'
        },
        {
          step: 4,
          icon: 'Code',
          title: 'Developing the chatbot application',
          description: 'Design the user interface and integrate the chatbot into existing communication tools. Connect to necessary databases, APIs, or CRM systems to enable data retrieval and processing.'
        },
        {
          step: 5,
          icon: 'Activity',
          title: 'Testing, deploying, and monitoring',
          description: 'Evaluate performance using real-world scenarios and gather feedback. Deploy on the intended platform and implement feedback loops, performance monitoring, and continuous optimization.'
        }
      ]
    },

    // Stats
    stats: [
      { number: '50+', label: 'Chatbots Deployed' },
      { number: '90%', label: 'Accuracy Rate' },
      { number: '24/7', label: 'Availability' },
      { number: '10x', label: 'Faster Response' }
    ],

    // Technology Stack
    techStackTabs: {
      categories: ['LLMs & NLP', 'RAG & Vector DBs', 'Cloud Infrastructure', 'Integration Tools'],
      items: {
        'LLMs & NLP': ['OpenAI GPT-4', 'Anthropic Claude', 'Meta Llama', 'Google Gemini', 'Hugging Face', 'LangChain', 'spaCy'],
        'RAG & Vector DBs': ['Pinecone', 'Weaviate', 'Chroma', 'Milvus', 'Qdrant', 'FAISS', 'Elasticsearch'],
        'Cloud Infrastructure': ['AWS (Lambda, Bedrock)', 'Azure OpenAI', 'Google Vertex AI', 'Docker', 'Kubernetes'],
        'Integration Tools': ['REST APIs', 'Webhooks', 'Zapier', 'Salesforce', 'Slack', 'Microsoft Teams', 'Twilio']
      }
    },

    // Industry Expertise
    industryTabs: [
      {
        id: 'aviation',
        name: 'Aviation',
        headline: 'LLM-based Assistance Bot to enhance airport operations',
        description: 'By leveraging OpenAI\'s LLMs, we successfully developed a custom AI chatbot capable of performing advanced text summarization. The integration of features like text extraction, contextual summarization, and interactive quizzes demonstrates the versatility and effectiveness of LLMs in enhancing user experience and information retrieval.',
        useCases: [
          { title: 'Passenger Assistance', description: 'Real-time flight information, gate changes, and boarding updates delivered instantly to travelers.' },
          { title: 'Airport Operations', description: 'Internal staff support for operational queries, procedure lookups, and incident reporting.' },
          { title: 'Multi-language Support', description: 'Automatic translation and localization for international airports serving diverse passenger demographics.' }
        ],
        image: '/assets/images/industries/industry_aviation_real.png'
      },
      {
        id: 'logistics',
        name: 'Logistics',
        headline: 'AI-driven Document Generation on AWS infrastructure',
        description: 'We worked on AI-driven document generation using LLMs to create a scalable, personalized, and efficient document generation solution on AWS infrastructure. By automating the document generation process with LLMs, we significantly reduced the time and resources required for manual document creation.',
        useCases: [
          { title: 'Automated Documentation', description: 'Generate shipping manifests, customs forms, and compliance documents automatically from structured data.' },
          { title: 'Customer Communication', description: 'Personalized shipment updates, delivery notifications, and tracking information via conversational AI.' },
          { title: 'Internal Knowledge Base', description: 'AI-powered search and retrieval of logistics procedures, carrier information, and regulatory guidelines.' }
        ],
        image: '/assets/images/industries/industry_manufacturing_real.png'
      }
    ],

    // Key Benefits
    keyBenefitsDetailed: [
      { title: '24/7 Availability', description: 'AI chatbots provide round-the-clock support, ensuring that customer inquiries are addressed at any time, regardless of business hours. This constant availability enhances customer satisfaction by reducing wait times and allowing users to receive immediate assistance.' },
      { title: 'Cost Efficiency', description: 'By automating routine tasks such as answering frequently asked questions, scheduling appointments, and processing transactions, chatbots significantly reduce operational costs. They minimize the need for extensive human customer support teams.' },
      { title: 'Personalization', description: 'AI chatbots can analyze customer data to deliver personalized experiences, tailoring interactions based on individual preferences and past behaviors. This capability improves customer engagement and enhances the likelihood of conversions.' },
      { title: 'Data Collection and Analysis', description: 'Chatbots are effective tools for gathering valuable data on customer interactions, preferences, and feedback. This information can be analyzed to identify trends and insights, enabling businesses to improve their services.' }
    ],

    // FAQ/Glossary
    glossary: [
      {
        question: 'How can custom AI chatbots be integrated with existing customer service systems?',
        answer: 'Custom AI chatbots can be integrated through API integration with existing platforms, accessing and updating customer information in real-time. They can connect to CRM systems, utilize existing knowledge bases for accurate responses, and be designed to learn from interactions and improve over time through continuous learning and improvement.',
        type: 'paragraph'
      },
      {
        question: 'What are the main considerations when choosing a technology for building an LLM chatbot?',
        answer: 'Key considerations include: 1) Purpose and scope - defining objectives and specific tasks, 2) Model selection - choosing the right LLM based on task complexity, 3) Integration capabilities - compatibility with existing systems, 4) Scalability and performance - ability to handle growth without compromising performance.',
        type: 'numbered'
      },
      {
        question: 'How can LLM chatbots be tailored to meet specific business needs?',
        answer: 'LLM chatbots can be tailored through customization of training data using proprietary data, industry-specific terminology, and customer interactions. Integration with existing systems like CRM platforms and knowledge bases enables access to real-time data. Advanced architectures like Retrieval-Augmented Generation (RAG) enhance contextually relevant responses while ensuring data security.',
        type: 'paragraph'
      },
      {
        question: 'How can businesses ensure their LLM chatbots are not generating misinformation?',
        answer: 'Businesses can reduce misinformation through: 1) Using RAG to ground responses in verified knowledge bases, 2) Implementing robust evaluation and testing before deployment, 3) Setting up human-in-the-loop validation for critical responses, 4) Continuous monitoring and feedback loops to catch and correct errors.',
        type: 'numbered'
      },
      {
        question: 'What is RAG (Retrieval Augmented Generation)?',
        answer: 'RAG is a technique that combines pre-trained LLMs with an external data source. It allows the model to access relevant, up-to-date information to generate more accurate and contextually relevant responses. RAG reduces hallucinations by grounding outputs in verified, domain-specific knowledge rather than relying solely on the model\'s training data.',
        type: 'paragraph'
      },
      {
        question: 'How can hiring a tech partner reduce the overall cost of LLM implementation?',
        answer: 'A tech partner brings expertise in model selection, infrastructure optimization, and best practices that reduce trial-and-error costs. They can leverage existing frameworks and accelerators, avoid common pitfalls, and deliver production-ready solutions faster. This translates to lower total cost of ownership and faster time to value.',
        type: 'paragraph'
      }
    ],

    expertise: ['Aviation', 'Logistics', 'Customer Service', 'Healthcare', 'Finance', 'Legal'],
    deliverables: ['Custom AI Chatbot', 'Integration Documentation', 'Training Data Pipeline', 'Monitoring Dashboard'],
  },

  // Phase 2: Organize Data
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Services',
    layout: 'premium',
    phase: 'organize',
    description: 'Turn your data into actionable insights with modern BI tools and dashboards.',
    icon: 'BarChart2',
    heroTitle: 'Business Intelligence & Analytics',
    heroSubtitle: 'Stop guessing. Start knowing. We build interactive, self-service dashboards that give every stakeholder the exact metrics they need to make faster decisions.',
    contentIntroTitle: 'Data Visualization & Reporting',

    contentSections: {
      'bi-strategy': {
        title: 'Self-Service BI Strategy',
        navLabel: 'Strategy',
        intro: 'Empower your teams to answer their own questions.',
        description: 'We move you away from "static PDF reports" to interactive environments where users can drill down, filter, and explore data without asking IT for help.',
        points: [
          { title: 'Dashboard Design', description: 'UI/UX focused design that tells a story, not just a grid of numbers.' },
          { title: 'Metric Definition', description: 'Establishing a "Single Source of Truth" for KPIs like ARR, Churn, or CAC.' }
        ]
      },
      'stack-modernization': {
        title: 'BI Modernization',
        navLabel: 'Modernization',
        intro: 'Retiring legacy systems.',
        description: 'Migrating from Crystal Reports or old Excel macros to modern cloud-native tools like PowerBI, Tableau, or Looker.',
        points: [
          { title: 'Performance Tuning', description: 'Making dashboards load in seconds, not minutes.' },
          { title: 'Mobile BI', description: 'Access critical metrics on your phone while on the go.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'BI Implementation Lifecycle',
      intro: 'From metric definition to company-wide adoption.',
      steps: [
        { step: 1, icon: 'Target', title: "KPI Workshop", description: "Defining exactly what success looks like and how to measure it." },
        { step: 2, icon: 'Database', title: "Data Modeling", description: "Creating star-schemas and semantic layers (LookML/DAX) for easy querying." },
        { step: 3, icon: 'Layout', title: "Dashboard Wireframing", description: "Designing the layout and user journey before building." },
        { step: 4, icon: 'BarChart', title: "Development", description: "Building the reports with interactive filters and drill-throughs." },
        { step: 5, icon: 'Users', title: "Training & Handover", description: "Teaching business users how to find insights themselves." }
      ]
    },

    stats: [
      { number: '300+', label: 'Dashboards Built' },
      { number: '100%', label: 'Self-Service Focus' }
    ],

    techStackTabs: {
      categories: ['BI Platforms', 'Semantic Layer', 'Embedded BI'],
      items: {
        'BI Platforms': ['PowerBI', 'Tableau', 'Looker', 'Metabase', 'Superset'],
        'Semantic Layer': ['Cube.js', 'dbt Semantic Layer', 'LookML'],
        'Embedded BI': ['Tremor', 'Nivo', 'Plotly', 'Highcharts']
      }
    },

    industryTabs: [
      {
        id: 'finance',
        name: 'Finance',
        headline: 'Financial Reporting',
        description: 'Automated P&L and Cash Flow.',
        useCases: [
          { title: 'Real-time P&L', description: 'Live view of margins across all product lines.' },
          { title: 'Expense Tracking', description: 'Drill down into operational spend by department.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      }
    ],

    glossary: [
      {
        question: 'PowerBI vs Tableau?',
        answer: 'PowerBI is great if you are in the Microsoft ecosystem (Office 365). Tableau is powerful for very complex, custom visualizations. Looker is best for governance and data modeling.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering Services',
    layout: 'premium',
    phase: 'organize',
    description: 'Build robust pipelines to ingest, process, and store your enterprise data.',
    icon: 'Wrench',
    heroTitle: 'Data Engineering Services',
    heroSubtitle: 'Boost data performance with our Data Engineering Services. We design, build, and optimize scalable data pipelines that turn raw chaos into reliable business value.',
    contentIntroTitle: 'Enterprise Data Architecture',

    contentSections: {
      'data-infrastructure': {
        title: 'Modern Data Infrastructure',
        navLabel: 'Infrastructure',
        intro: 'Data is your most valuable asset, but only if it is accessible.',
        description: 'We move you away from fragile, legacy scripts to robust, automated pipelines that handle petabytes of data without breaking.',
        points: [
          { title: 'Data Lakes & Warehouses', description: 'Architecting cost-effective storage on Snowflake, BigQuery, or Databricks.' },
          { title: 'ELT/ETL Pipelines', description: 'Resilient data movement using Airflow, dbt, and Spark.' },
          { title: 'Real-Time Streaming', description: 'Processing events instantly with Kafka or Kinesis for live dashboards.' }
        ]
      },
      'quality': {
        title: 'Data Quality & Governance',
        navLabel: 'Quality',
        intro: 'Garbage in, garbage out.',
        description: 'We implement automated testing for your data. If a feed breaks or data drifts, you know before your CEO sees the dashboard.',
        points: [
          { title: 'Data Observability', description: 'Monitoring freshness, volume, and schema changes.' },
          { title: 'Cataloging', description: 'Making data discoverable for analysts and data scientists.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Data Platform Implementation',
      intro: 'Building a foundation that scales.',
      steps: [
        { step: 1, icon: 'Search', title: "Discovery & Auditing", description: "Mapping your current data sources (ERPs, CRMs, Logs) and pain points." },
        { step: 2, icon: 'Map', title: "Architecture Design", description: "Designing a Modern Data Stack (MDS) that fits your budget and latency needs." },
        { step: 3, icon: 'Server', title: "Platform Setup", description: "terraform-based infrastructure provisioning for secure, reproducible environments." },
        { step: 4, icon: 'Database', title: "Pipeline Development", description: "Writing modular, testable dbt models and Airflow DAGs." },
        { step: 5, icon: 'RefreshCcw', title: "Migration & Sync", description: "Backfilling historical data and cutting over to the new live system." }
      ]
    },

    stats: [
      { number: '1PB+', label: 'Data Managed' },
      { number: '99.99%', label: 'Pipeline Uptime' },
      { number: '50%', label: 'Cost Savings' }
    ],

    techStackTabs: {
      categories: ['Warehouses', 'Transformation', 'Orchestration', 'Ingestion'],
      items: {
        'Warehouses': ['Snowflake', 'BigQuery', 'Databricks', 'Redshift'],
        'Transformation': ['dbt (Data Build Tool)', 'Spark', 'Pandas'],
        'Orchestration': ['Airflow', 'Dagster', 'Prefect', 'Mage'],
        'Ingestion': ['Fivetran', 'Airbyte', 'Kafka', 'Kinesis']
      }
    },

    industryTabs: [
      {
        id: 'logistics',
        name: 'Logistics',
        headline: 'Supply Chain Visibility',
        description: 'Track packages in real-time.',
        useCases: [
          { title: 'Route Optimization', description: 'Aggregate GPS data to optimize fleet efficiency.' },
          { title: 'Inventory Sync', description: 'Unified view of stock across 50+ warehouses.' }
        ],
        image: '/assets/images/industries/industry_transport_real.png'
      }
    ],

    glossary: [
      {
        question: 'ETL vs ELT?',
        answer: 'Modern cloud warehouses allow us to Load first, then Transform (ELT). This is faster and more flexible than the old ETL way because we don\'t need a separate processing server bottleneck.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'data-migration',
    title: 'Data Migration, Analytics & Modernisation',
    phase: 'organize',
    description: 'Modernise legacy systems, migrate securely, and unlock insights with future-ready data architectures.',
    icon: 'Database',
    heroTitle: 'Data Migration & Modernisation',
    heroSubtitle: 'Move legacy platforms to modern cloud and analytics stacks with minimal downtime and maximum confidence.',
    deliverables: ['Migration Blueprint', 'Modern Data Architecture', 'ETL/ELT Pipelines', 'Analytics & BI Enablement'],
    whyInvest: [
      {
        title: 'Secure migrations',
        description: 'Protect data integrity with validation, testing, and rollback planning.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Analytics-ready data',
        description: 'Unlock clean, trusted data for BI and AI initiatives.',
        icon: 'BarChart'
      },
      {
        title: 'Future-ready foundation',
        description: 'Adopt scalable cloud platforms that grow with your business.',
        icon: 'Server'
      },
      {
        title: 'Faster AI adoption',
        description: 'Prepare data assets for machine learning and automation.',
        icon: 'Rocket'
      }
    ],
    process: [
      { title: 'Discovery & inventory', description: 'Audit sources, schemas, and dependencies to plan the migration.' },
      { title: 'Target architecture design', description: 'Define cloud, lakehouse, and analytics targets with security in mind.' },
      { title: 'Migration & validation', description: 'Move data in phases with automated validation and reconciliation.' },
      { title: 'Analytics enablement', description: 'Connect BI tools, dashboards, and data consumers post-migration.' }
    ],
    expertise: ['Cloud data migration', 'Data engineering', 'BI & dashboards', 'Data warehouse modernization'],
  },
  {
    id: 'data-governance',
    title: 'Data Governance & Observability',
    layout: 'premium',
    phase: 'organize',
    description: 'Ensure data quality, security, and compliance across your organization.',
    icon: 'ShieldCheck',
    heroTitle: 'Data Governance & Compliance',
    heroSubtitle: 'Trust your data again. We implement frameworks that ensure your data is secure, accurate, and compliant with GDPR, CCPA, and HIPAA.',
    contentIntroTitle: ' Governance as an Enabler',

    contentSections: {
      'governance': {
        title: 'Enterprise Data Strategy',
        intro: 'Governance is not just red tape.',
        description: 'Good governance accelerates access by defining clear policies. Result: Analysts get data faster because safety checks are automated.',
        points: [
          { title: 'Data Catalogs', description: 'Implementing Alation or Atlan so everyone knows what data exists.' },
          { title: 'Access Control', description: 'Role-Based Access Control (RBAC) to ensure least-privilege security.' },
          { title: 'Lineage', description: 'Tracking data from source to dashboard to understand impact of changes.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Governance Implementation',
      intro: 'People, Process, then Technology.',
      steps: [
        { step: 1, icon: 'Users', title: "Council Formation", description: "Identifying data stewards and owners." },
        { step: 2, icon: 'FileText', title: "Policy Definition", description: "Writing the rules for retention, privacy, and quality." },
        { step: 3, icon: 'Search', title: "Tool Selection", description: "Choosing the right catalog and observability stack." },
        { step: 4, icon: 'Shield', title: "Enforcement", description: "Automating policy checks in the CI/CD pipeline." }
      ]
    },

    stats: [
      { number: '100%', label: 'GDPR Compliant' },
      { number: '0', label: 'Data Leaks' }
    ],

    techStackTabs: {
      categories: ['Catalogs', 'Quality', 'Privacy'],
      items: {
        'Catalogs': ['Atlan', 'Alation', 'Collibra', 'DataHub'],
        'Quality': ['Great Expectations', 'Soda', 'Monte Carlo'],
        'Privacy': ['OneTrust', 'Privacera', 'Immuta']
      }
    },

    industryTabs: [
      { id: 'finance', name: 'Finance', headline: 'BCBS 239 Compliance', description: 'Meeting regulatory reporting standards.', useCases: [{ title: 'Risk Reporting', description: 'Ensuring lineage for risk aggregation.' }], image: '/assets/images/industries/industry_finance_real.png' }
    ],

    glossary: [{ question: 'What is a Data Steward?', answer: 'A data steward is a business role responsible for the quality and definition of a specific data domain (e.g., "Customer Data").', type: 'paragraph' }]
  },
  {
    id: 'databricks-consulting',
    title: 'Databricks Consulting Services',
    layout: 'premium',
    phase: 'organize',
    description: 'Expert implementation and optimization of the Databricks Lakehouse platform.',
    icon: 'Box',
    heroTitle: 'Databricks Intelligence Platform',
    heroSubtitle: 'Unify your data, analytics, and AI. As Databricks partners, we help you build a Lakehouse architecture that democratizes data access while maintaining governance.',
    contentIntroTitle: 'The Lakehouse Advantage',

    contentSections: {
      'lakehouse': {
        title: 'Unified Data & AI',
        navLabel: 'Lakehouse',
        intro: 'The best of Data Warehouses and Data Lakes.',
        description: 'We implement the Lakehouse architecture using Delta Lake to give you ACID transactions on your data lake, enabling BI and ML on the same copy of data.',
        points: [
          { title: 'Delta Live Tables', description: 'Declarative ETL pipelines that are easy to maintain and test.' },
          { title: 'Unity Catalog', description: 'Centralized governance for files, tables, and ML models.' }
        ]
      },
      'migration': {
        title: 'Migration Services',
        navLabel: 'Migration',
        intro: 'Move from legacy safely.',
        description: 'Migrating from Hadoop, Oracle, or SQL Server to Databricks to reduce TCO (Total Cost of Ownership) and unlock scalability.',
        points: [
          { title: 'Schema Conversion', description: 'Automated tools to translate SQL dialects to Spark SQL.' },
          { title: 'Performance Optimization', description: 'Tuning partitions and Z-Ordering for 10x faster queries.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Databricks Adoption Journey',
      intro: 'From POC to Center of Excellence.',
      steps: [
        { step: 1, icon: 'Search', title: "Assessment", description: "Reviewing your current capacity and workload needs." },
        { step: 2, icon: 'Server', title: "Platform Setup", description: "Configuring Workspaces, Unity Catalog, and Cluster Policies." },
        { step: 3, icon: 'Database', title: "Ingestion", description: "Setting up Auto Loader to stream data efficiently." },
        { step: 4, icon: 'Cpu', title: "Workload Migration", description: "Moving ETL jobs and ML notebooks to the new environment." },
        { step: 5, icon: 'Users', title: "Enablement", description: "Training your team on Databricks SQL and MLflow." }
      ]
    },

    stats: [
      { number: '50+', label: 'Lakehouses Built' },
      { number: '40%', label: 'TCO Reduction' }
    ],

    techStackTabs: {
      categories: ['Core', 'Languages', 'Integrations'],
      items: {
        'Core': ['Delta Lake', 'Spark', 'MLflow', 'Unity Catalog', 'Photon Engine'],
        'Languages': ['PySpark', 'Scala', 'SQL', 'R'],
        'Integrations': ['PowerBI', 'dbt', 'Fivetran', 'Tableau']
      }
    },

    industryTabs: [
      {
        id: 'energy',
        name: 'Energy',
        headline: 'Predictive Maintenance',
        description: 'Analyzing sensor data from wind turbines.',
        useCases: [
          { title: 'IoT Streaming', description: 'Ingesting millions of events per second via Spark Structured Streaming.' }
        ],
        image: '/assets/images/industries/industry_energy_real.png'
      }
    ],

    glossary: [
      {
        question: 'Why Databricks over Snowflake?',
        answer: 'Databricks shines when you have heavy ML/AI workloads and unstructured data, thanks to its Spark heritage. Snowflake is often easier for pure SQL analysts. We help you choose or combine both.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'data-annotation',
    title: 'Data Annotation Services',
    layout: 'premium',
    phase: 'organize',
    description: 'High-quality labeling services to prepare your data for machine learning models.',
    icon: 'Tag',
    heroTitle: 'Data Annotation Services',
    heroSubtitle: 'High-quality data is the fuel for high-performance AI. We ensure your data is label-ready with pixel-perfect precision and enterprise-grade security.',
    contentIntroTitle: 'Ground Truth Engineering',

    contentSections: {
      'annotation-services': {
        title: 'Labeling at Scale',
        navLabel: 'Services',
        intro: 'Your model is only as good as your data.',
        description: 'We provide managed workforce solutions to label images, text, and video. We combine human expertise with AI-assisted labeling tools to reduce costs by 40%.',
        points: [
          { title: 'Computer Vision', description: '2D/3D Bounding boxes, polygons, keypoints, and semantic segmentation.' },
          { title: 'NLP', description: 'Named Entity Recognition (NER), sentiment analysis, and text classification.' },
          { title: 'RLHF', description: 'Human ranking of LLM outputs for safety alignment.' }
        ]
      },
      'quality-assurance': {
        title: 'Quality Assurance',
        navLabel: 'QA Process',
        intro: '99.5% Accuracy Guarantee.',
        description: 'We use a multi-tier review process (Consensus Algorithm) where multiple annotators label the same asset to ensure consistency.',
        points: [
          { title: 'Gold Sets', description: 'Testing annotators against known correct answers daily.' },
          { title: 'Real-time Feedback', description: 'Senior QA leads review edge cases instantly.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Annotation Workflow',
      intro: 'Secure data handling from ingestion to delivery.',
      steps: [
        { step: 1, icon: 'UploadCloud', title: "Data Ingestion", description: "Secure upload to our ISO-27001 certified environment." },
        { step: 2, icon: 'BookOpen', title: "Guidelines Setup", description: "Defining the 'Edge Case Bible' with your data science team." },
        { step: 3, icon: 'Users', title: "Pilot Batch", description: "Labeling 100 samples to calibrate accuracy and align expectations." },
        { step: 4, icon: 'Tag', title: "Production Labeling", description: "Scaling up to 50+ annotators using AI-assisted tooling." },
        { step: 5, icon: 'CheckSquare', title: "QA & Delivery", description: "Final validation and export in COCO/YOLO/JSON formats." }
      ]
    },

    stats: [
      { number: '5M+', label: 'Annotations' },
      { number: '99.8%', label: 'QA Score' },
      { number: 'ISO', label: 'Certified Security' }
    ],

    techStackTabs: {
      categories: ['Tools', 'Data Types', 'Formats'],
      items: {
        'Tools': ['CVAT', 'Labelbox', 'Scale AI', 'SuperAnnotate'],
        'Data Types': ['Images', 'Video', 'LiDAR', 'Audio', 'Text'],
        'Formats': ['COCO', 'Pascal VOC', 'YOLO', 'JSONL']
      }
    },

    industryTabs: [
      {
        id: 'automotive',
        name: 'Automotive',
        headline: 'Autonomous Driving Data',
        description: 'Training self-driving cars.',
        useCases: [
          { title: 'Lane Detection', description: 'Annotating road lines and drivable areas.' },
          { title: 'Traffic Sign Recognition', description: 'Classifying signs across different countries.' }
        ],
        image: '/assets/images/industries/industry_transport_real.png'
      }
    ],

    glossary: [
      {
        question: 'How do you handle data security?',
        answer: 'We work in a VPC environment. Data never leaves the secure enclave. Annotators access data via VDI (Virtual Desktop Infrastructure) with no download permissions.',
        type: 'paragraph'
      }
    ]
  },

  // Phase 3: Develop
  {
    id: 'custom-ai',
    title: 'Custom AI & GenAI Development',
    phase: 'develop',
    description: 'Bespoke AI systems — from prototypes to enterprise-grade generative and cognitive solutions.',
    icon: 'Sparkles',
    heroTitle: 'Custom AI & GenAI Development',
    heroSubtitle: 'Build domain-specific AI products that automate, reason, and create with your data.',
    deliverables: ['Prototype & Validation', 'Production-Grade Models', 'API & Integration Layer', 'Monitoring & Retraining Plan'],
    whyInvest: [
      {
        title: 'Tailored to your data',
        description: 'Train and fine-tune models on your proprietary knowledge for higher accuracy.',
        icon: 'Database'
      },
      {
        title: 'Differentiated IP',
        description: 'Create unique AI capabilities that competitors cannot copy easily.',
        icon: 'Shield'
      },
      {
        title: 'Scalable architecture',
        description: 'Design systems that handle growth in users, data, and complexity.',
        icon: 'Server'
      },
      {
        title: 'Business-ready outcomes',
        description: 'Deliver measurable ROI with production-grade performance and reliability.',
        icon: 'Target'
      }
    ],
    process: [
      { title: 'Use-case definition', description: 'Clarify objectives, KPIs, and success criteria.' },
      { title: 'Data preparation', description: 'Clean, label, and structure data for model training.' },
      { title: 'Model development', description: 'Train, fine-tune, and evaluate models for accuracy and safety.' },
      { title: 'Integration & deployment', description: 'Ship APIs, workflows, and production monitoring.' },
      { title: 'Optimization', description: 'Iterate on performance, cost, and user feedback.' }
    ],
    expertise: ['Generative AI apps', 'Cognitive architectures', 'Predictive & classification models', 'Knowledge automation engines'],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents Development',
    layout: 'premium',
    phase: 'develop',
    description: 'Autonomous systems that can perceive, reason, and act to achieve goals.',
    icon: 'Bot',
    heroTitle: 'Autonomous AI Agents',
    heroSubtitle: 'Build smarter workflows with custom AI agents. We build AI agents to automate tasks, enhance decision-making, and drive efficiency.',
    contentIntroTitle: 'The Era of Agentic AI',

    contentSections: {
      'agent-services': {
        title: 'Autonomous Workflow Automation',
        navLabel: 'Agentic AI',
        intro: 'Go beyond chatbots. **Agents do things.**',
        description: 'We build systems that can plan, reason, and execute complex multi-step workflows without human intervention.',
        points: [
          { title: 'Multi-Agent Orchestration', description: 'Coordinate teams of specialized agents (Coder, Reviewer, Manager) to solve complex problems.' },
          { title: 'Tool Use', description: 'Agents that can browse the web, query databases, and use APIs to get work done.' },
          { title: 'Memory & Long-term Context', description: 'Systems that remember past interactions and learn from user feedback.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Agent Development Process',
      intro: 'Defining the cognitive architecture.',
      steps: [
        { step: 1, icon: 'Map', title: "Goal Definitions", description: "Defining the objective and success criteria for the agent." },
        { step: 2, icon: 'Tool', title: "Tool Selection", description: "Giving the agent tools (Search, Calculator, API access)." },
        { step: 3, icon: 'Cpu', title: "Reasoning Loop", description: "Implementing ReAct (Reason+Act) or Plan-and-Solve strategies." },
        { step: 4, icon: 'Shield', title: "Guardrails", description: "Ensuring the agent doesn't perform harmful actions." },
        { step: 5, icon: 'Rocket', title: "Deployment", description: "Running agents in production with trace logging (LangSmith)." }
      ]
    },

    stats: [
      { number: '100+', label: 'Autonomous Actions' },
      { number: '5x', label: 'Efficiency Gain' }
    ],

    techStackTabs: {
      categories: ['Frameworks', 'LLMs', 'Tools'],
      items: {
        'Frameworks': ['LangGraph', 'AutoGPT', 'CrewAI', 'Microsoft AutoGen'],
        'LLMs': ['GPT-4o', 'Claude 3.5 Sonnet (Best for agents)'],
        'Tools': ['SerpApi', 'Zapier', 'Code Interpreter']
      }
    },

    industryTabs: [
      {
        id: 'research',
        name: 'Research',
        headline: 'Automated Research Analysts',
        description: 'Agents that browse the web and compile reports.',
        useCases: [
          { title: 'Market Intelligence', description: 'Agent reads 100+ news sites and summarizes competitor moves.' }
        ],
        image: '/assets/images/industries/industry_technology_real.png'
      }
    ],

    glossary: [
      {
        question: 'What is the difference between an Agent and a Chatbot?',
        answer: 'A chatbot talks. An agent acts. A chatbot can tell you how to book a flight. An agent can go to the website, fill out the form, and book it for you.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Development',
    layout: 'premium',
    phase: 'develop',
    description: 'Custom GenAI solutions that create content, code, and synthetic data.',
    icon: 'Sparkles',
    heroTitle: 'Generative AI Development Company',
    heroSubtitle: 'Revolutionize your organization with custom Generative AI. We deliver enterprise-grade solutions tailored to your specific business needs, from custom LLMs to intelligent autonomous agents.',
    contentIntroTitle: 'Generative AI Services – Innovation at Scale',

    // Content Sections
    contentSections: {
      'genai-services': {
        title: 'Generative AI Development Services',
        navLabel: 'Our Services',
        intro: 'We provide end-to-end <strong>Generative AI development services</strong> to help you build, deploy, and scale custom AI solutions.',
        description: 'Our team specializes in fine-tuning Large Language Models (LLMs), building Retrieval-Augmented Generation (RAG) systems, and creating multi-modal AI applications that transform business operations.',
        points: [
          {
            title: 'Custom LLM Development',
            description: 'Fine-tune open-source models (Llama 3, Mistral) on your proprietary data for unmatched domain expertise.'
          },
          {
            title: 'RAG Implementation',
            description: 'Connect LLMs to your live company data for accurate, hallucination-free answers and insights.'
          },
          {
            title: 'GenAI strategy & consulting',
            description: 'Identify high-impact use cases, assess data readiness, and build a roadmap for safe AI adoption.'
          },
          {
            title: 'Multi-modal Applications',
            description: 'Build systems that understand and generate text, images, audio, and video simultaneously.'
          }
        ],
        additionalText: 'Whether you need a specialized coding assistant, a marketing content engine, or an automated legal review bot, we engineer solutions that deliver measurable ROI.'
      },
      'genai-benefits': {
        title: 'Why Invest in Generative AI?',
        navLabel: 'Benefits',
        intro: 'Generative AI is not just hype—it is a competitive necessity.',
        description: 'Early adopters are seeing double-digit efficiency gains and new revenue streams. By automating complex cognitive tasks, your team can focus on high-value strategic work.',
        points: [
          {
            title: 'Hyper-Personalization',
            description: 'Generate unique content, emails, and product recommendations for every single user at scale.'
          },
          {
            title: 'Knowledge Accessibility',
            description: 'Turn your chaotic internal documentation into an instantly searchable, conversational knowledge base.'
          },
          {
            title: 'Operational Velocity',
            description: 'Accelerate coding, drafting, and analysis tasks by 50-80% with AI copilots.'
          }
        ]
      },
      'genai-models': {
        title: 'Models We Work With',
        navLabel: 'Models',
        intro: 'We are model-agnostic and choose the right tool for your specific performance, cost, and privacy needs.',
        description: 'From powerful proprietary models to efficient open-source alternatives, we optimize for your infrastructure.',
        points: [
          {
            title: 'Proprietary Giants',
            description: 'GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic), Gemini 1.5 Pro (Google).'
          },
          {
            title: 'Open Source Leaders',
            description: 'Llama 3 (Meta), Mistral Large, Mixtral 8x22B, Falcon 180B.'
          },
          {
            title: 'Specialized Models',
            description: 'CodeLlama, Med-PaLM, BloombergGPT depending on industry vertical.'
          }
        ]
      }
    },

    // Development Process
    developmentTimeline: {
      title: 'GenAI Development Lifecycle',
      intro: 'From initial concept to production-grade deployment, we follow a rigorous engineering process to ensure safety, quality, and scalability.',
      steps: [
        {
          step: 1,
          icon: 'Search',
          title: "Use Case Discovery",
          description: "We analyze your workflows to find high-value opportunities where GenAI can deliver immediate impact without excessive risk."
        },
        {
          step: 2,
          icon: 'Database',
          title: "Data Prep & Curation",
          description: "Cleaning, sanitizing, and structuring your proprietary data. We build vector indexes and knowledge graphs to ground the model."
        },
        {
          step: 3,
          icon: 'Cpu',
          title: "Model Selection & Tuning",
          description: "Choosing the right architecture (RAG vs Fine-tuning) and optimizing prompts or weights for your specific domain language."
        },
        {
          step: 4,
          icon: 'ShieldCheck',
          title: "Evaluation & Red-Teaming",
          description: " rigorous testing against hallucinations, bias, and security vulnerabilities. We use automated eval frameworks (RAGAS) to score quality."
        },
        {
          step: 5,
          icon: 'Rocket',
          title: "Deployment & Monitoring",
          description: "Deploying via flexible APIs or private cloud. We set up guardrails and feedback loops to continuously improve model performance."
        }
      ]
    },

    // Stats
    stats: [
      { number: '30+', label: 'GenAI Projects Delivered' },
      { number: '70%', label: 'Avg. Cost Reduction' },
      { number: '10M+', label: 'Vectors Indexed' },
      { number: '100%', label: 'Data Privacy Focus' }
    ],

    // Tech Stack Tabs
    techStackTabs: {
      categories: ['LLMs & Models', 'Orchestration', 'Vector DBs', 'Infrastructure'],
      items: {
        'LLMs & Models': ['GPT-4o', 'Claude 3.5', 'Llama 3', 'Mistral', 'Gemini Pro'],
        'Orchestration': ['LangChain', 'LlamaIndex', 'Haystack', 'LangFlow', 'Semantic Kernel'],
        'Vector DBs': ['Pinecone', 'Weaviate', 'Qdrant', 'Milvus', 'ChromaDB', 'pgvector'],
        'Infrastructure': ['AWS Bedrock', 'Azure OpenAI', 'Hugging Face TGI', 'vLLM', 'Ray Serve']
      }
    },

    // Industry Expertise
    industryTabs: [
      {
        id: 'marketing',
        name: 'Marketing',
        headline: 'GenAI for Content & Marketing',
        description: 'Scale content creation and personalize customer journeys like never before.',
        useCases: [
          { title: 'Content Generation', description: 'Automate SEO blogs, social posts, and ad copy at scale while maintaining brand voice.' },
          { title: 'Personalized Campaigns', description: 'Generate unique email variants and landing pages for each customer segment.' },
          { title: 'Creative Assist', description: 'Ideate visual concepts and draft outlines instantly.' }
        ],
        image: '/assets/images/industries/industry_retail_real.png'
      },
      {
        id: 'software',
        name: 'Software',
        headline: 'AI Coding Copilots',
        description: 'Accelerate development cycles and reduce technical debt with custom coding assistants.',
        useCases: [
          { title: 'Code Generation', description: 'Context-aware code completion trained on your internal codebase and patterns.' },
          { title: 'Automated Documentation', description: 'Generate docs, docstrings, and API specs automatically from code.' },
          { title: 'Legacy Migration', description: 'Translate COBOL/Java legacy code to modern Python/Go stacks.' }
        ],
        image: '/assets/images/industries/industry_technology_real.png'
      },
      {
        id: 'legal',
        name: 'Legal',
        headline: 'Legal Tech Automation',
        description: 'Draft, review, and analyze contracts with speed and precision.',
        useCases: [
          { title: 'Contract Review', description: 'Flag risky clauses and non-compliance in seconds compared to hours.' },
          { title: 'Case Research', description: 'Synthesize thousands of case files to find relevant precedents.' },
          { title: 'Drafting Assistant', description: 'Generate first drafts of standard legal documents.' }
        ],
        image: '/assets/images/industries/industry_legal_real.png'
      }
    ],

    // Glossary
    glossary: [
      {
        question: 'What is RAG (Retrieval-Augmented Generation)?',
        answer: 'RAG is a technique that connects an LLM to your private data (documents, databases). Before generating an answer, the system "retrieves" relevant facts from your data and sends them to the AI. This prevents hallucinations and ensures the AI knows about your specific business.',
        type: 'paragraph'
      },
      {
        question: 'Should we fine-tune a model or use RAG?',
        answer: 'For 90% of business use cases, RAG is better. It is cheaper, faster, and easier to update (just add new documents). Fine-tuning is reserved for when you need to teach the model a new "behavior" (like speaking a very specific dialect or code style) rather than just new "knowledge".',
        type: 'paragraph'
      },
      {
        question: 'How do you ensure data privacy with GenAI?',
        answer: 'We deploy models in your private cloud (VPC) or use enterprise-grade APIs (Azure OpenAI) that guarantee zero data retention. Your data is never used to train public models.',
        type: 'paragraph'
      },
      {
        question: 'How much does a custom GenAI solution cost?',
        answer: 'Costs vary by complexity. A simple internal RAG chatbot might cost $20k-$40k for a PoC, while a fully fine-tuned enterprise model with complex integrations can range from $100k+.',
        type: 'paragraph'
      }
    ],
    relatedArticles: [
      { title: 'RAG vs Fine-tuning: Which is right for you?', date: 'Jan 15, 2025' },
      { title: 'The Enterprise Guide to LLM Safety', date: 'Dec 10, 2024' },
      { title: 'Building Autonomous Agents with LangGraph', date: 'Feb 2, 2025' }
    ]
  },
  {
    id: 'llms-development',
    title: 'LLM Development & Fine-Tuning',
    layout: 'premium',
    phase: 'develop',
    description: 'Training, fine-tuning, and optimizing Large Language Models for domain-specific mastery.',
    icon: 'FileText',
    heroTitle: 'LLM Fine-Tuning Service',
    heroSubtitle: 'Build models that speak your industry language. We specialize in fine-tuning open-source LLMs (Llama, Mistral) to achieve state-of-the-art performance on your niche tasks.',
    contentIntroTitle: 'Domain-Specific LLM Development',

    contentSections: {
      'llm-services': {
        title: 'Custom LLM Engineering',
        navLabel: 'Our Approach',
        intro: 'Generic models are good generalists, but <strong>specialized models allow you to own your IP and outperform GPT-4 on specific tasks.</strong>',
        description: 'We guide you through the complex process of dataset curation, model selection, fine-tuning (PEFT/LoRA), and efficient inference deployment.',
        points: [
          {
            title: 'Full Fine-Tuning (SFT)',
            description: 'Adapting model weights heavily for deep domain understanding (e.g., Medical, Legal, Code).'
          },
          {
            title: 'Parameter-Efficient Tuning (PEFT)',
            description: 'Using LoRA/QLoRA to adapt models cheaply with minimal compute resources.'
          },
          {
            title: 'RLHF / DPO',
            description: 'Aligning models to human preferences or safety guidelines using Reinforcement Learning.'
          },
          {
            title: 'Model Distillation',
            description: 'Compressing giant teacher models into small, fast student models for cheaper deployment.'
          }
        ]
      },
      'llm-benefits': {
        title: 'Why Fine-Tune Your Own Model?',
        navLabel: 'Why Fine-Tune',
        intro: 'Control, Cost, and Compliance.',
        description: 'Owning a fine-tuned small model (7B-13B) often beats renting a giant API model (1T+) in production.',
        points: [
          {
            title: 'Data Privacy',
            description: 'Run completely offline or in your VPC. No data ever leaves your secure environment.'
          },
          {
            title: 'Lower Latency & Cost',
            description: 'Fine-tuned small models run 10x faster and cheaper than querying huge generalist APIs.'
          },
          {
            title: 'Task Specialization',
            description: 'Achieve higher accuracy on specific formats (JSON, SQL) or industry jargon.'
          }
        ]
      }
    },

    developmentTimeline: {
      title: 'Fine-Tuning Process',
      intro: 'A scientific approach to model adaptation, ensuring convergence and preventing catastrophic forgetting.',
      steps: [
        { step: 1, icon: 'Database', title: "Dataset Preparation", description: "The most critical step. We curate high-quality instruction-response pairs (1k-10k samples) specific to your task." },
        { step: 2, icon: 'Settings', title: "Base Model Selection", description: "Evaluating Llama 3, Mistral, Gemma based on license (Apache 2.0 vs commercial) and benchmarks." },
        { step: 3, icon: 'Cpu', title: "Training Run", description: "Executing training loops using QLoRA/FSDP on high-performance GPU clusters (A100s/H100s)." },
        { step: 4, icon: 'BarChart', title: "Evaluation & Benchmarking", description: "Comparing the checkpoint against baseline models using perplexity, ROGUE scores, and LLM-as-a-judge." },
        { step: 5, icon: 'Server', title: "Quantization & Serving", description: "Converting weights to GGUF/AWQ for fast inference and deploying via vLLM or TGI." }
      ]
    },

    stats: [
      { number: '15+', label: 'Models Fine-Tuned' },
      { number: '96%', label: 'Accuracy Improvement' },
      { number: '10x', label: 'Cheaper Inference' },
      { number: '100%', label: 'Data Sovereignty' }
    ],

    techStackTabs: {
      categories: ['Base Models', 'Training Frameworks', 'Serving Engine', 'Evaluation'],
      items: {
        'Base Models': ['Llama 3 8B/70B', 'Mistral 7B', 'Mixtral', 'Gemma', 'Phi-3'],
        'Training Frameworks': ['PyTorch', 'Hugging Face TRL', 'Unsloth', 'Axolotl', 'DeepSpeed'],
        'Serving Engine': ['vLLM', 'TGI', 'Ollama', 'TensorRT-LLM', 'Ray'],
        'Evaluation': ['MLflow', 'WandB', 'PromptFlow', 'Ragas']
      }
    },

    industryTabs: [
      {
        id: 'healthcare',
        name: 'Healthcare',
        headline: 'Medical LLMs',
        description: 'Fine-tuned on PubMed and clinical guidelines for summarization and triage.',
        useCases: [
          { title: 'Clinical Note Summarization', description: 'Turn unstructured EMR notes into structured SOAP codes.' },
          { title: 'Patient QA', description: 'Answer patient portals questions using verified medical sources only.' }
        ],
        image: '/assets/images/industries/industry_healthcare_real.png'
      },
      {
        id: 'finance',
        name: 'Finance',
        headline: 'Financial Analyst Bots',
        description: 'Trained on SEC filings and earnings calls.',
        useCases: [
          { title: 'Sentiment Analysis', description: 'Detect nuance in earnings call transcripts that general sentiment tools miss.' },
          { title: 'Report Generation', description: 'Draft credit memos in the specific style of your bank.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      }
    ],

    glossary: [
      {
        question: 'What is QLoRA?',
        answer: 'QLoRA (Quantized Low-Rank Adaptation) is a technique to fine-tune huge models on smaller GPUs by quantizing the base model to 4-bit precision. It makes training accessible and cheap.',
        type: 'paragraph'
      },
      {
        question: 'How much data do I need?',
        answer: 'Surprisingly little. For style transfer (speaking like your brand), 500-1000 high-quality examples are often enough. For learning new knowledge, RAG is usually preferred over training.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Consulting',
    layout: 'premium',
    phase: 'develop',
    description: 'Predictive models and algorithms to solve complex business problems.',
    icon: 'Brain',
    heroTitle: 'Machine Learning Solutions',
    heroSubtitle: 'Turn historical data into future insights. We build custom predictive models that optimize pricing, detect fraud, and forecast demand with high accuracy.',
    contentIntroTitle: 'Predictive AI Engineering',

    contentSections: {
      'ml-services': {
        title: 'Custom ML Development',
        intro: 'We go beyond basic analytics. **We build systems that learn.**',
        description: 'From regression analysis to deep reinforcement learning, we select the right algorithm to solve your specific optimization or classification challenge.',
        points: [
          { title: 'Predictive Analytics', description: 'Forecast future trends (sales, churn, demand) based on historical patterns.' },
          { title: 'Recommendation Engines', description: 'Personalize content and products to increase conversion rates.' },
          { title: 'Anomaly Detection', description: 'Identify outliers in financial transactions or manufacturing sensor data.' }
        ]
      },
      'mlops-focus': {
        title: 'Production-First Approach',
        navLabel: 'Production Focus',
        intro: 'A model is useless if it stays in a notebook.',
        description: 'We prioritize MLOps from day one, ensuring your models are deployed via scalable APIs, monitored for drift, and automatically retrained.',
        points: [
          { title: 'Scalable Inference', description: 'Low-latency APIs handling millions of requests.' },
          { title: 'Continuous Training', description: 'Pipelines that ingest new data to keep models fresh.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'ML Engineering Process',
      intro: 'CRISP-DM methodology adapted for modern cloud stacks.',
      steps: [
        { step: 1, icon: 'Search', title: "Exploratory Data Analysis", description: "Statistical analysis to understand data distribution and correlations." },
        { step: 2, icon: 'Settings', title: "Feature Engineering", description: "Transforming raw data into meaningful features that boost model signal." },
        { step: 3, icon: 'Cpu', title: "Model Training", description: "Experimenting with XGBoost, LightGBM, or Neural Nets to find the best fit." },
        { step: 4, icon: 'CheckCircle', title: "Validation", description: "Rigorous testing on holdout sets to prevent overfitting." },
        { step: 5, icon: 'Rocket', title: "Deployment", description: "Containerizing the model (Docker) and deploying to K8s or SageMaker." }
      ]
    },

    stats: [
      { number: '95%+', label: 'Prediction Accuracy' },
      { number: '500TB', label: 'Data Processed' },
      { number: '20%', label: 'Revenue Uplift' }
    ],

    techStackTabs: {
      categories: ['Algorithms', 'Libraries', 'AutoML', 'Deployment'],
      items: {
        'Algorithms': ['XGBoost', 'Random Forest', 'Neural Networks', 'K-Means'],
        'Libraries': ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas'],
        'AutoML': ['DataRobot', 'H2O.ai', 'Google AutoML'],
        'Deployment': ['Kubernetes', 'Docker', 'FastAPI', 'SageMaker']
      }
    },

    industryTabs: [
      {
        id: 'retail',
        name: 'Retail',
        headline: 'Demand Forecasting',
        description: 'Predict inventory needs at SKU level.',
        useCases: [
          { title: 'Stock Optimization', description: 'Reduce overstock and stockouts by predicting exact demand.' },
          { title: 'Dynamic Pricing', description: 'Adjust prices in real-time based on competitor data and demand elasticity.' }
        ],
        image: '/assets/images/industries/industry_retail_real.png'
      },
      {
        id: 'finance',
        name: 'Finance',
        headline: 'Credit Scoring',
        description: 'Next-gen risk models.',
        useCases: [
          { title: 'Alternative Data Scoring', description: 'Score unbanked customers using telco and behavioral data.' },
          { title: 'Fraud Detection', description: 'Real-time transaction blocking for suspicious patterns.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      }
    ],

    glossary: [
      {
        question: 'How much data do we need?',
        answer: 'It depends on the complexity of the pattern. For simple forecasting, a few years of history is enough. We can also use transfer learning or synthetic data if real data is scarce.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    layout: 'premium',
    phase: 'develop',
    description: 'Advanced visual intelligence for object detection, classification, segmentation, and spatial analysis.',
    icon: 'Eye',
    heroTitle: 'Computer Vision Solutions',
    heroSubtitle: 'Teach your systems to see. We implement cutting-edge Deep Learning models for automated quality control, surveillance analytics, and medical imaging.',
    contentIntroTitle: 'Visual Intelligence Engineering',

    contentSections: {
      'cv-services': {
        title: 'Image & Video Analytics',
        intro: 'We turn pixels into actionable data.',
        description: 'Using Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs), we automate visual tasks that previously required human eyes.',
        points: [
          { title: 'Object Detection', description: 'Identify and locate objects (cars, defects, people) in real-time video streams.' },
          { title: 'Semantic Segmentation', description: 'Pixel-level understanding of images (e.g., separating road from sidewalk for autonomous bots).' },
          { title: 'OCR & Document Understanding', description: 'Extract text and structure from scanned invoices and forms.' },
          { title: 'Facial Recognition', description: 'Secure identity verification and sentiment analysis.' }
        ]
      },
      'edge-focus': {
        title: 'Edge AI Deployment',
        navLabel: 'Edge AI',
        intro: 'Processing at the source.',
        description: 'For privacy and speed, we optimize models to run directly on cameras, drones, or mobile devices (Edge AI) without needing the cloud.',
        points: [
          { title: 'Model Compression', description: 'Quantization and pruning to fit models on NVIDIA Jetson or Raspberry Pi.' },
          { title: 'Latency Optimization', description: 'sub-20ms inference for real-time robotics control.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'CV Development Process',
      intro: 'From data collection to edge deployment.',
      steps: [
        { step: 1, icon: 'Camera', title: "Data Collection", description: "Gathering diverse datasets (images/video) covering all lighting and angle scenarios." },
        { step: 2, icon: 'Tag', title: "Labeling & Annotation", description: "Drawing bounding boxes and masks. We often use active learning to speed this up." },
        { step: 3, icon: 'Cpu', title: "Model Training", description: "Training YOLO, ResNet, or EfficientNet architectures on GPU clusters." },
        { step: 4, icon: 'Activity', title: "Testing & Validation", description: "Verifying performance on 'hard examples' (occlusions, blur, low light)." },
        { step: 5, icon: 'Server', title: "Deployment", description: "Optimizing with TensorRT and deploying to Edge devices or Cloud." }
      ]
    },

    stats: [
      { number: '99.7%', label: 'Defect Detection Rate' },
      { number: '20ms', label: 'Inference Latency' },
      { number: '1M+', label: 'Images Labeled' }
    ],

    techStackTabs: {
      categories: ['Architectures', 'Frameworks', 'Edge Hardware', 'Tools'],
      items: {
        'Architectures': ['YOLOv8', 'ResNet', 'Vision Transformers', 'Mask R-CNN'],
        'Frameworks': ['PyTorch', 'TensorFlow', 'OpenCV', 'Keras'],
        'Edge Hardware': ['NVIDIA Jetson', 'Raspberry Pi', 'Intel Movidius', 'Coral TPU'],
        'Tools': ['CVAT', 'Roboflow', 'FiftyOne', 'Albumentations']
      }
    },

    industryTabs: [
      {
        id: 'manufacturing',
        name: 'Manufacturing',
        headline: 'Automated QC',
        description: 'Find defects faster than humanly possible.',
        useCases: [
          { title: 'Surface Defect Detection', description: 'Spot scratches and dents on assembly lines.' },
          { title: 'Safety Monitoring', description: 'Detect PPE usage (helmets/vests) in dangerous zones.' }
        ],
        image: '/assets/images/industries/industry_manufacturing_real.png'
      },
      {
        id: 'healthcare',
        name: 'Healthcare',
        headline: 'Medical Imaging',
        description: 'Assist radiologists with AI.',
        useCases: [
          { title: 'Tumor Segmentation', description: 'Highlight potential anomalies in MRI/CT scans.' },
          { title: 'Cell Counting', description: 'Automate microscopy analysis.' }
        ],
        image: '/assets/images/industries/industry_healthcare_real.png'
      }
    ],

    glossary: [
      {
        question: 'How many images do I need?',
        answer: 'Depends on the variance. For a rigid object in controlled lighting, 50-100 images might work. For variable environments, you might need thousands. We use data augmentation to artificially expand small datasets.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'cognitive-systems',
    title: 'Cognitive Vision, NLP & Speech Systems',
    phase: 'develop',
    description: 'AI that understands images, language, documents, and environments — powering intelligent decisions.',
    icon: 'Eye',
    heroTitle: 'Cognitive Vision, NLP & Speech Systems',
    heroSubtitle: 'Build multimodal AI systems that see, listen, read, and act on your data.',
    deliverables: ['Vision & NLP Prototypes', 'Model Training Pipeline', 'Inference APIs', 'Deployment Playbook'],
    whyInvest: [
      {
        title: 'Automate perception tasks',
        description: 'Reduce manual review with accurate vision and language models.',
        icon: 'Eye'
      },
      {
        title: 'Unlock unstructured data',
        description: 'Extract value from documents, images, audio, and video.',
        icon: 'FileText'
      },
      {
        title: 'Enterprise-grade accuracy',
        description: 'Benchmark models against safety and reliability targets.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Scalable inference',
        description: 'Deploy across cloud and edge environments.',
        icon: 'Server'
      }
    ],
    process: [
      { title: 'Use-case scoping', description: 'Define inputs, outputs, and success metrics.' },
      { title: 'Data collection & labeling', description: 'Prepare datasets and annotation guidelines.' },
      { title: 'Model development', description: 'Train, fine-tune, and evaluate multimodal models.' },
      { title: 'Integration & monitoring', description: 'Ship APIs with observability and drift checks.' }
    ],
    expertise: ['Computer vision', 'Document intelligence', 'Speech-to-text & TTS', 'Conversational NLP'],
  },
  {
    id: 'web-dev',
    title: 'Web Application Development',
    phase: 'develop',
    description: 'High-performance web applications built with clean engineering and intelligent integrations.',
    icon: 'Layout',
    heroTitle: 'End-to-End Web Application Development',
    heroSubtitle: 'Design and build fast, secure, and scalable web experiences that convert.',
    deliverables: ['Product Discovery & UX', 'Frontend & Backend Build', 'API & Integration Layer', 'Launch & Optimization'],
    whyInvest: [
      {
        title: 'Faster time-to-market',
        description: 'Ship production-ready web apps without shortcuts.',
        icon: 'Rocket'
      },
      {
        title: 'Scalable architecture',
        description: 'Systems that grow with your users and traffic.',
        icon: 'Server'
      },
      {
        title: 'Conversion-ready UX',
        description: 'Design that supports user journeys and revenue goals.',
        icon: 'Layout'
      },
      {
        title: 'Secure by default',
        description: 'Best-practice security and compliance baked in.',
        icon: 'ShieldCheck'
      }
    ],
    process: [
      { title: 'Discovery & UX', description: 'Define user journeys, flows, and success metrics.' },
      { title: 'Design & prototyping', description: 'Create high-fidelity prototypes and UI systems.' },
      { title: 'Development & QA', description: 'Build, test, and optimize performance.' },
      { title: 'Launch & iteration', description: 'Deploy, monitor, and improve based on feedback.' }
    ],
    expertise: ['Frontend & full-stack development', 'API architecture', 'Admin dashboards', 'Performance & accessibility'],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    phase: 'develop',
    description: 'End-to-end mobile app development for iOS and Android — powered by smart, scalable architecture.',
    icon: 'Smartphone',
    heroTitle: 'Mobile App Development',
    heroSubtitle: 'Launch high-quality mobile experiences with native performance and modern UX.',
    deliverables: ['iOS & Android Apps', 'Cross-Platform Codebase', 'App Store Launch', 'Analytics & Iteration'],
    whyInvest: [
      {
        title: 'Reach users anywhere',
        description: 'Deliver experiences optimized for mobile behavior.',
        icon: 'Smartphone'
      },
      {
        title: 'Native-grade performance',
        description: 'Fast, smooth interactions that keep users engaged.',
        icon: 'Zap'
      },
      {
        title: 'Secure mobile architecture',
        description: 'Protect data with secure storage and auth flows.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Scalable release cadence',
        description: 'Iterate quickly with reliable CI/CD.',
        icon: 'Rocket'
      }
    ],
    process: [
      { title: 'Product strategy', description: 'Define scope, milestones, and success metrics.' },
      { title: 'UX/UI design', description: 'Craft intuitive mobile-first experiences.' },
      { title: 'Development & testing', description: 'Build, test, and optimize across devices.' },
      { title: 'Release & support', description: 'Launch to app stores and continue improving.' }
    ],
    expertise: ['Native & cross-platform apps', 'AI-powered mobile features', 'Push notifications', 'App performance & scaling'],
  },

  // Phase 4: Deploy
  {
    id: 'ai-advisory',
    title: 'AI Advisory Services',
    layout: 'premium',
    phase: 'deploy',
    description: 'Ongoing strategic advice to ensure your AI initiatives stay on track.',
    icon: 'MessageCircle',
    heroTitle: 'Strategic AI Advisory',
    heroSubtitle: 'Your fractional Chief AI Officer. We provide ongoing guidance to technical leaders, helping you navigate the rapidly changing AI landscape.',
    contentIntroTitle: 'Retainer-Based Advisory',

    contentSections: {
      'advisory': {
        title: 'Executive Guidance',
        intro: 'Make confident bet.',
        description: 'We act as a sounding board for your CTO/CIO, validating architectures and vendor choices.',
        points: [
          { title: 'Tech Radar', description: 'Keeping you updated on new models (e.g., "Should we switch to Llama 3?").' },
          { title: 'Hiring Support', description: 'Helping you interview and hire key AI talent.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Advisory Workflow',
      intro: 'Flexible support.',
      steps: [
        { step: 1, icon: 'Users', title: "Onboarding", description: "Understanding your roadmap." },
        { step: 2, icon: 'MessageCircle', title: "Bi-Weekly Sync", description: "Reviewing progress and blockers." },
        { step: 3, icon: 'FileText', title: "Ad-hoc Reviews", description: "Deep dive reviews of design docs." }
      ]
    },

    stats: [{ number: '24h', label: 'Response Time' }],

    techStackTabs: { categories: ['Focus Areas'], items: { 'Focus Areas': ['Strategy', 'Hiring', 'Vendor Negotation', 'Architecture Review'] } },

    industryTabs: [{ id: 'all', name: 'All Industries', headline: 'Cross-Domain Expertise', description: 'Applying lessons from 50+ projects.', useCases: [], image: '/assets/images/industries/industry_technology_real.png' }],

    glossary: [{ question: 'Is this a full-time role?', answer: 'No, this is a retainer model. You get our expertise for a fixed number of hours per month without the cost of a full-time executive.', type: 'paragraph' }]
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Development',
    layout: 'premium',
    phase: 'deploy',
    description: 'Intelligent conversational interfaces for customer support and internal use.',
    icon: 'MessageSquare',
    heroTitle: 'AI Chatbot Development',
    heroSubtitle: 'Go beyond basic scripts. We build context-aware AI agents that resolve 80% of support tickets automatically and seamlessly hand off to humans when needed.',
    contentIntroTitle: 'Next-Gen Conversational AI',

    contentSections: {
      'chatbot-services': {
        title: 'Enterprise Chatbot Solutions',
        description: 'We build bots that understand intent, maintain context across long conversations, and take action (like booking tickets or resetting passwords).',
        intro: 'Modern users expect instant, accurate 24/7 support. <strong>Generative AI makes this possible without writing thousands of decision tree rules.</strong>',
        points: [
          { title: 'Customer Support Automation', description: 'Deflect L1 support tickets with AI that answers FAQs and troubleshoots issues.' },
          { title: 'Internal Knowledge Assistants', description: 'Help employees find HR policies or IT guides instantly via Slack/Teams.' },
          { title: 'Transactional Bots', description: 'Bots that can execute API calls to check order status, process refunds, or schedule meetings.' }
        ]
      },
      'chatbot-channels': {
        title: 'Omnichannel Deployment',
        navLabel: 'Channels',
        intro: 'Build once, deploy everywhere.',
        description: 'Our architecture allows your AI brain to serve users wherever they form.',
        points: [
          { title: 'Web & Mobile', description: 'Custom widgets or embedded native SDKs for your app.' },
          { title: 'Messaging Apps', description: 'WhatsApp, Messenger, Telegram, and SMS integration.' },
          { title: 'Workplace Tools', description: 'Slack, Microsoft Teams, and Discord bots.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Bot Development Process',
      intro: 'Creating a great bot is 50% technology and 50% conversation design.',
      steps: [
        { step: 1, icon: 'MessageCircle', title: "Conversation Design", description: "Mapping user journeys, defining tonality/persona, and identifying key intents." },
        { step: 2, icon: 'Database', title: "Knowledge Ingestion", description: "Feeding your knowledge base (PDFs, URLs) into the RAG engine." },
        { step: 3, icon: 'Code', title: "Flow Implementation", description: "Building the logic for complex flows (authentication, API lookups) using LangChain or Botpress." },
        { step: 4, icon: 'CheckCircle', title: "Testing & Refinement", description: "Simulating conversations to catch dead ends and improving answer relevance." },
        { step: 5, icon: 'Globe', title: "Launch & Training", description: "Go-live and continuous retraining based on analyzing real user query failures." }
      ]
    },

    stats: [
      { number: '80%', label: 'Ticket Deflection' },
      { number: '24/7', label: 'Availability' },
      { number: '<2s', label: 'Response Time' },
      { number: '12+', label: 'Channels Supported' }
    ],

    techStackTabs: {
      categories: ['Frameworks', 'NLU/LLM', 'Channels', 'Database'],
      items: {
        'Frameworks': ['Botpress', 'Voiceflow', 'LangChain', 'Microsoft Bot Framework'],
        'NLU/LLM': ['OpenAI GPT-4', 'Dialogflow', 'Rasa', 'Amazon Lex'],
        'Channels': ['WhatsApp API', 'Slack', 'MS Teams', 'Twilio'],
        'Database': ['Pinecone', 'Supabase', 'Redis']
      }
    },

    industryTabs: [
      {
        id: 'retail',
        name: 'Retail',
        headline: 'Shopping Assistants',
        description: 'Guide users to the right product and answer size/shipping questions.',
        useCases: [
          { title: 'Order Tracking', description: 'Instant "Where is my order" answers without human aid.' },
          { title: 'Product Recommendation', description: 'Suggest products based on user preferences in chat.' }
        ],
        image: '/assets/images/industries/industry_retail_real.png'
      },
      {
        id: 'banking',
        name: 'Banking',
        headline: 'Secure Banking Bots',
        description: 'Balance checks and transaction history in a secure chat.',
        useCases: [
          { title: 'Fraud Alerts', description: 'Instant two-way communication for suspicious charges.' },
          { title: 'Onboarding', description: 'Guide new users through account opening document uploads.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      }
    ],

    glossary: [
      {
        question: 'Can the chatbot handle human handoff?',
        answer: 'Yes. We implement "sentiment analysis" and "fallback triggers". If the user is angry or the bot is unsure, the chat is seamlessly transferred to a human agent (Zendesk / Salesforce) with full history.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration Services',
    layout: 'premium',
    phase: 'deploy',
    description: 'Seamlessly embedding AI models into your existing software ecosystem.',
    icon: 'Link',
    heroTitle: 'AI System Integration',
    heroSubtitle: 'Bridging the gap between a model in a notebook and a feature in your product. We connect AI to your ERP, CRM, and customer-facing apps.',
    contentIntroTitle: 'Seamless Connectivity',

    contentSections: {
      'integration': {
        title: 'API & Microservices',
        intro: 'AI as a Service.',
        description: 'We wrap models in robust APIs (FastAPI/Flask) that your web and mobile teams can consume easily.',
        points: [
          { title: 'Legacy Systems', description: 'Connecting modern AI to mainframes or old SQL databases.' },
          { title: 'Real-time Inference', description: 'Optimizing for sub-second latency.' }
        ]
      }
    },

    developmentTimeline: {
      title: 'Integration Process',
      intro: 'Connect and Scale.',
      steps: [
        { step: 1, icon: 'Code', title: "API Design", description: "Defining request/response schemas (OpenAPI)." },
        { step: 2, icon: 'Server', title: "Middleware Build", description: "Building the logic layer between AI and App." },
        { step: 3, icon: 'CheckCircle', title: "Integration Testing", description: "Ensuring fault tolerance if AI fails." }
      ]
    },

    stats: [{ number: '500+', label: 'APIs Built' }],

    techStackTabs: { categories: ['Backend', 'API', 'Cloud'], items: { 'Backend': ['Python', 'Node.js', 'Go'], 'API': ['FastAPI', 'GraphQL', 'gRPC'], 'Cloud': ['Lambda', 'Cloud Run', 'App Service'] } },

    industryTabs: [{ id: 'saas', name: 'SaaS', headline: 'Product Features', description: 'Embed AI into your software.', useCases: [], image: '/assets/images/industries/industry_technology_real.png' }],

    glossary: [{ question: 'Do you host the model?', answer: 'We can, or we can use managed APIs. We usually recommend separating the AI microservice from your main monolith.', type: 'paragraph' }]
  },
  {
    id: 'mlops',
    title: 'MLOps Consulting',
    layout: 'premium',
    phase: 'deploy',
    description: 'Operations and infrastructure to keep your models healthy in production.',
    icon: 'Settings',
    heroTitle: 'MLOps Consulting',
    heroSubtitle: 'We support companies in the field of consulting and implementation of MLOps solutions. Delivering scalable ML pipelines powered by enterprise-grade MLOps.',
    contentIntroTitle: 'Production ML Operations',

    contentSections: {
      'mlops-strategy': {
        title: 'End-to-End MLOps',
        intro: 'Bringing DevOps discipline to Machine Learning.',
        description: 'We build the infrastructure that allows data scientists to deploy models in minutes, not months.',
        points: [
          { title: 'Model Registry', description: 'Versioning every model artifact so you can roll back instantly.' },
          { title: 'Feature Store', description: 'Sharing curated features across teams to prevent re-work.' },
          { title: 'Automated CI/CD', description: 'Testing models automatically before they hit production.' }
        ]
      },
      'monitoring': {
        title: 'Model Monitoring',
        navLabel: 'Monitoring',
        intro: 'Detect drift before it costs you money.',
        description: 'Models degrade over time. We set up alerts for data drift, concept drift, and performance degradation.',
        points: [
          { title: 'Drift Detection', description: 'Alerting when live data distribution diverges from training data.' },
          { title: 'Explainability', description: 'Understanding why a model made a specific prediction (SHAP/LIME).' }
        ]
      }
    },

    developmentTimeline: {
      title: 'MLOps Maturity Model',
      intro: 'Moving from manual notebooks to automated factories.',
      steps: [
        { step: 1, icon: 'Search', title: "Assessment", description: "Evaluating your current maturity level (0-4)." },
        { step: 2, icon: 'GitBranch', title: "Version Control", description: "Implementing DVC and Git for code and data versioning." },
        { step: 3, icon: 'Repeat', title: "Pipeline Automation", description: "Automating retraining loops with Airflow or Kubeflow." },
        { step: 4, icon: 'Activity', title: "Monitoring Setup", description: "Deploying Grafana/Prometheus/Arize for live tracking." },
        { step: 5, icon: 'Shield', title: "Governance", description: "Enforcing role-based access and audit logs for regulated industries." }
      ]
    },

    stats: [
      { number: '10x', label: 'Faster Deployment' },
      { number: '0', label: 'Downtime Incidents' }
    ],

    techStackTabs: {
      categories: ['Platforms', 'Monitoring', 'Serving', 'Orchestration'],
      items: {
        'Platforms': ['AWS SageMaker', 'Azure ML', 'Databricks', 'Vertex AI'],
        'Monitoring': ['Arize AI', 'WhyLabs', 'Grafana', 'Evidently'],
        'Serving': ['KServe', 'BentoML', 'Seldon Core'],
        'Orchestration': ['Kubeflow', 'Airflow', 'Prefect']
      }
    },

    industryTabs: [
      {
        id: 'fintech',
        name: 'FinTech',
        headline: 'Regulated AI',
        description: 'Compliance verification for credit models.',
        useCases: [
          { title: 'Audit Trails', description: 'Tracing every prediction back to the exact code and data version.' }
        ],
        image: '/assets/images/industries/industry_finance_real.png'
      }
    ],

    glossary: [
      {
        question: 'What is Concept Drift?',
        answer: 'Concept drift happens when the statistical properties of the target variable change over time (e.g., fraud patterns change). MLOps systems detect this and trigger retraining.',
        type: 'paragraph'
      }
    ]
  },
  {
    id: 'google-ads-marketing',
    title: 'Google Ads & Digital Marketing',
    phase: 'deploy',
    description: 'Performance marketing, SEO, and conversion optimization to drive qualified growth.',
    icon: 'TrendingUp',
    heroTitle: 'Google Ads & Digital Marketing',
    heroSubtitle: 'Grow demand with paid search, SEO, and conversion-focused campaigns tailored to your funnel.',
    deliverables: ['Campaign Setup & Tracking', 'SEO Audit & Roadmap', 'Landing Page Optimization', 'Monthly Performance Reporting'],
    whyInvest: [
      {
        title: 'Qualified traffic',
        description: 'Attract the right users with targeted acquisition strategies.',
        icon: 'Target'
      },
      {
        title: 'Lower acquisition costs',
        description: 'Optimize spend through continuous testing and performance tuning.',
        icon: 'BarChart'
      },
      {
        title: 'Search visibility',
        description: 'Improve rankings and coverage for high-intent keywords.',
        icon: 'Search'
      },
      {
        title: 'Measurable growth',
        description: 'Track ROI with clear reporting and conversion analytics.',
        icon: 'TrendingUp'
      }
    ],
    process: [
      { title: 'Audit & strategy', description: 'Review channels, audiences, and competitive landscape.' },
      { title: 'Campaign build', description: 'Create ads, keywords, and conversion tracking.' },
      { title: 'Launch & experimentation', description: 'Run A/B tests on ads and landing pages.' },
      { title: 'Optimization & reporting', description: 'Improve performance with ongoing insights.' }
    ],
    expertise: ['Google Ads & PPC', 'SEO strategy', 'Social media advertising', 'Conversion rate optimization'],
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

export const COMPANY_INFO = {
  name: 'Vraxlor',
  tagline: 'Autonomous AI • Enterprise Intelligence • Trustworthy Systems',
  email: 'info@vraxlor.com',
  phone: '+1 (000) 000-0000',
};

// Use Cases - Converted from Case Studies
export const USE_CASES = [
  // Manufacturing, Chemicals, and Luxury Goods
  {
    id: 'erp-data-migration-foundry',
    title: 'ERP Data Migration with Palantir Foundry',
    industry: 'Manufacturing',
    tags: ['Data Migration', 'SAP S4/HANA', 'Palantir Foundry'],
    date: 'January 2025',
    excerpt: 'Migrating 20+ legacy ERP systems to SAP S4/HANA with custom workflow tools and data quality assurance, enabling business users to independently build pipelines.',
    image: 'manufacturing',
    content: {
      challenge: 'A leading manufacturing company needed to migrate 20 various legacy ERP systems to SAP S4/HANA. The primary focus was ensuring data quality during migration while empowering business users to take ownership. Additionally, maximizing reusability of data pipelines was essential to minimize project costs.',
      solution: 'We provided Palantir Foundry expertise for migration support, building custom workflow tools including a Migration Assistant, Alerting Dashboard, and Data Object Registry. We collaboratively designed architecture for multiple ERP migrations, hosted 30+ upskilling workshops on Palantir Foundry applications, and enabled publishing reusable components as Marketplace products.',
      impact: ['6 business users independently building pipelines within 2 months', 'Custom workflows centralize data quality alerts for SME resolution', 'Successful initial test migration demonstrating speed and quality'],
      technologies: ['Palantir Foundry', 'SAP S4/HANA', 'Pipeline Builder', 'Custom Workflow Tools']
    }
  },
  {
    id: 'data-science-platform-consulting',
    title: 'Data Science Platform Strategy & Design',
    industry: 'Luxury Goods',
    tags: ['Consulting', 'Platform Design', 'Infrastructure'],
    date: 'December 2024',
    excerpt: 'Strategic consulting for data science infrastructure selection, providing clear target architecture for hosting production-ready AI projects in secure environments.',
    image: 'luxury',
    content: {
      challenge: 'A prestigious Swiss watchmaker faced limited storage and computing infrastructure for data science projects. The tedious and manual startup process for each project, combined with lack of governance for AI initiatives, was hindering their ability to pursue advanced analytics.',
      solution: 'We provided comprehensive consulting services for new data science infrastructure and platform selection. This included conducting a thorough status-quo analysis of the current platform landscape and developing target architectures for both on-premise and PaaS alternatives.',
      impact: ['Gained better understanding of future platform alternatives', 'Clear roadmap for creating secure shared environments', 'Established target infrastructure for production-ready data science'],
      technologies: ['Cloud Platforms', 'Data Science Infrastructure', 'Platform Assessment']
    }
  },
  {
    id: 'ai-sales-forecasting',
    title: 'AI-Powered Sales Forecasting with 97-98% Accuracy',
    industry: 'Chemicals',
    tags: ['Machine Learning', 'Forecasting', 'Automation'],
    date: 'November 2024',
    excerpt: 'Developing a state-of-the-art forecasting approach combining multiple models to achieve exceptional accuracy, leading to significant monetary and time savings.',
    image: 'chemicals',
    content: {
      challenge: 'A major Swiss chemical company needed to automate their sales forecasting process which was previously performed manually, making it cumbersome and error-prone. The existing approach lacked the ability to incorporate forward-looking indicators and external data sources.',
      solution: 'We developed a new forecasting approach that combined multiple forecasting models with innovative data sources including forward-looking indicators, financial metrics (GDP, Inflation, FX rates), and major events (Chinese New Year, Olympic Games, etc.) to improve accuracy and reduce maintenance effort.',
      impact: ['97-98% forecasting accuracy achieved', 'Significant reduction in manual work and errors', 'Better planning capabilities leading to cost savings'],
      technologies: ['Machine Learning', 'Time Series Forecasting', 'Ensemble Models', 'External Data Integration']
    }
  },
  {
    id: 'logistic-base-optimization',
    title: 'Logistic Base Optimization for Chemical Production',
    industry: 'Chemicals',
    tags: ['Optimization', 'Statistical Algorithms', 'Manufacturing'],
    date: 'October 2024',
    excerpt: 'Creating custom statistical algorithms to define optimal ingredient pre-mixing combinations, theoretically reducing production pours by 10% and cutting costs.',
    image: 'chemicals',
    content: {
      challenge: 'In flavor production, ingredients must be mixed at specific ratios. Some ingredients are pre-mixed into "logistic bases" to reduce the number of pours. As formulas became more complex, the choice of optimal logistic bases by human experts was becoming increasingly difficult.',
      solution: 'We created a custom statistical algorithm incorporating information about the creation process and historical production data to identify mathematically optimal logistic base combinations that would minimize pouring operations.',
      impact: ['Theoretical 10% reduction in number of pours', 'Potential significant cost reduction after break-even', 'Data-driven approach to production optimization'],
      technologies: ['Statistical Algorithms', 'Optimization', 'Production Analytics']
    }
  },
  {
    id: 'production-line-optimization',
    title: 'Production Line Optimization with 8x ROI',
    industry: 'Chemicals',
    tags: ['Process Optimization', 'Real-time Monitoring', 'OEE'],
    date: 'September 2024',
    excerpt: 'Analyzing production line performance to improve speed and anticipate slowdowns, resulting in 15% speed-up and 8x return on investment.',
    image: 'chemicals',
    content: {
      challenge: 'A perfume production plant experienced highly variable efficiency with frequent slowdowns that impacted overall production capacity. The root causes were not easily identifiable, and there was no systematic approach to monitoring and addressing issues.',
      solution: 'We conducted comprehensive data analysis and discovered that slowdowns were caused by clogged valves. Beyond identifying the issue, we built a custom application to monitor KPIs in real-time and alert operators about undetected issues proactively.',
      impact: ['Overall Equipment Effectiveness (OEE) increased by 8%', 'Production speed improved by 15%', '8x return on investment achieved'],
      technologies: ['Real-time Monitoring', 'Data Analytics', 'Custom Alerting Systems', 'OEE Optimization']
    }
  },
  {
    id: 'process-order-optimization',
    title: 'Mathematical Process Order Optimization',
    industry: 'Chemicals',
    tags: ['Mathematical Optimization', 'Scheduling', 'Simulation'],
    date: 'August 2024',
    excerpt: 'Implementing mathematical optimization algorithms to define optimal manufacturing sequence order, achieving 3% improvement in manufacturing speed with 6-figure savings.',
    image: 'chemicals',
    content: {
      challenge: 'A perfume manufacturing line needed to optimize the sequence order for blending ingredients. The potential for reducing production time and complexity through better scheduling was clear, but past factory data was scarce and implementation seemed complicated.',
      solution: 'We implemented a mathematical optimization algorithm using the "Iterated Greedy" method that defined optimal production sequences. We built simulations to test the impact of different optimization methods compared to actual factory operations.',
      impact: ['Approximately 3% improvement in manufacturing speed', 'Six-figure annual cost savings', 'Faster manufacturing through optimized sequencing'],
      technologies: ['Iterated Greedy Algorithm', 'Mathematical Optimization', 'Simulation', 'Production Scheduling']
    }
  },
  {
    id: 'digital-twin-production-simulation',
    title: 'Digital Twin & Production Line Simulation',
    industry: 'Manufacturing',
    tags: ['Digital Twin', 'Causal Models', 'Palantir Foundry'],
    date: 'July 2024',
    excerpt: 'Developing tools on Foundry to identify optimal production parameters using causal models, improving glass bottle production yield from 86% toward 90%.',
    image: 'manufacturing',
    content: {
      challenge: 'A glass bottle manufacturer aimed to improve production line yield from 86% to 90%. While they had identified the process step where gains could be realized, there was no automated way to prioritize sensor data for further analysis.',
      solution: 'We initially built an end-to-end model of yield but encountered data quality issues. We pivoted to developing tools on Foundry to surface "golden production parameters" during high-quality production periods, combined with causal models to understand optimal actions for stabilizing the production process.',
      impact: ['Highlighted critical data quality issues with improvement roadmap', 'Demonstrated Foundry capability to replace existing systems', 'Trained key stakeholders on Foundry platform'],
      technologies: ['Palantir Foundry', 'Digital Twin', 'Causal Models', 'Sensor Analytics']
    }
  },
  {
    id: 'supply-chain-forecasting',
    title: 'AI Supply Chain Forecasting',
    industry: 'Chemicals',
    tags: ['Supply Chain', 'Forecasting', 'Automation'],
    date: 'June 2024',
    excerpt: 'Improving supply chain forecasting for raw materials, finished goods, and sales using AI and external data sources to achieve higher accuracy and automation.',
    image: 'chemicals',
    content: {
      challenge: 'A major Swiss chemical company struggled with their current forecasting process for raw materials, finished goods, and sales. The existing methods were labor-intensive, inconsistent, and failed to incorporate macro-economic indicators.',
      solution: 'We developed an innovative forecasting approach leveraging new data sources including forward-looking indicators, financial metrics (GDP, Inflation, FX rates), and scheduled major events to improve both accuracy and reduce maintenance effort.',
      impact: ['Automation reducing manual work and errors', '97-98% forecasting accuracy', 'Better planning enabling significant cost savings'],
      technologies: ['Machine Learning', 'Time Series Analysis', 'External Data APIs', 'Supply Chain Analytics']
    }
  },

  // Retail and Supply Chain
  {
    id: 'retail-sales-forecasting-platform',
    title: 'Retail Sales Forecasting Platform',
    industry: 'Retail',
    tags: ['Forecasting', 'Platform Development', 'Supply Chain'],
    date: 'May 2024',
    excerpt: 'Building a forecasting platform for model benchmarking and selection across 10M+ products, enabling more accurate retail sales forecasting and empowering new use cases.',
    image: 'retail',
    content: {
      challenge: 'A global retail manufacturer needed more accurate and efficient furniture sales forecasts for supply chain planning. With over 10 million different store products, finding the optimal forecasting method was extremely challenging, and the client lacked in-house forecasting expertise.',
      solution: 'We built a forecasting platform around Darts to efficiently benchmark, tune, and select forecasting models for any use case. We trained models on 10,000+ different products to globally learn information patterns and coached the client team on forecasting fundamentals.',
      impact: ['Best model outperformed existing solution in accuracy and efficiency', 'Client can now optimally plan supply chain operations', 'Platform enables definition of new forecasting use cases'],
      technologies: ['Darts', 'Time Series Forecasting', 'Model Benchmarking', 'Training Platform']
    }
  },

  // MedTech, Pharma, and Life Sciences
  {
    id: 'quality-assurance-genai',
    title: 'GenAI Quality Assurance Insights Generator',
    industry: 'MedTech',
    tags: ['Generative AI', 'Quality Assurance', 'CAPA'],
    date: 'April 2024',
    excerpt: 'Leveraging GenAI to streamline CAPA workflows, reducing time-to-resolution and creating a more reactive approach to quality assurance processes.',
    image: 'medtech',
    content: {
      challenge: 'A global MedTech manufacturer faced time-consuming CAPA (Corrective Action Preventive Action) workflows that delayed quality issue resolution. The manual nature of these processes made it difficult to be proactive about quality assurance.',
      solution: 'We implemented Generative AI to streamline the main CAPA workflows, automating insights generation and providing faster access to relevant quality data and historical resolution patterns.',
      impact: ['Reduced time-to-resolution for quality issues', 'More reactive approach to quality assurance', 'Streamlined CAPA workflow processes'],
      technologies: ['Generative AI', 'Large Language Models', 'Quality Management Systems']
    }
  },
  {
    id: 'supply-chain-demand-planner',
    title: 'AI-Powered Supply Chain Demand Planner: $600K+ Impact',
    industry: 'MedTech',
    tags: ['AI', 'Supply Chain', 'Optimization'],
    date: 'March 2024',
    excerpt: 'ML-powered tooling for demand planners to optimally stock products, simulating ordering strategies to minimize costs while maintaining service levels—delivering $600K+ impact.',
    image: 'medtech',
    content: {
      challenge: 'Current shipping decisions were based on simple heuristics, resulting in low container filling rates and high air freight costs due to reactive behavior. Minimizing expensive air shipments and reducing idle stock could realize strong cost savings.',
      solution: 'We built an AI-based planning module modeling real-world constraints and providing shipment recommendations to demand planners. The AI module behaves like a senior planner with systematic optimization, creating a supply chain edge.',
      impact: ['$600K reduction in global inventory', '$500K in freight and duties savings', '$200K in AI-accelerated manual work'],
      technologies: ['Machine Learning', 'Optimization Algorithms', 'Demand Forecasting', 'Supply Chain Modeling']
    }
  },
  {
    id: 'automated-nda-review',
    title: '700+ Hours Saved: Automated NDA Review with GenAI',
    industry: 'MedTech',
    tags: ['GenAI', 'Legal Tech', 'Contract Analysis'],
    date: 'February 2024',
    excerpt: 'Supporting NDA contract review by identifying risks from third-party changes and providing rewording suggestions, saving 730+ hours annually for the legal team.',
    image: 'medtech',
    content: {
      challenge: 'The legal function spent tremendous time supporting business stakeholders with legal reviews of standard NDAs. While NDA reviews are standardized processes, they require legal knowledge and company-specific jargon.',
      solution: 'We built a GenAI solution that compares third-party NDAs to internal terminology guidelines and golden NDA standards. The system identifies risks from third-party changes, flags deviating sections, and provides rewording suggestions.',
      impact: ['Self-service NDA management established', 'Estimated 730 hours annual savings for Legal', 'Legal team can focus on high-value, complex work'],
      technologies: ['Generative AI', 'NLP', 'Document Comparison', 'Contract Intelligence']
    }
  },
  {
    id: 'data-driven-strategy-workshop',
    title: 'Data-Driven Strategy Workshop for Life Sciences',
    industry: 'Life Sciences',
    tags: ['Strategy', 'Workshop', 'D&A'],
    date: 'January 2024',
    excerpt: 'Conducting comprehensive data & analytics strategy workshops to identify main opportunities and select optimal implementation strategies for initial AI use cases.',
    image: 'pharma',
    content: {
      challenge: 'A multinational life sciences company was interested in developing data & analytics capabilities but lacked a clear approach to select and implement use cases. Limited AI knowledge and unclear view of implementation strategies created decision paralysis.',
      solution: 'We assessed the existing IT strategy and highlighted gaps, collaboratively identified main D&A opportunities in the value chain, introduced best practices for D&A strategy implementation, and covered multiple strategies to select the best fit.',
      impact: ['Increased awareness of AI opportunities and limitations', 'Clear view of main opportunities and pain points', 'Identified "use case driven" strategy as best fit'],
      technologies: ['Strategic Assessment', 'Value Chain Analysis', 'D&A Strategy Frameworks']
    }
  },
  {
    id: 'production-continuous-monitoring',
    title: 'Production Line Continuous Monitoring System',
    industry: 'Pharma',
    tags: ['Monitoring', 'Anomaly Detection', 'Predictive Maintenance'],
    date: 'December 2023',
    excerpt: 'Implementing near real-time continuous monitoring of production processes with advanced analytics including alerting, trend detection, and predictive maintenance.',
    image: 'pharma',
    content: {
      challenge: 'After a data-driven optimization, the customer wanted to ensure their production line maintained the highest possible OEE while adding advanced features like automated issue detection and prediction.',
      solution: 'We implemented a near real-time continuous monitoring system of key production processes with advanced analytics including alerting, trend detection, anomaly detection, and predictive maintenance capabilities.',
      impact: ['Greater production process visibility', 'Quicker time to resolution for issues', 'Improved overall uptime'],
      technologies: ['Real-time Monitoring', 'Anomaly Detection', 'Predictive Maintenance', 'Advanced Analytics']
    }
  },
  {
    id: 'pharma-production-optimization',
    title: 'Pharma Production Line Optimization: 15x ROI',
    industry: 'Pharma',
    tags: ['Optimization', 'Analytics', 'AWS'],
    date: 'November 2023',
    excerpt: 'Deploying advanced analytics to increase production capacity, trending toward 11% productivity increase with remarkable 15x ROI through throughput and yield optimization.',
    image: 'pharma',
    content: {
      challenge: 'The customer was running out of production capacity, and significant CapEx investment in new production lines was needed to keep up with demand. The goal was to increase production capacity by 5% through advanced analytics instead.',
      solution: 'We implemented data integration on AWS platform, deployed anomaly detection algorithms, and established data correlations that led to actionable insights and recommendations for production optimization.',
      impact: ['Trending toward 11% productivity increase', 'Both throughput and yield optimization achieved', 'Remarkable 15x ROI delivered'],
      technologies: ['AWS', 'Anomaly Detection', 'Data Integration', 'Production Analytics']
    }
  },

  // Media
  {
    id: 'delivery-route-optimization',
    title: 'Delivery Route Optimization: 240x Faster Design',
    industry: 'Media',
    tags: ['Optimization', 'Logistics', 'Palantir Foundry'],
    date: 'October 2023',
    excerpt: 'Automating newspaper delivery route design through optimization algorithms on Palantir Foundry, reducing design time from 3 months to 2 days with 5% faster delivery.',
    image: 'media',
    content: {
      challenge: 'A major German media group faced a time-consuming and tedious process to design optimized delivery routes for newspapers. It took months to redesign routes even for a single district, requiring unnecessary manual work.',
      solution: 'We built a system on Foundry Workshop using data from maps, historical deliveries, and geocoded addresses. The tool automatically computes optimized district and route design for deliveries across Germany.',
      impact: ['5% reduction in total delivery time', '240x faster speed to design routes (3 months → 2 hours)', 'Better strategic decision-making capabilities'],
      technologies: ['Palantir Foundry', 'Route Optimization', 'Geospatial Analytics', 'Logistics AI']
    }
  },

  // Automotive
  {
    id: 'data-platform-selection-advisory',
    title: 'Data Platform Selection Advisory',
    industry: 'Automotive',
    tags: ['Consulting', 'Platform Assessment', 'Strategy'],
    date: 'September 2023',
    excerpt: 'Delivering comprehensive comparison of 7 data platform solutions across 7 dimensions to steer future data platform strategy for automotive operations.',
    image: 'automotive',
    content: {
      challenge: 'A German automotive company wanted to implement a new data & analytics solution for core use cases. They needed to review available data platforms before deciding on a strategy, preferably selecting a low-code option.',
      solution: 'We combined research efforts with our expertise to advise on the best data platform fit. We compared and ranked platforms across 7 dimensions (ease of use, data governance, etc.) and delivered a comprehensive final report with recommendations.',
      impact: ['Client able to steer data platform strategy', 'Full comparison of 7 solutions across 7 dimensions', 'No data platform provider overlooked before decision'],
      technologies: ['Platform Assessment', 'Data Architecture', 'Vendor Evaluation']
    }
  },
  {
    id: 'residual-value-forecasting',
    title: 'Residual Value Forecasting for Vehicle Portfolio',
    industry: 'Automotive',
    tags: ['Predictive Analytics', 'Financial Modeling', 'ML'],
    date: 'August 2023',
    excerpt: 'Developing and deploying predictive models for residual value forecasting across a global vehicle portfolio, resulting in more accurate forecasts worth $100M+ improvement.',
    image: 'automotive',
    content: {
      challenge: 'A German automotive company with a large global vehicle portfolio needed to accurately determine monthly payments and residual values on leasing contracts. Central computation was difficult as criteria varied from one country to another.',
      solution: 'We worked with the internal team to integrate multiple data sources spanning 12 years. We deployed linear regression models refined with our forecasting expertise and applied state-of-the-art improvements for transparency and control.',
      impact: ['More accurate residual value predictions', 'Increased transparency and explainability', 'Designed for scalability with new data availability'],
      technologies: ['Linear Regression', 'Forecasting', 'Model Explainability', 'Data Integration']
    }
  },
  {
    id: 'immuta-evaluation',
    title: 'Data Access & Governance Platform Evaluation',
    industry: 'Automotive',
    tags: ['Data Governance', 'SaaS Evaluation', 'Immuta'],
    date: 'July 2023',
    excerpt: 'Conducting comprehensive benchmarking of Immuta SaaS solution for data access and governance, providing assurance on fit-for-purpose before significant investment.',
    image: 'automotive',
    content: {
      challenge: 'A German automotive company was interested in deploying Immuta SaaS solution for data access and governance. They needed expert advice and technical due diligence before committing significant resources to integration.',
      solution: 'We conducted benchmarking using client-defined requirements and presented results in a workshop. The evaluation considered different end-user perspectives with topical deep dives, live demos, and developed deployment scenarios.',
      impact: ['Expert assurance that Immuta was fit for purpose', 'Ability to anticipate future weaknesses', 'Developed workarounds in advance'],
      technologies: ['Immuta', 'Data Governance', 'Platform Benchmarking', 'Security Assessment']
    }
  },
  {
    id: 'dataiku-azure-implementation',
    title: 'Dataiku D&A Solution on Azure',
    industry: 'Automotive',
    tags: ['Dataiku', 'Azure', 'Infrastructure as Code'],
    date: 'June 2023',
    excerpt: 'Creating infrastructure to enable quick Dataiku setup on Azure with custom plugins and monitoring systems, resulting in higher scalability and fewer downtimes.',
    image: 'automotive',
    content: {
      challenge: 'Maintenance of the existing Dataiku platform was too time-consuming and the platform failed frequently. Many steps required manual work from both users and administrators.',
      solution: 'We created infrastructure as code scripts for quick Dataiku setup on Azure, developed custom Dataiku plugins for self-service governance, integrated with Azure Data Lake and Kubernetes, and created a monitoring system for real-time performance insights.',
      impact: ['Much higher self-service capability on platform', 'Scalability in both storage and compute', 'Fewer and shorter downtimes with Teams-integrated monitoring'],
      technologies: ['Dataiku', 'Azure', 'Kubernetes', 'Infrastructure as Code', 'Azure Data Lake']
    }
  },
  {
    id: 'mlops-data-governance',
    title: 'MLOps & Data Governance Implementation',
    industry: 'Automotive',
    tags: ['MLOps', 'Data Governance', 'Model Deployment'],
    date: 'May 2023',
    excerpt: 'Defining model guidelines and developing data governance for data lake, enabling successful deployment of ML models while meeting strict finance department regulations.',
    image: 'automotive',
    content: {
      challenge: 'A German automotive company was in the middle of digital transformation, experimenting with numerous ML use cases on a proprietary platform. They needed to operationalize models while avoiding vendor platform lock-in.',
      solution: 'We implemented guidelines for model training, deployment, and maintenance in a hybrid environment. We developed data governance for the data lake and built a model-serving layer bridging Dataiku and Kubernetes.',
      impact: ['Successful transition from experimentation to deployment', 'ML models deployed meeting strict Finance Department standards', 'Models integrated with multiple client-facing applications'],
      technologies: ['MLOps', 'Dataiku', 'Kubernetes', 'Data Lake Governance', 'Model Serving']
    }
  },
  {
    id: 'opensource-da-platform',
    title: 'Open Source Data & Analytics Platform',
    industry: 'Automotive',
    tags: ['Open Source', 'Platform Development', 'Self-service'],
    date: 'April 2023',
    excerpt: 'Supporting creation of an entirely open source D&A platform, enabling self-service development and increased exposure to attract top engineering talent.',
    image: 'automotive',
    content: {
      challenge: 'Product silos prevented efficient collaboration across teams. Manual processes requiring multiple approvals slowed development. The tech department lacked public exposure, making it difficult to hire top talent.',
      solution: 'We are supporting development of an entirely open source D&A platform by exploring existing solutions, making them enterprise-ready, adding functionalities based on client needs, and integrating with existing services.',
      impact: ['Increased exposure to open source community', 'Self-service approach for minimal friction development', 'Internal teams discovering state-of-the-art data solutions'],
      technologies: ['Open Source Technologies', 'Enterprise Integration', 'Platform Engineering']
    }
  },
  {
    id: 'da-platform-architecture',
    title: 'D&A Platform Architecture & Implementation',
    industry: 'Automotive',
    tags: ['Architecture', 'Data Mesh', 'Migration'],
    date: 'March 2023',
    excerpt: 'Designing and testing future D&A platform using data mesh concepts, resulting in clear architecture with pre-defined migration scenarios for production deployment.',
    image: 'automotive',
    content: {
      challenge: 'The goal was to prepare a conceptual blueprint for a new D&A platform avoiding known pitfalls. A paradigm shift occurred when the planned data lake was replaced by data mesh, requiring development of many architectural concepts from scratch.',
      solution: 'Together with the internal team, we prepared documentation of technical concepts and requirements, created several PoCs, defined platform operation and testing concepts, clarified compliance architecture, and prepared for migration.',
      impact: ['Clear platform architecture for stable deployment', 'Pre-defined migration scenario for production', 'Internal team can now operate more autonomously'],
      technologies: ['Data Mesh', 'Platform Architecture', 'PoC Development', 'Migration Planning']
    }
  },
  {
    id: 'forecasting-platform-automotive',
    title: 'Central Forecasting Platform for Automotive',
    industry: 'Automotive',
    tags: ['Platform', 'Forecasting', 'Collaboration'],
    date: 'February 2023',
    excerpt: 'Designing and implementing a modern data platform for centralized forecast generation and analysis, enabling quick model development and cross-team collaboration.',
    image: 'automotive',
    content: {
      challenge: 'A global automotive company lacked a central data platform for forecast generation and analysis. Teams could not collaborate or analyze data efficiently, leading to duplicated efforts and inconsistent forecasts.',
      solution: 'We scoped, designed, and implemented a modern data platform with long-term scalability together with initial proof of concepts for forecasting use cases.',
      impact: ['Quick and consistent forecasting model development', 'Cross-team collaboration and model reuse enabled', 'Prevention of redundant code development'],
      technologies: ['Data Platform', 'Forecasting Systems', 'Collaborative Analytics']
    }
  },
  {
    id: 'automotive-data-lake',
    title: 'Enterprise Data Lake for Automotive Manufacturing',
    industry: 'Automotive',
    tags: ['Data Lake', 'Data Engineering', 'Analytics'],
    date: 'January 2023',
    excerpt: 'Building a governed and secured enterprise data lake to unify siloed data from manufacturing, testing, and sales systems for comprehensive analytics.',
    image: 'automotive',
    content: {
      challenge: 'Siloed data spread across multiple systems prevented proper analysis of manufacturing, testing, and sales data on a common platform, limiting insights and operational efficiency.',
      solution: 'We designed and built a new data infrastructure architecture creating an enterprise data lake that brought together data from disparate sources with proper governance and security.',
      impact: ['Enterprise data lake established with governance', 'Foundation for analytical use cases created', 'Unified view across manufacturing, testing, and sales'],
      technologies: ['Data Lake', 'Data Governance', 'ETL/ELT', 'Cloud Infrastructure']
    }
  },

  // Aerospace
  {
    id: 'airlines-platform-onboarding',
    title: 'Airlines Data Platform Onboarding & Training',
    industry: 'Aerospace',
    tags: ['Training', 'Foundry', 'Enablement'],
    date: 'December 2022',
    excerpt: 'Onboarding airlines across 3 continents on a central data analytics platform with comprehensive training and enablement for independent data science work.',
    image: 'aerospace',
    content: {
      challenge: 'Airlines data scientists and executives needed to explore data independently and implement new use cases on their own, requiring comprehensive training and enablement on the Foundry platform.',
      solution: 'We prepared educational materials including presentations and project examples, gave lectures and conducted workshops to train new users on the Foundry platform for independent data analysis.',
      impact: ['New users acquired skills for future use case implementation', 'Independent data analysis capabilities established', 'Onboarding across 3 continents completed'],
      technologies: ['Palantir Foundry', 'Training Programs', 'Data Analytics Enablement']
    }
  },
  {
    id: 'aircraft-predictive-maintenance',
    title: 'Aircraft Predictive Maintenance Platform',
    industry: 'Aerospace',
    tags: ['Predictive Maintenance', 'IoT', 'Data Integration'],
    date: 'November 2022',
    excerpt: 'Implementing a data platform to centralize maintenance data from hundreds of airlines, enabling predictive maintenance models to reduce operational interruptions.',
    image: 'aerospace',
    content: {
      challenge: 'An airplane producer needed to integrate data from hundreds of airlines on a single platform to reduce operational interruptions and minimize aircraft immobilization due to unforeseen maintenance needs.',
      solution: 'We integrated sensor data and telemetry into a central data lake and developed predictive maintenance models outputting the probability of maintenance needs within the next 5 flights for each aircraft.',
      impact: ['Notable improvement in problem detection speed', 'Faster triaging and resolution of issues', 'Enabled feedback loop to aircraft design teams'],
      technologies: ['Data Lake', 'Predictive Maintenance', 'IoT Sensors', 'Machine Learning']
    }
  },

  // Emergency Services
  {
    id: 'azure-streaming-architecture',
    title: 'Azure Event Stream Architecture for Mountain Rescue',
    industry: 'Emergency Services',
    tags: ['Streaming', 'Azure', 'Architecture'],
    date: 'October 2022',
    excerpt: 'Designing optimal streaming architecture for rescue helicopter location tracking with 15x more frequent data updates, enabling new life-saving use cases.',
    image: 'emergency',
    content: {
      challenge: 'A Swiss mountain rescue company wanted to introduce a more scalable Azure-based streaming platform to collect location data from rescue helicopters more frequently. New devices would send data 15x more often, overloading current infrastructure.',
      solution: 'We conducted an on-site meeting with the technical provider to provide best practices on streaming architecture. We delivered an optimal streaming architecture design after careful comparison between alternatives.',
      impact: ['Best approach defined for new architecture', 'Technical provider enabled with best practices', 'New use cases enabled through higher frequency data'],
      technologies: ['Azure Event Streaming', 'Architecture Design', 'Real-time Data Processing']
    }
  }
];

// Use Case Categories for filtering
export const USE_CASE_CATEGORIES = [
  { id: 'all', label: 'All Use Cases' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'chemicals', label: 'Chemicals' },
  { id: 'luxury-goods', label: 'Luxury Goods' },
  { id: 'retail', label: 'Retail' },
  { id: 'medtech', label: 'MedTech' },
  { id: 'pharma', label: 'Pharma' },
  { id: 'life-sciences', label: 'Life Sciences' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'aerospace', label: 'Aerospace' },
  { id: 'media', label: 'Media' },
  { id: 'emergency-services', label: 'Emergency Services' }
];
