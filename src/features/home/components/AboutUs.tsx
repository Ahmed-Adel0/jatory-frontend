import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative reveal">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-1 bg-primary w-12 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                About Us
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg md:pl-16">
              A leading educational and career-readiness platform dedicated to empowering scientific colleges students and graduates across the Middle East and Africa. We bridge the gap between academic knowledge and real-world market demands through smart career roadmaps designed in collaboration with top professors and industry leaders, alongside high-quality video courses and insightful media that pave the way for professional success.
            </p>
          </div>

          <div className="space-y-10 md:pl-16">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group cursor-default">
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Eye className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the premier career development platform for scientific disciplines in the Arab world, inspiring learners to excel and reach their greatest professional potential through clear paths and integrated tech-driven educational solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group cursor-default">
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Target className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower the scientific academic community and graduates by delivering trusted, high-quality specialized courses and establishing strategic corporate partnerships that secure practical training and job placement opportunities, ensuring a defined and successful career trajectory for every user.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full max-w-lg mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-900 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/about-jatory-generated.png"
              alt="About Jatory"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            {/* Overlay gradient for better text blending if needed, though this is just an image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080A] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
