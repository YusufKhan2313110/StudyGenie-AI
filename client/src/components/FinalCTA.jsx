import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-8">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-[36px] border border-slate-700 bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-700 shadow-[0_30px_80px_rgba(59,130,246,0.4)]">
          <div className="relative px-12 py-20 text-center">
            <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white backdrop-blur">
                <Sparkles size={16} />
                Ready to transform your learning?
              </div>

              <h2 className="mt-8 text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                Start Learning<br />Smarter Today.
              </h2>

              <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-blue-100">
                Beautiful AI workspace with summarization, quizzes, flashcards,<br />
                and intelligent explanations — powered by Google Gemini.
              </p>

              <div className="mt-12 flex justify-center">
                <Link
                  to="/workspace"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                >
                  Open AI Workspace Now
                  <ArrowRight
                    size={22}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;