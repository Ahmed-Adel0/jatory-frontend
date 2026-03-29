"use client";

export const dynamic = "force-dynamic";

import * as React from "react";
import {
  Bell,
  BookOpen,
  ChevronLeft,
  Clock,
  FileText,
  Globe,
  Home,
  LineChart,
  MessagesSquare,
  Sparkles,
  Users,
} from "lucide-react";

import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";
import { useAuthGuard } from "@/features/auth/use-auth-guard";
import { motion } from "framer-motion";

type Interest = {
  id: string;
  label: string;
  selected?: boolean;
};

type RoadmapItem = {
  id: string;
  title: string;
  tag: "نظري" | "تطبيقي" | "اختبار" | "مهمة";
  dur: string;
  xp: number;
  done?: boolean;
  teaser?: string;
};

const initialInterests: Interest[] = [
  { id: "anatomy", label: "تشريح الجسم", selected: true },
  { id: "phys", label: "الفسيولوجيا", selected: true },
  { id: "bioChem", label: "الكيمياء الحيوية" },
  { id: "path", label: "الباثولوجيا", selected: true },
  { id: "pharma", label: "علم الأدوية" },
  { id: "immun", label: "المناعة" },
  { id: "micro", label: "الأحياء الدقيقة" },
  { id: "research", label: "البحث العلمي" },
];

const roadmap: {
  theory: RoadmapItem[];
  practice: RoadmapItem[];
  tasks: RoadmapItem[];
} = {
  theory: [
    {
      id: "t1",
      title: "الجهاز الدوري — المحاضرة ٤",
      tag: "نظري",
      dur: "٣٠ دقيقة",
      xp: 20,
      done: true,
      teaser: "ملخص سريع + مخطط مرئي لأهم النقاط (عرض مجاني).",
    },
    {
      id: "t2",
      title: "فسيولوجيا القلب — ضغط الدم",
      tag: "نظري",
      dur: "٤٥ دقيقة",
      xp: 30,
      teaser: "اعرض أول دقيقة من فيديو ضغط الدم + نقاط المراجعة.",
    },
    {
      id: "t3",
      title: "ملخص الباثولوجيا — الأسبوع ٦",
      tag: "نظري",
      dur: "٢٠ دقيقة",
      xp: 15,
      teaser: "أهم 5 أسئلة متكررة + إجابات نموذجية.",
    },
  ],
  practice: [
    {
      id: "p1",
      title: "رسم تخطيطي — الشريان الأورطي",
      tag: "تطبيقي",
      dur: "٢٠ دقيقة",
      xp: 25,
      done: true,
      teaser: "لقطة من الرسم النهائي + خطوات التنفيذ.",
    },
    {
      id: "p2",
      title: "تحليل حالة سريرية — فشل القلب",
      tag: "تطبيقي",
      dur: "٣٥ دقيقة",
      xp: 40,
      done: true,
      teaser: "ملخص الحالة + لماذا هذا مهم قبل الامتحان؟",
    },
  ],
  tasks: [
    {
      id: "q1",
      title: "اختبار قصير — الجهاز الدوري (١٠ أسئلة)",
      tag: "اختبار",
      dur: "١٥ دقيقة",
      xp: 50,
      teaser: "أول سؤال مجاني للتجربة — والباقي بعد تسجيل الدخول.",
    },
    {
      id: "q2",
      title: "مهمة بحثية — قارن بين نوعي ضغط الدم",
      tag: "مهمة",
      dur: "٤٠ دقيقة",
      xp: 60,
      teaser: "قالب جاهز لتجميع المعلومات + مثال سريع.",
    },
  ],
};

function tagTone(tag: RoadmapItem["tag"]) {
  switch (tag) {
    case "نظري":
      return "bg-primary/10 text-primary";
    case "تطبيقي":
      return "bg-[hsl(var(--brand-indigo)/0.12)] text-[hsl(var(--brand-indigo))]";
    case "اختبار":
      return "bg-[hsl(var(--brand-purple)/0.12)] text-[hsl(var(--brand-purple))]";
    case "مهمة":
      return "bg-[hsl(var(--brand-blue)/0.12)] text-[hsl(var(--brand-blue))]";
  }
}

