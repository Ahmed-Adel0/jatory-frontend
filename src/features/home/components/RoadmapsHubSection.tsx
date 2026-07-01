"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Atom, Brain, Cog, Sprout, Star, UserCog,
  ArrowLeft, ArrowRight, Beaker, ShieldCheck, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Hub data (6 featured) ─── */
const featured = [
  {
    id: "science",
    titleAr: "علوم (Sciences)", titleEn: "Sciences (علوم)",
    descAr: "مسارات أكاديمية لجميع تخصصات العلوم البحتة.",
    descEn: "Pure academic paths for all science majors.",
    icon: Atom,
  },
  {
    id: "med-pharma",
    titleAr: "طب وصيدلة", titleEn: "Med & Pharma",
    descAr: "مسارات المهنة السريرية والصيدلانية.",
    descEn: "Clinical and pharmacological career trajectories.",
    icon: Brain,
    verified: true,
  },
  {
    id: "engineering",
    titleAr: "هندسة", titleEn: "Engineering",
    descAr: "علوم تطبيقية ومسارات الابتكار التقني.",
    descEn: "Applied sciences and technical innovation paths.",
    icon: Cog,
  },
  {
    id: "agriculture",
    titleAr: "زراعة", titleEn: "Agriculture",
    descAr: "مسارات التكنولوجيا الزراعية والموارد الحيوية.",
    descEn: "Modern ag-tech and bio-resource paths.",
    icon: Sprout,
  },
  {
    id: "stem-special",
    titleAr: "STEM Special", titleEn: "STEM Special",
    descAr: "مسارات متكاملة لطلاب البرامج المتخصصة.",
    descEn: "Integrated paths for elite STEM student programs.",
    icon: Star,
  },
  {
    id: "personal-ai",
    titleAr: "Personal AI", titleEn: "Personal AI",
    descAr: "توليد مسار مخصص بناءً على أهدافك الفردية.",
    descEn: "Custom path generation based on individual goals.",
    icon: UserCog,
  },
];

function HubCard({
  item,
  delay,
  lang = "en",
  dir = "ltr",
}: {
  item: (typeof featured)[number];
  delay: number;
  lang?: string;
  dir?: string;
}) {
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const title = lang === "ar" ? item.titleAr : item.titleEn;
  const desc  = lang === "ar" ? item.descAr  : item.descEn;
  const isAI  = item.id === "personal-ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: delay * 0.08 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 cursor-pointer",
        isAI
          ? "border-dashed border-[rgba(13,207,207,0.3)] bg-[rgba(13,207,207,0.05)] hover:bg-[rgba(13,207,207,0.09)]"
          : "border-white/5 bg-[#111418] hover:border-[rgba(13,207,207,0.28)] hover:shadow-[0_20px_50px_-15px_rgba(13,207,207,0.15)]",
      )}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at top right, rgba(13,207,207,0.1), transparent 60%)" }}
      />

      <div className="relative">
        {/* Icon row */}
        <div className="flex items-center justify-between">
          <div className="grid size-12 place-items-center rounded-xl border border-[rgba(13,207,207,0.25)] bg-black text-[#0dcfcf] transition-all group-hover:border-[rgba(13,207,207,0.5)] group-hover:shadow-[0_0_20px_rgba(13,207,207,0.22)]">
            <item.icon className="size-5" strokeWidth={1.5} />
          </div>
          {item.verified && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-white/60">
              <ShieldCheck className="size-3 text-[#0dcfcf]" />
              ID
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-[#0dcfcf] transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/55 line-clamp-2">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function RoadmapsHubSection({
  lang = "en",
  dir = "ltr",
}: {
  lang?: string;
  dir?: string;
} = {}) {

  return (
    <section id="hub" className="reveal relative py-24 sm:py-32">
      {/* bg dots */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] bg-[image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {lang === "ar" ? "مركز خرائط الطريق العلمية" : "The Scientific Roadmaps Hub"}
          </h2>
        </motion.div>

        {/* Teal divider — matches the design */}
        <div className="mb-10 h-px bg-gradient-to-r from-[rgba(13,207,207,0.5)] via-[rgba(13,207,207,0.15)] to-transparent" />

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <HubCard key={item.id} item={item} delay={i} lang={lang} dir={dir} />
          ))}
        </div>

        {/* See All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(13,207,207,0.3)] bg-[rgba(13,207,207,0.08)] px-7 py-3 text-sm font-bold text-[#0dcfcf] transition-all hover:bg-[rgba(13,207,207,0.15)] hover:shadow-[0_0_30px_rgba(13,207,207,0.2)]"
          >
            {lang === "ar" ? "استعرض كل المسارات" : "Browse all roadmaps"}
            {dir === "rtl" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
