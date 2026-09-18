"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Play,
  Code2,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import confetti from "canvas-confetti";
import { ModuleItem, TopicItem } from "@/data/modules-data";
import { CodeBlock } from "@/components/code-block";
import { FormattedText } from "@/components/formatted-text";
import { getAssetPath } from "@/lib/utils";
import { StateDemo } from "@/components/interactive-demos/state-demo";
import { FormValidationDemo } from "@/components/interactive-demos/form-validation-demo";
import { ZustandDemo } from "@/components/interactive-demos/zustand-demo";
import { CustomHookDemo } from "@/components/interactive-demos/custom-hook-demo";
import { TodoAppDemo } from "@/components/interactive-demos/todo-app-demo";

interface SlideViewProps {
  module: ModuleItem;
  topic: TopicItem;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
  onSelectTopicIndex: (index: number) => void;
  currentTopicIndex: number;
}

export function SlideView({
  module,
  topic,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isCompleted,
  onToggleComplete,
  onSelectTopicIndex,
  currentTopicIndex,
}: SlideViewProps) {
  const [activeTab, setActiveTab] = useState<"code" | "demo">("code");

  const handleCompleteWithCelebration = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"],
      });
    }
    onToggleComplete(topic.id);
  };

  const renderInteractiveDemo = () => {
    switch (topic.interactiveDemoKey) {
      case "StateDemo":
        return <StateDemo />;
      case "FormValidationDemo":
        return <FormValidationDemo />;
      case "ZustandDemo":
        return <ZustandDemo />;
      case "CustomHookDemo":
        return <CustomHookDemo />;
      case "TodoAppDemo":
        return <TodoAppDemo />;
      default:
        return (
          <div className="p-8 text-center bg-white border border-dashed border-slate-300 rounded-2xl space-y-3 shadow-xs">
            <Sparkles className="w-8 h-8 text-blue-600 mx-auto" />
            <h4 className="font-bold text-slate-900 text-base">Interactive Code Playground</h4>
            <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
              This concept is best observed through the accompanying syntax example. Switch to the Code tab or test modifying state.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between max-w-[1800px] w-full mx-auto px-4 sm:px-8 py-6">
      {/* 45/55 Split Grid Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 5 cols: Theory, Pedagogical Narrative, Pro Tips & Pitfalls */}
        <div className="lg:col-span-5 space-y-6">
          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
              MODULE {module.number}
            </span>
            <span className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              {module.category}
            </span>
            <span className="text-xs sm:text-sm font-mono text-slate-500 ml-auto font-semibold">
              Slide {currentTopicIndex + 1} of {module.topics.length}
            </span>
          </div>

          {/* Slide Heading & Summary */}
          <div className="space-y-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.2]">
              {topic.title}
            </h1>
            <div className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              <FormattedText text={topic.summary} inline />
            </div>
          </div>

          {/* Deep Explanation */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 text-slate-800 text-[17px] sm:text-[19px] leading-relaxed sm:leading-8 space-y-4 shadow-xs">
            <FormattedText text={topic.explanation} />
          </div>

          {/* Key Architecture Points */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-slate-500 uppercase tracking-wider">
              Core Principles & Rules
            </h3>
            <ul className="space-y-3">
              {topic.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5 text-base sm:text-[18px] text-slate-700 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="flex-1"><FormattedText text={point} inline /></span>
                </li>
              ))}
            </ul>
          </div>


          {/* Complete Checkmark Action */}
          <div className="pt-2">
            <button
              onClick={handleCompleteWithCelebration}
              className={`w-full py-3.5 px-6 rounded-xl text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs ${
                isCompleted
                  ? "bg-emerald-50 border border-emerald-300 text-emerald-800"
                  : "bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-slate-900"
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 ${isCompleted ? "text-emerald-600" : "text-slate-400"}`}
              />
              {isCompleted ? "Topic Completed ✓" : "Mark as Completed"}
            </button>
          </div>
        </div>

        {/* Right 7 cols: Code & Live Lab */}
        <div className="lg:col-span-7 space-y-4">
          {/* Display Mode Tabs */}
          <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === "code"
                    ? "bg-white text-blue-700 font-bold shadow-xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {topic.image ? <ImageIcon className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                <span>{topic.image ? "Overview & Visual" : "Code Example"}</span>
              </button>

              <button
                onClick={() => setActiveTab("demo")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === "demo"
                    ? "bg-white text-blue-700 font-bold shadow-xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Play className="w-4 h-4" />
                <span>Live Interactive Lab</span>
                {topic.interactiveDemoKey && (
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>
            </div>

            <span className="text-xs sm:text-sm font-mono text-slate-500 pr-3 font-medium">
              {topic.codeTitle || (topic.image ? "Visual Illustration" : "Standard Implementation")}
            </span>
          </div>

          {/* Tab Content */}
          {activeTab === "code" ? (
            topic.image ? (
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center min-h-[360px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(topic.image)}
                  alt={topic.title}
                  className="max-h-[340px] w-auto object-contain rounded-xl drop-shadow-sm transition-transform hover:scale-[1.02]"
                />
                {topic.codeTitle && (
                  <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-600 font-mono tracking-tight text-center">
                    {topic.codeTitle}
                  </p>
                )}
              </div>
            ) : (
              <CodeBlock
                code={topic.codeSnippet}
                language={topic.codeLanguage || "jsx"}
                title={topic.codeTitle}
              />
            )
          ) : (
            <div className="animate-in fade-in duration-200">
              {renderInteractiveDemo()}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Dock */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none border border-slate-300 text-slate-800 hover:text-slate-900 text-base font-semibold transition-colors shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" /> Previous Slide
        </button>

        {/* Slide progress dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1 px-2">
          {module.topics.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => onSelectTopicIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentTopicIndex
                  ? "w-10 bg-blue-600"
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              title={`${t.number}. ${t.title}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white text-base font-bold transition-colors shadow-xs cursor-pointer"
        >
          Next Slide <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
