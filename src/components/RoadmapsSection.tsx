"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  Beaker,
  Brain,
  Cog,
  HeartPulse,
  Microscope,
  Pill,
  Plus,
  Rocket,
  ShieldCheck,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Category = "stem" | "research" | "entre";

type Domain = {
  id: string;
  category: Category;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  stations: number;
  resources: number;
  verified?: boolean;
};

const domains: Domain[] = [
  { id: "medicine", category: "stem", titleKey: "d.medicine", descKey: "d.medicine.desc", icon: HeartPulse, stations: 18, resources: 240, verified: true },
  { id: "pharmacy", category: "stem", titleKey: "d.pharmacy", descKey: "d.pharmacy.desc", icon: Pill, stations: 14, resources: 180, verified: true },
  { id: "engineering", category: "stem", titleKey: "d.engineering", descKey: "d.engineering.desc", icon: Cog, stations: 16, resources: 210 },
  { id: "cs", category: "stem", titleKey: "d.cs", descKey: "d.cs.desc", icon: Brain, stations: 20, resources: 320 },
  { id: "dentistry", category: "stem", titleKey: "d.dentistry", descKey: "d.dentistry.desc", icon: Smile, stations: 12, resources: 150, verified: true },
  { id: "science", category: "stem", titleKey: "d.science", descKey: "d.science.desc", icon: Atom, stations: 14, resources: 170 },
  { id: "research", category: "research", titleKey: "d.research", descKey: "d.research.desc", icon: Microscope, stations: 10, resources: 120 },
  { id: "entre", category: "entre", titleKey: "d.entre", descKey: "d.entre.desc", icon: Rocket, stations: 12, resources: 140 },
];

const filters: { key: Category | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "roads.filter.all" },
  { key: "stem", labelKey: "roads.filter.stem" },
  { key: "research", labelKey: "roads.filter.research" },
  { key: "entre", labelKey: "roads.filter.entre" },
];

export function RoadmapsSection() {
  const { t, dir } = useI18n();
  const [active, setActive] = useState<Category | "all">("all");
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const visible = useMemo(
    () => (active === "all" ? domains : domains.filter((d) => d.category === active)),
    [active],
  );

  return (
    <section id="roadmaps" className="relative py-24 sm:py-32">
      {/* Backdrop */}
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0dcfcf] backdrop-blur">
            <Sparkles className="size-3" />
            {t("roads.eyebrow")}
          </div>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("roads.title.a")} <span className="text-gradient-neon">{t("roads.title.b")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">{t("roads.desc")}</p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  "rounded-full border px-6 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "border-[#0dcfcf]/60 bg-[#0dcfcf]/10 text-[#0dcfcf] shadow-[0_0_24px_#0dcfcf30]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-[#0dcfcf]/40 hover:text-white",
                )}
              >
                {t(f.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d, i) => (
            <RoadmapCard key={d.id} domain={d} arrow={Arrow} delay={i * 50} />
          ))}

          {/* Custom roadmap card */}
          <div
            className="animate-fade-up group relative overflow-hidden rounded-2xl border border-dashed border-[#0dcfcf]/40 bg-gradient-to-br from-[#0dcfcf]/10 via-white/5 to-transparent p-6 transition-all hover:border-[#0dcfcf]/70"
            style={{ animationDelay: `${visible.length * 50}ms` }}
          >
            <div className="relative flex h-full flex-col">
              <div className="grid size-12 place-items-center rounded-xl border border-[#0dcfcf]/50 bg-black text-[#0dcfcf]">
                <Plus className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{t("roads.custom.title")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{t("roads.custom.desc")}</p>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0dcfcf]">
                  {t("roads.custom.cta")}
                  <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({
  domain,
  arrow: Arrow,
  delay,
}: {
  domain: Domain;
  arrow: typeof ArrowRight;
  delay: number;
}) {
  const { t } = useI18n();
  const Icon = domain.icon;

  return (
    <div
      className="animate-fade-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0dcfcf]/60 hover:shadow-[0_20px_50px_-15px_#0dcfcf30]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at top right, #0dcfcf20, transparent 60%)" }}
      />

      <div className="relative flex flex-col">
        <div className="flex items-start justify-between">
          <div className="grid size-12 place-items-center rounded-xl border border-[#0dcfcf]/30 bg-black text-[#0dcfcf] transition-all group-hover:border-[#0dcfcf]/70 group-hover:shadow-[0_0_24px_#0dcfcf40]">
            <Icon className="size-5" />
          </div>
          {domain.verified && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white/70">
              <ShieldCheck className="size-3 text-[#0dcfcf]" />
              <span>ID</span>
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">{t(domain.titleKey)}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/60">
          {t(domain.descKey)}
        </p>

        {/* meta */}
        <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <Beaker className="size-3 text-[#0dcfcf]/80" />
            {domain.stations} {t("roads.stations")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[#0dcfcf]/60" />
            {domain.resources} {t("roads.resources")}
          </span>
        </div>

        {/* progress placeholder */}
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0dcfcf] to-[#20e3e3]"
            style={{ width: `${Math.min(95, 25 + domain.stations * 3)}%` }}
          />
        </div>

        {domain.verified && (
          <p className="mt-3 text-[11px] text-white/40">{t("roads.verified")}</p>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-sm font-semibold text-white/90 transition-colors group-hover:text-[#0dcfcf]">
            {t("roads.explore")}
          </span>
          <span className="grid size-8 place-items-center rounded-full border border-white/10 text-white/70 transition-all group-hover:border-[#0dcfcf]/70 group-hover:bg-[#0dcfcf]/15 group-hover:text-[#0dcfcf]">
            <Arrow className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
