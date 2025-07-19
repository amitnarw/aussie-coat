
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
  ArrowRight
} from "lucide-react";

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
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Painting",
    description: "High-quality interior and exterior painting services to make your house feel like a home.",
    imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop",
    hint: "modern living room"
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Commercial Painting",
    description: "Professional painting for offices, retail stores, and other business environments.",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop",
    hint: "office interior"
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Industrial Painting",
    description: "Durable painting solutions for warehouses, factories, and industrial facilities.",
    imgSrc: "https://images.unsplash.com/photo-1580983215684-24786d3ade65?q=80&w=1770&auto=format&fit=crop",
    hint: "factory interior"
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Strata Painting",
    description: "Reliable and efficient painting services for multi-residential properties and body corporates.",
    imgSrc: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1770&auto=format&fit=crop",
    hint: "apartment building"
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Epoxy Flooring",
    description: "Hard-wearing, seamless flooring for garages, showrooms, and commercial spaces.",
    imgSrc: "https://images.unsplash.com/photo-1633519398090-03a08b335832?q=80&w=1770&auto=format&fit=crop",
    hint: "epoxy garage floor"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Special Finishes",
    description: "Transform your space with unique, high-end decorative paint finishes.",
    imgSrc: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1770&auto=format&fit=crop",
    hint: "textured wall"
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1558882224-285d85c4233d?q=80&w=1770&auto=format&fit=crop", hint: "painted interior" },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop", hint: "house exterior" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1770&auto=format&fit=crop", hint: "commercial building" },
  { src: "https://images.unsplash.com/photo-1600585152225-3579fe9d090b?q=80&w=1770&auto=format&fit=crop", hint: "kitchen cabinets" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16da31?q=80&w=1674&auto=format&fit=crop", hint: "bedroom wall" },
  { src: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1770&auto=format&fit=crop", hint: "office space" },
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

const partners = [
    { name: "Partner One", logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1770&auto=format&fit=crop" },
    { name: "Partner Two", logo: "https://images.unsplash.com/photo-1560250056-07ba64695294?q=80&w=1770&auto=format&fit=crop" },
    { name: "Partner Three", logo: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1770&auto=format&fit=crop" },
    { name: "Partner Four", logo: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1770&auto=format&fit=crop" },
    { name: "Partner Five", logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop" },
    { name: "Partner Six", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1770&auto=format&fit=crop" },
]


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="hero" className="relative w-full h-[90vh] min-h-[700px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1621999933938-01d51939169a?q=80&w=1770&auto=format&fit=crop"
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
                    <AnimatedButton href="#contact" variant="primary" size="lg" className="sm:w-auto">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5"/></AnimatedButton>
                    <AnimatedButton href="#services" variant="secondary" size="lg" className="sm:w-auto">Our Services</AnimatedButton>
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
                      src="https://images.unsplash.com/photo-1512412817269-a86f53a79f32?q=80&w=1887&auto=format&fit=crop"
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
            <section id="services" className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                    Our Services
                  </h2>
                   <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                  <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We offer a comprehensive range of painting services designed to meet the diverse needs of our clients, ensuring quality, durability, and a flawless finish every time.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <Card key={service.title} className="bg-card overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                       <Image src={service.imgSrc} alt={service.title} width={600} height={400} className="w-full object-cover h-56 transition-transform duration-300 group-hover:scale-105" data-ai-hint={service.hint}/>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                         <AnimatedButton href="#" variant="link" className="p-0 mt-4 text-primary h-auto group/link">
                           Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"/>
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Meticulous Process</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We follow a structured and transparent process to ensure every project is completed to the highest standard, from the initial consultation to the final handover.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step) => (
                  <Card key={step.number} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col hover:-translate-y-2">
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
            <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
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
                    <div key={index} className="overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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
          <section id="partners" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  Our Trusted Partners
                </h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  We collaborate with industry-leading brands and suppliers to deliver the highest quality materials and finishes for your projects.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {partners.map((partner, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={60}
                      className="object-contain"
                      data-ai-hint="logo"
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
                  <div className="w-24 h-1.5 bg-primary mx-auto mt-4"></div>
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
                       <AnimatedButton type="submit" variant="primary" size="lg" className="w-full">
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
