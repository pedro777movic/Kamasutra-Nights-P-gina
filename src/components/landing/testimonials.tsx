"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import placeholderData from '@/lib/placeholder-images.json';

const testimonialsList = [
  {
    quote: "Minha relação nunca mais foi a mesma... A chama reacendeu de um jeito que eu não imaginava ser possível.",
    name: "Juliana R.",
    avatarId: "testimonial-avatar-1"
  },
  {
    quote: "Surpreendi meu parceiro e reacendemos o fogo. Cada noite é uma nova aventura cheia de paixão.",
    name: "Carla S.",
    avatarId: "testimonial-avatar-2"
  },
  {
    quote: "Nunca me senti tão confiante e sexy. Descobri um novo lado de mim mesma e do meu prazer.",
    name: "Mariana F.",
    avatarId: "testimonial-avatar-3"
  }
];

const avatarImages = placeholderData.placeholderImages.filter(p => p.id.startsWith('testimonial-avatar'));

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Elas experimentaram e se apaixonaram
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonialsList.map((testimonial, index) => {
              const avatar = avatarImages.find(img => img.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="bg-background/30 border-accent/20 h-full flex flex-col justify-between">
                      <CardHeader>
                        <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                      </CardHeader>
                      <CardFooter className="flex items-center gap-4">
                        {avatar && (
                           <Image
                            src={avatar.imageUrl}
                            alt={avatar.description}
                            width={40}
                            height={40}
                            className="rounded-full"
                            data-ai-hint={avatar.imageHint}
                          />
                        )}
                        <span className="font-bold text-accent">{testimonial.name}</span>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-foreground bg-background/50 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
