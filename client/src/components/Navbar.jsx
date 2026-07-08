function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            🎓 StudyGenie AI
          </h1>

          <p className="text-sm text-slate-400">
            AI Powered Learning Workspace
          </p>
        </div>

        <div className="text-sm text-slate-400">
          Gemini 2.5 Flash
        </div>
      </div>
    </header>
  );
}

export default Navbar;