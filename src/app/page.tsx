import Image from "next/image";
import {
  Paintbrush,
  Home,
  Building2,
  CheckCircle2,
  Star,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Brush,
  Palette,
  Hammer,
  Building,
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

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Painting",
    description: "Expert interior and exterior services to bring new life to your home.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Commercial Painting",
    description: "Professional solutions for offices, retail spaces, and commercial properties.",
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Roof Painting",
    description: "Protect and enhance your roof with our durable, high-quality paint coatings.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Strata Painting",
    description: "Reliable and efficient painting services for multi-residential properties.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Epoxy Flooring",
    description: "Hard-wearing and seamless flooring solutions perfect for garages and commercial areas.",
  },
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Plastering & Repairs",
    description: "Perfecting your walls and ceilings before we even start painting.",
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", hint: "living room" },
  { src: "https://placehold.co/600x400", hint: "house exterior" },
  { src: "https://placehold.co/600x400", hint: "modern office" },
  { src: "https://placehold.co/600x400", hint: "painted kitchen" },
  { src: "https://placehold.co/600x400", hint: "bedroom interior" },
  { src: "https://placehold.co/600x400", hint: "retail space" },
];

const whyChooseUs = [
  {
    title: "Expertise & Experience",
    description: "With over 15 years in the industry, our skilled team delivers exceptional results on every project, no matter the size or complexity.",
  },
  {
    title: "Quality Materials",
    description: "We use only premium, eco-friendly paints and materials from trusted brands to ensure a durable and long-lasting finish.",
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We work closely with you to understand your vision and ensure we exceed your expectations.",
  },
];


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="hero" className="relative w-full h-[80vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://placehold.co/1920x1080"
            alt="Modern house exterior"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="modern house exterior"
          />
          <div className="container mx-auto px-4 md:px-6 z-20 text-white text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Australia's Choice for Premier Painting Services
              </h1>
              <p className="mt-4 max-w-[700px] text-lg md:text-xl text-gray-200">
                Delivering Flawless Finishes for Residential & Commercial Properties
              </p>
              <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#services">Our Services</a>
                </Button>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="#contact">Request a Quote</a>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 text-center max-w-2xl w-full">
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <span className="font-semibold">15+ Years of Experience</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="h-8 w-8 text-accent" />
                  <span className="font-semibold">5-Star Rated</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <span className="font-semibold">Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Our Comprehensive Painting Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Tailored solutions for every surface and space.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://placehold.co/600x700"
                  alt="Painters at work"
                  width={600}
                  height={700}
                  className="rounded-lg shadow-2xl object-cover"
                  data-ai-hint="painters working"
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-primary font-semibold tracking-wide">WHY CHOOSE US</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                    Committed to Excellence and Quality Craftsmanship
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    At Aussie Coat, we believe in doing things right. Our commitment to quality materials, expert workmanship, and customer satisfaction sets us apart.
                  </p>
                </div>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Paintbrush className="h-7 w-7 text-accent"/>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-1 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="#contact">Get Your Free Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="visualizer" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Visualize Your Project
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Can't decide on a color? Describe your space and let our AI generate inspirational concepts to help you envision the final result.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Visualizer />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Our Recent Projects
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                A showcase of our commitment to quality and attention to detail.
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

        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               <div className="space-y-6">
                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                   Get a Free, No-Obligation Quote
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Ready to transform your space? Contact us today for a detailed estimate. Our team is here to answer your questions and help you get started on your painting project.
                  </p>
                   <div className="space-y-4 pt-4">
                     <a href="tel:(02)12345678" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                        <Phone className="h-6 w-6 text-primary"/>
                        <span>(02) 1234 5678</span>
                     </a>
                     <a href="mailto:contact@aussiecoat.com.au" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                        <Mail className="h-6 w-6 text-primary"/>
                        <span>contact@aussiecoat.com.au</span>
                     </a>
                      <div className="flex items-center gap-4 text-lg">
                        <MapPin className="h-6 w-6 text-primary"/>
                        <span>Servicing Sydney, Melbourne, Brisbane & across Australia</span>
                     </div>
                  </div>
              </div>
              <div>
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Form</CardTitle>
                    <CardDescription>
                      Fill out the form and we'll get back to you shortly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                      </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="0412 345 678" />
                        </div>
                         <div className="space-y-2">
                          <Label htmlFor="postcode">Postcode</Label>
                          <Input id="postcode" placeholder="2000" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your project..." rows={4} />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Send Enquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
