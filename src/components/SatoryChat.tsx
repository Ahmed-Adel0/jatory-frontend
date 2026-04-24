"use client";

import { useI18n } from "@/lib/i18n";
import { Send, Zap } from "lucide-react";
import { useState } from "react";
import { brandAssets } from "./brand/brand-assets";
import Image from "next/image";
import { Container } from "./layout/container";

export function JatoryChat() {
  const { dir } = useI18n();
  const [input, setInput] = useState("");

  const chips = [
    "اديني أسئلة مراجعة",
    "اشرحلي الفرق",
    "فين هذا في الامتحان؟"
  ];

  return (
    <section id="jatory" className="reveal border-y border-white/5 bg-[#111418]/50 backdrop-blur-sm">
      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[#0dcfcf]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0dcfcf]">Jatory AI</span>
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-6 tracking-tight">
            مساعدك الذكي<br />في كل خطوة
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg">
            Jatory مش مجرد chatbot — هو مساعد سياقي يفهم أنت في أنهي درس، أنهي مادة، وأنهي نقطة من مسارك. بيلخص، بيشرح، وبيديك أسئلة مراجعة ذكية.
          </p>
          
          <ul className="space-y-4">
            <ListItem text="تلخيص فوري لأي محاضرة أو فيديو" />
            <ListItem text="أسئلة مراجعة ذكية بناءً على نقاط ضعفك" />
            <ListItem text="شرح مبسط للمفاهيم الصعبة بأمثلة عملية" />
            <ListItem text="متاح 24/7 — حتى قبل الامتحان بساعة" />
          </ul>
        </div>

        <div className="animate-fade-up animate-delay-100">
          <div className="rounded-2xl border border-white/10 bg-[#0C0F12] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#111418] px-5 py-4 border-b border-white/5">
              <div className="relative size-8 overflow-hidden rounded-lg border border-white/10">
                <Image 
                  src={brandAssets.icon}
                  alt="Jatory"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[13px] font-bold text-white">Jatory AI</span>
              <div className="ms-auto flex items-center gap-1.5">
                <div className="size-1.5 rounded-full bg-[#0dcfcf]" />
                <span className="text-[11px] text-[#0dcfcf]">متاح الآن</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-5 flex flex-col gap-4 min-h-[280px]">
              <div className="self-start max-w-[90%] rounded-xl bg-[rgba(13, 207, 207,0.07)] border border-[rgba(13, 207, 207,0.15)] p-4 text-[13px] leading-relaxed text-white/70">
                أهلاً! 👋 أنا جاتوري، مساعدك الذكي. أنت في <strong>الدرس الثالث من الفيزياء</strong>. اسألني أي سؤال عن الدرس الحالي أو المادة كلها.
              </div>
              <div className="self-end max-w-[90%] rounded-xl bg-[#181C21] border border-white/5 p-4 text-[13px] text-white text-end">
                لخصلي درس الاحتكاك
              </div>
              <div className="self-start max-w-[90%] rounded-xl bg-[rgba(13, 207, 207,0.07)] border border-[rgba(13, 207, 207,0.15)] p-4 text-[13px] leading-relaxed text-white/70">
                الاحتكاك نوعان: <strong>سكوني</strong> (قبل الحركة) و<strong>حركي</strong> (أثناء الحركة). السكوني دايماً أكبر من الحركي — عشان كده بداية تحريك الجسم أصعب من إكماله. معادلة الاحتكاك: F = μN حيث μ هو معامل الاحتكاك وN هي القوة العمودية.
              </div>
            </div>

            {/* Chips */}
            <div className="px-5 pb-4 flex flex-wrap gap-2">
              {chips.map(chip => (
                <button 
                  key={chip}
                  onClick={() => setInput(chip)}
                  className="px-4 py-1.5 rounded-lg bg-[#181C21] border border-white/5 text-[11px] text-white/40 hover:text-[#0dcfcf] hover:border-[rgba(13, 207, 207,0.3)] hover:bg-[rgba(13, 207, 207,0.08)] transition-all"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسأل Jatory..."
                className="flex-1 bg-[#111418] border border-white/5 rounded-xl px-4 py-2.5 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(13, 207, 207,0.3)] transition-colors"
              />
              <button className="size-10 rounded-xl bg-[#0dcfcf] grid place-items-center text-[#021A10] hover:bg-[#00b8b8] transition-colors">
                <Send className="size-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 size-1.5 rounded-full bg-[#0dcfcf]" />
      <span className="text-sm text-white/50">{text}</span>
    </li>
  );
}

