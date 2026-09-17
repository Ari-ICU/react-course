"use client";

import { useState, useEffect } from "react";
import { Search, Timer, CheckCircle } from "lucide-react";

export function CustomHookDemo() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [requestCount, setRequestCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // useDebounce simulation (400ms)
  useEffect(() => {
    setIsTyping(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setIsTyping(false);
      if (query.trim()) {
        setRequestCount((prev) => prev + 1);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 text-slate-800 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Timer className="w-5 h-5 text-purple-600" />
          <h4 className="font-semibold text-slate-900">useDebounce Custom Hook Visualizer</h4>
        </div>
        <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full font-mono font-medium">
          400ms delay
        </span>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Type Rapidly in Input:
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search API topics (e.g. TanStack Query, Zustand, Next)..."
            className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Immediate Value</span>
          <p className="font-mono text-sm text-amber-700 font-semibold truncate">
            {query || <span className="text-slate-400 font-normal">(empty)</span>}
          </p>
          <span className="text-[10px] text-slate-500">Updates on every single keystroke</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Debounced Value</span>
            {isTyping && <span className="text-[10px] text-purple-600 font-semibold animate-pulse">Debouncing...</span>}
          </div>
          <p className="font-mono text-sm text-emerald-700 font-semibold truncate">
            {debouncedQuery || <span className="text-slate-400 font-normal">(empty)</span>}
          </p>
          <span className="text-[10px] text-slate-500">Waits 400ms after user stops typing</span>
        </div>
      </div>

      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
        <span className="text-slate-600 font-medium">Total API Calls Triggered:</span>
        <span className="font-mono text-sm font-bold text-slate-900 bg-white border border-slate-200 px-3 py-1 rounded shadow-xs">
          {requestCount} requests
        </span>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        💡 Without debouncing, typing 20 characters triggers 20 network requests. With <code>useDebounce</code>, only 1 request is dispatched!
      </p>
    </div>
  );
}
