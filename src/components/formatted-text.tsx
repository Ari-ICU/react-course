"use client";

import React from "react";
import { MDXContent } from "./mdx-content";

interface FormattedTextProps {
  text?: string;
  className?: string;
  inline?: boolean;
}

export function FormattedText({ text, className, inline }: FormattedTextProps) {
  if (!text) return null;

  return <MDXContent content={text} className={className} inline={inline} />;
}

