import Image from "next/image";
import { Award, Users, Smile, Building, Target, Eye } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & Lead Painter",
    imgSrc: "https://placehold.co/400x400",
    hint: "male portrait"
  },
  {
    name: "Jane Doe",
    role: "Project Manager",
    imgSrc: "https://placehold.co/400x400",
    hint: "female portrait"
  },
  {
    name: "Peter Jones",
    role: "Senior Painter",
    imgSrc: "https://placehold.co/400x400",
    hint: "man portrait"
  },
    {
    name: "Emily White",
    role: "Customer Relations",
    imgSrc: "https://placehold.co/400x400",
    hint: "woman portrait"
  },
];

const values = [
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: "Quality",
        description: "We use only the highest quality paints and materials to ensure a durable and beautiful finish that lasts."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Integrity",
        description: "We believe in honest, transparent communication and pricing. No hidden fees, no surprises."
    },
    {
        icon: <Smile className="h-10 w-10 text-primary" />,
        title: "Satisfaction",
        description: "Your complete satisfaction is our ultimate goal. We're not happy until you are delighted with your new space."
    }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                 <Image
                    src="https://placehold.co/1920x600"
                    alt="Team of painters working together"
                    fill
                    className="object-cover z-0"
                    data-ai-hint="team collaboration"
                />
                <div className="container mx-auto px-4 md:px-6 z-20 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white font-headline">
                        About Aussie Coat
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                        Painting with Passion, Precision, and Professionalism.
                    </p>
                </div>
            </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Image
                    src="https://placehold.co/600x700"
                    alt="Aussie Coat founder"
                    width={600}
                    height={700}
                    className="rounded-lg shadow-2xl object-cover"
                    data-ai-hint="professional painter"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Story</h2>
                  <div className="w-24 h-1.5 bg-primary rounded-sm"></div>
                  <p className="text-muted-foreground text-lg">
                    Founded in 2010, Aussie Coat started as a small team of passionate painters with a shared vision: to deliver exceptional painting services that transform spaces and exceed client expectations. Over the years, we've grown into one of Australia's most trusted painting companies, but our core values of quality, integrity, and customer satisfaction remain unchanged.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We believe that a fresh coat of paint can do more than just change a color; it can rejuvenate a home, energize a workspace, and protect a valuable asset. Our commitment to meticulous preparation, flawless application, and using the best materials ensures a stunning and long-lasting result for every project, big or small.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
            <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Mission & Vision</h2>
                        <div className="w-24 h-1.5 bg-primary rounded-sm"></div>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <Target className="h-12 w-12 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold font-headline">Our Mission</h3>
                                    <p className="text-muted-foreground mt-2">To provide outstanding painting services through superior craftsmanship, attention to detail, and unparalleled customer service, creating beautiful and lasting finishes that enhance our clients' properties.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Eye className="h-12 w-12 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold font-headline">Our Vision</h3>
                                    <p className="text-muted-foreground mt-2">To be Australia's leading painting contractor, renowned for our commitment to quality, innovation, and sustainability, while fostering a culture of respect and growth for our team and community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/600x500"
                            alt="Painter looking over a city"
                            width={600}
                            height={500}
                            className="rounded-lg shadow-2xl object-cover"
                            data-ai-hint="vision city view"
                        />
                    </div>
                </div>
              </div>
            </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="w-full py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Values</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-sm"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  The principles that guide every brushstroke and decision we make.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-card text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="items-center">
                      {value.icon}
                      <CardTitle className="mt-4">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Meet Our Team</h2>
                <div className="w-24 h-1.5 bg-primary mx-auto mt-4 rounded-sm"></div>
                <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  The dedicated professionals behind our success.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="bg-card overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={member.hint}
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                      <p className="mt-1 text-primary">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
