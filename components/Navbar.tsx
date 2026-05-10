"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">WinKoOo.</span>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8 font-medium text-sm text-gray-600 dark:text-gray-400">
                        <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* {mounted && (
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-gray-800 dark:text-gray-200">
                            {theme === 'dark' ? (
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            )}
                        </button>
                    )} */}
                </div>
            </div>
        </nav>
    );
}