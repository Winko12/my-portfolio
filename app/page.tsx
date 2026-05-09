export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10 font-sans">

      {/* Hero Section */}
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">
          Hi, I'm Win Ko Oo. 👋
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          I am a passionate developer building modern web applications.
          Welcome to my piece of the internet.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
            View My Work
          </a>
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg border border-gray-600 transition-all">
            My GitHub
          </a>
        </div>
      </div>

    </main>
  );
}