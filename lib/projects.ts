export type Category =
  | 'Healthcare'
  | 'Education'
  | 'Corporate'
  | 'Web Apps'
  | 'Mobile Apps'
  | 'SaaS';

export type Project = {
  id: number;
  title: string;
  client: string;
  category: Category;
  industry: string;
  stack: string[];
  summary: string;
  image: string;
  featured?: boolean;
};

const healthcareImgs = [
  'https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8376171/pexels-photo-8376171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11198232/pexels-photo-11198232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7088493/pexels-photo-7088493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const educationImgs = [
  'https://images.pexels.com/photos/38575482/pexels-photo-38575482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5530520/pexels-photo-5530520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/9159042/pexels-photo-9159042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5621952/pexels-photo-5621952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const corporateImgs = [
  'https://images.pexels.com/photos/8463151/pexels-photo-8463151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/3931641/pexels-photo-3931641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const saasImgs = [
  'https://images.pexels.com/photos/34804011/pexels-photo-34804011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37880001/pexels-photo-37880001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const projects: Project[] = [
  // Healthcare
  { id: 1, title: 'SehatYar Hospital Management', client: 'SehatYar', category: 'Healthcare', industry: 'Healthcare', stack: ['Laravel', 'MySQL', 'React'], summary: 'Full hospital management system deployed across 10+ hospitals.', image: healthcareImgs[0], featured: true },
  { id: 2, title: 'Telemedicine Platform', client: 'MediCore', category: 'Healthcare', industry: 'Healthcare', stack: ['Next.js', 'Node', 'WebRTC'], summary: 'Remote consultation platform connecting patients and specialists.', image: healthcareImgs[1], featured: true },
  { id: 3, title: 'Patient Records Portal', client: 'City Hospital', category: 'Healthcare', industry: 'Healthcare', stack: ['React', 'Postgres', 'Docker'], summary: 'Secure EMR portal with role-based access for clinicians.', image: healthcareImgs[2] },
  { id: 4, title: 'Lab Reporting System', client: 'BioLab Diagnostics', category: 'Healthcare', industry: 'Healthcare', stack: ['Laravel', 'MySQL'], summary: 'Automated lab test reporting and result delivery.', image: healthcareImgs[3] },
  { id: 5, title: 'Pharmacy Inventory App', client: 'CarePharma', category: 'Healthcare', industry: 'Healthcare', stack: ['React Native', 'Node'], summary: 'Real-time pharmacy stock and prescription management.', image: healthcareImgs[4] },

  // Education
  { id: 6, title: 'School Management System', client: 'EduPrime', category: 'Education', industry: 'Education', stack: ['Next.js', 'Postgres', 'React Native'], summary: 'Unified school platform for students, teachers, and parents.', image: educationImgs[0], featured: true },
  { id: 7, title: 'E-Learning Platform', client: 'Khabir Consultant', category: 'Education', industry: 'Education', stack: ['Next.js', 'Node', 'MongoDB'], summary: 'Course delivery, quizzes, and progress tracking for learners.', image: educationImgs[1], featured: true },
  { id: 8, title: 'Attendance & Fees System', client: 'Greenwood School', category: 'Education', industry: 'Education', stack: ['Laravel', 'MySQL'], summary: 'Digital attendance and fee collection for 1,800+ students.', image: educationImgs[2] },
  { id: 9, title: 'Parent Portal App', client: 'Bright Future School', category: 'Education', industry: 'Education', stack: ['React Native', 'Firebase'], summary: 'Mobile portal for parents to track grades and attendance.', image: educationImgs[3] },

  // Corporate
  { id: 10, title: 'Barqiya Tech & Engineering Suite', client: 'Barqiya', category: 'Corporate', industry: 'Engineering & Tech', stack: ['Electrical LV', 'HVAC', 'CCTV & SIRA', 'Networking'], summary: 'Integrated electrical, HVAC, CCTV, and IT networking solutions across the UAE.', image: corporateImgs[0], featured: true },
  { id: 11, title: 'Khabir MEP Engineering & Approvals Portal', client: 'Khabir Consultant', category: 'Corporate', industry: 'MEP Engineering', stack: ['33 kV Electrical', 'HVAC Thermal', 'FEWA Category-1', 'Civil Defence'], summary: 'FEWA Category-1 electromechanical design up to 33 kV, authority approvals, and site supervision.', image: corporateImgs[1], featured: true },
  { id: 12, title: 'CRM & Lead Pipeline', client: 'Apex Ventures', category: 'Corporate', industry: 'Corporate', stack: ['React', 'Node', 'Postgres'], summary: 'Sales CRM with automated pipeline and reporting.', image: corporateImgs[2] },
  { id: 13, title: 'Internal HR Dashboard', client: 'Northgate Group', category: 'Corporate', industry: 'Corporate', stack: ['Next.js', 'Prisma'], summary: 'HR analytics dashboard for recruitment and retention.', image: corporateImgs[3] },

  // Web Apps
  { id: 14, title: 'Real Estate Listing Platform', client: 'EstateHub', category: 'Web Apps', industry: 'Real Estate', stack: ['Next.js', 'Postgres', 'Mapbox'], summary: 'Searchable property marketplace with map filters.', image: saasImgs[0] },
  { id: 15, title: 'Booking & Scheduling App', client: 'SchedulePro', category: 'Web Apps', industry: 'SaaS', stack: ['React', 'Node', 'Redis'], summary: 'Appointment booking engine for service businesses.', image: saasImgs[1] },
  { id: 16, title: 'Inventory Management Web', client: 'StockFlow', category: 'Web Apps', industry: 'Logistics', stack: ['Next.js', 'Prisma', 'Postgres'], summary: 'Multi-warehouse inventory with barcode scanning.', image: saasImgs[2] },

  // Mobile Apps
  { id: 17, title: 'Fitness Tracker App', client: 'FitLife', category: 'Mobile Apps', industry: 'Health & Fitness', stack: ['React Native', 'Firebase'], summary: 'Workout tracking with social challenges and analytics.', image: healthcareImgs[0] },
  { id: 18, title: 'Food Delivery App', client: 'QuickBite', category: 'Mobile Apps', industry: 'Food & Bev', stack: ['React Native', 'Node', 'MongoDB'], summary: 'Order, track, and pay — restaurant and rider apps included.', image: educationImgs[1] },
  { id: 19, title: 'Field Service Mobile', client: 'FixIt Pro', category: 'Mobile Apps', industry: 'Services', stack: ['React Native', 'Postgres'], summary: 'On-site job dispatch and status reporting for technicians.', image: corporateImgs[0] },

  // SaaS
  { id: 20, title: 'Analytics SaaS Platform', client: 'MetricWorks', category: 'SaaS', industry: 'SaaS', stack: ['Next.js', 'ClickHouse', 'AWS'], summary: 'Multi-tenant product analytics with real-time dashboards.', image: saasImgs[0], featured: true },
  { id: 21, title: 'Subscription Billing Engine', client: 'PayCycle', category: 'SaaS', industry: 'Fintech', stack: ['Node', 'Postgres', 'Stripe'], summary: 'Recurring billing, invoicing, and dunning automation.', image: saasImgs[1] },
  { id: 22, title: 'AI Content Assistant', client: 'WriteAI', category: 'SaaS', industry: 'AI', stack: ['Next.js', 'OpenAI', 'Postgres'], summary: 'AI writing assistant with team workspaces and exports.', image: saasImgs[2], featured: true },
  { id: 23, title: 'Project Management Tool', client: 'TeamFlow', category: 'SaaS', industry: 'SaaS', stack: ['Next.js', 'Node', 'Postgres'], summary: 'Kanban, timelines, and docs in one collaborative workspace.', image: corporateImgs[2] },
  { id: 24, title: 'Customer Support Desk', client: 'HelpDesk+', category: 'SaaS', industry: 'SaaS', stack: ['React', 'Node', 'Redis'], summary: 'Omnichannel ticketing with AI-suggested replies.', image: healthcareImgs[2] },
  { id: 25, title: 'Marketing Automation', client: 'GrowthLoop', category: 'SaaS', industry: 'Marketing', stack: ['Next.js', 'Python', 'Postgres'], summary: 'Email and lifecycle automation with visual workflows.', image: corporateImgs[3] },
  { id: 26, title: 'Document Signing SaaS', client: 'SignFast', category: 'SaaS', industry: 'Legal', stack: ['Next.js', 'Node', 'Postgres'], summary: 'Legally-binding e-signatures with audit trails.', image: educationImgs[2] },
  { id: 27, title: 'HR & Payroll Platform', client: 'PeopleOps', category: 'SaaS', industry: 'HR', stack: ['Next.js', 'Prisma', 'AWS'], summary: 'Payroll, leave, and performance in one platform.', image: corporateImgs[1] },
  { id: 28, title: 'IoT Monitoring Dashboard', client: 'SensorNet', category: 'SaaS', industry: 'IoT', stack: ['React', 'Node', 'TimescaleDB'], summary: 'Real-time sensor data visualization and alerting.', image: healthcareImgs[3] },
  { id: 29, title: 'Restaurant POS System', client: 'DinePOS', category: 'SaaS', industry: 'Food & Bev', stack: ['React', 'Node', 'Postgres'], summary: 'Point-of-sale, kitchen display, and reporting suite.', image: saasImgs[0] },
  { id: 30, title: 'Loyalty & Rewards App', client: 'Rewardly', category: 'SaaS', industry: 'Retail', stack: ['Next.js', 'Postgres'], summary: 'Customer loyalty programs with points and offers.', image: educationImgs[3] },
  { id: 31, title: 'Logistics Route Optimizer', client: 'RouteMax', category: 'SaaS', industry: 'Logistics', stack: ['Next.js', 'Python', 'PostGIS'], summary: 'AI-driven delivery route planning and tracking.', image: corporateImgs[0] },
  { id: 32, title: 'Health Insurance Portal', client: 'InsureHealth', category: 'Healthcare', industry: 'Insurance', stack: ['Next.js', 'Node', 'Postgres'], summary: 'Claims, coverage, and member self-service portal.', image: healthcareImgs[4] },
];

export const categories: ('All' | Category)[] = [
  'All',
  'Healthcare',
  'Education',
  'Corporate',
  'Web Apps',
  'Mobile Apps',
  'SaaS',
];
