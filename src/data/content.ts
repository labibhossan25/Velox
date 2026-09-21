export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  items: string[];
  icon: string;
  image: string;
}

export interface AdminFeature {
  title: string;
  description: string;
  icon: string;
  metrics?: string;
}

export interface ClientPortalFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  result: string;
  type: 'concept' | 'project';
  image: string;
  challenge: string;
  strategy: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites',
    description: 'Modern, responsive and high-performance websites that communicate your brand and convert visitors.',
    longDescription: 'We craft websites that are not just visually stunning but engineered for performance, accessibility, and conversion. Every pixel serves a purpose. Every interaction is intentional. From corporate sites to e-commerce platforms, we build digital experiences that represent your brand at the highest level.',
    items: ['Business Websites', 'Startup Sites', 'Restaurants & Hospitality', 'Agency Portfolios', 'Personal Brands', 'E-commerce', 'Landing Pages'],
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'Web Applications',
    description: 'Custom web applications built with modern architecture, designed for real business workflows.',
    longDescription: 'We build complex web applications that solve real business problems. From SaaS platforms to internal tools, our applications are designed with scalability, security, and user experience at the core. Built with modern frameworks and best practices for long-term maintainability.',
    items: ['SaaS Platforms', 'Dashboards', 'Customer Portals', 'Booking Systems', 'Management Systems', 'Education Platforms', 'Marketplaces', 'Internal Tools'],
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
  },
  {
    id: 'mobile',
    number: '03',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences on every device.',
    longDescription: 'Mobile-first experiences that users love. We build applications for iOS, Android, and cross-platform environments using modern frameworks like Flutter and React Native. Our mobile apps feature smooth animations, offline support, push notifications, and native performance.',
    items: ['Android Apps', 'iOS Apps', 'Cross-Platform', 'Business Apps', 'Customer Apps', 'Utility Apps', 'Education Apps', 'Booking Apps', 'E-commerce Apps'],
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80'
  },
  {
    id: 'ai-products',
    number: '04',
    title: 'AI-Powered Products',
    description: 'Digital products that leverage artificial intelligence to deliver intelligent, adaptive experiences.',
    longDescription: 'We integrate AI capabilities into digital products to create intelligent, adaptive experiences. From AI assistants and content generation to data processing and recommendation engines, we help businesses leverage the power of artificial intelligence to deliver unique value to their users.',
    items: ['AI Assistants', 'AI Search', 'AI Content Workflows', 'AI Customer Support', 'AI Data Processing', 'Intelligent Recommendations', 'AI Automation'],
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80'
  },
  {
    id: 'automation',
    number: '05',
    title: 'Business Automation',
    description: 'Automate repetitive business processes and connect your tools into a seamless workflow.',
    longDescription: 'We design and implement automation systems that eliminate repetitive tasks, reduce errors, and free your team to focus on high-value work. From WhatsApp automation to CRM workflows, we connect your tools and create intelligent processes that scale with your business.',
    items: ['WhatsApp Automation', 'Lead Management', 'Customer Support Workflows', 'Email Automation', 'Booking Workflows', 'Google Sheets Automation', 'CRM Workflows', 'Notifications', 'Data Synchronization'],
    icon: '🔄',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80'
  },
  {
    id: 'mvp',
    number: '06',
    title: 'MVP Development',
    description: 'Transform startup ideas into functional products with a clear path from concept to launch.',
    longDescription: 'We help startups and entrepreneurs validate their ideas quickly by building minimum viable products that are ready for real users. Our MVP process focuses on core functionality, rapid iteration, and getting your product to market as fast as possible without compromising quality.',
    items: ['Idea Validation', 'Rapid Prototyping', 'MVP Build', 'Launch Strategy', 'Iterative Improvement'],
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80'
  }
];

