import Link from "next/link";
import { GraduationCap, LayoutDashboard, Map, Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/ui/link-button";

const nav = [
  { href: "/courses", label: "استكشاف المناهج", icon: Search },
  { href: "/dashboard", label: "لوحة الطالب", icon: LayoutDashboard },
  { href: "/roadmaps/data-analyst", label: "مسار نموذجي", icon: Map },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
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

