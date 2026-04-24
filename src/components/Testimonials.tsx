"use client";

import { Star } from "lucide-react";
import { Container } from "./layout/container";

export function Testimonials() {
  const testimonials = [
    {
      initials: "أم",
      name: "أميرة محمد",
      role: "هندسة حاسبات · السنة الثانية",
      text: "أول ما فتحت Jatory حسيت إن فيه حد فاهم إن ضياعي مش كسل. الـ roadmap حدد لي أول خطوة وده كان كل اللي محتاجه عشان أبدأ."
    },
    {
      initials: "كع",
      name: "كريم العزب",
      role: "علوم حاسب · السنة الثالثة",
      text: "Satory وفّر عليّ ساعات. بدل ما أدور على شرح في 10 مواقع، بسأله وياخد سياق الدرس اللي أنا فيه ويجاوبني على طول."
    },
    {
      initials: "نر",
      name: "نور رمضان",
      role: "إدارة الأعمال · خريجة",
      text: "Career Hub غيّر تفكيري. عرفت أول مرة إن اللي بذاكره له قيمة فعلية في السوق، وده حفّزني أكمل وأبني portfolio."
    }
  ];

  return (
    <section className="reveal border-t border-white/5">
      <Container className="py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-[#0dcfcf]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0dcfcf]">آراء الطلاب</span>
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-4 tracking-tight">
          بيقولوا إيه عن Jatory؟
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            style={{ transitionDelay: `${idx * 150}ms` }}
            className="reveal p-8 rounded-2xl border border-white/5 bg-[#111418] hover:bg-[#181C21] transition-all group"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-[#0dcfcf] text-[#0dcfcf]" />
              ))}
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full border border-[rgba(13, 207, 207,0.25)] bg-[rgba(13, 207, 207,0.08)] grid place-items-center font-heading text-[12px] font-bold text-[#0dcfcf]">
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-bold text-white">{t.name}</div>
                <div className="text-[11px] text-white/20">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}

