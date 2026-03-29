"use client";

import * as React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MaintenancePage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#020617] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Glowing Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative pt-10"
        >
          {/* Main Cyan Glow behind logo */}
          <div className="absolute left-1/2 top-1/2 -z-10 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40 blur-[80px]" />
          <div className="absolute left-1/2 top-1/2 -z-10 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[40px]" />
          
          <div className="relative flex size-32 items-center justify-center rounded-[2.5rem] bg-black shadow-[0_0_1px_1px_rgba(255,255,255,0.1)_inset,0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
             {/* Subtle interior glow */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.25),transparent_70%)]" />
             
             {/* The Image replacing the SVG */}
             <Image
               src="/logoicon.jpeg"
               alt="Jatory Logo"
               width={128}
               height={128}
               className="size-full object-cover"
               priority
             />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 font-tajawal text-5xl font-black tracking-tight"
        >
          Jatory
        </motion.h1>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 flex items-center gap-2 text-lg font-bold text-white/40"
        >
          جاري العمل على الموقع
          <span className="text-xl">🚀</span>
        </motion.p>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12"
        >
          <Button
            className="h-14 w-52 rounded-full border-none bg-gradient-to-r from-cyan-400 to-cyan-600 text-lg font-black text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition hover:scale-105 hover:from-cyan-300 hover:to-cyan-500 active:scale-95"
          >
            Enter
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
