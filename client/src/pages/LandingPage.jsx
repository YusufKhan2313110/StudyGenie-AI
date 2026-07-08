import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
          AI Powered Learning Platform
        </span>

        <h1 className="text-6xl font-extrabold leading-tight">
          Learn Faster.
          <br />
          Study Smarter.
          <br />
          Powered by AI.
        </h1>

        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
          Generate summaries, quizzes, flashcards, explanations and chat with
          an intelligent AI tutor using Google Gemini.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Launch App
          </Link>

          <a
            href="#features"
            className="border border-slate-700 hover:bg-slate-900 px-8 py-4 rounded-xl text-lg"
          >
            Explore Features
          </a>
        </div>
      </section>

      <section
        id="features"
        className="max-w-7xl mx-auto px-8 pb-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          ["📄", "Notes Summarizer"],
          ["❓", "Quiz Generator"],
          ["🧠", "Flashcard Creator"],
          ["💬", "AI Tutor"],
        ].map(([icon, title]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <div className="text-4xl mb-5">{icon}</div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-slate-400 mt-3">
              Use AI to make studying easier and more productive.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;