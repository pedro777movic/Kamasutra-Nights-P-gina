import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Acesso Imediato ao Prazer
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Baixe o app e tenha acesso imediato às 100 posições mais excitantes do Kamasutra.
          </p>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto">
          <Card className="border-primary border-2 shadow-2xl shadow-primary/20 relative bg-card max-w-md">
             <div className="absolute top-0 right-4 -mt-3">
              <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</div>
            </div>
            <CardHeader className="pb-4 text-center">
              <CardTitle className="font-headline text-2xl text-primary">Plano Premium</CardTitle>
              <CardDescription>A experiência completa e sem limites.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold">R$ 47,00</span>
                <span className="text-foreground/70"> / pagamento único</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Desbloqueie todas as 100 posições</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Dicas quentes de sedução</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Conteúdo exclusivo e atualizações</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Experiência sem anúncios</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Quero Acessar Agora</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
