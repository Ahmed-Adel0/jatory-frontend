"use client";

import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  FileText,
  Flame,
  Map,
  Target,
  Vault,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useAuthGuard } from "@/features/auth/use-auth-guard";

const currentRoadmap = {
  title: "محلل بيانات (Data Analyst)",
  slug: "data-analyst",
  progress: 42,
  nextStep: "SQL أساسيات + تمارين تحليل بيانات",
};

const recommendations = [
  {
    title: "ركّز هذا الأسبوع: SQL",
    desc: "ابدأ بـ SELECT / WHERE / JOIN، ثم طبّق على مجموعة بيانات بسيطة.",
    icon: FileText,
    badge: "توصية ذكية",
  },
  {
    title: "مهمة قصيرة: لوحة متابعة",
    desc: "أنشئ Dashboard بسيط في Excel/Sheets لتتبع التقدّم.",
    icon: Target,
    badge: "10 دقائق",
  },
  {
    title: "مراجعة سريعة: إحصاء",
    desc: "متوسط/وسيط/انحراف معياري + أمثلة تطبيقية.",
    icon: Flame,
    badge: "أساسيات",
  },
] as const;

const roadmapChecklist = [
  { label: "مقدمة في تحليل البيانات", done: true },
  { label: "Excel/Sheets أساسيات", done: true },
  { label: "SQL أساسيات", done: false },
  { label: "Python للبيانات (Pandas)", done: false },
  { label: "مشروع بورتفوليو #1", done: false },
] as const;

