import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Future Tech Dynamics collects, uses, and protects your information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2026</p>
        <div className="prose mt-10 max-w-none space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <Section title="Overview">
            Future Tech Dynamics (&ldquo;we&rdquo;) respects your privacy. This
            policy explains what information we collect, how we use it, and the
            choices you have.
          </Section>
          <Section title="Information we collect">
            We collect information you provide directly — such as your name,
            email, phone, company, and project details when you contact us. We
            also collect limited analytics data about how visitors use our
            website.
          </Section>
          <Section title="How we use information">
            We use your information to respond to inquiries, provide proposals
            and services, improve our website, and communicate with you about
            relevant updates. We do not sell your personal information.
          </Section>
          <Section title="Data security">
            We apply industry-standard safeguards to protect your information,
            including encrypted transmission and access controls. No method of
            transmission is fully secure, but we work hard to protect your data.
          </Section>
          <Section title="Your choices">
            You can request access to, correction of, or deletion of your
            personal information at any time by emailing hello@ftdynamics.pk.
          </Section>
          <Section title="Contact">
            Questions about this policy? Email us at hello@ftdynamics.pk.
          </Section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
