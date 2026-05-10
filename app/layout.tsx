import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Win Ko Oo | Software Developer",
  description: "Portfolio of Win Ko Oo, a software developer specializing in TypeScript, JavaScript, and Dart.",
  keywords: ["Software Developer", "TypeScript", "JavaScript", "Dart", "Portfolio"],
  openGraph: {
    title: "Win Ko Oo | Software Developer",
    description: "I build functional, modern web apps. Check out my projects and skills.",
    url: "https://my-portfolio-nine-sable-72.vercel.app/",
    siteName: "Win Ko Oo Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Win Ko Oo Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Win Ko Oo | Software Developer",
    description: "Software developer specializing in TypeScript, JavaScript, and Dart.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
