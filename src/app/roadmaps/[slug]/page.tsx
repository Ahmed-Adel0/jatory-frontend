import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code,
  Compass,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type RoadmapStep = {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  outcome: string;
};

const steps: RoadmapStep[] = [
  {
    id: "uni-foundations",
    title: "أساسيات الجامعة",
    desc: "أثبت الأساسيات: رياضيات + إحصاء + مهارات كتابة تقارير.",
    icon: BookOpen,
    duration: "2–4 أسابيع",
    outcome: "فهم قوي للمفاهيم وتطبيقات بسيطة.",
  },
  {
    id: "sql",
    title: "SQL عملي",
    desc: "SELECT / JOIN / GROUP BY + تمارين على بيانات حقيقية.",
    icon: Code,
    duration: "2–3 أسابيع",
    outcome: "استعلامات سليمة + تقارير أولية.",
  },
  {
    id: "analysis-tools",
    title: "أدوات التحليل",
    desc: "Excel/Sheets + أساسيات تصور البيانات ومقاييس الأعمال.",
    icon: Compass,
    duration: "1–2 أسبوع",
    outcome: "لوحات بسيطة وقراءة مؤشرات.",
  },
  {
    id: "portfolio",
    title: "مشاريع بورتفوليو",
    desc: "مشروع 1: تنظيف بيانات + تحليل + نتائج قابلة للعرض.",
    icon: BadgeCheck,
    duration: "2 أسابيع",
    outcome: "مشروع جاهز للنشر على GitHub/Notion.",
  },
  {
    id: "job-ready",
    title: "الجاهزية لسوق العمل",
    desc: "CV، LinkedIn، مقابلات، وتمارين Case Study.",
    icon: Briefcase,
    duration: "1–2 أسبوع",
    outcome: "ملف تقديم احترافي وثقة بالمقابلات.",
  },
] as const;

function RoadmapTimeline() {
  return (
    <div className="relative">
      <div className="absolute right-[18px] top-0 hidden h-full w-px bg-border sm:block" />

      <div className="grid gap-4">
        {steps.map((s, idx) => (
          <Card key={s.id} className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_20%_20%,hsl(var(--primary)/0.08),transparent_55%)]" />
            <CardHeader className="pb-3">
              <CardTitle className="flex items-start justify-between gap-3 text-base">
                <div className="flex items-start gap-3">
                  <div className="hidden sm:flex">
                    <div className="relative">
                      <div className="grid size-9 place-items-center rounded-xl border bg-background">
                        <s.icon className="size-4 text-primary" />
                      </div>
                      <div className="absolute right-1/2 top-1/2 hidden size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary sm:block" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{s.title}</span>
                      <Badge variant="secondary">{s.duration}</Badge>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                </div>

                <Badge variant="outline">المرحلة {idx + 1}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Separator />
              <div className="text-sm">
                <span className="font-semibold">المخرجات</span>
                <div className="mt-1 text-muted-foreground">{s.outcome}</div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button variant="outline" className="sm:w-auto">
                  عرض الموارد (قريبًا)
                </Button>
                <Button variant="secondary" className="sm:w-auto">
                  وضع كهدف للأسبوع
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default async function CareerRoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title =
    slug === "data-analyst" ? "محلل بيانات (Data Analyst)" : "مسار مهني";

  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        <Container className="py-10 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="secondary" className="gap-2">
                <Sparkles className="size-4" />
                المسار المهني
              </Badge>
              <h1 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                تصور بصري (Timeline) يوضح الطريق من الجامعة إلى سوق العمل — جاهز
                لربطه لاحقًا ببيانات المستخدم، المهارات، والموارد.
              </p>
            </div>

            <div className="flex gap-2">
              <LinkButton
                href="/dashboard"
                variant="outline"
                className="inline-flex gap-2"
              >
                العودة للوحة الطالب <ArrowLeft className="size-4" />
              </LinkButton>
              <LinkButton href="/courses" className="inline-flex gap-2">
                استكشاف مواد مرتبطة <ArrowLeft className="size-4" />
              </LinkButton>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle className="text-base">ملخص سريع</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <div className="rounded-xl border bg-card p-4">
                  <div className="font-semibold">الهدف</div>
                  <div className="mt-1 text-muted-foreground">
                    بناء مهارات قابلة للتوظيف + مشروع/مشاريع بورتفوليو.
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-4">
                  <div className="font-semibold">المدة المتوقعة</div>
                  <div className="mt-1 text-muted-foreground">
                    8–12 أسبوع (حسب وقتك الأسبوعي).
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-4">
                  <div className="font-semibold">المخرجات</div>
                  <div className="mt-1 text-muted-foreground">
                    مشروع تحليلي + سيرة ذاتية + ملف LinkedIn قوي.
                  </div>
                </div>
                <Button className="w-full" variant="secondary">
                  توليد خطة مخصصة (قريبًا)
                </Button>
              </CardContent>
            </Card>

            <div className="lg:col-span-8">
              <RoadmapTimeline />
            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}

