"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, BookOpen, Layers, Rocket, CornerDownLeft } from "lucide-react";
import { modulesData } from "@/data/modules-data";
import { projectsData } from "@/data/projects-data";

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (moduleId: string, topicId: string) => void;
  onSelectProject: (projectId: string) => void;
}

export function CommandSearch({
  isOpen,
  onClose,
  onSelectTopic,
  onSelectProject,
}: CommandSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Flatten all searchable items
  const allResults = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const results: {
      type: "topic" | "module" | "project";
      title: string;
      subtitle: string;
      badge: string;
      moduleId?: string;
      topicId?: string;
      projectId?: string;
    }[] = [];

    // Search Projects
    projectsData.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      ) {
        results.push({
          type: "project",
          title: `Project ${p.number}: ${p.title}`,
          subtitle: p.summary,
          badge: p.category,
          projectId: p.id,
        });
      }
    });

    // Search Modules and Topics
    modulesData.forEach((mod) => {
      if (mod.title.toLowerCase().includes(q) || mod.number.includes(q)) {
        results.push({
          type: "module",
          title: `Module ${mod.number}: ${mod.title}`,
          subtitle: mod.summary,
          badge: mod.category,
          moduleId: mod.id,
          topicId: mod.topics[0]?.id,
        });
      }

      mod.topics.forEach((topic) => {
        if (
          topic.title.toLowerCase().includes(q) ||
          topic.summary.toLowerCase().includes(q) ||
          topic.keyPoints.some((kp) => kp.toLowerCase().includes(q))
        ) {
          results.push({
            type: "topic",
            title: `${topic.number}. ${topic.title}`,
            subtitle: `Module ${mod.number}: ${mod.title} — ${topic.summary}`,
            badge: "Topic",
            moduleId: mod.id,
            topicId: topic.id,
          });
        }
      });
    });

    return results.slice(0, 15);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (allResults.length ? (prev + 1) % allResults.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (allResults.length ? (prev - 1 + allResults.length) % allResults.length : 0));
      } else if (e.key === "Enter" && allResults[selectedIndex]) {
        e.preventDefault();
        const item = allResults[selectedIndex];
        if (item.type === "project" && item.projectId) {
          onSelectProject(item.projectId);
        } else if (item.moduleId && item.topicId) {
          onSelectTopic(item.moduleId, item.topicId);
        }
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, allResults, selectedIndex, onClose, onSelectTopic, onSelectProject]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search all 27 modules, 300+ topics & projects..."
            className="w-full bg-transparent border-none text-slate-900 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-white text-slate-500 border border-slate-300 rounded shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {!query.trim() ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              Type keywords like <span className="text-blue-600 font-semibold">&quot;TanStack&quot;</span>,{" "}
              <span className="text-blue-600 font-semibold">&quot;Zustand&quot;</span>,{" "}
              <span className="text-blue-600 font-semibold">&quot;useEffect&quot;</span>, or{" "}
              <span className="text-blue-600 font-semibold">&quot;Project 01&quot;</span>.
            </div>
          ) : allResults.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              No matching topics or projects found for &quot;{query}&quot;.
            </div>
          ) : (
            allResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (item.type === "project" && item.projectId) {
                      onSelectProject(item.projectId);
                    } else if (item.moduleId && item.topicId) {
                      onSelectTopic(item.moduleId, item.topicId);
                    }
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected ? "bg-blue-600 text-white" : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {item.type === "project" ? (
                        <Rocket className="w-4 h-4" />
                      ) : item.type === "module" ? (
                        <Layers className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-semibold truncate ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {item.title}
                        </p>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p
                        className={`text-xs truncate ${
                          isSelected ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <CornerDownLeft
                    className={`w-4 h-4 shrink-0 opacity-0 transition-opacity ${
                      isSelected ? "opacity-100 text-white" : ""
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              Navigate: <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono shadow-xs">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono shadow-xs">↓</kbd>
            </span>
            <span>
              Select: <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono shadow-xs">↵</kbd>
            </span>
          </div>
          <span className="font-medium text-slate-600">React Master Course Engine</span>
        </div>
      </div>
    </div>
  );
}
