"use client";

import { brandAssets } from "@/shared/components/brand/brand-assets";
import Image from "next/image";

export function Footer() {

  return (
    <footer className="bg-[#0C0F12] border-t border-white/5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative size-12 overflow-hidden rounded-xl border border-white/10">
                <Image 
                  src={brandAssets.icon}
                  alt="Jatory"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white font-heading">Jatory</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed mb-8">
              نظام تشغيل أكاديمي مدعوم بالذكاء الاصطناعي — من التشتت إلى الترتيب
            </p>
            <div className="flex gap-2">
              <SocialBtn icon={<TwitterIcon />} />
              <SocialBtn icon={<LinkedinIcon />} />
              <SocialBtn icon={<GithubIcon />} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <LinkGroup title="المنصة" links={["AI Navigator", "Roadmaps", "Satory AI", "ريلز التعلم", "Career Hub"]} />
            <LinkGroup title="الموارد" links={["المدونة", "الوثائق", "المجتمع", "الدعم"]} />
            <LinkGroup title="الشركة" links={["من نحن", "الوظائف", "الخصوصية", "الشروط"]} />
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/20">
            © 2026 Jatory — جميع الحقوق محفوظة
          </div>
          <div className="font-mono text-[10px] text-white/20 tracking-widest">
            v0.1 · COMMAND CENTER · AI ACADEMIC OS
          </div>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="size-9 rounded-lg border border-white/5 bg-[#111418] grid place-items-center text-white/40 hover:text-primary hover:border-primary/30 transition-all">
      {icon}
    </button>
  );
}

function LinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[13px] font-bold text-white">{title}</div>
      <div className="flex flex-col gap-2.5">
        {links.map(l => (
          <a key={l} href="#" className="text-[13px] text-white/40 hover:text-[#0dcfcf] transition-colors">
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}


