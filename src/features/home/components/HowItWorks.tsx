"use client";

import { User, Layers, CheckCircle } from "lucide-react";
import { Container } from "@/shared/layout/container";

export function HowItWorks() {

  const steps = [
    {
      num: "01",
      title: "أدخل بياناتك",
      desc: "أخبر Jatory عن كليتك، سنتك الدراسية، واهتماماتك الأكاديمية. كل ده في أقل من دقيقتين بدون تعقيد.",
      tag: "AI Navigator",
      icon: <User className="size-5" />,
    },
    {
      num: "02",
      title: "احصل على مسارك",
      desc: "الذكاء الاصطناعي يبني لك خارطة طريق مخصصة بالكامل، مع أولويات واضحة ومحتوى موجّه حسب وضعك بالظبط.",
      tag: "Personalized Roadmap",
      icon: <Layers className="size-5" />,
    },
    {
      num: "03",
      title: "ابدأ التنفيذ",
      desc: "Dashboard يومي، مهام محددة، ومساعد Satory الذكي معاك في كل خطوة. بدون تشتت، بدون حيرة.",
      tag: "Daily Execution",
      icon: <CheckCircle className="size-5" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="reveal border-t border-white/5 bg-[#0C0F12]/50"
    >
      <Container className="py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[#0dcfcf]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0dcfcf]">
              كيف يعمل Jatory
            </span>
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-4 tracking-tight">
            ثلاث خطوات تغير مسارك
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base">
            من الحيرة إلى خارطة طريق مخصصة في أقل من دقيقتين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-white/5 bg-[#111418] overflow-hidden">
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="reveal p-10 relative group border-b md:border-b-0 md:border-e border-white/5 last:border-0 hover:bg-[#181C21] transition-colors"
            >
              <div className="absolute top-6 left-8 font-black text-[64px] text-white/[0.03] leading-none pointer-events-none select-none">
                {step.num}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] px-3 py-1 text-[10px] font-mono font-medium text-[#0dcfcf] mb-6">
                الخطوة {idx + 1}
              </div>

              <div className="size-12 rounded-xl border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] grid place-items-center text-[#0dcfcf] mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                {step.desc}
              </p>

              <span className="inline-block px-3 py-1 rounded-full border border-white/5 bg-[#1F242B] text-[11px] font-bold text-white/30">
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
