import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of the Future Tech Dynamics website.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2024</p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <Section title="Acceptance of terms">
            By accessing or using the Future Tech Dynamics website, you agree to
            these terms. If you do not agree, please do not use the site.
          </Section>
          <Section title="Use of the website">
            You agree to use this website lawfully and not to misuse, disrupt,
            or attempt to gain unauthorized access to any part of it.
          </Section>
          <Section title="Intellectual property">
            All content on this website — including text, graphics, logos, and
            design — is the property of Future Tech Dynamics unless otherwise
            noted, and may not be reproduced without permission.
          </Section>
          <Section title="Project engagements">
            Any software development engagement is governed by a separate
            written agreement. These terms apply only to use of this website.
          </Section>
          <Section title="Limitation of liability">
            The website is provided &ldquo;as is.&rdquo; To the fullest extent
            permitted by law, Future Tech Dynamics is not liable for damages
            arising from use of the website.
          </Section>
          <Section title="Changes">
            We may update these terms from time to time. Continued use of the
            website after changes constitutes acceptance of the updated terms.
          </Section>
          <Section title="Contact">
            Questions? Email us at hello@ftdynamics.pk.
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
