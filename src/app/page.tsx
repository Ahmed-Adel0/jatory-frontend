"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RoadmapsSection } from "@/components/RoadmapsSection";
import { useI18n } from "@/lib/i18n";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const sections_keys = [
  { id: "most-viewed", key: "most_viewed" },
  { id: "scientific-research", key: "scientific_research" },
  { id: "entrepreneurship", key: "entrepreneurship" },
  { id: "podcast", key: "podcast" },
  { id: "psychological-aspect", key: "psychological_aspect" },
  { id: "free-courses", key: "free_courses" },
  { id: "metaverse", key: "metaverse" },
  { id: "courses", key: "courses" },
];

export default function MainInterface() {
  const { t, lang } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0dcfcf]/30">
      <Navbar />
      
      <Hero />

      <RoadmapsSection />

      {/* Legacy Content Sections for backward compatibility or extra content */}
      <div className="relative z-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections_keys.map((section, idx) => (
          <section key={section.id} className="mb-16">
            <div className="mb-6 flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t(section.key)}</h2>
              <ChevronRight className={`w-6 h-6 text-[#0dcfcf] ${lang === "ar" ? "rotate-180" : ""}`} />
            </div>
            
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x scrollbar-hide">
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item} 
                  className="min-w-[300px] md:min-w-[400px] aspect-video rounded-2xl border border-white/10 bg-white/5 overflow-hidden snap-start relative flex flex-col group cursor-pointer transition-all hover:border-[#0dcfcf]/40"
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <Image 
                      src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop&sig=${section.id}-${item}`}
                      alt={t(section.key)}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="h-1 w-12 bg-[#0dcfcf] mb-4"></div>
                      <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