export const projects: Project[] = [
  {
    id: 'restaurant-platform',
    name: 'Restaurant Digital Platform',
    category: 'Website + Digital Menu + Ordering System',
    description: 'A complete digital experience for a modern restaurant — from brand website to digital menu and online ordering system.',
    longDescription: 'A comprehensive digital transformation for a modern restaurant chain. We designed and built a complete ecosystem including a brand website, interactive digital menu with real-time availability, online ordering system with payment integration, and an admin dashboard for staff management. The platform handles hundreds of daily orders while maintaining a premium user experience.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    features: ['Responsive website', 'Digital menu with categories', 'Online ordering system', 'Admin dashboard', 'Real-time order management', 'Payment integration', 'Inventory tracking', 'Customer analytics'],
    result: 'A fully integrated digital platform that streamlined operations, reduced order errors by 40%, and improved the customer experience significantly.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/231fd8b6-48e9-458e-a115-a441101388dc/_result.png',
    challenge: 'The restaurant needed a unified digital presence that could handle high-volume ordering during peak hours while maintaining a premium brand experience across all touchpoints.',
    strategy: 'We designed a modular architecture with a headless CMS for menu management, real-time order processing, and a responsive frontend that works seamlessly across devices.'
  },
  {
    id: 'business-management',
    name: 'Business Management Platform',
    category: 'Dashboard + Customer Management + Automation',
    description: 'A comprehensive business management platform combining customer management, project tracking, and automated workflows.',
    longDescription: 'An enterprise-grade business management platform that centralizes operations, customer relationships, and project workflows. Features include real-time dashboards, automated lead management, intelligent notifications, and comprehensive reporting. Built to scale from small teams to enterprise operations.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'n8n', 'PostgreSQL'],
    features: ['Custom dashboard', 'Customer management', 'Project tracking', 'Automated notifications', 'Reporting & analytics', 'Role-based access', 'API integrations', 'Workflow builder'],
    result: 'Centralized business operations with automated workflows reducing manual tasks by 60% and improving team productivity across departments.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/83a5e414-d324-4811-b9e2-9a32f567ae35/_result.png',
    challenge: 'The business was managing operations across multiple disconnected tools, leading to data silos, manual processes, and missed opportunities.',
    strategy: 'We built a unified platform with a flexible data model, powerful automation engine, and intuitive interface that replaces multiple tools with one cohesive system.'
  },
  {
    id: 'education-app',
    name: 'Education Application',
    category: 'Learning Platform + Student Dashboard',
    description: 'A modern learning platform with student dashboards, course management, and progress tracking.',
    longDescription: 'A next-generation education platform designed for modern learning workflows. Features include interactive course management, real-time progress tracking, video lesson delivery, assignment systems, and student analytics. Built to support thousands of concurrent learners with a smooth, engaging experience.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Firebase', 'AWS S3'],
    features: ['Course management', 'Student dashboard', 'Progress tracking', 'Assignment system', 'Video lessons', 'Discussion forums', 'Certificate generation', 'Mobile responsive'],
    result: 'A scalable education platform supporting growing user base with 99.9% uptime and excellent learning experience metrics.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/7e9bbe6e-d223-447c-9214-7293f037c7ae/_result.png',
    challenge: 'Creating an engaging learning experience that works across devices while handling complex course structures and real-time progress tracking.',
    strategy: 'We used a component-based architecture with offline support, adaptive video streaming, and gamification elements to keep learners engaged.'
  },
  {
    id: 'ai-productivity',
    name: 'AI Productivity Tool',
    category: 'AI-Powered Workflow + Automation',
    description: 'An AI-powered productivity tool that automates content workflows and provides intelligent suggestions.',
    longDescription: 'An intelligent productivity platform that leverages AI to automate content creation, workflow management, and team collaboration. Features include AI-powered content generation, smart task prioritization, automated reporting, and seamless integration with existing tools. Designed to amplify human creativity rather than replace it.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Supabase', 'Vercel', 'LangChain'],
    features: ['AI content generation', 'Workflow automation', 'Smart suggestions', 'Template system', 'Team collaboration', 'Version history', 'Custom AI models', 'API access'],
    result: 'An intelligent productivity platform that accelerates content creation workflows by 3x while maintaining quality and brand consistency.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/57d995eb-5642-44ec-bc8a-3ed88c781f61/_result.png',
    challenge: 'Building AI-powered tools that genuinely improve productivity without overwhelming users with complexity or producing low-quality outputs.',
    strategy: 'We focused on human-AI collaboration, with AI handling repetitive tasks while humans maintain creative control and quality oversight.'
  },
  {
    id: 'ecommerce-experience',
    name: 'E-commerce Experience',
    category: 'Storefront + Product Management + Checkout',
    description: 'A modern e-commerce experience with a clean storefront, product management, and streamlined checkout.',
    longDescription: 'A premium e-commerce platform built for conversion and customer experience. Features include a beautiful product catalog, intelligent search, streamlined checkout with multiple payment options, inventory management, and comprehensive analytics. Optimized for performance with sub-second page loads.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Supabase', 'Algolia'],
    features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'Order management', 'Inventory tracking', 'Customer accounts', 'Wishlist', 'Product reviews'],
    result: 'A performant e-commerce platform with 40% faster load times and significant improvement in conversion rates.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/94b14511-024a-4cdb-9580-0fa00db1293e/_result.png',
    challenge: 'Creating a premium shopping experience that loads instantly, handles complex product variations, and converts visitors into customers.',
    strategy: 'We used server-side rendering, edge caching, and optimized images to deliver instant page loads while maintaining rich interactivity.'
  },
  {
    id: 'mobile-app',
    name: 'Mobile Application',
    category: 'Cross-Platform App + Backend',
    description: 'A cross-platform mobile application with a modern backend, designed for real-world business use.',
    longDescription: 'A polished cross-platform mobile application built with Flutter, delivering native-like performance on both iOS and Android. Features include real-time data synchronization, push notifications, offline support, biometric authentication, and a beautiful, responsive interface that adapts to each platform.',
    technologies: ['Flutter', 'Firebase', 'REST APIs', 'TypeScript', 'Dart'],
    features: ['Cross-platform UI', 'Push notifications', 'User authentication', 'Real-time data', 'Offline support', 'Biometric login', 'In-app messaging', 'Analytics'],
    result: 'A polished mobile application delivering native-like performance across platforms with 4.8+ user rating.',
    type: 'concept',
    image: 'https://image.qwenlm.ai/generated-images/2af6dba2-ccf1-4047-8e77-a38b6683f3c3/_result.png',
    challenge: 'Delivering a premium mobile experience across both iOS and Android from a single codebase without compromising on platform-specific UX.',
    strategy: 'We used Flutter with platform-aware design patterns, ensuring the app feels native on each platform while sharing 95% of the codebase.'
  }
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Understand the business, audience, problem and goals. We listen deeply before designing anything.' },
  { number: '02', title: 'Define', description: 'Turn the idea into a clear product scope with defined features, priorities and success criteria.' },
  { number: '03', title: 'Design', description: 'Create the UX, UI, information architecture and interaction system that serves the product vision.' },
  { number: '04', title: 'Build', description: 'Use modern development and AI-assisted Vibe Coding to rapidly build the product with quality.' },
  { number: '05', title: 'Test', description: 'Test functionality, responsiveness, usability and performance across devices and scenarios.' },
  { number: '06', title: 'Launch', description: 'Deploy the product, connect services, configure integrations and go live with confidence.' },
  { number: '07', title: 'Improve', description: 'Continue improving the product based on real-world usage, feedback and evolving requirements.' }
];

