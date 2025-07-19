
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What kind of paint do you use?",
    answer:
      "We exclusively use premium-quality, durable paints from trusted brands like Dulux, Taubmans, and Sherwin-Williams. We select the best product for each specific job, considering factors like surface type, environment, and desired finish to ensure a long-lasting and beautiful result.",
  },
  {
    question: "How long will my painting project take?",
    answer:
      "The project timeline depends on the size and complexity of the job. A standard residential room might take 1-2 days, while a full exterior could take a week or more. We provide a detailed project schedule with our quote so you know exactly what to expect.",
  },
  {
    question: "How do you protect my furniture and floors?",
    answer:
      "Our team takes meticulous care to protect your property. All furniture is moved to the center of the room and covered with clean plastic sheeting. Floors are protected with drop cloths, and we use painter's tape to ensure clean lines around trim, windows, and fixtures.",
  },
  {
    question: "Do I need to be home while you are painting?",
    answer:
      "No, you don't need to be home. Our professional team is fully insured and trustworthy. We can arrange for access at the start of the project and will ensure your property is secure when we leave each day. We provide daily updates to keep you informed of our progress.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Aussie Coat is a fully licensed and insured painting contractor. We carry comprehensive public liability insurance and all our painters are covered by workers' compensation. We are happy to provide certificates of currency upon request.",
  },
  {
    question: "What is your process for preparing the surfaces?",
    answer:
      "Proper preparation is key to a flawless finish. Our process includes cleaning walls to remove dirt and grease, scraping away any flaking paint, sanding rough areas, and filling any holes or cracks. We then apply a primer where necessary to ensure perfect paint adhesion.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Absolutely. We stand by the quality of our craftsmanship and materials. We offer a comprehensive warranty on all our work, which covers any peeling, blistering, or flaking paint resulting from poor workmanship. The warranty period varies by project and will be detailed in your quote.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
            <Image
              src="https://placehold.co/1920x600"
              alt="Painter answering a question"
              fill
              className="object-cover z-0"
              data-ai-hint="customer service"
            />
            <div className="container mx-auto px-4 md:px-6 z-20 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white font-headline">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                Have questions? We have answers. Find the information you need below.
              </p>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-12 sm:px-8 md:px-12 lg:px-24">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
