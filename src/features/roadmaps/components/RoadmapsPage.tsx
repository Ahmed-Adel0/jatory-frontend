"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import {
  BookOpen, CheckCircle2, Clock, Lock, Play, Star, Trophy,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Progress } from "@/shared/components/ui/progress";

const roadmapSteps = [
  {
    id: 1, title: "أساسيات الفيزياء", desc: "مقدمة في الميكانيكا والحركة",
    status: "done", progress: 100, lessons: 8, quizzes: 2,
  },
  {
    id: 2, title: "الرياضيات التطبيقية", desc: "التفاضل والتكامل الأساسي",
    status: "done", progress: 100, lessons: 10, quizzes: 3,
  },
  {
    id: 3, title: "الكيمياء العضوية", desc: "المركبات والتفاعلات",
    status: "current", progress: 45, lessons: 12, quizzes: 4,
  },
  {
    id: 4, title: "البيولوجيا الجزيئية", desc: "الخلية والحمض النووي",
    status: "locked", progress: 0, lessons: 9, quizzes: 3,
  },
  {
    id: 5, title: "الإحصاء الحيوي", desc: "تحليل البيانات الطبية",
    status: "locked", progress: 0, lessons: 7, quizzes: 2,
  },
];

const statusIcon: Record<string, React.ReactNode> = {
  done: <CheckCircle2 className="h-6 w-6 text-green-400" />,
  current: <Play className="h-6 w-6 text-primary" />,
  locked: <Lock className="h-6 w-6 text-muted-foreground/40" />,
};

export function RoadmapsPage() {
  const totalProgress = Math.round(
    roadmapSteps.reduce((a, s) => a + s.progress, 0) / roadmapSteps.length
  );

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 glow-border"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-heading font-bold">مسارك التعليمي</h1>
              <p className="text-sm text-muted-foreground">طب القاهرة • السنة الثانية</p>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="font-bold text-foreground">المستوى 8</span>
            </div>
          </div>
          <Progress value={totalProgress} className="h-3 mb-2" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">التقدم الكلي</span>
            <span className="font-bold text-primary">{totalProgress}%</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute right-[23px] top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-6">
            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  step.status === "done" ? "bg-green-400/10" :
                  step.status === "current" ? "bg-primary/10 animate-pulse-glow" :
                  "bg-secondary"
                }`}>
                  {statusIcon[step.status]}
                </div>

                {/* Card */}
                <div className={`flex-1 glass-card rounded-xl p-5 transition-all ${
                  step.status === "current" ? "glow-border" : ""
                } ${step.status === "locked" ? "opacity-50" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold">{step.title}</h3>
                    {step.status === "done" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400">مكتمل</span>
                    )}
                    {step.status === "current" && (
                      <Link href="/courses">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-1 text-xs">
                          <Play className="h-3 w-3" /> أكمل
                         </Button>
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
                  {step.status !== "locked" && (
                    <Progress value={step.progress} className="h-1.5 mb-2" />
                  )}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {step.lessons} درس</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {step.quizzes} اختبار</span>
                    {step.status !== "locked" && (
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {step.progress}%</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
