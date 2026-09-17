export interface ProjectSpec {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  architectureDiagram?: string;
  folderStructure: string;
  hasInteractiveDemo?: boolean;
  demoComponent?: string;
  deliverables: string[];
}

export const projectsData: ProjectSpec[] = [
  {
    id: "project-01",
    number: "01",
    title: "Todo Management App",
    category: "State, Events & LocalStorage",
    summary: "A sleek, responsive task management application emphasizing React state immutability, controlled inputs, and persistent client storage.",
    description: "In this project, students master foundational React workflows: state management via useState, event handling, derived state for filtering, and bidirectional persistence using localStorage with a dedicated custom hook.",
    stack: ["React 19", "Tailwind CSS", "Lucide React", "LocalStorage API"],
    features: [
      "Create, edit, toggle, and delete tasks",
      "Dynamic filtering: All, Active, Completed tasks",
      "Live search query with real-time text matching",
      "Item count badges & clear all completed tasks",
      "Persistent state via localStorage with fallback defaults",
      "Smooth micro-interactions & keyboard shortcuts (Enter to add, Esc to cancel edit)",
    ],
    folderStructure: `src/
├── components/
│   ├── TodoHeader.tsx
│   ├── TodoInput.tsx
│   ├── TodoList.tsx
│   ├── TodoItem.tsx
│   └── TodoFilters.tsx
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── todo.ts
└── App.tsx`,
    hasInteractiveDemo: true,
    demoComponent: "TodoAppDemo",
    deliverables: [
      "Full source code adhering to component modularity rules",
      "Custom hook `useLocalStorage` for reusable synchronization",
      "Comprehensive test scenarios for adding, editing, and filtering items",
    ],
  },
  {
    id: "project-02",
    number: "02",
    title: "Student Management System",
    category: "CRUD, Forms & Validation",
    summary: "A complete CRUD administration interface for managing enrolled students with validation, pagination, and multi-field filtering.",
    description: "Focuses on controlled forms, complex object arrays, form validation error handling, modal dialogs for add/edit operations, and client-side pagination with search filtering.",
    stack: ["React", "Tailwind CSS", "Lucide React", "Custom Form Validation"],
    features: [
      "Paginated student directory table with sorting by name, GPA, or enroll date",
      "Detailed student profile slide-over panel",
      "Add and Edit student forms with immediate field-level validation",
      "Delete confirmation dialog with safety prompt",
      "Multi-criteria filtering: major, status (Active/Graduated/Probation), and search query",
      "Export student list to CSV / JSON summary",
    ],
    folderStructure: `src/
├── features/students/
│   ├── components/
│   │   ├── StudentTable.tsx
│   │   ├── StudentFormModal.tsx
│   │   ├── StudentDetailCard.tsx
│   │   └── StudentFilterBar.tsx
│   ├── hooks/
│   │   └── useStudentPagination.ts
│   └── types/
│       └── student.ts
└── App.tsx`,
    hasInteractiveDemo: false,
    deliverables: [
      "Interactive data table with zero hydration mismatch",
      "Modular validation schema for email, phone, and GPA ranges",
      "Custom pagination hook `usePagination`",
    ],
  },
  {
    id: "project-03",
    number: "03",
    title: "Product Management Dashboard",
    category: "API Integration & Async State",
    summary: "An enterprise product catalog and metrics dashboard integrating REST API endpoints, loading skeletons, and empty state handling.",
    description: "Students implement a production service layer using Axios/Fetch, handling realistic asynchronous lifecycle states (idle, loading, error, success) and category drill-downs with debounced search.",
    stack: ["React", "Tailwind CSS", "Axios", "REST API", "Lucide Icons"],
    features: [
      "RESTful API integration (GET, POST, PUT, DELETE product records)",
      "High-fidelity loading skeletons during network latency",
      "Graceful error boundary and retry mechanics for failed HTTP calls",
      "Category tree filter and price-range slider controls",
      "Product metrics cards (Total Inventory, Low Stock Alert, Top Categories)",
      "Optimistic UI updates for quick stock count adjustments",
    ],
    folderStructure: `src/
├── services/
│   └── api/
│       ├── client.ts
│       └── productService.ts
├── features/products/
│   ├── components/
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductMetrics.tsx
│   │   └── ProductSkeleton.tsx
│   └── hooks/
│       └── useProducts.ts
└── App.tsx`,
    hasInteractiveDemo: false,
    deliverables: [
      "Centralized Axios API client with error interceptors",
      "Custom hook `useProducts` encapsulating network states",
      "Accessible modal for updating SKU, stock, and pricing",
    ],
  },
  {
    id: "project-04",
    number: "04",
    title: "Authentication Dashboard",
    category: "Security, Routing & Context",
    summary: "Role-Based Access Control (RBAC) portal with login, token refresh, protected routes, and user profile management.",
    description: "Deep dive into real-world authentication architecture: JWT access tokens, refresh token rotation, HttpOnly cookie concepts, public vs protected layout routes, and role-based component gates.",
    stack: ["React Router v6", "Context API", "Axios Interceptors", "Tailwind CSS"],
    features: [
      "Login and Register screens with remember-me and password strength indicators",
      "Protected Route wrapper redirecting unauthenticated visitors to `/login`",
      "Role-Based Access Control (Admin, Editor, Viewer views)",
      "Automatic token refresh on 401 Unauthorized responses via Axios interceptors",
      "User profile management and session timeout warnings",
      "Secure logout clearing all memory-held auth tokens and state",
    ],
    folderStructure: `src/
├── context/
│   └── AuthContext.tsx
├── routes/
│   ├── AppRoutes.tsx
│   ├── ProtectedRoute.tsx
│   └── RoleGuard.tsx
├── features/auth/
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ProfilePage.tsx
│   └── services/
│       └── authService.ts
└── App.tsx`,
    hasInteractiveDemo: false,
    deliverables: [
      "Robust `AuthContext` with persistent login state",
      "Declarative `ProtectedRoute` and `RoleGuard` components",
      "Mock backend authentication endpoint simulating token expiry",
    ],
  },
  {
    id: "project-05",
    number: "05",
    title: "E-Commerce Frontend",
    category: "State Management (Zustand) & Routing",
    summary: "Feature-packed storefront featuring global shopping cart, wishlist, multi-step checkout UI, and category navigation.",
    description: "Bridges global state management with Zustand and URL routing. Students learn to build cart stores with selectors, persistent checkout state, promo code validation, and responsive mobile drawers.",
    stack: ["React Router", "Zustand Store", "Tailwind CSS", "Lucide Icons"],
    features: [
      "Dynamic catalog with instant category tabs and sorting (price, popularity)",
      "Interactive Product Detail page with image gallery and variant selection",
      "Global Shopping Cart slide-out drawer powered by Zustand with persistent storage",
      "Wishlist toggle with quick-add to cart synchronization",
      "Multi-step checkout pipeline: Shipping Address → Payment Info → Order Summary",
      "Stock limit validation and coupon code discounts calculator",
    ],
    folderStructure: `src/
├── store/
│   ├── useCartStore.ts
│   └── useWishlistStore.ts
├── features/catalog/
│   ├── pages/CatalogPage.tsx
│   └── components/ProductCard.tsx
├── features/checkout/
│   ├── components/StepShipping.tsx
│   ├── components/StepPayment.tsx
│   └── components/OrderSummary.tsx
└── App.tsx`,
    hasInteractiveDemo: false,
    deliverables: [
      "Fully typed Zustand store with actions for adding, updating quantities, and computing subtotals",
      "Multi-step checkout wizard with state validation at each stage",
      "Responsive cart drawer accessible from any page",
    ],
  },
  {
    id: "project-06",
    number: "06",
    title: "Final Capstone: Enterprise React Application",
    category: "Full Architecture, TanStack Query, Zustand & Zod",
    summary: "The pinnacle capstone combining React 19 / Next.js, TanStack Query v5, Zustand, React Hook Form, Zod, and Shadcn UI into an enterprise-scale application.",
    description: "Students synthesize all 26 modules into a production-ready application. Featuring separation of concerns (Pages, Features, Services, Store, API, Utils), server-state caching, optimistic mutations, schema-validated forms, role-based security, and production builds.",
    stack: [
      "Next.js / React 19",
      "TanStack Query v5",
      "Zustand",
      "React Hook Form",
      "Zod Schema",
      "Tailwind CSS",
      "Shadcn UI Style",
      "Vitest & RTL",
    ],
    features: [
      "Full 5-tier architecture: Presentation, Features, State/Cache, Network, and API",
      "TanStack Query v5 for server-side cache invalidation, background refetch, and optimistic UI",
      "Zustand for UI preferences (theme, drawer, notifications, active filters)",
      "React Hook Form integrated with Zod resolvers for type-safe validation and custom error messages",
      "Full authentication lifecycle with JWT tokens, refresh interceptors, and protected layouts",
      "Enterprise UI components: Data table with sorting/filtering, modal dialogs, and toast notifications",
      "Production-ready checklist: Code splitting, lazy loading, Error Boundaries, SEO meta, and Vitest suite",
    ],
    folderStructure: `src/
├── app/                        # App Router Pages & Layouts
│   ├── (auth)/login/
│   ├── (dashboard)/
│   └── layout.tsx
├── components/                 # Reusable UI Primitives (Shadcn style)
│   ├── ui/
│   └── common/
├── features/                   # Feature-based domain modules
│   ├── auth/
│   ├── dashboard/
│   ├── customers/
│   └── billing/
├── hooks/                      # Custom hooks
│   ├── useDebounce.ts
│   └── useMediaQuery.ts
├── services/                   # Network & API layer
│   ├── api.ts
│   └── queryClient.ts
├── store/                      # Zustand global client stores
│   └── useUIStore.ts
├── utils/                      # Pure helper functions
│   └── formatters.ts
└── types/                      # TypeScript definitions`,
    hasInteractiveDemo: false,
    deliverables: [
      "Production-ready codebase with zero TypeScript or ESLint warnings",
      "Complete test suite using Vitest and React Testing Library",
      "Comprehensive README documenting deployment, environment variables, and architecture design",
    ],
  },
];
