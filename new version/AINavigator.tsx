import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Brain, CheckCircle2, GraduationCap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const colleges = ["طب", "هندسة", "علوم حاسب", "صيدلة", "تجارة", "حقوق", "آداب", "علوم", "إعلام", "تربية"];
const years = ["السنة الأولى", "السنة الثانية", "السنة الثالثة", "السنة الرابعة", "السنة الخامسة", "السنة السادسة"];
const goals = [
  { id: "pass", title: "النجاح والتفوق", desc: "أبغى أنجح بتقدير عالي", icon: GraduationCap },
  { id: "work", title: "سوق العمل", desc: "أبغى أجهز نفسي للشغل", icon: Target },
  { id: "research", title: "البحث العلمي", desc: "أبغى أكمل دراسات عليا", icon: Brain },
];

export default function AINavigator() {
  const [step, setStep] = useState(0);
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const canNext = step === 0 ? !!college : step === 1 ? !!year : !!goal;

  const handleFinish = () => navigate("/roadmap");

  return (
    <div className="min-h-screen bg-background bg-grid rtl flex flex-col">
      {/* Header */}
      <nav className="h-16 flex items-center px-6 border-b border-border/50 glass-card">
        <Link to="/" className="text-xl font-heading font-bold text-gradient">Jatory</Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {[0, 1, 2].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all ${
                  s < step ? "bg-primary text-primary-foreground" :
                  s === step ? "bg-primary/20 text-primary border-2 border-primary" :
                  "bg-secondary text-muted-foreground"
                }`}>
                  {s < step ? <CheckCircle2 className="h-4 w-4" /> : s + 1}
                </div>
                {s < 2 && <div className={`flex-1 h-0.5 ${s < step ? "bg-primary" : "bg-secondary"}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <StepWrapper key="college">
                <h2 className="text-2xl font-heading font-bold mb-2">اختر كليتك</h2>
                <p className="text-muted-foreground mb-8">عشان نخصص مسارك صح</p>
                <div className="grid grid-cols-2 gap-3">
                  {colleges.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCollege(c)}
                      className={`p-4 rounded-xl text-sm font-medium transition-all ${
                        college === c
                          ? "bg-primary/20 text-primary border border-primary/40 glow-border"
                          : "glass-card hover:bg-secondary/50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 1 && (
              <StepWrapper key="year">
                <h2 className="text-2xl font-heading font-bold mb-2">السنة الدراسية</h2>
                <p className="text-muted-foreground mb-8">أنت في أي سنة دلوقتي؟</p>
                <div className="grid grid-cols-2 gap-3">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setYear(y)}
                      className={`p-4 rounded-xl text-sm font-medium transition-all ${
                        year === y
                          ? "bg-primary/20 text-primary border border-primary/40 glow-border"
                          : "glass-card hover:bg-secondary/50"
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 2 && (
              <StepWrapper key="goal">
                <h2 className="text-2xl font-heading font-bold mb-2">إيه هدفك؟</h2>
                <p className="text-muted-foreground mb-8">عشان Satory يبني مسار يناسبك</p>
                <div className="space-y-4">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl text-right transition-all ${
                        goal === g.id
                          ? "bg-primary/20 text-primary border border-primary/40 glow-border"
                          : "glass-card hover:bg-secondary/50"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <g.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{g.title}</h3>
                        <p className="text-xs text-muted-foreground">{g.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-10">
            <Button
              variant="outline"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="rounded-full gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              السابق
            </Button>
            {step < 2 ? (
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2"
              >
                التالي
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                disabled={!canNext}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 animate-pulse-glow"
              >
                <Brain className="h-4 w-4" />
                ابني مساري
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
