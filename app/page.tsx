import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { Stats } from '@/components/sections/stats';
import { About } from '@/components/sections/about';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { Portfolio } from '@/components/sections/portfolio';
import { CaseStudies } from '@/components/sections/case-studies';
import { Process } from '@/components/sections/process';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <About />
        <WhyChooseUs />
        <Services />
        <Products />
        <Portfolio />
        <CaseStudies />
        <Process />
        <TechStack />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
