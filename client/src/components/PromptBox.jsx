import { useState } from "react";

function PromptBox({ onSend, loading }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim() || loading) return;

    onSend(prompt);
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-800 p-4 flex gap-3"
    >
      <textarea
        className="flex-1 resize-none rounded-xl bg-slate-900 border border-slate-700 text-white p-4 outline-none focus:border-blue-500"
        rows="3"
        placeholder="Ask anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-6 rounded-xl font-semibold"
      >
        Send
      </button>
    </form>
  );
}

export default PromptBox;