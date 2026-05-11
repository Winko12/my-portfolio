import Link from "next/link";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

// Next.js 15+ syntax for async params
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find the exact project based on the URL
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return notFound(); // Shows a 404 page if they type a wrong URL
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans py-24 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Back Button */}
                <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Portfolio
                </Link>

                {/* Project Header */}
                <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">{project.title}</h1>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Details */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">About this project</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {project.longDescription}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold py-4 px-8 rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        View Code on GitHub
                    </a>
                </div>

            </div>
        </div>
    );
}