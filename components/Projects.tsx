"use client";
import { motion } from "framer-motion";

export default function Projects() {
    const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

    return (
        <section id="projects" className="py-24 border-t border-gray-200 dark:border-white/10">
            <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10" {...fadeInUp}>Featured Projects</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">

                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            </div>
                            <a href="https://github.com/Winko12/QRCodePremium" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">QR Code Premium</h3>
                        <p className="text-gray-400 mb-6 text-sm">A robust application to generate custom QR Codes with specialized presets. Built with TypeScript for high reliability.</p>
                    </div>
                    <div className="px-8 pb-6 flex gap-3 text-xs font-semibold text-gray-500">
                        <span>TypeScript</span>
                        <span>Next.js</span>
                    </div>
                </motion.div>

                {/* ExpenseTracker */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-green-500/20 text-green-400 rounded-lg">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <a href="https://github.com/Winko12/ExpenseTracker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Expense Tracker</h3>
                        <p className="text-gray-400 mb-6 text-sm">A financial utility application designed to help users track their daily expenses and manage their budgets effectively.</p>
                    </div>
                    <div className="px-8 pb-6 flex gap-3 text-xs font-semibold text-gray-500">
                        <span>TypeScript</span>
                        <span>React</span>
                    </div>
                </motion.div>

                {/* Color Palette Generator */}
                <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            </div>
                            <a href="https://github.com/Winko12/Color-Palette-Generator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Color Palette Generator</h3>
                        <p className="text-gray-400 mb-6 text-sm">A helpful design tool that allows developers and designers to generate and grab beautiful color palettes.</p>
                    </div>
                    <div className="px-8 pb-6 flex gap-3 text-xs font-semibold text-gray-500">
                        <span>JavaScript</span>
                        <span>CSS</span>
                    </div>
                </motion.div>

                {/* Talent Directory */}
                <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-orange-500/20 text-orange-400 rounded-lg">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <a href="https://github.com/Winko12/Talent-Directory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Talent Directory</h3>
                        <p className="text-gray-400 mb-6 text-sm">A directory application built to manage, index, and organize talent data efficiently.</p>
                    </div>
                    <div className="px-8 pb-6 flex gap-3 text-xs font-semibold text-gray-500">
                        <span>Dart</span>
                        <span>Flutter</span>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}