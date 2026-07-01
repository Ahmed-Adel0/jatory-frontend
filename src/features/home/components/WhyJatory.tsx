import React from "react";
import { MonitorPlay, MessageCircleQuestion, Infinity, FileBadge } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Learn Anywhere, Anytime",
    icon: MonitorPlay,
    description: "High-quality video courses and specialized programs available 24/7 to fit your busy academic schedule.",
  },
  {
    id: 2,
    title: "Direct Access to Industry Experts",
    icon: MessageCircleQuestion,
    description: "Your dedicated space to ask academic or career-related questions and get answers directly from top professors and corporate partners.",
  },
  {
    id: 3,
    title: "Lifetime Career Tracking",
    icon: Infinity,
    description: "Continuous access to interactive roadmaps and market updates, ensuring you always stay ahead with the latest in-demand skills.",
  },
  {
    id: 4,
    title: "Verified Certificates & Job Placement",
    icon: FileBadge,
    description: "Earn verified certificates recognized by our corporate partners, granting you exclusive access to real-world training and employment opportunities.",
  },
];

export function WhyJatory() {
  return (
    <section id="why" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative reveal border-t border-white/5 mt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="space-y-16 mt-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Jatory?
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We provide scientific colleges students and graduates with an integrated educational and career-readiness environment that ensures academic excellence and professional success through exclusive features:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center group cursor-default">
                <div className="mb-6 text-primary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="w-16 h-16 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 h-14 flex items-center justify-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
