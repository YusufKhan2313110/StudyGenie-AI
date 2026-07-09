import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Brain,
  BookOpen,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

function LandingHero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
              <Sparkles size={18} /> Powered by Google Gemini AI
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tighter lg:text-7xl">
              Learn Faster.<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Study Smarter.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              StudyGenie AI is your elegant all-in-one AI workspace. Summarize notes,
              generate quizzes, create flashcards, and get clear explanations — powered by Google Gemini.
            </p>

            <div className="mt-12">
              <Link
                to="/workspace"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-10 py-5 text-xl font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02]"
              >
                Enter AI Workspace
                <ArrowRight size={22} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-[32px] border border-slate-700 bg-slate-900/80 p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(37,99,235,0.25)]">
              <div className="space-y-4">
                {[
                  { icon: BookOpen, title: "Notes Summarizer" },
                  { icon: GraduationCap, title: "Quiz Generator" },
                  { icon: Brain, title: "Flashcard Creator" },
                  { icon: MessageCircle, title: "Explainer" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500">
                        <Icon size={24} className="text-white" />
                      </div>
                      <p className="font-medium">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;