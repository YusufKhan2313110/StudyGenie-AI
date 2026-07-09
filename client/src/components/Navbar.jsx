import { Link, useLocation } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Home,
  LayoutDashboard,
} from "lucide-react";

function Navbar() {
  const location = useLocation();

  const isWorkspace = location.pathname === "/workspace";

  const scrollToFeatures = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#features";
      return;
    }

    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 shadow-lg">
            <Sparkles size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">StudyGenie AI</h1>
            <p className="text-sm text-slate-400">Learn Smarter with Gemini</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className={`flex items-center gap-2 transition ${
              location.pathname === "/" ? "text-blue-400" : "text-slate-300 hover:text-white"
            }`}
          >
            <Home size={18} /> Home
          </Link>

          {!isWorkspace && (
            <button onClick={scrollToFeatures} className="text-slate-300 transition hover:text-white">
              Features
            </button>
          )}

          <a
            href="https://github.com/YusufKhan2313110/StudyGenie-AI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 transition hover:text-white"
          >
            <ExternalLink size={18} /> GitHub
          </a>

          <Link
            to="/workspace"
            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
              isWorkspace
                ? "bg-blue-600 text-white"
                : "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:scale-105"
            }`}
          >
            <LayoutDashboard size={18} />
            Workspace
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;