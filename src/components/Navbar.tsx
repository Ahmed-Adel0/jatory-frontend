"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAuthModal } from "@/features/auth/auth-modal";
import { useRouter } from "next/navigation";

import { brandAssets } from "./brand/brand-assets";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const authModal = useAuthModal();
  const router = useRouter();

  const openLogin = () => router.push("/home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "المميزات", href: "#features" },
    { key: "المسارات", href: "#roadmaps" },
    { key: "Satory AI", href: "#satory" },
    { key: "الأرقام", href: "#numbers" },
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative size-10 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={brandAssets.icon}
              alt="Jatory"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-heading">
            Jatory
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.key}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <button
            onClick={openLogin}
            className="hidden rounded-md px-3 py-1.5 text-[13px] font-medium text-white/60 transition-colors hover:text-white md:inline-flex"
            type="button"
          >
            {t("nav.signin")}
          </button>
          <button
            onClick={openLogin}
            className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-2 text-[13px] font-bold text-primary-foreground shadow-[0_0_24px_rgba(13,207,207,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_36px_rgba(13,207,207,0.5)] transform hover:-translate-y-0.5 sm:inline-flex"
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span className="relative z-10">{t("nav.cta")}</span>
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
              <button
                onClick={openLogin}
                type="button"
                className="rounded-md bg-[#0dcfcf] px-4 py-2 text-sm font-semibold text-black"
              >
                {t("nav.cta")}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
