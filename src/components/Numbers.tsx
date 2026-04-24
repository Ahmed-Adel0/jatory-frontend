"use client";

import { Container } from "./layout/container";

export function Numbers() {
  return (
    <section id="numbers" className="reveal border-t border-white/5">
      <Container className="py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-[#0dcfcf]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0dcfcf]">الأرقام الحقيقية</span>
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-4 tracking-tight">
          النتائج بتتكلم عن نفسها
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/5 bg-[#111418] overflow-hidden">
        <NumberBlock value="12K" plus label="طالب مسجل" delay="100ms" />
        <NumberBlock value="94" percent label="رضا الطلاب" delay="200ms" />
        <NumberBlock value="3" x label="تسريع في الإنجاز" delay="300ms" />
        <NumberBlock value="200" plus label="مسار تعليمي مخصص" delay="400ms" />
      </div>
      </Container>
    </section>
  );
}

function NumberBlock({ value, plus = false, percent = false, x = false, label, delay }: { value: string; plus?: boolean; percent?: boolean; x?: boolean; label: string; delay?: string }) {
  return (
    <div 
      style={{ transitionDelay: delay }}
      className="reveal p-12 text-center border-b md:border-b-0 md:border-e border-white/5 last:border-0 hover:bg-[#181C21] transition-colors group"
    >
      <div className="font-heading text-5xl font-black text-white mb-2 tracking-tighter transition-transform group-hover:scale-110 duration-300">
        {value}<span className="text-[#0dcfcf]">{plus ? "+" : percent ? "%" : x ? "x" : ""}</span>
      </div>
      <div className="text-[13px] text-white/40">{label}</div>
    </div>
  );
}

