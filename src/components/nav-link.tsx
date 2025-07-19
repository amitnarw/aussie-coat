"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasScrolled: boolean;
  className?: string;
}

export default function NavLink({ href, children, hasScrolled, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block px-4 py-2 text-sm font-medium transition-colors",
        hasScrolled
          ? "text-foreground hover:text-primary"
          : "text-white hover:text-white/90",
        className
      )}
    >
      <span className="relative inline-block h-5 overflow-hidden">
        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </Link>
  );
}
