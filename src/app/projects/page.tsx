import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Projects",
  description:
    "CBR Painters offers top-quality residential and commercial painting services across Australia. Delivering flawless finishes for residential & commercial properties.",
};

const projects = {
  residential: [
    { src: "https://placehold.co/600x400.png", hint: "modern house exterior" },
    { src: "https://placehold.co/600x400.png", hint: "cozy living room" },
    { src: "https://placehold.co/600x400.png", hint: "elegant dining room" },
    { src: "https://placehold.co/600x400.png", hint: "spacious kitchen" },
    { src: "https://placehold.co/600x400.png", hint: "serene bedroom" },
    { src: "https://placehold.co/600x400.png", hint: "luxury bathroom" },
  ],
  commercial: [
    { src: "https://placehold.co/600x400.png", hint: "modern office lobby" },
    { src: "https://placehold.co/600x400.png", hint: "retail store interior" },
    {
      src: "https://placehold.co/600x400.png",
      hint: "restaurant interior design",
    },
    {
      src: "https://placehold.co/600x400.png",
      hint: "corporate building exterior",
    },
    { src: "https://placehold.co/600x400.png", hint: "cafe interior" },
    { src: "https://placehold.co/600x400.png", hint: "hotel reception" },
  ],
  industrial: [
    { src: "https://placehold.co/600x400.png", hint: "warehouse interior" },
    { src: "https://placehold.co/600x400.png", hint: "factory floor painting" },
    { src: "https://placehold.co/600x400.png", hint: "industrial machinery" },
    { src: "https://placehold.co/600x400.png", hint: "storage facility" },
    {
      src: "https://placehold.co/600x400.png",
      hint: "industrial plant exterior",
    },
    { src: "https://placehold.co/600x400.png", hint: "workshop interior" },
  ],
};

const ProjectGallery = ({
  images,
}: {
  images: { src: string; hint: string }[];
}) => (
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
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent z-10" />
            <Image
              src="/leon-rojas-i43gwmENeEo-unsplash.jpg"
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
                <div className="flex justify-center mb-12 md:mb-16">
                  <TabsList className="bg-secondary p-2 h-auto flex-col sm:flex-row">
                    <TabsTrigger value="residential" className="px-6 py-2">
                      Residential
                    </TabsTrigger>
                    <TabsTrigger value="commercial" className="px-6 py-2">
                      Commercial
                    </TabsTrigger>
                    <TabsTrigger value="industrial" className="px-6 py-2">
                      Industrial
                    </TabsTrigger>
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
