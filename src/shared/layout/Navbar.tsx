"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { brandAssets } from "@/shared/components/brand/brand-assets";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "About Us",      href: "#about" },
    { key: "What We Offer", href: "#offer" },
    { key: "Why Jatory",    href: "#why" },
    { key: "Our Team",      href: "#team" },
    { key: "Join Us",       href: "#join" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative size-12 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={brandAssets.icon}
              alt="Jatory"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-heading">
            Jatory
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="rounded-md px-4 py-2 text-[15px] font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.key}
            </Link>
          ))}
        </nav>

        {/* Right cluster - Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="grid size-10 place-items-center rounded-md border border-white/10 text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base text-white/80 hover:bg-white/5"
              >
                {l.key}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
