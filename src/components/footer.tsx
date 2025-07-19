import Link from "next/link";
import Logo from "./logo";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode; }) => (
    <li>
        <Link href={href} className="text-gray-300 transition-colors hover:text-white">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
        {children}
    </a>
)

export default function Footer() {
    
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/projects" },
    ];

    const serviceLinks = [
        { name: "Residential", href: "/#services" },
        { name: "Commercial", href: "/#services" },
        { name: "Industrial", href: "/#services" },
        { name: "Strata", href: "/#services" },
        { name: "Epoxy Flooring", href: "/#services" },
        { name: "Special Finishes", href: "/#services" },
    ]

    return (
      <footer className="w-full bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-4 space-y-6">
                     <Link href="/" className="flex items-center gap-2 text-white">
                        <Logo className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold font-headline">Aussie Coat</span>
                    </Link>
                    <p className="text-sm text-gray-400 max-w-sm">
                       Delivering premium painting services with unparalleled quality and craftsmanship for homes and businesses.
                    </p>
                    <div className="flex items-center gap-5 pt-2">
                       <SocialIcon href="#"><Facebook className="h-5 w-5" /></SocialIcon>
                       <SocialIcon href="#"><Twitter className="h-5 w-5" /></SocialIcon>
                       <SocialIcon href="#"><Instagram className="h-5 w-5" /></SocialIcon>
                       <SocialIcon href="#"><Linkedin className="h-5 w-5" /></SocialIcon>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Navigation</h3>
                    <ul className="space-y-3">
                       {navLinks.map((link) => (
                         <FooterLink key={link.name} href={link.href}>
                             {link.name}
                         </FooterLink>
                       ))}
                    </ul>
                </div>

                 <div className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Services</h3>
                    <ul className="space-y-3">
                        {serviceLinks.map((link) => (
                           <FooterLink key={link.name} href={link.href}>
                               {link.name}
                           </FooterLink>
                        ))}
                    </ul>
                </div>
                
                 <div className="lg:col-span-3 space-y-6">
                    <h3 className="text-lg font-semibold text-white font-headline">Ready for a new coat?</h3>
                     <p className="text-sm text-gray-400">
                        Get a free, no-obligation estimate from our expert team today.
                    </p>
                     <Button asChild>
                        <Link href="/#contact">Get a Free Quote</Link>
                     </Button>
                </div>

            </div>
        </div>
        <div className="bg-gray-950">
             <div className="container mx-auto px-4 md:px-6 py-6 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Aussie Coat. All Rights Reserved. | Designed by Firebase Studio</p>
            </div>
        </div>
      </footer>
    );
  }
