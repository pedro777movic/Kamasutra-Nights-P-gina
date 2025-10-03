"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import React from 'react';

const carouselItems = [
    {
        id: "how-it-works-1",
        description: "Explore todas as categorias de posições com apenas um toque.",
    },
    {
        id: "how-it-works-2",
        description: "Descubra as 100 posições com ilustrações artísticas e elegantes.",
    },
    {
        id: "how-it-works-3",
        description: "Passo a passo visual para você colocar em prática com confiança.",
    },
];

export default function HowItWorks() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    
    React.useEffect(() => {
        if (!api) {
            return
        }
    
        setCurrent(api.selectedScrollSnap())
    
        const onSelect = (api: CarouselApi) => {
            setCurrent(api.selectedScrollSnap())
        }
        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api])

    const scrollTo = React.useCallback(
        (index: number) => {
          api?.scrollTo(index)
        },
        [api]
      )

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Veja Como Funciona na Prática
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Um app 100% visual para você aprender com clareza e facilidade.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {carouselItems.map((item) => {
                 const image = placeholderData.placeholderImages.find(p => p.id === item.id);
                 if (!image) return null;
                return (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 flex flex-col items-center text-center">
                            <Card className="overflow-hidden border-2 border-primary/20 w-full">
                                <CardContent className="flex aspect-[9/18] items-center justify-center p-0">
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
                            <p className="mt-4 text-foreground/80 text-sm max-w-[250px]">{item.description}</p>
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
        <div className="flex justify-center gap-2 mt-8">
            {carouselItems.map((_, index) => (
                <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                    current === index ? 'bg-primary' : 'bg-foreground/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="#pricing">Quero Experimentar Agora</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
