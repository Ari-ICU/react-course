"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2, ChevronRight, Search } from "lucide-react";
import { modulesData, ModuleItem, TopicItem } from "@/data/modules-data";
import { CodeBlock } from "@/components/code-block";
import { FormattedText } from "@/components/formatted-text";
import { getAssetPath } from "@/lib/utils";

interface StudyViewProps {
  currentModuleId: string;
  onSelectModule: (moduleId: string) => void;
  onSelectTopic: (moduleId: string, topicId: string) => void;
  completedTopics: string[];
}

export function StudyView({
  currentModuleId,
  onSelectModule,
  onSelectTopic,
  completedTopics,
}: StudyViewProps) {
  const [filterQuery, setFilterQuery] = useState<string>("");

  const activeModule = modulesData.find((m) => m.id === currentModuleId) || modulesData[0];

  const filteredTopics = activeModule.topics.filter(
    (t) =>
      t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar: Module Index */}
      <aside className="w-full md:w-80 shrink-0 bg-white border border-slate-200 rounded-2xl p-4 sticky top-24 max-h-[85vh] flex flex-col shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h2 className="font-bold text-slate-900 text-sm">Course Syllabus (27 Modules)</h2>
        </div>

        <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
          {modulesData.map((mod) => {
            const isSelected = mod.id === currentModuleId;
            const completedCount = mod.topics.filter((t) => completedTopics.includes(t.id)).length;

            return (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                <div className="truncate mr-2 font-medium">
                  <span className={`font-mono text-xs mr-1.5 font-bold ${isSelected ? "text-blue-100" : "text-blue-600"}`}>
                    M{mod.number}
                  </span>
                  <span>{mod.title}</span>
                </div>
                <span className={`text-xs shrink-0 font-mono ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                  {completedCount}/{mod.topics.length}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area: Selected Module Topics */}
      <main className="flex-1 w-full space-y-6">
        {/* Module Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 border border-blue-100 rounded-2xl shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs sm:text-sm font-mono font-bold">
              MODULE {activeModule.number}
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-semibold">{activeModule.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {activeModule.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 mt-2.5 leading-relaxed max-w-3xl font-medium">
            {activeModule.summary}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter topics in this module..."
                className="w-full bg-white border border-slate-300 pl-10 pr-3 py-2 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
              />
            </div>
            <span className="text-xs sm:text-sm text-slate-500 font-mono font-medium">
              {filteredTopics.length} of {activeModule.topics.length} topics
            </span>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-6">
          {filteredTopics.map((topic) => {
            const isDone = completedTopics.includes(topic.id);

            return (
              <article
                key={topic.id}
                className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs sm:text-sm font-mono font-bold text-blue-600">
                        TOPIC {topic.number}
                      </span>
                      {isDone && (
                        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Completed
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{topic.title}</h2>
                    <div className="text-base sm:text-lg text-slate-600 mt-2 font-medium leading-relaxed">
                      <FormattedText text={topic.summary} inline />
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectTopic(activeModule.id, topic.id)}
                    className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 hover:text-slate-950 text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Open in Slides</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-base sm:text-[18px] leading-relaxed sm:leading-8 text-slate-800">
                  <FormattedText text={topic.explanation} />
                </div>

                {/* Key Points */}
                <div className="space-y-2.5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-sm sm:text-base font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Concepts & Rules:
                  </h3>
                  {topic.keyPoints.map((kp, i) => (
                    <div key={i} className="text-base sm:text-[17px] text-slate-700 leading-relaxed flex items-baseline gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="flex-1"><FormattedText text={kp} inline /></span>
                    </div>
                  ))}
                </div>

                {/* Image or Code Snippet */}
                {topic.image ? (
                  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs p-6 flex flex-col items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getAssetPath(topic.image)}
                      alt={topic.title}
                      className="max-h-[320px] w-auto object-contain rounded-xl"
                    />
                    {topic.codeTitle && (
                      <p className="mt-3 text-xs font-semibold text-slate-500 font-mono">
                        {topic.codeTitle}
                      </p>
                    )}
                  </div>
                ) : topic.codeSnippet ? (
                  <CodeBlock
                    code={topic.codeSnippet}
                    language={topic.codeLanguage || "jsx"}
                    title={topic.codeTitle}
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
