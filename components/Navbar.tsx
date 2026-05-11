export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/10 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-xl font-bold tracking-tighter text-white">WinKoOo.</span>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8 font-medium text-sm text-gray-400">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}