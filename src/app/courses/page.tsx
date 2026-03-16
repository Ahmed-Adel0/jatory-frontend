import { Building2, Filter, FlaskConical, Layers, Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Department = {
  id: string;
  college: string;
  name: string;
  tags: string[];
  sampleCourses: string[];
};

const departments: Department[] = [
  {
    id: "chem",
    college: "كلية العلوم",
    name: "قسم الكيمياء",
    tags: ["مختبر", "تحليل", "عضوية"],
    sampleCourses: ["كيمياء عامة", "كيمياء عضوية", "كيمياء تحليلية"],
  },
  {
    id: "phys",
    college: "كلية العلوم",
    name: "قسم الفيزياء",
    tags: ["نظري", "تجارب", "رياضيات"],
    sampleCourses: ["ميكانيكا", "كهرباء ومغناطيسية", "فيزياء حديثة"],
  },
  {
    id: "bio",
    college: "كلية العلوم",
    name: "قسم الأحياء",
    tags: ["مختبر", "وراثة", "خلايا"],
    sampleCourses: ["علم الخلية", "وراثة", "أحياء دقيقة"],
  },
  {
    id: "cs",
    college: "كلية الحاسبات",
    name: "علوم الحاسب",
    tags: ["برمجة", "خوارزميات", "أنظمة"],
    sampleCourses: ["هياكل بيانات", "خوارزميات", "نظم تشغيل"],
  },
  {
    id: "ds",
    college: "كلية الحاسبات",
    name: "علوم البيانات",
    tags: ["تحليل", "إحصاء", "تعلم آلي"],
    sampleCourses: ["إحصاء", "Python للبيانات", "تصور بيانات"],
  },
];

const filters = [
  { id: "all", label: "الكل", icon: Filter },
  { id: "science", label: "العلوم", icon: FlaskConical },
  { id: "computing", label: "الحاسبات", icon: Layers },
] as const;

export default function CourseExplorerPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        <Container className="py-10 sm:py-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="secondary">مستعرض المناهج</Badge>
              <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
                استكشف الكليات والأقسام بسرعة
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                واجهة نظيفة لعرض الأقسام مع فلترة سريعة — جاهزة لربطها لاحقًا
                ببيانات جامعتك/خطتك الدراسية.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-12 md:items-center">
            <div className="relative md:col-span-8">
              <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pr-10" placeholder="ابحث عن قسم أو مادة…" />
            </div>
            <div className="md:col-span-4">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {filters.map((f) => (
                    <TabsTrigger key={f.id} value={f.id} className="gap-2">
                      <f.icon className="size-4" />
                      <span className="hidden sm:inline">{f.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <Card key={d.id} className="transition hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-3 text-base">
                    <span>{d.name}</span>
                    <Badge variant="outline" className="gap-2">
                      <Building2 className="size-3.5" />
                      {d.college}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    أمثلة مواد:
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      {d.sampleCourses.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    فتح القسم
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}

