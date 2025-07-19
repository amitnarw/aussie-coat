
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const projects = {
  residential: [
    { src: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80", hint: "modern house exterior" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "cozy living room" },
    { src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", hint: "elegant dining room" },
    { src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "spacious kitchen" },
    { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16da31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80", hint: "serene bedroom" },
    { src: "https://images.unsplash.com/photo-1583845112126-20a96d24d6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", hint: "luxury bathroom" },
  ],
  commercial: [
    { src: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "modern office lobby" },
    { src: "https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "retail store interior" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", hint: "restaurant interior design" },
    { src: "https://images.unsplash.com/photo-1582211539230-a2938cb9958c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "corporate building exterior" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", hint: "cafe interior" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "hotel reception" },
  ],
  industrial: [
    { src: "https://images.unsplash.com/photo-1580983215684-24786d3ade65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "warehouse interior" },
    { src: "https://images.unsplash.com/photo-1621999933938-01d51939169a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "factory floor painting" },
    { src: "https://images.unsplash.com/photo-1562305221-34d616496383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "industrial machinery" },
    { src: "https://images.unsplash.com/photo-1587083437035-23c74258953f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80", hint: "storage facility" },
    { src: "https://images.unsplash.com/photo-1479664797149-3c7d6797a73e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "industrial plant exterior" },
    { src: "https://images.unsplash.com/photo-1616886825748-8178828b43d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", hint: "workshop interior" },
  ]
};

const ProjectGallery = ({ images }: { images: { src: string, hint: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {images.map((image, index) => (
      <AnimatedSection key={index}>
        <Card className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <CardContent className="p-0">
            <Image
              src={image.src}
              alt={`Project gallery image ${index + 1}`}
              width={600}
              height={400}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.hint}
            />
          </CardContent>
        </Card>
      </AnimatedSection>
    ))}
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Collection of project images"
              fill
              className="object-cover z-0"
              data-ai-hint="design mood board"
            />
            <div className="container mx-auto px-4 md:px-6 z-20 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white font-headline">
                Our Showcase
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                A Glimpse into Our World of Color and Craftsmanship.
              </p>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <Tabs defaultValue="residential" className="w-full">
                <div className="flex justify-center mb-8 sm:mb-16">
                    <TabsList className="bg-secondary p-2 h-auto flex-col sm:flex-row">
                        <TabsTrigger value="residential" className="px-6 py-2">Residential</TabsTrigger>
                        <TabsTrigger value="commercial" className="px-6 py-2">Commercial</TabsTrigger>
                        <TabsTrigger value="industrial" className="px-6 py-2">Industrial</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="residential">
                    <ProjectGallery images={projects.residential} />
                </TabsContent>
                <TabsContent value="commercial">
                    <ProjectGallery images={projects.commercial} />
                </TabsContent>
                <TabsContent value="industrial">
                    <ProjectGallery images={projects.industrial} />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
