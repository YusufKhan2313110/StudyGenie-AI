import { Link } from "react-router-dom";
import {
  FileText,
  Brain,
  GraduationCap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: "summarize",
    icon: FileText,
    title: "Notes Summarizer",
    description: "Convert long notes into concise, exam-ready summaries within seconds.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "quiz",
    icon: GraduationCap,
    title: "Quiz Generator",
    description: "Generate MCQs and practice quizzes instantly to test your understanding.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "flashcards",
    icon: Brain,
    title: "Flashcard Creator",
    description: "Create revision flashcards automatically for quick memorization.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: "explain",
    icon: MessageCircle,
    title: "Explainer",
    description: "Understand difficult concepts with simple AI-powered explanations.",
    gradient: "from-orange-500 to-red-500",
  },
];

function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
            Powerful AI Features
          </span>
          <h2 className="mt-6 text-5xl font-black tracking-tight text-white">
            Everything You Need
            <br />
            To Study Smarter
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-slate-400">
            Tap any tool below to jump straight into the AI workspace with it pre-loaded.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.id}
                to="/workspace"
                state={{ tool: feature.id }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20"
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-xl`}>
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-400">
                  Open Tool
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;