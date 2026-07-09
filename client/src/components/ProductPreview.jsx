import {
  Sparkles,
  FileText,
  Brain,
  CircleHelp,
  Send,
  CheckCircle2,
} from "lucide-react";

function ProductPreview() {
  return (
    <section className="relative py-24 px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">

            <Sparkles size={16} />

            Beautiful AI Workspace

          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight">

            Everything You Need
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              In One Workspace
            </span>

          </h2>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">

            No switching between websites.
            Study, revise and practice inside one elegant AI workspace.

          </p>

        </div>

        <div className="relative rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Browser Top */}

          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">

            <div className="flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <div className="rounded-lg bg-slate-800 px-5 py-2 text-sm text-slate-400">

              https://studygenie-ai.app/workspace

            </div>

            <div />

          </div>

          {/* Workspace */}

          <div className="grid lg:grid-cols-[280px_1fr] min-h-[620px]">

            {/* Sidebar */}

            <aside className="border-r border-slate-800 bg-slate-950 p-6">

              <h3 className="font-bold text-xl mb-8">

                Learning Tools

              </h3>

              <div className="space-y-4">

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">

                  <FileText className="mb-3" />

                  <h4 className="font-bold">

                    Notes Summarizer

                  </h4>

                  <p className="mt-2 text-sm text-blue-100">

                    Turn lengthy notes into concise revision material.

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

                  <Brain className="mb-3 text-violet-400" />

                  <h4 className="font-semibold">

                    Flashcards

                  </h4>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

                  <CircleHelp className="mb-3 text-emerald-400" />

                  <h4 className="font-semibold">

                    AI Explainer

                  </h4>

                </div>

              </div>

            </aside>

            {/* Chat */}

            <div className="flex flex-col">

              <div className="border-b border-slate-800 px-8 py-6 flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-bold">

                    AI Workspace

                  </h3>

                  <p className="text-slate-400 mt-1">

                    Powered by Google Gemini

                  </p>

                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm">

                  Study Session

                </div>

              </div>

              <div className="flex-1 p-8 space-y-6">

                {/* User */}

                <div className="flex justify-end">

                  <div className="max-w-xl rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4">

                    Summarize these Operating Systems notes for my exam.

                  </div>

                </div>

                {/* AI */}

                <div className="flex justify-start">

                  <div className="max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6">

                    <div className="flex items-center gap-2 text-blue-400 font-semibold mb-4">

                      <CheckCircle2 size={18} />

                      Summary Generated

                    </div>

                    <div className="space-y-3 text-slate-300">

                      <p>

                        • Process Management

                      </p>

                      <p>

                        • CPU Scheduling Algorithms

                      </p>

                      <p>

                        • Deadlocks

                      </p>

                      <p>

                        • Memory Management

                      </p>

                      <p>

                        • Virtual Memory

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Prompt */}

              <div className="border-t border-slate-800 p-6">

                <div className="flex items-center gap-4 rounded-2xl bg-slate-900 px-6 py-4 border border-slate-700">

                  <input
                    disabled
                    value="Ask StudyGenie anything..."
                    className="flex-1 bg-transparent outline-none text-slate-500"
                  />

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">

                    <Send size={18} />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductPreview;