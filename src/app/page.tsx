"use client";

import { useState, useEffect, useCallback } from "react";
import { modulesData } from "@/data/modules-data";
import { Header } from "@/components/header";
import { SlideView } from "@/components/slide-view";
import { StudyView } from "@/components/study-view";
import { ProjectsView } from "@/components/projects-view";
import { ArchitectureView } from "@/components/architecture-view";
import { ChapterDrawer } from "@/components/chapter-drawer";
import { CommandSearch } from "@/components/command-search";

export default function CourseApp() {
  const [currentModuleId, setCurrentModuleId] = useState<string>("module-01");
  const [currentTopicId, setCurrentTopicId] = useState<string>("m01-01");
  const [viewMode, setViewMode] = useState<"slide" | "study" | "projects" | "architecture">("slide");
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Restore navigation state from URL parameters or localStorage on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // 1. Check URL parameters
      const params = new URLSearchParams(window.location.search);
      const urlModule = params.get("module");
      const urlTopic = params.get("topic");
      const urlMode = params.get("mode") as any;

      // 2. Check localStorage
      const savedModule = localStorage.getItem("react_course_last_module");
      const savedTopic = localStorage.getItem("react_course_last_topic");
      const savedMode = localStorage.getItem("react_course_last_mode") as any;
      const savedCompleted = localStorage.getItem("react_course_completed_topics");

      if (savedCompleted) {
        try {
          setCompletedTopics(JSON.parse(savedCompleted));
        } catch {}
      }

      // Priority: URL > localStorage > default
      const targetModule = urlModule || savedModule || "module-01";
      const targetTopic = urlTopic || savedTopic;
      const targetMode = urlMode || savedMode;

      let activeModId = "module-01";
      let activeTopId = "m01-01";

      if (modulesData.some((m) => m.id === targetModule)) {
        activeModId = targetModule;
        const mod = modulesData.find((m) => m.id === targetModule);
        if (targetTopic && mod?.topics.some((t) => t.id === targetTopic)) {
          activeTopId = targetTopic;
        } else if (mod?.topics[0]) {
          activeTopId = mod.topics[0].id;
        }
      }

      setCurrentModuleId(activeModId);
      setCurrentTopicId(activeTopId);

      if (targetMode && ["slide", "study", "projects", "architecture"].includes(targetMode)) {
        setViewMode(targetMode);
      }
    } catch (e) {
      console.error("Failed to restore course navigation state", e);
    } finally {
      setIsReady(true);
    }
  }, []);

  // Synchronize state changes to localStorage and URL query string ONLY after isReady is true
  useEffect(() => {
    if (!isReady || typeof window === "undefined") return;

    try {
      localStorage.setItem("react_course_last_module", currentModuleId);
      localStorage.setItem("react_course_last_topic", currentTopicId);
      localStorage.setItem("react_course_last_mode", viewMode);

      const params = new URLSearchParams(window.location.search);
      params.set("module", currentModuleId);
      params.set("topic", currentTopicId);
      params.set("mode", viewMode);

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
    } catch {
      // ignore
    }
  }, [isReady, currentModuleId, currentTopicId, viewMode]);

  // Save completed topics
  const handleToggleComplete = useCallback((topicId: string) => {
    setCompletedTopics((prev) => {
      const updated = prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId];
      try {
        localStorage.setItem("react_course_completed_topics", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  // Module selection (e.g. from Curriculum sidebar)
  const handleSelectModule = useCallback((moduleId: string) => {
    setCurrentModuleId(moduleId);
    const mod = modulesData.find((m) => m.id === moduleId);
    if (mod && mod.topics[0]) {
      setCurrentTopicId(mod.topics[0].id);
    }
  }, []);

  // Current Module & Topic Lookup
  const currentModule =
    modulesData.find((m) => m.id === currentModuleId) || modulesData[0];
  const currentTopicIndex = currentModule.topics.findIndex((t) => t.id === currentTopicId);
  const currentTopic =
    currentTopicIndex >= 0 ? currentModule.topics[currentTopicIndex] : currentModule.topics[0];

  const currentModuleIndex = modulesData.findIndex((m) => m.id === currentModule.id);

  // Navigation Handlers
  const handleNext = useCallback(() => {
    if (currentTopicIndex < currentModule.topics.length - 1) {
      setCurrentTopicId(currentModule.topics[currentTopicIndex + 1].id);
    } else if (currentModuleIndex < modulesData.length - 1) {
      const nextMod = modulesData[currentModuleIndex + 1];
      setCurrentModuleId(nextMod.id);
      setCurrentTopicId(nextMod.topics[0].id);
    }
  }, [currentTopicIndex, currentModule, currentModuleIndex]);

  const handlePrev = useCallback(() => {
    if (currentTopicIndex > 0) {
      setCurrentTopicId(currentModule.topics[currentTopicIndex - 1].id);
    } else if (currentModuleIndex > 0) {
      const prevMod = modulesData[currentModuleIndex - 1];
      setCurrentModuleId(prevMod.id);
      setCurrentTopicId(prevMod.topics[prevMod.topics.length - 1].id);
    }
  }, [currentTopicIndex, currentModuleIndex]);

  const hasNext =
    currentTopicIndex < currentModule.topics.length - 1 ||
    currentModuleIndex < modulesData.length - 1;
  const hasPrev = currentTopicIndex > 0 || currentModuleIndex > 0;

  const handleSelectTopic = useCallback((moduleId: string, topicId: string) => {
    setCurrentModuleId(moduleId);
    setCurrentTopicId(topicId);
    setViewMode("slide");
  }, []);

  const handleSelectProject = useCallback((projectId: string) => {
    setViewMode("projects");
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "m") {
        e.preventDefault();
        setIsChapterDrawerOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "f" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (viewMode === "slide" && !isChapterDrawerOpen && !isSearchOpen) {
        if (e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          handleNext();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    viewMode,
    isChapterDrawerOpen,
    isSearchOpen,
    handleNext,
    handlePrev,
    handleToggleFullscreen,
  ]);

  const totalTopicsCount = modulesData.reduce((acc, m) => acc + m.topics.length, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header
        currentModule={currentModule}
        currentTopic={currentTopic}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenChapterDrawer={() => setIsChapterDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        completedTopicsCount={completedTopics.length}
        totalTopicsCount={totalTopicsCount}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 flex flex-col">
        {viewMode === "slide" && (
          <SlideView
            module={currentModule}
            topic={currentTopic}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={hasPrev}
            hasNext={hasNext}
            isCompleted={completedTopics.includes(currentTopic.id)}
            onToggleComplete={handleToggleComplete}
            onSelectTopicIndex={(index) =>
              setCurrentTopicId(currentModule.topics[index].id)
            }
            currentTopicIndex={currentTopicIndex}
          />
        )}

        {viewMode === "study" && (
          <StudyView
            currentModuleId={currentModuleId}
            onSelectModule={handleSelectModule}
            onSelectTopic={handleSelectTopic}
            completedTopics={completedTopics}
          />
        )}

        {viewMode === "projects" && <ProjectsView />}

        {viewMode === "architecture" && <ArchitectureView />}
      </main>

      {/* Chapter Drawer Overlay (Cmd+M) */}
      <ChapterDrawer
        isOpen={isChapterDrawerOpen}
        onClose={() => setIsChapterDrawerOpen(false)}
        currentModuleId={currentModuleId}
        currentTopicId={currentTopicId}
        onSelectTopic={handleSelectTopic}
        completedTopics={completedTopics}
      />

      {/* Command Search Modal (Cmd+K) */}
      <CommandSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={handleSelectTopic}
        onSelectProject={handleSelectProject}
      />
    </div>
  );
}
