
"use client";

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "border border-input text-foreground bg-background hover:bg-accent hover:text-accent-foreground",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        link: "text-primary hover:no-underline",
        "link-light": "text-gray-300 hover:text-white hover:no-underline",
        nav: "hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
}

export default function AnimatedButton({ href, children, variant, size, className, ...props }: AnimatedButtonProps) {

  const Comp = href ? Link : 'button';

  const commonContent = (
    <span className="relative flex h-full w-full items-center justify-center">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[150%]">
        {children}
      </span>
      <span className="absolute block translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );

  return (
    <Comp href={href!} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {commonContent}
    </Comp>
  );
}
