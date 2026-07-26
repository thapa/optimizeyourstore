import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Method from '@/components/Method';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import Capabilities from '@/components/Capabilities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#0E0B0D] font-sans">
      <Header />
      <Hero />
      <LogoMarquee />
      <Services />
      <Capabilities />
      
      <Method />
      <Stats />
      <Reviews />
      <Pricing />
      
      <CTA />
      <Footer />
    </main>
  );
}
