"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  // nav
  "nav.home": "الرئيسية",
  "nav.roadmaps": "المجالات",
  "nav.satory": "Jatory AI",
  "nav.opportunities": "الفرص",
  "nav.community": "المجتمع",
  "nav.signin": "تسجيل الدخول",
  "nav.cta": "ابدأ مسارك",

  // hero
  "hero.badge": "Jatory AI · النواة الذكية",
  "hero.title.from": "من مسارك",
  "hero.title.to": "إلى قصتك",
  "hero.kicker": "Trajectory → Story",
  "hero.desc":
    "نظام تشغيل أكاديمي مدعوم بالذكاء الاصطناعي يبني لك خارطة طريق شخصية من قاعات الجامعة إلى سوق العمل.",
  "hero.cta.primary": "ابدأ مسارك",
  "hero.cta.secondary": "استكشف المجالات",
  "hero.viz.label": "مُحاكي المسار",
  "hero.viz.story": "قصتك تُكتب الآن",
  "hero.step.college": "كلية",
  "hero.step.interest": "اهتمام",
  "hero.step.skill": "مهارة",
  "hero.step.research": "بحث",
  "hero.step.opportunity": "فرصة",
  "hero.step.project": "مشروع",
  "hero.step.impact": "إنجاز",

  // roadmaps
  "roads.eyebrow": "خرائط الطريق",
  "roads.title.a": "اختر مجالك.",
  "roads.title.b": "ابنِ مسارك.",
  "roads.desc":
    "تغطية شاملة للكليات العلمية، البحث العلمي، وريادة الأعمال — مع خارطة طريق شخصية تتفعل بعد التحقق من الهوية الجامعية.",
  "roads.filter.all": "الكل",
  "roads.filter.stem": "الكليات العلمية",
  "roads.filter.research": "البحث العلمي",
  "roads.filter.entre": "ريادة الأعمال",
  "roads.stations": "محطة",
  "roads.resources": "مورد",
  "roads.explore": "استكشف المسار",
  "roads.verified": "يتفعّل بعد التحقق من الهوية الجامعية",
  "roads.custom.title": "مسار مخصص",
  "roads.custom.desc": "تحدّث مع Jatory AI لبناء خارطة طريق فريدة تناسب اهتماماتك وأهدافك.",
  "roads.custom.cta": "ابنِ مسارك مع Jatory",

  // domains
  "d.medicine": "الطب",
  "d.medicine.desc": "من السنة الأولى إلى التخصص، الامتحانات الموحّدة، والممارسة السريرية.",
  "d.pharmacy": "الصيدلة",
  "d.pharmacy.desc": "العلوم الصيدلية، الصيدلة السريرية، وصناعة الدواء.",
  "d.engineering": "الهندسة",
  "d.engineering.desc": "تخصصات الهندسة، المشاريع التطبيقية، والشهادات المهنية.",
  "d.cs": "علوم الحاسب",
  "d.cs.desc": "البرمجة، الذكاء الاصطناعي، والأمن السيبراني.",
  "d.dentistry": "طب الأسنان",
  "d.dentistry.desc": "العلوم الأساسية، الإكلينيك، والتخصصات الفرعية.",
  "d.science": "العلوم الأساسية",
  "d.science.desc": "فيزياء، كيمياء، أحياء، ورياضيات بمسارات بحثية.",
  "d.research": "البحث العلمي",
  "d.research.desc": "من فكرة البحث إلى النشر في المجلات المحكّمة.",
  "d.entre": "ريادة الأعمال",
  "d.entre.desc": "من الفكرة إلى الـ MVP وجمع التمويل وبناء الفريق.",

  // footer
  "footer.tagline": "نظام تشغيل أكاديمي · مدعوم بالذكاء الاصطناعي",
  "footer.platform": "المنصة",
  "footer.resources": "الموارد",
  "footer.company": "الشركة",
  "footer.rights": "جميع الحقوق محفوظة",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.roadmaps": "Roadmaps",
  "nav.satory": "Jatory AI",
  "nav.opportunities": "Opportunities",
  "nav.community": "Community",
  "nav.signin": "Sign in",
  "nav.cta": "Start your trajectory",

  "hero.badge": "Jatory AI · The Intelligent Core",
  "hero.title.from": "From your trajectory",
  "hero.title.to": "to your story",
  "hero.kicker": "Trajectory → Story",
  "hero.desc":
    "An AI-powered academic operating system that builds your personal roadmap — from university lecture halls to the job market.",
  "hero.cta.primary": "Start your trajectory",
  "hero.cta.secondary": "Explore roadmaps",
  "hero.viz.label": "Trajectory Visualizer",
  "hero.viz.story": "Your story is being written",
  "hero.step.college": "College",
  "hero.step.interest": "Interest",
  "hero.step.skill": "Skill",
  "hero.step.research": "Research",
  "hero.step.opportunity": "Opportunity",
  "hero.step.project": "Project",
  "hero.step.impact": "Impact",

  "roads.eyebrow": "Roadmaps",
  "roads.title.a": "Pick your field.",
  "roads.title.b": "Build your path.",
  "roads.desc":
    "Comprehensive coverage of STEM colleges, scientific research, and entrepreneurship — with a personal roadmap that activates after university identity verification.",
  "roads.filter.all": "All",
  "roads.filter.stem": "STEM colleges",
  "roads.filter.research": "Research",
  "roads.filter.entre": "Entrepreneurship",
  "roads.stations": "stations",
  "roads.resources": "resources",
  "roads.explore": "Explore roadmap",
  "roads.verified": "Activates after university ID verification",
  "roads.custom.title": "Custom roadmap",
  "roads.custom.desc": "Talk with Jatory AI to build a unique roadmap tailored to your interests and goals.",
  "roads.custom.cta": "Build with Jatory",

  "d.medicine": "Medicine",
  "d.medicine.desc": "From year one to specialization, board exams, and clinical practice.",
  "d.pharmacy": "Pharmacy",
  "d.pharmacy.desc": "Pharmaceutical sciences, clinical pharmacy, and the drug industry.",
  "d.engineering": "Engineering",
  "d.engineering.desc": "Engineering disciplines, applied projects, and professional certifications.",
  "d.cs": "Computer Science",
  "d.cs.desc": "Programming, AI, and cybersecurity tracks.",
  "d.dentistry": "Dentistry",
  "d.dentistry.desc": "Foundational sciences, clinic, and sub-specialties.",
  "d.science": "Basic Sciences",
  "d.science.desc": "Physics, chemistry, biology, and math with research tracks.",
  "d.research": "Scientific Research",
  "d.research.desc": "From a research idea to publication in peer-reviewed journals.",
  "d.entre": "Entrepreneurship",
  "d.entre.desc": "From idea to MVP, fundraising, and team building.",

  "footer.tagline": "Academic Operating System · Powered by AI",
  "footer.platform": "Platform",
  "footer.resources": "Resources",
  "footer.company": "Company",
  "footer.rights": "All rights reserved",
};

const dicts: Record<Lang, Dict> = { ar, en };

type Ctx = { lang: Lang; dir: "rtl" | "ltr"; t: (k: string) => string; setLang: (l: Lang) => void; toggle: () => void };





