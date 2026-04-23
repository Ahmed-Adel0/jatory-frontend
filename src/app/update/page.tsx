"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  LayoutDashboard, 
  Wrench,
  Construction,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpdatePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-body rtl selection:bg-[#0dcfcf]/30 flex flex-col items-center justify-center p-6 text-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0dcfcf]/5 blur-[120px] rounded-full pointer-events-none opacity-40 shrink-0" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl w-full"
      >
        {/* Animated Icon Container */}
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-24 h-24 bg-[#0dcfcf]/10 border border-[#0dcfcf]/20 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_-10px_rgba(13,207,207,0.3)]"
        >
          <Rocket className="w-12 h-12 text-[#0dcfcf]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dcfcf]/5 border border-[#0dcfcf]/15 text-[#0dcfcf] text-[11px] font-black uppercase tracking-widest mb-8"
        >
          <div className="w-1.5 h-1.5 bg-[#0dcfcf] rounded-full animate-ping" />
          تحديث المنصة جارٍ الآن
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-6 tracking-tighter">
          نحن نقوم ببناء <br />
          <span className="text-[#0dcfcf]">الجيل القادم</span> من Jatory
        </h1>

        <p className="text-white/30 text-base md:text-lg font-bold mb-12 leading-relaxed max-w-lg mx-auto">
          المنصة حالياً تحت التحديث لإضافة مميزات الذكاء الاصطناعي الجديدة وتحسين تجربة المستخدم. سنعود قريباً جداً بشكل أقوى!
        </p>

        {/* Progress Bar Mockup */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 backdrop-blur-md">
          <div className="flex justify-between text-[11px] font-black mb-3 uppercase text-[#0dcfcf] tracking-widest">
            <span>اكتمال التحديث</span>
            <span>92%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-[#0dcfcf] rounded-full shadow-[0_0_15px_rgba(13,207,207,0.5)]"
            />
          </div>
          <div className="mt-4 flex gap-4 justify-between">
            <div className="flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase">
              <Zap className="w-3 h-3" />
              أداء فائق
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase">
              <Brain className="w-3 h-3" />
              ذكاء متطور
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 h-14 border-white/10 hover:border-[#0dcfcf]/40 bg-transparent text-white/50 hover:text-white text-base font-bold rounded-xl backdrop-blur-sm transition-all active:scale-95">
              العودة للرئيسية
            </Button>
          </Link>
          <Button size="lg" className="w-full sm:w-auto px-10 h-14 bg-[#0dcfcf] hover:bg-[#0bbaba] text-black text-base font-black rounded-xl shadow-xl transition-all active:scale-95">
            أبلغني عند الانتهاء
          </Button>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <footer className="fixed bottom-12 flex items-center gap-2 opacity-20">
        <div className="w-6 h-6 bg-[#0dcfcf] rounded-md flex items-center justify-center text-[10px] font-black text-black">J</div>
        <span className="text-sm font-black text-white tracking-tight uppercase">Jatory Platform</span>
      </footer>
    </div>
  );
}
