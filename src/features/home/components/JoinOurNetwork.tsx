import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function JoinOurNetwork() {
  return (
    <section id="join" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative reveal border-y border-white/5 my-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary -translate-y-full"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary translate-y-full"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="h-1 bg-primary w-12 rounded-full mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Join Our Network <br className="hidden md:block" />
              <span className="text-3xl text-gray-400 font-medium">(Be a Jatory Partner)</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Do you possess the academic or field expertise that the next generation is looking for? Join us as a success partner at Jatory and help shape a better professional future for scientific colleges students and graduates.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We provide you with the platform and the fully integrated production ecosystem (studios and digital editing tools) to transform your knowledge and experience into inspiring career roadmaps and specialized courses that reach thousands of eager learners across the Arab world.
            </p>
          </div>

          <button className="bg-primary hover:brightness-110 text-black font-semibold py-4 px-8 rounded-lg flex items-center gap-3 transition-colors duration-300 shadow-lg shadow-primary/20 group">
            Apply Now as an Expert
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
            <Image
              src="/mentor.jpeg" // Using the reference image from public if available
              alt="Join Jatory Network"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
