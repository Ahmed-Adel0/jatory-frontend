import {
  ArrowLeft,
  Brain,
  Compass,
  FlaskConical,
  GraduationCap,
  Layers,
  Map,
  Search,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const quickMajors = [
  { label: "كيمياء", icon: FlaskConical },
  { label: "فيزياء", icon: Layers },
  { label: "أحياء", icon: GraduationCap },
  { label: "علوم بيانات", icon: Brain },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(900px_circle_at_80%_10%,hsl(var(--primary)/0.12),transparent_50%)]" />
          <Container className="py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Badge className="mb-4" variant="secondary">
                  النسخة الأولية MVP
                </Badge>
                <h1 className="text-balance text-3xl font-bold leading-tight sm:text-5xl">
                  من <span className="text-primary">التشتت</span> إلى{" "}
                  <span className="text-primary">الترتيب</span>… في 3 نقرات.
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                  Jatory يساعد طلاب العلوم على تحويل المواد والاهتمامات إلى مسار
                  مهني واضح عبر محتوى أكاديمي منظم، توصيات ذكية، وخرائط طريق
                  عملية.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <LinkButton href="/dashboard" className="inline-flex gap-2">
                    ابدأ من لوحة الطالب <ArrowLeft className="size-4" />
                  </LinkButton>
                  <LinkButton
                    href="/courses"
                    variant="outline"
                    className="inline-flex gap-2"
                  >
                    استكشف التخصصات <Compass className="size-4" />
                  </LinkButton>
                  <LinkButton
                    href="/roadmaps/data-analyst"
                    variant="ghost"
                    className="inline-flex gap-2"
                  >
                    شاهد مسارًا جاهزًا <Map className="size-4" />
                  </LinkButton>
                </div>

                <div className="mt-10">
                  <div className="text-sm font-semibold">بحث سريع عن التخصص</div>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <div className="relative w-full">
                      <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        className="pr-10"
                        placeholder="اكتب: كيمياء… فيزياء… أحياء…"
                        aria-label="بحث عن تخصص"
                      />
                    </div>
                    <LinkButton href="/courses" className="inline-flex gap-2">
                      بحث <ArrowLeft className="size-4" />
                    </LinkButton>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {quickMajors.map(({ label, icon: Icon }) => (
                      <LinkButton
                        key={label}
                        href="/courses"
                        variant="secondary"
                        className="inline-flex gap-2"
                      >
                        <Icon className="size-4" />
                        {label}
                      </LinkButton>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card className="border-muted/60">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      “ثلاث نقرات” في الممارسة
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3 text-sm">
                    <div className="rounded-xl border bg-card p-4">
                      <div className="font-semibold">1) اختر تخصصك</div>
                      <div className="mt-1 text-muted-foreground">
                        من مستعرض المناهج والفلترة السريعة.
                      </div>
                    </div>
                    <div className="rounded-xl border bg-card p-4">
                      <div className="font-semibold">2) شاهد موادك + مهارات السوق</div>
                      <div className="mt-1 text-muted-foreground">
                        ربط المواد الجامعية بما يحتاجه السوق.
                      </div>
                    </div>
                    <div className="rounded-xl border bg-card p-4">
                      <div className="font-semibold">3) اتبع خارطة الطريق</div>
                      <div className="mt-1 text-muted-foreground">
                        خطوات عملية، موارد، ومهام قصيرة واضحة.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t bg-muted/15">
          <Container className="py-12 sm:py-16">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Brain className="size-4 text-primary" />
                    توصيات ذكية
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  اقتراحات مواد/مهارات بناءً على تخصصك وأهدافك.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Layers className="size-4 text-primary" />
                    تنظيم أكاديمي واضح
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  كليات ← أقسام ← مواد ← مهارات مرتبطة.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <GraduationCap className="size-4 text-primary" />
                    جاهز للربط بالبيانات
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  واجهات MVP قابلة للتوسّع وربطها بواجهات API لاحقًا.
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
