"use client";

import {
  LayoutDashboard, Route, Brain, BookOpen, User, ChevronRight, Layers,
} from "lucide-react";

import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "لوحة التحكم", url: "/update", icon: LayoutDashboard },
  { title: "مساراتي", url: "/update", icon: Route },
  { title: "ملاح الذكاء", url: "/update", icon: Brain },
  { title: "مستعرض المناهج", url: "/update", icon: Layers },
  { title: "المكتبة", url: "/update", icon: BookOpen },
  { title: "الملف الشخصي", url: "/update", icon: User },
];


export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-l-0 border-r border-sidebar-border" side="right">
      <SidebarContent className="pt-6">
        <div className={`px-4 mb-8 ${collapsed ? "text-center" : ""}`}>
          <span className="text-xl font-heading font-bold text-gradient">
            {collapsed ? "J" : "Jatory"}
          </span>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        href={item.url}
                        end
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                        {!collapsed && active && (
                          <ChevronRight className="h-4 w-4 mr-auto" />
                        )}
                      </NavLink>
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
