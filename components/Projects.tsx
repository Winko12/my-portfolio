"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
    const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

    return (
        <section id="projects" className="py-24 border-t border-white/10">
            <motion.h2 className="text-3xl font-bold text-white mb-10" {...fadeInUp}>Featured Projects</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">

                {projectsData.map((project, index) => (
                    <motion.div key={project.slug} {...fadeInUp} transition={{ delay: index * 0.1 }} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between p-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6">{project.shortDescription}</p>
                        </div>
                        <div className="flex gap-4 mt-auto">
                            {/* This links to our Dynamic Project Page! */}
                            <Link href={`/projects/${project.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors">
                                Read Case Study →
                            </Link>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}