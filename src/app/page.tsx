import { ArrowLeft, BookOpen, FileText, Globe, LineChart, Play, Sparkles } from "lucide-react";

import { BrandMark } from "@/components/brand/brand-mark";
import { HeroGlow } from "@/components/landing/hero-glow";
import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/ui/link-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const nav = [
  { label: "المنصة", href: "/ai-navigator" },
  { label: "المسارات", href: "/roadmaps/data-analyst" },
  { label: "المجتمع", href: "/engagement" },
  { label: "الأسعار", href: "/#cta" },
] as const;

const features = [
  {
    title: "المرشد الذكي",
    desc: "ذكاء اصطناعي يفهم وضعك الأكاديمي ويرسم لك خارطة طريق مخصصة خطوة بخطوة.",
    icon: Sparkles,
  },
  {
    title: "ملخصات المحاضرات",
    desc: "تلخيص فوري لأي محاضرة أو كتاب مع استخراج النقاط الأساسية وأسئلة المراجعة.",
    icon: FileText,
  },
  {
    title: "بحث المنح الدراسية",
    desc: "محرك بحث ذكي يجد المنح المناسبة لك ويساعدك على إعداد الطلبات بدقة.",
    icon: Globe,
  },
  {
    title: "تتبع التقدم",
    desc: "لوحة تحكم تُظهر مسيرتك الأكاديمية وتُنبهك بالخطوات القادمة في الوقت المناسب.",
    icon: LineChart,
  },
  {
    title: "مجتمع الطلاب",
    desc: "تواصل مع آلاف الطلاب في مجالك وشارك التجارب والموارد.",
    icon: BookOpen,
  },
] as const;

const journey: { n: string; title: string; desc: string; active?: boolean }[] =
  [
    { n: "١", title: "الاكتشاف", desc: "تجد جاتوري عبر المحتوى القصير" },
    {
      n: "٢",
      title: "الانطباع الأول",
      desc: "تدخل المنصة وتبدأ فوراً",
      active: true,
    },
    { n: "٣", title: "بناء المسار", desc: "المرشد الذكي يرسم خطتك" },
    { n: "٤", title: "التعلم", desc: "تتقدم بثقة خطوة بخطوة" },
    { n: "٥", title: "الإتقان", desc: "تحقق أهدافك الأكاديمية" },
  ];

