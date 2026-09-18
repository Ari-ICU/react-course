"use client";

import { useState, useMemo } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "jsx", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const cleanCode = code.trim();
  const lineCount = cleanCode.split("\n").length;

  // Generate full Prism syntax highlighted HTML
  const highlightedHtml = useMemo(() => {
    const lang = language.toLowerCase();
    const grammar =
      Prism.languages[lang] ||
      (lang === "typescript" || lang === "ts" ? Prism.languages.typescript : null) ||
      (lang === "tsx" ? Prism.languages.tsx : null) ||
      (lang === "jsx" ? Prism.languages.jsx : null) ||
      (lang === "javascript" || lang === "js" ? Prism.languages.javascript : null) ||
      (lang === "json" ? Prism.languages.json : null) ||
      (lang === "bash" || lang === "sh" ? Prism.languages.bash : null) ||
      Prism.languages.tsx;

    try {
      return Prism.highlight(cleanCode, grammar, lang);
    } catch {
      return cleanCode;
    }
  }, [cleanCode, language]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-xl text-slate-300 font-mono text-sm">
      {/* Code Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#161b22] border-b border-slate-800 select-none">
        <div className="flex items-center gap-2.5 text-slate-300">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-200">
            {title || `${language.toUpperCase()} Snippet`}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors text-xs sm:text-sm font-sans font-medium cursor-pointer shadow-xs"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-400" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Line Numbers & Syntax Highlighting */}
      <div className="overflow-x-auto p-5 sm:p-6 max-h-[580px] select-text">
        <pre className="flex font-mono text-[13.5px] sm:text-[15.5px] leading-6 sm:leading-[1.75] code-highlight-area">
          {/* Line Numbers Gutter */}
          <div className="select-none pr-4 text-slate-500/80 text-right font-mono text-[13.5px] sm:text-[15.5px] leading-6 sm:leading-[1.75] border-r border-slate-800/80 mr-4">
            {Array.from({ length: lineCount }).map((_, i) => (
              <div key={i} className="leading-6 sm:leading-[1.75]">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Syntax Highlighted Code */}
          <code
            className="flex-1 text-slate-100 font-mono text-[13.5px] sm:text-[15.5px] leading-6 sm:leading-[1.75] whitespace-pre overflow-x-auto focus:outline-none"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>
    </div>
  );
}
