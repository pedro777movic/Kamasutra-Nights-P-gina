import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Benefits from '@/components/landing/benefits';
import Gallery from '@/components/landing/gallery';
import Pricing from '@/components/landing/pricing';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
