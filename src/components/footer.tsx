import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ href, children, 'aria-label': ariaLabel }: { href: string; children: React.ReactNode; 'aria-label': string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gray-300" aria-label={ariaLabel}>
        {children}
    </a>
)

export default function Footer() {
    
    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/projects" },
        { name: "Partners", href: "/#partners" },
        { name: "About", href: "/about" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
      <footer className="w-full bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center text-center">
            
            <div className="mb-8">
                <Link href="/" className="text-5xl md:text-6xl font-semibold tracking-tighter uppercase">
                    Aussie Coat
                </Link>
            </div>

            <nav className="flex items-center justify-center flex-wrap gap-x-4 md:gap-x-6 mb-8">
                {navLinks.map((link, index) => (
                    <React.Fragment key={link.name}>
                        <Link href={link.href} className="text-sm uppercase tracking-wider transition-colors hover:text-gray-300">
                           {link.name}
                        </Link>
                        {index < navLinks.length - 1 && <div className="h-4 w-px bg-white/50"></div>}
                    </React.Fragment>
                ))}
            </nav>

            <div className="text-sm text-center text-gray-300 mb-8">
                <p>ABN 14 165 047 496</p>
                <p>U3 / 62 Dacre Street, Mitchell ACT 2911</p>
            </div>
            
            <div className="flex items-center gap-6">
               <SocialIcon href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></SocialIcon>
               <SocialIcon href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></SocialIcon>
               <SocialIcon href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></SocialIcon>
            </div>

        </div>
        <div className="w-full border-t border-white/20">
             <div className="container mx-auto px-4 md:px-6 py-6 text-center text-xs text-gray-400">
                <p>© {new Date().getFullYear()} Aussie Coat. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    );
  }
