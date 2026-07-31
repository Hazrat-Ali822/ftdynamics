'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code2,
  LayoutDashboard,
  Building2,
  Smartphone,
  PenTool,
  Plug,
  Cloud,
  BrainCircuit,
  Contact,
  Boxes,
  Megaphone,
  Search,
  Share2,
  Wrench,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const services = [
  { icon: Code2, title: 'Custom Web Development', text: 'Tailored web apps engineered for performance, scale, and maintainability.' },
  { icon: LayoutDashboard, title: 'SaaS Development', text: 'Multi-tenant SaaS platforms with billing, auth, and analytics built in.' },
  { icon: Building2, title: 'Enterprise Software', text: 'Robust systems that integrate with your operations and workflows.' },
  { icon: Smartphone, title: 'Mobile App Development', text: 'Native-quality iOS and Android apps from a single modern codebase.' },
  { icon: PenTool, title: 'UI/UX Design', text: 'Research-driven interfaces that convert and delight your users.' },
  { icon: Plug, title: 'API Development', text: 'Secure, documented APIs and integrations that connect everything.' },
  { icon: Cloud, title: 'Cloud Solutions', text: 'AWS, DigitalOcean, and Docker deployments optimized for cost and uptime.' },
  { icon: BrainCircuit, title: 'AI Integrations', text: 'OpenAI, Gemini, and Claude-powered features embedded in your product.' },
  { icon: Contact, title: 'CRM Development', text: 'Custom CRMs that fit your sales process, not the other way around.' },
  { icon: Boxes, title: 'ERP Development', text: 'Unified ERP systems across finance, inventory, HR, and operations.' },
  { icon: Megaphone, title: 'Digital Marketing', text: 'Data-driven campaigns that grow qualified traffic and pipeline.' },
  { icon: Search, title: 'SEO', text: 'Technical and content SEO for sustainable organic visibility.' },
  { icon: Share2, title: 'Social Media Management', text: 'Strategy, content, and scheduling that builds a real audience.' },
  { icon: Wrench, title: 'Website Maintenance', text: 'Ongoing updates, monitoring, and hardening to keep things fast and safe.' },
  { icon: Compass, title: 'Technical Consulting', text: 'Architecture audits, tech strategy, and team enablement from experts.' },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to <span className="text-gradient">build and scale</span>
            </>
          }
          description="From first line of code to ongoing optimization, we cover the full spectrum of modern software engineering — for web, mobile, cloud, and AI."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-x-10 -top-20 h-40 bg-gradient-to-b from-accent/15 to-transparent blur-2xl" />
              </div>

              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
                  <s.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>

              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>

              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                Learn More
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
