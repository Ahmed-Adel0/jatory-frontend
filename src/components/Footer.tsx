"use client";

import { useI18n } from "@/lib/i18n";
import { Code, Users, Send } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t("footer.platform"),
      links: ["Satory AI", "Roadmaps", "Learning", "Opportunities"],
    },
    {
      title: t("footer.resources"),
      links: ["Blog", "Docs", "Community", "Support"],
    },
    {
      title: t("footer.company"),
      links: ["About", "Careers", "Privacy", "Terms"],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050505]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #0dcfcf40, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center overflow-hidden rounded-lg bg-black ring-1 ring-white/10">
                <Image src="/logo.png" alt="Jatory" width={36} height={36} className="size-full object-cover" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">Jatory</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <LanguageToggle />
              <a className="grid size-8 place-items-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-[#0dcfcf]/60 hover:text-[#0dcfcf]" href="#" aria-label="Twitter">
                <Send className="size-3.5" />
              </a>
              <a className="grid size-8 place-items-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-[#0dcfcf]/60 hover:text-[#0dcfcf]" href="#" aria-label="LinkedIn">
                <Users className="size-3.5" />
              </a>
              <a className="grid size-8 place-items-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-[#0dcfcf]/60 hover:text-[#0dcfcf]" href="#" aria-label="GitHub">
                <Code className="size-3.5" />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/60 transition-colors hover:text-[#0dcfcf]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© {year} Jatory. {t("footer.rights")}.</span>
          <span className="font-mono tracking-wider opacity-70">v0.1 · COMMAND CENTER</span>
        </div>
      </div>
    </footer>
  );
}
