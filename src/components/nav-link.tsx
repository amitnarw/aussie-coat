"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasScrolled: boolean;
}

export default function NavLink({ href, children, hasScrolled }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block overflow-hidden px-4 py-2 text-sm font-medium transition-colors",
        hasScrolled
          ? "text-foreground hover:text-primary"
          : "text-white hover:text-white/90"
      )}
    >
      <span className="relative inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-1/2 top-full -translate-x-1/2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
    </Link>
  );
}
