import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("text-primary", className)}
    {...props}
  >
    <g fill="currentColor">
      {/* Paintbrush handle */}
      <path d="M60,0 L70,0 L70,30 L60,30 Z" />
      {/* Ferrule */}
      <path d="M58,30 L72,30 L72,35 L58,35 Z" />
      {/* 'A' shape as bristles */}
      <path d="M55,35 L75,35 L85,80 L78,80 L70,50 L62,80 L55,80 Z" />
      {/* 'C' shape */}
      <path d="M45,30 C20,30 20,70 45,70 L45,60 C30,60 30,40 45,40 Z" />
    </g>
  </svg>
);

export default Logo;
