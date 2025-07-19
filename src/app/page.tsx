"use client";

import Image from "next/image";
import {
  Home,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  Users,
  Smile,
  Palette,
  Hammer,
  Building,
  Factory,
  Layers,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Painting",
    description:
      "High-quality interior and exterior painting services to make your house feel like a home.",
    imgSrc: "/madiba-de-african-inspiration-XrNKe8VLMRo-unsplash.jpg",
    hint: "modern living room",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail stores, and other business environments.",
    imgSrc: "/c-k-ixaG6kcytps-unsplash.jpg",
    hint: "office interior",
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Industrial Painting",
    description:
      "Durable painting solutions for warehouses, factories, and industrial facilities.",
    imgSrc: "/adrian-hernandez-o6FpN9okkWo-unsplash.jpg",
    hint: "factory interior",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Strata Painting",
    description:
      "Reliable and efficient painting services for multi-residential properties and body corporates.",
    imgSrc: "/troy-mortier-K8ceCPDwmf0-unsplash.jpg",
    hint: "apartment building",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Epoxy Flooring",
    description:
      "Hard-wearing, seamless flooring for garages, showrooms, and commercial spaces.",
    imgSrc: "/puranjan-hazarika-Zin47JdznXw-unsplash.jpg",
    hint: "epoxy garage floor",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Special Finishes",
    description:
      "Transform your space with unique, high-end decorative paint finishes.",
    imgSrc: "/gilberto-peralta-bocio-IfK_pZkYBas-unsplash.jpg",
    hint: "textured wall",
  },
];

const galleryImages = [
  { src: "/emmanuel-gido-zTs2M5283D4-unsplash.jpg", hint: "painted interior" },
  { src: "/thomas-stephan-lOb0Lg5FCTU-unsplash.jpg", hint: "house exterior" },
  { src: "/rikokill-g9kg-S9MZDs-unsplash.jpg", hint: "commercial building" },
  {
    src: "/frames-for-your-heart-vbSRUrNm3Ik-unsplash.jpg",
    hint: "kitchen cabinets",
  },
  { src: "/tim-schmidbauer-_tEBCVrEnyo-unsplash.jpg", hint: "bedroom wall" },
  { src: "/ferdinand-asakome-7W6O8y7U30s-unsplash.jpg", hint: "office space" },
];

const whyChooseUs = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "10+ Years Experience",
    description:
      "Our decade of experience ensures your project is in capable hands.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Skilled Team",
    description:
      "Our team of skilled painters are committed to delivering the best results.",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Customer Satisfaction",
    description:
      "We work with you to ensure your complete satisfaction with the final result.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a detailed consultation to understand your vision, requirements, and provide an initial quote.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We help you choose the perfect colors and materials, and schedule the project at your convenience.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "Our team meticulously prepares surfaces, protecting your furniture and flooring to ensure a clean process.",
  },
  {
    number: "04",
    title: "Painting",
    description:
      "Using premium paints and expert techniques, our painters transform your space with precision and care.",
  },
  {
    number: "05",
    title: "Clean-Up",
    description:
      "We ensure the work area is spotless, leaving your property cleaner than we found it.",
  },
  {
    number: "06",
    title: "Final Walk-through",
    description:
      "We conduct a final inspection with you to guarantee your complete satisfaction with the finished work.",
  },
];

