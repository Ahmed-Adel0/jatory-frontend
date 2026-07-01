"use client";

import { Zap, Layout, MessageSquare, Briefcase, Play, Award, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/shared/layout/container";

export function FeaturesGrid() {

  return (
    <section className="reveal border-t border-white/5">
      <Container className="py-24">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-[#0dcfcf]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0dcfcf]">المميزات الأساسية</span>
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-4 tracking-tight">
          كل اللي محتاجه<br />في مكان واحد
        </h2>
        <p className="text-white/40 max-w-lg text-base">
          مش بس محتوى — نظام متكامل يشيل التشتت عن دماغك ويخليك تركز على اللي يهم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Featured Card */}
        <div className="md:col-span-2 rounded-2xl border border-[rgba(13, 207, 207,0.25)] bg-[linear-gradient(135deg,#111418_0%,#181C21_100%)] p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(13, 207, 207,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="size-12 rounded-xl border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] grid place-items-center text-[#0dcfcf] mb-6">
            <Zap className="size-6 fill-current" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">AI Navigator — المرشد الذكي</h3>
          <p className="text-base text-white/50 leading-relaxed mb-6 max-w-xl">
            يبني مسارك الشخصي بناءً على هدفك وكليتك وسنتك الدراسية. مش template جاهز — مسار مخصص بالكامل ليك بناءً على وضعك الفعلي. بيتحدث معاك ويفهم أين أنت ووين بتحب توصل.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] px-4 py-1.5 text-[11px] font-bold text-[#0dcfcf]">
            <Star className="size-3.5 fill-current" />
            الميزة الرئيسية
          </div>
        </div>

        {/* Smaller Cards */}
        <FeatureCard 
          icon={<Layout className="size-5" />}
          title="Roadmap تفاعلي"
          desc="خارطة طريق بخطوات محددة — كل step فيها فيديو، تطبيق عملي، و quiz. تتبع تقدمك بصرياً."
          delay="100ms"
        />
        <FeatureCard 
          icon={<MessageSquare className="size-5" />}
          title="Satory AI — مساعدك الذكي"
          desc="مساعد سياقي مرتبط بالدرس اللي بتذاكره. لخص، اشرح، أسئلة مراجعة — كل ده في كليك واحد."
          delay="200ms"
        />
        <FeatureCard 
          icon={<Briefcase className="size-5" />}
          title="Career Hub"
          desc="ربط مباشر بين اللي بتتعلمه وسوق الشغل. مسارات مهنية، رواتب، وفرص متاحة حسب تخصصك."
          delay="300ms"
        />
        <FeatureCard 
          icon={<Play className="size-5" />}
          title="ريلز التعلم"
          desc="Micro-learning في دقائق — فيديوهات قصيرة موجّهة بناءً على تخصصك وتقدمك ونقاط ضعفك."
          delay="400ms"
        />
        <FeatureCard 
          icon={<Award className="size-5" />}
          title="Achievement System"
          desc="شارات، مستويات XP، وسلسلة يومية تخليك متحفز تكمل. التعلم بيبقى ممتع وقابل للقياس."
          delay="500ms"
        />
      </div>
      </Container>
    </section>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay?: string }) {
  return (
    <div 
      style={{ transitionDelay: delay }}
      className="reveal rounded-2xl border border-white/5 bg-[#111418] p-7 relative overflow-hidden group hover:border-primary/20 transition-all transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(13, 207, 207,0.05),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="size-11 rounded-xl border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] grid place-items-center text-[#0dcfcf] mb-5">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-[13px] text-white/40 leading-relaxed">{desc}</p>
    </div>
  );
}

