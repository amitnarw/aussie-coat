
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import AnimatedButton from "./animated-button";
import Logo from "./logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
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

  const renderNavLinks = (isMobile: boolean = false) => {
    return navLinks.map((link) => {
      const linkClasses = cn(
        "font-medium transition-colors hover:text-primary",
        isMobile ? "text-lg" : "text-sm",
        hasScrolled || isMobile ? "text-foreground" : "text-white"
      );

      const button = (
        <AnimatedButton href={link.href} variant="link" className={cn(linkClasses, isMobile ? "p-0" : "px-3 py-2")}>
          {link.name}
        </AnimatedButton>
      );

      if (isMobile) {
        return (
          <SheetClose key={link.name} asChild>
            {button}
          </SheetClose>
        );
      }
      
      return React.cloneElement(button, { key: link.name });
    });
  };


  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className={cn("h-8 w-8", hasScrolled ? "text-primary" : "text-white")} />
          <span className={cn("text-2xl font-bold font-headline", hasScrolled ? "text-foreground" : "text-white")}>
            Aussie Coat
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-2">
            {renderNavLinks(false)}
        </nav>
        <div className="flex items-center gap-4">
             <AnimatedButton href="/#contact" variant="primary" size="default" className="hidden sm:inline-flex">
              Contact Us
            </AnimatedButton>
            <ThemeToggle hasScrolled={hasScrolled} />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn("lg:hidden hover:bg-transparent", hasScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-l-border w-[300px] p-0 flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b border-border">
                         <Link href="/" className="flex items-center gap-2">
                            <Logo className="h-7 w-7 text-primary" />
                            <span className="text-xl font-bold font-headline">Aussie Coat</span>
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="hover:text-primary">
                                <X className="h-6 w-6"/>
                            </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col gap-6 p-4 mt-4">
                        {renderNavLinks(true)}
                    </nav>
                     <div className="mt-auto p-4 border-t border-border">
                         <SheetClose asChild>
                            <AnimatedButton href="/#contact" variant="primary" className="w-full">
                              Contact Us
                            </AnimatedButton>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