export default function LandingPage() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-220px] z-0 size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.16)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-160px] z-0 size-[520px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand-cyan)/0.10)_0%,transparent_65%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BrandMark variant="icon" className="size-8" />
            <div className="font-tajawal text-xl font-black tracking-tight">
              جاتوري
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <LinkButton href="/ai-navigator" className="h-9 px-5 text-sm">
            ابدأ مجاناً
          </LinkButton>
        </Container>
      </header>

      <main className="relative z-10">
        <section className="py-24 sm:py-28">
          <Container className="text-center">
            <HeroGlow />
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              مدعوم بالذكاء الاصطناعي
            </div>

            <h1 className="mt-8 font-tajawal text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              ارسم مسارك العلمي
              <br />
              <span className="text-primary">بالذكاء الاصطناعي</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              منصتك الشخصية لتنظيم رحلتك الأكاديمية — من أول يوم دراسة حتى تحقيق
              هدفك.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkButton
                href="/ai-navigator"
                className="h-12 gap-2 px-7 text-base font-extrabold"
              >
                <ArrowLeft className="size-4" />
                ابدأ مع المرشد الذكي
              </LinkButton>
              <LinkButton
                href="/engagement"
                variant="outline"
                className="h-12 px-7 text-base font-bold text-foreground"
              >
                استعراض المحتوى
              </LinkButton>
            </div>

            <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="font-tajawal text-3xl font-black text-foreground">
                  +<span className="text-primary">12K</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  طالب نشط
                </div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="font-tajawal text-3xl font-black text-foreground">
                  <span className="text-primary">500</span>+
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  مسار أكاديمي
                </div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="font-tajawal text-3xl font-black text-foreground">
                  <span className="text-primary">98</span>%
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  رضا الطلاب
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Reels Feed preview (Guest-first) */}
        <section className="border-t border-white/10 py-16">
          <Container>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs font-extrabold tracking-[0.22em] text-primary">
                  Scientific Reels
                </div>
                <h2 className="mt-3 font-tajawal text-balance text-2xl font-black sm:text-3xl">
                  محتوى قصير يخليك “تدخل في الجو” فورًا
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">
                  شاهد بدون تسجيل — وعند الحفظ فقط نطلب تسجيل الدخول.
                </p>
              </div>
              <LinkButton
                href="/engagement"
                variant="outline"
                className="inline-flex"
              >
                فتح الريلز
              </LinkButton>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "كيف يضخ القلب الدم؟",
                  d: "فسيولوجيا · ٣ دقائق",
                  emoji: "🫀",
                },
                {
                  t: "الجهاز العصبي في ٥ دقائق",
                  d: "تشريح · ٥ دقائق",
                  emoji: "🧠",
                },
                {
                  t: "خطأ شائع في الباثولوجيا",
                  d: "باثولوجيا · ٢ دقائق",
                  emoji: "🔬",
                },
              ].map((r) => (
                <div
                  key={r.t}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-5 transition hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--brand-blue)/0.16),transparent_55%)]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid size-12 place-items-center rounded-2xl bg-white/5 text-2xl">
                        {r.emoji}
                      </div>
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition group-hover:bg-primary/10 group-hover:text-primary"
                        aria-label="تشغيل"
                      >
                        <Play className="size-4" />
                      </button>
                    </div>
                    <div className="mt-4 font-tajawal text-base font-black text-white">
                      {r.t}
                    </div>
                    <div className="mt-2 text-sm text-white/60">{r.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 py-20">
          <Container>
            <div className="text-center">
              <div className="text-xs font-extrabold tracking-[0.22em] text-primary">
                لماذا جاتوري
              </div>
              <h2 className="mt-4 font-tajawal text-balance text-3xl font-black sm:text-4xl">
                كل ما تحتاجه في مكان واحد
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                لسنا مكتبة محتوى — نحن نظام تشغيل لحياتك الأكاديمية.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <Card
                  key={f.title}
                  className="group relative overflow-hidden border-white/10 bg-card/80 transition hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--primary)/0.10),transparent_60%)]" />
                  <CardContent className="relative p-7">
                    <div className="grid size-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <f.icon className="size-5" />
                    </div>
                    <div className="mt-4 font-tajawal text-lg font-black">{f.title}</div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-card/60 py-20">
          <Container>
            <div className="text-center">
              <div className="text-xs font-extrabold tracking-[0.22em] text-[#1D9E75]">
                رحلة الطالب
              </div>
              <h2 className="mt-4 font-tajawal text-balance text-3xl font-black sm:text-4xl">
                من الحيرة إلى الإتقان
              </h2>
            </div>

            <div className="mt-12 flex gap-0 overflow-x-auto pb-2">
              {journey.map((s) => (
                <div
                  key={s.n}
                  className="relative min-w-[180px] flex-1 px-4 text-center"
                >
                  <div
                    className={
                      s.active
                        ? "mx-auto grid size-10 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                        : "mx-auto grid size-10 place-items-center rounded-full border border-white/15 bg-background text-sm font-black text-muted-foreground"
                    }
                  >
                    {s.n}
                  </div>
                  <div className="mt-4 font-tajawal text-sm font-black text-foreground">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs leading-6 text-muted-foreground">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="cta" className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-10 sm:p-14">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand-cyan)/0.12),transparent_60%)]" />
                <h2 className="relative font-tajawal text-balance text-3xl font-black sm:text-4xl">
                  ابدأ رحلتك اليوم
                  <br />
                  <span className="text-primary">مجاناً تماماً</span>
                </h2>
                <p className="relative mx-auto mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                  انضم لآلاف الطلاب الذين يبنون مستقبلهم الأكاديمي بذكاء.
                </p>

                <div className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="h-11 border-white/15 bg-background/60"
                  />
                  <Button className="h-11 whitespace-nowrap px-6 font-extrabold">
                    ابدأ الآن
                  </Button>
                </div>

                <div className="relative mt-4 text-xs text-white/40">
                  لا يُطلب بطاقة ائتمان · مجاني للأبد على الخطة الأساسية
                </div>
              </div>
            </div>
          </Container>
        </section>

        <footer className="border-t border-white/10 py-10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2 font-tajawal font-black">
                <BrandMark variant="icon" />
                <span>جاتوري</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
                <a className="hover:text-white/70" href="#">
                  الخصوصية
                </a>
                <a className="hover:text-white/70" href="#">
                  الشروط
                </a>
                <a className="hover:text-white/70" href="#">
                  تواصل معنا
                </a>
                <a className="hover:text-white/70" href="#">
                  المدونة
                </a>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-white/35">
              © {new Date().getFullYear()} جاتوري — جميع الحقوق محفوظة
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
