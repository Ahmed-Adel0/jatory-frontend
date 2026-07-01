"use client";

import * as React from "react";
import { Upload, ShieldCheck, X, CheckCircle2, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/shared/components/ui/dialog";
import { useAuth } from "@/features/auth/auth-context";

/* ─── Types ─── */
type Step = "login" | "verify";

type AuthModalContextValue = {
  open: (reason?: string) => void;
  close: () => void;
};

const AuthModalContext = React.createContext<AuthModalContextValue | null>(null);

/* ─── Provider ─── */
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
  if (!ctx) throw new Error("useAuthModal must be used within AuthModalProvider");
  return ctx;
}

/* ─── Google SVG ─── */
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── Upload Drop Zone ─── */
function UploadZone({
  onFileSelected,
  file,
}: {
  onFileSelected: (f: File) => void;
  file: File | null;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) onFileSelected(dropped);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`relative mt-4 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300 py-8 px-4 ${
        dragging
          ? "border-[#0dcfcf] bg-[#0dcfcf]/10"
          : file
          ? "border-[#0dcfcf]/60 bg-[#0dcfcf]/5"
          : "border-white/15 bg-white/3 hover:border-[#0dcfcf]/40 hover:bg-[#0dcfcf]/5"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onFileSelected(f); }}
      />

      {file ? (
        <>
          <CheckCircle2 className="size-10 text-[#0dcfcf]" />
          <p className="text-sm font-semibold text-[#0dcfcf]">{file.name}</p>
          <p className="text-xs text-white/40">انقر لتغيير الملف</p>
        </>
      ) : (
        <>
          <Upload className="size-10 text-[#0dcfcf]" strokeWidth={1.5} />
          <p className="text-sm text-white/70">Drag and drop or click to upload</p>
        </>
      )}
    </div>
  );
}

/* ─── Main Modal ─── */
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
  const router = useRouter();
  const [step, setStep] = React.useState<Step>("login");
  const [uploading, setUploading] = React.useState(false);
  const [uploadDone, setUploadDone] = React.useState(false);
  const [idFile, setIdFile] = React.useState<File | null>(null);

  /* reset on close */
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep("login");
        setUploadDone(false);
        setIdFile(null);
        setUploading(false);
      }, 300);
    }
  }, [open]);

  const handleOAuth = (provider: "google" | "linkedin") => {
    login(provider);
    setStep("verify");
  };

  const handleVerify = async () => {
    if (!idFile) return;
    setUploading(true);
    // Stub: simulate upload delay
    await new Promise((r) => setTimeout(r, 1500));
    setUploading(false);
    setUploadDone(true);
    setTimeout(() => {
      onOpenChange(false);
      router.push("/home");
    }, 1200);
  };

  const handleSkip = () => {
    onOpenChange(false);
    router.push("/home");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-[#0C0F12] p-0 text-foreground ring-1 ring-white/10 overflow-hidden max-w-lg">
        <AnimatePresence mode="wait">
          {step === "login" ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {/* Cyan radial glow top */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(13,207,207,0.18),transparent_65%)]" />

              <div className="relative p-7">
                {/* Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(13,207,207,0.25)] bg-black">
                    <ShieldCheck className="size-5 text-[#0dcfcf]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold leading-snug text-white">
                      باقي خطوة واحدة عشان تمتلك مسارك
                    </h2>
                    <p className="mt-1 text-sm text-white/50 leading-relaxed">
                      {reason ?? "سجّل دخولك — التصفح متاح بالكامل بدون تسجيل."}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid gap-3">
                  <Button
                    className="h-12 justify-start gap-3 bg-[#0dcfcf] text-black font-bold hover:bg-[#0dcfcf]/90 hover:shadow-[0_0_30px_rgba(13,207,207,0.35)] transition-all"
                    onClick={() => handleOAuth("google")}
                  >
                    <span className="grid size-7 place-items-center rounded-lg bg-black/15">
                      <GoogleG />
                    </span>
                    المتابعة عبر Google
                  </Button>

                  <Button
                    variant="outline"
                    className="h-12 justify-start gap-3 border-white/15 bg-transparent font-bold text-foreground hover:bg-white/5 hover:border-white/25 transition-all"
                    onClick={() => handleOAuth("linkedin")}
                  >
                    <span className="grid size-7 place-items-center rounded-lg bg-white/10">
                      <LinkedinIcon className="size-4" />
                    </span>
                    المتابعة عبر LinkedIn
                  </Button>
                </div>

                <p className="mt-5 text-center text-xs text-white/30">
                  بالتسجيل توافق على الشروط وسياسة الخصوصية
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="verify"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {/* Side accent bar — matches veryfied.jpeg left border */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(13,207,207,0.12),transparent_55%)]" />

              <div className="relative">
                {/* Title area — matches "Verified University Portal" style */}
                <div className="flex items-center gap-3 border-b border-white/8 px-7 py-5">
                  <div className="h-7 w-1 rounded-full bg-[#0dcfcf]" />
                  <h2 className="text-xl font-bold text-white">Verified University Portal</h2>
                </div>

                <div className="px-7 py-6">
                  {uploadDone ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center gap-4 py-6 text-center"
                    >
                      <div className="flex size-16 items-center justify-center rounded-full border border-[#0dcfcf]/40 bg-[#0dcfcf]/10">
                        <CheckCircle2 className="size-8 text-[#0dcfcf]" />
                      </div>
                      <p className="text-lg font-bold text-white">تم التحقق بنجاح!</p>
                      <p className="text-sm text-white/50">جاري التحويل للمنصة…</p>
                    </motion.div>
                  ) : (
                    <>
                      {/* ID Verification card — matches veryfied.jpeg card */}
                      <div className="rounded-xl border border-[rgba(13,207,207,0.3)] bg-[rgba(13,207,207,0.06)] p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex size-8 items-center justify-center rounded-lg border border-[rgba(13,207,207,0.3)] bg-black">
                            <GraduationCap className="size-4 text-[#0dcfcf]" />
                          </div>
                          <h3 className="font-bold text-white text-base">ID Verification</h3>
                        </div>

                        <p className="text-sm text-white/70 leading-relaxed">
                          Please upload a photo of your University ID card to proceed.
                        </p>
                        <p className="mt-2 text-xs text-white/40 italic">
                          Verified status unlocks premium data, course reviews, and Zoom lecture archives.
                        </p>

                        <UploadZone onFileSelected={setIdFile} file={idFile} />
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex flex-col gap-2">
                        <Button
                          className="h-11 w-full bg-[#0dcfcf] font-bold text-black hover:bg-[#0dcfcf]/90 hover:shadow-[0_0_30px_rgba(13,207,207,0.35)] transition-all disabled:opacity-50"
                          disabled={!idFile || uploading}
                          onClick={handleVerify}
                        >
                          {uploading ? (
                            <span className="flex items-center gap-2">
                              <span className="size-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                              جاري الرفع...
                            </span>
                          ) : (
                            "تحقق وانضم للمنصة"
                          )}
                        </Button>

                        <button
                          onClick={handleSkip}
                          className="text-center text-sm text-white/40 hover:text-white/70 transition-colors py-1"
                          type="button"
                        >
                          تخطى — سأتحقق لاحقاً
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
