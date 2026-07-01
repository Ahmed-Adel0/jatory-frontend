"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import { Container } from "@/shared/layout/container";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const handlePrimaryAction = () => {
    router.push("#offer");
  };

  return (
    <section className="relative overflow-hidden pt-44 pb-20 lg:pt-32 lg:pb-32 flex flex-col justify-center">
      {/* Backdrop Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="animate-float-slow absolute -right-[10%] -top-[150px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(13,207,207,0.07),transparent_70%)] blur-[120px]" />
        <div className="animate-float-slow-rev absolute -left-[20%] -bottom-[200px] size-[800px] rounded-full bg-[radial-gradient(circle,rgba(13,207,207,0.04),transparent_70%)] blur-[120px]" />
      </div>

      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.025] z-0" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1
              className="animate-fade-up text-balance text-[clamp(40px,5vw,72px)] font-black leading-[1.1] tracking-[-1px] text-white"
              style={{ animationDelay: "100ms" }}
            >
              Design Your Academic
              <br />
              <span className="text-primary">Jatory with AI</span>
            </h1>

            <p
              className="animate-fade-up max-w-xl mx-auto lg:mx-0 text-balance text-base leading-relaxed text-gray-400 sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Bridging the gap between academic knowledge and real-world market
              demands through smart career roadmaps designed by industry
              leaders.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row pt-4"
              style={{ animationDelay: "300ms" }}
            >
              <button
                onClick={handlePrimaryAction}
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(13,207,207,0.2)] transition-all hover:brightness-110 hover:shadow-[0_0_60px_rgba(13,207,207,0.3)] transform hover:-translate-y-1"
              >
                <Zap className="size-4 fill-current" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/5 transform hover:-translate-y-1">
                Explore Roadmaps
                <ArrowRight className="size-4 opacity-60" />
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="flex-1 w-full relative animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-cyan-900 rounded-2xl blur-xl opacity-20 transition duration-500"></div>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/hero.png"
                alt="Jatory AI Dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080A]/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-24 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12"
          style={{ animationDelay: "500ms" }}
        >
          <Stat value="12K+" label="Active Students" />
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <Stat value="94%" label="Satisfaction" />
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <Stat value="200+" label="Custom Paths" />
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <Stat value="3x" label="Faster Success" />
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-2 flex flex-col items-center">
      <div className="font-heading text-4xl font-black text-white leading-none mb-2">
        {value.includes("+") ? (
          <>
            {value.replace("+", "")}
            <span className="text-primary">+</span>
          </>
        ) : value.includes("%") ? (
          <>
            {value.replace("%", "")}
            <span className="text-primary">%</span>
          </>
        ) : value.includes("x") ? (
          <>
            {value.replace("x", "")}
            <span className="text-primary">x</span>
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-sm font-medium text-gray-400">{label}</div>
    </div>
  );
}
