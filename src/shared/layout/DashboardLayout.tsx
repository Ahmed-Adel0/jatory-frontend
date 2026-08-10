"use client";

import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";
import { Bell, Search } from "lucide-react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full rtl overflow-x-hidden">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between gap-3 border-b border-border/50 px-3 sm:px-6 glass-card">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="relative hidden sm:block">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="ابحث..."
                  className="h-9 w-40 md:w-64 rounded-lg bg-secondary/50 border-0 pr-10 pl-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                أ
              </div>
            </div>
          </header>
          <main className="flex-1 min-w-0 overflow-auto bg-[#06080A]/50 p-3 sm:p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
