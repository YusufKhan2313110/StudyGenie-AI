import {
  MousePointerClick,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose an AI Tool",
    description:
      "Select Summarizer, Quiz Generator, Flashcards or AI Explainer depending on what you're studying.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Ask StudyGenie",
    description:
      "Paste your notes or ask a question. Gemini instantly understands your request and generates personalized content.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: GraduationCap,
    title: "Study Smarter",
    description:
      "Revise faster with organized notes, quizzes, flashcards and explanations tailored for effective learning.",
    color: "from-emerald-500 to-green-500",
  },
];

function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300 font-medium">

            Simple Workflow

          </span>

          <h2 className="mt-6 text-5xl font-black text-white tracking-tight">

            Study in
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              {" "}Three Easy Steps
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-8">

            No complicated setup.
            Open the workspace, choose an AI tool and start learning immediately.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Connector */}

          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 rounded-full opacity-20" />

          <div className="grid lg:grid-cols-3 gap-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative group"
                >

                  {/* Step Number */}

                  <div className="absolute -top-5 left-6 z-20">

                    <div className="h-12 w-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center font-black text-lg text-white shadow-xl">

                      {index + 1}

                    </div>

                  </div>

                  {/* Card */}

                  <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 pt-12 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/10">

                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} shadow-xl`}
                    >
                      <Icon
                        size={30}
                        className="text-white"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-5 text-slate-400 leading-8">

                      {step.description}

                    </p>

                    <div className="mt-8 flex items-center gap-2 text-blue-400 font-semibold">

                      Step {index + 1}

                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;