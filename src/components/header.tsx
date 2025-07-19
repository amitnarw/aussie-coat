"use client";

import React, { useState, useEffect } from "react";
import { PaintRoller, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";

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
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <a href="#hero" className="flex items-center gap-2">
          <PaintRoller className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">
            Aussie Coat
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                    {link.name}
                </a>
            ))}
        </nav>
        <div className="flex items-center gap-2">
             <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact">Get a Free Quote</a>
            </Button>
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden hover:text-primary hover:bg-transparent">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-l-border w-[300px]">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-4 border-b border-border">
                             <a href="#hero" className="flex items-center gap-2">
                                <PaintRoller className="h-7 w-7 text-primary" />
                                <span className="text-xl font-bold">Aussie Coat</span>
                            </a>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="hover:text-primary">
                                    <X className="h-6 w-6"/>
                                </Button>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col gap-6 p-4 mt-4">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.name}>
                                    <a href={link.href} className="text-lg font-medium transition-colors hover:text-primary">
                                        {link.name}
                                    </a>
                                </SheetClose>
                            ))}
                        </nav>
                         <div className="mt-auto p-4">
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href="#contact">Get a Free Quote</a>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
