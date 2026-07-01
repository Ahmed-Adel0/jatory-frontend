import type { Metadata } from "next";
import { Cairo, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/features/auth/auth-context";
import { AuthModalProvider } from "@/features/auth/auth-modal";
import { Footer } from "@/shared/layout/Footer";

const cairo = Cairo({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jatory — AI Academic Operating System",
  description:
    "منصة Jatory تحوّل رحلتك الأكاديمية لنظام ذكي يوجهك يوم بيوم — من أول يوم جامعة لحد ما توصل لهدفك",
  icons: {
    icon: "/logoicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${inter.variable} ${geistMono.variable} antialiased selection:bg-primary/30`}
      >
          <AuthProvider>
            <AuthModalProvider>
              {children}
            </AuthModalProvider>
          </AuthProvider>
      </body>
    </html>
  );
}

