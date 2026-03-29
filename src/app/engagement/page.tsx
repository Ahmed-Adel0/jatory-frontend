"use client";

import * as React from "react";
import {
  Bell,
  BookMarked,
  Briefcase,
  ChevronLeft,
  Heart,
  Home,
  LineChart,
  Play,
  Share2,
  Sparkles,
  Star,
  Timer,
  Zap,
} from "lucide-react";

import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

type TabKey = "reels" | "careers" | "progress";

const reels = [
  {
    emoji: "🫀",
    title: "كيف يضخ القلب الدم؟",
    sub: "شرح مبسط للدورة الدموية مع رسوم متحركة",
    tag: { label: "فسيولوجيا", tone: "teal" as const },
    dur: "٣ د",
    views: "٢.١ك مشاهدة",
  },
  {
    emoji: "🧠",
    title: "الجهاز العصبي في ٥ دقائق",
    sub: "ملخص خارق لكل ما تحتاجه عن الجهاز العصبي",
    tag: { label: "تشريح", tone: "purple" as const },
    dur: "٥ د",
    views: "٣.٤ك مشاهدة",
  },
  {
    emoji: "🔬",
    title: "خطأ شائع في الباثولوجيا",
    sub: "٩٠٪ من الطلاب يخطئون في هذا المفهوم",
    tag: { label: "باثولوجيا", tone: "amber" as const },
    dur: "٢ د",
    views: "١.٨ك مشاهدة",
  },
  {
    emoji: "🫘",
    title: "الكلى — كيف تنقي الدم؟",
    sub: "رحلة قطرة الدم من الوارد إلى الصادر — شرح بصري",
    tag: { label: "فسيولوجيا", tone: "blue" as const },
    dur: "٤ د",
    views: "٩٧٢ مشاهدة",
  },
  {
    emoji: "💊",
    title: "٣ أدوية تنقذ الحياة",
    sub: "لماذا تعمل هذه الأدوية؟ الفارماكولوجي بشكل مختلف",
    tag: { label: "فارماكولوجي", tone: "red" as const },
    dur: "٦ د",
    views: "٥.٢ك مشاهدة",
  },
] as const;

function toneClasses(tone: "teal" | "amber" | "blue" | "purple" | "red") {
  switch (tone) {
    case "teal":
      return { bg: "bg-primary/10", fg: "text-primary" };
    case "amber":
      return {
        bg: "bg-[hsl(var(--brand-indigo)/0.12)]",
        fg: "text-[hsl(var(--brand-indigo))]",
      };
    case "blue":
      return {
        bg: "bg-[hsl(var(--brand-blue)/0.12)]",
        fg: "text-[hsl(var(--brand-blue))]",
      };
    case "purple":
      return {
        bg: "bg-[hsl(var(--brand-purple)/0.12)]",
        fg: "text-[hsl(var(--brand-purple))]",
      };
    case "red":
      return { bg: "bg-destructive/10", fg: "text-destructive" };
  }
}

