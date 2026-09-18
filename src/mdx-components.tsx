import type { MDXComponents } from "mdx/types";
import React from "react";
import { CodeBlock } from "@/components/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight my-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight my-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight my-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[17px] sm:text-[19px] leading-relaxed sm:leading-8 text-slate-800 my-2">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2.5 my-3 pl-5 list-disc text-slate-700 text-base sm:text-[18px]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2.5 my-3 pl-5 list-decimal text-slate-700 text-base sm:text-[18px]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-1.5 my-3 italic text-slate-700 bg-blue-50/50 rounded-r-xl">
        {children}
      </blockquote>
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match && typeof children === "string" && !children.includes("\n");

      if (isInline) {
        return (
          <code
            className="inline-block px-2 py-0.5 mx-1 rounded-md bg-blue-50/90 border border-blue-200 text-blue-700 font-mono text-[0.92em] font-semibold select-all align-baseline"
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <CodeBlock
          code={String(children).replace(/\n$/, "")}
          language={match ? match[1] : "jsx"}
        />
      );
    },
    ...components,
  };
}
