import Image from "next/image";
import {
  Paintbrush,
  Home,
  Building2,
  Quote,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Visualizer from "@/components/visualizer";
import Header from "@/components/header";
import Footer from "@/components/footer";

const services = [
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "Residential Painting",
    description:
      "Expert interior and exterior painting services for your home. We treat every house with care and precision.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, and commercial buildings to enhance your business image.",
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Specialty Finishes",
    description:
      "From decorative finishes to protective coatings, we provide specialized solutions for unique requirements.",
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", hint: "painted room" },
  { src: "https://placehold.co/600x400", hint: "modern interior" },
  { src: "https://placehold.co/600x400", hint: "exterior house" },
  { src: "https://placehold.co/600x400", hint: "office space" },
  { src: "https://placehold.co/600x400", hint: "feature wall" },
  { src: "https://placehold.co/600x400", hint: "kitchen cabinets" },
];

const testimonials = [
  {
    quote:
      "Aussie Coat transformed our home! The team was professional, punctual, and the quality of their work is outstanding. Highly recommended!",
    name: "The Smiths",
    location: "Sydney, NSW",
  },
  {
    quote:
      "The new paint job on our office building is fantastic. It was a big project, and Aussie Coat handled it with exceptional skill and efficiency.",
    name: "J. Anderson, CEO",
    location: "Melbourne, VIC",
  },
  {
    quote:
      "I was impressed by their attention to detail. They took the time to do things right, and the result is a flawless finish that we love.",
    name: "Emily R.",
    location: "Brisbane, QLD",
  },
];

const serviceAreas = [
  "Sydney & Greater Sydney",
  "Melbourne Metropolitan",
  "Brisbane & Gold Coast",
  "Perth Metropolitan",
  "Adelaide City",
  "Canberra ACT",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="w-full py-20 md:py-32 lg:py-40 bg-card"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                  Quality Painting Services Across Australia
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                  Professional, reliable, and high-quality painting solutions
                  for residential and commercial properties.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#contact">Get a Free Quote</a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                     <a href="#services">Our Services</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of painting services to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {services.map((service) => (
                <Card key={service.title} className="text-center">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="visualizer" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Get Inspired: Visualize Your Project
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Describe your room and our AI will generate inspirational images to help you choose the perfect look.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <Visualizer />
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Our Recent Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A glimpse into the quality and variety of our completed projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={`Project gallery image ${index + 1}`}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.hint}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We pride ourselves on customer satisfaction. Here’s what some of our clients have to say.
                </p>
              </div>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-4xl mx-auto mt-12"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <Card className="h-full flex flex-col">
                        <CardHeader className="items-center">
                          <Quote className="h-8 w-8 text-primary" />
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-center">
                            "{testimonial.quote}"
                          </p>
                        </CardContent>
                        <CardDescription className="text-center p-4 border-t">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm">{testimonial.location}</p>
                        </CardDescription>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="flex flex-col justify-center lg:col-span-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Request a Free Quote
                  </h2>
                  <p className="text-muted-foreground">
                    Ready to start your next painting project? Fill out the form, and we'll get back to you shortly.
                  </p>
                  <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold font-headline">Our Service Areas</h3>
                    <ul className="space-y-2">
                       {serviceAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                     <div className="flex items-center gap-2 pt-4">
                        <Phone className="h-5 w-5 text-primary"/>
                        <span>(02) 1234 5678</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary"/>
                        <span>contact@aussiecoat.com.au</span>
                     </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>
                      Please provide as much detail as possible for an accurate quote.
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
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="0412 345 678" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service-type">Service Type</Label>
                          <Select>
                            <SelectTrigger id="service-type">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="residential">Residential Painting</SelectItem>
                              <SelectItem value="commercial">Commercial Painting</SelectItem>
                              <SelectItem value="specialty">Specialty Finishes</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Submit Request
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
