"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import placeholderData from '@/lib/placeholder-images.json';

const galleryImages = placeholderData.placeholderImages.filter(p => p.id.startsWith('gallery-mockup'));

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Uma espiada no paraíso
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Veja como o app vai transformar sua intimidade.
          </p>
           <p className="mt-2 text-sm text-accent">
            Ilustrações educativas e elegantes.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-2 border-primary/20 w-[280px] sm:w-full mx-auto">
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={800}
                        className="object-cover w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground flex left-4" />
          <CarouselNext className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground flex right-4" />
        </Carousel>
      </div>
    </section>
  );
}
