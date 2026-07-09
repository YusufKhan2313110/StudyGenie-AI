import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24 flex flex-col items-center text-center">
        <span className="mb-6 rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
          AI Powered Learning Platform
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-none">
          Learn Faster.
          <br />
          Study Smarter.
          <br />
          Powered by AI.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
          Generate summaries, quizzes, flashcards, explanations, and chat with
          an intelligent AI tutor powered by Google Gemini.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mt-20 px-8 pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: "📄",
            title: "Notes Summarizer",
            description:
              "Convert lengthy notes into concise, easy-to-understand summaries.",
            tool: "summarize",
          },
          {
            icon: "❓",
            title: "Quiz Generator",
            description:
              "Create AI-powered quizzes instantly to test your understanding.",
            tool: "quiz",
          },
          {
            icon: "🧠",
            title: "Flashcard Creator",
            description:
              "Generate smart flashcards for faster revision and better retention.",
            tool: "flashcards",
          },
          {
            icon: "💬",
            title: "Explainer",
            description:
              "Ask questions anytime and receive detailed explanations from AI.",
            tool: "explain",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            onClick={() =>
              navigate("/workspace", {
                state: { tool: feature.tool },
              })
            }
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 cursor-pointer"
          >
            <div className="mb-5 text-4xl">{feature.icon}</div>

            <h3 className="text-2xl font-semibold">{feature.title}</h3>

            <p className="mt-3 text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;