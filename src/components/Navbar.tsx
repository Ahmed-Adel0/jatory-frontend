"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "nav.home", href: "/" },
    { key: "nav.roadmaps", href: "#roadmaps" },
    { key: "nav.satory", href: "#" },
    { key: "nav.opportunities", href: "#" },
    { key: "nav.community", href: "#" },
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-lg bg-black ring-1 ring-white/10 transition-all group-hover:ring-[#0dcfcf]/60">
            <Image src="/logo.png" alt="Jatory" width={36} height={36} className="size-full object-cover" />
            <span className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_0_12px_#0dcfcf40] opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Jatory
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <button className="hidden rounded-md px-3 py-1.5 text-sm text-white/80 transition-colors hover:text-white md:inline-flex">
            {t("nav.signin")}
          </button>
          <button className="group relative hidden overflow-hidden rounded-md bg-[#0dcfcf] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_24px_#0dcfcf50] transition-all hover:shadow-[0_0_36px_#0dcfcf70] sm:inline-flex">
            <span className="relative z-10">{t("nav.cta")}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
          <button
            className="grid size-9 place-items-center rounded-md border border-white/10 text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
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
                className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
              <LanguageToggle />
              <button className="rounded-md bg-[#0dcfcf] px-4 py-2 text-sm font-semibold text-black">
                {t("nav.cta")}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
