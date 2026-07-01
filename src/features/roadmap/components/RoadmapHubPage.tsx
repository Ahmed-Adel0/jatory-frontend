"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Atom, Brain, Cog, Sprout, Star, UserCog,
  HeartPulse, Microscope, Rocket,
  ArrowLeft, ArrowRight, Beaker, ShieldCheck, Sparkles,
} from "lucide-react";
import { Navbar } from "@/shared/layout/Navbar";
import { Footer } from "@/shared/layout/Footer";
import { cn } from "@/lib/utils";

/* ─── Data ─── */
type Category = "stem" | "research" | "entre" | "personalai";

type Hub = {
  id: string;
  category: Category;
  title: { ar: string; en: string };
  desc: { ar: string; en: string };
  icon: React.ElementType;
  stations: number;
  resources: number;
  verified?: boolean;
  highlight?: boolean;
};

const hubs: Hub[] = [
  {
    id: "science", category: "stem",
    title: { ar: "علوم (Sciences)", en: "Sciences (علوم)" },
    desc: { ar: "مسارات أكاديمية لجميع تخصصات العلوم البحتة.", en: "Pure academic paths for all science majors." },
    icon: Atom, stations: 14, resources: 170,
  },
  {
    id: "med-pharma", category: "stem",
    title: { ar: "طب وصيدلة", en: "Med & Pharma" },
    desc: { ar: "مسارات المهنة السريرية والصيدلانية.", en: "Clinical and pharmacological career trajectories." },
    icon: HeartPulse, stations: 18, resources: 240, verified: true,
  },
  {
    id: "engineering", category: "stem",
    title: { ar: "هندسة", en: "Engineering" },
    desc: { ar: "علوم تطبيقية ومسارات ابتكار تقني.", en: "Applied sciences and technical innovation paths." },
    icon: Cog, stations: 16, resources: 210,
  },
  {
    id: "agriculture", category: "stem",
    title: { ar: "زراعة", en: "Agriculture" },
    desc: { ar: "مسارات التكنولوجيا الزراعية والموارد الحيوية.", en: "Modern ag-tech and bio-resource paths." },
    icon: Sprout, stations: 10, resources: 130,
  },
  {
    id: "stem-special", category: "stem",
    title: { ar: "STEM Special", en: "STEM Special" },
    desc: { ar: "مسارات متكاملة لطلاب البرامج المتخصصة.", en: "Integrated paths for elite STEM student programs." },
    icon: Star, stations: 12, resources: 160, highlight: true,
  },
  {
    id: "personal-ai", category: "personalai",
    title: { ar: "Personal AI", en: "Personal AI" },
    desc: { ar: "توليد مسار مخصص بناءً على أهدافك الفردية.", en: "Custom path generation based on individual goals." },
    icon: UserCog, stations: 0, resources: 0,
  },
  {
    id: "research", category: "research",
    title: { ar: "البحث العلمي", en: "Scientific Research" },
    desc: { ar: "من فكرة البحث إلى النشر في المجلات الدولية.", en: "From a research idea to peer-reviewed publication." },
    icon: Microscope, stations: 10, resources: 120,
  },
  {
    id: "cs", category: "stem",
    title: { ar: "علوم الحاسب", en: "Computer Science" },
    desc: { ar: "برمجة، ذكاء اصطناعي، وأمن سيبراني.", en: "Programming, AI, and cybersecurity." },
    icon: Brain, stations: 20, resources: 320,
  },
  {
    id: "entre", category: "entre",
    title: { ar: "ريادة الأعمال", en: "Entrepreneurship" },
    desc: { ar: "من الفكرة إلى الـ MVP وجمع التمويل.", en: "From idea to MVP, fundraising and team building." },
    icon: Rocket, stations: 9, resources: 100,
  },
];

const filters: { key: Category | "all"; ar: string; en: string }[] = [
  { key: "all",       ar: "الكل",           en: "All" },
  { key: "stem",      ar: "الكليات العلمية", en: "STEM" },
  { key: "research",  ar: "البحث العلمي",   en: "Research" },
  { key: "entre",     ar: "ريادة الأعمال",  en: "Entrepreneurship" },
  { key: "personalai",ar: "Personal AI",    en: "Personal AI" },
];

