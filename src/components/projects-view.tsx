"use client";

import { useState } from "react";
import {
  Rocket,
  Layers,
  CheckCircle2,
  FolderTree,
  Code2,
  ChevronRight,
} from "lucide-react";
import { projectsData, ProjectSpec } from "@/data/projects-data";
import { TodoAppDemo } from "@/components/interactive-demos/todo-app-demo";

export function ProjectsView() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("project-01");

  const activeProject = projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50 border border-blue-100 rounded-3xl relative overflow-hidden shadow-xs">
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5" /> 6 Real-World Portfolio Projects
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Production Project Blueprints
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hands-on enterprise applications designed to transition developers from Intermediate to Senior Architects. Every project incorporates production code patterns, testing requirements, and scalable folder structures.
          </p>
        </div>
      </div>

      {/* Projects Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => {
          const isSelected = project.id === selectedProjectId;

          return (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-blue-50/60 border-blue-500 shadow-md ring-1 ring-blue-500/30"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-blue-700 border border-slate-200">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-blue-600 translate-x-1" : "text-slate-400"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Project In-Depth Specification */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        {/* Left 7 cols: Features, Architecture & Deliverables */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Full Specification & Scope
              </span>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                {activeProject.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Project {activeProject.number}: {activeProject.title}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{activeProject.description}</p>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 block mb-2 uppercase tracking-wider">
                Technologies & Tooling:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Core Functional Requirements:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {activeProject.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Student Deliverables & Evaluation:
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeProject.deliverables.map((del, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right 5 cols: Interactive Demo or Folder Tree */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Runnable Demo if available */}
          {activeProject.hasInteractiveDemo ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Rocket className="w-4 h-4 text-emerald-600" />
                  Live Embedded Demo
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">Runnable in browser</span>
              </div>
              <TodoAppDemo />
            </div>
          ) : null}

          {/* Recommended Folder Structure */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <FolderTree className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Production File Structure
              </h3>
            </div>
            <pre className="p-4 bg-slate-50 rounded-xl text-xs font-mono text-emerald-800 leading-relaxed overflow-x-auto border border-slate-200">
              {activeProject.folderStructure}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
