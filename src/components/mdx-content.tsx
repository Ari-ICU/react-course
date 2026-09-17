"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./code-block";

interface MDXContentProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export function MDXContent({ content, className, inline = false }: MDXContentProps) {
  if (!content) return null;

  const Wrapper = inline ? "span" : "div";

  return (
    <Wrapper className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) =>
            inline ? (
              <span className="leading-relaxed text-inherit inline">{children}</span>
            ) : (
              <p className="leading-relaxed sm:leading-8 text-slate-800 my-1.5">
                {children}
              </p>
            ),
          strong: ({ children }) => (
            <strong className="font-bold text-slate-950">{children}</strong>
          ),
          em: ({ children }) => <em className="italic text-slate-800">{children}</em>,
          code: ({ className: codeClassName, children, ...props }) => {
            const match = /language-(\w+)/.exec(codeClassName || "");
            const isCodeBlock = Boolean(match) || String(children).includes("\n");

            if (isCodeBlock) {
              return (
                <div className="my-3">
                  <CodeBlock
                    code={String(children).replace(/\n$/, "")}
                    language={match ? match[1] : "tsx"}
                  />
                </div>
              );
            }

            return (
              <code
                className="inline-block px-2 py-0.5 mx-1 rounded-md bg-blue-50/90 border border-blue-200 text-blue-700 font-mono text-[0.92em] font-semibold select-all align-baseline"
                {...props}
              >
                {children}
              </code>
            );
          },
          ul: ({ children }) => (
            <ul className="space-y-2 my-2.5 pl-5 list-disc text-slate-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 my-2.5 pl-5 list-decimal text-slate-700">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-3 italic text-slate-700 bg-blue-50/50 rounded-r-xl">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Wrapper>
  );
}
