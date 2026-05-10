import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// THIS IS THE SEO THAT SHOWS UP ON LINKEDIN/TELEGRAM!
export const metadata: Metadata = {
  title: "Win Ko Oo | Software Developer",
  description: "I build functional, modern web apps. Specializing in TypeScript, JavaScript, and Dart.",
  openGraph: {
    title: "Win Ko Oo | Software Developer",
    description: "Check out my latest projects and skills.",
    url: "https://github.com/Winko12",
    images: [
      {
        url: "/profile.jpg", // Uses your profile picture for the link preview!
        width: 800,
        height: 800,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 font-sans selection:bg-blue-500 selection:text-white overflow-hidden transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}