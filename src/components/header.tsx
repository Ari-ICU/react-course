"use client";

import { useState } from "react";
import {
  BookOpen,
  Search,
  Menu,
  Monitor,
  FileText,
  Rocket,
  CheckCircle2,
  Maximize2,
  Minimize2,
  Network,
  Sparkles,
} from "lucide-react";
import { ModuleItem, TopicItem } from "@/data/modules-data";

interface HeaderProps {
  currentModule: ModuleItem;
  currentTopic: TopicItem;
  viewMode: "slide" | "study" | "projects" | "architecture";
  onViewModeChange: (mode: "slide" | "study" | "projects" | "architecture") => void;
  onOpenChapterDrawer: () => void;
  onOpenSearch: () => void;
  completedTopicsCount: number;
  totalTopicsCount: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export function Header({
  currentModule,
  currentTopic,
  viewMode,
  onViewModeChange,
  onOpenChapterDrawer,
  onOpenSearch,
  completedTopicsCount,
  totalTopicsCount,
  isFullscreen,
  onToggleFullscreen,
}: HeaderProps) {
  const progressPercent = Math.round((completedTopicsCount / totalTopicsCount) * 100);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between shadow-xs">
      {/* Left: Brand & Module Chapter Drawer Trigger */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenChapterDrawer}
          className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          title="Open Chapter Menu (Cmd+M)"
        >
          <Menu className="w-4 h-4 text-blue-600" />
          <span className="hidden sm:inline text-xs font-semibold">Modules</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white text-slate-500 border border-slate-300 rounded shadow-xs">
            ⌘M
          </kbd>
        </button>

        {/* Course / Module Breadcrumb */}
        <div className="hidden lg:flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            ReactMaster
          </span>
          <span className="text-slate-300">/</span>
          <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-medium">
            MOD {currentModule.number}
          </span>
          <span className="text-slate-600 font-medium truncate max-w-[200px]">
            {currentTopic.title}
          </span>
        </div>
      </div>

      {/* Middle: Mode Switcher */}
      <div className="flex items-center p-1 bg-slate-100 border border-slate-200 rounded-xl">
        <button
          onClick={() => onViewModeChange("slide")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            viewMode === "slide"
              ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Presentation</span>
        </button>

        <button
          onClick={() => onViewModeChange("study")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            viewMode === "study"
              ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Curriculum</span>
        </button>

        <button
          onClick={() => onViewModeChange("projects")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            viewMode === "projects"
              ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Rocket className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Projects (6)</span>
        </button>

        <button
          onClick={() => onViewModeChange("architecture")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            viewMode === "architecture"
              ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Network className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Architecture</span>
        </button>
      </div>

      {/* Right: Search, Progress, Fullscreen */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Global Search trigger */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors text-xs cursor-pointer"
          title="Search All Topics (Cmd+K)"
        >
          <Search className="w-4 h-4 text-slate-500" />
          <span className="hidden md:inline">Search...</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white text-slate-500 border border-slate-300 rounded shadow-xs">
            ⌘K
          </kbd>
        </button>

        {/* Progress Tracker */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-slate-700 font-mono">
            {completedTopicsCount}/{totalTopicsCount}
          </span>
          <span className="text-emerald-600 font-semibold">{progressPercent}%</span>
        </div>

        {/* Fullscreen toggle button */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          title={isFullscreen ? "Exit Fullscreen (Esc or F)" : "Fullscreen Presentation (F)"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
