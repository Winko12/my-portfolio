"use client";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function About() {
    const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

    return (
        <motion.section id="about" className="py-24 border-t border-white/10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-10">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <p className="text-gray-400 leading-relaxed mb-6">I enjoy building fast, accessible, and user-friendly applications. I spend my time solving problems and turning ideas into usable products.</p>
                    <p className="text-gray-400 leading-relaxed">When I am not coding, I am exploring new tech, learning about system design, or working on personal projects.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">My Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {['TypeScript', 'JavaScript', 'Dart', 'Next.js', 'React', 'Tailwind CSS', 'Git'].map((skill, i) => (
                            <motion.span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW: LIVE GITHUB CALENDAR */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Days I Code</h3>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl overflow-x-auto flex justify-center">
                    {/* This automatically connects to your GitHub! */}
                    <GitHubCalendar username="Winko12" colorScheme="dark" />
                </div>
            </div>
        </motion.section>
    );
}