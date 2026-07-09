import { Bot } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg">

        <Bot
          size={22}
          className="text-white"
        />

      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur px-7 py-6 shadow-xl">

        <div className="flex items-center gap-4">

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce" />

            <div
              className="h-3 w-3 rounded-full bg-violet-500 animate-bounce"
              style={{
                animationDelay: "0.15s",
              }}
            />

            <div
              className="h-3 w-3 rounded-full bg-cyan-500 animate-bounce"
              style={{
                animationDelay: "0.3s",
              }}
            />

          </div>

          <span className="text-slate-300 font-medium">

            StudyGenie is thinking...

          </span>

        </div>

      </div>

    </div>
  );
}

export default LoadingSpinner;