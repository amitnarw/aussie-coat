import Image from "next/image";
import {
  Paintbrush,
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
  ArrowRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Visualizer from "@/components/visualizer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Painting",
    description: "High-quality interior and exterior painting services to make your house feel like a home.",
    imgSrc: "https://placehold.co/600x400",
    hint: "modern living room"
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Commercial Painting",
    description: "Professional painting for offices, retail stores, and other business environments.",
    imgSrc: "https://placehold.co/600x400",
    hint: "office interior"
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Industrial Painting",
    description: "Durable painting solutions for warehouses, factories, and industrial facilities.",
    imgSrc: "https://placehold.co/600x400",
    hint: "factory interior"
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Strata Painting",
    description: "Reliable and efficient painting services for multi-residential properties and body corporates.",
    imgSrc: "https://placehold.co/600x400",
    hint: "apartment building"
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Epoxy Flooring",
    description: "Hard-wearing, seamless flooring for garages, showrooms, and commercial spaces.",
    imgSrc: "https://placehold.co/600x400",
    hint: "epoxy garage floor"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Special Finishes",
    description: "Transform your space with unique, high-end decorative paint finishes.",
    imgSrc: "https://placehold.co/600x400",
    hint: "textured wall"
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", hint: "painted interior" },
  { src: "https://placehold.co/600x400", hint: "house exterior" },
  { src: "https://placehold.co/600x400", hint: "commercial building" },
  { src: "https://placehold.co/600x400", hint: "kitchen cabinets" },
  { src: "https://placehold.co/600x400", hint: "bedroom wall" },
  { src: "https://placehold.co/600x400", hint: "office space" },
];

const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "10+ Years Experience",
      description: "Our decade of experience ensures your project is in capable hands.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Skilled Team",
      description: "Our team of skilled painters are committed to delivering the best results.",
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Customer Satisfaction",
      description: "We work with you to ensure your complete satisfaction with the final result.",
    },
];

const processSteps = [
    { number: "01", title: "Consultation", description: "We start with a detailed consultation to understand your vision, requirements, and provide an initial quote." },
    { number: "02", title: "Planning", description: "We help you choose the perfect colors and materials, and schedule the project at your convenience." },
    { number: "03", title: "Preparation", description: "Our team meticulously prepares surfaces, protecting your furniture and flooring to ensure a clean process." },
    { number: "04", title: "Painting", description: "Using premium paints and expert techniques, our painters transform your space with precision and care." },
    { number: "05", title: "Clean-Up", description: "We ensure the work area is spotless, leaving your property cleaner than we found it." },
    { number: "06", title: "Final Walk-through", description: "We conduct a final inspection with you to guarantee your complete satisfaction with the finished work." },
]


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="hero" className="relative w-full h-[90vh] min-h-[700px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
          <Image
            src="https://placehold.co/1920x1080"
            alt="Modern kitchen being painted"
            fill
            className="object-cover z-0"
            data-ai-hint="painter kitchen"
            priority
          />
           <div className="container mx-auto px-4 md:px-6 z-20">
             <AnimatedSection>
                <div className="max-w-3xl text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white font-headline">
                    Excellence in Every Brushstroke
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
                    Aussie Coat delivers premium painting services with unparalleled quality and craftsmanship for homes and businesses across Australia.
                  </p>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                      <a href="#contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5"/></a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105 backdrop-blur-sm bg-white/10">
                      <a href="#services">Our Services</a>
                    </Button>
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
                      <div className="w-24 h-1.5 bg-primary rounded-full"></div>
                      <p className="text-muted-foreground text-lg">
                        At Aussie Coat, we are defined by a commitment to excellence. For over a decade, we have been transforming spaces with precision, quality materials, and a passion for our craft. We are not just painters; we are creators of atmosphere and curators of quality, ensuring every project reflects our high standards and your unique vision.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="flex flex-col items-start text-left gap-3">
                                {item.icon}
                                <h3 className="text-xl font-semibold font-headline">{item.title}</h3>
                            </div>
                        ))}
                      </div>
                  </div>
                   <div>
                    <Image
                      src="https://placehold.co/600x700"
                      alt="Painter applying paint with a roller"
                      width={600}
                      height={700}
                      className="rounded-lg shadow-2xl object-cover"
                      data-ai-hint="painter working"
                    />
                  </div>
                </div>
              </div>
            </section>
        </AnimatedSection>
        
        <AnimatedSection>
            <section id="services" className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Our Services
                  </h2>
                   <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We offer a comprehensive range of painting services designed to meet the diverse needs of our clients, ensuring quality, durability, and a flawless finish every time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <Card key={service.title} className="bg-card overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
                       <Image src={service.imgSrc} alt={service.title} width={600} height={400} className="w-full object-cover h-56 transition-transform duration-300 group-hover:scale-105" data-ai-hint={service.hint}/>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                         <Button variant="link" className="p-0 mt-4 text-primary h-auto hover:no-underline group/link">Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"/></Button>
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Meticulous Process</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We follow a structured and transparent process to ensure every project is completed to the highest standard, from the initial consultation to the final handover.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step) => (
                  <Card key={step.number} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-baseline gap-4">
                        <span className="text-4xl font-bold text-primary">{step.number}</span>
                        <span className="text-2xl font-semibold font-headline">{step.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
            <section id="visualizer" className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    AI Project Visualizer
                  </h2>
                   <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    Unsure about colors? Describe your room and style, and our AI will generate photorealistic concepts to inspire your project.
                  </p>
                </div>
                <div className="mx-auto max-w-4xl">
                  <Visualizer />
                </div>
              </div>
            </section>
        </AnimatedSection>

        <AnimatedSection>
            <section id="projects" className="w-full py-20 md:py-28 lg:py-32">
              <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Our Recent Projects
                  </h2>
                  <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    Explore a gallery of our recently completed projects.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
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
            <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
              <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Get Your Free Quote Today!
                  </h2>
                  <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    Ready to start your next project? Fill out the form below or give us a call to get a free, no-obligation estimate from our expert team.
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                   <div className="space-y-6">
                     <h3 className="text-2xl font-bold font-headline">Contact Details</h3>
                       <div className="space-y-4 pt-4">
                         <a href="tel:(02)12345678" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                            <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform"/>
                            <span>(02) 1234 5678</span>
                         </a>
                         <a href="mailto:contact@aussiecoat.com.au" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                            <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform"/>
                            <span>contact@aussiecoat.com.au</span>
                         </a>
                      </div>
                  </div>
                  <div>
                    <form className="space-y-4">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" className="bg-background"/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background"/>
                        </div>
                      </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="0412 345 678" className="bg-background"/>
                        </div>
                         <div className="space-y-2">
                          <Label htmlFor="postcode">Postcode</Label>
                          <Input id="postcode" placeholder="2000" className="bg-background"/>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your project..." rows={4} className="bg-background"/>
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow">
                        Send Enquiry
                      </Button>
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
