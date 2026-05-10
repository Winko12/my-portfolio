"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="py-32 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">
            <motion.div
                className="flex-1 flex flex-col items-start justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                {/* Status Badge */}
                <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full w-fit mb-6">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium tracking-wide">
                        Available for work
                    </span>
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide mb-3">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Win Ko Oo.</h1>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-500 tracking-tight mb-8">I build functional web apps.</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
                    I am a developer specializing in TypeScript, JavaScript, and Dart. I love building practical utilities and clean user interfaces.
                </p>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <a href="#projects" className="bg-gray-900 dark:bg-white text-white dark:text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:scale-105">
                        Check out my work
                    </a>
                    <a href="/resume.pdf" download="Win_Ko_Oo_CV.pdf" className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                        Download CV
                    </a>
                </div>

                {/* --- MOVED SOCIAL ICONS HERE --- */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Winko12/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/win-ko-oo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://t.me/winko6" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#229ED9] hover:border-[#229ED9] hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </a>
                </div>
            </motion.div>

            {/* Image Container */}
            <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden bg-gray-200 dark:bg-gray-900">
                    <Image src="/profile.jpg" alt="Win Ko Oo" fill className="object-cover" priority />
                </div>
            </motion.div>
        </section>
    );
}
