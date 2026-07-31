'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Send,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Reveal } from '@/components/motion';

const quickLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Blog', href: '/#blog' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/#services' },
  { label: 'SaaS Development', href: '/#services' },
  { label: 'Mobile Apps', href: '/#services' },
  { label: 'AI Integrations', href: '/#services' },
  { label: 'Cloud Solutions', href: '/#services' },
  { label: 'UI/UX Design', href: '/#services' },
];

const products = [
  { label: 'SehatYar HMS', href: 'https://sehatyar.online' },
  { label: 'School Management System', href: '/#products' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Careers', href: '/#contact' },
];

const socials = [
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'GitHub', icon: Github, href: 'https://github.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building future-ready digital solutions for businesses. We help
              startups, enterprises, healthcare, and education build scalable
              software products that drive innovation and growth.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href="mailto:hello@ftdynamics.pk"
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" /> hello@ftdynamics.pk
              </a>
              <a
                href="tel:+920000000000"
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-accent" /> +92 00 000 0000
              </a>
              <p className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" /> Islamabad, Pakistan
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:shadow-glow"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <Reveal>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.05}>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                Products
              </h4>
              <ul className="mt-4 space-y-2.5">
                {products.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                      {l.href.startsWith('http') && (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 font-heading text-sm font-semibold text-foreground">
                Legal
              </h4>
              <ul className="mt-4 space-y-2.5">
                {legal.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                Newsletter
              </h4>
              <p className="mt-4 text-sm text-muted-foreground">
                Insights on AI, SaaS, and software engineering. No spam.
              </p>
              <form
                className="mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="h-10 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_6px_20px_hsl(var(--accent)/0.3)] transition-colors hover:bg-accent-bright"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Future Tech Dynamics. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with precision in Pakistan
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
}
