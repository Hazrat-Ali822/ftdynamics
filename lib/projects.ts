export type Category =
  | 'SaaS'
  | 'Enterprise Tech'
  | 'Web Platforms';

export type Project = {
  id: number;
  title: string;
  client: string;
  category: Category;
  industry: string;
  stack: string[];
  summary: string;
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  // SaaS Products
  {
    id: 1,
    title: 'SehatYar Hospital & Pharmacy HMS',
    client: 'SehatYar',
    category: 'SaaS',
    industry: 'Healthcare · HMS & Pharmacy POS',
    stack: ['Laravel', 'React', 'MySQL', 'Docker'],
    summary: 'Full hospital, EMR, OPD scheduling, pharmacy inventory POS, and diagnostic reporting system deployed across 10+ medical facilities.',
    url: 'https://sehatyar.online',
    featured: true,
  },
  {
    id: 2,
    title: 'School Management System',
    client: 'Sudhum Academy',
    category: 'SaaS',
    industry: 'Education · SaaS Platform',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Tailwind'],
    summary: 'Unified school portal for student attendance, grade tracking, fee collection, and parent-teacher communications.',
    featured: true,
  },

  // Enterprise Client Projects
  {
    id: 3,
    title: 'Barqiya Tech & Engineering Suite',
    client: 'Barqiya',
    category: 'Enterprise Tech',
    industry: 'Engineering & Tech Services · UAE',
    stack: ['Electrical LV', 'HVAC Mechanical', 'CCTV & SIRA', 'Networking'],
    summary: 'Integrated electrical low-voltage, HVAC mechanical, SIRA/HEMAYA-compliant CCTV surveillance, and IT structured cabling platform.',
    url: 'https://barqiya.ae',
    featured: true,
  },
  {
    id: 4,
    title: 'Khabir MEP Engineering & Approvals Portal',
    client: 'Khabir Consultant',
    category: 'Enterprise Tech',
    industry: 'MEP Engineering · UAE (FEWA Category-1)',
    stack: ['33 kV Electrical', 'HVAC Thermal', 'FEWA Category-1', 'Civil Defence'],
    summary: 'FEWA Category-1 electromechanical design up to 33 kV, Civil Defence NOC approvals, and engineer-of-record site supervision.',
    url: 'https://khabirconsultant.ae',
    featured: true,
  },

  // Top Real Repositories
  {
    id: 5,
    title: 'PharmaDost Platform',
    client: 'PharmaDost',
    category: 'Web Platforms',
    industry: 'Pharmaceutical & E-Commerce',
    stack: ['Python', 'Django', 'React', 'Postgres'],
    summary: 'Pharmaceutical e-commerce platform for online medicine ordering, digital prescription uploads, and pharmacy inventory sync.',
    featured: true,
  },
  {
    id: 6,
    title: 'Kitchen Care Management Platform',
    client: 'Kitchen Care',
    category: 'Web Platforms',
    industry: 'Services & Maintenance',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
    summary: 'Commercial kitchen appliance servicing, technician dispatch, work order tracking, and client portal system.',
  },
  {
    id: 7,
    title: 'Valora Beauty Store',
    client: 'Valora Beauty',
    category: 'Web Platforms',
    industry: 'Retail & E-Commerce',
    stack: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    summary: 'Modern e-commerce storefront for beauty products featuring dynamic catalog filtering, cart management, and fast checkout.',
  },
  {
    id: 8,
    title: 'Enterprise Task & Reminder System',
    client: 'Internal Enterprise Project',
    category: 'Web Platforms',
    industry: 'Enterprise Software',
    stack: ['Django REST API', 'JavaScript', 'Postgres'],
    summary: 'Role-based task management engine with hierarchical user permissions, automated reminder notifications, and audit logs.',
  },
];

export const categories: ('All' | Category)[] = [
  'All',
  'SaaS',
  'Enterprise Tech',
  'Web Platforms',
];
