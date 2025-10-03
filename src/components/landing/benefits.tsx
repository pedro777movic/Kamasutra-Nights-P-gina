import { CheckCircle2 } from 'lucide-react';

const benefitsList = [
  'Aumente o desejo no relacionamento.',
  'Descubra segredos para noites inesquecíveis.',
  'Surpreenda seu parceiro a cada encontro.',
  'Explore seu corpo e seu prazer como nunca antes.',
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12">
            Mais Prazer, Mais Conexão, Mais Você
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left text-lg">
            {benefitsList.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
