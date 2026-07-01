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
  { id: "medicine", category: "stem", titleKey: "الطب البشري", descKey: "من السنة الأولى للتخصص، الامتحانات الموحّدة، والممارسة السريرية", icon: HeartPulse, stations: 18, resources: 240, verified: true },
  { id: "engineering", category: "stem", titleKey: "الهندسة", descKey: "تخصصات هندسية متعددة مع مشاريع تطبيقية وشهادات مهنية معتمدة", icon: Cog, stations: 16, resources: 210 },
  { id: "cs", category: "stem", titleKey: "علوم الحاسب", descKey: "برمجة، ذكاء اصطناعي، أمن سيبراني، وعلوم بيانات بمسارات متخصصة", icon: Brain, stations: 20, resources: 320 },
  { id: "pharmacy", category: "stem", titleKey: "الصيدلة", descKey: "العلوم الصيدلانية، الصيدلة السريرية، وصناعة الدواء", icon: Pill, stations: 14, resources: 180, verified: true },
  { id: "science", category: "stem", titleKey: "العلوم الأساسية", descKey: "فيزياء، كيمياء، أحياء، ورياضيات مع مسارات بحثية متخصصة", icon: Atom, stations: 14, resources: 170 },
  { id: "dentistry", category: "stem", titleKey: "طب الأسنان", descKey: "العلوم الأساسية، الإكلينيك، والتخصصات الفرعية المختلفة", icon: Smile, stations: 12, resources: 150, verified: true },
  { id: "research", category: "research", titleKey: "البحث العلمي", descKey: "من فكرة البحث إلى النشر في المجلات المحكّمة الدولية", icon: Microscope, stations: 10, resources: 120 },
];

const filters: { key: Category | "all"; ar: string; en: string }[] = [
  { key: "all",      ar: "الكل",           en: "All" },
  { key: "stem",     ar: "الكليات العلمية", en: "STEM" },
  { key: "research", ar: "البحث العلمي",   en: "Research" },
  { key: "entre",    ar: "ريادة الأعمال",  en: "Entrepreneurship" },
];

export function RoadmapsSection({
  lang = "ar",
  dir = "rtl",
}: {
  lang?: string;
  dir?: string;
} = {}) {
  const [active, setActive] = useState<Category | "all">("all");
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const visible = useMemo(
    () => (active === "all" ? domains : domains.filter((d) => d.category === active)),
    [active],
  );

  return (
    <section id="roadmaps" className="reveal relative py-24 sm:py-32">
      {/* Backdrop */}
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0dcfcf] backdrop-blur">
            <Sparkles className="size-3" />
            {lang === "ar" ? "خرائط الطريق" : "Roadmaps"}
          </div>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {lang === "ar" ? (
              <>اختر مجالك. <span className="text-gradient-neon">ابنِ مسارك.</span></>
            ) : (
              <>Pick your field. <span className="text-gradient-neon">Build your path.</span></>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
            {lang === "ar"
              ? "تغطية شاملة للكليات العلمية، البحث، وريادة الأعمال."
              : "Comprehensive coverage of STEM colleges, research, and entrepreneurship."}
          </p>
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
                {lang === "ar" ? f.ar : f.en}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d, i) => (
            <RoadmapCard key={d.id} domain={d} arrow={Arrow} delay={i * 50} lang={lang} />
          ))}

          {/* Custom roadmap card */}
          <div
            className="animate-fade-up group relative overflow-hidden rounded-2xl border border-dashed border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] p-8 transition-all hover:bg-[rgba(13, 207, 207,0.12)] flex flex-col items-center justify-center text-center cursor-pointer"
            style={{ animationDelay: `${visible.length * 50}ms` }}
          >
            <div className="size-12 rounded-xl border border-[rgba(13, 207, 207,0.25)] bg-black text-[#0dcfcf] grid place-items-center mb-5 group-hover:scale-110 transition-transform">
              <Plus className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === "ar" ? "مسار مخصص" : "Custom Path"}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
              {lang === "ar"
                ? "تحدّث مع Satory AI لبناء خارطة طريق فريدة تناسبك"
                : "Talk to Satory AI to build a unique roadmap for you"}
            </p>
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
  lang = "ar",
}: {
  domain: Domain;
  arrow: typeof ArrowRight;
  delay: number;
  lang?: string;
}) {
  const Icon = domain.icon;

  return (
    <div
      className="animate-fade-up group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111418] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(13, 207, 207,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(13, 207, 207,0.15)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at top right, #0dcfcf20, transparent 60%)" }}
      />

      <div className="relative flex flex-col">
        <div className="flex items-start justify-between">
          <div className="grid size-12 place-items-center rounded-xl border border-[rgba(13, 207, 207,0.25)] bg-black text-[#0dcfcf] transition-all group-hover:border-[rgba(13, 207, 207,0.5)] group-hover:shadow-[0_0_24px_rgba(13, 207, 207,0.3)]">
            <Icon className="size-5" />
          </div>
          {domain.verified && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white/70">
              <ShieldCheck className="size-3 text-[#0dcfcf]" />
              <span>ID</span>
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">{domain.titleKey}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/60">
          {domain.descKey}
        </p>

        {/* meta */}
        <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <Beaker className="size-3 text-[#0dcfcf]/80" />
            {domain.stations} {lang === "ar" ? "محطة" : "stations"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[#0dcfcf]/60" />
            {domain.resources} {lang === "ar" ? "مورد" : "resources"}
          </span>
        </div>

        {/* progress placeholder */}
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0dcfcf] to-[#00b8b8]"
            style={{ width: `${Math.min(95, 25 + domain.stations * 3)}%` }}
          />
        </div>

        {domain.verified && (
          <p className="mt-3 text-[11px] text-white/40">
            {lang === "ar" ? "مسار موثّق رسمياً" : "Officially verified roadmap"}
          </p>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
          <span className="text-[13px] font-bold text-white/90 transition-colors group-hover:text-[#0dcfcf]">
            {lang === "ar" ? "استكشف المسار" : "Explore roadmap"}
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 transition-all group-hover:border-[rgba(13, 207, 207,0.5)] group-hover:bg-[rgba(13, 207, 207,0.1)] group-hover:text-[#0dcfcf]">
            <Arrow className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
