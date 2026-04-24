"use client";

import { useI18n } from "@/lib/i18n";
import { Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export function CTA() {
  const { t } = useI18n();
  const router = useRouter();

  const handleStart = () => router.push("/home");

  return (
    <section className="reveal py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="relative rounded-[32px] border border-white/5 bg-[#111418] p-12 md:p-20 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(13, 207, 207,0.08),transparent_60%)] pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] px-4 py-1.5 text-[12px] font-bold text-[#0dcfcf] mb-8 relative z-10">
          🚀 ابدأ اليوم
        </div>

        <h2 className="text-[clamp(30px,4vw,52px)] font-black text-white leading-tight mb-6 tracking-tight relative z-10">
          مسارك الأكاديمي<br /><span className="text-[#0dcfcf]">ينتظرك</span>
        </h2>
        
        <p className="text-white/50 text-base mb-12 max-w-md mx-auto relative z-10">
          انضم لآلاف الطلاب اللي بيستخدموا Jatory كل يوم عشان يتقدموا بذكاء وثقة
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <button 
            onClick={handleStart}
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#0dcfcf] px-10 py-4 text-[16px] font-bold text-[#021A10] shadow-[0_0_40px_rgba(13, 207, 207,0.2)] hover:bg-[#00b8b8] transition-all transform hover:-translate-y-1"
          >
            <Zap className="size-4 fill-current" />
            ابدأ مجاناً
          </button>
          <button className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-transparent px-10 py-4 text-[16px] font-bold text-white hover:bg-white/5 transition-all transform hover:-translate-y-1">
            جرّب AI Navigator
          </button>
        </div>

        <p className="mt-8 text-[12px] text-white/20 relative z-10">
          لا يُطلب بطاقة ائتمان · مجاني للأبد على الخطة الأساسية
        </p>
      </div>
    </section>
  );
}

