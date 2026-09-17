"use client";

import { useState } from "react";
import { X, Search, CheckCircle2, ChevronRight, BookOpen } from "lucide-react";
import { modulesData, ModuleItem } from "@/data/modules-data";

interface ChapterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentModuleId: string;
  currentTopicId: string;
  onSelectTopic: (moduleId: string, topicId: string) => void;
  completedTopics: string[];
}

export function ChapterDrawer({
  isOpen,
  onClose,
  currentModuleId,
  currentTopicId,
  onSelectTopic,
  completedTopics,
}: ChapterDrawerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!isOpen) return null;

  const categories = ["all", "Fundamentals", "Core Concepts", "Hooks & Lifecycle", "Routing & Network", "State & Architecture", "Enterprise & Production", "Projects"];

  const filteredModules = modulesData.filter((mod) => {
    const matchesCategory = selectedCategory === "all" || mod.category === selectedCategory;
    const matchesSearch =
      mod.title.toLowerCase().includes(search.toLowerCase()) ||
      mod.number.includes(search) ||
      mod.topics.some((t) => t.title.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalTopicsCount = modulesData.reduce((acc, m) => acc + m.topics.length, 0);
  const completedCount = completedTopics.length;
  const progressPercent = Math.round((completedCount / totalTopicsCount) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Main Drawer Modal */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Curriculum Navigator
                <span className="text-xs font-mono bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-xs">
                  27 Modules
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Course Progress: <strong className="text-emerald-600 font-bold">{completedCount}</strong> of {totalTopicsCount} completed ({progressPercent}%)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search modules and topics (e.g., Zustand, TanStack, JSX, useEffect)..."
              className="w-full bg-slate-50 border border-slate-300 pl-10 pr-4 py-2.5 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              autoFocus
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors capitalize cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50/50">
          {filteredModules.map((mod) => {
            const isCurrentModule = mod.id === currentModuleId;
            const completedInMod = mod.topics.filter((t) => completedTopics.includes(t.id)).length;
            const modProgress = Math.round((completedInMod / mod.topics.length) * 100);

            return (
              <div
                key={mod.id}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between bg-white ${
                  isCurrentModule
                    ? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                      MODULE {mod.number}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {completedInMod}/{mod.topics.length} done
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-900 text-sm line-clamp-1">{mod.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 mb-3">{mod.summary}</p>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                    <div
                      className="bg-emerald-500 h-full transition-all"
                      style={{ width: `${modProgress}%` }}
                    />
                  </div>
                </div>

                {/* Sub-topics quick list */}
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  {mod.topics.slice(0, 3).map((t) => {
                    const isCurrentTopic = t.id === currentTopicId;
                    const isDone = completedTopics.includes(t.id);

                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          onSelectTopic(mod.id, t.id);
                          onClose();
                        }}
                        className={`w-full text-left px-2 py-1 rounded text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isCurrentTopic
                            ? "bg-blue-600 text-white font-medium shadow-xs"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="truncate flex items-center gap-1.5">
                          {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />}
                          {t.number}. {t.title}
                        </span>
                        <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
                      </button>
                    );
                  })}

                  {mod.topics.length > 3 && (
                    <button
                      onClick={() => {
                        onSelectTopic(mod.id, mod.topics[0].id);
                        onClose();
                      }}
                      className="w-full text-center py-1 text-[11px] text-blue-600 hover:underline font-medium cursor-pointer"
                    >
                      + {mod.topics.length - 3} more topics →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