const partners = [
  { name: "Partner One", logo: "/partners/Corob-Partner-Logo-300x130-1.png" },
  { name: "Partner Two", logo: "/partners/DUlux_Taradelogo_Partnerpage.png" },
  {
    name: "Partner Three",
    logo: "/partners/podsalliance_Master_C4HAG_Black.png",
  },
  { name: "Partner Four", logo: "/partners/FC-LOGO.png" },
  {
    name: "Partner Five",
    logo: "/partners/PaintersParramatta-Logo-PhotoRoom.png-PhotoRoom.png",
  },
  { name: "Partner Six", logo: "/partners/footer-logo-02.png" },
  { name: "Partner Seven", logo: "/partners/Dulux_Australia_Logo.png" },
  { name: "Partner Eight", logo: "/partners/logo_apmf_600w.1560952916718.png" },
];

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (api) {
      stopAutoplay();
      autoplayInterval.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);
    }
  }, [api]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    startAutoplay();
    return () => stopAutoplay();
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="relative w-full h-[90vh] min-h-screen flex items-center"
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/50 to-black/90 z-10" />
          <Image
            src="/ricky-singh-BdsRtr03Wko-unsplash.jpg"
            alt="Modern kitchen being painted"
            fill
            className="object-cover z-0"
            data-ai-hint="painter kitchen"
            priority
          />
          <div className="container mx-auto px-4 md:px-6 z-20">
            <AnimatedSection>
              <div className="max-w-3xl text-left mt-10">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white font-headline">
                  Excellence in Every Brushstroke
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
                  CBR Painters delivers premium painting services with
                  unparalleled quality and craftsmanship for homes and
                  businesses across Australia.
                </p>
                <div className="mt-20 flex flex-col gap-4 sm:flex-row">
                  <AnimatedButton
                    href="#contact"
                    variant="primary"
                    size="lg"
                    className="sm:w-auto !flex !flex-row"
                  >
                    <div className="flex flex-row items-center gap-5">
                      <span>Get a Free Quote</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </AnimatedButton>
                  <AnimatedButton
                    href="#services"
                    variant="secondary"
                    size="lg"
                    className="sm:w-auto"
                  >
                    Our Services
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection>
          <section id="about" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Trusted Painting Professionals
                  </h2>
                  <div className="w-24 h-1.5 bg-primary"></div>
                  <p className="text-muted-foreground text-lg">
                    At CBR Painters, we are defined by a commitment to
                    excellence. For over a decade, we have been transforming
                    spaces with precision, quality materials, and a passion for
                    our craft. We are not just painters; we are creators of
                    atmosphere and curators of quality, ensuring every project
                    reflects our high standards and your unique vision.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
                    {whyChooseUs.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start text-left gap-3"
                      >
                        {item.icon}
                        <h3 className="text-xl font-semibold font-headline">
                          {item.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Image
                    src="/jon-tyson-bEvHV7DLI1E-unsplash.jpg"
                    alt="Painter applying paint with a roller"
                    width={600}
                    height={700}
                    className="shadow-2xl object-cover"
                    data-ai-hint="painter working"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="services"
            className="w-full py-20 md:py-28 lg:py-32 bg-secondary"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Our Services
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We offer a comprehensive range of painting services designed
                  to meet the diverse needs of our clients, ensuring quality,
                  durability, and a flawless finish every time.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card
                    key={service.title}
                    className="bg-card overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <Image
                      src={service.imgSrc}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full object-cover h-56 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={service.hint}
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-headline">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {service.description}
                      </p>
                      <AnimatedButton
                        href="#"
                        variant="link"
                        className="p-0 mt-4 text-primary h-auto group/link"
                      >
                        <div className="flex flex-row items-center gap-4">
                          Learn More{" "}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </div>
                      </AnimatedButton>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="process" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Our Meticulous Process
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We follow a structured and transparent process to ensure every
                  project is completed to the highest standard, from the initial
                  consultation to the final handover.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step) => (
                  <Card
                    key={step.number}
                    className="bg-card hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    <CardHeader>
                      <CardTitle className="flex flex-row items-start gap-4">
                        <span className="text-4xl font-bold text-primary">
                          {step.number}
                        </span>
                        <span className="text-xl sm:text-2xl font-semibold font-headline break-all">
                          {step.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grow">
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="projects"
            className="w-full py-20 md:py-28 lg:py-32 bg-secondary"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Our Recent Projects
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  Explore a gallery of our recently completed projects.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <Image
                      src={image.src}
                      alt={`Project gallery image ${index + 1}`}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.hint}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="partners"
            className="w-full py-20 md:py-28 lg:py-32 bg-background"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Our Trusted Partners
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We collaborate with industry-leading brands and suppliers to
                  deliver the highest quality materials and finishes for your
                  projects.
                </p>
              </div>

              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
              >
                <CarouselContent className="-ml-0">
                  {partners.map((partner, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <div className="p-1">
                        <div className="flex-shrink-0 w-full h-24 flex items-center justify-center">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={150}
                            height={60}
                            className="object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
                            data-ai-hint="logo"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center items-center gap-4 mt-8">
                  <CarouselPrevious className="static border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black translate-y-0 w-12 h-12 rounded-none" />
                  <CarouselNext className="static border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black translate-y-0 w-12 h-12 rounded-none" />
                </div>
              </Carousel>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="contact"
            className="w-full py-20 md:py-28 lg:py-32 bg-secondary"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Get Your Free Quote Today!
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  Ready to start your next project? Fill out the form below or
                  give us a call to get a free, no-obligation estimate from our
                  expert team.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-headline">
                    Contact Details
                  </h3>
                  <div className="space-y-4 pt-4">
                    <a
                      href="tel:+61 448 411 013"
                      className="flex items-center gap-4 text-md sm:text-lg hover:text-primary transition-colors group"
                    >
                      <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                      <span>+61 448 411 013</span>
                    </a>
                    <a
                      href="mailto:consult.cbrpainters@gmail.com"
                      className="flex items-center gap-4 text-md sm:text-lg hover:text-primary transition-colors group break-all"
                    >
                      <Mail className="min-h-4 min-w-4 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                      <span>consult.cbrpainters@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="bg-background h-auto py-3 "
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0412 345 678"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postcode">Postcode</Label>
                        <Input
                          id="postcode"
                          placeholder="2000"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={4}
                        className="bg-background"
                      />
                    </div>
                    <AnimatedButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Send Enquiry
                    </AnimatedButton>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
