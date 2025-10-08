import { Quote } from 'lucide-react';

export default function KamaSutraArt() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 text-accent mx-auto mb-6" aria-hidden="true" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            A Arte do Kama Sutra
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            O Kama Sutra traz um conjunto de regras sobre a prática do amor, segundo os princípios da filosofia indiana, que eleva o sexo a uma experiência sexual magnífica. Ele envolve todos os cinco sentidos, a mente e a alma, ensinando a desenvolver o erotismo e a sensualidade em cada detalhe, desde as posições, que vão de simples a acrobáticas, até a criação de um ambiente com velas, aromas e músicas, transformando cada encontro em um ritual de prazer.
          </p>
        </div>
      </div>
    </section>
  );
}
