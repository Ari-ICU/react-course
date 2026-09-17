export interface CourseMetadata {
  title: string;
  subtitle: string;
  level: string;
  prerequisites: string[];
  totalModules: number;
  totalTopics: number;
  totalProjects: number;
  outcomes: string[];
  architecture: {
    layers: {
      name: string;
      description: string;
      items: string[];
    }[];
  };
}

export const courseMetadata: CourseMetadata = {
  title: "Mastering Modern React.js",
  subtitle: "From Intermediate to Enterprise Architecture (React 19, Next.js, TanStack Query, Zustand, Zod & Shadcn UI)",
  level: "Intermediate → Advanced",
  totalModules: 27,
  totalTopics: 304,
  totalProjects: 6,
  prerequisites: [
    "HTML5 Semantic markup & accessibility standards",
    "CSS3 (Flexbox, Grid, Responsive Design & CSS Variables)",
    "JavaScript ES6+ (Arrow functions, Destructuring, Spread/Rest, Modules)",
    "DOM basics & Browser Event Loop",
    "Asynchronous JavaScript (Promises, async/await, fetch API)",
    "RESTful API fundamentals & HTTP methods (GET, POST, PUT, DELETE)",
  ],
  outcomes: [
    "Build production-grade React applications from scratch with optimal architecture.",
    "Master component lifecycle, React 19 rendering mechanics, and state management.",
    "Design and implement reusable, accessible UI component libraries (inspired by Shadcn UI).",
    "Build resilient forms with React Hook Form and schema validation with Zod.",
    "Manage server cache seamlessly using TanStack Query v5 with optimistic updates.",
    "Architect scalable client state using Zustand stores with immutable actions and selectors.",
    "Implement production authentication flows (JWT, Refresh tokens, Protected routes, RBAC).",
    "Profile, debug, and optimize React rendering performance (memo, useMemo, useCallback).",
    "Write comprehensive unit and integration tests using Vitest and React Testing Library.",
    "Deploy, secure, and monitor modern React and Next.js applications in production.",
  ],
  architecture: {
    layers: [
      {
        name: "Presentation Layer (Pages & UI)",
        description: "App Router layouts, page views, and design system components.",
        items: ["Next.js App Router / Pages", "Shadcn UI Primitives", "Tailwind CSS v4", "Lucide Icons"],
      },
      {
        name: "Feature & Component Layer",
        description: "Domain-driven feature modules and compound component composition.",
        items: ["Feature Modules (Auth, Cart, Products)", "Compound Components", "Render Props & Layouts"],
      },
      {
        name: "State & Data Layer",
        description: "Clear boundary between server state caching and global client state.",
        items: ["TanStack Query v5 (Server Cache)", "Zustand (Global Client State)", "React Context (Theme/Auth)", "Custom Hooks"],
      },
      {
        name: "Service & Network Layer",
        description: "Centralized API client, interceptors, and schema parsing.",
        items: ["Axios / Fetch API Client", "Zod Validation Schemas", "Auth Interceptors & Token Refresh", "Error Boundaries"],
      },
      {
        name: "Backend & Database",
        description: "RESTful JSON API, database, and authentication services.",
        items: ["REST API Endpoints", "PostgreSQL / SQLite", "JWT / Secure HttpOnly Cookies"],
      },
    ],
  },
};
