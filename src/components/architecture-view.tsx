"use client";

import {
  Network,
  CheckCircle2,
  Layers,
  Terminal,
  GraduationCap,
} from "lucide-react";
import { courseMetadata } from "@/data/course-metadata";

export function ArchitectureView() {
  const outcomes = [
    "Build React applications from scratch.",
    "Create reusable React components.",
    "Manage component state.",
    "Work with props and component communication.",
    "Build React forms and validation.",
    "Use React Hooks correctly.",
    "Create custom hooks.",
    "Build multi-page SPA applications with React Router.",
    "Connect React applications to REST APIs.",
    "Handle loading, error, and empty states.",
    "Manage global state.",
    "Implement authentication.",
    "Build reusable UI components.",
    "Optimize React applications.",
    "Test React components.",
    "Apply React security practices.",
    "Structure scalable React applications.",
    "Build and deploy production-ready React applications using Next.js and Tailwind, Lucide icons, flat design, and Shadcn UI.",
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 space-y-10">
      {/* Hero Banner */}
      <div className="p-8 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-purple-50 border border-blue-100 rounded-3xl space-y-3 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold">
          <GraduationCap className="w-4 h-4" /> Course Architecture & Learning Outcomes
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Enterprise Application Architecture
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          The complete architectural blueprint taught throughout this course. Designed to bridge the gap between building toy React prototypes and deploying mission-critical enterprise systems.
        </p>
      </div>

      {/* 5-Tier Architecture Visualization */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-600" />
            Full Application Architecture Pipeline
          </h2>
          <span className="text-xs font-mono bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-slate-600 font-medium">
            Unidirectional Data & Service Flow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {courseMetadata.architecture.layers.map((layer, idx) => (
            <div
              key={layer.name}
              className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
            >
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  TIER 0{idx + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-2.5">{layer.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{layer.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                {layer.items.map((item, i) => (
                  <div key={i} className="text-[11px] text-slate-700 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual ASCII Flow Tree */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-600" />
          Production React Flow Diagram
        </h3>
        <pre className="p-5 bg-slate-900 rounded-xl text-xs font-mono text-emerald-400 leading-relaxed overflow-x-auto border border-slate-800 shadow-sm">
{`React Application (Next.js / Vite + React 19)
        │
        ├── Pages & App Router Layouts
        │
        ├── Components (Shadcn UI Primitives)
        │
        ├── Features (Domain Modules: Auth, Cart, Students)
        │
        ├── Hooks (useFetch, useLocalStorage, useDebounce)
        │
        ├── Services (Axios Client, Interceptors, TanStack Query)
        │
        ├── Store (Zustand Global State & Persist Middleware)
        │
        └── Utils (formatters, cn helper, Zod validation schemas)
               │
               ↓
          REST API (HTTP / JSON / Bearer JWT)
               │
               ↓
            Backend Server (Node.js / Express / Laravel / Python)
               │
               ↓
           Database (PostgreSQL / MySQL / MongoDB)`}
        </pre>
      </div>

      {/* Prerequisites & Course Outcomes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: 18 Course Outcomes */}
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            18 Course Learning Outcomes
          </h3>
          <p className="text-xs text-slate-500">
            Upon graduation, students will have mastered every required competency for senior frontend development:
          </p>

          <div className="space-y-2.5 pt-2">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Prerequisites & Level */}
        <div className="space-y-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Course Prerequisites
            </h3>
            <p className="text-xs text-slate-500">
              Students should be comfortable with standard web fundamentals before beginning this course:
            </p>

            <div className="space-y-2 pt-1">
              {courseMetadata.prerequisites.map((req, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Course Statistics
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-blue-600">27</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Modules</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-emerald-600">304</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Total Topics</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-purple-600">6</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
