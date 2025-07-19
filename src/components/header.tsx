"use client";

import React, { useState, useEffect } from "react";
import { PaintRoller, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
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

  const renderNavLinks = (isMobile: boolean = false) => navLinks.map((link) => {
    if (isMobile) {
      return (
        <SheetClose key={link.name} asChild>
          <Link href={link.href} className={cn(
              "font-medium transition-colors hover:text-primary", 
              "text-lg",
              "text-foreground"
          )}>
              {link.name}
          </Link>
        </SheetClose>
      )
    }

    return (
       <Link key={link.name} href={link.href} className={cn(
            "font-medium transition-colors hover:text-primary", 
            "text-sm",
            hasScrolled ? "text-foreground" : "text-white"
        )}>
            {link.name}
        </Link>
    )
  });


  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <PaintRoller className="h-8 w-8 text-primary" />
          <span className={cn("text-2xl font-bold font-headline", hasScrolled ? "text-foreground" : "text-white")}>
            Aussie Coat
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
            {renderNavLinks()}
        </nav>
        <div className="flex items-center gap-2">
             <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Get a Free Quote</Link>
            </Button>
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn("lg:hidden hover:text-primary hover:bg-transparent", hasScrolled ? "text-foreground" : "text-white")}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-l-border w-[300px] p-0 flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b border-border">
                         <Link href="/" className="flex items-center gap-2">
                            <PaintRoller className="h-7 w-7 text-primary" />
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
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/#contact">Get a Free Quote</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
