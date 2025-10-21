import { BookOpen, Sparkles, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const featuresList = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: '100 Posições Ilustradas',
    description: 'As 100 posições do Kamasutra, ilustradas de forma excitante e prática.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: 'Tutoriais Fáceis',
    description: 'Tutoriais fáceis e explicativos para colocar em prática imediatamente e sem complicações.',
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: 'Dicas Extras',
    description: 'Dicas extras para aumentar o desejo e a intensidade de cada momento.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Conteúdo Exclusivo',
    description: 'Conteúdo exclusivo e atualizações constantes para mulheres ousadas como você.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            O que você vai encontrar
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Um universo de prazer e descobertas na palma da sua mão.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-background/30 p-6 rounded-lg border border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="font-headline text-xl text-accent mt-4 mb-2">{feature.title}</h3>
                <p className="text-foreground/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
