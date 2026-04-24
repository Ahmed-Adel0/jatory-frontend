"use client";

import { useState, useRef, useEffect } from "react";
import {
  LogOut,
  Settings,
  User,
  BookOpen,
  Target,
  HelpCircle,
} from "lucide-react";
import { useAuth } from "@/features/auth/auth-context";

export function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { state, logout } = useAuth();
  const user = state.user;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const userInitials =
    user?.name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "أ";

  const menuItems = [
    {
      icon: User,
      label: "الملف الشخصي",
      onClick: () => {
        setIsOpen(false);
        // Navigate to profile page
      },
    },
    {
      icon: BookOpen,
      label: "دوراتي",
      onClick: () => {
        setIsOpen(false);
        // Navigate to courses page
      },
    },
    {
      icon: Target,
      label: "خارطتي التعليمية",
      onClick: () => {
        setIsOpen(false);
        // Navigate to roadmap page
      },
    },
    {
      icon: Settings,
      label: "الإعدادات",
      onClick: () => {
        setIsOpen(false);
        // Navigate to settings page
      },
    },
    {
      icon: HelpCircle,
      label: "المساعدة والدعم",
      onClick: () => {
        setIsOpen(false);
        // Navigate to help page
      },
    },
  ];

  return (
    <div ref={menuRef} className="relative">
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-linear-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 active:scale-95"
      >
        {userInitials}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-3 w-80 bg-secondary/95 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
          {/* User Info Header */}
          <div className="px-6 py-6 border-b border-border/30 bg-linear-to-b from-primary/5 to-transparent">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-xl shrink-0">
                {userInitials}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground truncate">
                  {user?.name || "المستخدم"}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  مستخدم Jatory
                </p>
                <p className="text-xs text-primary/70 mt-1">طالب متفوق ✨</p>
              </div>
            </div>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-3 gap-1 px-4 py-4 bg-secondary/50 border-b border-border/30">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">12</div>
              <div className="text-xs text-muted-foreground">دورة مسجلة</div>
            </div>
            <div className="text-center border-r border-l border-border/20">
              <div className="text-lg font-bold text-primary">85%</div>
              <div className="text-xs text-muted-foreground">معدل الإكمال</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">24</div>
              <div className="text-xs text-muted-foreground">ساعة تعلم</div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="py-2 px-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors duration-150 group"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="flex-1 text-right">{item.label}</span>
                  <div className="text-muted-foreground/40">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-px bg-border/30" />

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors duration-150 group"
          >
            <LogOut className="h-4 w-4 text-destructive/60 group-hover:text-destructive transition-colors" />
            <span className="flex-1 text-right">تسجيل الخروج</span>
          </button>

          {/* Footer */}
          <div className="px-4 py-3 bg-secondary/30 border-t border-border/20 text-xs text-muted-foreground text-center">
            Jatory v1.0
          </div>
        </div>
      )}
    </div>
  );
}
