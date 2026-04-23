"use client";

import { motion } from "framer-motion";
import { Building2, Search, Filter, FlaskConical, Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const departments = [
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
    <div className="min-h-screen bg-background bg-grid rtl selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-2xl font-heading font-bold text-gradient">Jatory</Link>
          <div className="flex items-center gap-4">
             <Link href="/dashboard">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                اللوحة
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1">مستعرض المناهج</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              استكشف الكليات <span className="text-gradient">والأقسام</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-12">
              واجهة ذكية لعرض الأقسام العلمية مع نظام فلترة وبحث متطور. ابحث عن موادك واكتشف مساراتك الأكاديمية القادمة بكل سهولة.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ابحث عن قسم أو مادة…"
                className="h-12 pr-12 bg-secondary/50 border-border/50 focus:border-primary/50 transition-all rounded-xl"
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="h-12 bg-secondary/50 border border-border/50 rounded-xl p-1 grid grid-cols-3 md:flex md:w-auto">
                {filters.map((f) => (
                  <TabsTrigger key={f.id} value={f.id} className="gap-2 px-6 rounded-lg data-[state=active]:bg-card transition-all">
                    <f.icon className="h-4 w-4" />
                    <span>{f.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Departments Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((d, i) => (
              <motion.div
                key={d.id}
                initial="hidden" animate="visible" variants={fadeUp} custom={i + 2}
              >
                <Card className="glass-card hover:glow-border transition-all duration-300 border-border/50 group h-full flex flex-col justify-between overflow-hidden">
                  <div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="gap-2 border-border/50 py-1 px-3">
                          <Building2 className="h-3.5 w-3.5 text-primary" />
                          {d.college}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                        {d.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-wrap gap-2 text-right">
                        {d.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-foreground">أمثلة مواد :</p>
                        <div className="space-y-2">
                          {d.sampleCourses.map((c) => (
                            <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <CardContent className="pt-0">
                    <Link href={`/courses/${d.id}`}>
                      <Button variant="outline" className="w-full h-11 rounded-xl border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                        دخول القسم
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Jatory — AI Academic Operating System
          </p>
        </div>
      </footer>
    </div>
  );
}


