"use client";

import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle } = useI18n();
  return (
    <button
      onClick={toggle}
      className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition-all hover:border-[#0dcfcf]/60 hover:text-[#0dcfcf]"
      aria-label="Toggle language"
    >
      <Languages className="size-3.5 opacity-70 group-hover:opacity-100" />
      <span className="font-mono tracking-wider">{lang === "ar" ? "EN" : "AR"}</span>
    </button>
  );
}

