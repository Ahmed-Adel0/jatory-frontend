"use client";

import Link, { type LinkProps } from "next/link";
import * as React from "react";

import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
type ButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

export function LinkButton({
  href,
  className,
  variant,
  size,
  ...props
}: LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  { variant?: ButtonVariant; size?: ButtonSize }) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

