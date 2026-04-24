"use client";

import { ArrowLeft, ArrowRight, BookOpen, Compass, Sparkles, GraduationCap, Microscope, Rocket, Globe, Trophy, Search, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import { Container } from "./layout/container";
import { useAuthModal } from "@/features/auth/auth-modal";
import { useAuth } from "@/features/auth/auth-context";
import { useRouter } from "next/navigation";

export function Hero() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const authModal = useAuthModal();
  const { state } = useAuth();
  const router = useRouter();

  const handlePrimaryAction = () => {
    router.push("/home");
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen flex flex-col justify-center">
      {/* Backdrop Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="animate-float-slow absolute -right-[10%] -top-[150px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(13,207,207,0.07),transparent_70%)] blur-[120px]" />
        <div className="animate-float-slow-rev absolute -left-[20%] -bottom-[200px] size-[800px] rounded-full bg-[radial-gradient(circle,rgba(13,207,207,0.04),transparent_70%)] blur-[120px]" />
      </div>

      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.025] z-0" />

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] px-4 py-2 text-[12px] font-semibold text-[#0dcfcf] backdrop-blur-md">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#0dcfcf] opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#0dcfcf]" />
          </span>
          <span>{t("hero.badge")}</span>
        </div>

        <h1 className="animate-fade-up mt-10 text-balance text-[clamp(48px,6.5vw,86px)] font-black leading-[1.1] tracking-[-2px] text-white" style={{ animationDelay: "100ms" }}>

          {dir === 'rtl' ? (
            <>
              ارسم مسارك العلمي<br />
              <span className="text-[#0dcfcf]">بالذكاء الاصطناعي</span>
            </>
          ) : (
            <>
              Design Your Academic<br />
              <span className="text-[#0dcfcf]">Trajectory with AI</span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className="animate-fade-up mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-white/60 sm:text-lg" style={{ animationDelay: "200ms" }}>
          {t("hero.desc")}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "300ms" }}>
          <button 
            onClick={handlePrimaryAction}
            className="group relative inline-flex items-center gap-2.5 rounded-xl bg-[#0dcfcf] px-8 py-4 text-sm font-bold text-[#021A10] shadow-[0_0_40px_rgba(13, 207, 207,0.2)] transition-all hover:bg-[#00b8b8] hover:shadow-[0_0_60px_rgba(13, 207, 207,0.3)] transform hover:-translate-y-1"
          >
            <Zap className="size-4 fill-current" />
            <span className="relative z-10">{t("hero.cta.primary")}</span>
            <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </button>
          <button className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/5 transform hover:-translate-y-1">
            {t("hero.cta.secondary")}
            <Arrow className="size-4 opacity-60" />
          </button>
        </div>

        {/* Trajectory Visualizer */}
        <TrajectoryVisualizer />

        {/* Stats */}
        <div className="animate-fade-up mt-20 flex flex-wrap items-center justify-center gap-0 border-t border-white/10 pt-10" style={{ animationDelay: "500ms" }}>
          <Stat value="12K+" label="طالب نشط" />
          <div className="hidden sm:block h-10 w-px bg-white/10" />
          <Stat value="94%" label="رضا الطلاب" />
          <div className="hidden sm:block h-10 w-px bg-white/10" />
          <Stat value="200+" label="مسار مخصص" />
          <div className="hidden sm:block h-10 w-px bg-white/10" />
          <Stat value="3x" label="سرعة الإنجاز" />
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-10 py-4 flex flex-col items-center">
      <div className="font-heading text-3xl font-black text-white leading-none mb-1">
        {value.includes('+') ? (
          <>
            {value.replace('+', '')}<span className="text-[#0dcfcf]">+</span>
          </>
        ) : value.includes('%') ? (
          <>
            {value.replace('%', '')}<span className="text-[#0dcfcf]">%</span>
          </>
        ) : value.includes('x') ? (
          <>
            {value.replace('x', '')}<span className="text-[#0dcfcf]">x</span>
          </>
        ) : value}
      </div>
      <div className="text-[12px] text-white/50">{label}</div>
    </div>
  );
}

function TrajectoryVisualizer() {
  const { t } = useI18n();

  const nodes = [
    { icon: <GraduationCap className="size-4" />, label: "كلية" },
    { icon: <Search className="size-4" />, label: "اهتمام" },
    { icon: <Zap className="size-4" />, label: "مهارة" },
    { icon: <Microscope className="size-4" />, label: "بحث" },
    { icon: <Globe className="size-4" />, label: "فرصة" },
    { icon: <Rocket className="size-4" />, label: "مشروع" },
    { icon: <Trophy className="size-4" />, label: "إنجاز" },
  ];

  return (
    <div className="animate-fade-up relative mx-auto mt-20 max-w-3xl" style={{ animationDelay: "400ms" }}>
      <div className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
        مُحاكي المسار الأكاديمي
      </div>

      <div className="relative px-5">
        {/* Track Line */}
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12)_20%,rgba(255,255,255,0.12)_80%,transparent)]" />
        
        {/* Pulse Sweep */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 overflow-hidden">
          <div className="traj-sweep absolute h-full w-24 bg-[linear-gradient(90deg,transparent,#0dcfcf,transparent)] blur-[3px]" />
        </div>

        <div className="relative flex justify-between items-center">
          {nodes.map((node, i) => (
            <div key={i} className="group relative flex flex-col items-center gap-3">
              <div className="relative z-10 grid size-10 place-items-center rounded-full border border-white/10 bg-[#06080A] transition-all duration-300 group-hover:scale-115 group-hover:border-[rgba(13, 207, 207,0.25)] group-hover:bg-[rgba(13, 207, 207,0.08)]">
                <div className="text-white/40 transition-colors group-hover:text-[#0dcfcf]">
                  {node.icon}
                </div>
              </div>
              <span className="text-[11px] text-white/30 transition-colors group-hover:text-[#0dcfcf]">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] px-5 py-2.5 text-[13px] font-semibold text-[#0dcfcf]">
          <Trophy className="size-4" />
          قصتك تُكتب الآن
        </div>
      </div>
    </div>
  );
}

