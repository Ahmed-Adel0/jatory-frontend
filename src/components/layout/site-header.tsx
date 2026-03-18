import Link from "next/link";
import { LayoutDashboard, Map, Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/ui/link-button";
import { BrandMark } from "@/components/brand/brand-mark";

const nav = [
  { href: "/courses", label: "استكشاف المناهج", icon: Search },
  { href: "/dashboard", label: "لوحة الطالب", icon: LayoutDashboard },
  { href: "/roadmaps/data-analyst", label: "مسار نموذجي", icon: Map },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <BrandMark variant="icon" priority className="scale-[0.80]" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Jatory</div>
            <div className="text-xs text-muted-foreground">
              من التشتت إلى الترتيب
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(({ href, label, icon: Icon }) => (
            <LinkButton
              key={href}
              href={href}
              variant="ghost"
              className="inline-flex items-center gap-2"
            >
              <Icon className="size-4" />
              {label}
            </LinkButton>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href="/dashboard"
            className="hidden sm:inline-flex"
            variant="default"
          >
            ابدأ الآن
          </LinkButton>
          <LinkButton
            href="/courses"
            variant="outline"
            className="sm:hidden"
          >
            بحث
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}

