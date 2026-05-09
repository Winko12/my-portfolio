export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-blue-500 selection:text-white">

      {/* 1. MODERN NAVBAR (Sticky with Blur effect) */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">DevPortfolio.</span>
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
            [Your Name].
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 tracking-tight mb-8">
            I build modern web experiences.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I am a software developer who focuses on combining classic, clean design with modern, high-performance web technologies.
          </p>
          <a href="#projects" className="bg-white text-black font-semibold py-4 px-8 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
            Check out my work
          </a>
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
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Node.js'].map((skill) => (
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
                [Your App Image Here]
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-6 text-sm">A full-stack shopping cart application built with Next.js and styled with Tailwind CSS.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">Live Demo ↗</a>
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">GitHub ↗</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300">
              <div className="h-48 bg-gray-800 w-full flex items-center justify-center text-gray-500">
                [Your App Image Here]
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Task Manager</h3>
                <p className="text-gray-400 mb-6 text-sm">A beautiful, modern productivity tool to track daily goals and manage tasks efficiently.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">Live Demo ↗</a>
                  <a href="#" className="text-sm font-semibold text-white hover:text-blue-400">GitHub ↗</a>
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
        <a href="mailto:your.email@example.com" className="inline-block border border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-all">
          Say Hello
        </a>
        <p className="mt-16 text-xs text-gray-600">Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}