export const technologies: TechItem[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'AI APIs', category: 'AI' },
  { name: 'GitHub', category: 'DevOps' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Netlify', category: 'Deployment' },
  { name: 'Make', category: 'Automation' },
  { name: 'n8n', category: 'Automation' }
];

export const whyUsPoints = [
  {
    title: 'Speed Without Sacrificing Thinking',
    description: 'AI-assisted development accelerates execution while product decisions remain human-driven.'
  },
  {
    title: 'Custom, Not Cookie-Cutter',
    description: 'Every project is designed and built around your actual requirements — not a template.'
  },
  {
    title: 'One Partner, Multiple Capabilities',
    description: 'Website, application, automation and AI capabilities under one unified workflow.'
  },
  {
    title: 'Built for Real Businesses',
    description: 'Focus on usability, performance, maintainability and scalability from day one.'
  },
  {
    title: 'Transparent Process',
    description: 'You always understand what is being designed, built and delivered — no black boxes.'
  }
];

export const adminFeatures: AdminFeature[] = [
  {
    title: 'Real-time Order Tracking',
    description: 'Monitor every order from placement to delivery with live status updates and automated notifications.',
    icon: '📦',
    metrics: '99.9% uptime'
  },
  {
    title: 'Client Management Dashboard',
    description: 'Complete overview of all clients, their projects, communication history, and billing status in one place.',
    icon: '👥',
    metrics: '50+ clients'
  },
  {
    title: 'Automated Workflow Engine',
    description: 'Set up custom workflows that automatically trigger actions based on events, deadlines, or client interactions.',
    icon: '⚙️',
    metrics: '10x faster'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Deep insights into business performance, client satisfaction, project profitability, and team productivity.',
    icon: '📊',
    metrics: 'Real-time data'
  },
  {
    title: 'Invoice & Payment System',
    description: 'Generate professional invoices, track payments, send reminders, and integrate with payment gateways.',
    icon: '💳',
    metrics: 'Auto-sync'
  },
  {
    title: 'Team Collaboration Tools',
    description: 'Internal messaging, task assignment, file sharing, and project timeline management for your entire team.',
    icon: '💬',
    metrics: 'Unified comms'
  }
];

