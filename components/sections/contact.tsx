'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { BrandButton } from '@/components/brand-button';

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: string;
  projectType: string;
  message: string;
};

const budgets = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $50k',
  '$50k – $100k',
  '$100k+',
];
const projectTypes = [
  'Web Development',
  'SaaS Platform',
  'Mobile App',
  'Enterprise Software',
  'AI Integration',
  'UI/UX Design',
  'Other',
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">future-ready</span>
            </>
          }
          description="Tell us about your project. We will get back within a few business days with next steps."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                    Message received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. We will get back to you within a few
                    business days to schedule a discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" error={errors.name?.message}>
                      <input
                        {...register('name', { required: 'Your name is required' })}
                        placeholder="John Doe"
                        className={inputClass(errors.name)}
                      />
                    </Field>
                    <Field label="Company" error={errors.company?.message}>
                      <input
                        {...register('company')}
                        placeholder="Acme Inc."
                        className={inputClass()}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" error={errors.email?.message}>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email',
                          },
                        })}
                        placeholder="you@company.com"
                        className={inputClass(errors.email)}
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone?.message}>
                      <input
                        {...register('phone')}
                        placeholder="+92 314 0338880"
                        className={inputClass()}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Budget">
                      <NativeSelect options={budgets} {...register('budget')} />
                    </Field>
                    <Field label="Project Type">
                      <NativeSelect
                        options={projectTypes}
                        {...register('projectType')}
                      />
                    </Field>
                  </div>

                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      rows={5}
                      {...register('message', {
                        required: 'Tell us about your project',
                        minLength: { value: 10, message: 'A few more details please' },
                      })}
                      placeholder="Briefly describe what you want to build, your goals, and any timelines."
                      className={inputClass(errors.message, 'min-h-[120px] resize-y')}
                    />
                  </Field>

                  <BrandButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </BrandButton>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: info + map + whatsapp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24 space-y-5">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Contact details
                </h3>
                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:info@ftdynamics.pk"
                    className="group flex items-start gap-3.5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Email us</p>
                      <p className="text-sm font-medium text-foreground">
                        info@ftdynamics.pk
                      </p>
                    </div>
                  </a>
                  <a href="https://wa.me/923140338880" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Call or WhatsApp</p>
                      <p className="text-sm font-medium text-foreground">
                        +92 314 0338880
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Office</p>
                      <p className="text-sm font-medium text-foreground">
                        Islamabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/923140338880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all hover:shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
                <iframe
                  title="Office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.0%2C33.6%2C73.2%2C33.75&layer=mapnik&marker=33.6844%2C73.0479"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(error?: { message?: string }, extra = '') {
  return [
    'flex w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent/20',
    error?.message
      ? 'border-red-400 focus-visible:border-red-400'
      : 'border-border focus-visible:border-accent',
    extra,
  ].join(' ');
}

function NativeSelect({
  options,
  placeholder = 'Select…',
  ...props
}: {
  options: string[];
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      defaultValue=""
      className="flex h-[46px] w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
