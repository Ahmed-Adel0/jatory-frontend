"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const HowItWorks = dynamic(() => import("@/components/HowItWorks").then(mod => mod.HowItWorks));
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid").then(mod => mod.FeaturesGrid));
const RoadmapsSection = dynamic(() => import("@/components/RoadmapsSection").then(mod => mod.RoadmapsSection));
const Numbers = dynamic(() => import("@/components/Numbers").then(mod => mod.Numbers));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const CTA = dynamic(() => import("@/components/CTA").then(mod => mod.CTA));

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

    const observeElements = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!el.classList.contains("observed")) {
          el.classList.add("observed");
          observer.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#06080A]/70 text-white selection:bg-primary/30 overflow-x-hidden">
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
