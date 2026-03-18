import * as React from "react";

import { cn } from "@/lib/utils";

export function JatoryLogo({
  className,
  markClassName,
  dotClassName,
}: {
  className?: string;
  markClassName?: string;
  dotClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 50"
      className={cn("size-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="شعار جاتوري"
      role="img"
    >
      <path
        d="M10 8 C10 8 10 4 20 4 C30 4 30 12 30 12 L30 26 C30 26 30 32 24 32 L10 32"
        className={cn("stroke-white", markClassName)}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M18 32 L18 42"
        className={cn("stroke-white", markClassName)}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle
        cx="22"
        cy="44"
        r="5"
        className={cn("fill-primary", dotClassName)}
      />
    </svg>
  );
}

