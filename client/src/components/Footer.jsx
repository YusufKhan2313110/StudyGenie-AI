import { Github, Sparkles, Mail, Code2 } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">

                <Sparkles className="text-white" size={22} />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">

                  StudyGenie AI

                </h2>

                <p className="text-sm text-slate-400">

                  AI Learning Workspace

                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">

              StudyGenie AI helps students learn faster with intelligent
              summaries, quizzes, flashcards and AI-powered explanations
              using Google Gemini.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold text-white mb-5">

              Quick Links

            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                Home
              </li>

              <li>
                Features
              </li>

              <li>
                Workspace
              </li>

              <li>
                About
              </li>

            </ul>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-lg font-bold text-white mb-5">

              AI Features

            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                Notes Summarizer
              </li>

              <li>
                Quiz Generator
              </li>

              <li>
                Flashcards
              </li>

              <li>
                AI Explainer
              </li>

            </ul>

          </div>

          {/* Tech */}

          <div>

            <h3 className="text-lg font-bold text-white mb-5">

              Built With

            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-slate-300">

                <Code2 size={18} />

                React + Vite

              </div>

              <div className="flex items-center gap-3 text-slate-300">

                <Mail size={18} />

                Google Gemini API

              </div>

              <a
                href="https://github.com/YusufKhan2313110/StudyGenie-AI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition hover:border-blue-500 hover:bg-slate-800"
              >

                <Github size={18} />

                GitHub Repository

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-slate-500">

            © {year} StudyGenie AI. All rights reserved.

          </p>

          <p className="text-slate-500">

            Built with React • Express • Gemini • Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;