export default function StudentDashboardPage() {
  const { guard } = useAuthGuard();
  const progressValue = currentRoadmap.progress;

  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        <Container className="py-10 sm:py-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="secondary">لوحة الطالب</Badge>
              <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
                مرحبًا! لنرتّب مسارك اليوم.
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                هذه الصفحة تعرض مسارك الحالي، التقدّم، وتوصيات ذكية — جاهزة
                لربطها لاحقًا ببيانات المستخدم الفعلية.
              </p>
            </div>

            <div className="mt-4 flex gap-2 sm:mt-0">
              <LinkButton
                href="/courses"
                variant="outline"
                className="inline-flex gap-2"
              >
                استكشاف المناهج <ArrowLeft className="size-4" />
              </LinkButton>
              <LinkButton
                href={`/roadmaps/${currentRoadmap.slug}`}
                className="inline-flex gap-2"
              >
                فتح المسار <Map className="size-4" />
              </LinkButton>
            </div>
          </div>

          {/* Full-screen-ish progress reward */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-card/70"
          >
            <div className="relative p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand-blue)/0.14),transparent_55%)]" />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-black text-white">
                    شريط الإنجاز
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    كل إنجاز يقرّبك خطوة… ويزيد نقاطك.
                  </div>
                </div>
                <Button
                  className="h-11 font-black"
                  onClick={() =>
                    guard(
                      {
                        reason:
                          "باقي خطوة واحدة عشان نبدأ نحسب نقاطك ونخزن تقدمك — سجل دخولك.",
                      },
                      () => {
                        // eslint-disable-next-line no-alert
                        alert("تمت متابعة التقدم (وضع تجريبي).");
                      },
                    )
                  }
                >
                  متابعة التقدم
                </Button>
              </div>

              <div className="relative mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-white/45">
                  <span>الإنجاز الحالي</span>
                  <span className="font-black text-primary">
                    {progressValue}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progressValue}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <Card className="lg:col-span-7">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3 text-base">
                  <span>المسار الحالي</span>
                  <Badge className="gap-2" variant="secondary">
                    <Brain className="size-4" />
                    توصيات مفعّلة
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">
                      {currentRoadmap.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      الخطوة التالية: {currentRoadmap.nextStep}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary">
                      {currentRoadmap.progress}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      اكتمال المسار
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Progress value={currentRoadmap.progress} />
                </div>

                <Separator className="my-6" />

                <div className="grid gap-2">
                  <div className="text-sm font-semibold">
                    قائمة الطريق (مختصر)
                  </div>
                  <div className="grid gap-2">
                    {roadmapChecklist.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-xl border bg-card px-4 py-3"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2
                            className={
                              item.done
                                ? "size-4 text-emerald-600"
                                : "size-4 text-muted-foreground"
                            }
                          />
                          <span className={item.done ? "opacity-75" : ""}>
                            {item.label}
                          </span>
                        </div>
                        <Badge variant={item.done ? "secondary" : "outline"}>
                          {item.done ? "مكتمل" : "قادم"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-5">
              <CardHeader>
                <CardTitle className="text-base">توصيات ذكية (اليوم)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {recommendations.map((r) => (
                  <div key={r.title} className="rounded-xl border bg-card p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2">
                        <r.icon className="mt-0.5 size-4 text-primary" />
                        <div>
                          <div className="text-sm font-semibold">{r.title}</div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {r.desc}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{r.badge}</Badge>
                    </div>
                  </div>
                ))}

                <LinkButton
                  href={`/roadmaps/${currentRoadmap.slug}`}
                  variant="outline"
                  className="mt-2 inline-flex w-full justify-center gap-2"
                >
                  عرض كل خطوات المسار <ArrowLeft className="size-4" />
                </LinkButton>
              </CardContent>
            </Card>
          </div>

          {/* Career Gap Analysis + My Data Hub */}
          <div className="mt-6 grid gap-4 lg:grid-cols-12">
            <Card className="lg:col-span-7">
              <CardHeader>
                <CardTitle className="text-base">
                  تحليل فجوة المهارات (Skill Matching)
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  {
                    title: "إحصاء تطبيقي",
                    uni: "تدرسه: متوسط",
                    market: "السوق: مرتفع",
                    tip: "طبّق على مشاريع صغيرة أسبوعياً.",
                  },
                  {
                    title: "عرض النتائج (Storytelling)",
                    uni: "تدرسه: منخفض",
                    market: "السوق: مرتفع",
                    tip: "اعمل ملخص صفحة واحدة لكل موضوع.",
                  },
                  {
                    title: "مشروع بورتفوليو",
                    uni: "تدرسه: غير واضح",
                    market: "السوق: أساسي",
                    tip: "ابدأ مشروع واحد واتركه يثبت تقدمك.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/10 bg-background/30 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-black text-white">
                          {c.title}
                        </div>
                        <div className="mt-1 text-sm text-white/60">
                          {c.tip}
                        </div>
                      </div>
                      <Badge
                        className="bg-primary/10 text-primary"
                        variant="secondary"
                      >
                        فجوة
                      </Badge>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
                        {c.uni}
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
                        {c.market}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Vault className="size-4 text-primary" />
                  My Data Hub (المخزن الشخصي)
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  {
                    title: "ملفات PDF",
                    desc: "محاضراتك وكتبك المرتبة",
                    count: "12",
                  },
                  { title: "ملاحظات", desc: "ملخصاتك وأسئلتك", count: "34" },
                  { title: "اختبارات", desc: "نتائج ومحاولات", count: "7" },
                  { title: "روابط مهمة", desc: "مصادر منظمة", count: "18" },
                ].map((i) => (
                  <button
                    key={i.title}
                    type="button"
                    onClick={() =>
                      guard(
                        {
                          reason:
                            "التخزين الشخصي يحتاج تسجيل دخول لحفظ ملفاتك بأمان.",
                        },
                        () => {
                          // eslint-disable-next-line no-alert
                          alert(`فتح ${i.title} (وضع تجريبي).`);
                        },
                      )
                    }
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/30 px-4 py-3 text-right transition hover:bg-white/5"
                  >
                    <div>
                      <div className="text-sm font-black text-white">
                        {i.title}
                      </div>
                      <div className="mt-1 text-xs text-white/50">{i.desc}</div>
                    </div>
                    <div className="text-sm font-black text-primary">
                      {i.count}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
