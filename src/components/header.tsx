"use client";

import React, { useState, useEffect } from "react";
import { PaintRoller } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 md:px-6">
        <a href="#hero" className="flex items-center gap-2">
          <PaintRoller className={cn("h-8 w-8 text-primary transition-colors", { "text-primary": hasScrolled, "text-white": !hasScrolled })} />
          <span className={cn("text-2xl font-bold font-headline transition-colors", { "text-gray-900": hasScrolled, "text-white": !hasScrolled })}>
            Aussie Coat
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-primary", { "text-gray-700": hasScrolled, "text-white": !hasScrolled })}>
                    {link.name}
                </a>
            ))}
        </nav>
        <div className="flex items-center gap-4">
             <Button asChild className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">Get a Free Quote</a>
            </Button>
            {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
}
