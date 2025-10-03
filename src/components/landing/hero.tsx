import Image from 'next/image';
import { Button } from '@/components/ui/button';
import placeholderData from '@/lib/placeholder-images.json';

const heroImage = placeholderData.placeholderImages.find(p => p.id === 'hero-mockup');

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight text-primary mb-4">
              Transforme Suas Noites em Puro Prazer
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Descubra as 100 posições do Kamasutra em um app feito para mulheres que querem seduzir, surpreender e viver experiências inesquecíveis.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-6 w-full md:w-auto">
              <a href="#pricing">Quero Sentir Agora</a>
            </Button>
          </div>
          <div className="relative mx-auto max-w-[250px] md:max-w-sm">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={400}
                height={800}
                className="rounded-3xl shadow-2xl shadow-primary/20"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
