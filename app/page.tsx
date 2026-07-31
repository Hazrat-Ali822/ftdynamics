import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Stats } from '@/components/sections/stats';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { CaseStudies } from '@/components/sections/case-studies';
import { Process } from '@/components/sections/process';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';
import { Blog } from '@/components/sections/blog';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Products />
        <WhyChooseUs />
        <Stats />
        <About />
        <Portfolio />
        <CaseStudies />
        <Process />
        <TechStack />
        <Testimonials />
        <CTASection />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
