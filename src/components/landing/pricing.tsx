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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <Card className="border-border bg-card">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl text-accent">Plano Gratuito</CardTitle>
              <CardDescription>Para começar sua jornada de descobertas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Acesso a algumas posições básicas</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> Tutoriais introdutórios</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-accent border-accent hover:bg-accent hover:text-background">Começar Gratuitamente</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary border-2 shadow-2xl shadow-primary/20 relative bg-card">
             <div className="absolute top-0 right-4 -mt-3">
              <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl text-primary">Plano Premium</CardTitle>
              <CardDescription>A experiência completa e sem limites.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
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
