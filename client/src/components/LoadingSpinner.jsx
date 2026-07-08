function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 text-slate-400 py-4">
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-100"></div>
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-200"></div>

      <span className="ml-2">
        Gemini is thinking...
      </span>
    </div>
  );
}

export default LoadingSpinner;