"use client";

import { useState, useRef } from "react";
import { RotateCcw, Plus, Zap, AlertCircle } from "lucide-react";

export function StateDemo() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const renderCount = useRef(0);
  renderCount.current++;

  const addLog = (msg: string) => {
    setHistory((prev) => [msg, ...prev.slice(0, 4)]);
  };

  const handleSimpleAdd = () => {
    setCount(count + 1);
    addLog(`setCount(${count + 1}) called`);
  };

  const handleDoubleBrokenAdd = () => {
    // Both read the same stale 'count'
    setCount(count + 1);
    setCount(count + 1);
    addLog(`❌ Double direct add: both saw count=${count} -> result=${count + 1}`);
  };

  const handleDoubleSafeAdd = () => {
    // Functional updater gets latest queue state
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    addLog(`✅ Functional update: prev => prev + 1 (twice) -> result=${count + 2}`);
  };

  const handleReset = () => {
    setCount(0);
    setHistory([]);
    addLog("State reset to 0");
  };

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-5 text-slate-800 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <h4 className="font-semibold text-slate-900">Live State Batching & Updater Simulator</h4>
        </div>
        <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200">
          Renders: <strong className="text-emerald-600 font-bold">{renderCount.current}</strong>
        </span>
      </div>

      <div className="text-center py-6 bg-slate-50/80 rounded-xl border border-slate-200/80">
        <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Current State Value</span>
        <div className="text-6xl font-black text-slate-900 tracking-tight my-2">
          {count}
        </div>
        <p className="text-xs text-slate-500">React state is immutable and triggers reconciliation upon change.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <button
          onClick={handleSimpleAdd}
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-xs transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Simple Increment (+1)
        </button>

        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-xs transition-colors border border-slate-200 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Reset State (0)
        </button>

        <button
          onClick={handleDoubleBrokenAdd}
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-amber-50 border border-amber-200 hover:bg-amber-100/70 text-amber-800 rounded-lg font-medium text-xs transition-colors cursor-pointer"
          title="Calls setCount(count + 1) twice directly"
        >
          <AlertCircle className="w-4 h-4 text-amber-600" /> Stale Double Add (Bug)
        </button>

        <button
          onClick={handleDoubleSafeAdd}
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 text-emerald-800 rounded-lg font-medium text-xs transition-colors cursor-pointer"
          title="Calls setCount(prev => prev + 1) twice"
        >
          <Zap className="w-4 h-4 text-emerald-600" /> Functional Double (+2)
        </button>
      </div>

      {history.length > 0 && (
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-mono space-y-1">
          <span className="text-slate-500 uppercase tracking-wider font-semibold block text-[10px]">Recent Activity:</span>
          {history.map((log, idx) => (
            <div key={idx} className="text-slate-700 truncate">
              › {log}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
