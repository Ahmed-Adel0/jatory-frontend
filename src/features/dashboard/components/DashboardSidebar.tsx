"use client";

import {
  LayoutDashboard, Route, Brain, Film, Briefcase, BookOpen, User, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/shared/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Roadmaps", url: "/roadmaps", icon: Route },
  { title: "AI Navigator", url: "/ai-navigator", icon: Brain },
  { title: "Reels", url: "/reels", icon: Film },
  { title: "Career Hub", url: "/career", icon: Briefcase },
  { title: "مكتبتي", url: "/library", icon: BookOpen },
  { title: "الملف الشخصي", url: "/profile", icon: User },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-l-0 border-r border-sidebar-border" side="right">
      <SidebarContent className="pt-6">
        <div className={`px-4 mb-8 ${collapsed ? "text-center" : ""}`}>
          <Link href="/" className="text-xl font-heading font-bold text-gradient">
            {collapsed ? "J" : "Jatory"}
          </Link>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                        {!collapsed && active && (
                          <ChevronRight className="h-4 w-4 mr-auto rotate-180" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
