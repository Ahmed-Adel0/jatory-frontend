"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import {
  BookOpen, Brain, ChevronLeft, ChevronRight, Download,
  FileText, MessageCircle, Play, X,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";

const lessons = [
  { id: 1, title: "مقدمة في الحركة", duration: "12:30", done: true },
  { id: 2, title: "قوانين نيوتن", duration: "18:45", done: true },
  { id: 3, title: "الاحتكاك والمقاومة", duration: "15:20", current: true },
  { id: 4, title: "الشغل والطاقة", duration: "20:00" },
  { id: 5, title: "كمية الحركة", duration: "14:10" },
];

export function CoursePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
          {/* Video + Tabs */}
          <div className="min-w-0 space-y-4 sm:space-y-6 xl:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card overflow-hidden rounded-xl sm:rounded-2xl glow-border"
            >
              <div className="aspect-video bg-card flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <button className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/30 sm:h-20 sm:w-20">
                  <Play className="h-6 w-6 fill-primary text-primary sm:h-8 sm:w-8" />
                </button>
                <div className="absolute bottom-3 left-3 right-3 z-10 sm:bottom-4 sm:left-4 sm:right-4">
                  <h2 className="mb-1 font-heading text-base font-bold sm:text-lg">الاحتكاك والمقاومة</h2>
                  <p className="text-xs text-muted-foreground">الفيزياء • الفصل 5 • الدرس 3</p>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <Tabs defaultValue="content" className="w-full" dir="rtl">
              <TabsList className="h-auto w-full rounded-xl bg-secondary/50 p-1">
                <TabsTrigger value="content" className="flex-1 rounded-lg px-2 text-xs data-[state=active]:bg-card sm:text-sm">شرح</TabsTrigger>
                <TabsTrigger value="files" className="flex-1 rounded-lg px-2 text-xs data-[state=active]:bg-card sm:text-sm">ملفات</TabsTrigger>
                <TabsTrigger value="quiz" className="flex-1 rounded-lg px-2 text-xs data-[state=active]:bg-card sm:text-sm">أسئلة</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="glass-card mt-4 rounded-xl p-4 sm:p-6">
                <h3 className="font-heading font-bold mb-3">ملخص الدرس</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  في هذا الدرس هنتعلم عن قوى الاحتكاك وأنواعها: الاحتكاك السكوني والحركي. هنشوف إزاي بتأثر على حركة الأجسام وإزاي نحسبها باستخدام معامل الاحتكاك. كمان هنتعرف على المقاومة في السوائل والهواء.
                </p>
                <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm font-medium text-primary">💡 نقطة مهمة</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    قوة الاحتكاك السكوني دايماً أكبر من الحركي — عشان كده بداية تحريك الجسم أصعب من إكمال حركته
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="files" className="glass-card mt-4 rounded-xl p-4 sm:p-6">
                <div className="space-y-3">
                  {["ملخص الفصل 5.pdf", "تمارين محلولة.pdf", "شرائح المحاضرة.pptx"].map((f, i) => (
                    <div key={i} className="flex min-w-0 items-center justify-between gap-3 rounded-lg bg-secondary/30 p-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="truncate text-sm">{f}</span>
                      </div>
                      <Button size="sm" variant="ghost"><Download className="h-4 w-4" /></Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="quiz" className="glass-card mt-4 rounded-xl p-4 sm:p-6">
                <h3 className="font-heading font-bold mb-4">اختبر نفسك</h3>
                <div className="p-4 rounded-xl bg-secondary/30 mb-4">
                  <p className="text-sm font-medium mb-3">ما هو الفرق بين الاحتكاك السكوني والحركي؟</p>
                  <div className="space-y-2">
                    {["السكوني أكبر من الحركي", "الحركي أكبر من السكوني", "متساويين", "مافيش فرق"].map((a, i) => (
                      <button key={i} className="w-full text-right p-3 rounded-lg text-sm glass-card hover:bg-primary/10 hover:text-primary transition-all">
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Nav */}
            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <Button variant="outline" className="justify-center rounded-full gap-2">
                <ChevronRight className="h-4 w-4" /> الدرس السابق
              </Button>
              <Button className="justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                الدرس التالي <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar: Lessons List */}
          <div className="min-w-0 space-y-4 sm:space-y-6">
            <div className="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-5">
              <h3 className="font-heading font-bold mb-4">الدروس</h3>
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`w-full flex items-center gap-2 sm:gap-3 p-3 rounded-lg text-right text-sm transition-all ${
                      lesson.current
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : lesson.done
                        ? "text-muted-foreground"
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      lesson.current ? "bg-primary/20" : lesson.done ? "bg-green-400/10" : "bg-secondary"
                    }`}>
                      {lesson.done ? (
                        <BookOpen className="h-4 w-4 text-green-400" />
                      ) : (
                        <Play className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`${lesson.current ? "font-medium" : ""} truncate`}>{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-5">
              <h3 className="font-heading font-bold mb-3">ملاحظاتي</h3>
              <textarea
                placeholder="اكتب ملاحظاتك هنا..."
                className="w-full h-32 bg-secondary/30 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Satory FAB */}
        {!chatOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg animate-pulse-glow sm:bottom-6 sm:left-6 sm:h-14 sm:w-14"
            onClick={() => setChatOpen(true)}
          >
            <Brain className="h-6 w-6" />
          </motion.button>
        )}

        {/* Satory Chat */}
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed inset-x-3 bottom-3 z-50 max-h-[calc(100vh-1.5rem)] overflow-hidden rounded-2xl glass-card glow-border sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-80"
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold text-sm">Satory</span>
              </div>
              <button onClick={() => setChatOpen(false)}>
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="h-56 overflow-auto p-4 sm:h-64">
              <div className="glass-card rounded-xl p-3 mb-3">
                <p className="text-sm">أهلاً! 👋 أنا ساتوري، مساعدك الذكي. اسألني أي سؤال عن الدرس الحالي</p>
              </div>
              <div className="space-y-2">
                {["لخصلي الدرس", "اشرحلي الاحتكاك", "اديني أسئلة"].map((s, i) => (
                  <button key={i} className="w-full text-right px-3 py-2 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-3 border-t border-border/50">
              <div className="flex items-center gap-2">
                <input
                  placeholder="اسأل Satory..."
                  className="flex-1 h-9 bg-secondary/50 rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
                />
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
