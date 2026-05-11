import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; // <-- NEW: Imported Analytics
import "./globals.css";

export const metadata: Metadata = {
  title: "Win Ko Oo | Software Developer",
  description: "Portfolio of Win Ko Oo, a software developer specializing in TypeScript, JavaScript, and Dart.",
  openGraph: {
    title: "Win Ko Oo | Software Developer",
    description: "I build functional, modern web apps. Check out my projects and skills.",
    url: "https://my-portfolio-nine-sable-72.vercel.app/",
    siteName: "Win Ko Oo Portfolio",
    images: [{ url: "/profile.jpg", width: 800, height: 800 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#0a0a0a] text-gray-200">
        {children}
        <Analytics /> {/* <-- NEW: This tracks your visitors! */}
      </body>
    </html>
  );
}