function sectionIconTone(section: "theory" | "practice" | "tasks") {
  switch (section) {
    case "theory":
      return { bg: "bg-primary/10", fg: "text-primary" };
    case "practice":
      return {
        bg: "bg-[hsl(var(--brand-indigo)/0.12)]",
        fg: "text-[hsl(var(--brand-indigo))]",
      };
    case "tasks":
      return {
        bg: "bg-[hsl(var(--brand-purple)/0.12)]",
        fg: "text-[hsl(var(--brand-purple))]",
      };
  }
}

function countDone(items: RoadmapItem[]) {
  return items.reduce((acc, i) => acc + (i.done ? 1 : 0), 0);
}

export default function AiNavigatorDashboardPage() {
  const [onboardDone, setOnboardDone] = React.useState(false);
  const [interests, setInterests] = React.useState(initialInterests);
  const [items, setItems] = React.useState(roadmap);
  const { guard } = useAuthGuard();

  const flat = React.useMemo(
    () => [...items.theory, ...items.practice, ...items.tasks],
    [items]
  );
  const done = flat.filter((i) => i.done).length;
  const total = flat.length;
  const pct = Math.round((done / total) * 100);

  function toggleInterest(id: string) {
    setInterests((prev) =>
      prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  }

  function toggleItem(section: "theory" | "practice" | "tasks", id: string) {
    setItems((prev) => ({
      ...prev,
      [section]: prev[section].map((i) =>
        i.id === id ? { ...i, done: !i.done } : i
      ),
    }));
  }

  function handleSaveRoadmap() {
    guard(
      {
        reason:
          "باقي خطوة واحدة عشان نحفظ لك مسارك ونبدأ نحسب نقاطك وتقدمك — سجّل دخولك الآن.",
      },
      () => {
        // MVP stub: replace with API call
        // eslint-disable-next-line no-alert
        alert("تم حفظ المسار بنجاح (وضع تجريبي).");
      }
    );
  }

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

          <div className="px-3 py-5">
            <div className="mb-3 text-xs font-black tracking-widest text-white/35">
              الرئيسي
            </div>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary"
            >
              <Home className="size-4" />
              لوحة التحكم
              <span className="mr-auto size-1.5 animate-pulse rounded-full bg-primary" />
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <Clock className="size-4" />
              مساري اليوم
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <LineChart className="size-4" />
              تقدمي
            </button>

            <div className="mt-6 mb-3 text-xs font-black tracking-widest text-white/35">
              الأدوات
            </div>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <Sparkles className="size-4" />
              المرشد الذكي
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <FileText className="size-4" />
              الملخصات
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <Globe className="size-4" />
              المنح
            </button>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <Users className="size-4" />
              المجتمع
            </button>
          </div>

          <div className="mt-auto border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full border border-primary/30 bg-primary/10 text-xs font-black text-primary">
                أح
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-black text-white">
                  أحمد محمد
                </div>
                <div className="truncate text-xs text-white/35">
                  طب — السنة الثانية
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-background/80 px-6 py-4 backdrop-blur">
            <div>
              <div className="font-tajawal text-base font-black text-white">
                مرحباً بك في جاتوري
              </div>
              <div className="mt-1 text-xs text-white/35">
                الإثنين، ١٧ مارس ٢٠٢٦
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="relative grid size-9 place-items-center rounded-xl border border-white/10 bg-transparent transition hover:bg-white/5"
              >
                <Bell className="size-4 text-white/60" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
              </button>
              <button
                type="button"
                className="grid size-9 place-items-center rounded-xl border border-white/10 bg-transparent transition hover:bg-white/5"
              >
                <MessagesSquare className="size-4 text-white/60" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {!onboardDone ? (
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,hsl(var(--brand-cyan)/0.12),transparent_60%)]" />
                <div className="relative">
                  <div className="text-xs font-black tracking-widest text-primary">
                    المرشد الذكي
                  </div>
                  <div className="mt-2 font-tajawal text-2xl font-black text-white">
                    أخبرنا عن نفسك
                  </div>
                  <div className="mt-2 max-w-2xl text-sm leading-7 text-white/60">
                    حتى نرسم لك خارطة طريق مخصصة تماماً لوضعك الأكاديمي.
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white/70">
                        التخصص الدراسي
                      </label>
                      <select className="h-11 w-full rounded-xl border border-white/10 bg-background/60 px-4 text-sm text-white outline-none focus:border-primary/30">
                        <option value="">اختر تخصصك</option>
                        <option value="medicine" selected>
                          الطب البشري
                        </option>
                        <option value="engineering">الهندسة</option>
                        <option value="cs">علوم الحاسوب</option>
                        <option value="law">القانون</option>
                        <option value="business">إدارة الأعمال</option>
                        <option value="pharmacy">الصيدلة</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white/70">
                        السنة الدراسية
                      </label>
                      <select className="h-11 w-full rounded-xl border border-white/10 bg-background/60 px-4 text-sm text-white outline-none focus:border-primary/30">
                        <option value="">اختر سنتك</option>
                        <option value="1">السنة الأولى</option>
                        <option value="2" selected>
                          السنة الثانية
                        </option>
                        <option value="3">السنة الثالثة</option>
                        <option value="4">السنة الرابعة</option>
                        <option value="5">السنة الخامسة</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 text-xs font-black tracking-widest text-primary">
                    اهتماماتك الأكاديمية
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleInterest(t.id)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-xs font-bold transition",
                          t.selected
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOnboardDone(true)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-black text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Sparkles className="size-4" />
                    ابنِ مساري الذكي
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mb-5 flex flex-col gap-3"
                >
                  <div className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-card/70 p-5">
                    <div className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                      <BrandMark variant="icon" className="scale-[0.78]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-black tracking-widest text-primary">
                        المرشد الذكي · جاتوري
                      </div>
                      <div className="mt-2 text-sm leading-7 text-white/70">
                        أهلاً <span className="text-white font-bold">أحمد</span>{" "}
                        — بناءً على كونك في{" "}
                        <span className="text-white font-tajawal font-bold">السنة الثانية طب</span>{" "}
                        ومهتم بالتشريح والفسيولوجيا، صممت لك اليوم{" "}
                        <span className="text-white font-tajawal font-bold">٧ مهام متوازنة</span>{" "}
                        بين النظري والتطبيقي. لديك امتحان قادم بعد{" "}
                        <span className="text-white font-tajawal font-bold">١٢ يوماً</span>{" "}
                        — المسار مُحسَّن للمراجعة الآن.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                    <div className="text-xs font-black tracking-widest text-white/35">
                      هذا الأسبوع
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-2">
                      {[
                        { d: "الأحد", n: "١٥", s: "done" },
                        { d: "الاثنين", n: "١٦", s: "done" },
                        { d: "الثلاثاء", n: "١٧", s: "today" },
                        { d: "الأربعاء", n: "١٨", s: "up" },
                        { d: "الخميس", n: "١٩", s: "up" },
                        { d: "الجمعة", n: "٢٠", s: "up" },
                        { d: "السبت", n: "٢١", s: "up" },
                      ].map((w) => (
                        <div
                          key={w.d}
                          className={cn(
                            "rounded-xl border border-white/10 p-3 text-center transition",
                            w.s === "today" &&
                              "border-primary/30 bg-primary/10"
                          )}
                        >
                          <div
                            className={cn(
                              "text-[10px] font-bold",
                              w.s === "today" ? "text-primary" : "text-white/35"
                            )}
                          >
                            {w.d}
                          </div>
                          <div
                            className={cn(
                              "mt-1 text-base font-black",
                              w.s === "today" ? "text-white" : "text-white/60"
                            )}
                          >
                            {w.n}
                          </div>
                          <div
                            className={cn(
                              "mx-auto mt-2 size-1.5 rounded-full",
                              w.s === "today"
                                ? "bg-primary"
                                : w.s === "done"
                                  ? "bg-primary"
                                  : "bg-white/20"
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                      <div className="text-xs text-white/35">التقدم اليوم</div>
                      <div className="mt-2 text-3xl font-black text-primary">
                        {done}
                        <span className="text-base font-normal text-white/35">
                          /{total}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-white/60">
                        مهمة مكتملة
                      </div>
                      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-primary transition-[width]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                      <div className="text-xs text-white/35">نقاط الخبرة</div>
                      <div className="mt-2 text-3xl font-black text-white">
                        ٢٤٠<span className="text-base font-normal"> XP</span>
                      </div>
                      <div className="mt-2 text-xs text-white/60">
                        +٦٠ منذ أمس
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                      <div className="text-xs text-white/35">
                        السلسلة المتواصلة
                      </div>
                      <div className="mt-2 text-3xl font-black text-primary">
                        ١٢<span className="text-base font-normal"> يوم</span>
                      </div>
                      <div className="mt-2 text-xs text-white/60">استمر!</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                      <div className="text-xs text-white/35">للامتحان</div>
                      <div className="mt-2 text-3xl font-black text-white">
                        ١٢<span className="text-base font-normal"> يوم</span>
                      </div>
                      <div className="mt-2 text-xs text-white/60">
                        أناتومي — الجهاز الدوري
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: 0.06 }}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-card/70 p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-black text-primary">
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                        مخصص لك
                      </div>
                      <div className="mt-3 font-tajawal text-xl font-black text-white">
                        مسارك اليوم — الثلاثاء ١٧ مارس
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        طب بشري · السنة الثانية · تشريح وفسيولوجيا
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {["اليوم", "الأسبوع", "الشهر"].map((p) => (
                        <button
                          key={p}
                          type="button"
                          className={cn(
                            "rounded-xl border border-white/10 px-4 py-2 text-xs font-black text-white/60 transition hover:bg-white/5 hover:text-white",
                            p === "اليوم" &&
                              "border-primary/30 bg-primary/10 text-primary"
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-white/60">
                      التصفح متاح كضيف — الحفظ والاختبارات تحتاج تسجيل.
                    </div>
                    <button
                      type="button"
                      onClick={handleSaveRoadmap}
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-black text-primary-foreground transition hover:bg-primary/90"
                    >
                      حفظ المسار
                    </button>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Section
                      title="المحتوى النظري"
                      count={`${countDone(items.theory)}/${items.theory.length}`}
                      badgeTone="partial"
                      icon={BookOpen}
                      section="theory"
                      items={items.theory}
                      onToggle={(id) => toggleItem("theory", id)}
                    />
                    <Section
                      title="المحتوى التطبيقي"
                      count={`${countDone(items.practice)}/${items.practice.length}`}
                      badgeTone="done"
                      icon={Sparkles}
                      section="practice"
                      items={items.practice}
                      onToggle={(id) => toggleItem("practice", id)}
                    />
                    <div className="lg:col-span-2">
                      <Section
                        title="الأسئلة والمهام"
                        count={`${countDone(items.tasks)}/${items.tasks.length}`}
                        badgeTone="open"
                        icon={FileText}
                        section="tasks"
                        items={items.tasks}
                        onToggle={(id) => toggleItem("tasks", id)}
                        twoCols
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  count,
  badgeTone,
  icon: Icon,
  section,
  items,
  onToggle,
  twoCols,
}: {
  title: string;
  count: string;
  badgeTone: "done" | "partial" | "open";
  icon: React.ComponentType<{ className?: string }>;
  section: "theory" | "practice" | "tasks";
  items: RoadmapItem[];
  onToggle: (id: string) => void;
  twoCols?: boolean;
}) {
  const tone = sectionIconTone(section);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-background/20">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className={cn("grid size-9 place-items-center rounded-xl", tone.bg, tone.fg)}>
            <Icon className="size-4" />
          </div>
          <div>
            <div className="text-sm font-black text-white">{title}</div>
            <div className="text-xs text-white/35">{items.length} عناصر</div>
          </div>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-black",
            badgeTone === "done"
              ? "bg-primary/10 text-primary"
              : badgeTone === "partial"
                ? "bg-[hsl(var(--brand-indigo)/0.12)] text-[hsl(var(--brand-indigo))]"
                : "bg-white/5 text-white/35"
          )}
        >
          {count}
        </span>
      </div>

      <div className={cn("divide-y divide-white/10", twoCols && "grid grid-cols-1 md:grid-cols-2 md:divide-y-0 md:divide-x md:divide-x-reverse")}>
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => onToggle(it.id)}
            className={cn(
              "flex w-full items-start gap-3 px-5 py-4 text-right transition hover:bg-white/5",
              it.done && "opacity-70"
            )}
          >
            <span
              className={cn(
                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border border-white/20",
                it.done && "border-primary bg-primary"
              )}
            >
              {it.done && (
                <svg viewBox="0 0 24 24" className="size-3">
                  <polyline
                    points="20 6 9 17 4 12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <div className="min-w-0 flex-1">
              <div
                className={cn(
                  "text-sm font-bold text-white",
                  it.done && "line-through text-white/35"
                )}
              >
                {it.title}
              </div>
              {it.teaser && (
                <div className="mt-2 text-sm leading-7 text-white/60">
                  {it.teaser}
                </div>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/35">
                <span className={cn("rounded-md px-2 py-0.5 font-black", tagTone(it.tag))}>
                  {it.tag}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {it.dur}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-black text-primary">
                +{it.xp} XP
              </span>
              <ChevronLeft className="size-4 text-white/20" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

