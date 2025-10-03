import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-headline text-xl text-accent mb-2 block">
              Kama Sutra Nights
            </a>
            <p className="text-sm text-foreground/60">
              Prepare-se para noites intensas e cheias de prazer.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/50 flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Kama Sutra Nights. Todos os direitos reservados.</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-colors">Suporte</a>
          </div>
        </div>
        <p className="text-center text-xs text-foreground/40 mt-6">
          App recomendado para maiores de 18 anos.
        </p>
      </div>
    </footer>
  );
}