export const clientPortalFeatures: ClientPortalFeature[] = [
  {
    title: 'Project Dashboard',
    description: 'Clients see real-time progress, milestones, and deliverables with full transparency.',
    icon: '🎯'
  },
  {
    title: 'Document Hub',
    description: 'All project documents, contracts, and deliverables organized and accessible 24/7.',
    icon: '📁'
  },
  {
    title: 'Communication Center',
    description: 'Direct messaging, feedback system, and approval workflows in one unified interface.',
    icon: '💬'
  },
  {
    title: 'Billing & Invoices',
    description: 'View invoices, payment history, and make payments directly through the portal.',
    icon: '💰'
  },
  {
    title: 'Support Tickets',
    description: 'Submit support requests, track status, and get responses from your dedicated team.',
    icon: '🎫'
  },
  {
    title: 'Analytics Access',
    description: 'Clients can view their own project analytics, usage stats, and performance metrics.',
    icon: '📈'
  }
];

export const philosophyPoints = [
  {
    title: 'We Don\'t Just Build, We Transform',
    description: 'Every project is an opportunity to elevate your business. We combine cutting-edge technology with strategic thinking to create digital experiences that don\'t just work—they inspire.'
  },
  {
    title: 'Speed Meets Precision',
    description: 'Using AI-assisted development and Vibe Coding, we deliver faster without compromising quality. But speed isn\'t just about code—it\'s about understanding your vision immediately and executing flawlessly.'
  },
  {
    title: 'Your Success is Our Blueprint',
    description: 'We measure our success by yours. Every decision, every design choice, every line of code is optimized for your business goals, your users, and your growth.'
  },
  {
    title: 'Transparency Builds Trust',
    description: 'No black boxes. No hidden processes. You see everything—progress, challenges, solutions. Because trust isn\'t given, it\'s earned through complete transparency.'
  }
];
