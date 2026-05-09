'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  // Animation settings for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">

      {/* 1. MODERN NAVBAR with Availability Indicator */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tighter text-white">WinKoOo.</span>
            {/* Pulsing Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Available for work</span>
            </div>
          </div>
          <div className="flex gap-8 font-medium text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">

        {/* 2. HERO SECTION with Download CV */}
        <section className="py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 flex flex-col items-start justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 font-semibold tracking-wide mb-3 mx-auto md:mx-0">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 mx-auto md:mx-0">
              Win Ko Oo.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-500 tracking-tight mb-8">
              I build functional, modern web apps.
            </h2>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <a href="#projects" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                View Projects
              </a>
              {/* CV Download Button */}
              <a
                href="/cv.pdf"
                download
                className="group flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="group-hover:translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
            </div>

            <div className="flex gap-4 mx-auto md:mx-0">
              <a href="https://github.com/Winko12/" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/win-ko-oo/" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden bg-gray-900">
              <Image src="/profile.jpg" alt="Win Ko Oo" fill className="object-cover" priority />
            </div>
          </motion.div>
        </section>

        {/* 3. ABOUT SECTION with Fade Reveal */}
        <motion.section
          id="about" className="py-24 border-t border-white/10"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center md:text-left">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-gray-400 leading-relaxed">
              <p className="mb-6">
                I enjoy building fast, accessible, and user-friendly applications. I spend my time solving problems and turning ideas into usable products.
              </p>
              <p>
                Whether it is building a sleek frontend or a functional utility tool, I love the process of bringing code to life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'JavaScript', 'Dart', 'Next.js', 'React', 'Tailwind CSS', 'Git'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. PROJECTS SECTION with Staggered Entrance */}
        <section id="projects" className="py-24 border-t border-white/10">
          <motion.h2
            className="text-3xl font-bold text-white mb-10 text-center md:text-left"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Project Card 1 */}
            <motion.div
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all flex flex-col justify-between"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 text-center md:text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </div>
                  <a href="https://github.com/Winko12/QRCodePremium" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">QR Code Premium</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">A robust application to generate custom QR Codes with specialized presets. Built with TypeScript for high reliability.</p>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all flex flex-col justify-between"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-8 text-center md:text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-green-500/20 text-green-400 rounded-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <a href="https://github.com/Winko12/ExpenseTracker" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Expense Tracker</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">A financial utility application designed to help users track their daily expenses and manage their budgets.</p>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <footer id="contact" className="py-24 text-center border-t border-white/10 mt-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-4">What's Next?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:wkl78689@gmail.com" className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-all">
            Say Hello
          </a>
          <p className="mt-20 text-xs text-gray-600">Built by Win Ko Oo. Powered by Next.js & Vercel.</p>
        </motion.div>
      </footer>
    </div>
  );
}