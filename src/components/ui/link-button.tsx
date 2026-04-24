"use client";

import Link, { type LinkProps } from "next/link";
import * as React from "react";

import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

import { type VariantProps } from "class-variance-authority";

export function LinkButton({
  href,
  className,
  variant,
  size,
  ...props
}: LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

