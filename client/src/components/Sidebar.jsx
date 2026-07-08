import tools from "../utils/tools";

function Sidebar({ selectedTool, setSelectedTool }) {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900 p-4">
      <h2 className="text-lg font-bold mb-6">
        AI Tools
      </h2>

      <div className="space-y-3">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`w-full text-left rounded-xl p-4 transition ${
              selectedTool === tool.id
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            <div className="text-2xl">
              {tool.emoji}
            </div>

            <div className="font-semibold mt-2">
              {tool.title}
            </div>

            <div className="text-sm text-slate-300">
              {tool.description}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;