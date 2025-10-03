import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsList = [
  {
    question: "O app é discreto?",
    answer: "Sim, total discrição. O ícone e o nome do aplicativo são discretos para garantir sua privacidade."
  },
  {
    question: "É para casadas ou solteiras?",
    answer: "É para todas as mulheres que querem explorar seu prazer, independentemente do estado civil. A jornada é sua!"
  },
  {
    question: "O conteúdo é explícito?",
    answer: "O app contém ilustrações elegantes e educativas, focadas na excitação e na prática segura e prazerosa, sem vulgaridade."
  },
  {
    question: "É para maiores de 18 anos?",
    answer: "Sim, o conteúdo é destinado a um público adulto. Recomendamos o uso por maiores de 18 anos."
  }
];

export default function Faq() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Dúvidas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqsList.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-accent/20">
              <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
