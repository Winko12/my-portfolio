"use client";
import { motion } from "framer-motion";

export default function About() {
    const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

    return (
        <motion.section id="about" className="py-24 border-t border-gray-200 dark:border-white/10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">I enjoy building fast, accessible, and user-friendly applications. I spend my time solving problems and turning ideas into usable products.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {['TypeScript', 'JavaScript', 'Dart', 'Next.js', 'React', 'Tailwind CSS', 'Git'].map((skill, i) => (
                            <motion.span key={skill} className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}