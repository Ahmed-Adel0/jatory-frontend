"use client";

import { cn } from "@/lib/utils";
import { brandAssets } from "@/shared/components/brand/brand-assets";
import Image from "next/image";
import { Container } from "@/shared/layout/container";

export function DashboardPreview() {

  return (
    <Container className="reveal relative z-10 pb-24">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111418] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
        {/* Top bar */}
        <div className="flex items-center gap-2.5 bg-[#0C0F12] px-5 py-3.5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-[#FF5F57]" />
            <div className="size-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="size-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-4 rounded-md bg-[#111418] border border-white/5 py-1 text-center font-mono text-[11px] text-white/20">
            jatory.app/dashboard
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row min-h-[400px]">
          {/* Sidebar */}
          <div className="hidden md:flex w-52 flex-col border-e border-white/5 bg-[#0C0F12] py-4">
            <div className="flex items-center gap-2 px-4 pb-4 mb-4 border-b border-white/5">
              <div className="relative size-6 overflow-hidden rounded-md border border-white/10">
                <Image 
                  src={brandAssets.icon}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-bold text-white">Jatory</span>
            </div>
            
            <NavItem icon="⌂" label="Dashboard" active />
            <NavItem icon="⊕" label="AI Navigator" />
            <NavItem icon="↗" label="Roadmap" />
            <NavItem icon="▶" label="المحاضرات" />
            <NavItem icon="◈" label="Satory AI" />
            <NavItem icon="◻" label="Career Hub" />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 flex flex-col gap-5">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <PreviewCard label="تقدم الخطة" value="68%" sub="↑ 4% هذا الأسبوع" teal />
              <PreviewCard label="ساعات التعلم" value="42" sub="هذا الشهر" />
              <PreviewCard label="الإنجازات" value="12" sub="شارة" />
              <PreviewCard label="المستوى" value="Lv.5" sub="متقدم" teal />
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
              <div className="rounded-xl border border-white/5 bg-[#181C21] p-5">
                <div className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mb-4">
                  خارطة الطريق · هندسة
                </div>
                <div className="space-y-3">
                  <Step done label="أساسيات البرمجة" />
                  <Step active label="هياكل البيانات ← جارٍ" />
                  <Step locked label="الخوارزميات" />
                  <Step locked label="تصميم الأنظمة" />
                </div>
                <div className="mt-6 h-1 w-full rounded-full bg-[#1F242B] overflow-hidden">
                  <div className="h-full w-[68%] bg-[#0dcfcf]" />
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#181C21] p-5">
                <div className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mb-4">
                  Satory AI
                </div>
                <div className="space-y-2">
                  <AiMsg bot text="أنت في الدرس الثاني. جاهز تكمل؟ 👋" />
                  <AiMsg user text="لخصلي الدرس" />
                  <AiMsg bot text="Binary Tree: كل node لها left وright child..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-2 mx-2 rounded-lg text-[11px] cursor-pointer transition-colors",
      active ? "bg-[rgba(13, 207, 207,0.08)] text-[#0dcfcf] border border-[rgba(13, 207, 207,0.15)]" : "text-white/40 hover:text-white/60"
    )}>
      <span className="text-[9px] opacity-60">{icon}</span>
      <span>{label}</span>
      {active && <div className="ms-auto size-1 rounded-full bg-[#0dcfcf]" />}
    </div>
  );
}

function PreviewCard({ label, value, sub, teal = false }: { label: string; value: string; sub: string; teal?: boolean }) {
  return (
    <div className="rounded-lg border border-white/5 bg-[#181C21] p-4">
      <div className="text-[9px] text-white/20 mb-1">{label}</div>
      <div className={cn("font-heading text-lg font-bold", teal ? "text-[#0dcfcf]" : "text-white")}>{value}</div>
      <div className="text-[9px] text-white/20 mt-1">{sub}</div>
    </div>
  );
}

function Step({ label, done = false, active = false, locked = false }: { label: string; done?: boolean; active?: boolean; locked?: boolean }) {
  return (
    <div className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
      <div className={cn(
        "grid size-4 place-items-center rounded-full text-[8px] font-bold",
        done ? "bg-[rgba(13, 207, 207,0.15)] text-[#0dcfcf]" :
        active ? "bg-[#0dcfcf] text-[#021A10]" :
        "bg-[#1F242B] text-white/20"
      )}>
        {done ? "✓" : active ? "2" : locked ? "3" : ""}
      </div>
      <span className={cn("text-[10px]", active ? "text-white font-bold" : "text-white/40")}>{label}</span>
    </div>
  );
}

function AiMsg({ text, user = false, bot = false }: { text: string; user?: boolean; bot?: boolean }) {
  return (
    <div className={cn(
      "rounded-md px-3 py-2 text-[10px] leading-relaxed",
      bot ? "bg-[rgba(13, 207, 207,0.05)] border border-[rgba(13, 207, 207,0.1)] text-white/60" :
      "bg-[#1F242B] text-white/40 text-end"
    )}>
      {text}
    </div>
  );
}

