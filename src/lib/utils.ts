import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path?: string): string {
  if (!path) return "";
  // Return early for external URLs or data URIs
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (basePath) {
    const cleanBase = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
    if (!cleanPath.startsWith(cleanBase)) {
      return `${cleanBase}${cleanPath}`;
    }
  }

  return cleanPath;
}

