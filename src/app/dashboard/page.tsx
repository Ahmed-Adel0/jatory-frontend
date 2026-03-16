import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  FileText,
  Flame,
  Map,
  Target,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

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
                هذه الصفحة تعرض مسارك الحالي، التقدّم، وتوصيات ذكية — جاهزة لربطها
                لاحقًا ببيانات المستخدم الفعلية.
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
                  <div className="text-sm font-semibold">قائمة الطريق (مختصر)</div>
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
                  <div
                    key={r.title}
                    className="rounded-xl border bg-card p-4"
                  >
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
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}

