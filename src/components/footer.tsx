import { PaintRoller } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
    return (
      <footer className="w-full bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div className="space-y-4">
                     <a href="#" className="flex items-center gap-2">
                        <PaintRoller className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold font-headline text-white">Aussie Coat</span>
                    </a>
                    <p className="text-sm">
                        Your trusted partner for high-quality residential and commercial painting services across Australia.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#services" className="hover:text-primary transition-colors">Residential Painting</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Commercial Painting</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Roof Painting</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Epoxy Flooring</a></li>
                    </ul>
                </div>

                {/* Get a Quote */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Get Started</h3>
                    <p className="text-sm mb-4">Ready for a fresh new look? Get in touch for a free, no-obligation quote.</p>
                     <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <a href="#contact">Request a Quote</a>
                    </Button>
                </div>

            </div>
             <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Aussie Coat. All Rights Reserved. | Designed by Firebase Studio</p>
            </div>
        </div>
      </footer>
    );
  }
  