"use client";

import { ArrowLeft, ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function Hero() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const steps = [
    "hero.step.college",
    "hero.step.interest",
    "hero.step.skill",
    "hero.step.research",
    "hero.step.opportunity",
    "hero.step.project",
    "hero.step.impact",
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen flex flex-col justify-center">
      {/* Backdrop layers */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, #0dcfcf40, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-40 right-[-10%] size-[420px] rounded-full opacity-50 blur-3xl animate-float-slow-rev"
        style={{ background: "radial-gradient(circle, #0dcfcf30, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-1.5 text-xs font-medium text-[#0dcfcf] backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#0dcfcf] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#0dcfcf]" />
          </span>
          <Sparkles className="size-3.5" />
          <span>{t("hero.badge")}</span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-up mt-8 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: "80ms" }}>
          <span className="block">{t("hero.title.from")}</span>
          <span className="mt-2 block">
            <span className="text-white/40">→ </span>
            <span className="text-gradient-neon">{t("hero.title.to")}</span>
          </span>
        </h1>

        {/* Mono kicker */}
        <p className="animate-fade-up mt-5 font-mono text-xs uppercase tracking-[0.3em] text-[#0dcfcf]/80" style={{ animationDelay: "140ms" }}>
          {t("hero.kicker")}
        </p>

        {/* Description */}
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: "200ms" }}>
          {t("hero.desc")}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "260ms" }}>
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#0dcfcf] px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_#0dcfcf40] transition-all hover:shadow-[0_0_50px_#0dcfcf80] transform hover:-translate-y-1">
            <span className="relative z-10">{t("hero.cta.primary")}</span>
            <Arrow className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/90 backdrop-blur transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf] transform hover:-translate-y-1">
            <Compass className="size-4" />
            {t("hero.cta.secondary")}
          </button>
        </div>

        {/* Trajectory Visualizer */}
        <TrajectoryVisualizer steps={steps} />
      </div>
    </section>
  );
}

function TrajectoryVisualizer({ steps }: { steps: string[] }) {
  const { t } = useI18n();

  return (
    <div className="animate-fade-up relative mx-auto mt-20 max-w-5xl" style={{ animationDelay: "360ms" }}>
      {/* Header label */}
      <div className="mb-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/10" />
        <span className="font-mono">{t("hero.viz.label")}</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      {/* Card */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-8">
        {/* corner accents */}
        <span className="pointer-events-none absolute left-3 top-3 size-3 rounded-tl-md border-l-2 border-t-2 border-[#0dcfcf]/40" />
        <span className="pointer-events-none absolute right-3 top-3 size-3 rounded-tr-md border-r-2 border-t-2 border-[#0dcfcf]/40" />
        <span className="pointer-events-none absolute left-3 bottom-3 size-3 rounded-bl-md border-l-2 border-b-2 border-[#0dcfcf]/40" />
        <span className="pointer-events-none absolute right-3 bottom-3 size-3 rounded-br-md border-r-2 border-b-2 border-[#0dcfcf]/40" />

        {/* Desktop: horizontal trail */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-transparent via-[#0dcfcf]/40 to-transparent" />
            {/* Animated pulse traveling along the line */}
            <div className="pointer-events-none absolute left-0 right-0 top-[14px] h-2 overflow-hidden">
              <div
                className="absolute top-0 h-2 w-24 rounded-full blur-md"
                style={{
                  background: "linear-gradient(90deg, transparent, #0dcfcf, transparent)",
                  animation: "trajectory-flow 4s linear infinite",
                }}
              />
            </div>

            <ol className="relative grid grid-cols-7 gap-2">
              {steps.map((stepKey, i) => (
                <li key={stepKey} className="flex flex-col items-center gap-3">
                  <span
                    className="relative grid size-9 place-items-center rounded-full border border-[#0dcfcf]/40 bg-black"
                    style={{ animation: `pulse-glow 2.4s ease-in-out ${i * 0.25}s infinite` }}
                  >
                    <span className="size-2 rounded-full bg-[#0dcfcf]" />
                  </span>
                  <span className="text-[11px] font-medium text-white/60">{t(stepKey)}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Story end-state */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0dcfcf]/40 bg-[#0dcfcf]/10 px-5 py-2.5 text-sm">
              <BookOpen className="size-4 text-[#0dcfcf]" />
              <span className="text-gradient-neon font-semibold">{t("hero.viz.story")}</span>
            </div>
          </div>
        </div>

        {/* Mobile: vertical trail */}
        <div className="md:hidden">
          <ol className="relative space-y-4 ps-4">
            <span className="absolute inset-y-0 start-[7px] w-px bg-gradient-to-b from-[#0dcfcf]/60 via-[#0dcfcf]/30 to-transparent" />
            {steps.map((stepKey, i) => (
              <li key={stepKey} className="relative flex items-center gap-3">
                <span
                  className="relative -ms-4 grid size-4 place-items-center rounded-full border border-[#0dcfcf]/50 bg-black"
                  style={{ animation: `pulse-glow 2.4s ease-in-out ${i * 0.2}s infinite` }}
                >
                  <span className="size-1.5 rounded-full bg-[#0dcfcf]" />
                </span>
                <span className="text-sm text-white/80">{t(stepKey)}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0dcfcf]/40 bg-[#0dcfcf]/10 px-4 py-2 text-sm">
            <BookOpen className="size-4 text-[#0dcfcf]" />
            <span className="text-gradient-neon font-semibold">{t("hero.viz.story")}</span>
          </div>
        </div>

        {/* Logo orb watermark */}
        <div className="pointer-events-none absolute -right-10 -top-10 hidden size-32 opacity-10 lg:block grayscale">
          <Image src="/logo.png" alt="" width={128} height={128} className="size-full object-contain" />
        </div>
      </div>
    </div>
  );
}
