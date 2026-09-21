export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  result: string;
  type: 'concept' | 'project';
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
    items: ['Business Websites', 'Startup Sites', 'Restaurants & Hospitality', 'Agency Portfolios', 'Personal Brands', 'E-commerce', 'Landing Pages']
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'Web Applications',
    description: 'Custom web applications built with modern architecture, designed for real business workflows.',
    items: ['SaaS Platforms', 'Dashboards', 'Customer Portals', 'Booking Systems', 'Management Systems', 'Education Platforms', 'Marketplaces', 'Internal Tools']
  },
  {
    id: 'mobile',
    number: '03',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences on every device.',
    items: ['Android Apps', 'iOS Apps', 'Cross-Platform', 'Business Apps', 'Customer Apps', 'Utility Apps', 'Education Apps', 'Booking Apps', 'E-commerce Apps']
  },
  {
    id: 'ai-products',
    number: '04',
    title: 'AI-Powered Products',
    description: 'Digital products that leverage artificial intelligence to deliver intelligent, adaptive experiences.',
    items: ['AI Assistants', 'AI Search', 'AI Content Workflows', 'AI Customer Support', 'AI Data Processing', 'Intelligent Recommendations', 'AI Automation']
  },
  {
    id: 'automation',
    number: '05',
    title: 'Business Automation',
    description: 'Automate repetitive business processes and connect your tools into a seamless workflow.',
    items: ['WhatsApp Automation', 'Lead Management', 'Customer Support Workflows', 'Email Automation', 'Booking Workflows', 'Google Sheets Automation', 'CRM Workflows', 'Notifications', 'Data Synchronization']
  },
  {
    id: 'mvp',
    number: '06',
    title: 'MVP Development',
    description: 'Transform startup ideas into functional products with a clear path from concept to launch.',
    items: ['Idea Validation', 'Rapid Prototyping', 'MVP Build', 'Launch Strategy', 'Iterative Improvement']
  }
];

export const projects: Project[] = [
  {
    id: 'restaurant-platform',
    name: 'Restaurant Digital Platform',
    category: 'Website + Digital Menu + Ordering System',
    description: 'A complete digital experience for a modern restaurant — from brand website to digital menu and online ordering system.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Responsive website', 'Digital menu with categories', 'Online ordering system', 'Admin dashboard', 'Real-time order management'],
    result: 'A fully integrated digital platform that streamlined operations and improved the customer experience.',
    type: 'concept'
  },
  {
    id: 'business-management',
    name: 'Business Management Platform',
    category: 'Dashboard + Customer Management + Automation',
    description: 'A comprehensive business management platform combining customer management, project tracking, and automated workflows.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'n8n'],
    features: ['Custom dashboard', 'Customer management', 'Project tracking', 'Automated notifications', 'Reporting & analytics'],
    result: 'Centralized business operations with automated workflows reducing manual tasks significantly.',
    type: 'concept'
  },
  {
    id: 'education-app',
    name: 'Education Application',
    category: 'Learning Platform + Student Dashboard',
    description: 'A modern learning platform with student dashboards, course management, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Firebase'],
    features: ['Course management', 'Student dashboard', 'Progress tracking', 'Assignment system', 'Video lessons'],
    result: 'A scalable education platform designed for modern learning workflows.',
    type: 'concept'
  },
  {
    id: 'ai-productivity',
    name: 'AI Productivity Tool',
    category: 'AI-Powered Workflow + Automation',
    description: 'An AI-powered productivity tool that automates content workflows and provides intelligent suggestions.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Supabase', 'Vercel'],
    features: ['AI content generation', 'Workflow automation', 'Smart suggestions', 'Template system', 'Team collaboration'],
    result: 'An intelligent productivity platform that accelerates content creation workflows.',
    type: 'concept'
  },
  {
    id: 'ecommerce-experience',
    name: 'E-commerce Experience',
    category: 'Storefront + Product Management + Checkout',
    description: 'A modern e-commerce experience with a clean storefront, product management, and streamlined checkout.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Supabase'],
    features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'Order management', 'Inventory tracking'],
    result: 'A performant e-commerce platform with a focus on conversion and user experience.',
    type: 'concept'
  },
  {
    id: 'mobile-app',
    name: 'Mobile Application',
    category: 'Cross-Platform App + Backend',
    description: 'A cross-platform mobile application with a modern backend, designed for real-world business use.',
    technologies: ['Flutter', 'Firebase', 'REST APIs', 'TypeScript'],
    features: ['Cross-platform UI', 'Push notifications', 'User authentication', 'Real-time data', 'Offline support'],
    result: 'A polished mobile application delivering native-like performance across platforms.',
    type: 'concept'
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
