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
        <section className="py-32 flex flex-col items-start justify-center">
          <p className="text-blue-400 font-semibold tracking-wide mb-3">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            Win Ko Oo.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 tracking-tight mb-8">
            I build modern web experiences.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I am a software developer who focuses on combining classic, clean design with modern, high-performance web technologies.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
              Check out my work
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* GitHub */}
              <a href="https://github.com/Winko12/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/win-ko-oo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/winko6" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#229ED9] hover:border-[#229ED9] hover:text-white hover:-translate-y-1 transition-all text-gray-400">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
          </div>
        </section>

        {/* 3. ABOUT & SKILLS SECTION */}
        <section id="about" className="py-24 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-10">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                My journey into web development started because I love creating things that live on the internet. My goal is to build digital experiences that are fast, accessible, and visually stunning.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I am not coding, I am exploring new tech, learning about system design, or working on personal projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {/* Modern Skill Pills */}
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'Node.js'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Project Card 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300">
              <div className="h-48 bg-gray-800 w-full flex items-center justify-center text-gray-500">
                [Project 1 Image]
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-6 text-sm">A full-stack shopping cart application built with Next.js and styled with Tailwind CSS.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">Live Demo ↗</a>
                  <a href="https://github.com/Winko12/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400">GitHub ↗</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300">
              <div className="h-48 bg-gray-800 w-full flex items-center justify-center text-gray-500">
                [Project 2 Image]
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Task Manager</h3>
                <p className="text-gray-400 mb-6 text-sm">A beautiful, modern productivity tool to track daily goals and manage tasks efficiently.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">Live Demo ↗</a>
                  <a href="https://github.com/Winko12/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400">GitHub ↗</a>
                </div>
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

        {/* Email Mailto Link */}
        <a href="mailto:wkl78689@gmail.com" className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-all">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Say Hello
        </a>

        <p className="mt-16 text-xs text-gray-600">Built by Win Ko Oo. Powered by Next.js & Vercel.</p>
      </footer>
    </div>
  );
}