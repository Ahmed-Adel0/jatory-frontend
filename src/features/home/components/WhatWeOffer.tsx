import React from "react";
import { Map, BookOpen, Mic } from "lucide-react";

const offerings = [
  {
    id: 1,
    title: "Smart Career Roadmaps",
    icon: Map,
    description: "Interactive career paths built in collaboration with top professors and industry experts, guiding students and graduates toward the most in-demand specialties and defining the exact skills required for each field.",
  },
  {
    id: 2,
    title: "Specialized Career Courses",
    icon: BookOpen,
    description: "High-quality, practical training programs tailor-made according to actual corporate requirements, empowering learners to acquire the hands-on experience and technical skills that employers look for.",
  },
  {
    id: 3,
    title: "Jatocast (Jatory Podcast)",
    icon: Mic,
    description: "Our dedicated media channel hosting leading scientists, industry experts, and entrepreneurs to share valuable market insights, professional tips, and success stories.",
  },
];

export function WhatWeOffer() {
  return (
    <section id="offer" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative reveal border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          What We Offer
        </h2>
        
        <p className="text-gray-300 leading-relaxed text-lg">
          At Jatory, we provide an integrated career-readiness ecosystem designed specifically to bridge the gap between academia and the professional market for scientific colleges. We don&apos;t just deliver educational content; we map out a clear and trusted career path from university lecture halls to top-tier corporations, driven by our innovative educational and media solutions:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        {offerings.map((offer) => {
          const Icon = offer.icon;
          return (
            <div key={offer.id} className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 mb-6 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(13,207,207,0.15)] group-hover:shadow-[0_0_40px_rgba(13,207,207,0.4)] relative">
                <div className="absolute inset-2 border border-primary/30 rounded-full group-hover:border-black/30 transition-colors duration-300"></div>
                <Icon className="w-10 h-10 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {offer.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
