import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Coding Finance OS · Funnel Duo",
  description: "Workshop finance dashboard for Funnel Duo - live revenue, P&L, unit economics, and cash flow.",
  icons: {
    icon: "/AI-Agency-Logo-favicon.png",
    shortcut: "/AI-Agency-Logo-favicon.png",
    apple: "/AI-Agency-Logo-favicon.png",
  },
};

// Inline pre-hydration script: set data-theme from localStorage before React mounts,
// avoiding a dark/light flash on initial paint.
const themeInitScript = `
(function(){try{var t=localStorage.getItem('theme');if(!t){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