export default function EngagementScreenPage() {
  const [tab, setTab] = React.useState<TabKey>("progress");
  const [playingIdx, setPlayingIdx] = React.useState(0);
  const [liked, setLiked] = React.useState(true);
  const [watchSecs, setWatchSecs] = React.useState(0);
  const [reelPct, setReelPct] = React.useState(0);

  React.useEffect(() => {
    if (tab !== "reels") return;
    const t = window.setInterval(() => setWatchSecs((s) => s + 1), 1000);
    return () => window.clearInterval(t);
  }, [tab]);

  React.useEffect(() => {
    if (tab !== "reels") return;
    setReelPct(0);
    const t = window.setInterval(() => {
      setReelPct((p) => (p >= 100 ? 100 : p + 0.5));
    }, 90);
    return () => window.clearInterval(t);
  }, [tab, playingIdx]);

  const activeReel = reels[playingIdx];
  const mm = Math.floor(watchSecs / 60);
  const ss = watchSecs % 60;
  const watchLabel = `${mm}:${ss < 10 ? "0" : ""}${ss}`;
  const sessionPct = Math.min((watchSecs / 1200) * 100, 100);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="flex min-h-dvh">
        <aside className="sticky top-0 hidden h-dvh w-[220px] shrink-0 border-l border-white/10 bg-card md:flex md:flex-col">
          <div className="flex items-center gap-2.5 px-6 py-7">
            <BrandMark variant="icon" className="size-8" />
            <div className="font-tajawal text-[22px] font-black tracking-tight text-white leading-none">
              جاتوري
            </div>
          </div>

          <nav className="px-3 pt-4 text-sm">
            <button
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
              type="button"
            >
              <Home className="size-4" />
              الرئيسية
            </button>
            <button
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
              type="button"
            >
              <Timer className="size-4" />
              مساري اليوم
            </button>
            <button
              className={cn(
                "mt-1 flex w-full items-center gap-2 rounded-xl border px-4 py-2 text-white/70 transition",
                tab === "reels"
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-transparent hover:bg-white/5 hover:text-white"
              )}
              onClick={() => setTab("reels")}
              type="button"
            >
              <Play className="size-4" />
              ريلز التعلم
              <span className="mr-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-black text-primary">
                جديد
              </span>
            </button>
            <button
              className={cn(
                "mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/5 hover:text-white",
                tab === "careers" && "bg-white/5 text-white"
              )}
              onClick={() => setTab("careers")}
              type="button"
            >
              <Briefcase className="size-4" />
              مساري المهني
            </button>
            <button
              className={cn(
                "mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/5 hover:text-white",
                tab === "progress" && "bg-white/5 text-white"
              )}
              onClick={() => setTab("progress")}
              type="button"
            >
              <LineChart className="size-4" />
              تقدمي
            </button>

            <div className="my-4 h-px bg-white/10" />
            <button
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
              type="button"
            >
              <Sparkles className="size-4" />
              المرشد الذكي
            </button>
          </nav>

          <div className="mt-auto px-4 pb-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-end justify-between">
                <div className="text-xs text-white/35">السلسلة المتواصلة</div>
                <div className="text-xl font-black text-primary">١٢</div>
              </div>
              <div className="mt-3 flex gap-1.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "size-2 rounded-full bg-white/15",
                      i < 6 && "bg-primary",
                      i === 6 && "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.25)]"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
            <div className="flex gap-1 rounded-xl border border-white/10 bg-card/70 p-1 text-sm">
              <button
                type="button"
                onClick={() => setTab("reels")}
                className={cn(
                  "rounded-lg px-4 py-2 font-bold text-white/60 transition",
                  tab === "reels" && "bg-white/5 text-white ring-1 ring-white/10"
                )}
              >
                ريلز التعلم
              </button>
              <button
                type="button"
                onClick={() => setTab("careers")}
                className={cn(
                  "rounded-lg px-4 py-2 font-bold text-white/60 transition",
                  tab === "careers" && "bg-white/5 text-white ring-1 ring-white/10"
                )}
              >
                المسار المهني
              </button>
              <button
                type="button"
                onClick={() => setTab("progress")}
                className={cn(
                  "rounded-lg px-4 py-2 font-bold text-white/60 transition",
                  tab === "progress" && "bg-white/5 text-white ring-1 ring-white/10"
                )}
              >
                تقدمي البصري
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary">
                <Star className="size-4" />
                ٣٠٠ XP
              </div>
            </div>
          </div>

          {tab === "reels" && (
            <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[1fr_320px]">
              <div className="min-h-0 border-l border-white/10 md:overflow-y-auto">
                <div className="relative grid min-h-[480px] place-items-center overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#0D1F18_0%,#080F0C_100%)]" />
                  <div className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_70%)]" />
                  <div className="relative z-10 px-6 text-center">
                    <div className="mx-auto grid size-16 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                      <Zap className="size-7" />
                    </div>
                    <div className="mt-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-black tracking-wider text-primary">
                      {activeReel.tag.label} · {activeReel.dur}
                    </div>
                    <div className="mt-3 font-tajawal text-2xl font-black text-white">
                      {activeReel.title}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/60">
                      {activeReel.sub}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setPlayingIdx((i) => (i + 1) % reels.length)
                      }
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground transition hover:bg-primary/90"
                    >
                      <Play className="size-4 fill-white" />
                      شاهد الآن
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-4 z-20 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setLiked((v) => !v)}
                      className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/10 transition hover:bg-white/15"
                    >
                      <Heart
                        className={cn(
                          "size-4",
                          liked ? "text-destructive" : "text-white/60"
                        )}
                      />
                    </button>
                    <button
                      type="button"
                      className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/10 transition hover:bg-white/15"
                    >
                      <BookMarked className="size-4 text-white/60" />
                    </button>
                    <button
                      type="button"
                      className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/10 transition hover:bg-white/15"
                    >
                      <Share2 className="size-4 text-white/60" />
                    </button>
                  </div>
                </div>

                <div className="h-0.5 bg-white/10">
                  <div
                    className="h-full bg-primary transition-[width]"
                    style={{ width: `${reelPct}%` }}
                  />
                </div>

                <div className="space-y-2 p-4">
                  {reels.map((r, idx) => {
                    const tone = toneClasses(r.tag.tone);
                    return (
                      <button
                        key={r.title}
                        type="button"
                        onClick={() => setPlayingIdx(idx)}
                        className={cn(
                          "flex w-full gap-3 rounded-2xl border border-transparent p-3 text-right transition hover:border-white/10 hover:bg-white/5",
                          idx === playingIdx &&
                            "border-primary/30 bg-primary/10"
                        )}
                      >
                        <div
                          className={cn(
                            "grid size-14 shrink-0 place-items-center rounded-xl text-xl",
                            tone.bg
                          )}
                        >
                          {r.emoji}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={cn(
                              "text-sm font-bold",
                              idx === playingIdx ? "text-primary" : "text-white"
                            )}
                          >
                            {r.title}
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-white/35">
                            <span
                              className={cn(
                                "rounded-md px-2 py-0.5 font-bold",
                                tone.bg,
                                tone.fg
                              )}
                            >
                              {r.tag.label}
                            </span>
                            <span>{r.dur}</span>
                            <span>·</span>
                            <span>{r.views}</span>
                          </div>
                        </div>
                        <ChevronLeft className="mt-1 size-4 text-white/30" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <aside className="hidden min-h-0 overflow-y-auto p-6 md:block">
                <div className="text-xs font-black tracking-widest text-white/35">
                  لماذا هذا مناسب لك
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-card/70 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="grid size-7 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Timer className="size-4" />
                      </div>
                      <div className="text-sm font-bold">امتحانك بعد ١٢ يوم</div>
                    </div>
                    <div className="text-sm leading-7 text-white/60">
                      المحتوى مرتب حسب <span className="text-white">أولوية الامتحان</span>{" "}
                      — ابدأ بالجهاز الدوري والجهاز العصبي
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-card/70 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="grid size-7 place-items-center rounded-lg bg-[hsl(var(--brand-indigo)/0.12)] text-[hsl(var(--brand-indigo))]">
                        <LineChart className="size-4" />
                      </div>
                      <div className="text-sm font-bold">نقطة ضعف محددة</div>
                    </div>
                    <div className="text-sm leading-7 text-white/60">
                      أداؤك في <span className="text-white">الباثولوجيا ٦٢٪</span>{" "}
                      — لدينا ٣ ريلز تعيد بناء الأساس بسرعة
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-card/70 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="grid size-7 place-items-center rounded-lg bg-[hsl(var(--brand-blue)/0.12)] text-[hsl(var(--brand-blue))]">
                        <Bell className="size-4" />
                      </div>
                      <div className="text-sm font-bold">رفاق دراستك يشاهدون</div>
                    </div>
                    <div className="text-sm leading-7 text-white/60">
                      <span className="text-white">٢٣ طالب</span> من تخصصك شاهدوا{" "}
                      “الجهاز العصبي” هذا الأسبوع
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-xs font-black tracking-widest text-white/35">
                  جلسة اليوم
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-card/70 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">وقت المشاهدة</span>
                    <span className="font-black text-primary">{watchLabel}</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary transition-[width]"
                      style={{ width: `${sessionPct}%` }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-white/35">
                    <span>٠ دقيقة</span>
                    <span>٢٠ دقيقة</span>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {tab === "careers" && (
            <div className="flex-1 p-6">
              <div className="rounded-2xl border border-white/10 bg-card/70 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-black text-primary">
                  طب بشري · السنة الثانية
                </div>
                <div className="mt-3 font-tajawal text-2xl font-black text-white">
                  وين بيوصلك تخصصك؟
                </div>
                <div className="mt-2 text-sm leading-7 text-white/60">
                  بناءً على مسارك الحالي، هذه الوظائف الأنسب لك — مرتبة بالتوافق مع
                  اهتماماتك
                </div>
                <div className="mt-4 flex flex-wrap gap-8">
                  <div>
                    <div className="text-2xl font-black text-primary">+١٢</div>
                    <div className="text-xs text-white/35">مسار وظيفي متاح</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[hsl(var(--brand-indigo))]">٣٢K$</div>
                    <div className="text-xs text-white/35">متوسط الراتب سنوياً</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs font-black tracking-widest text-white/35">
                المسارات المقترحة لك
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: "طبيب قلب وأوعية دموية",
                    sub: "يتوافق مع قوتك في الفسيولوجيا والتشريح",
                    match: "توافق ٩٥٪",
                    tone: "teal" as const,
                    salary: "٨٠K – ١٢٠K$",
                    skills: ["تشريح", "فسيولوجيا القلب", "أشعة", "قسطرة"],
                    featured: true,
                  },
                  {
                    title: "طبيب أعصاب",
                    sub: "مجال متنامٍ — مناسب إذا طورت نقطة ضعفك في الباثولوجيا",
                    match: "توافق ٨٨٪",
                    tone: "purple" as const,
                    salary: "٦٠K – ١٠٠K$",
                    skills: ["جهاز عصبي", "MRI", "باثولوجيا"],
                  },
                  {
                    title: "باحث طبي",
                    sub: "يجمع الطب والعلم — مناسب إذا أضفت البحث العلمي لمساراتك",
                    match: "توافق ٧١٪",
                    tone: "amber" as const,
                    salary: "٤٠K – ٨٠K$",
                    skills: ["إحصاء", "بحث سريري", "نشر علمي"],
                  },
                  {
                    title: "طب الذكاء الاصطناعي",
                    sub: "مجال المستقبل — يدمج الطب مع تحليل البيانات والتشخيص الذكي",
                    match: "توافق ٦٥٪",
                    tone: "blue" as const,
                    salary: "٧٠K – ١٥٠K$",
                    skills: ["Python", "ML طبي", "تصوير"],
                  },
                ].map((c) => {
                  const tone = toneClasses(c.tone);
                  return (
                    <div
                      key={c.title}
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border bg-card/70 p-5 transition hover:-translate-y-0.5 hover:border-primary/30",
                        c.featured ? "border-primary/30" : "border-white/10"
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_0%_100%,hsl(var(--primary)/0.10),transparent_60%)]" />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <div
                            className={cn(
                              "grid size-10 place-items-center rounded-xl",
                              tone.bg,
                              tone.fg
                            )}
                          >
                            <Briefcase className="size-5" />
                          </div>
                          <div
                            className={cn(
                              "rounded-full px-3 py-1 text-[10px] font-black",
                              c.tone === "teal"
                                ? "bg-primary/10 text-primary"
                                : c.tone === "amber"
                                  ? "bg-[hsl(var(--brand-indigo)/0.12)] text-[hsl(var(--brand-indigo))]"
                                  : "bg-white/5 text-white/60"
                            )}
                          >
                            {c.match}
                          </div>
                        </div>
                        <div className="mt-4 text-base font-black text-white">
                          {c.title}
                        </div>
                        <div className="mt-2 text-sm leading-7 text-white/60">
                          {c.sub}
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                          <div>
                            <div className="text-xs text-white/35">
                              متوسط الراتب
                            </div>
                            <div className="text-[11px] text-white/35">
                              سنوياً
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-base font-black text-primary">
                              {c.salary}
                            </div>
                            <div className="text-[11px] text-white/35">
                              الخليج والغرب
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {c.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "progress" && (
            <div className="flex-1 p-6">
              <div className="mb-5">
                <div className="font-tajawal text-2xl font-black text-white">تقدمك البصري</div>
                <div className="mt-1 text-sm text-white/60">
                  طب بشري — السنة الثانية · الفصل الثاني
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand-cyan)/0.12),transparent_55%)]" />
                <div className="relative flex flex-wrap items-center gap-8">
                  <div className="grid place-items-center">
                    <svg width="130" height="130" viewBox="0 0 130 130">
                      <circle
                        cx="65"
                        cy="65"
                        r="54"
                        fill="none"
                        stroke="hsl(var(--primary) / 0.12)"
                        strokeWidth="10"
                      />
                      <circle
                        cx="65"
                        cy="65"
                        r="54"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="10"
                        strokeDasharray="339.3"
                        strokeDashoffset="203.6"
                        strokeLinecap="round"
                        transform="rotate(-90 65 65)"
                      />
                      <text
                        x="65"
                        y="60"
                        textAnchor="middle"
                        fontSize="24"
                        fontWeight="900"
                        fill="#F5F5F2"
                      >
                        ٤٠٪
                      </text>
                      <text
                        x="65"
                        y="76"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#888880"
                      >
                        مكتمل
                      </text>
                    </svg>
                  </div>
                  <div className="min-w-[280px] flex-1">
                    <div className="text-xl font-black text-white">
                      أنت في منتصف رحلتك — هكذا 💪
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/60">
                      أكملت <span className="text-primary font-bold">٤٠٪</span>{" "}
                      من مقرر السنة الثانية. معدل تقدمك أعلى من{" "}
                      <span className="text-white font-bold">٧٣٪</span> من طلاب نفس
                      التخصص.
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        { v: "٤٨", l: "يوم دراسة" },
                        { v: "٣٠٠", l: "XP مكتسب" },
                        { v: "١٢", l: "سلسلة يومية" },
                      ].map((s) => (
                        <div
                          key={s.l}
                          className="rounded-xl border border-white/10 bg-white/5 p-3"
                        >
                          <div className="text-xl font-black text-primary">
                            {s.v}
                          </div>
                          <div className="mt-1 text-xs text-white/35">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs font-black tracking-widest text-white/35">
                تفاصيل كل مادة
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { t: "تشريح الجسم", p: 68, tone: "teal" as const, meta: "١٧/٢٥ وحدة" },
                  { t: "الفسيولوجيا", p: 55, tone: "teal" as const, meta: "١١/٢٠ وحدة" },
                  { t: "الباثولوجيا", p: 32, tone: "amber" as const, meta: "٦/١٨ وحدة" },
                  { t: "الكيمياء الحيوية", p: 72, tone: "blue" as const, meta: "١٣/١٨ وحدة" },
                  { t: "الميكروبيولوجيا", p: 15, tone: "muted" as const, meta: "٣/٢٠ وحدة" },
                  { t: "الفارماكولوجي", p: 48, tone: "purple" as const, meta: "٨/١٦ وحدة" },
                ].map((c) => {
                  const bar =
                    c.tone === "teal"
                      ? "bg-primary"
                      : c.tone === "amber"
                        ? "bg-[hsl(var(--brand-indigo))]"
                        : c.tone === "blue"
                          ? "bg-[hsl(var(--brand-blue))]"
                          : c.tone === "purple"
                            ? "bg-[hsl(var(--brand-purple))]"
                            : "bg-white/20";
                  const pct =
                    c.tone === "amber"
                      ? "text-[hsl(var(--brand-indigo))]"
                      : c.tone === "blue"
                        ? "text-[hsl(var(--brand-blue))]"
                        : c.tone === "purple"
                          ? "text-[hsl(var(--brand-purple))]"
                          : c.tone === "muted"
                            ? "text-white/35"
                            : "text-primary";
                  return (
                    <div key={c.t} className="rounded-2xl border border-white/10 bg-card/70 p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-black text-white">{c.t}</div>
                        <div className={cn("text-sm font-black", pct)}>{c.p}٪</div>
                      </div>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className={cn("h-full rounded-full", bar)} style={{ width: `${c.p}%` }} />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-white/35">
                        <span>{c.meta}</span>
                        <span>{Math.max(0, Math.round((100 - c.p) / 10))} متبقية</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-xs font-black tracking-widest text-white/35">
                خط زمن الرحلة
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-card/70 p-5">
                <div className="space-y-4">
                  {[
                    { s: "done" as const, title: "بدأت الفصل الثاني", sub: "١ يناير ٢٠٢٦", badge: "مكتمل" },
                    { s: "done" as const, title: "أتممت وحدات التشريح الأولى", sub: "٢٠ يناير ٢٠٢٦", badge: "مكتمل" },
                    { s: "active" as const, title: "امتحان الفسيولوجيا والتشريح", sub: "٢٩ مارس ٢٠٢٦ — بعد ١٢ يوم", badge: "قريباً" },
                    { s: "upcoming" as const, title: "نهاية وحدات الباثولوجيا", sub: "١٥ أبريل ٢٠٢٦", badge: "قادم" },
                    { s: "upcoming" as const, title: "امتحانات نهاية الفصل", sub: "مايو ٢٠٢٦", badge: "قادم" },
                  ].map((t) => (
                    <div key={t.title} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <div className="pt-1">
                        <div
                          className={cn(
                            "size-2.5 rounded-full",
                            t.s === "done"
                              ? "bg-primary"
                              : t.s === "active"
                                ? "bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.22)]"
                                : "bg-white/20"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <div className={cn("text-sm font-bold", t.s === "done" ? "text-white/60" : "text-white")}>
                          {t.title}
                        </div>
                        <div className="mt-1 text-xs text-white/35">{t.sub}</div>
                        <span
                          className={cn(
                            "mt-2 inline-flex rounded-md px-2 py-0.5 text-[10px] font-black",
                            t.s === "done"
                              ? "bg-primary/10 text-primary"
                              : t.s === "active"
                                ? "bg-[hsl(var(--brand-indigo)/0.12)] text-[hsl(var(--brand-indigo))]"
                                : "bg-white/5 text-white/35"
                          )}
                        >
                          {t.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

