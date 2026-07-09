import { useState } from "react";
import { SendHorizonal } from "lucide-react";

function PromptBox({ onSend, loading }) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!prompt.trim() || loading) return;

    onSend(prompt);

    setPrompt("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      handleSubmit(e);
    }
  }

  return (
    <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl px-8 py-6">

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto"
      >

        <div className="rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl transition focus-within:border-blue-500">

          <textarea
            rows={3}
            value={prompt}
            disabled={loading}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask StudyGenie anything... (Shift + Enter for a new line)"
            className="min-h-[110px] w-full resize-none rounded-t-3xl bg-transparent px-7 py-6 text-lg text-white placeholder:text-slate-500 outline-none"
          />

          <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">

            <p className="text-sm text-slate-500">
              {prompt.length} characters
            </p>

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  Thinking...
                </>
              ) : (
                <>
                  Send

                  <SendHorizonal size={18} />
                </>
              )}
            </button>

          </div>

        </div>

      </form>

    </div>
  );
}

export default PromptBox;