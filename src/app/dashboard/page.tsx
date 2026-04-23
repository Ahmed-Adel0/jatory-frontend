"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  BarChart3, BookOpen, Brain, CheckCircle2, Clock, Film,
  Flame, GraduationCap, Play, Sparkles, Star, TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const todayTasks = [
  { title: "محاضرة الفيزياء - الفصل 5", done: true },
  { title: "حل تمارين الرياضيات", done: true },
  { title: "مراجعة الكيمياء العضوية", done: false },
  { title: "اختبار قصير - البيولوجيا", done: false },
];

const recommendations = [
  { title: "أساسيات البرمجة بـ Python", type: "كورس", icon: BookOpen },
  { title: "كيف تنظم وقتك للامتحانات", type: "Reel", icon: Film },
  { title: "تطبيق عملي: تحليل بيانات", type: "تمرين", icon: Brain },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">أهلاً، أحمد 👋</h1>
              <p className="text-muted-foreground">خلينا نكمل رحلتك النهاردة</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Flame className="h-5 w-5 text-orange-400" />
              <span className="font-bold text-foreground">7</span>
              <span className="text-muted-foreground">أيام متتالية</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BarChart3, label: "التقدم الكلي", value: "67%", color: "text-primary" },
            { icon: GraduationCap, label: "المواد المكتملة", value: "12", color: "text-green-400" },
            { icon: Star, label: "المستوى", value: "Lv. 8", color: "text-yellow-400" },
            { icon: TrendingUp, label: "هذا الأسبوع", value: "+15%", color: "text-primary" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-xl p-5"
              initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
              <div className={`text-2xl font-heading font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Continue Learning + Today Plan */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Continue Learning */}
          <motion.div
            className="lg:col-span-3 glass-card rounded-2xl p-6 glow-border"
            initial="hidden" animate="visible" variants={fadeUp} custom={5}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-bold text-lg">أكمل التعلم</h2>
              <Link href="/update">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                  <Play className="h-4 w-4" />
                  أكمل
                </Button>
              </Link>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm">الفيزياء - الحركة والقوة</h3>
                  <p className="text-xs text-muted-foreground">الفصل 5 • الدرس 3</p>
                </div>
              </div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">45% مكتمل</p>
            </div>
          </motion.div>

          {/* Today Plan */}
          <motion.div
            className="lg:col-span-2 glass-card rounded-2xl p-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={6}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-primary" />
              <h2 className="font-heading font-bold text-lg">خطة اليوم</h2>
            </div>
            <div className="space-y-3">
              {todayTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className={`h-5 w-5 shrink-0 ${task.done ? "text-green-400" : "text-muted-foreground/30"}`} />
                  <span className={`text-sm ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={7}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="font-heading font-bold text-lg">اقتراحات Jatory</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendations.map((rec, i) => (
              <div key={i} className="glass-card rounded-xl p-5 hover:glow-border transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <rec.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{rec.type}</span>
                </div>
                <h3 className="font-bold text-sm">{rec.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

