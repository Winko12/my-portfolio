"use client";
import { motion } from "framer-motion";

export default function Contact() {
    const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

    return (
        <motion.footer id="contact" className="py-24 border-t border-gray-200 dark:border-white/10 mt-10 bg-white dark:bg-[#0a0a0a]" {...fadeInUp}>
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>

                {/* Replace YOUR_FORMSPREE_ID below with your real ID */}
                <form action="https://formspree.io/f/mojrpwjk" method="POST" className="flex flex-col gap-4 text-left mt-8">
                    <input type="text" name="name" required placeholder="Your Name" className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 outline-none dark:text-white" />
                    <input type="email" name="email" required placeholder="Your Email" className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 outline-none dark:text-white" />
                    <textarea name="message" rows={5} required placeholder="Your Message..." className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 outline-none dark:text-white resize-none"></textarea>
                    <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all">Send Message</button>
                </form>
            </div>
        </motion.footer>
    );
}