import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/brand/brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm">
            <div className="flex items-center gap-2 font-semibold">
              <BrandMark variant="icon" className="scale-[0.8]" />
              <span>Jatory</span>
            </div>
            <div className="text-muted-foreground">
              منصة تعليمية لمسارات طلاب العلوم — النسخة الأولية MVP
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <Link className="hover:text-foreground" href="/courses">
              استكشاف المناهج
            </Link>
            <Link className="hover:text-foreground" href="/dashboard">
              لوحة الطالب
            </Link>
            <Link className="hover:text-foreground" href="/roadmaps/data-analyst">
              المسار المهني
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

