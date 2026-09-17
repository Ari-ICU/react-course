"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Sparkles } from "lucide-react";

export function FormValidationDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "student",
    agree: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submittedData, setSubmittedData] = useState<typeof form | null>(null);

  // Synchronous validation rules (simulating Zod)
  const errors: Record<string, string> = {};
  if (!form.name.trim()) {
    errors.name = "Full name is required";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!form.agree) {
    errors.agree = "You must accept the honor code";
  }

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, agree: true });
    if (isValid) {
      setSubmittedData({ ...form });
    }
  };

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 text-slate-800 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h4 className="font-semibold text-slate-900">Live Form Validation Lab</h4>
        </div>
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
            isValid ? "bg-emerald-50 text-emerald-700 border border-emerald-300" : "bg-amber-50 text-amber-700 border border-amber-300"
          }`}
        >
          {isValid ? "Form Valid ✓" : `${Object.keys(errors).length} Field Error(s)`}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
            Student Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            placeholder="e.g. Alice Walker"
            className={`w-full bg-slate-50 border px-3 py-2 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
              touched.name && errors.name
                ? "border-rose-500 focus:ring-rose-500 bg-rose-50/50"
                : touched.name && !errors.name
                ? "border-emerald-500 focus:ring-emerald-500"
                : "border-slate-300 focus:ring-blue-500 focus:bg-white"
            }`}
          />
          {touched.name && errors.name && (
            <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            placeholder="alice@reactcourse.dev"
            className={`w-full bg-slate-50 border px-3 py-2 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
              touched.email && errors.email
                ? "border-rose-500 focus:ring-rose-500 bg-rose-50/50"
                : touched.email && !errors.email
                ? "border-emerald-500 focus:ring-emerald-500"
                : "border-slate-300 focus:ring-blue-500 focus:bg-white"
            }`}
          />
          {touched.email && errors.email && (
            <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Course Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            >
              <option value="student">Student</option>
              <option value="teaching_assistant">Teaching Assistant</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          <div className="flex items-center pt-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                onBlur={() => handleBlur("agree")}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span className="text-xs text-slate-700">Accept Honor Code</span>
            </label>
          </div>
        </div>

        {touched.agree && errors.agree && (
          <p className="flex items-center gap-1 text-xs text-rose-600">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.agree}
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          <Send className="w-4 h-4" /> Submit Enrollment
        </button>
      </form>

      {submittedData && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Successfully Validated & Submitted!
          </div>
          <pre className="bg-white p-2 rounded border border-emerald-200 text-slate-800 font-mono text-[11px] overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