/* ─── Card ─── */
function HubCard({ hub, lang, dir }: { hub: Hub; lang: string; dir: "rtl" | "ltr" }) {
  const Icon = hub.icon;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const title = lang === "ar" ? hub.title.ar : hub.title.en;
  const desc  = lang === "ar" ? hub.desc.ar  : hub.desc.en;

  const isPersonalAI = hub.id === "personal-ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300",
        "hover:-translate-y-1",
        isPersonalAI
          ? "border-dashed border-[rgba(13,207,207,0.3)] bg-[rgba(13,207,207,0.06)] hover:bg-[rgba(13,207,207,0.1)]"
          : "border-white/5 bg-[#111418] hover:border-[rgba(13,207,207,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(13,207,207,0.18)]",
      )}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at top right, rgba(13,207,207,0.12), transparent 60%)" }}
      />

      <div className="relative flex flex-col h-full">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className={cn(
            "grid size-12 place-items-center rounded-xl border text-[#0dcfcf] transition-all",
            "border-[rgba(13,207,207,0.25)] bg-black",
            "group-hover:border-[rgba(13,207,207,0.5)] group-hover:shadow-[0_0_20px_rgba(13,207,207,0.25)]",
          )}>
            <Icon className="size-5" strokeWidth={1.5} />
          </div>

          {hub.verified && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white/70">
              <ShieldCheck className="size-3 text-[#0dcfcf]" />
              ID Verified
            </span>
          )}
          {hub.highlight && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.08)] px-2.5 py-1 text-[10px] font-medium text-yellow-400">
              <Star className="size-3" />
              Special
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/55 flex-1">{desc}</p>

        {/* Meta */}
        {!isPersonalAI && (
          <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Beaker className="size-3 text-[#0dcfcf]/80" />
              {hub.stations} {lang === "ar" ? "محطة" : "stations"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-[#0dcfcf]/60" />
              {hub.resources} {lang === "ar" ? "مورد" : "resources"}
            </span>
          </div>
        )}

        {isPersonalAI && (
          <p className="mt-5 text-sm text-[#0dcfcf]/80">
            {lang === "ar" ? "تحدّث مع Jatory AI لبناء مسارك" : "Talk to Jatory AI to build your path"}
          </p>
        )}

        {/* Divider + CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
          <span className="text-[13px] font-bold text-white/80 transition-colors group-hover:text-[#0dcfcf]">
            {lang === "ar" ? "استكشف المسار" : "Explore roadmap"}
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/10 text-white/60 transition-all group-hover:border-[rgba(13,207,207,0.5)] group-hover:bg-[rgba(13,207,207,0.1)] group-hover:text-[#0dcfcf]">
            <Arrow className="size-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */
export function RoadmapHubPage({
  lang = "ar",
  dir = "rtl",
}: {
  lang?: string;
  dir?: "rtl" | "ltr";
} = {}) {
  const [active, setActive] = useState<Category | "all">("all");

  const visible = useMemo(
    () => active === "all" ? hubs : hubs.filter((h) => h.category === active),
    [active],
  );

  return (
    <div className="min-h-screen bg-[#06080A]/70 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(13,207,207,0.18),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0dcfcf] backdrop-blur mb-6">
              <Sparkles className="size-3" />
              {lang === "ar" ? "مركز خرائط الطريق" : "The Scientific Roadmaps Hub"}
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
              {lang === "ar" ? (
                <>اختر مجالك. <span className="text-gradient-neon">ابنِ مسارك.</span></>
              ) : (
                <>Pick your field. <span className="text-gradient-neon">Build your path.</span></>
              )}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-balance text-white/60 leading-relaxed">
              {lang === "ar"
                ? "تغطية شاملة للكليات العلمية، البحث، وريادة الأعمال — مع خارطة طريق شخصية تتفعل بعد التحقق من الهوية الجامعية."
                : "Comprehensive coverage of STEM colleges, research, and entrepreneurship — with a personal roadmap that activates after university ID verification."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(13,207,207,0.3)] to-transparent" />
      </div>

      {/* Filters + Grid */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((f) => {
              const isActive = active === f.key;
              const label = lang === "ar" ? f.ar : f.en;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={cn(
                    "rounded-full border px-6 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "border-[#0dcfcf]/60 bg-[#0dcfcf]/10 text-[#0dcfcf] shadow-[0_0_24px_rgba(13,207,207,0.25)]"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-[#0dcfcf]/40 hover:text-white",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((hub) => (
              <HubCard key={hub.id} hub={hub} lang={lang} dir={dir} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
