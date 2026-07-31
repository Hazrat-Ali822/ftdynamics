'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/section-heading';

const faqs = [
  {
    q: 'What kind of projects does Future Tech Dynamics take on?',
    a: 'We build custom web apps, SaaS platforms, enterprise software, mobile apps, and AI-powered solutions. We work with startups, enterprises, healthcare providers, and educational institutions — anywhere there is a hard software problem worth solving well.',
  },
  {
    q: 'How do you price your projects?',
    a: 'Most engagements are fixed-scope with a clear milestone-based quote, though we also offer dedicated-team arrangements for longer builds. After a discovery call we provide a detailed proposal with timeline and cost before any commitment.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A focused web app or landing experience can ship in 4–6 weeks, while a full SaaS platform or enterprise system typically runs 3–6 months. We give you a realistic timeline up front and track against it weekly.',
  },
  {
    q: 'Do you work with existing codebases and teams?',
    a: 'Yes. We frequently join in-progress projects to augment existing teams, audit architecture, or take over maintenance. We start with a code review to understand the current state before proposing next steps.',
  },
  {
    q: 'What is SehatYar and can I see it?',
    a: 'SehatYar is our own hospital management system, live in production across 10+ hospitals. You can visit it at sehatyar.online, or book a demo through our contact form and we will walk you through it.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Absolutely. We offer ongoing maintenance retainers that include monitoring, security updates, bug fixes, and feature enhancements. We see launch as the beginning of the relationship, not the end.',
  },
  {
    q: 'Which technologies do you specialize in?',
    a: 'Our core stack is Next.js, React, TypeScript, and Tailwind on the frontend; Laravel, Node.js, Python, and PHP on the backend; MySQL, PostgreSQL, and MongoDB for databases; AWS, DigitalOcean, and Docker for cloud; and OpenAI, Gemini, and Claude for AI integrations.',
  },
  {
    q: 'Can you integrate AI into my existing product?',
    a: 'Yes. We have shipped AI-powered features using OpenAI, Gemini, and Claude APIs — including writing assistants, intelligent search, automated classification, and analytics. We focus on integrations that create real user value, not gimmicks.',
  },
  {
    q: 'How do you ensure security and quality?',
    a: 'Security is built in from the architecture stage: role-based access, input validation, encrypted data handling, and regular audits. On quality, we combine automated testing, manual QA, and code reviews on every change.',
  },
  {
    q: 'How do we get started?',
    a: 'Use the "Start Your Project" button or our contact form to share what you are building. We will schedule a discovery call, understand your goals, and come back with a proposal — usually within a few business days.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">answered</span>
            </>
          }
          description="Everything you might want to know before reaching out. Can't find your answer? Just contact us."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-white px-5 shadow-card data-[state=open]:border-accent/30 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-heading text-[15px] font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
