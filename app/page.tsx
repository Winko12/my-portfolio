import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-blue-500 selection:text-white">

      {/* 1. MODERN NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">WinKoOo.</span>
          <div className="hidden md:flex gap-8 font-medium text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">

        {/* 2. HERO SECTION */}
        <section className="py-32 flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex-1 flex flex-col items-start justify-center">
            <p className="text-blue-400 font-semibold tracking-wide mb-3">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
              Win Ko Oo.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-500 tracking-tight mb-8">
              I build functional, modern web apps.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              I am a developer specializing in TypeScript, JavaScript, and Dart. I love building practical utilities and clean user interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#projects" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
                Check out my work
              </a>

              <div className="flex gap-4">
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
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden bg-gray-900 flex items-center justify-center text-gray-600">
              {/* Make sure your profile.jpg is in the public folder! */}
              <Image src="/profile.jpg" alt="Win Ko Oo" fill className="object-cover" priority />
            </div>
          </div>

        </section>

        {/* 3. ABOUT & SKILLS SECTION */}
        <section id="about" className="py-24 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-10">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                I enjoy building fast, accessible, and user-friendly applications. I spend my time solving problems and turning ideas into usable products.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it is building a sleek frontend or a functional utility tool, I love the process of bringing code to life. Currently, I am building projects utilizing modern JavaScript and TypeScript frameworks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'JavaScript', 'Dart', 'Next.js', 'React', 'Tailwind CSS', 'Git', 'GitHub'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. ACTUAL PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* QRCodePremium */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
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
            </div>

            {/* ExpenseTracker */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
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
            </div>

            {/* Color Palette Generator */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
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
            </div>

            {/* Talent Directory */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between">
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
            </div>

          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <footer id="contact" className="py-16 text-center border-t border-white/10 mt-10">
        <h2 className="text-3xl font-bold text-white mb-4">What's Next?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:wkl78689@gmail.com" className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-all">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Say Hello
        </a>
        <p className="mt-16 text-xs text-gray-600">Built by Win Ko Oo. Powered by Next.js & Vercel.</p>
      </footer>
    </div>
  );
}