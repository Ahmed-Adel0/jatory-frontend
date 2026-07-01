"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/shared/layout/Navbar";
import { 
  Play, 
  Search, 
  Bell, 
  Home, 
  Settings, 
  User, 
  BarChart2, 
  Briefcase, 
  Map, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Most viewed",
    items: [
      { id: 1, title: "Quantum Computing Basics", image: "/course_science.png", duration: "12:30" },
      { id: 2, title: "Modern Architecture Trends", image: "/course_entrepreneurship.png", duration: "15:45" },
    ]
  },
  {
    title: "Scientific Research",
    items: [
      { id: 3, title: "Lab Safety Protocols", image: "/course_science.png", duration: "09:30" },
      { id: 4, title: "Molecular Biology 101", image: "/course_science.png", duration: "22:10" },
      { id: 5, title: "Chemical Analysis", image: "/course_science.png", duration: "18:20" },
    ]
  },
  {
    title: "Entrepreneurship",
    items: [
      { id: 6, title: "Startup Fundamentals", image: "/course_entrepreneurship.png", duration: "11:00" },
      { id: 7, title: "Pitching to VCs", image: "/course_entrepreneurship.png", duration: "08:45" },
    ]
  },
  {
    title: "Trajectory to build Story",
    items: [
      { id: 8, title: "Character Development", image: "/hero_banner.png", duration: "14:20" },
      { id: 9, title: "Narrative Arcs", image: "/hero_banner.png", duration: "16:50" },
    ]
  },
  {
    title: "Podcast",
    items: [
      { id: 10, title: "The Future of AI", image: "/course_podcast.png", duration: "45:00" },
      { id: 11, title: "Ethics in Tech", image: "/course_podcast.png", duration: "38:15" },
    ]
  },
  {
    title: "Psychological aspect",
    items: [
      { id: 12, title: "Mindfulness for Students", image: "/course_psychology.png", duration: "10:30" },
      { id: 13, title: "Cognitive Behavioral Basics", image: "/course_psychology.png", duration: "25:00" },
    ]
  },
  {
    title: "Content of the Metaverse",
    items: [
      { id: 14, title: "VR World Building", image: "/course_metaverse.png", duration: "20:00" },
      { id: 15, title: "Digital Identity", image: "/course_metaverse.png", duration: "12:15" },
    ]
  }
];

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-[#06080A] text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 overflow-y-auto pb-32 scrollbar-hide pt-20">
        {/* Featured Hero Banner */}
        <section className="px-4 sm:px-8">
          <div className="relative h-[280px] sm:h-[500px] w-full rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden group border border-white/5 shadow-2xl">
            <Image 
              src="/hero_banner.png" 
              alt="Hero Banner" 
              fill 
              priority
              className="object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080A] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="hidden sm:block font-mono text-[10px] tracking-[0.3em] text-primary mb-2 uppercase font-bold">Featured Trajectory</div>
              <h2 className="hidden sm:block text-3xl font-black leading-tight mb-4">Trajectory to build Story</h2>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`h-1 rounded-full ${i === 1 ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Greeting */}
        <section className="px-6 mt-8">
          <h1 className="text-2xl font-black mb-1">Ready to learn something new?!</h1>
          <p className="text-white/40 text-sm">Explore our curated courses and podcasts</p>
        </section>

        {/* Content Sections */}
        {categories.map((category, idx) => (
          <section key={idx} className="mt-8">
            <div className="px-6 flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2 group cursor-pointer">
                {category.title}
                <ChevronRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
              </h2>
            </div>
            
            <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-4 snap-x">
              {category.items.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="min-w-[280px] sm:min-w-[320px] snap-start"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">
                      {item.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="size-12 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_20px_rgba(13,207,207,0.4)]">
                        <Play className="size-6 text-black fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold text-white/90 truncate">{item.title}</h3>
                  <div className="mt-1 h-[1px] w-full bg-white/5" />
                  <div className="mt-1 h-[1px] w-2/3 bg-white/5" />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 px-1 py-3 bg-[#06080A]/80 backdrop-blur-3xl border-t border-white/5 z-[100] pb-safe">
        <div className="flex items-center justify-between max-w-lg mx-auto relative px-1 sm:px-4">
          {/* Active Indicator Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(13,207,207,0.15),transparent_70%)]" />
          
          <NavItem icon={<Home className="size-5" />} label="Home" active />
          <NavItem icon={<Map className="size-5" />} label="Roadmap" />
          
          {/* Hide Jobs on very small mobile */}
          <div className="hidden min-[420px]:block">
            <NavItem icon={<Briefcase className="size-5" />} label="Jobs" />
          </div>
          
          <div className="relative -top-6 px-1 sm:px-2">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
            <button className="relative size-12 sm:size-14 rounded-2xl bg-gradient-to-tr from-primary to-[#00f2fe] flex items-center justify-center shadow-[0_8px_30px_rgba(13,207,207,0.4)] border border-white/20 active:scale-95 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
              <Sparkles className="size-6 sm:size-7 text-black group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <NavItem icon={<BarChart2 className="size-5" />} label="Progress" />
          
          {/* Hide Settings on very small mobile */}
          <div className="hidden min-[420px]:block">
            <NavItem icon={<Settings className="size-5" />} label="Settings" />
          </div>
          
          <NavItem icon={<User className="size-5" />} label="Profile" />
        </div>
      </nav>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -150% -150%; }
          100% { background-position: 150% 150%; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Custom scrollbar for better look */
        body {
          scrollbar-width: thin;
          scrollbar-color: rgba(13,207,207,0.2) transparent;
        }
        body::-webkit-scrollbar {
          width: 5px;
        }
        body::-webkit-scrollbar-thumb {
          background-color: rgba(13,207,207,0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-primary scale-110' : 'text-white/30 hover:text-white/60 hover:scale-105'}`}>
      <div className="relative">
        {icon}
        {active && (
          <motion.div 
            layoutId="active-indicator"
            className="absolute -top-1 -right-1 size-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(13,207,207,0.8)]"
          />
        )}
      </div>
      <span className="text-[8px] sm:text-[9px] font-bold tracking-tight uppercase">{label}</span>
    </button>
  );
}
