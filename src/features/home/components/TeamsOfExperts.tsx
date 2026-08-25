import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Khaled Mohamed",
    title: "Founder & CEO",
    image: "/khaled_founder.jpeg",
  },
  {
    id: 2,
    name: "Ahmed Adel",
    title: "Co-Founder & CTO",
    image: "/Ahmed Adel.jpeg",
  },
  {
    id: 3,
    name: "Nawal Ibrahim",
    title: "Co-Founder",
    image: "/team-nawal-ibrahim.jpeg",
  },
  {
    id: 4,
    name: "Fares El Sayed",
    title: "PR",
    image: "/فارس السيد.jpeg",
  },
  {
    id: 5,
    name: "Abd El-Rahman Fathy",
    title: "Art Design",
    image: "/team-abd-el-rahman-fathy.jpeg",
  },
  {
    id: 6,
    name: "Mohamed Mekkawy",
    title: "PR",
    image: "/team-mohamed-mekkawy.jpeg",
  },
  {
    id: 7,
    name: "Eman Hagi",
    title: "PR",
    image: "/team-eman-hagi.jpeg",
  },
  {
    id: 8,
    name: "Mohamed Shata",
    title: "Video Editor",
    image: "/team-mohamed-shata.jpeg",
  },
];

export function TeamsOfExperts() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative reveal border-t border-white/5 mt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="space-y-12 mt-12">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Teams of Experts
          </h2>
        </div>
        
        <div className="max-w-4xl space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            At Jatory, we are proud of the unique diversity and integrated expertise that our technical, academic, and operational team brings forward. Our true strength lies in this strategic synergy; combining cutting-edge tech innovation, strict academic integrity, and robust field relations with universities and corporations.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Together, we function as a unified ecosystem to create an exceptional career-readiness and training experience for scientific colleges students and graduates, driven by our deep understanding of market demands and modern digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-[#111318] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:bg-[#151820] transition-colors duration-300"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-[#1E222A] group-hover:border-primary/50 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
