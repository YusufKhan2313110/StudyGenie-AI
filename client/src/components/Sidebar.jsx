import tools from "../utils/tools";
import {
  Sparkles,
  ChevronRight,
} from "lucide-react";

function Sidebar({
  selectedTool,
  setSelectedTool,
}) {
  return (
    <aside className="hidden lg:flex w-80 flex-col border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      {/* Top */}

      <div className="border-b border-slate-800 p-7">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg">

            <Sparkles
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              AI Workspace

            </h2>

            <p className="text-sm text-slate-400">

              Choose a learning tool

            </p>

          </div>

        </div>

      </div>

      {/* Tools */}

      <div className="flex-1 overflow-y-auto px-5 py-6">

        <div className="space-y-4">

          {tools.map((tool) => {

            const active =
              selectedTool === tool.id;

            return (

              <button
                key={tool.id}
                onClick={() =>
                  setSelectedTool(tool.id)
                }
                className={`group w-full rounded-3xl border p-5 text-left transition-all duration-300

                ${
                  active
                    ? "border-blue-500 bg-gradient-to-r from-blue-600/25 to-violet-600/20 shadow-xl shadow-blue-500/10"
                    : "border-slate-800 bg-slate-900 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-800"
                }`}
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="mb-3 text-4xl">

                      {tool.emoji}

                    </div>

                    <h3 className="text-lg font-bold">

                      {tool.title}

                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">

                      {tool.description}

                    </p>

                  </div>

                  <ChevronRight
                    size={20}
                    className={`transition ${
                      active
                        ? "translate-x-1 text-blue-400"
                        : "text-slate-500 group-hover:translate-x-1"
                    }`}
                  />

                </div>

              </button>

            );

          })}

        </div>

      </div>

      {/* Bottom Card */}

      <div className="border-t border-slate-800 p-6">

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-6 shadow-xl">

          <p className="text-sm uppercase tracking-widest text-blue-100">

            Powered By

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            Gemini AI

          </h3>

          <p className="mt-3 text-sm leading-6 text-blue-100">

            Generate summaries, quizzes,
            flashcards and explanations
            instantly.

          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;