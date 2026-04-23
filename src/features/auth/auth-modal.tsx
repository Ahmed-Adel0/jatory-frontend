"use client";

import * as React from "react";
import { Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { BrandMark } from "@/components/brand/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/features/auth/auth-context";

type AuthModalContextValue = {
  open: (reason?: string) => void;
  close: () => void;
};

const AuthModalContext = React.createContext<AuthModalContextValue | null>(
  null,
);

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [reason, setReason] = React.useState<string | undefined>(undefined);

  const open = React.useCallback((r?: string) => {
    setReason(r);
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => setIsOpen(false), []);

  return (
    <AuthModalContext.Provider value={{ open, close }}>
      {children}
      <AuthModal open={isOpen} onOpenChange={setIsOpen} reason={reason} />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const ctx = React.useContext(AuthModalContext);
  if (!ctx)
    throw new Error("useAuthModal must be used within AuthModalProvider");
  return ctx;
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.8 10.2H12v3.9h5.6c-.7 2.2-2.6 3.9-5.6 3.9A6.3 6.3 0 0 1 12 5.6c1.7 0 3.2.6 4.3 1.7l2.7-2.7A9.8 9.8 0 0 0 12 2.2C6.9 2.2 2.8 6.3 2.8 11.4S6.9 20.6 12 20.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6Z"
      />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function AuthModal({
  open,
  onOpenChange,
  reason,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  reason?: string;
}) {
  const { login } = useAuth();

  const title = "باقي خطوة واحدة عشان تمتلك مسارك العلمي";
  const desc =
    reason ??
    "سجل دخولك عشان نحفظ لك المسار، نتابع تقدمك، ونحسب نقاطك — التصفح متاح بالكامل بدون تسجيل.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-card/90 p-0 text-foreground ring-1 ring-white/10">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand-cyan)/0.18),transparent_60%)]" />

          <div className="relative p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl border border-primary/25 bg-primary/10">
                <BrandMark variant="icon" className="scale-[0.8]" />
              </span>
              <div className="flex-1">
                <DialogHeader>
                  <DialogTitle className="text-lg font-black">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-7 text-white/60">
                    {desc}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <Button
                className="h-11 justify-start gap-2 font-extrabold"
                onClick={() => {
                  login("google");
                  onOpenChange(false);
                }}
              >
                <span className="grid size-7 place-items-center rounded-lg bg-white/10">
                  <GoogleG />
                </span>
                المتابعة عبر Google
              </Button>

              <Button
                variant="outline"
                className="h-11 justify-start gap-2 border-white/15 bg-transparent font-extrabold text-foreground hover:bg-white/5"
                onClick={() => {
                  login("linkedin");
                  onOpenChange(false);
                }}
              >
                <span className="grid size-7 place-items-center rounded-lg bg-white/10">
                  <LinkedinIcon className="size-4" />
                </span>
                المتابعة عبر LinkedIn
              </Button>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-background/40 p-4 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Lock className="size-4 text-primary" />
                التصفح كضيف
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Sparkles className="size-4 text-[hsl(var(--brand-cyan))]" />
                يُفعّل حفظ المسار + XP
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
