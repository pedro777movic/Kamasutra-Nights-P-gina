import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Benefits from '@/components/landing/benefits';
import HowItWorks from '@/components/landing/how-it-works';
import Gallery from '@/components/landing/gallery';
import Pricing from '@/components/landing/pricing';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import KamaSutraArt from '@/components/landing/kama-sutra-art';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <KamaSutraArt />
        <HowItWorks />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
