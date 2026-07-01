"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/shared/layout/Navbar";
import { Hero } from "@/features/home/components/Hero";
import { Footer } from "@/shared/layout/Footer";

// Use static imports for landing page performance (reduces LCP layout shifts and js loading overhead)
import { AboutUs } from "@/features/home/components/AboutUs";
import { WhatWeOffer } from "@/features/home/components/WhatWeOffer";
import { WhyJatory } from "@/features/home/components/WhyJatory";
import { TeamsOfExperts } from "@/features/home/components/TeamsOfExperts";
import { JoinOurNetwork } from "@/features/home/components/JoinOurNetwork";

export default function MainInterface() {
  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: unobserve after revealing if you only want it to animate once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#06080A]/70 text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <AboutUs />

      <WhatWeOffer />

      <WhyJatory />

      <TeamsOfExperts />

      <JoinOurNetwork />
      
      <Footer />
    </main>
  );
}
