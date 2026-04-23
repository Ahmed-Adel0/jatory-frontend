import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Route, Zap, BarChart3, GraduationCap, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const steps = [
  { icon: Brain, title: "أدخل بياناتك", desc: "كليتك، سنتك، وهدفك الأكاديمي" },
  { icon: Route, title: "احصل على مسارك", desc: "خطة مخصصة بالذكاء الاصطناعي" },
  { icon: Zap, title: "ابدأ التنفيذ", desc: "تعلّم يوم بيوم مع متابعة ذكية" },
];

const stats = [
  { value: "+10K", label: "طالب نشط" },
  { value: "50+", label: "كلية مدعومة" },
  { value: "98%", label: "رضا المستخدمين" },
  { value: "24/7", label: "مساعد AI" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background bg-grid rtl">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-card border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <span className="text-2xl font-heading font-bold text-gradient">Jatory</span>
          <div className="flex items-center gap-4">
            <Link to="/ai-navigator">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                جرب AI Navigator
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                ابدأ رحلتك
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container relative text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              AI Academic Operating System
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            ارسم مسارك العلمي
            <br />
            <span className="text-gradient">بالذكاء الاصطناعي</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            منصة Jatory تحوّل رحلتك الأكاديمية لنظام ذكي يوجهك يوم بيوم — من أول يوم جامعة لحد ما توصل لهدفك
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Link to="/ai-navigator">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-lg animate-pulse-glow">
                <Brain className="ml-2 h-5 w-5" />
                جرب AI Navigator
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-border hover:bg-secondary">
                ابدأ رحلتك
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            كيف يعمل <span className="text-gradient">Jatory</span>؟
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-8 text-center group hover:glow-border transition-all duration-500"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">الخطوة {i + 1}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="glass-card rounded-3xl p-2 glow-border max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl bg-card p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground mr-4">Jatory Dashboard</span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <PreviewCard icon={BarChart3} title="التقدم الكلي" value="67%" color="text-primary" />
                <PreviewCard icon={GraduationCap} title="المواد المكتملة" value="12/18" color="text-green-400" />
                <PreviewCard icon={Star} title="المستوى" value="متقدم" color="text-yellow-400" />
              </div>
              <div className="mt-8 glass-card rounded-xl p-6">
                <h4 className="font-heading font-bold mb-4 text-foreground">المسار الحالي</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-primary font-bold">67%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="container text-center">
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
            "Jatory غيّر طريقة دراستي تماماً — كل يوم عارف أعمل إيه بالظبط"
          </p>
          <div className="flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">أحمد — طب القاهرة</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <motion.div
            className="glass-card glow-border rounded-3xl p-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              جاهز تبدأ رحلتك؟
            </h2>
            <p className="text-muted-foreground mb-8">
              انضم لآلاف الطلاب اللي بيستخدموا Jatory كل يوم
            </p>
            <Link to="/ai-navigator">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-lg">
                ابدأ الآن مجاناً
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Jatory — AI Academic Operating System
        </div>
      </footer>
    </div>
  );
}

function PreviewCard({ icon: Icon, title, value, color }: { icon: any; title: string; value: string; color: string }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`h-5 w-5 ${color}`} />
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className={`text-2xl font-heading font-bold ${color}`}>{value}</div>
    </div>
  );
}
