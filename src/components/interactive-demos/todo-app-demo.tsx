"use client";

import { useState, useEffect } from "react";
import { Plus, Check, Trash2, Edit2, CheckSquare, Square } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

const INITIAL_TODOS: Todo[] = [
  { id: "1", text: "Master React 19 Compiler and Hooks", completed: true, createdAt: 1700000000000 },
  { id: "2", text: "Build Project 01: Todo Management App", completed: false, createdAt: 1700000001000 },
  { id: "3", text: "Integrate TanStack Query v5 and Zustand", completed: false, createdAt: 1700000002000 },
];

export function TodoAppDemo() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Hydrate from localStorage safely on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("react_course_demo_todos");
      if (saved) {
        setTodos(JSON.parse(saved));
      }
    } catch {
      // ignore
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist to localStorage only after client hydration is complete
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      try {
        localStorage.setItem("react_course_demo_todos", JSON.stringify(todos));
      } catch {
        // ignore
      }
    }
  }, [todos, isLoaded]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInput("");
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStartEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveEdit = (id: string) => {
    if (!editText.trim()) {
      handleDelete(id);
    } else {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, text: editText.trim() } : t))
      );
    }
    setEditingId(null);
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 text-slate-800 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <h4 className="font-semibold text-slate-900">Project 01: Todo Management App</h4>
          <p className="text-xs text-slate-500">Interactive live working demonstration</p>
        </div>
        <span className="text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">
          {activeCount} pending task(s)
        </span>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be built?"
          className="flex-1 bg-slate-50 border border-slate-300 px-3.5 py-2 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" /> Add Task
        </button>
      </form>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
          {(["all", "active", "completed"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-2.5 py-1 rounded capitalize transition-colors font-medium cursor-pointer ${
                filter === mode ? "bg-white text-slate-900 shadow-xs border border-slate-200/80" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {todos.some((t) => t.completed) && (
          <button
            onClick={() => setTodos((prev) => prev.filter((t) => !t.completed))}
            className="text-xs text-slate-500 hover:text-rose-600 transition-colors cursor-pointer font-medium"
          >
            Clear Completed
          </button>
        )}
      </div>

      <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-slate-300 rounded-lg text-slate-400 text-xs">
            No {filter !== "all" ? filter : ""} tasks found.
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`p-2.5 flex items-center justify-between rounded-lg border text-sm transition-colors ${
                todo.completed
                  ? "bg-slate-50 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0 mr-2">
                <button
                  onClick={() => handleToggle(todo.id)}
                  className="text-slate-400 hover:text-blue-600 transition-colors shrink-0 cursor-pointer"
                >
                  {todo.completed ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSaveEdit(todo.id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    autoFocus
                    className="flex-1 bg-white border border-blue-500 px-2 py-0.5 rounded text-xs text-slate-900"
                  />
                ) : (
                  <span
                    onDoubleClick={() => handleStartEdit(todo)}
                    className={`truncate text-xs ${todo.completed ? "line-through text-slate-400" : "text-slate-800"}`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {editingId === todo.id ? (
                  <button
                    onClick={() => handleSaveEdit(todo.id)}
                    className="p-1 text-emerald-600 hover:bg-emerald-50 rounded cursor-pointer"
                    title="Save edit"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartEdit(todo)}
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                    title="Edit task"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                  title="Delete task"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
