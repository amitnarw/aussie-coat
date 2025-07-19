import { PaintRoller } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-slate-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
                     <a href="#" className="flex items-center gap-2">
                        <PaintRoller className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold text-white font-headline">Aussie Coat</span>
                    </a>
                    <p className="text-sm text-muted-foreground">
                       Delivering premium painting services with unparalleled quality and craftsmanship.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                        <li><Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Our Services */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Residential</a></li>
                        <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Commercial</a></li>
                        <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Industrial</a></li>
                        <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Epoxy Flooring</a></li>
                    </ul>
                </div>

                {/* Get a Quote */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Contact Us</h3>
                     <ul className="space-y-2 text-sm">
                        <li className="text-muted-foreground">Phone: (02) 1234 5678</li>
                        <li className="text-muted-foreground">Email: contact@aussiecoat.com.au</li>
                     </ul>
                </div>

            </div>
             <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Aussie Coat. All Rights Reserved. | Designed by Firebase Studio</p>
            </div>
        </div>
      </footer>
    );
  }
  