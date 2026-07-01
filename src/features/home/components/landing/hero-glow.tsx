"use client";

import { motion } from "framer-motion";

export function HeroGlow() {
  return (
    <div className="pointer-events-none relative mx-auto mb-6 h-10 w-full max-w-xl overflow-hidden opacity-70">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,hsl(var(--brand-cyan)/0.35),transparent_45%),radial-gradient(circle_at_50%_50%,hsl(var(--brand-blue)/0.22),transparent_45%),radial-gradient(circle_at_90%_50%,hsl(var(--brand-purple)/0.22),transparent_45%)]"
        initial={{ x: 0 }}
        animate={{ x: [0, 30, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]"
        initial={{ x: "-60%" }}
        animate={{ x: "60%" }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

