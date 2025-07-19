"use client";

import { PaintRoller } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <PaintRoller className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline">Aussie Coat</span>
        </a>
        <nav>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
