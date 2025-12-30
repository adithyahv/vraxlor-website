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
  // Phase 1: Discover
  {
    id: 'ai-consulting',
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
    id: 'ai-poc',
    title: 'AI Proof of Concept (PoC)',
    phase: 'discover',
    description: 'Rapid prototyping to validate technical feasibility and business value.',
    icon: 'TestTube',
    deliverables: ['Working Prototype', 'Feasibility Report', 'Cost-Benefit Analysis', 'Technical Blueprint'],
  },
  {
    id: 'big-data-consulting',
    title: 'Big Data Consulting',
    phase: 'discover',
    description: 'Strategies to handle massive data scales and extract meaningful insights.',
    icon: 'Database',
    heroTitle: 'Big Data Consulting',
    heroSubtitle: 'Analyze Large Datasets and Boost Your Operational Efficiency with Big Data Consulting services.',
    whyInvest: [
      {
        title: 'New Opportunities',
        description: 'Uncover useful business-wise information and hidden correlations to drive growth.',
        icon: 'Lightbulb'
      },
      {
        title: 'Cheaper Storage',
        description: 'Implement efficient data lakes and storage solutions to reduce costs.',
        icon: 'HardDrive'
      },
      {
        title: 'Effective Marketing',
        description: 'Leverage data for precise targeting and personalized customer experiences.',
        icon: 'Megaphone'
      },
      {
        title: 'Better Customer Service',
        description: 'Gain insights into customer behavior to improve service and satisfaction.',
        icon: 'Smile'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamline processes and decision-making with insightful big data analysis.',
        icon: 'TrendingUp'
      }
    ],
    process: [
      { title: 'Identify Sources', description: 'Identifying current and potential structured & unstructured data sources.' },
      { title: 'Introduce Data Lakes', description: 'Introducing data lakes (Hadoop, S3, Azure) to reduce storage costs.' },
      { title: 'Connect to Clients', description: 'Connecting data sources to the specific needs and behaviors of your clients.' },
      { title: 'New Data Hubs', description: 'Gradually incorporating new data hubs to adjust operations.' },
      { title: 'Process Integration', description: 'Connecting clients’ data to company processes (product, pricing, marketing).' },
      { title: 'Testing', description: 'Testing, measuring, and learning from data assumptions.' }
    ],
    expertise: ['Streaming Applications', 'Data Lakes', 'Big Data Processing', 'Data Integration'],
    deliverables: ['Maturity Scorecard', 'Gap Analysis', 'Compliance Review', 'Readiness Roadmap'],
  },
  {
    id: 'generative-ai-consulting',
    title: 'Generative AI Consulting',
    phase: 'discover',
    description: 'Strategic advice on leveraging GenAI for content, code, and customer experience.',
    icon: 'Lightbulb',
    deliverables: ['Use Case Identification', 'Risk Assessment', 'Model Selection', 'Implementation Plan'],
  },

  // Phase 2: Organize Data
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Services',
    phase: 'organize',
    description: 'Turn your data into actionable insights with modern BI tools and dashboards.',
    icon: 'BarChart2',
    heroTitle: 'Business Intelligence Services',
    heroSubtitle: 'Reliable data analysis and reporting will guide you to faster and more consistent growth.',
    whyInvest: [
      {
        title: 'Data-Driven Decisions',
        description: 'Reliable data analysis and reporting will guide you to faster and more consistent growth.',
        icon: 'TrendingUp'
      },
      {
        title: 'Modern Infrastructure',
        description: 'Our BI services help you step into a data-driven world and modernize existing analytics systems.',
        icon: 'Server'
      },
      {
        title: 'Competitive Advantage',
        description: 'Gain a competitive edge regardless of scale or sector with expert BI consulting.',
        icon: 'Award'
      },
      {
        title: 'Trusted Technologies',
        description: 'We provide reliable services using trusted technologies like Azure, AWS, and Google Cloud.',
        icon: 'CheckCircle'
      },
      {
        title: 'Self-Service Enablement',
        description: 'Empower business users to be independent from IT with self-service reporting tools.',
        icon: 'Users'
      }
    ],
    process: [
      {
        title: 'Gather Requirements',
        description: 'We determine specific project approaches and BI technology that fits your organization best.'
      },
      {
        title: 'Collect & Integrate',
        description: 'Collecting data from various sources (ERP, databases, Excel) into a master data warehouse.'
      },
      {
        title: 'Transform & Prepare',
        description: 'Cleaning and preparing data (ETL) for exploration and ad-hoc analysis.'
      },
      {
        title: 'Explore & Insights',
        description: 'Solving defined problems through data mining and discovering patterns.'
      },
      {
        title: 'Visualize & Report',
        description: 'Creating rich dashboards that facilitate sharing key information and KPIs.'
      }
    ],
    expertise: [
      'Data Warehousing',
      'Self-service BI',
      'Reporting Automation',
      'OLAP & ETL'
    ],
    deliverables: ['Interactive Dashboards', 'Automated Reports', 'Self-Service Analytics', 'KPI Tracking'],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering Services',
    phase: 'organize',
    description: 'Build robust pipelines to ingest, process, and store your enterprise data.',
    icon: 'Wrench',
    heroTitle: 'Data Engineering Services',
    heroSubtitle: 'Boost data performance with our Data Engineering Services. We design, build, and optimize scalable data pipelines.',
    whyInvest: [
      {
        title: 'Modern Data Pipelines',
        description: 'Designing and implementing end-to-end automated data pipelines of production quality.',
        icon: 'Activity'
      },
      {
        title: 'Data Preparation & ETL',
        description: 'Transforming raw data into required models for business reporting and advanced analytics.',
        icon: 'FileText'
      },
      {
        title: 'Data Lake Implementation',
        description: 'Cost-effective data storage and quick processing for scalable business data architecture.',
        icon: 'Database'
      },
      {
        title: 'Cloud Data Architecture',
        description: 'Flexible and highly accessible business data architectures on AWS, Azure, or GCP.',
        icon: 'Cloud'
      },
      {
        title: 'Future-Proof Auditing',
        description: 'Audit and future-proof scalable dataflows to maximize the value of your data.',
        icon: 'Shield'
      }
    ],
    process: [
      { title: 'Discovery', description: 'Understanding business needs and technical requirements through workshops.' },
      { title: 'Source Analysis', description: 'Analysis of existing and future data sources (structured & unstructured).' },
      { title: 'Data Lake', description: 'Building and implementing a Data Lake (Hadoop, S3, GCS, Azure).' },
      { title: 'Pipelines', description: 'Designing and implementing Data Pipelines to generate unified data models.' },
      { title: 'Automation', description: 'Developing DevOps strategy to deploy and automate the pipeline.' },
      { title: 'Testing', description: 'Measuring, learning, and automated testing of data quality.' }
    ],
    expertise: ['AWS', 'Azure', 'GCP', 'Databricks', 'Snowflake', 'Airflow', 'dbt'],
    deliverables: ['Data Pipelines', 'Data Lakes', 'ETL Automation', 'Real-time Streaming'],
  },
  {
    id: 'data-governance',
    title: 'Data Governance & Observability',
    phase: 'organize',
    description: 'Ensure data quality, security, and compliance across your organization.',
    icon: 'ShieldCheck',
    deliverables: ['Governance Framework', 'Data Catalog', 'Quality Metrics', 'Access Control Policies'],
  },
  {
    id: 'databricks-consulting',
    title: 'Databricks Consulting Services',
    phase: 'organize',
    description: 'Expert implementation and optimization of the Databricks Lakehouse platform.',
    icon: 'Box',
    deliverables: ['Platform Setup', 'Optimization', 'Migration', 'Training'],
  },
  {
    id: 'data-annotation',
    title: 'Data Annotation',
    phase: 'organize',
    description: 'High-quality labeling services to prepare your data for machine learning models.',
    icon: 'Tag',
    heroTitle: 'Data Annotation Services',
    heroSubtitle: 'High-quality data is the fuel for high-performance AI. We ensure your data is label-ready.',
    whyInvest: [
      {
        title: 'Model Accuracy',
        description: 'High-quality ground truth data is the single biggest factor in model performance.',
        icon: 'Check'
      },
      {
        title: 'Scalability',
        description: 'Scale your annotation efforts rapidly without hiring internal teams.',
        icon: 'Maximize'
      },
      {
        title: 'Domain Expertise',
        description: 'Annotators with specific domain knowledge for specialized datasets (medical, legal).',
        icon: 'User'
      },
      {
        title: 'Cost Effective',
        description: 'Reduce the high cost of internal data labeling operations.',
        icon: 'DollarSign'
      },
      {
        title: 'Security',
        description: 'Secure environments and protocols to protect your sensitive data.',
        icon: 'Lock'
      }
    ],
    process: [
      { title: 'Data Ingestion', description: 'Secure transfer of raw data.' },
      { title: 'Guideline Creation', description: 'Establishing clear labeling rules.' },
      { title: 'Annotation', description: 'Execution by trained annotators.' },
      { title: 'QA & Review', description: ' rigorous quality checks.' },
      { title: 'Delivery', description: 'Export in your required format.' }
    ],
    expertise: ['Computer Vision', 'NLP', 'Audio', 'LiDAR'],
    deliverables: ['Labeled Datasets', 'Annotation Guidelines', 'Quality Reports', 'Feedback Loop'],
  },

  // Phase 3: Develop
  {
    id: 'ai-agents',
    title: 'AI Agents Development',
    phase: 'develop',
    description: 'Autonomous systems that can perceive, reason, and act to achieve goals.',
    icon: 'Bot',
    heroTitle: 'AI Agents Development',
    heroSubtitle: 'Build smarter workflows with custom AI agents. We build AI agents to automate tasks, enhance decision-making, and drive efficiency.',
    whyInvest: [
      {
        title: 'End-to-End Automation',
        description: 'AI agents analyze data, recognize patterns, and execute multi-step workflows autonomously.',
        icon: 'Cpu'
      },
      {
        title: 'Faster Decision Making',
        description: 'Process vast amounts of data in real-time to recommend or take optimal actions instantly.',
        icon: 'Zap'
      },
      {
        title: 'Seamless Integration',
        description: 'Connect siloed tools (CRMs, ERPs, APIs) without workflow gaps, acting as a unified layer.',
        icon: 'Link'
      },
      {
        title: 'Continuous Learning',
        description: 'Agents adapt to changing conditions and improve results over time without manual retraining.',
        icon: 'TrendingUp'
      },
      {
        title: 'Security & Compliance',
        description: 'Run in private environments to meet strict data protection standards (GDPR, HIPAA).',
        icon: 'ShieldCheck'
      }
    ],
    process: [
      { title: 'Discovery', description: 'Identify target processes, systems to interact with, and success criteria.' },
      { title: 'Design', description: 'Define use cases and architectural blueprint (roles, data flows, integrations).' },
      { title: 'Data Prep', description: 'Extract, clean, label, and anonymize data sources for training.' },
      { title: 'Modeling', description: 'Select and fine-tune model architectures (LLM, SLM, Hybrid).' },
      { title: 'Development', description: 'Build agency logic and integrate with business systems (CRMs, ERPs).' },
      { title: 'Testing', description: 'Simulate real use cases, edge cases, and validate performance/compliance.' },
      { title: 'Deployment', description: 'Launch into production with orchestration logic for multi-agent coordination.' },
      { title: 'Optimization', description: 'Monitor feedback loops and retraining for continuous improvement.' }
    ],
    types: [
      { title: 'Simple Reflex Agents', description: 'Act based on current input using fixed rules. Best for alerts and static automation.' },
      { title: 'Goal-Based Agents', description: 'Plan sequences of actions to achieve objectives. Ideal for logistics and scheduling.' },
      { title: 'Utility-Based Agents', description: 'Evaluate outcomes to maximize utility. Used in financial portfolio management.' },
      { title: 'Learning Agents', description: 'Improve continuously from data and feedback. Great for personalization and fraud detection.' }
    ],
    expertise: ['LangChain', 'AutoGPT', 'OpenAI', 'Vector Databases'],
    deliverables: ['Autonomous Agents', 'Workflow Orchestration', 'Multi-System Integration', 'Goal Management'],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Development Company',
    phase: 'develop',
    description: 'Custom GenAI solutions that create content, code, and synthetic data.',
    icon: 'Sparkles',
    heroTitle: 'Generative AI Development Company',
    heroSubtitle: 'Revolutionize your organization with our custom Generative AI development. We deliver innovative AI solutions tailored to your business needs.',
    whyInvest: [
      {
        title: 'Cost Reduction',
        description: 'Eliminate manual, repetitive tasks reduces operational costs by 30-70%.',
        icon: 'DollarSign'
      },
      {
        title: 'Speed & Efficiency',
        description: 'Accelerate processes from days/weeks to minutes (documentation, reporting, analysis).',
        icon: 'Zap'
      },
      {
        title: 'Scalability',
        description: 'Handle exponentially more work without hiring proportionally more staff.',
        icon: 'TrendingUp'
      },
      {
        title: 'Consistency',
        description: 'Eliminate human error and ensure standardized output quality across all generated content.',
        icon: 'CheckCircle'
      },
      {
        title: 'ContextClue',
        description: 'AI-powered framework that understands the complexity of your engineering environment.',
        icon: 'Cpu'
      }
    ],
    process: [
      { title: 'Discover', description: 'Map challenges and prioritize high-impact use cases (automated reports, content).' },
      { title: 'Design', description: 'Translate business needs into a technical blueprint and architecture.' },
      { title: 'Prepare Data', description: 'Clean, structure, and anonymize data to build knowledge graphs.' },
      { title: 'Customize Models', description: 'Fine-tune LLMs or apply prompt engineering to speak your business language.' },
      { title: 'Develop', description: 'Build user interfaces and connect to CRMs, intranets, or custom apps.' },
      { title: 'Test & Validate', description: 'Ensure quality, accuracy, and compliance with real-world scenarios.' },
      { title: 'Deploy & Monitor', description: 'Launch into production with monitoring dashboards and continuous retraining.' }
    ],
    expertise: ['LLMs', 'RAG', 'Prompt Engineering', 'ContextClue', 'Knowledge Graphs'],
    deliverables: ['Custom LLMs', 'RAG Systems', 'Content Automation', 'Knowledge Bases'],
  },
  {
    id: 'llms-development',
    title: 'LLMs Development',
    phase: 'develop',
    description: 'Training and fine-tuning Large Language Models for specific domains.',
    icon: 'FileText',
    deliverables: ['Fine-tuned Models', 'Dataset Curation', 'Evaluation Framework', 'Deployment'],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Consulting',
    phase: 'develop',
    description: 'Predictive models and algorithms to solve complex business problems.',
    icon: 'Brain',
    deliverables: ['Predictive Models', 'Recommendation Engines', 'Fraud Detection', 'Time-series Forecasting'],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    phase: 'develop',
    description: 'Advanced visual intelligence for object detection, classification, segmentation, and spatial analysis.',
    icon: 'Eye',
    heroTitle: 'Get ahead with Computer Vision Solutions',
    heroSubtitle: 'Our Computer Vision solutions replace manual inspection with automated defect detection, process monitoring, and visual analytics.',
    whyInvest: [
      {
        title: 'Automated Quality Control',
        description: 'Automated defect and anomaly detection boosts product quality and reduces waste.',
        icon: 'CheckCircle'
      },
      {
        title: 'Inventory Optimization',
        description: 'Real-time inventory intelligence prevents stockouts and optimizes placement.',
        icon: 'Box'
      },
      {
        title: 'Compliance Auditing',
        description: '3D visual inspection ensuring adherence to safety and quality standards.',
        icon: 'ClipboardCheck'
      },
      {
        title: 'Operational Efficiency',
        description: 'Increase throughput and lower inspection costs across logistics workflows.',
        icon: 'TrendingUp'
      },
      {
        title: 'Tangible ROI',
        description: 'Measurable impact on key business drivers like defect reduction and diagnostic speed.',
        icon: 'DollarSign'
      }
    ],
    process: [
      { title: 'Problem Definition', description: 'Define the task and success criteria considering constraints.' },
      { title: 'Data Collection', description: 'Gather and clean diverse image/video data with augmentation.' },
      { title: 'Data Annotation', description: 'Label images with bounding boxes or masks for accurate learning.' },
      { title: 'Model Selection', description: 'Choose and train appropriate model architectures.' },
      { title: 'Evaluation', description: 'Test on separate data to verify robustness.' },
      { title: 'Deployment', description: 'Integrate on cloud, edge, or on-premise systems.' }
    ],
    expertise: ['Image Recognition', 'Object Detection', 'Semantic Segmentation', 'Video Analysis'],
    deliverables: ['Object Detection', 'Image Classification', 'Video Analytics', 'Quality Control']
  },

  // Phase 4: Deploy
  {
    id: 'ai-advisory',
    title: 'AI Advisory Services',
    phase: 'deploy',
    description: 'Ongoing strategic advice to ensure your AI initiatives stay on track.',
    icon: 'MessageCircle',
    deliverables: ['Strategic Reviews', 'Market Insights', 'Technology Selection', 'Team Upskilling'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Development Services',
    phase: 'deploy',
    description: 'Intelligent conversational interfaces for customer support and internal use.',
    icon: 'MessageSquare',
    deliverables: ['Custom Chatbots', 'Integration', 'Conversation Design', 'Analytics'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration Services',
    phase: 'deploy',
    description: 'Seamlessly embedding AI models into your existing software ecosystem.',
    icon: 'Link',
    deliverables: ['API Development', 'Workflow Integration', 'Legacy System Adaptors', 'Real-time Inference'],
  },
  {
    id: 'mlops',
    title: 'MLOps Consulting',
    phase: 'deploy',
    description: 'Operations and infrastructure to keep your models healthy in production.',
    icon: 'Settings',
    heroTitle: 'MLOps Consulting',
    heroSubtitle: 'We support companies in the field of consulting and implementation of MLOps solutions. Delivering scalable ML pipelines powered by enterprise-grade MLOps.',
    whyInvest: [
      {
        title: 'Accelerated Innovation',
        description: 'Launch new data-driven products faster and respond quickly to market opportunities.',
        icon: 'Rocket'
      },
      {
        title: 'Cost Efficiency',
        description: 'Streamline resource management and scale AI initiatives without ballooning costs.',
        icon: 'DollarSign'
      },
      {
        title: 'Consistent Quality',
        description: 'Continuous monitoring ensures accuracy and compliance, reducing business risks.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Stronger Collaboration',
        description: 'Foster cross-functional teamwork between data scientists and DevOps engineers.',
        icon: 'Users'
      },
      {
        title: 'Transparency',
        description: 'Detailed tracking and documentation for regulatory requirements and audits.',
        icon: 'Eye'
      }
    ],
    process: [
      { title: 'Team Integration', description: 'Building the right team of ML engineers, data engineers, and DevOps.' },
      { title: 'ETL Pipelines', description: 'Creating specific pipelines for uninterrupted data extraction.' },
      { title: 'Version Control', description: 'Managing model parameters to ensure reproducibility.' },
      { title: 'Testing', description: 'Checking for accuracy, ROC, and stability indexes (PSI, CSI).' },
      { title: 'Monitoring', description: 'Periodic monitoring of model performance to detect drift.' }
    ],
    expertise: ['Model Monitoring', 'CI/CD for ML', 'Model Registry', 'Feature Store'],
    deliverables: ['CI/CD Pipelines', 'Model Monitoring', 'Auto-Retraining', 'Performance Dashboards'],
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
