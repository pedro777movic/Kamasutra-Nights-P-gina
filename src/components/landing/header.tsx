import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-headline text-lg sm:text-xl text-accent">
          Kama Sutra Nights
        </a>
        <Button asChild size="sm" className="text-xs sm:text-sm">
          <a href="#pricing">Quero Sentir Agora</a>
        </Button>
      </div>
    </header>
  );
}
