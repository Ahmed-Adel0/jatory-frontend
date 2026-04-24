"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { RoadmapsSection } from "@/components/RoadmapsSection";
import { SatoryChat } from "@/components/SatoryChat";
import { Numbers } from "@/components/Numbers";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function MainInterface() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#06080A]/70 backdrop-blur-sm text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      <Hero />


      <HowItWorks />

      <FeaturesGrid />

      <RoadmapsSection />


      <Numbers />

      <Testimonials />

      <CTA />
      <Footer />
    </main>
  );
}
