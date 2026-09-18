// Generated from src/content/modules by scripts/sync-modules.ts
export interface TopicItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  explanation: string;
  keyPoints: string[];
  codeSnippet: string;
  codeLanguage?: string;
  codeTitle?: string;
  proTip?: string;
  pitfall?: string;
  interactiveDemoKey?: string;
}

export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  category: "Fundamentals" | "Core Concepts" | "Hooks & Lifecycle" | "Routing & Network" | "State & Architecture" | "Enterprise & Production" | "Projects";
  summary: string;
  iconName: string;
  topics: TopicItem[];
}

export const modulesData: ModuleItem[] = [
  {
    "id": "module-01",
    "number": "01",
    "title": "Introduction to React",
    "category": "Fundamentals",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី React គោលគំនិត declarative mental model យន្តការ Virtual DOM ឧបករណ៍ modern Vite tooling និងការរៀបចំ development environment ប្រកបដោយប្រសិទ្ធភាព។",
    "iconName": "Atom",
    "topics": [
      {
        "id": "m01-01",
        "number": "01",
        "title": "What is React?",
        "summary": "JavaScript library បែប declarative និង component-based សម្រាប់បង្កើត interactive user interfaces បង្កើតឡើងដោយ Meta។",
        "explanation": "React គឺជា open-source JavaScript library មួយដែលផ្តោតយ៉ាងសំខាន់ទៅលើ view layer (អក្សរ V នៅក្នុង MVC architecture)។ ជំនួសឱ្យការសរសេរកូដបែប manual ដើម្បី query និង mutate DOM nodes ដោយផ្ទាល់តាមរយៈ imperative APIs ដូចជា `document.getElementById` ឬ `element.appendChild` React ណែនាំនូវវិធីសាស្ត្រថ្មីហៅថា declarative paradigm ដែលអ្នកគ្រាន់តែកំណត់ថាតើ UI គួរមានទម្រង់បែបណាសម្រាប់ state នីមួយៗ ហើយ React នឹងទទួលបន្ទុកធ្វើបច្ចុប្បន្នភាពលើ low-level DOM ដោយស្វ័យប្រវត្តិ និងមានប្រសិទ្ធភាពខ្ពស់។",
        "keyPoints": [
          "Declarative UI: កំណត់ទម្រង់ UI ចុងក្រោយដែលចង់បាន (State) ដោយមិនចាំបាច់សរសេរកូដបញ្ជា DOM មួយជំហានម្តងៗឡើយ។",
          "Component-Based: បំបែកអេក្រង់ដ៏ស្មុគស្មាញឱ្យទៅជាបំណែកតូចៗ (components) ដែលឯករាជ្យ អាចយកមកប្រើឡើងវិញបាន (reusable) និងងាយស្រួលក្នុងការធ្វើ test។",
          "Learn Once, Write Anywhere: គោលគំនិត mental models របស់ React អាចយកទៅអនុវត្តលើ React Native សម្រាប់ mobile apps និង Next.js សម្រាប់ full-stack web apps។",
          "Unidirectional Data Flow: ទិន្នន័យហូរចុះក្រោមតាមរយៈ props ចំណែកឯ events ហូរឡើងលើវិញតាមរយៈ callbacks។"
        ],
        "codeSnippet": "// Imperative DOM manipulation vs React Declarative UI\n// ❌ Traditional Imperative JavaScript:\nconst btn = document.createElement('button');\nbtn.innerText = 'Clicks: 0';\nlet count = 0;\nbtn.addEventListener('click', () => {\n  count++;\n  btn.innerText = `Clicks: ${count}`;\n});\ndocument.body.appendChild(btn);\n\n// ✅ Modern Declarative React Component:\nimport { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button \n      onClick={() => setCount(count + 1)}\n      className=\"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700\"\n    >\n      Clicks: {count}\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Imperative vs Declarative Example",
        "proTip": "គិតតាមបែប state transitions៖ កំណត់ទិន្នន័យរបស់អ្នកថាតើវាផ្លាស់ប្តូរយ៉ាងដូចម្តេច ហើយទុកឱ្យ React គណនា និងអនុវត្តការផ្លាស់ប្តូរនៅលើ DOM ដោយស្វ័យប្រវត្តិ។",
        "pitfall": "កុំព្យាយាមប្រើ DOM query ឬ mutate DOM elements ដោយផ្ទាល់ (ដូចជា innerHTML ឬ querySelector) នៅខាងក្នុង React components ឱ្យសោះ។"
      },
      {
        "id": "m01-02",
        "number": "02",
        "title": "Why React?",
        "summary": "ស្វែងយល់ពីមូលហេតុចម្បងដែល React គ្រងតំណែងនាំមុខគេក្នុង modern web ecosystem និង developer tooling។",
        "explanation": "React ទទួលបានការគាំទ្រយ៉ាងខ្លាំងពីសហគមន៍ developer ទូទាំងពិភពលោក និងក្រុមហ៊ុនបច្ចេកវិទ្យាធំៗ។ ជាមួយនឹង fiber reconciler algorithms ដែលមាន performance ខ្ពស់ រួមផ្សំនឹង ecosystem ដ៏សំបូរបែប ចាប់ពី Next.js រហូតដល់ Tailwind CSS និង Shadcn UI ធ្វើឱ្យ React ក្លាយជាជម្រើសទីមួយក្នុងការបង្កើត web application កម្រិត enterprise។",
        "keyPoints": [
          "Component Reusability: ងាយស្រួលបង្កើត និងចែករំលែក design system components ក្នុងចំណោមក្រុមការងារវិស្វកម្មកម្មវិធី។",
          "Predictable Debugging: ភាពងាយស្រួលក្នុងការត្រួតពិនិត្យ និង debug កូដ ដោយសារ unidirectional data flow និងឧបករណ៍ React DevTools។",
          "Universal Ecosystem: ភាពសម្បូរបែបនៃ libraries ស្តង់ដារដូចជា TanStack Query, Zustand, React Hook Form និង Framer Motion។"
        ],
        "codeSnippet": "// The React ecosystem enables composable, modular features\nimport { Card, CardHeader, CardTitle, CardContent } from \"@/components/ui/card\";\nimport { Badge } from \"@/components/ui/badge\";\n\nexport function CourseCard({ title, level, studentCount }: CourseCardProps) {\n  return (\n    <Card className=\"border border-slate-800 bg-slate-900/60 p-5 rounded-xl\">\n      <CardHeader className=\"flex items-center justify-between pb-2\">\n        <CardTitle className=\"text-xl font-bold text-white\">{title}</CardTitle>\n        <Badge variant=\"outline\" className=\"text-emerald-400 border-emerald-500/30\">\n          {level}\n        </Badge>\n      </CardHeader>\n      <CardContent className=\"text-slate-400 text-sm\">\n        Over {studentCount.toLocaleString()} developers enrolled.\n      </CardContent>\n    </Card>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Composable Component Pattern",
        "proTip": "ការរៀន React ជួយឱ្យអ្នកមានលទ្ធភាពប្រើប្រាស់ ecosystem ដ៏ធំបំផុតនៅលើពិភពលោក ដែលពោរពេញទៅដោយ production-tested packages និង UI patterns កម្រិតខ្ពស់។"
      },
      {
        "id": "m01-03",
        "number": "03",
        "title": "React Features",
        "summary": "លក្ខណៈពិសេសចម្បងៗរួមមាន JSX, Virtual DOM, React Fiber Reconciler និង Server Components។",
        "explanation": "ចំណុចពិសេសស្នូលរបស់ React រួមមាន syntax extension គឺ JSX ក្បួនដោះស្រាយ Virtual DOM diffing algorithm ដែលកាត់បន្ថយការគណនា layout ឡើងវិញរបស់ browser ព្រមទាំងសមត្ថភាព concurrent features ទំនើបក្នុង React 19 ជាមួយ automatic batching។",
        "keyPoints": [
          "JSX: គឺជា syntax extension ដែលអនុញ្ញាតឱ្យយើងសរសេរ HTML នៅខាងក្នុង JavaScript ជាមួយ compile-time type safety ខ្ពស់។",
          "Virtual DOM & Reconciliation: រចនាសម្ព័ន្ធ memory representation ត្រូវបានប្រៀបធៀបដោយប្រើ O(n) diffing heuristics ដើម្បីធ្វើបច្ចុប្បន្នភាពតែចំណុចណាដែលចាំបាច់។",
          "Hooks: មុខងារចែករំលែក stateful logic និង lifecycle ដោយប្រើ functional components ដោយមិនចាំបាច់ប្រើ class components។",
          "Automatic Batching: ប្រមូលផ្តុំការ update state ច្រើនបញ្ចូលគ្នាក្នុងពេលតែមួយ ដើម្បីកាត់បន្ថយការ re-render ឥតប្រយោជន៍។"
        ],
        "codeSnippet": "// React 18+ automatic batching example\nimport { useState } from 'react';\n\nexport function BatchingDemo() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  function handleClick() {\n    // Both state updates are queued and trigger only ONE single re-render!\n    setCount((c) => c + 1);\n    setFlag((f) => !f);\n  }\n\n  return (\n    <button onClick={handleClick}>\n      Count: {count} | Flag: {flag ? 'ON' : 'OFF'}\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Automatic Batching in React",
        "proTip": "គួរប្រើ functional updates `setCount(prev => prev + 1)` ជានិច្ចនៅពេលដែល state ថ្មីអាស្រ័យដោយផ្ទាល់លើតម្លៃនៃ state ចាស់។"
      },
      {
        "id": "m01-04",
        "number": "04",
        "title": "React vs Traditional JavaScript",
        "summary": "ការប្រៀបធៀបរវាង direct DOM manipulation និង state-driven reconciliation model របស់ React។",
        "explanation": "ការសរសេរ Vanilla JavaScript បែបបុរាណតម្រូវឱ្យ developer តាមដាន និងគ្រប់គ្រង DOM elements ដោយផ្ទាល់ (query selectors, update attributes, sync state)។ រីឯ React ចាត់ទុក UI គឺជាលទ្ធផលដែលឆ្លុះបញ្ចាំងចេញពី state ដោយផ្ទាល់ (`UI = f(State)`)។",
        "keyPoints": [
          "Vanilla JS តម្រូវឱ្យ developer ធ្វើការ sync រវាង UI និង memory state ដោយដៃ (manual bookkeeping)។",
          "React ធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិតាមរយៈ reactive state bindings។",
          "លុបបំបាត់បញ្ហា spaghetti code ដែលកើតឡើងដោយសារកូដ DOM mutations រាយប៉ាយពាសពេញ file។"
        ],
        "codeSnippet": "// Comparison: Updating a dynamic badge\n// Vanilla JS\nfunction updateBadge(unreadCount) {\n  const el = document.getElementById('badge');\n  if (unreadCount > 0) {\n    el.innerText = unreadCount;\n    el.style.display = 'inline-block';\n  } else {\n    el.style.display = 'none';\n  }\n}\n\n// React: purely declarative projection\nfunction UnreadBadge({ count }: { count: number }) {\n  if (count <= 0) return null;\n  return <span className=\"bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full\">{count}</span>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Vanilla JS vs Declarative React"
      },
      {
        "id": "m01-05",
        "number": "05",
        "title": "React Application Architecture",
        "summary": "ស្វែងយល់អំពីរចនាសម្ព័ន្ធ unidirectional data tree និង component hierarchy។",
        "explanation": "កម្មវិធី React ត្រូវបានរៀបចំឡើងជាទម្រង់មែកធាង (component tree)។ Root component នឹងបញ្ជូន props ចុះក្រោមទៅកាន់ child components ហើយរាល់ events នឹង trigger ឱ្យមាន state updates ដែលបង្កឱ្យមាន downward reconciliation។",
        "keyPoints": [
          "Root component (`App` ឬ Root Layout) ដើរតួជាគ្រឹះបង្គោលសម្រាប់ Virtual DOM tree ទាំងមូល។",
          "Unidirectional props ហូរពីលើចុះក្រោម (top-to-bottom)។",
          "Lifting state up គឺជាបច្ចេកទេសលើក state ទៅកាន់ parent component រួម ដើម្បីចែករំលែកទិន្នន័យរវាង sibling nodes។"
        ],
        "codeSnippet": "/*\n        [App Root]\n         ├── [Header]\n         │    ├── [Logo]\n         │    └── [NavMenu]\n         ├── [CourseView]\n         │    ├── [ModuleList]  <── (State: selectedModule)\n         │    └── [SlideDisplay]\n         └── [Footer]\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Component Tree Architecture"
      },
      {
        "id": "m01-06",
        "number": "06",
        "title": "React Project Structure",
        "summary": "ការរៀបចំ folder structure កម្រិត enterprise សម្រាប់ scalable React និង Next.js applications។",
        "explanation": "ការជ្រើសរើសទម្រង់ domain-driven ឬ feature-based folder structure ជួយការពារកុំឱ្យ project ក្លាយជា monolith រញ៉េរញ៉ៃ។ គួររៀបចំ folder ទៅតាម `components/`, `features/`, `hooks/`, `services/`, និង `types/`។",
        "keyPoints": [
          "រក្សាទុក component styles, tests, និង sub-components ជាមួយគ្នានៅក្នុង feature folder ជាក់លាក់មួយ (colocation)។",
          "រក្សាទុក reusable UI primitives ទូទៅនៅក្នុង `@/components/ui`។",
          "រក្សាទុក business domain logic នៅក្នុង `@/features/<feature-name>`។"
        ],
        "codeSnippet": "src/\n├── app/              # App Router routes and page layouts\n├── components/       # Cross-cutting reusable UI primitives\n│   └── ui/           # Button, Card, Dialog, Badge (Shadcn style)\n├── features/         # Feature slices (auth, courses, cart)\n│   ├── components/\n│   ├── hooks/\n│   └── services/\n├── hooks/            # Global custom hooks (useDebounce, useTheme)\n├── lib/              # Utilities (cn, formatters, api client)\n└── types/            # TypeScript models and interfaces",
        "codeLanguage": "tsx",
        "codeTitle": "Recommended React Folder Structure"
      },
      {
        "id": "m01-07",
        "number": "07",
        "title": "Creating a React Application",
        "summary": "ជម្រើស scaffolding ពេញនិយមរួមមាន Vite, Next.js និង modern React toolchains។",
        "explanation": "ទោះបីជា Create-React-App ត្រូវបាន deprecated ក៏ដោយ developer សម័យទំនើបប្រើប្រាស់ Vite សម្រាប់បង្កើត Client-Side Single Page Application (SPA) ដែលមានល្បឿនលឿន ឬ Next.js សម្រាប់បង្កើត full-stack web application ដែលគាំទ្រ SEO យ៉ាងល្អប្រសើរ។",
        "keyPoints": [
          "Vite: ផ្តល់នូវ Hot Module Replacement (HMR) យ៉ាងរហ័សផ្អែកលើ native ES modules និង esbuild។",
          "Next.js: Full-stack framework ជាមួយ App Router, Server-Side Rendering (SSR), Static Site Generation (SSG) និង Server Actions។"
        ],
        "codeSnippet": "// Scaffolding a modern SPA with Vite:\nnpm create vite@latest my-react-app -- --template react-ts\n\n// Scaffolding an enterprise full-stack app with Next.js:\nnpx create-next-app@latest my-next-app --typescript --tailwind --eslint --app",
        "codeLanguage": "tsx",
        "codeTitle": "Scaffolding Modern React Applications"
      },
      {
        "id": "m01-08",
        "number": "08",
        "title": "Vite + React",
        "summary": "របៀបដែល Vite ប្រើប្រាស់ native ESM និង Rollup ដើម្បីផ្តល់ build speed យ៉ាងលឿនបំផុត។",
        "explanation": "Vite បម្រើ source code តាមរយៈ native ESM ក្នុងពេល development ដោយមិនចាំបាច់ឆ្លងកាត់ដំណើរការ bundle ទាំងមូលជាមុនឡើយ។ យន្តការនេះធានាថា Hot Module Replacement (HMR) នៅតែមានល្បឿនលឿនភ្លាមៗ ទោះបីជា application មានទំហំធំប៉ុនណាក៏ដោយ។",
        "keyPoints": [
          "ចាប់ផ្តើម dev server ភ្លាមៗ (instant server start) ដោយមិនចាំបាច់ pre-bundle project ទាំងមូល។",
          "ដំណើរការ transpile TypeScript យ៉ាងលឿនដោយប្រើប្រាស់ esbuild។",
          "ដំណើរការ Rollup production bundling ប្រកបដោយប្រសិទ្ធភាពដើម្បីឱ្យ production code មានទំហំតូចបំផុត។"
        ],
        "codeSnippet": "// vite.config.ts\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'),\n    },\n  },\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Vite Configuration with Path Aliases"
      },
      {
        "id": "m01-09",
        "number": "09",
        "title": "Running a React Application",
        "summary": "ការដំណើរការ development server, hot reloading (HMR), port binding និង build scripts ផ្សេងៗ។",
        "explanation": "ការយល់ដឹងអំពី scripts ដូចជា `npm run dev` សម្រាប់ dev server ជាមួយ HMR, `npm run build` សម្រាប់បង្កើត optimized production bundles, និង `npm run preview` ឬ `npm start` សម្រាប់ serve production build ក្នុងការធ្វើតេស្ត។",
        "keyPoints": [
          "Fast Refresh រក្សាទុក state របស់ component មិនឱ្យបាត់បង់ពេលកែប្រែកូដ (instant feedback)។",
          "Source maps ជួយសម្រួលដល់ការ debug កូដនៅលើ browser DevTools ឱ្យឃើញកូដដើមយ៉ាងច្បាស់។"
        ],
        "codeSnippet": "// package.json scripts\n\"scripts\": {\n  \"dev\": \"next dev\",           // Starts local development server\n  \"build\": \"next build\",       // Compiles production-optimized code\n  \"start\": \"next start\",       // Runs production server\n  \"lint\": \"eslint .\"           // Code quality inspection\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Standard NPM Scripts"
      },
      {
        "id": "m01-10",
        "number": "10",
        "title": "Understanding the React Development Environment",
        "summary": "ការយល់ដឹងពី React DevTools, React StrictMode និងការស្វែងយល់ពី double-rendering behavior ក្នុង development។",
        "explanation": "នៅក្នុង development mode ឧបករណ៍ React StrictMode នឹង mount និង unmount components ចំនួនពីរដងដោយចេតនា ដើម្បីជួយស្វែងរក accidental side-effects និងកន្លែងដែលខ្វះ cleanup functions នៅក្នុង effects។",
        "keyPoints": [
          "StrictMode ដំណើរការ effects ពីរដងក្នុង dev mode ដើម្បីពង្រឹងគោលការណ៍ idempotency នៃកូដ។",
          "React Developer Tools browser extension អនុញ្ញាតឱ្យ developer ពិនិត្យមើល props, state, និង render timeline នៃ components នីមួយៗបានយ៉ាងងាយស្រួល។"
        ],
        "codeSnippet": "// React.StrictMode wraps your application tree\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
        "codeLanguage": "tsx",
        "codeTitle": "React StrictMode Wrapper",
        "proTip": "ប្រសិនបើអ្នកឃើញ `console.log` ដំណើរការពីរដងនៅក្នុង `useEffect` កុំបារម្ភ នេះគឺជាចេតនារបស់ React StrictMode ដើម្បីផ្ទៀងផ្ទាត់ cleanup function របស់អ្នកប៉ុណ្ណោះ!"
      }
    ]
  },
  {
    "id": "module-02",
    "number": "02",
    "title": "JSX (JavaScript XML)",
    "category": "Fundamentals",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី JSX syntax rules ការប្រើប្រាស់ expressions ការកំណត់ attributes ការប្រើប្រាស់ inline styles, Fragments និងបច្ចេកទេស conditional rendering ទំនើបៗ។",
    "iconName": "Code2",
    "topics": [
      {
        "id": "m02-01",
        "number": "01",
        "title": "What is JSX?",
        "summary": "Syntax extension សម្រាប់ JavaScript ដែលមានទម្រង់ដូច HTML និងត្រូវបាន compile ទៅជា React elements។",
        "explanation": "JSX (JavaScript XML) គឺជា syntactic sugar មួយដែលដំណើរការនៅលើ `React.createElement` ឬ modern JSX runtime transforms (`jsx(...)`)។ វាអនុញ្ញាតឱ្យ developer សរសេរ markup រួមគ្នាជាមួយ logic នៃការ render នៅកន្លែងតែមួយយ៉ាងមានរបៀបរៀបរយ។",
        "keyPoints": [
          "JSX ត្រូវបាន compiler (ដូចជា Babel ឬ SWC/esbuild) បំប្លែងទៅជា JavaScript functions ធម្មតាមុនពេលកូដទៅដល់ browser។",
          "អនុញ្ញាតឱ្យយើងបង្កប់កូដ JavaScript expressions យ៉ាងទូលំទូលាយនៅខាងក្នុងរង្វង់ក្រចកទោល `{}`។",
          "ផ្តល់នូវ compile-time syntax validation និងការពារប្រព័ន្ធពីការវាយប្រហារ XSS (Cross-Site Scripting) ដោយស្វ័យប្រវត្តិតាមរយៈ auto-escaping។"
        ],
        "codeSnippet": "// JSX syntax:\nconst element = <h1 className=\"text-2xl font-bold\">Hello React</h1>;\n\n// What the compiler outputs behind the scenes:\nimport { jsx as _jsx } from \"react/jsx-runtime\";\nconst element = _jsx(\"h1\", { \n  className: \"text-2xl font-bold\", \n  children: \"Hello React\" \n});",
        "codeLanguage": "tsx",
        "codeTitle": "JSX Compilation Target"
      },
      {
        "id": "m02-02",
        "number": "02",
        "title": "JSX Syntax",
        "summary": "គោលការណ៍បិទ tags ឱ្យបានត្រឹមត្រូវ self-closing tags និងច្បាប់នៃ single parent element។",
        "explanation": "ខុសពី HTML parser ធម្មតា JSX អនុវត្តតាមច្បាប់ XML parsing យ៉ាងតឹងរ៉ឹង៖ រាល់ void tags (ដូចជា `<img />`, `<input />`, `<br />`) ត្រូវតែបិទជា self-closed ដោយផ្ទាល់ ហើយរាល់ component ទាំងអស់ត្រូវតែ return នូវ single top-level node តែមួយគត់។",
        "keyPoints": [
          "Tags មានលក្ខណៈ case-sensitive៖ tags អក្សរតូចជា standard HTML elements (ដូចជា `div`, `span`) រីឯ tags អក្សរធំដើមជា React components (ដូចជា `<Header />`, `<Card />`)។",
          "Self-closing គឺតម្រូវជាចាំបាច់សម្រាប់ tags ដែលគ្មាន children៖ ឧទាហរណ៍ `<input />`, `<img />`។",
          "ច្បាប់ single parent node return កើតឡើងដោយសារ JavaScript syntax ផ្ទាល់ (ព្រោះ function មួយអាច return តម្លៃបានតែមួយប៉ុណ្ណោះក្នុងពេលតែមួយ)។"
        ],
        "codeSnippet": "// ❌ Invalid JSX: Unclosed tag and multiple root nodes\n/*\nreturn (\n  <h1>Title</h1>\n  <input type=\"text\">\n);\n*/\n\n// ✅ Valid JSX: Wrapped in a single parent or Fragment with closed tags\nexport function SearchBar() {\n  return (\n    <div className=\"flex items-center gap-2\">\n      <h1 className=\"text-lg font-medium\">Search:</h1>\n      <input \n        type=\"text\" \n        placeholder=\"Type here...\" \n        className=\"px-3 py-1 border rounded\"\n      />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Valid JSX Syntax Rules"
      },
      {
        "id": "m02-03",
        "number": "03",
        "title": "JSX Expressions",
        "summary": "ការបង្កប់ dynamic expressions ការគណនា និង variables នៅខាងក្នុង curly braces `{}`។",
        "explanation": "រាល់ JavaScript expression ត្រឹមត្រូវ (ដូចជា variables, ការគណនាគណិតវិទ្យា, function calls, ឬ ternary operators) អាចដាក់នៅចន្លោះសញ្ញា curly braces `{}` នៅក្នុង JSX បានទាំងអស់។",
        "keyPoints": [
          "Statements ដូចជា `if`, `for`, `while` មិនអាចសរសេរនៅខាងក្នុង `{}` បានឡើយ។ ត្រូវប្រើ ternary operators ឬ array methods (ដូចជា `.map()`, `.filter()`) ជំនួសវិញ។",
          "Numbers និង strings នឹងត្រូវបង្ហាញលើ UI ដោយផ្ទាល់ ចំណែកឯ booleans (`true`/`false`), `null`, និង `undefined` ត្រូវបាន React ignore (មិនបង្ហាញលើអេក្រង់ឡើយ)។"
        ],
        "codeSnippet": "export function UserGreeting({ username, points }: { username: string; points: number }) {\n  const multiplier = 1.5;\n\n  return (\n    <div className=\"p-4 bg-slate-900 rounded-lg text-white\">\n      <h2 className=\"text-xl\">Welcome back, {username.toUpperCase()}!</h2>\n      <p className=\"text-slate-400\">\n        Adjusted score: {(points * multiplier).toFixed(0)} XP\n      </p>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Expressions Inside JSX"
      },
      {
        "id": "m02-04",
        "number": "04",
        "title": "JavaScript inside JSX",
        "summary": "ការហៅ function ដំណើរការ ការប្រើប្រាស់ template literals និងការទាញយក object properties។",
        "explanation": "សញ្ញា Curly braces `{}` ដើរតួជាស្ពានតភ្ជាប់ទៅកាន់ពិភព JavaScript ពេញលេញ។ អ្នកអាចហៅ utility functions, format កាលបរិច្ឆេទ, និងគណនា styling បានយ៉ាងរលូន។",
        "keyPoints": [
          "អាច format កាលបរិច្ឆេទ និងលេខទិន្នន័យបានភ្លាមៗដោយប្រើ standard JavaScript APIs ដូចជា `Intl.NumberFormat` ឬ `Intl.DateTimeFormat`។",
          "បញ្ជូន callback function reference ទៅកាន់ event handlers ដោយផ្ទាល់ ដោយមិនត្រូវហៅ function ដំណើរការភ្លាមៗពេល render នោះឡើយ (ឧ. `onClick={handleClick}` មិនមែន `onClick={handleClick()}`)។"
        ],
        "codeSnippet": "export function ProductPrice({ priceInCents }: { priceInCents: number }) {\n  const formatCurrency = (cents: number) => \n    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);\n\n  return (\n    <span className=\"font-semibold text-emerald-400\">\n      {formatCurrency(priceInCents)}\n    </span>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "JavaScript Functions in JSX"
      },
      {
        "id": "m02-05",
        "number": "05",
        "title": "JSX Attributes",
        "summary": "ក្បួនដាក់ឈ្មោះ attributes ជាទម្រង់ camelCase និងការប្រើប្រាស់ boolean props។",
        "explanation": "HTML attributes ត្រូវបានបំប្លែងទៅជាទម្រង់ camelCase នៅក្នុង JSX (ឧទាហរណ៍ `onclick` ក្លាយជា `onClick`, `tabindex` ក្លាយជា `tabIndex`)។ ការបញ្ជូន prop ដោយមិនកំណត់តម្លៃ គឺមានតម្លៃស្មើនឹង `true` ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "ឈ្មោះ attribute ត្រូវតែសរសេរជា camelCase៖ ដូចជា `tabIndex`, `autoFocus`, `aria-*` (រក្សាសញ្ញា hyphen ដដែល)។",
          "Boolean prop shorthand៖ ការសរសេរ `<button disabled>` គឺដូចគ្នាទៅនឹងការសរសេរ `<button disabled={true}>`។"
        ],
        "codeSnippet": "<input \n  id=\"user-email\"\n  type=\"email\"\n  autoComplete=\"email\"\n  autoFocus\n  disabled={false}\n  tabIndex={1}\n  aria-label=\"User Email Address\"\n  className=\"w-full px-4 py-2 border rounded-md\"\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "JSX camelCase Attributes"
      },
      {
        "id": "m02-06",
        "number": "06",
        "title": "className",
        "summary": "មូលហេតុដែល React ប្រើប្រាស់ className ជំនួសឱ្យ class សម្រាប់កំណត់ CSS styling។",
        "explanation": "ដោយសារពាក្យ `class` គឺជា reserved keyword នៅក្នុង JavaScript (ប្រើសម្រាប់ប្រកាស ES6 classes) ដូចនេះ React ប្រើប្រាស់ `className` ជំនួសវិញសម្រាប់កំណត់ឈ្មោះ CSS classes ទៅលើ elements។",
        "keyPoints": [
          "ប្រើ `className` សម្រាប់គ្រប់ CSS classes ទាំងអស់។",
          "ប្រើ utility function `cn()` (ការរួមបញ្ចូលគ្នារវាង `clsx` និង `tailwind-merge`) ដើម្បីគ្រប់គ្រង conditional និង dynamic class names ឱ្យមានរបៀបរៀបរយ និងមិនជាន់គ្នា។"
        ],
        "codeSnippet": "import { cn } from \"@/lib/utils\";\n\nexport function StatusBadge({ status }: { status: \"active\" | \"inactive\" | \"pending\" }) {\n  return (\n    <span\n      className={cn(\n        \"px-2.5 py-1 text-xs font-semibold rounded-full border\",\n        status === \"active\" && \"bg-emerald-950/50 text-emerald-400 border-emerald-800\",\n        status === \"pending\" && \"bg-amber-950/50 text-amber-400 border-amber-800\",\n        status === \"inactive\" && \"bg-rose-950/50 text-rose-400 border-rose-800\"\n      )}\n    >\n      {status.toUpperCase()}\n    </span>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "className with Dynamic Utility"
      },
      {
        "id": "m02-07",
        "number": "07",
        "title": "Inline Styles",
        "summary": "ការបញ្ជូន style objects ដោយប្រើ camelCase keys ទៅកាន់ style attribute។",
        "explanation": "Inline styles នៅក្នុង JSX តម្រូវឱ្យបញ្ជូនជា JavaScript object ដែល CSS properties ត្រូវតែសរសេរជា camelCase (ឧទាហរណ៍ `backgroundColor` ជំនួសឱ្យ `background-color`) ហើយតម្លៃលេខសុទ្ធនឹងត្រូវគិតជា pixels (`px`) ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "Inline styles ប្រើប្រាស់ double curly braces៖ `style={{ margin: 16, backgroundColor: '#000' }}` (ស្រទាប់ក្រៅជា JSX expression, ស្រទាប់ក្នុងជា JavaScript object)។",
          "Inline styles មិនគាំទ្រ media queries ឬ pseudo-classes (`:hover`, `:focus`) ឡើយ ដូច្នេះគួរប្រើ Tailwind CSS ឬ CSS modules សម្រាប់ styling ទូទៅ។"
        ],
        "codeSnippet": "export function CustomProgressBar({ progress }: { progress: number }) {\n  return (\n    <div className=\"w-full bg-slate-800 h-3 rounded-full overflow-hidden\">\n      <div \n        className=\"h-full bg-blue-500 transition-all duration-300\"\n        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}\n      />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Inline Style Object in JSX"
      },
      {
        "id": "m02-08",
        "number": "08",
        "title": "JSX Fragments",
        "summary": "ការប្រមូលផ្តុំបញ្ជី children ច្រើនបញ្ចូលគ្នាដោយមិនបាច់បន្ថែម wrapper DOM nodes ឥតប្រយោជន៍។",
        "explanation": "Fragments (សរសេរពេញ `<React.Fragment>` ឬសរសេរកាត់ `<>...</>`) អនុញ្ញាតឱ្យយើង return sibling components ច្រើនក្នុងពេលតែមួយ ដោយមិនបាច់បន្ថែម `<div>` tags ឥតប្រយោជន៍ទៅក្នុង DOM tree ឡើយ។",
        "keyPoints": [
          "ការសរសេរកាត់ `<>...</>` មិនបង្កើត DOM node បន្ថែមឡើយ (zero DOM overhead)។",
          "ត្រូវប្រើ syntax ពេញ `<React.Fragment key={item.id}>` នៅពេល render fragments នៅក្នុង loop ដែលទាមទារឱ្យមាន `key` prop។"
        ],
        "codeSnippet": "import React from 'react';\n\nexport function TableRowGroup({ items }: { items: { id: string; label: string; value: string }[] }) {\n  return (\n    <dl className=\"grid grid-cols-2 gap-2\">\n      {items.map((item) => (\n        // Key is required here, so use explicit React.Fragment:\n        <React.Fragment key={item.id}>\n          <dt className=\"text-slate-400 font-medium\">{item.label}</dt>\n          <dd className=\"text-white text-right\">{item.value}</dd>\n        </React.Fragment>\n      ))}\n    </dl>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "React Fragments with Keys"
      },
      {
        "id": "m02-09",
        "number": "09",
        "title": "Conditional JSX",
        "summary": "ការប្រើប្រាស់ ternary operators, early returns និង logical short-circuiting។",
        "explanation": "Conditional rendering អនុញ្ញាតឱ្យយើងបង្ហាញ UI ផ្សេងៗគ្នាទៅតាមតម្លៃនៃ state ឬ props ដោយប្រើប្រាស់ ternary expressions (`? :`) ឬ early `return` guards។",
        "keyPoints": [
          "ប្រើ early return guards សម្រាប់ loading state និង error UI ដើម្បីរក្សាកូដក្នុង main component ឱ្យខ្លី និងងាយអាន។",
          "ប្រើ ternary operators សម្រាប់ការប្តូរ UI ពីរសណ្ឋាន (binary toggles) នៅខាងក្នុង markup ដោយផ្ទាល់។"
        ],
        "codeSnippet": "export function AuthButton({ isLoggedIn, onLogin, onLogout }: AuthButtonProps) {\n  return isLoggedIn ? (\n    <button onClick={onLogout} className=\"px-3 py-1.5 bg-rose-600 text-white rounded\">\n      Sign Out\n    </button>\n  ) : (\n    <button onClick={onLogin} className=\"px-3 py-1.5 bg-blue-600 text-white rounded\">\n      Sign In\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Ternary Conditional JSX"
      },
      {
        "id": "m02-10",
        "number": "10",
        "title": "Rendering Dynamic Content",
        "summary": "ការបង្ហាញ dynamic strings, numbers, dates និង localized strings នៅលើ UI។",
        "explanation": "Components ទទួលយក props ឬ state ហើយធ្វើបច្ចុប្បន្នភាពលើ UI ភ្លាមៗ (real-time) នៅពេលដែលទិន្នន័យមានការប្រែប្រួល។",
        "keyPoints": [
          "តម្លៃនៅលើ UI នឹង re-render ដោយស្វ័យប្រវត្តិនៅពេលដែល state ឬ props ដែលវាប្រើមានការផ្លាស់ប្តូរ។",
          "អាចបញ្ចូល dynamic attributes ដូចជា `alt`, `href`, និង `src` ដោយប្រើប្រាស់ `{variable}` ឬ template literals។"
        ],
        "codeSnippet": "export function Avatar({ user }: { user: { name: string; avatarUrl: string } }) {\n  return (\n    <img \n      src={user.avatarUrl} \n      alt={`Profile picture of ${user.name}`}\n      className=\"w-10 h-10 rounded-full border-2 border-emerald-500\" \n    />\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Dynamic Attributes in JSX"
      },
      {
        "id": "m02-11",
        "number": "11",
        "title": "JSX Rules",
        "summary": "សេចក្តីសង្ខេបអំពីច្បាប់បិទ tags ឱ្យបានម៉ត់ចត់ single root element និង property casing។",
        "explanation": "គោលការណ៍គ្រឹះ ៤ យ៉ាងនៃ JSX រួមមាន៖ ១) ត្រូវតែ return single root element (ឬ Fragment); ២) ត្រូវតែបិទ tags ទាំងអស់ (close all tags); ៣) ប្រើប្រាស់ camelCase សម្រាប់ attributes ស្ទើរតែទាំងអស់; ៤) ប្រើ double quotes `\"\"` សម្រាប់ static strings និង curly braces `{}` សម្រាប់ dynamic expressions។",
        "keyPoints": [
          "ទាមទារ single parent element ជាដាច់ខាត។",
          "រាល់ HTML elements ទាំងអស់ត្រូវតែបិទ (closed explicitly)។",
          "Attribute `style` ត្រូវតែជា JavaScript object មិនមែនជា CSS string ធម្មតាឡើយ។"
        ],
        "codeSnippet": "// Summary of Core JSX Rules:\n// 1. Single Root\nreturn <div className=\"card\">...</div>;\n\n// 2. Closed Tags\n<input type=\"text\" />\n\n// 3. camelCase\n<button onClick={handleClick} tabIndex={0}>Click</button>\n\n// 4. Expression braces\n<h1>{`Hello ${user.name}`}</h1>",
        "codeLanguage": "tsx",
        "codeTitle": "JSX Core Rules Summary"
      },
      {
        "id": "m02-12",
        "number": "12",
        "title": "Common JSX Mistakes",
        "summary": "កំហុសទូទៅដូចជាការ render ចេញលេខ 0 ពេលប្រើ logical AND `&&`, ការភ្លេចដាក់ keys និងបញ្ហា class vs className។",
        "explanation": "កំហុសដែលកើតឡើងញឹកញាប់បំផុតនៅក្នុង JSX គឺការប្រើប្រាស់ `count && <Component />`៖ ប្រសិនបើ `count` ស្មើ `0` នោះ JavaScript នឹង evaluate `0 && ...` ស្មើ `0` ដែលធ្វើឱ្យលេខ `0` បង្ហាញលើអេក្រង់ជំនួសឱ្យការលាក់បាត់!",
        "keyPoints": [
          "មិនត្រូវសរសេរ `items.length && <List />` ឡើយ -> ត្រូវប្តូរមកប្រើ `items.length > 0 && <List />` ឬប្រើ ternary `items.length ? <List /> : null`។",
          "ជៀសវាងការប្រើប្រាស់ array index ជា `key` នៅពេលដែលបញ្ជីទិន្នន័យអាចមានការតម្រៀបឡើងវិញ (reorder) ឬលុបចេញ (remove)។"
        ],
        "codeSnippet": "// ❌ Pitfall: Renders the number \"0\" onto the webpage!\n{messages.length && <Badge count={messages.length} />}\n\n// ✅ Fix: Use explicit boolean comparison:\n{messages.length > 0 && <Badge count={messages.length} />}\n\n// ✅ Alternative: Use ternary operator:\n{messages.length > 0 ? <Badge count={messages.length} /> : null}",
        "codeLanguage": "tsx",
        "codeTitle": "The Logical AND Zero Bug",
        "pitfall": "ការសរសេរ `{count && <Element />}` នៅពេលដែល count មានតម្លៃស្មើ 0 នឹងបណ្តាលឱ្យអក្សរលេខ '0' លេចឡើងនៅលើ UI។ ត្រូវប្រើ `{count > 0 && <Element />}` ជានិច្ច។"
      }
    ]
  },
  {
    "id": "module-03",
    "number": "03",
    "title": "Components",
    "category": "Fundamentals",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី Functional Components, ក្បួនដាក់ឈ្មោះ PascalCase, យុទ្ធសាស្ត្រ Component Composition, រចនាសម្ព័ន្ធ Nested Architecture និង Container vs Presentational patterns។",
    "iconName": "Layers",
    "topics": [
      {
        "id": "m03-01",
        "number": "01",
        "title": "What is a Component?",
        "summary": "UI building block ស្នូលដែលមានភាពឯករាជ្យ អាចយកមកប្រើឡើងវិញបាន និងជាគ្រឹះចម្បងក្នុង React។",
        "explanation": "Component គឺជា JavaScript function ដែលទទួល inputs ហៅថា 'props' ហើយ return ត្រឡប់មកវិញនូវ React element ដើម្បីកំណត់ថាតើអ្វីខ្លះត្រូវបង្ហាញនៅលើ screen។ Components ជួយប្រមូលផ្តុំ markup (JSX), logic និង styles ឱ្យស្ថិតនៅក្នុង module តែមួយយ៉ាងមានសណ្តាប់ធ្នាប់។",
        "keyPoints": [
          "Components អនុញ្ញាតឱ្យអ្នកបំបែក UI ទាំងមូលឱ្យទៅជាបំណែកតូចៗដែលឯករាជ្យ និងអាចយកទៅប្រើឡើងវិញបាន (reusable)។",
          "Components ត្រូវតែជា pure functions ធៀបទៅនឹង props របស់ពួកវា (inputs ដូចគ្នា ត្រូវតែផ្តល់ output ដូចគ្នា)។",
          "Component state អនុញ្ញាតឱ្យ UI មានភាព dynamic ផ្លាស់ប្តូរទិន្នន័យ និងឆ្លើយតបទៅនឹង interactions របស់អ្នកប្រើប្រាស់។"
        ],
        "codeSnippet": "export function WelcomeBanner() {\n  return (\n    <div className=\"bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg\">\n      <h1 className=\"text-2xl font-bold\">Welcome to Modern React</h1>\n      <p className=\"text-blue-100 mt-1\">Master components, hooks, and architecture.</p>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Basic Functional Component",
        "proTip": "គិតតាមបែប Lego blocks៖ UI ទាំងមូលកើតចេញពី component តូចៗផ្គុំគ្នា ដែលធ្វើឱ្យកូដងាយស្រួល scale, debug និង test។"
      },
      {
        "id": "m03-02",
        "number": "02",
        "title": "Functional Components",
        "summary": "ស្តង់ដារទំនើបសម្រាប់ React components ដោយប្រើ JavaScript functions ធម្មតាជាមួយ React Hooks។",
        "explanation": "Class components ត្រូវបានចាត់ទុកជា legacy ក្នុង modern React រួចទៅហើយ។ Functional components រួមផ្សំជាមួយ React Hooks ផ្តល់នូវ syntax ខ្លីស្អាត ការគាំទ្រ TypeScript inference កាន់តែប្រសើរ ភាពងាយស្រួលក្នុងការសរសេរ unit tests និងទំហំ bundle size តូចជាងមុន។",
        "keyPoints": [
          "ប្រកាស component ដោយប្រើ `function ComponentName()` ធម្មតា ឬ arrow function syntax។",
          "React Hooks (ដូចជា `useState`, `useEffect`) អាចហៅប្រើបានតែនៅខាងក្នុង Functional Components ឬ Custom Hooks ប៉ុណ្ណោះ។",
          "កាត់បន្ថយ boilerplate code ធៀបនឹង class components និងមិនចាំបាច់ដោះស្រាយបញ្ហា `this` binding ឡើយ។"
        ],
        "codeSnippet": "// Standard functional component with TypeScript props\ninterface BadgeProps {\n  label: string;\n  variant?: 'primary' | 'success' | 'warning';\n}\n\nexport const StatusBadge = ({ label, variant = 'primary' }: BadgeProps) => {\n  const styles = {\n    primary: 'bg-blue-950 text-blue-400 border-blue-800',\n    success: 'bg-emerald-950 text-emerald-400 border-emerald-800',\n    warning: 'bg-amber-950 text-amber-400 border-amber-800',\n  };\n\n  return (\n    <span className={`px-2 py-0.5 text-xs font-mono rounded border ${styles[variant]}`}>\n      {label}\n    </span>\n  );\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Modern Functional Component with TypeScript",
        "proTip": "ប្រើ named function declarations ឬ typed arrow functions ជាមួយ TypeScript interfaces ដើម្បីទទួលបាន type safety និង auto-completion យ៉ាងល្អឥតខ្ចោះ។"
      },
      {
        "id": "m03-03",
        "number": "03",
        "title": "Creating Components",
        "summary": "ការសរសេរ ការ export ការ import និងការរៀបចំ components ឆ្លងកាត់ files ផ្សេងៗក្នុងគម្រោង។",
        "explanation": "បង្កើត components នៅក្នុង `.tsx` file ដាច់ដោយឡែក។ គួរប្រើប្រាស់ Named Exports ជាជាង Default Exports ដើម្បីឱ្យ editor (ដូចជា VS Code) អាចធ្វើ auto-import និង safe refactoring បានត្រឹមត្រូវ ដោយមិនបារម្ភពីការច្រឡំឈ្មោះ។",
        "keyPoints": [
          "ផ្តល់អាទិភាពដល់ Named Exports (`export function Header()`) ជាជាង Default Exports ដើម្បីបង្កើនភាពច្បាស់លាស់ពេល import។",
          "គួររក្សា file component នីមួយៗក្រោម ១៥០-២០០ បន្ទាត់ ដើម្បីធានាថាវាងាយស្រួលអាន និង maintain។",
          "ដាក់ឈ្មោះ file ឱ្យដូចគ្នានឹងឈ្មោះ Component ឧទាហរណ៍ `Header.tsx` សម្រាប់ `Header` component។"
        ],
        "codeSnippet": "// src/components/Header.tsx\nexport function Header() {\n  return (\n    <header className=\"h-16 border-b border-slate-800 px-6 flex items-center justify-between\">\n      <span className=\"font-bold text-lg text-white\">ReactMaster</span>\n      <nav className=\"flex gap-4 text-sm text-slate-400\">\n        <a href=\"#modules\" className=\"hover:text-white\">Curriculum</a>\n        <a href=\"#projects\" className=\"hover:text-white\">Projects</a>\n      </nav>\n    </header>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Exporting and Modularizing Components",
        "proTip": "ការប្រើ Named Exports ជួយការពារ typo ពេល import និងជួយឱ្យ refactoring tools អាច update ឈ្មោះ component គ្រប់ទីកន្លែងដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m03-04",
        "number": "04",
        "title": "Component Naming",
        "summary": "ក្បួនដាក់ឈ្មោះជា PascalCase និងគោលការណ៍ណែនាំដាក់ឈ្មោះតាម domain business។",
        "explanation": "React components ត្រូវតែចាប់ផ្តើមដោយអក្សរធំជានិច្ច (`PascalCase`)។ ប្រសិនបើ component ចាប់ផ្តើមដោយអក្សរតូច JSX នឹងចាត់ទុកវាជា built-in HTML tag ធម្មតាដូចជា `<div>`, `<span>` ឬ `<header>` ដែលបណ្តាលឱ្យ React មិនអាចស្គាល់ component របស់អ្នកបានឡើយ។",
        "keyPoints": [
          "ប្រើប្រាស់ PascalCase ជានិច្ចសម្រាប់ React components ដូចជា `UserProfile`, `NavigationDrawer`, `ProductCard`។",
          "ដាក់ឈ្មោះ helper/child components ឱ្យមានលំដាប់លំដោយសមហេតុផលដូចជា `CardHeader`, `CardBody`, `CardFooter`។",
          "ដាក់ឈ្មោះឱ្យឆ្លុះបញ្ចាំងពីមុខងារជាក់ស្តែង (Domain-driven) ជៀសវាងឈ្មោះទូទៅពេកដូចជា `Item` ឬ `Data`។"
        ],
        "codeSnippet": "// ❌ Incorrect: Lowercase treated as unknown HTML element\n// function userProfile() { return <div>User</div>; }\n\n// ✅ Correct: PascalCase recognized as React component\nexport function UserProfile() {\n  return <div className=\"p-4 bg-slate-900 rounded\">User Profile</div>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "PascalCase Naming Rule",
        "pitfall": "ការសរសេរ `<userProfile />` ជំនួសឱ្យ `<UserProfile />` នឹងធ្វើឱ្យ React ស្វែងរក HTML tag ឈ្មោះ userProfile ដែលមិនមាននៅក្នុង browser!"
      },
      {
        "id": "m03-05",
        "number": "05",
        "title": "Component Structure",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធផ្ទៃក្នុង៖ imports, types/interfaces, state, handlers និង JSX return។",
        "explanation": "រចនាសម្ព័ន្ធ component ដែលមានស្តង់ដារច្បាស់លាស់ជួយឱ្យកូដមានភាពងាយស្រួលក្នុងការអាន និងស្មានដឹងជាមុន (Predictable)៖ ១) Imports; ២) Props interfaces/types; ៣) Component declaration; ៤) State & hooks; ៥) Handlers & helper logic; ៦) JSX return statement។",
        "keyPoints": [
          "ហៅ React Hooks ទាំងអស់នៅផ្នែកខាងលើបង្អស់នៃ function (Top level) ជានិច្ច។",
          "ប្រកាស event handlers និង logic ផ្សេងៗមុនពេល return JSX។",
          "ញែក complex helper functions ដែលមិនពឹងផ្អែកលើ component state ចេញទៅក្រៅ function body។"
        ],
        "codeSnippet": "// 1. Imports\nimport { useState } from 'react';\nimport { Heart } from 'lucide-react';\n\n// 2. Types\ninterface LikeButtonProps {\n  initialCount?: number;\n}\n\n// 3. Component Declaration\nexport function LikeButton({ initialCount = 0 }: LikeButtonProps) {\n  // 4. Hooks / State\n  const [likes, setLikes] = useState(initialCount);\n  const [liked, setLiked] = useState(false);\n\n  // 5. Handlers\n  const handleToggle = () => {\n    setLiked(!liked);\n    setLikes(prev => liked ? prev - 1 : prev + 1);\n  };\n\n  // 6. JSX Return\n  return (\n    <button \n      onClick={handleToggle}\n      className=\"flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500\"\n    >\n      <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />\n      <span className=\"text-sm font-medium\">{likes}</span>\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Predictable Component Layout Structure",
        "proTip": "ការរៀបចំតាមលំដាប់លំដោយ Imports -> Types -> Hooks -> Handlers -> JSX Return ជួយឱ្យ developer ក្នុងក្រុមអាចចូលមកអាន និងកែសម្រួលកូដបានយ៉ាងរហ័ស។"
      },
      {
        "id": "m03-06",
        "number": "06",
        "title": "Component Composition",
        "summary": "ការកសាង user interface ស្មុគស្មាញដោយការផ្គុំ atomic components តូចៗបញ្ចូលគ្នា។",
        "explanation": "Composition គឺជាអានុភាពដ៏ខ្លាំងក្លាបំផុតរបស់ React (React's core superpower)។ ជំនួសឱ្យការបង្កើត monolithic component ដ៏ធំមួយដែលមាន props រាប់សិប វិធីសាស្ត្រត្រឹមត្រូវគឺការផ្គុំ components តូចៗដែលផ្តោតលើមុខងារតែមួយបញ្ចូលគ្នា (Favor Composition over Inheritance)។",
        "keyPoints": [
          "ផ្តល់អាទិភាពលើ Composition ជាជាង Inheritance ក្នុងស្ថាបត្យកម្ម React UI។",
          "បញ្ជូន components ជា props ឬប្រើប្រាស់ `children` prop ដើម្បី slot dynamic content តាមតម្រូវការ។",
          "ជួយកាត់បន្ថយបញ្ហា Prop Drilling និងធ្វើឱ្យ components មានភាពឯករាជ្យខ្ពស់។"
        ],
        "codeSnippet": "// Composing Layout with Header and Content\nexport function PageLayout({ header, children }: { header: React.ReactNode; children: React.ReactNode }) {\n  return (\n    <div className=\"min-h-screen bg-slate-950 text-slate-100\">\n      <header className=\"border-b border-slate-800\">{header}</header>\n      <main className=\"max-w-7xl mx-auto p-6\">{children}</main>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Component Composition Pattern",
        "proTip": "ប្រើប្រាស់ `children` ឬ slot props ដូចជា `header` និង `footer` ដើម្បីឱ្យ component របស់អ្នកអាចផ្ទុក content អ្វីក៏បានដោយមិនចាំបាច់ចងភ្ជាប់ logic តឹងរ៉ឹងពេក។"
      },
      {
        "id": "m03-07",
        "number": "07",
        "title": "Reusable Components",
        "summary": "ការឌីហ្សាញ UI building blocks ដែលមានភាពបត់បែនខ្ពស់ ងាយស្រួល config និងអាចប្រើឡើងវិញបានច្រើនកន្លែង។",
        "explanation": "Reusable component ដ៏ល្អមួយ ត្រូវតែមាន minimal required API, មានតម្លៃ default ត្រឹមត្រូវ និងអាចទទួល standard HTML attributes (ដូចជា `className`, `disabled`, `onClick`, `aria-*`) តាមរយៈ prop spreading។",
        "keyPoints": [
          "ពង្រីក standard HTML attributes ជាមួយ TypeScript ដូចជា `React.ButtonHTMLAttributes<HTMLButtonElement>`។",
          "អនុញ្ញាតឱ្យមាន external styling បន្ថែមតាមរយៈការ merge `className` (ឧ. ប្រើ `clsx` ឬ `tailwind-merge`)។",
          "ប្រើប្រាស់ variants (primary, secondary, danger) ដើម្បីគ្រប់គ្រង visual states ផ្សេងៗគ្នានៃ UI។"
        ],
        "codeSnippet": "import React from 'react';\nimport { cn } from '@/lib/utils';\n\ninterface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: 'primary' | 'secondary' | 'danger';\n}\n\nexport function Button({ variant = 'primary', className, ...props }: ButtonProps) {\n  const base = \"px-4 py-2 rounded-lg font-medium transition-colors focus:ring-2\";\n  const variants = {\n    primary: \"bg-blue-600 hover:bg-blue-700 text-white\",\n    secondary: \"bg-slate-800 hover:bg-slate-700 text-slate-200\",\n    danger: \"bg-rose-600 hover:bg-rose-700 text-white\",\n  };\n\n  return <button className={cn(base, variants[variant], className)} {...props} />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Robust Reusable Button",
        "proTip": "ប្រើ helper `cn()` (clsx + tailwind-merge) ដើម្បី merge Tailwind CSS classes ដោយជៀសវាងបញ្ហា style specificity conflicts។"
      },
      {
        "id": "m03-08",
        "number": "08",
        "title": "Nested Components",
        "summary": "ការ render child components នៅខាងក្នុង parent tree ដោយជៀសវាងការប្រកាស component នៅខាងក្នុង function body។",
        "explanation": "យើងអាច render components បង្កប់គ្នាក្នុង parent-child hierarchy បានយ៉ាងងាយស្រួល។ ប៉ុន្តែសូមកុំប្រកាស (declare) function component មួយនៅខាងក្នុង body នៃ component មួយផ្សេងទៀតឱ្យសោះ ព្រោះវានឹងត្រូវ re-create ថ្មីរាល់ពេល render ដែលនាំឱ្យបាត់បង់ state ខាងក្នុង និងបញ្ហា performance ធ្ងន់ធ្ងរ។",
        "keyPoints": [
          "ត្រូវប្រកាស child components នៅ module scope (ខាងក្រៅ parent component) ជានិច្ច។",
          "បញ្ជូនទិន្នន័យពី parent ទៅកាន់ child components តាមរយៈ props។",
          "រៀបចំ component tree ឱ្យមាន hierarchy ច្បាស់លាស់ដើម្បីងាយស្រួលតាមដាន data flow។"
        ],
        "codeSnippet": "// ❌ Anti-pattern: Defining child inside parent\n/*\nfunction Parent() {\n  function Child() { return <div>Recreated every render!</div>; }\n  return <Child />;\n}\n*/\n\n// ✅ Correct: Declared at module scope\nfunction Child({ title }: { title: string }) {\n  return <li className=\"text-slate-300 py-1\">{title}</li>;\n}\n\nexport function Parent() {\n  return (\n    <ul className=\"list-disc pl-5\">\n      <Child title=\"First Topic\" />\n      <Child title=\"Second Topic\" />\n    </ul>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Properly Nesting Components",
        "pitfall": "ការប្រកាស component function នៅខាងក្នុង body នៃ component មួយផ្សេងទៀត នឹងបណ្តាលឱ្យវាត្រូវបង្កើតឡើងវិញរាល់ពេល re-render ដែលនាំឱ្យបាត់បង់ input focus និង state ខាងក្នុង!"
      },
      {
        "id": "m03-09",
        "number": "09",
        "title": "Component Organization",
        "summary": "ការរៀបចំ generic UI components និង page-specific components ឱ្យមានរបៀបរៀបរយ។",
        "explanation": "រក្សា atomic primitives ទូទៅនៅក្នុង `@/components/ui` (ដូចជា Button, Input), រក្សា composite widgets នៅក្នុង `@/components` (ដូចជា Header, Sidebar) និងរក្សា domain-specific components នៅក្នុង `@/features` (ដូចជា CartDrawer, StudentTable)។",
        "keyPoints": [
          "Atomic Primitives: Button, Input, Checkbox, Badge (មិនមាន business logic)។",
          "Compound Components: Modal, DropdownMenu, NavigationDrawer។",
          "Feature Components: StudentTable, CartDrawer, ProductGrid (ចងភ្ជាប់ជាមួយ feature logic)។"
        ],
        "codeSnippet": "src/\n├── components/\n│   ├── ui/             # Primitives: Button.tsx, Input.tsx\n│   └── layout/         # Header.tsx, Sidebar.tsx\n└── features/\n    └── cart/           # CartDrawer.tsx, CartItem.tsx, CartSummary.tsx",
        "codeLanguage": "tsx",
        "codeTitle": "Component Tier Hierarchy",
        "proTip": "ការបែងចែក components ជា tier ច្បាស់លាស់ជួយឱ្យ team ងាយដឹងថាតើ component ណាជា shared primitive និង component ណាជា business logic។"
      },
      {
        "id": "m03-10",
        "number": "10",
        "title": "Feature-based Components",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធតាម business domain capability ជំនួសឱ្យការបែងចែកតាម technical role។",
        "explanation": "Feature folders ជួយប្រមូលផ្តុំរាល់អ្វីៗទាំងអស់ដែលពាក់ព័ន្ធនឹង business domain តែមួយនៅកន្លែងតែមួយ៖ components, hooks, types, និង API services។ នៅពេលអ្នកចង់កែប្រែ ឬលុប feature ណាមួយចេញ រាល់ files ពាក់ព័ន្ធទាំងអស់ស្ថិតនៅជាមួយគ្នា មិនរាយប៉ាយឡើយ។",
        "keyPoints": [
          "បង្កើន maintainability នៃ project នៅពេលដែល codebase រីកធំឡើងលើសពី ១០០+ files។",
          "បង្កើតព្រំដែនច្បាស់លាស់រវាង feature-specific code និង shared reusable UI components។",
          "ងាយស្រួលក្នុងការធ្វើ code review, testing និង onboarding សមាជិកថ្មីក្នុងក្រុម។"
        ],
        "codeSnippet": "features/auth/\n├── components/\n│   ├── LoginForm.tsx\n│   ├── RegisterModal.tsx\n│   └── PasswordStrength.tsx\n├── hooks/\n│   └── useAuth.ts\n├── services/\n│   └── authApi.ts\n└── types/\n    └── auth.ts",
        "codeLanguage": "tsx",
        "codeTitle": "Feature Folder Structure",
        "proTip": "នៅពេល feature មួយត្រូវលុបចោល អ្នកគ្រាន់តែលុប folder `features/feature-name` មួយប៉ុណ្ណោះ ដោយមិនបាច់ដើររក files រាយប៉ាយក្នុង folders ផ្សេងៗឡើយ។"
      },
      {
        "id": "m03-11",
        "number": "11",
        "title": "Container vs Presentational Components",
        "summary": "ការបំបែក data fetching និង business logic ចេញពី visual UI rendering ឱ្យដាច់ពីគ្នា។",
        "explanation": "Presentational components ផ្តោតតែទៅលើការបង្ហាញរូបរាង UI ប៉ុណ្ណោះ (ទទួល props និង render JSX)។ ចំណែកឯ Container components ផ្តោតលើដំណើរការការងារ (Fetching data ពី API, subscribing ទៅ store, និងដោះស្រាយ user mutations)។",
        "keyPoints": [
          "Presentational (Dumb / Pure UI): គ្មាន business state ងាយស្រួលសរសេរ test និង preview លើ Storybook។",
          "Container (Smart / Logic): ផ្ទុក hooks, API queries, និង mutation handlers រួចបញ្ជូន data ទៅ UI component។",
          "ជួយបង្កើន reusability ព្រោះថា UI ដដែលនេះអាចយកទៅប្រើប្រាស់ជាមួយ data source ផ្សេងគ្នាបាន។"
        ],
        "codeSnippet": "// Presentational Component (Dumb / Pure UI)\nexport function UserCardUI({ name, email, avatar }: UserProps) {\n  return (\n    <div className=\"flex items-center gap-3 p-3 bg-slate-900 rounded-lg\">\n      <img src={avatar} className=\"w-10 h-10 rounded-full\" alt={name} />\n      <div>\n        <p className=\"font-medium text-white\">{name}</p>\n        <p className=\"text-xs text-slate-400\">{email}</p>\n      </div>\n    </div>\n  );\n}\n\n// Container Component (Smart / Data Fetching)\nexport function UserCardContainer({ userId }: { userId: string }) {\n  const { data: user, isLoading } = useQuery(['user', userId], () => fetchUser(userId));\n  if (isLoading) return <Skeleton className=\"h-16 w-full\" />;\n  if (!user) return null;\n  return <UserCardUI name={user.name} email={user.email} avatar={user.avatar} />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Container vs Presentational Pattern",
        "proTip": "ការបំបែក Container និង Presentational ជួយឱ្យ UI designer ឬ frontend engineer អាចផ្តោតលើ styling ដោយមិនបារម្ភពីរឿង API integration។"
      },
      {
        "id": "m03-12",
        "number": "12",
        "title": "Component Best Practices",
        "summary": "គោលការណ៍ Single Responsibility, Component Purity និងការគ្រប់គ្រងចំនួន props ឱ្យមានអនាម័យ។",
        "explanation": "រក្សា components ឱ្យមានទំហំល្មម និងផ្តោតលើទំនួលខុសត្រូវតែមួយ (Single Responsibility Principle)។ ប្រសិនបើ component មួយទទួល props លើសពី ៧-៨ props អ្នកគួរពិចារណាប្រមូលផ្តុំ props ទាំងនោះជា object តែមួយ ឬបំបែកវាទៅជា compound components។",
        "keyPoints": [
          "រក្សា component ឱ្យមាន Purity៖ នៅពេលទទួលបាន props ដដែល ត្រូវតែ return JSX ដូចគ្នាជានិច្ច។",
          "ជៀសវាង side effects ក្នុងអំឡុងពេល rendering (ដូចជាការ mutate external variables) — ត្រូវធ្វើ side effects នៅក្នុង `useEffect` ឬ event handlers ប៉ុណ្ណោះ។",
          "កុំសរសេរ component តែមួយឱ្យទទួលបន្ទុកច្រើនពេក (Do one thing and do it well)។"
        ],
        "codeSnippet": "// Golden Rule of React: Purity during render\n// ❌ Impure: Mutating external variables during render\nlet renderCount = 0;\nfunction BadComponent() {\n  renderCount++; // Side effect!\n  return <div>Render {renderCount}</div>;\n}\n\n// ✅ Pure: Rendering has no observable external mutations\nfunction GoodComponent({ title }: { title: string }) {\n  return <h2 className=\"text-xl font-semibold\">{title}</h2>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Enforcing Component Purity",
        "proTip": "ចងចាំ Golden Rule របស់ React៖ Rendering phase ត្រូវតែ Pure ដោយគ្មានការកែប្រែ external variables ឬ trigger side effects ឡើយ។"
      }
    ]
  },
  {
    "id": "module-04",
    "number": "04",
    "title": "Props",
    "category": "Fundamentals",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពីការបញ្ជូន និងទទួល Props, Destructuring, Children Props, Default Values, One-way Data Flow និងភាពខុសគ្នារវាង Props vs State។",
    "iconName": "ArrowDownRight",
    "topics": [
      {
        "id": "m04-01",
        "number": "01",
        "title": "What are Props?",
        "summary": "ទិន្នន័យ (Arguments) បញ្ជូនទៅកាន់ React components ដើម្បីកំណត់ឥរិយាបថ និងការ render UI។",
        "explanation": "Props (មកពីពាក្យ properties) គឺជាយន្តការដែល parent components ប្រើដើម្បីបញ្ជូនទិន្នន័យ និង callback functions ចុះក្រោមទៅកាន់ child components។ Props មានលក្ខណៈ strictly read-only (immutable) មិនអាចកែប្រែដោយផ្ទាល់នៅខាងក្នុង child component បានឡើយ។",
        "keyPoints": [
          "Props ហូរតាមទិសដៅតែមួយ (Unidirectional) ពី parent ចុះទៅ child។",
          "Child components ដាច់ខាតមិនត្រូវកែប្រែ (mutate) តម្លៃ props របស់ខ្លួនឡើយ (Props are immutable)។",
          "TypeScript interfaces ជួយផ្តល់នូវ autocomplete និង type safety យ៉ាងច្បាស់លាស់សម្រាប់ props។"
        ],
        "codeSnippet": "interface AlertProps {\n  type: \"info\" | \"warning\" | \"error\";\n  message: string;\n}\n\nexport function Alert({ type, message }: AlertProps) {\n  const bg = type === \"error\" ? \"bg-rose-950/60 border-rose-800 text-rose-300\" \n           : type === \"warning\" ? \"bg-amber-950/60 border-amber-800 text-amber-300\"\n           : \"bg-blue-950/60 border-blue-800 text-blue-300\";\n\n  return <div className={`p-3 border rounded-lg ${bg}`}>{message}</div>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Basic Props with TypeScript",
        "proTip": "គិតពី props ដូចជា arguments នៃ function ធម្មតា៖ function ទទួល parameters មកគណនា តែមិនត្រូវទៅកែប្រែតម្លៃដើមនោះឡើយ។"
      },
      {
        "id": "m04-02",
        "number": "02",
        "title": "Passing Props",
        "summary": "ការបញ្ជូនតម្លៃផ្សេងៗទៅកាន់ components តាមរយៈ JSX attributes។",
        "explanation": "អ្នកអាចបញ្ជូន props ទៅកាន់ components ដូចគ្នានឹងការកំណត់ attributes ទៅឱ្យ HTML tags ដែរ៖ `<Header title=\"Dashboard\" count={42} isVisible />`។",
        "keyPoints": [
          "បញ្ជូន string literals ដោយប្រើប្រាស់ quotes ធម្មតា៖ `title=\"React\"`។",
          "បញ្ជូន numbers, booleans, objects, arrays និង functions ដោយប្រើរង្វង់ក្រចកទោល (curly braces)៖ `count={10}`, `isActive={true}`។",
          "ប្រសិនបើបញ្ជូន boolean prop ដោយមិនដាក់តម្លៃ (ឧ. `<Modal isOpen />`) នោះវាស្មើនឹង `isOpen={true}` ដោយស្វ័យប្រវត្តិ។"
        ],
        "codeSnippet": "<CourseCard \n  title=\"Advanced Next.js\"\n  moduleCount={27}\n  isPublished={true}\n  tags={[\"React\", \"Next.js\", \"Zustand\"]}\n  onEnroll={(id) => console.log(\"Enrolled in\", id)}\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Diverse Prop Types",
        "proTip": "ប្រើ shorthand `<Component isVisible />` ជំនួសឱ្យ `<Component isVisible={true} />` ដើម្បីឱ្យកូដកាន់តែខ្លីស្អាត។"
      },
      {
        "id": "m04-03",
        "number": "03",
        "title": "Receiving Props",
        "summary": "ការចាប់យក props object តាមរយៈ parameters នៃ component function។",
        "explanation": "Argument ទីមួយនៃ functional component គឺជា `props` object។ អ្នកអាចទាញយក properties តាមរយៈ `props.title` ឬប្រើបច្ចេកទេស destructuring ដោយផ្ទាល់នៅត្រង់ parameters។",
        "keyPoints": [
          "Props គឺជា JavaScript object ធម្មតាដែលផ្ទុករាល់ attributes ទាំងអស់ដែលបានបញ្ជូនមកពី parent។",
          "ត្រូវកំណត់ Type ឱ្យបានច្បាស់លាស់ជាមួយ TypeScript ដើម្បីជៀសវាងកំហុសពេល access properties ដែលគ្មាន។"
        ],
        "codeSnippet": "export function CourseHeader(props: { title: string; subtitle: string }) {\n  return (\n    <div>\n      <h1 className=\"text-3xl font-bold text-white\">{props.title}</h1>\n      <p className=\"text-slate-400\">{props.subtitle}</p>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Receiving the Props Object",
        "proTip": "ការប្រើ TypeScript សម្រាប់ typing props ជួយឱ្យ editor បង្ហាញ IntelliSense និងការពារបញ្ហា runtime errors បានយ៉ាងមានប្រសិទ្ធភាព។"
      },
      {
        "id": "m04-04",
        "number": "04",
        "title": "Props with Strings",
        "summary": "ការបញ្ជូន static strings ដោយផ្ទាល់ដោយប្រើប្រាស់ double quotes ធម្មតា។",
        "explanation": "String props អាចបញ្ជូនបានយ៉ាងងាយស្រួលដោយមិនចាំបាច់ប្រើ curly braces ឡើយ នៅពេលដែលវាជា static literal value៖ `<Button label=\"Save Changes\" />`។",
        "keyPoints": [
          "មិនចាំបាច់ប្រើ curly braces សម្រាប់ static string literals ឡើយ។",
          "ប្រើ curly braces លុះត្រាតែ string នោះជា JavaScript variable ឬ template literal expression៖ `title={userName}` ឬ `title={\\`Hello \\${name}\\`}`។"
        ],
        "codeSnippet": "<UserProfile \n  name=\"Alice Doe\" \n  role=\"Senior Frontend Architect\" \n  country=\"Cambodia\" \n/>",
        "codeLanguage": "tsx",
        "codeTitle": "String Literal Props",
        "proTip": "សរសេរ `label=\"Submit\"` ជាជាង `label={\"Submit\"}` ដើម្បីរក្សាកូដឱ្យខ្លី និងអានស្រួល។"
      },
      {
        "id": "m04-05",
        "number": "05",
        "title": "Props with Numbers",
        "summary": "ការបញ្ជូនតម្លៃជាលេខ (Numeric values) ដោយប្រើប្រាស់ curly brace expressions។",
        "explanation": "តម្លៃជាលេខ (Numbers) ត្រូវតែបញ្ជូននៅខាងក្នុង curly braces ជានិច្ច (ឧទាហរណ៍ `rating={4.9}`)។ ប្រសិនបើសរសេរក្នុង double quotes នោះ JSX នឹងចាត់ទុកវាជា string literal ទៅវិញ។",
        "keyPoints": [
          "`<Widget count=5 />` គឺជា invalid syntax ក្នុង JSX — ត្រូវសរសេរ `<Widget count={5} />`។",
          "ជួយការពារបញ្ហា type coercion ក្នុង JavaScript (ដូចជា `5 + \"5\" = \"55\"`)។"
        ],
        "codeSnippet": "<RatingBadge \n  score={4.85} \n  totalReviews={1240} \n  stars={5} \n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Numeric Props",
        "pitfall": "ការសរសេរ `<Widget count=\"5\" />` នឹងបញ្ជូនជា string \"5\" មិនមែនជាលេខ 5 ឡើយ ដែលអាចបណ្តាលឱ្យមានបញ្ហាពេលយកទៅបូកលេខ (ឧ. \"5\" + 1 = \"51\")!"
      },
      {
        "id": "m04-06",
        "number": "06",
        "title": "Props with Objects",
        "summary": "ការបញ្ជូន objects ស្មុគស្មាញ និងការកំណត់ nested configuration structures។",
        "explanation": "បញ្ជូន objects នៅខាងក្នុង curly braces៖ `user={{ name: 'Alice', age: 28 }}`។ សូមកត់សម្គាល់ការប្រើប្រាស់ double curly braces `{{ ... }}`។",
        "keyPoints": [
          "រង្វង់ក្រចកខាងក្រៅ `{}` បញ្ជាក់ថាជា JSX expression ចំណែកឯរង្វង់ក្រចកខាងក្នុង `{}` បញ្ជាក់ថាជា JavaScript object literal។",
          "អាចបញ្ជូនតាមរយៈ variable ផ្ទាល់ ឬសរសេរជា inline object។",
          "ជៀសវាងការបង្កើត inline objects ថ្មីរាល់ពេល render បើ component កូនត្រូវបាន memoize (អាចប៉ះពាល់ដល់ performance)។"
        ],
        "codeSnippet": "const currentUser = { id: \"u123\", name: \"Dara\", role: \"Instructor\" };\n\n// Pass variable or inline object:\n<AccountSettings \n  user={currentUser}\n  themeConfig={{ mode: \"dark\", accent: \"#3b82f6\" }}\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Object Props",
        "proTip": "បើ object មានទំហំធំ ឬប្រើប្រាស់ឡើងវិញច្រើនកន្លែង គួរប្រកាសជា variable នៅខាងក្រៅ ឬគ្រប់គ្រងដោយ state។"
      },
      {
        "id": "m04-07",
        "number": "07",
        "title": "Props with Arrays",
        "summary": "ការបញ្ជូនបញ្ជីទិន្នន័យ (Lists) ទៅកាន់ components សម្រាប់ធ្វើការ iterate/map។",
        "explanation": "បញ្ជូន arrays ទៅកាន់ components ដើម្បី render បញ្ជីទិន្នន័យ (Lists), navigations, menus ឬ tag clouds តាមរយៈ method `.map()`។",
        "keyPoints": [
          "បញ្ជូន arrays នៅខាងក្នុង curly braces៖ `items={['A', 'B', 'C']}` ឬ `users={userList}`។",
          "ពេលធ្វើការ loop/map array elements ក្នុង JSX ត្រូវផ្តល់ `key` prop ដ៏មានតម្លៃ unique ជានិច្ច។"
        ],
        "codeSnippet": "export function TagList({ tags }: { tags: string[] }) {\n  return (\n    <div className=\"flex flex-wrap gap-2\">\n      {tags.map((tag) => (\n        <span key={tag} className=\"px-2 py-1 bg-slate-800 text-xs rounded-md text-slate-300\">\n          #{tag}\n        </span>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Passing and Iterating Arrays",
        "proTip": "កំណត់ Type នៃ array ក្នុង TypeScript ឱ្យច្បាស់លាស់ ដូចជា `tags: string[]` ឬ `items: Product[]` ដើម្បីឱ្យ editor ជួយ auto-complete properties។"
      },
      {
        "id": "m04-08",
        "number": "08",
        "title": "Props with Functions",
        "summary": "ការបញ្ជូន callback functions ដើម្បីឆ្លើយតបទៅនឹង user events និង actions។",
        "explanation": "ការបញ្ជូន functions ចុះក្រោមជា props អនុញ្ញាតឱ្យ child components អាចប្រាប់ដំណឹង (notify) ទៅកាន់ parent component វិញបាន នៅពេលដែលមាន event កើតឡើង (ដូចជាពេលចុច button ឬវាយបញ្ចូលអក្សរក្នុង input)។",
        "keyPoints": [
          "ដើរតួជាយន្តការទំនាក់ទំនងពី Child ទៅ Parent (Child-to-parent communication)។",
          "បញ្ជូន function reference (កុំ invoke function ដោយប្រើ `()` ក្នុងពេល render ឱ្យសោះ)។",
          "ដាក់ឈ្មោះ function props ដោយប្រើបុព្វបទ `on` (ដូចជា `onDelete`, `onSelect`, `onSubmit`)។"
        ],
        "codeSnippet": "export function DeleteButton({ onDelete }: { onDelete: (id: string) => void }) {\n  return (\n    <button \n      onClick={() => onDelete(\"item-42\")}\n      className=\"px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-sm\"\n    >\n      Delete Record\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Callback Function Props",
        "proTip": "ប្រើ convention ដាក់ឈ្មោះ `onEvent` សម្រាប់ prop (ឧ. `onDelete`) និង `handleEvent` សម្រាប់ handler function នៅក្នុង parent (ឧ. `handleDelete`)។"
      },
      {
        "id": "m04-09",
        "number": "09",
        "title": "Destructuring Props",
        "summary": "បច្ចេកទេសទាញយក props យ៉ាងខ្លីស្អាតនៅត្រង់ function signature។",
        "explanation": "ការធ្វើ Destructuring props ជួយឱ្យកូដខ្លី ស្អាត មិនបាច់សរសេរពាក្យ `props.` ដដែលៗ និងបង្ហាញយ៉ាងច្បាស់នូវរាល់ properties ណាខ្លះដែល component កំពុងប្រើប្រាស់។",
        "keyPoints": [
          "ធ្វើ Destructure ដោយផ្ទាល់នៅត្រង់ parameters នៃ function៖ `({ label, value, trend }: MetricProps)`។",
          "អាចកំណត់ default fallback values ឬ rename properties បានយ៉ាងងាយស្រួល។",
          "អាចប្រើ Rest parameter `...rest` ដើម្បីចាប់យក props ដែលនៅសល់ទាំងអស់។"
        ],
        "codeSnippet": "export function MetricCard({ \n  label, \n  value, \n  trend = \"up\" \n}: { \n  label: string; \n  value: number | string; \n  trend?: \"up\" | \"down\" \n}) {\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl\">\n      <p className=\"text-sm text-slate-400\">{label}</p>\n      <div className=\"flex items-baseline gap-2 mt-1\">\n        <span className=\"text-2xl font-bold text-white\">{value}</span>\n        <span className={trend === \"up\" ? \"text-emerald-400 text-xs\" : \"text-rose-400 text-xs\"}>\n          {trend === \"up\" ? \"▲ +12%\" : \"▼ -4%\"}\n        </span>\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Destructuring in Function Signature",
        "proTip": "ការ destructure ជួយឱ្យ developer ផ្សេងទៀតអាចមើលដឹងភ្លាមៗថា component នេះត្រូវការព័ត៌មានអ្វីខ្លះ ដោយគ្រាន់តែក្រឡេកមើល function signature។"
      },
      {
        "id": "m04-10",
        "number": "10",
        "title": "Default Props",
        "summary": "ការកំណត់ fallback values សម្រាប់ optional props ដោយប្រើ ES6 default parameters។",
        "explanation": "ក្នុង modern React សូមប្រើប្រាស់ JavaScript ES6 default parameter values ដោយផ្ទាល់នៅត្រង់ destructured props signature ជំនួសឱ្យការប្រើ static property `defaultProps` ដែលហួសសម័យ (deprecated/legacy)។",
        "keyPoints": [
          "ES6 defaults ដំណើរការយ៉ាងរលូនជាមួយ TypeScript optional properties (`prop?: string`)។",
          "Fallback value នឹងត្រូវយកមកប្រើ លុះត្រាតែ prop នោះមានតម្លៃ `undefined`។",
          "កាត់បន្ថយ runtime bugs នៅពេលដែល parent មិនបានបញ្ជូន prop ណាមួយមក។"
        ],
        "codeSnippet": "interface ButtonProps {\n  label: string;\n  variant?: \"primary\" | \"secondary\";\n  size?: \"sm\" | \"md\" | \"lg\";\n}\n\n// Fallbacks assigned in destructuring:\nexport function Button({ \n  label, \n  variant = \"primary\", \n  size = \"md\" \n}: ButtonProps) {\n  return <button className={`btn-${variant} btn-${size}`}>{label}</button>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "ES6 Default Props Pattern",
        "proTip": "កុំប្រើ `Component.defaultProps` ទៀតឡើយនៅក្នុង modern React ព្រោះវាត្រូវបាន deprecate ក្នុង React 19 ហើយត្រូវជំនួសដោយ ES6 default values ទាំងស្រុង។"
      },
      {
        "id": "m04-11",
        "number": "11",
        "title": "Children Props",
        "summary": "ការផ្គុំ component tags ព័ទ្ធជុំវិញ nested JSX elements ដោយប្រើប្រាស់ `children` prop។",
        "explanation": "Prop ពិសេសឈ្មោះថា `children` តំណាងឱ្យរាល់ content ទាំងឡាយណាដែលត្រូវបានដាក់នៅចន្លោះ opening tag និង closing tag នៃ component មួយ ដូចជា៖ `<Card><h2>Title</h2><p>Body</p></Card>`។",
        "keyPoints": [
          "កំណត់ Type ដោយប្រើ `React.ReactNode` នៅក្នុង TypeScript។",
          "ជាគ្រឹះស្នូលសម្រាប់បង្កើត Wrapper components, Layouts, Cards, Modals និង Context Providers។",
          "អនុញ្ញាតឱ្យ component អាចទទួលអ្វីក៏បាន ចាប់ពី text ធម្មតា រហូតដល់ JSX elements ស្មុគស្មាញ។"
        ],
        "codeSnippet": "interface CardProps {\n  title: string;\n  children: React.ReactNode;\n}\n\nexport function Card({ title, children }: CardProps) {\n  return (\n    <div className=\"bg-slate-900 border border-slate-800 rounded-xl p-5\">\n      <h3 className=\"text-lg font-semibold text-white mb-3\">{title}</h3>\n      <div className=\"text-slate-300\">{children}</div>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Children Prop Composition",
        "proTip": "ប្រើ `children` prop នៅពេលអ្នកចង់បង្កើត generic wrapper container ដែលមិនចាំបាច់ដឹងមុនថាតើ content ខាងក្នុងជារូបអ្វីនោះទេ។"
      },
      {
        "id": "m04-12",
        "number": "12",
        "title": "Props vs State",
        "summary": "ការប្រៀបធៀបទិន្នន័យខាងក្រៅដែលមិនអាចកែប្រែបាន (Props) និងទិន្នន័យខាងក្នុងដែលមានប្រតិកម្មរហ័ស (State)។",
        "explanation": "Props ត្រូវបានបញ្ជូនមកពី parent (ប្រៀបដូចជា function parameters) ហើយមិនអាចកែប្រែដោយ child បានឡើយ។ រីឯ State គឺជាទិន្នន័យខាងក្នុងដែលគ្រប់គ្រងដោយ component ផ្ទាល់ (ប្រៀបដូចជា local variables) តាមរយៈ hook `useState`។",
        "keyPoints": [
          "Props: គ្រប់គ្រងដោយ parent, child គ្រាន់តែអាន (Read-only/Immutable)។",
          "State: គ្រប់គ្រងដោយ component ផ្ទាល់, កែប្រែតាមរយៈ setter functions (`setCount`)។",
          "ទាំង Props និង State នៅពេលមានការផ្លាស់ប្តូរ សុទ្ធតែធ្វើឱ្យ component ធ្វើការ re-render ដើម្បី update UI ដូចគ្នា។"
        ],
        "codeSnippet": "/*\n| លក្ខណៈពិសេស       | Props                          | State                         |\n|-------------------|--------------------------------|-------------------------------|\n| ប្រភពដើម          | បញ្ជូនមកពី parent              | កំណត់នៅខាងក្នុង component     |\n| ការកែប្រែតម្លៃ     | Read-only (មិនអាចកែបាន)        | កែប្រែតាមរយៈ setState function|\n| ភាពជាម្ចាស់ (Owner)| Parent ជាអ្នកគ្រប់គ្រងតម្លៃ      | Component ផ្ទាល់ជាម្ចាស់តម្លៃ   |\n| គោលបំណង          | Configuration & callbacks      | Interactivity & dynamic data  |\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Props vs State Comparison Matrix",
        "proTip": "បើទិន្នន័យត្រូវចែករំលែក ឬគ្រប់គ្រងដោយ parent ចូរប្រើ Props។ បើទិន្នន័យផ្លាស់ប្តូរតាមរយៈ user interaction ផ្ទៃក្នុង component នោះ ចូរប្រើ State។"
      },
      {
        "id": "m04-13",
        "number": "13",
        "title": "One-way Data Flow",
        "summary": "លំហូរទិន្នន័យតែមួយទិស (Unidirectional) ការពារបញ្ហា circular dependency bugs ក្នុងកម្មវិធី។",
        "explanation": "នៅក្នុង React ទិន្នន័យតែងតែហូរចុះក្រោម (Strictly Downwards) តាមរយៈ props ជានិច្ច។ ប្រសិនបើ child component ត្រូវការកែប្រែទិន្នន័យ វានឹងហៅ callback function ដែល parent បានបញ្ជូនមក ដើម្បីស្នើសុំឱ្យ parent ធ្វើបច្ចុប្បន្នភាព state របស់ខ្លួន ហើយទិន្នន័យថ្មីនោះនឹងហូរចុះក្រោមមកវិញ។",
        "keyPoints": [
          "ធ្វើឱ្យការផ្លាស់ប្តូរ state មានភាពច្បាស់លាស់ និងងាយស្រួលតាមដាន (traceable) តាមរយៈ React DevTools។",
          "ការពារបញ្ហា synchronization conflicts និង circular dependencies ដែលតែងកើតឡើងលើ two-way data-binding frameworks។",
          "Single Source of Truth៖ ទិន្នន័យនីមួយៗគួរតែមានកន្លែងគ្រប់គ្រងពិតប្រាកដតែមួយគត់ក្នុង component tree។"
        ],
        "codeSnippet": "// Parent maintains single source of truth\nexport function CounterApp() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"space-y-4\">\n      {/* Data flows down as props */}\n      <CountDisplay value={count} />\n      {/* Callback flows down to trigger state change */}\n      <CountControls onIncrement={() => setCount(c => c + 1)} onReset={() => setCount(0)} />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Unidirectional Data Flow Example",
        "proTip": "យន្តការ 'Data down, actions up' គឺជាបេះដូងនៃ React Architecture ដែលធានាថាកម្មវិធីរបស់អ្នកមានស្ថិរភាព និងងាយស្រួល scale។"
      }
    ]
  },
  {
    "id": "module-05",
    "number": "05",
    "title": "Rendering Data",
    "category": "Core Concepts",
    "summary": "Iterating arrays with map(), key prop rules, conditional rendering, loading skeletons, and error UI states.",
    "iconName": "ListTree",
    "topics": [
      {
        "id": "m05-01",
        "number": "01",
        "title": "Rendering Arrays",
        "summary": "Displaying collections of primitives or objects on screen.",
        "explanation": "React allows rendering arrays of elements directly. When an array of JSX elements is passed, React iterates and mounts each element in sequence.",
        "keyPoints": [
          "Arrays are rendered in order.",
          "Each top-level element in the array requires a unique `key` prop."
        ],
        "codeSnippet": "export function NumberList() {\n  const numbers = [10, 20, 30, 40, 50];\n  return (\n    <ul className=\"flex gap-2\">\n      {numbers.map((n) => (\n        <li key={n} className=\"px-3 py-1 bg-slate-800 rounded text-blue-400 font-mono\">\n          {n}\n        </li>\n      ))}\n    </ul>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Rendering Simple Arrays"
      },
      {
        "id": "m05-02",
        "number": "02",
        "title": "map() in React",
        "summary": "The standard declarative array transformation method for JSX.",
        "explanation": "JavaScript's `.map()` method transforms an array of data into an array of JSX elements. Because `.map()` returns a new array, it embeds cleanly into JSX curly braces.",
        "keyPoints": [
          "Use `.map()` rather than `forEach` because `.map()` returns a transformed array.",
          "Keep mapping functions pure and concise."
        ],
        "codeSnippet": "interface Student {\n  id: string;\n  name: string;\n  score: number;\n}\n\nexport function Leaderboard({ students }: { students: Student[] }) {\n  return (\n    <div className=\"divide-y divide-slate-800\">\n      {students.map((student, index) => (\n        <div key={student.id} className=\"flex justify-between py-2 text-sm\">\n          <span className=\"text-slate-300\">#{index + 1} {student.name}</span>\n          <span className=\"font-bold text-emerald-400\">{student.score} pts</span>\n        </div>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Mapping Objects to JSX Elements"
      },
      {
        "id": "m05-03",
        "number": "03",
        "title": "Rendering Objects",
        "summary": "Accessing and formatting object properties inside templates.",
        "explanation": "You cannot render a raw JavaScript object directly inside JSX (`<div>{user}</div>` throws an error). You must render individual primitive properties (`user.name`) or serialize with `JSON.stringify`.",
        "keyPoints": [
          "Objects are not valid React children.",
          "Render specific properties or map over `Object.entries(obj)`."
        ],
        "codeSnippet": "// ❌ Error: Objects are not valid as a React child:\n// return <div>{user}</div>;\n\n// ✅ Correct:\nexport function UserProfile({ user }: { user: { name: string; email: string } }) {\n  return (\n    <div>\n      <h4 className=\"font-semibold text-white\">{user.name}</h4>\n      <p className=\"text-xs text-slate-400\">{user.email}</p>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Rendering Object Properties Correctly"
      },
      {
        "id": "m05-04",
        "number": "04",
        "title": "Rendering Lists",
        "summary": "Building scalable dynamic lists and cards from data feeds.",
        "explanation": "Combining `.map()` with reusable card components enables dynamic rendering of products, blog posts, or comments.",
        "keyPoints": [
          "Extract list items into dedicated subcomponents for clarity and memoization."
        ],
        "codeSnippet": "export function ModuleGrid({ modules }: { modules: ModuleItem[] }) {\n  return (\n    <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n      {modules.map((mod) => (\n        <ModuleCard key={mod.id} module={mod} />\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Rendering List of Grid Cards"
      },
      {
        "id": "m05-05",
        "number": "05",
        "title": "Keys",
        "summary": "Why React requires keys and how reconciliation uses them.",
        "explanation": "Keys give elements a stable identity across renders. When array items change order, get added, or are deleted, React compares keys to determine which DOM nodes to reuse or recreate without re-rendering the entire list.",
        "keyPoints": [
          "Keys must be unique among siblings.",
          "Never use `Math.random()` as a key; it destroys DOM nodes on every render.",
          "Avoid array index as key when list order can change."
        ],
        "codeSnippet": "// ✅ Use stable IDs from your database/backend\n{todos.map(todo => (\n  <TodoItem key={todo.id} todo={todo} />\n))}\n\n// ⚠️ Array index is acceptable ONLY if list is strictly static:\n{['Home', 'About', 'Contact'].map((item, idx) => (\n  <span key={idx}>{item}</span>\n))}",
        "codeLanguage": "tsx",
        "codeTitle": "Correct Key Usage in React",
        "pitfall": "Using array index as key when deleting or sorting items causes state from one input item to persist in a different item after re-ordering!"
      },
      {
        "id": "m05-06",
        "number": "06",
        "title": "Dynamic Components",
        "summary": "Selecting components at runtime using lookup dictionaries.",
        "explanation": "Map string identifiers or status keys to specific component constructors dynamically.",
        "keyPoints": [
          "Store components in a dictionary object and index with dynamic key."
        ],
        "codeSnippet": "import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';\n\nconst iconMap = {\n  success: CheckCircle,\n  warning: AlertTriangle,\n  error: XCircle,\n  info: Info,\n};\n\nexport function DynamicStatusIcon({ type }: { type: 'success' | 'warning' | 'error' | 'info' }) {\n  const IconComponent = iconMap[type];\n  return <IconComponent className=\"w-5 h-5\" />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Dynamic Component Lookup Map"
      },
      {
        "id": "m05-07",
        "number": "07",
        "title": "Conditional Rendering",
        "summary": "Strategies for rendering different UI based on state flags.",
        "explanation": "Choose between early return, ternary operators, or switch statements depending on whether the UI is mutually exclusive or inline.",
        "keyPoints": [
          "Early return for page-level state guards (unauthenticated, loading, error).",
          "Ternary for inline component switches."
        ],
        "codeSnippet": "export function AccountStatus({ status }: { status: 'loading' | 'verified' | 'unverified' }) {\n  if (status === 'loading') {\n    return <p className=\"text-slate-500\">Checking status...</p>;\n  }\n\n  return (\n    <div>\n      {status === 'verified' ? (\n        <span className=\"text-emerald-400\">Account Active ✓</span>\n      ) : (\n        <span className=\"text-amber-400\">Please verify your email address</span>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Conditional Rendering Pattern"
      },
      {
        "id": "m05-08",
        "number": "08",
        "title": "Ternary Rendering",
        "summary": "Compact inline if/else expression.",
        "explanation": "The ternary operator `condition ? <A /> : <B />` is ideal for toggling between two mutually exclusive UI elements inside JSX markup.",
        "keyPoints": [
          "Great for binary switches: Dark/Light theme, Active/Inactive tab."
        ],
        "codeSnippet": "<button className={isActive ? \"bg-blue-600 text-white\" : \"bg-slate-800 text-slate-400\"}>\n  {isActive ? \"Currently Selected\" : \"Select Option\"}\n</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Inline Ternary Operator"
      },
      {
        "id": "m05-09",
        "number": "09",
        "title": "Logical AND Rendering",
        "summary": "Rendering an element only when a condition is truthy.",
        "explanation": "Using `condition && <Element />` renders `<Element />` if `condition` is truthy, and ignores it if `false` or `null`.",
        "keyPoints": [
          "Always ensure the left operand is a strict boolean: `Boolean(val)` or `val > 0`."
        ],
        "codeSnippet": "export function NotificationBanner({ hasDiscount, discountCode }: BannerProps) {\n  return (\n    <div>\n      {hasDiscount && (\n        <div className=\"bg-emerald-950/80 border border-emerald-800 p-2 text-emerald-300 text-xs rounded\">\n          Use code <strong>{discountCode}</strong> for 20% off!\n        </div>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Logical AND Guard"
      },
      {
        "id": "m05-10",
        "number": "10",
        "title": "Empty States",
        "summary": "Designing engaging fallbacks when arrays or datasets are empty.",
        "explanation": "Always provide clear guidance when search queries yield zero results or task lists have no items.",
        "keyPoints": [
          "Include an icon, explanatory heading, and call to action (e.g. 'Create your first item')."
        ],
        "codeSnippet": "export function EmptyState({ onAction }: { onAction: () => void }) {\n  return (\n    <div className=\"text-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-2xl\">\n      <Inbox className=\"w-12 h-12 text-slate-600 mx-auto mb-3\" />\n      <h3 className=\"text-lg font-medium text-white\">No tasks created yet</h3>\n      <p className=\"text-sm text-slate-400 max-w-sm mx-auto mt-1 mb-4\">\n        Get started by creating your first task using the input above.\n      </p>\n      <button onClick={onAction} className=\"px-4 py-2 bg-blue-600 text-white rounded-lg text-sm\">\n        Add New Task\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Engaging Empty State Component"
      },
      {
        "id": "m05-11",
        "number": "11",
        "title": "Loading UI",
        "summary": "Skeleton loaders vs spinners for modern UX perceived performance.",
        "explanation": "Skeletons prevent content layout shifts (CLS) by mirroring the exact shape of incoming data before it finishes loading.",
        "keyPoints": [
          "Use Tailwind's `animate-pulse` utility for skeleton placeholders."
        ],
        "codeSnippet": "export function CardSkeleton() {\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl animate-pulse space-y-3\">\n      <div className=\"h-5 bg-slate-800 rounded w-2/3\" />\n      <div className=\"h-4 bg-slate-800/60 rounded w-full\" />\n      <div className=\"h-4 bg-slate-800/60 rounded w-4/5\" />\n      <div className=\"h-8 bg-slate-800 rounded w-24 mt-4\" />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Tailwind Skeleton Loader"
      },
      {
        "id": "m05-12",
        "number": "12",
        "title": "Error UI",
        "summary": "Displaying informative error recovery states.",
        "explanation": "When network requests fail, show actionable error messages with retry buttons.",
        "keyPoints": [
          "Include error message and retry callback."
        ],
        "codeSnippet": "export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {\n  return (\n    <div className=\"p-4 bg-rose-950/40 border border-rose-800/60 rounded-xl text-center\">\n      <p className=\"text-rose-300 font-medium\">{message}</p>\n      <button \n        onClick={onRetry}\n        className=\"mt-3 px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white rounded text-xs font-semibold\"\n      >\n        Retry Request\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Error Recovery Component"
      }
    ]
  },
  {
    "id": "module-06",
    "number": "06",
    "title": "Events",
    "category": "Core Concepts",
    "summary": "React synthetic events, onClick, onChange, onSubmit, event propagation, preventDefault, and event handling patterns.",
    "iconName": "Zap",
    "topics": [
      {
        "id": "m06-01",
        "number": "01",
        "title": "React Events",
        "summary": "Cross-browser SyntheticEvent wrapper system.",
        "explanation": "React wraps native browser events in a cross-browser `SyntheticEvent` instance that ensures identical event behavior across Safari, Chrome, Firefox, and Edge.",
        "keyPoints": [
          "Synthetic events match W3C standards.",
          "Named in camelCase: `onClick`, `onChange`, `onKeyDown`."
        ],
        "codeSnippet": "export function EventLogger() {\n  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n    console.log(\"Event Type:\", e.type);\n    console.log(\"Coordinates:\", e.clientX, e.clientY);\n  };\n\n  return <button onClick={handleClick}>Log Event</button>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "React SyntheticEvent Handling"
      },
      {
        "id": "m06-02",
        "number": "02",
        "title": "Event Handlers",
        "summary": "Passing handler function references vs invoking functions.",
        "explanation": "You must pass the function reference (`onClick={handleClick}`), NOT invoke it (`onClick={handleClick()}`). Invoking it runs the function during render!",
        "keyPoints": [
          "Pass function reference: `onClick={handleClick}`.",
          "Pass inline arrow function if parameters are needed: `onClick={() => handleDelete(id)}`."
        ],
        "codeSnippet": "// ❌ Wrong: handleClick runs immediately on render!\n// <button onClick={handleClick()}>Click</button>\n\n// ✅ Correct: Function reference passed\n<button onClick={handleClick}>Click</button>\n\n// ✅ Correct: Arrow function wrapper for arguments\n<button onClick={() => handleDelete(item.id)}>Delete</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Function Reference vs Invocation"
      },
      {
        "id": "m06-03",
        "number": "03",
        "title": "onClick",
        "summary": "Handling click interactions on buttons, links, and cards.",
        "explanation": "The most common event handler in web applications, triggered when an element is pressed or activated via keyboard Enter.",
        "keyPoints": [
          "Works with mouse, touchscreen, and keyboard accessibility."
        ],
        "codeSnippet": "<button \n  onClick={(e) => {\n    e.stopPropagation();\n    console.log(\"Clicked!\");\n  }}\n  className=\"px-4 py-2 bg-blue-600 rounded-lg text-white\"\n>\n  Click Me\n</button>",
        "codeLanguage": "tsx",
        "codeTitle": "onClick Handler"
      },
      {
        "id": "m06-04",
        "number": "04",
        "title": "onChange",
        "summary": "Tracking input, textarea, and select changes in real time.",
        "explanation": "Unlike vanilla JS where `change` only fires when an input loses focus, React's `onChange` fires on every single keystroke, making controlled components trivial.",
        "keyPoints": [
          "Access input value via `e.target.value`."
        ],
        "codeSnippet": "export function SearchInput({ value, onChange }: SearchInputProps) {\n  return (\n    <input \n      type=\"text\" \n      value={value} \n      onChange={(e) => onChange(e.target.value)}\n      placeholder=\"Filter topics...\"\n      className=\"w-full bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-white\"\n    />\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "onChange Event Handler"
      },
      {
        "id": "m06-05",
        "number": "05",
        "title": "onSubmit",
        "summary": "Handling form submissions and preventing full-page reloads.",
        "explanation": "Form submissions naturally trigger a browser page refresh. Use `e.preventDefault()` inside `onSubmit` to retain SPA state and handle submission via JavaScript.",
        "keyPoints": [
          "Always invoke `e.preventDefault()`.",
          "Attach `onSubmit` to `<form>` rather than `onClick` to submit button to allow Enter key submissions."
        ],
        "codeSnippet": "export function LoginForm() {\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    console.log(\"Form submitted safely without page reload!\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"space-y-3\">\n      <input type=\"email\" placeholder=\"Email\" required />\n      <button type=\"submit\" className=\"bg-blue-600 px-4 py-2 rounded text-white\">Log In</button>\n    </form>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "onSubmit Form Handler"
      },
      {
        "id": "m06-06",
        "number": "06",
        "title": "onMouseEnter & onMouseLeave",
        "summary": "Hover states and tooltips.",
        "explanation": "Used to build interactive tooltips, preview cards, and custom cursor animations.",
        "keyPoints": [
          "React's mouseEnter does not bubble, mimicking standard CSS hover."
        ],
        "codeSnippet": "export function HoverPreview() {\n  const [isHovered, setIsHovered] = useState(false);\n\n  return (\n    <div \n      onMouseEnter={() => setIsHovered(true)}\n      onMouseLeave={() => setIsHovered(false)}\n      className=\"p-4 border rounded-lg transition-colors bg-slate-900 hover:border-blue-500\"\n    >\n      Hover over me!\n      {isHovered && <p className=\"text-xs text-blue-400 mt-1\">✨ Tooltip content visible</p>}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Hover Handlers"
      },
      {
        "id": "m06-07",
        "number": "07",
        "title": "Passing Event Functions",
        "summary": "Passing custom event triggers through props.",
        "explanation": "Prefix custom event props with `on` (e.g., `onSelectTopic`, `onDelete`) and implementation handlers with `handle` (`handleSelectTopic`).",
        "keyPoints": [
          "Naming convention: `onEvent` for props, `handleEvent` for functions."
        ],
        "codeSnippet": "interface TopicItemProps {\n  topic: TopicItem;\n  onSelectTopic: (topic: TopicItem) => void;\n}\n\nexport function TopicCard({ topic, onSelectTopic }: TopicItemProps) {\n  return (\n    <div onClick={() => onSelectTopic(topic)} className=\"cursor-pointer\">\n      <h4>{topic.title}</h4>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Event Callbacks"
      },
      {
        "id": "m06-08",
        "number": "08",
        "title": "Event Parameters",
        "summary": "Supplying additional data along with synthetic events.",
        "explanation": "Use inline arrow functions to pass record IDs, indices, or custom payloads into event handlers.",
        "keyPoints": [
          "Signature: `(e) => handleAction(id, e)`."
        ],
        "codeSnippet": "<button onClick={(e) => handleArchive(item.id, e)}>\n  Archive Item\n</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Passing Custom Parameters"
      },
      {
        "id": "m06-09",
        "number": "09",
        "title": "Preventing Default Behavior",
        "summary": "Using e.preventDefault() on forms, links, and keyboard events.",
        "explanation": "Prevents the default browser action (e.g. following links, submitting forms, scrolling on arrow keys).",
        "keyPoints": [
          "In React, returning `false` does not work; you must call `e.preventDefault()`."
        ],
        "codeSnippet": "const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {\n  e.preventDefault();\n  router.push('/custom-destination');\n};",
        "codeLanguage": "tsx",
        "codeTitle": "e.preventDefault() Usage"
      },
      {
        "id": "m06-10",
        "number": "10",
        "title": "Event Propagation",
        "summary": "Event bubbling and e.stopPropagation().",
        "explanation": "Events bubble up the React tree. Calling `e.stopPropagation()` prevents parent handlers from triggering when clicking nested child controls.",
        "keyPoints": [
          "Crucial when a card has an `onClick` but also contains a nested 'Delete' or 'Favorite' button."
        ],
        "codeSnippet": "export function CardWithAction() {\n  return (\n    <div onClick={() => console.log(\"Card opened\")} className=\"p-4 border rounded\">\n      <h3>Card Title</h3>\n      <button \n        onClick={(e) => {\n          e.stopPropagation(); // Prevents card opening!\n          console.log(\"Deleted\");\n        }}\n        className=\"text-rose-500\"\n      >\n        Delete\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "e.stopPropagation() in Nested Elements"
      },
      {
        "id": "m06-11",
        "number": "11",
        "title": "Keyboard Events",
        "summary": "Handling onKeyDown, Escape modal closing, and Cmd+K shortcuts.",
        "explanation": "Detecting keys like `Enter`, `Escape`, or `MetaKey` to build accessible keyboard navigation and modal dismissals.",
        "keyPoints": [
          "Use `e.key === 'Escape'` or `(e.metaKey || e.ctrlKey) && e.key === 'k'`."
        ],
        "codeSnippet": "useEffect(() => {\n  const handleKeyDown = (e: KeyboardEvent) => {\n    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {\n      e.preventDefault();\n      setIsSearchOpen(prev => !prev);\n    }\n  };\n  window.addEventListener('keydown', handleKeyDown);\n  return () => window.removeEventListener('keydown', handleKeyDown);\n}, []);",
        "codeLanguage": "tsx",
        "codeTitle": "Global Keyboard Shortcut Listener"
      },
      {
        "id": "m06-12",
        "number": "12",
        "title": "Event Handling Best Practices",
        "summary": "Debouncing rapid clicks, avoiding inline allocations when unnecessary.",
        "explanation": "Keep handlers clean, extract complex business logic into custom hooks, and debounce high-frequency events like search input or window resize.",
        "keyPoints": [
          "Avoid side-effects inside JSX; keep handlers focused."
        ],
        "codeSnippet": "// Clean extracted handler pattern\nexport function RegistrationForm() {\n  const [email, setEmail] = useState('');\n  const [isSubmitting, setIsSubmitting] = useState(false);\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    if (isSubmitting) return; // Prevent double submit\n    setIsSubmitting(true);\n    try {\n      await registerUser(email);\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n\n  return <form onSubmit={handleSubmit}>...</form>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Best Practice Event Handler"
      }
    ]
  },
  {
    "id": "module-07",
    "number": "07",
    "title": "State",
    "category": "Core Concepts",
    "summary": "useState, state vs props, re-rendering triggers, updating objects and arrays immutably, and derived state.",
    "iconName": "Sliders",
    "topics": [
      {
        "id": "m07-01",
        "number": "01",
        "title": "What is State?",
        "summary": "Component memory that triggers UI re-renders upon mutation.",
        "explanation": "State is data that changes over time in response to user actions or network responses. When state changes, React schedules a re-render of the component and updates the DOM.",
        "keyPoints": [
          "State is private to the component instance.",
          "State persists across re-renders.",
          "Updating state triggers reconciliation."
        ],
        "codeSnippet": "import { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)} className=\"px-4 py-2 bg-blue-600 text-white rounded\">\n      Count: {count}\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Basic State Declaration",
        "interactiveDemoKey": "StateDemo"
      },
      {
        "id": "m07-02",
        "number": "02",
        "title": "State vs Props",
        "summary": "Internal mutable component data vs external immutable inputs.",
        "explanation": "Props configure a component from the outside; State stores interactive changes on the inside.",
        "keyPoints": [
          "Props are passed down; State is managed internally."
        ],
        "codeSnippet": "// Props: Read-only input from parent\nfunction Display({ message }: { message: string }) {\n  return <h1>{message}</h1>;\n}\n\n// State: Internal interactive value\nfunction Editor() {\n  const [text, setText] = useState(\"Hello\");\n  return <Display message={text} />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "State vs Props in Action"
      },
      {
        "id": "m07-03",
        "number": "03",
        "title": "useState",
        "summary": "Declaring state variables and updater functions.",
        "explanation": "The `useState` hook returns a tuple containing the current state value and an updater function: `const [state, setState] = useState(initialValue)`.",
        "keyPoints": [
          "Always call hooks at the top level of your component.",
          "Never call hooks inside loops, conditions, or nested functions."
        ],
        "codeSnippet": "const [isOpen, setIsOpen] = useState(false);\nconst [user, setUser] = useState<User | null>(null);\nconst [tags, setTags] = useState<string[]>([]);",
        "codeLanguage": "tsx",
        "codeTitle": "useState TypeScript Declarations"
      },
      {
        "id": "m07-04",
        "number": "04",
        "title": "Updating State",
        "summary": "Direct replacement vs functional updater pattern.",
        "explanation": "When new state depends on previous state, always pass an updater function: `setCount(prev => prev + 1)`. This prevents stale closure bugs during batched updates.",
        "keyPoints": [
          "Functional update: `setCount(prev => prev + 1)`.",
          "Guarantees reading the most recent state value in asynchronous callbacks."
        ],
        "codeSnippet": "// ⚠️ Problem with direct state:\n// setCount(count + 1);\n// setCount(count + 1); // count is still stale; only increments by 1!\n\n// ✅ Solution: Functional updates\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // Increments by 2 safely!",
        "codeLanguage": "tsx",
        "codeTitle": "Functional State Updates"
      },
      {
        "id": "m07-05",
        "number": "05",
        "title": "State and Re-rendering",
        "summary": "How React triggers reconciliation when Object.is() returns false.",
        "explanation": "React compares old state with new state using `Object.is()`. If the reference is unchanged, React skips re-rendering. This is why mutating objects in place fails to trigger updates!",
        "keyPoints": [
          "Mutating an object/array in-place keeps identical memory reference -> no re-render!",
          "Always return a new object or array copy via spread operator."
        ],
        "codeSnippet": "// ❌ Bug: Mutating array in place fails to re-render\n/*\nitems.push(newItem);\nsetItems(items); // Identical reference! React does nothing.\n*/\n\n// ✅ Fix: Create new array reference via spread\nsetItems(prev => [...prev, newItem]);",
        "codeLanguage": "tsx",
        "codeTitle": "Immutability & Object.is() Comparison",
        "pitfall": "Directly mutating an array with `.push()` or `.splice()` will NOT trigger a re-render. Always use `[...prev, newItem]`."
      },
      {
        "id": "m07-06",
        "number": "06",
        "title": "Updating Objects",
        "summary": "Copying object properties with spread syntax.",
        "explanation": "Use the object spread operator `...` to copy existing properties and overwrite the changed fields.",
        "keyPoints": [
          "Pattern: `setUser(prev => ({ ...prev, name: 'New Name' }))`."
        ],
        "codeSnippet": "interface Profile {\n  name: string;\n  theme: 'light' | 'dark';\n  notifications: boolean;\n}\n\nconst [profile, setProfile] = useState<Profile>({\n  name: 'Alex',\n  theme: 'dark',\n  notifications: true,\n});\n\n// Update single field safely:\nconst toggleTheme = () => {\n  setProfile(prev => ({\n    ...prev,\n    theme: prev.theme === 'dark' ? 'light' : 'dark',\n  }));\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Updating Object State Immutably"
      },
      {
        "id": "m07-07",
        "number": "07",
        "title": "Updating Arrays",
        "summary": "Adding, filtering, updating, and removing array elements immutably.",
        "explanation": "Use `.filter()` to delete, `.map()` to update an item, and `[...prev, item]` to add items.",
        "keyPoints": [
          "Add: `[...items, newItem]`",
          "Remove: `items.filter(i => i.id !== id)`",
          "Update: `items.map(i => i.id === id ? { ...i, done: true } : i)`"
        ],
        "codeSnippet": "// Common Immutable Array Operations:\n// 1. Add\nsetTodos(prev => [...prev, newTodo]);\n\n// 2. Remove\nsetTodos(prev => prev.filter(todo => todo.id !== deleteId));\n\n// 3. Update single item\nsetTodos(prev => prev.map(todo => \n  todo.id === targetId ? { ...todo, completed: !todo.completed } : todo\n));",
        "codeLanguage": "tsx",
        "codeTitle": "Immutable Array Helpers"
      },
      {
        "id": "m07-08",
        "number": "08",
        "title": "Multiple State Variables",
        "summary": "When to split state vs when to group related fields into an object.",
        "explanation": "Split unrelated state into independent `useState` calls. Group state into an object only if fields change together or represent a unified form model.",
        "keyPoints": [
          "Independent state variables make code easier to reason about and refactor."
        ],
        "codeSnippet": "// Good: Independent concerns kept separate\nconst [searchQuery, setSearchQuery] = useState('');\nconst [currentPage, setCurrentPage] = useState(1);\nconst [isLoading, setIsLoading] = useState(false);",
        "codeLanguage": "tsx",
        "codeTitle": "Multiple State Slices"
      },
      {
        "id": "m07-09",
        "number": "09",
        "title": "Derived State",
        "summary": "Calculating values on the fly instead of storing redundant state.",
        "explanation": "Never store in state what can be calculated from existing props or state! Calculate derived values directly during rendering.",
        "keyPoints": [
          "Storing redundant state leads to out-of-sync bugs.",
          "Use `useMemo` only if derived calculation is computationally heavy."
        ],
        "codeSnippet": "// ❌ Redundant state anti-pattern:\n// const [items, setItems] = useState([]);\n// const [itemCount, setItemCount] = useState(0); // Redundant!\n\n// ✅ Derived state:\nexport function CartView({ items }: { items: CartItem[] }) {\n  // Purely derived calculation during render:\n  const itemCount = items.length;\n  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n\n  return <div>Total ({itemCount} items): ${totalPrice.toFixed(2)}</div>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Derived State Pattern",
        "proTip": "Ask yourself: Can I calculate this value from existing state or props? If yes, do NOT put it in useState!"
      },
      {
        "id": "m07-10",
        "number": "10",
        "title": "State Initialization",
        "summary": "Lazy state initialization for expensive setup computations.",
        "explanation": "If your initial state requires heavy computation (like parsing JSON from `localStorage`), pass an initializer function to `useState(() => computeValue())`. It runs only once on initial mount!",
        "keyPoints": [
          "`useState(computeValue())` runs on every render.",
          "`useState(() => computeValue())` runs ONLY on mount."
        ],
        "codeSnippet": "// Runs only once on initial mount:\nconst [savedTheme, setSavedTheme] = useState(() => {\n  if (typeof window === 'undefined') return 'dark';\n  return localStorage.getItem('theme') || 'dark';\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Lazy State Initialization Function"
      },
      {
        "id": "m07-11",
        "number": "11",
        "title": "State Batching",
        "summary": "React 18+ automatic grouping of multiple updates in promises and timeouts.",
        "explanation": "React automatically batches state updates across async boundaries (setTimeout, fetch promises, native events) into a single re-render.",
        "keyPoints": [
          "Reduces unnecessary intermediate renders and boosts performance."
        ],
        "codeSnippet": "async function handleAsyncSave() {\n  await api.save();\n  // In React 18+, both updates batch into 1 single render:\n  setIsLoading(false);\n  setSuccess(true);\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Automatic Async Batching"
      },
      {
        "id": "m07-12",
        "number": "12",
        "title": "State Management Best Practices",
        "summary": "Keep state local, lift state only when needed, and avoid duplicate sources of truth.",
        "explanation": "State should live as close to where it is used as possible. Only lift state to common ancestors when siblings require synchronization.",
        "keyPoints": [
          "Colocate state with the components that render it."
        ],
        "codeSnippet": "// State Colocation Rule:\n// If only ComponentA needs 'isModalOpen', keep it inside ComponentA,\n// NOT in the global store or App root!",
        "codeLanguage": "tsx",
        "codeTitle": "State Colocation Rule"
      }
    ]
  },
  {
    "id": "module-08",
    "number": "08",
    "title": "Forms",
    "category": "Core Concepts",
    "summary": "Controlled vs uncontrolled components, input types, form validation, error states, and reusable form components.",
    "iconName": "FileText",
    "topics": [
      {
        "id": "m08-01",
        "number": "01",
        "title": "React Forms",
        "summary": "HTML form elements vs React's state-driven input models.",
        "explanation": "In standard HTML, form inputs hold their own internal DOM state. In React, we bind input values to React state, making React the single source of truth.",
        "keyPoints": [
          "Controlled inputs bind `value` to state and `onChange` to state setters."
        ],
        "codeSnippet": "export function SimpleForm() {\n  const [name, setName] = useState('');\n  return (\n    <input \n      value={name} \n      onChange={(e) => setName(e.target.value)} \n      className=\"p-2 border rounded\"\n    />\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Input",
        "interactiveDemoKey": "FormValidationDemo"
      },
      {
        "id": "m08-02",
        "number": "02",
        "title": "Controlled Components",
        "summary": "Inputs whose values are strictly driven by React state.",
        "explanation": "A controlled component guarantees that what the user sees on screen is always in sync with component state. It allows validating, formatting, and masking input values in real-time.",
        "keyPoints": [
          "Value is governed by state.",
          "Mutations pass through `onChange` handler before reflecting on screen."
        ],
        "codeSnippet": "export function PhoneInput() {\n  const [phone, setPhone] = useState('');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    // Only allow digits:\n    const cleaned = e.target.value.replace(/\\D/g, '').slice(0, 10);\n    setPhone(cleaned);\n  };\n\n  return <input value={phone} onChange={handleChange} placeholder=\"Digits only\" />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Input with Sanitization"
      },
      {
        "id": "m08-03",
        "number": "03",
        "title": "Input Fields",
        "summary": "Handling text, number, email, and password types.",
        "explanation": "Standard input types behave identically to HTML, with camelCase attributes.",
        "keyPoints": [
          "Use `type=\"email\"` or `type=\"password\"` with controlled values."
        ],
        "codeSnippet": "<input \n  type=\"password\"\n  value={password}\n  onChange={(e) => setPassword(e.target.value)}\n  placeholder=\"Enter secure password\"\n  className=\"px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white\"\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Password Input"
      },
      {
        "id": "m08-04",
        "number": "04",
        "title": "Textarea",
        "summary": "Multi-line text input with controlled value prop.",
        "explanation": "Unlike HTML where textarea content sits between tags (`<textarea>hello</textarea>`), React uses the `value` attribute: `<textarea value={bio} onChange={...} />`.",
        "keyPoints": [
          "Use `value` attribute, not children."
        ],
        "codeSnippet": "<textarea \n  value={bio} \n  onChange={(e) => setBio(e.target.value)} \n  rows={4} \n  className=\"w-full bg-slate-900 border rounded-lg p-3 text-white\"\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Textarea"
      },
      {
        "id": "m08-05",
        "number": "05",
        "title": "Select",
        "summary": "Dropdown select with controlled option values.",
        "explanation": "In React, you put the `value` prop directly on the `<select>` tag rather than marking an `<option selected>`.",
        "keyPoints": [
          "`<select value={selected}>` defines active selection."
        ],
        "codeSnippet": "<select \n  value={role} \n  onChange={(e) => setRole(e.target.value)}\n  className=\"bg-slate-900 border border-slate-800 text-white rounded-lg p-2\"\n>\n  <option value=\"student\">Student</option>\n  <option value=\"instructor\">Instructor</option>\n  <option value=\"admin\">Administrator</option>\n</select>",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Select Dropdown"
      },
      {
        "id": "m08-06",
        "number": "06",
        "title": "Checkbox",
        "summary": "Boolean inputs using checked prop and e.target.checked.",
        "explanation": "Checkboxes use `checked={isChecked}` instead of `value`, and you read `e.target.checked` in the handler.",
        "keyPoints": [
          "Read `e.target.checked`, not `e.target.value`."
        ],
        "codeSnippet": "<label className=\"flex items-center gap-2 cursor-pointer\">\n  <input \n    type=\"checkbox\" \n    checked={agreed} \n    onChange={(e) => setAgreed(e.target.checked)}\n    className=\"w-4 h-4 rounded text-blue-600\"\n  />\n  <span className=\"text-sm text-slate-300\">I accept terms and conditions</span>\n</label>",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Checkbox"
      },
      {
        "id": "m08-07",
        "number": "07",
        "title": "Radio Button",
        "summary": "Single-choice selection from a group.",
        "explanation": "Radio buttons share a common `name` attribute and are controlled by comparing `checked={selectedOption === value}`.",
        "keyPoints": [
          "Bind all radios in group to the same state string."
        ],
        "codeSnippet": "export function PlanSelector() {\n  const [plan, setPlan] = useState<'free' | 'pro'>('pro');\n\n  return (\n    <div className=\"flex gap-4\">\n      {['free', 'pro'].map((option) => (\n        <label key={option} className=\"flex items-center gap-2\">\n          <input \n            type=\"radio\" \n            name=\"plan\" \n            value={option} \n            checked={plan === option} \n            onChange={(e) => setPlan(e.target.value as 'free' | 'pro')} \n          />\n          <span className=\"capitalize\">{option} Plan</span>\n        </label>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Radio Group"
      },
      {
        "id": "m08-08",
        "number": "08",
        "title": "Form Submission",
        "summary": "Packaging form data and sending to API endpoints.",
        "explanation": "Handle form submission on `<form onSubmit={...}>` with validation before dispatching to an API service.",
        "keyPoints": [
          "Always prevent default browser reload."
        ],
        "codeSnippet": "const handleSubmit = async (e: React.FormEvent) => {\n  e.preventDefault();\n  setIsSubmitting(true);\n  try {\n    await apiClient.post('/users', formData);\n    showSuccessToast('User registered successfully');\n  } catch (err) {\n    showErrorToast('Failed to register user');\n  } finally {\n    setIsSubmitting(false);\n  }\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Safe Form Submission Handler"
      },
      {
        "id": "m08-09",
        "number": "09",
        "title": "Form State",
        "summary": "Managing multi-field forms with a single state object.",
        "explanation": "Instead of 10 individual `useState` calls for a 10-field form, use a single state object indexed with `e.target.name`.",
        "keyPoints": [
          "Dynamic object keys: `[e.target.name]: e.target.value`."
        ],
        "codeSnippet": "export function MultiFieldForm() {\n  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setForm(prev => ({\n      ...prev,\n      [e.target.name]: e.target.value,\n    }));\n  };\n\n  return (\n    <form className=\"space-y-2\">\n      <input name=\"firstName\" value={form.firstName} onChange={handleChange} placeholder=\"First Name\" />\n      <input name=\"lastName\" value={form.lastName} onChange={handleChange} placeholder=\"Last Name\" />\n      <input name=\"email\" value={form.email} onChange={handleChange} placeholder=\"Email\" />\n    </form>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Unified Multi-Field Form Handler"
      },
      {
        "id": "m08-10",
        "number": "10",
        "title": "Form Validation",
        "summary": "Client-side synchronous validation rules.",
        "explanation": "Validate inputs against rules (minimum length, email regex, required fields) and store errors in a dedicated error object.",
        "keyPoints": [
          "Validate either `onChange`, `onBlur`, or `onSubmit`."
        ],
        "codeSnippet": "const validate = () => {\n  const newErrors: Record<string, string> = {};\n  if (!form.email.includes('@')) newErrors.email = 'Invalid email address';\n  if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';\n  setErrors(newErrors);\n  return Object.keys(newErrors).length === 0;\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Synchronous Validation Logic"
      },
      {
        "id": "m08-11",
        "number": "11",
        "title": "Validation Errors",
        "summary": "Rendering user-friendly error banners and inline field messages.",
        "explanation": "Display red borders on invalid inputs and contextual error messages below them.",
        "keyPoints": [
          "Accessible error messages linked via `aria-describedby`."
        ],
        "codeSnippet": "<div>\n  <input \n    className={cn(\"border rounded p-2\", errors.email && \"border-rose-500 bg-rose-950/20\")}\n    value={email}\n    onChange={(e) => setEmail(e.target.value)}\n  />\n  {errors.email && <p className=\"text-xs text-rose-400 mt-1\">{errors.email}</p>}\n</div>",
        "codeLanguage": "tsx",
        "codeTitle": "Inline Validation Error"
      },
      {
        "id": "m08-12",
        "number": "12",
        "title": "Resetting Forms",
        "summary": "Restoring form state back to clean initial values.",
        "explanation": "Reset state back to initial constants after a successful submission.",
        "keyPoints": [
          "Extract `INITIAL_STATE` constant for easy resetting."
        ],
        "codeSnippet": "const INITIAL_FORM = { title: '', description: '' };\n\nexport function CreateTaskForm() {\n  const [form, setForm] = useState(INITIAL_FORM);\n\n  const handleSuccess = () => {\n    // Reset to blank:\n    setForm(INITIAL_FORM);\n  };\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Resetting Form State"
      },
      {
        "id": "m08-13",
        "number": "13",
        "title": "Reusable Form Components",
        "summary": "Building generic TextField, CheckboxField, and SelectField components.",
        "explanation": "Encapsulate label, input, helper text, and error messages into reusable field wrappers.",
        "keyPoints": [
          "Massively cuts down boilerplate in enterprise apps."
        ],
        "codeSnippet": "interface FormFieldProps {\n  label: string;\n  error?: string;\n  children: React.ReactNode;\n}\n\nexport function FormField({ label, error, children }: FormFieldProps) {\n  return (\n    <div className=\"space-y-1\">\n      <label className=\"block text-xs font-semibold text-slate-300 uppercase tracking-wider\">{label}</label>\n      {children}\n      {error && <p className=\"text-xs text-rose-400 font-medium\">{error}</p>}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Reusable FormField Wrapper"
      }
    ]
  },
  {
    "id": "module-09",
    "number": "09",
    "title": "Component Communication",
    "category": "Core Concepts",
    "summary": "Parent-child data passing, child-to-parent callbacks, lifting state up, sibling communication, and avoiding prop drilling.",
    "iconName": "Network",
    "topics": [
      {
        "id": "m09-01",
        "number": "01",
        "title": "Parent to Child",
        "summary": "Downwards data flow via props.",
        "explanation": "Parents pass state and configuration down to children as props.",
        "keyPoints": [
          "Standard unidirectional data flow in React."
        ],
        "codeSnippet": "<ChildComponent message=\"Hello from parent!\" count={42} />",
        "codeLanguage": "tsx",
        "codeTitle": "Parent to Child Data Flow"
      },
      {
        "id": "m09-02",
        "number": "02",
        "title": "Child to Parent",
        "summary": "Upwards event notification via callback functions.",
        "explanation": "Children notify parents of actions by calling function props supplied by the parent.",
        "keyPoints": [
          "Children invoke callbacks with arguments."
        ],
        "codeSnippet": "// Parent:\n<ChildComponent onSelect={(itemId) => setSelected(itemId)} />\n\n// Child:\n<button onClick={() => onSelect('item-1')}>Select Item</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Child to Parent Notification"
      },
      {
        "id": "m09-03",
        "number": "03",
        "title": "Passing Functions",
        "summary": "Using callbacks for modular event delegation.",
        "explanation": "Decouples child rendering from state management logic in the parent.",
        "keyPoints": [
          "Allows reusing child components across different features."
        ],
        "codeSnippet": "export function ActionToolbar({ onSave, onCancel }: ToolbarProps) {\n  return (\n    <div className=\"flex gap-2\">\n      <button onClick={onSave} className=\"bg-emerald-600 px-3 py-1 text-white rounded\">Save</button>\n      <button onClick={onCancel} className=\"bg-slate-700 px-3 py-1 text-white rounded\">Cancel</button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Callback Action Delegation"
      },
      {
        "id": "m09-04",
        "number": "04",
        "title": "Lifting State Up",
        "summary": "Moving state to the closest common ancestor of communicating siblings.",
        "explanation": "When two sibling components need to share or synchronize data, move the state out of both and into their closest common parent.",
        "keyPoints": [
          "Eliminates out-of-sync duplicate state.",
          "Parent becomes single source of truth."
        ],
        "codeSnippet": "export function CommonParent() {\n  const [activeTab, setActiveTab] = useState('summary');\n\n  return (\n    <div>\n      <TabList activeTab={activeTab} onTabChange={setActiveTab} />\n      <TabContent activeTab={activeTab} />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Lifting State Up Pattern"
      },
      {
        "id": "m09-05",
        "number": "05",
        "title": "Sharing State",
        "summary": "Synchronizing sibling views through hoisted state.",
        "explanation": "Both siblings receive shared data as props and update it via parent callbacks.",
        "keyPoints": [
          "Maintains consistency across disparate panels on screen."
        ],
        "codeSnippet": "// Sibling 1 (Filter input) -> updates query in Parent -> Sibling 2 (Results list) receives filtered query",
        "codeLanguage": "tsx",
        "codeTitle": "Sibling State Sharing"
      },
      {
        "id": "m09-06",
        "number": "06",
        "title": "Sibling Communication",
        "summary": "Why siblings cannot directly talk to each other in React.",
        "explanation": "React components are isolated. Sibling A cannot call functions or access state in Sibling B. They must communicate through their shared parent or a global store.",
        "keyPoints": [
          "No direct peer-to-peer coupling."
        ],
        "codeSnippet": "/*\n             [Common Parent]  <── Holds state\n             /             \\\n      [Sibling A]       [Sibling B]\n     (Triggers update)   (Reflects update)\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Sibling Communication Architecture"
      },
      {
        "id": "m09-07",
        "number": "07",
        "title": "Prop Drilling",
        "summary": "The problem of passing props through intermediary components that don't need them.",
        "explanation": "Prop drilling occurs when you pass data through 4 or 5 levels of components just so a deep leaf component can access it. It clutters component APIs and makes refactoring tedious.",
        "keyPoints": [
          "Solutions: Component composition (`children`), React Context, or Zustand store."
        ],
        "codeSnippet": "// Prop Drilling Anti-pattern:\n// <Page user={user}> -> <Dashboard user={user}> -> <Sidebar user={user}> -> <Avatar user={user}>",
        "codeLanguage": "tsx",
        "codeTitle": "Prop Drilling Demonstration"
      },
      {
        "id": "m09-08",
        "number": "08",
        "title": "Component Composition as Solution",
        "summary": "Passing slotted elements down rather than raw props.",
        "explanation": "Often you can solve prop drilling simply by passing the leaf component directly via `children` or named slots.",
        "keyPoints": [
          "Intermediary components only render `{children}`, unaware of specific props."
        ],
        "codeSnippet": "// Instead of passing user through Sidebar:\n// <Sidebar><Avatar user={user} /></Sidebar>",
        "codeLanguage": "tsx",
        "codeTitle": "Composition Solving Prop Drilling"
      },
      {
        "id": "m09-09",
        "number": "09",
        "title": "Designing Component APIs",
        "summary": "Crafting ergonomic, intuitive props for long-term maintainability.",
        "explanation": "Design props like a public library API: keep them minimal, provide sensible defaults, and use TypeScript union types for predictable variants.",
        "keyPoints": [
          "Use discriminating unions for mutually exclusive states."
        ],
        "codeSnippet": "type AlertProps = \n  | { variant: 'simple'; message: string }\n  | { variant: 'actionable'; message: string; actionLabel: string; onAction: () => void };",
        "codeLanguage": "tsx",
        "codeTitle": "Discriminated Union Props"
      }
    ]
  },
  {
    "id": "module-10",
    "number": "10",
    "title": "useEffect",
    "category": "Hooks & Lifecycle",
    "summary": "Side effects, dependency array rules, cleanup functions, data fetching, race conditions, and when NOT to use useEffect.",
    "iconName": "Clock",
    "topics": [
      {
        "id": "m10-01",
        "number": "01",
        "title": "What is useEffect?",
        "summary": "Hook for synchronizing components with external systems.",
        "explanation": "The `useEffect` hook lets you run code after rendering to synchronize with external systems: browser DOM APIs, network requests, timers, or web sockets.",
        "keyPoints": [
          "Runs asynchronously after the render has painted to the screen.",
          "Replaces componentDidMount, componentDidUpdate, and componentWillUnmount."
        ],
        "codeSnippet": "import { useEffect } from 'react';\n\nuseEffect(() => {\n  document.title = `React Course - ${topicTitle}`;\n}, [topicTitle]);",
        "codeLanguage": "tsx",
        "codeTitle": "Synchronizing Document Title"
      },
      {
        "id": "m010-02",
        "number": "02",
        "title": "Side Effects",
        "summary": "What qualifies as a side effect in React.",
        "explanation": "A side effect is any operation that affects something outside the scope of the currently executing function (e.g. timers, network requests, reading localStorage, setting window listeners).",
        "keyPoints": [
          "Pure render functions must not execute side effects directly during render."
        ],
        "codeSnippet": "// Side effects belong in useEffect or event handlers, NOT in render body!",
        "codeLanguage": "tsx",
        "codeTitle": "Side Effect Placement"
      },
      {
        "id": "m10-03",
        "number": "03",
        "title": "useEffect Syntax",
        "summary": "The effect callback and dependency array parameters.",
        "explanation": "`useEffect(effectFunction, dependencyArray)`.",
        "keyPoints": [
          "Dependency array controls when the effect re-runs."
        ],
        "codeSnippet": "useEffect(() => {\n  // Setup logic runs here\n  return () => {\n    // Optional cleanup logic runs here\n  };\n}, [/* dependencies */]);",
        "codeLanguage": "tsx",
        "codeTitle": "useEffect Anatomy"
      },
      {
        "id": "m10-04",
        "number": "04",
        "title": "Dependency Array",
        "summary": "No array vs empty array vs populated dependencies.",
        "explanation": "1) No dependency array: runs on EVERY render. 2) Empty array `[]`: runs ONCE on mount. 3) `[a, b]`: runs on mount and whenever `a` or `b` changes.",
        "keyPoints": [
          "Never lie to the dependency array; include every reactive variable used inside."
        ],
        "codeSnippet": "// 1. Runs after every single render (rarely desired):\nuseEffect(() => { console.log('Rendered'); });\n\n// 2. Runs once on initial mount:\nuseEffect(() => { console.log('Mounted'); }, []);\n\n// 3. Runs when count changes:\nuseEffect(() => { console.log('Count is', count); }, [count]);",
        "codeLanguage": "tsx",
        "codeTitle": "Dependency Array Options"
      },
      {
        "id": "m10-05",
        "number": "05",
        "title": "Running Effects",
        "summary": "The execution timeline: render, DOM paint, then effect execution.",
        "explanation": "React renders JSX, paints pixels to the screen, and only then executes your `useEffect`. This ensures effects do not block visible rendering.",
        "keyPoints": [
          "Effects are non-blocking by default."
        ],
        "codeSnippet": "// Timeline:\n// 1. Render JSX -> 2. Browser Paints UI -> 3. useEffect Runs",
        "codeLanguage": "tsx",
        "codeTitle": "Effect Execution Timeline"
      },
      {
        "id": "m10-06",
        "number": "06",
        "title": "Effects with State",
        "summary": "Reacting to state transitions.",
        "explanation": "Run effects whenever specific state variables transition.",
        "keyPoints": [
          "Triggers actions like auto-saving drafts when content changes."
        ],
        "codeSnippet": "useEffect(() => {\n  if (draftText) {\n    const timer = setTimeout(() => saveDraft(draftText), 1000);\n    return () => clearTimeout(timer);\n  }\n}, [draftText]);",
        "codeLanguage": "tsx",
        "codeTitle": "Auto-save on State Change"
      },
      {
        "id": "m10-07",
        "number": "07",
        "title": "Effects with Props",
        "summary": "Synchronizing when parent attributes update.",
        "explanation": "Update local state or external subscriptions when prop IDs change.",
        "keyPoints": [
          "Use prop values as dependencies to react to route parameter changes."
        ],
        "codeSnippet": "useEffect(() => {\n  fetchModuleDetails(moduleId);\n}, [moduleId]);",
        "codeLanguage": "tsx",
        "codeTitle": "Reacting to Prop Changes"
      },
      {
        "id": "m10-08",
        "number": "08",
        "title": "Cleanup Functions",
        "summary": "Preventing memory leaks, clearing timers, and removing event listeners.",
        "explanation": "Return a cleanup function from your effect. React runs this cleanup function before re-running the effect and when the component unmounts.",
        "keyPoints": [
          "Crucial for `addEventListener`, `setInterval`, WebSocket connections, and aborting fetch requests."
        ],
        "codeSnippet": "useEffect(() => {\n  const interval = setInterval(() => {\n    setSeconds(s => s + 1);\n  }, 1000);\n\n  // Cleanup: Clears interval when unmounted\n  return () => clearInterval(interval);\n}, []);",
        "codeLanguage": "tsx",
        "codeTitle": "Timer Cleanup Function"
      },
      {
        "id": "m10-09",
        "number": "09",
        "title": "Fetching Data with useEffect",
        "summary": "Network requests and race condition handling with AbortController.",
        "explanation": "When fetching data inside `useEffect`, fast user clicks can create race conditions where an older slow response overwrites a newer fast response. Use `AbortController` to cancel stale requests.",
        "keyPoints": [
          "Use `AbortController` to abort ongoing HTTP requests on unmount or dependency change."
        ],
        "codeSnippet": "useEffect(() => {\n  const controller = new AbortController();\n  setIsLoading(true);\n\n  fetch(`/api/topics/${topicId}`, { signal: controller.signal })\n    .then(res => res.json())\n    .then(data => {\n      setTopic(data);\n      setIsLoading(false);\n    })\n    .catch(err => {\n      if (err.name !== 'AbortError') setError(err.message);\n    });\n\n  return () => controller.abort(); // Cancel if topicId changes!\n}, [topicId]);",
        "codeLanguage": "tsx",
        "codeTitle": "Safe Data Fetching with AbortController"
      },
      {
        "id": "m10-10",
        "number": "10",
        "title": "Common useEffect Mistakes",
        "summary": "Infinite loops, missing dependencies, and object reference traps.",
        "explanation": "Creating an object or function inside your component body and putting it in the dependency array causes an infinite loop because new memory references are generated every render!",
        "keyPoints": [
          "Infinite loop trigger: Updating state inside effect without proper dependencies.",
          "Object dependency trap: Pass primitive values or memoize with `useCallback`/`useMemo`."
        ],
        "codeSnippet": "// ❌ Infinite Loop Bug:\n/*\nuseEffect(() => {\n  setCount(count + 1); // Triggers re-render -> runs effect -> triggers re-render...\n}, [count]);\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Infinite Loop Example",
        "pitfall": "Passing un-memoized functions or objects into the dependency array triggers the effect on EVERY render because their reference changes every time."
      },
      {
        "id": "m10-11",
        "number": "11",
        "title": "When NOT to use useEffect",
        "summary": "Modern React guidelines: avoid effects for derived data and user events.",
        "explanation": "The React core team advises against using `useEffect` for: 1) Calculating derived state (compute it during render); 2) Handling user interactions (handle them directly in `onClick`/`onSubmit`); 3) Resetting state on prop change (use key prop).",
        "keyPoints": [
          "Compute during render instead of `setState` in `useEffect`.",
          "Use TanStack Query for server fetching instead of manual `useEffect` fetching."
        ],
        "codeSnippet": "// ❌ Bad: Redundant effect for derived data\n/*\nuseEffect(() => {\n  setFullName(`${firstName} ${lastName}`);\n}, [firstName, lastName]);\n*/\n\n// ✅ Good: Compute directly during render!\nconst fullName = `${firstName} ${lastName}`;",
        "codeLanguage": "tsx",
        "codeTitle": "Avoiding Redundant Effects"
      }
    ]
  },
  {
    "id": "module-11",
    "number": "11",
    "title": "useRef",
    "category": "Hooks & Lifecycle",
    "summary": "Persistent mutable values without triggering re-renders, DOM element access, focusing inputs, and measuring DOM nodes.",
    "iconName": "Crosshair",
    "topics": [
      {
        "id": "m11-01",
        "number": "01",
        "title": "What is useRef?",
        "summary": "A hook that stores a mutable value that survives across renders without causing re-renders.",
        "explanation": "`useRef` returns a plain JavaScript object `{ current: initialValue }`. Mutating `.current` does NOT trigger a re-render. It is commonly used for direct DOM references and storing timer IDs.",
        "keyPoints": [
          "Survives across renders like state, but changing it does NOT re-render the UI.",
          "Primary tool for DOM manipulation in React."
        ],
        "codeSnippet": "import { useRef } from 'react';\n\nconst renderCountRef = useRef(0);\nrenderCountRef.current++; // Mutated without causing re-render!",
        "codeLanguage": "tsx",
        "codeTitle": "useRef Declaration"
      },
      {
        "id": "m11-02",
        "number": "02",
        "title": "useRef Syntax",
        "summary": "Declaring refs with TypeScript types for DOM nodes.",
        "explanation": "For DOM refs, initialize with `null`: `const inputRef = useRef<HTMLInputElement>(null)`. React automatically populates `.current` with the DOM node once mounted.",
        "keyPoints": [
          "Type parameter matches the HTML element: `HTMLInputElement`, `HTMLDivElement`."
        ],
        "codeSnippet": "const inputRef = useRef<HTMLInputElement>(null);\nreturn <input ref={inputRef} type=\"text\" />;",
        "codeLanguage": "tsx",
        "codeTitle": "useRef Syntax with TypeScript"
      },
      {
        "id": "m11-03",
        "number": "03",
        "title": "Accessing DOM Elements",
        "summary": "Interacting directly with native HTML DOM elements.",
        "explanation": "Allows calling native methods like `.focus()`, `.scrollIntoView()`, or measuring dimensions with `.getBoundingClientRect()`.",
        "keyPoints": [
          "Always check `if (ref.current)` before accessing properties."
        ],
        "codeSnippet": "export function ScrollToBottom() {\n  const bottomRef = useRef<HTMLDivElement>(null);\n\n  const scrollToBottom = () => {\n    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });\n  };\n\n  return (\n    <div>\n      <button onClick={scrollToBottom}>Scroll Down</button>\n      <div style={{ height: 1000 }} />\n      <div ref={bottomRef} />\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "DOM Scroll into View via Ref"
      },
      {
        "id": "m11-04",
        "number": "04",
        "title": "Focus Input",
        "summary": "Programmatically focusing an input when modals open or search triggers.",
        "explanation": "A common use case: when the user presses `Cmd+K`, focus the search input immediately.",
        "keyPoints": [
          "Call `inputRef.current?.focus()` inside an effect or handler."
        ],
        "codeSnippet": "export function AutoFocusSearch() {\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  useEffect(() => {\n    inputRef.current?.focus();\n  }, []);\n\n  return <input ref={inputRef} placeholder=\"Search topics...\" className=\"border p-2\" />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Programmatic Input Focus"
      },
      {
        "id": "m11-05",
        "number": "05",
        "title": "Storing Mutable Values",
        "summary": "Keeping timer IDs and previous state without re-render overhead.",
        "explanation": "Store interval IDs or previous values that need to be read in event handlers or cleanups.",
        "keyPoints": [
          "Ideal for storing `setInterval` or `setTimeout` handles."
        ],
        "codeSnippet": "export function Stopwatch() {\n  const [time, setTime] = useState(0);\n  const timerRef = useRef<NodeJS.Timeout | null>(null);\n\n  const start = () => {\n    if (timerRef.current !== null) return;\n    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);\n  };\n\n  const stop = () => {\n    if (timerRef.current) {\n      clearInterval(timerRef.current);\n      timerRef.current = null;\n    }\n  };\n\n  return <div>Time: {time}s <button onClick={start}>Start</button> <button onClick={stop}>Stop</button></div>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Storing Timer Handle in useRef"
      },
      {
        "id": "m11-06",
        "number": "06",
        "title": "useRef vs useState",
        "summary": "When to choose mutable ref vs reactive state.",
        "explanation": "If changing a value should update the UI visible to the user, use `useState`. If changing the value is internal housekeeping that should NOT trigger a re-render, use `useRef`.",
        "keyPoints": [
          "useState -> Affects UI rendering.",
          "useRef -> Internal data storage / DOM node access."
        ],
        "codeSnippet": "/*\n| Need | Hook |\n|------|------|\n| Re-render UI on change | useState |\n| DOM element reference | useRef |\n| Store timer ID / socket | useRef |\n| Form input value | useState (controlled) |\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "useRef vs useState Decision Guide"
      },
      {
        "id": "m11-07",
        "number": "07",
        "title": "useRef Use Cases",
        "summary": "Media players, measuring widths, canvas drawing, and tracking previous state.",
        "explanation": "Used extensively with `<video>`, `<audio>`, HTML5 `<canvas>`, and third-party imperative libraries (e.g. Chart.js, Leaflet).",
        "keyPoints": [
          "Bridges declarative React with imperative external browser APIs."
        ],
        "codeSnippet": "export function VideoPlayer({ src }: { src: string }) {\n  const videoRef = useRef<HTMLVideoElement>(null);\n\n  return (\n    <div>\n      <video ref={videoRef} src={src} />\n      <button onClick={() => videoRef.current?.play()}>Play</button>\n      <button onClick={() => videoRef.current?.pause()}>Pause</button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Controlling HTML5 Video with useRef"
      },
      {
        "id": "m11-08",
        "number": "08",
        "title": "Common useRef Mistakes",
        "summary": "Reading or writing ref.current during rendering.",
        "explanation": "Do NOT read or write `ref.current` during rendering JSX. That violates React's purity rules. Only read and write `ref.current` inside event handlers or `useEffect`.",
        "keyPoints": [
          "Mutating refs during render makes components non-deterministic."
        ],
        "codeSnippet": "// ❌ Impure: Writing to ref during render\n/*\nfunction Bad() {\n  myRef.current = 123; // Don't do this during render!\n  return <div>{myRef.current}</div>;\n}\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Do Not Mutate Refs During Render"
      }
    ]
  },
  {
    "id": "module-12",
    "number": "12",
    "title": "Custom Hooks",
    "category": "Hooks & Lifecycle",
    "summary": "Creating reusable hooks, extracting logic, useFetch, useLocalStorage, useDebounce, and hook architecture.",
    "iconName": "Wrench",
    "topics": [
      {
        "id": "m12-01",
        "number": "01",
        "title": "What is a Custom Hook?",
        "summary": "JavaScript functions starting with 'use' that encapsulate other hooks.",
        "explanation": "A custom hook is a standard JavaScript function whose name starts with `use` and can call other React hooks (`useState`, `useEffect`, `useRef`). Custom hooks allow sharing stateful logic between components without duplicating code.",
        "keyPoints": [
          "Must begin with `use` (e.g., `useDebounce`, `useLocalStorage`).",
          "Shares stateful logic, NOT shared state (each caller gets an independent state instance)."
        ],
        "codeSnippet": "// Basic Custom Hook:\nexport function useToggle(initialValue = false): [boolean, () => void] {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(v => !v);\n  return [value, toggle];\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Simple useToggle Custom Hook",
        "interactiveDemoKey": "CustomHookDemo"
      },
      {
        "id": "m12-02",
        "number": "02",
        "title": "Why Custom Hooks?",
        "summary": "Code reuse, component decluttering, and testable domain logic.",
        "explanation": "Extracting complex effects and state workflows into custom hooks keeps your UI components clean, declarative, and focused solely on layout.",
        "keyPoints": [
          "Eliminates copy-paste code across pages.",
          "Decouples business logic from rendering."
        ],
        "codeSnippet": "// Component remains pure and concise:\nexport function SettingsView() {\n  const [isDarkMode, toggleTheme] = useToggle(true);\n  const [isNotificationsEnabled, toggleNotifications] = useToggle(false);\n\n  return (\n    <div>\n      <button onClick={toggleTheme}>Dark Mode: {isDarkMode ? 'ON' : 'OFF'}</button>\n      <button onClick={toggleNotifications}>Alerts: {isNotificationsEnabled ? 'ON' : 'OFF'}</button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Using Custom Hooks in Components"
      },
      {
        "id": "m12-03",
        "number": "03",
        "title": "Creating Custom Hooks",
        "summary": "Rules, naming conventions, and returning values.",
        "explanation": "Custom hooks follow the standard Rules of Hooks. Return either a tuple `[value, setter]` or an object `{ data, isLoading, error }`.",
        "keyPoints": [
          "Return tuples for 1-2 values; return objects for 3+ values."
        ],
        "codeSnippet": "// Return object with named properties:\nexport function useWindowDimensions() {\n  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });\n\n  useEffect(() => {\n    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });\n    handleResize();\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return dimensions;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "useWindowDimensions Hook"
      },
      {
        "id": "m12-04",
        "number": "04",
        "title": "Reusing Logic",
        "summary": "Sharing behavior without duplicating state instances.",
        "explanation": "Remember that invoking a custom hook in two different components creates two completely isolated state environments.",
        "keyPoints": [
          "To share the SAME state across components, use React Context or Zustand."
        ],
        "codeSnippet": "// Component A has its own independent toggle state;\n// Component B has its own independent toggle state.",
        "codeLanguage": "tsx",
        "codeTitle": "Isolated Hook State Instances"
      },
      {
        "id": "m12-05",
        "number": "05",
        "title": "useFetch Hook",
        "summary": "Extracting HTTP requests, loading states, and error handling.",
        "explanation": "A custom hook encapsulating the network request lifecycle with cancellation support.",
        "keyPoints": [
          "Returns `{ data, isLoading, error, refetch }`."
        ],
        "codeSnippet": "export function useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    let ignore = false;\n    setIsLoading(true);\n\n    fetch(url)\n      .then(res => res.json())\n      .then(result => {\n        if (!ignore) {\n          setData(result);\n          setIsLoading(false);\n        }\n      })\n      .catch(err => {\n        if (!ignore) {\n          setError(err.message);\n          setIsLoading(false);\n        }\n      });\n\n    return () => { ignore = true; };\n  }, [url]);\n\n  return { data, isLoading, error };\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Production useFetch Custom Hook"
      },
      {
        "id": "m12-06",
        "number": "06",
        "title": "useLocalStorage Hook",
        "summary": "Persisting state to browser storage with automatic JSON serialization.",
        "explanation": "Combines `useState` with `localStorage` so that changes automatically persist and re-hydrate on page refresh.",
        "keyPoints": [
          "Handles SSR guards (`typeof window !== 'undefined'`) and try/catch parsing."
        ],
        "codeSnippet": "export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {\n  const [storedValue, setStoredValue] = useState<T>(() => {\n    if (typeof window === 'undefined') return initialValue;\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value: T | ((prev: T) => T)) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      if (typeof window !== 'undefined') {\n        window.localStorage.setItem(key, JSON.stringify(valueToStore));\n      }\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return [storedValue, setValue];\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Enterprise useLocalStorage Hook"
      },
      {
        "id": "m12-07",
        "number": "07",
        "title": "useDebounce Hook",
        "summary": "Delaying rapid state updates for search inputs.",
        "explanation": "Prevents making an API request on every keystroke by delaying the updated value until the user pauses typing for specified milliseconds.",
        "keyPoints": [
          "Essential for search query inputs and resize handlers."
        ],
        "codeSnippet": "export function useDebounce<T>(value: T, delay: number = 300): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return debouncedValue;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "useDebounce Custom Hook"
      },
      {
        "id": "m12-08",
        "number": "08",
        "title": "Custom Hook Architecture",
        "summary": "Organizing hooks directory and composable hook pipelines.",
        "explanation": "Compose custom hooks from smaller custom hooks (e.g. `useUser` uses `useFetch` which uses `useLocalStorage`).",
        "keyPoints": [
          "Colocate domain hooks in feature folders; put generic hooks in `@/hooks`."
        ],
        "codeSnippet": "src/\n├── hooks/\n│   ├── useLocalStorage.ts\n│   ├── useDebounce.ts\n│   └── useMediaQuery.ts\n└── features/students/hooks/\n    └── useStudentFilters.ts",
        "codeLanguage": "tsx",
        "codeTitle": "Hooks Folder Architecture"
      },
      {
        "id": "m12-09",
        "number": "09",
        "title": "Custom Hook Best Practices",
        "summary": "Ensuring stable callbacks with useCallback and accurate TypeScript return types.",
        "explanation": "Use `as const` on tuple returns or explicit TypeScript return types so consumers get accurate tuple types rather than union arrays.",
        "keyPoints": [
          "Add `as const` to tuple returns for instant type inference."
        ],
        "codeSnippet": "// Using \"as const\" for tuple inference:\nexport function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(c => c + 1);\n  return [count, increment] as const;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Tuple Return with as const"
      }
    ]
  },
  {
    "id": "module-13",
    "number": "13",
    "title": "React Routing",
    "category": "Routing & Network",
    "summary": "Single Page Application architecture, React Router v6+, Routes, Route, Link, NavLink, dynamic routes, nested layouts, and protected routes.",
    "iconName": "Compass",
    "topics": [
      {
        "id": "m13-01",
        "number": "01",
        "title": "SPA Concept",
        "summary": "How Single Page Applications render multiple screens without browser refreshes.",
        "explanation": "In an SPA, the browser downloads a single HTML file and JavaScript bundle. When the user navigates to a new URL, client-side JavaScript intercepts the navigation and updates the DOM dynamically without requesting a new HTML page from the server.",
        "keyPoints": [
          "Instant navigation transitions without white screen flashes.",
          "State persists in memory across route changes."
        ],
        "codeSnippet": "// Traditional Multi-Page App: Server returns full HTML page per URL.\n// Single Page App (SPA): Client-side JavaScript swaps view components on URL change.",
        "codeLanguage": "tsx",
        "codeTitle": "SPA Mental Model"
      },
      {
        "id": "m13-02",
        "number": "02",
        "title": "React Router",
        "summary": "The standard declarative routing library for React SPAs.",
        "explanation": "React Router synchronizes the UI with the URL in the browser address bar. It provides components and hooks to match URL paths and render corresponding views.",
        "keyPoints": [
          "Version 6+ uses nested routes, data loaders, and elements."
        ],
        "codeSnippet": "npm install react-router-dom",
        "codeLanguage": "tsx",
        "codeTitle": "Installing React Router"
      },
      {
        "id": "m13-03",
        "number": "03",
        "title": "BrowserRouter",
        "summary": "Wrapping your app to connect with the browser History API.",
        "explanation": "`<BrowserRouter>` uses the HTML5 history API (`pushState`, `replaceState`, and `popstate` event) to keep your UI in sync with the URL.",
        "keyPoints": [
          "Place `<BrowserRouter>` at the root of your application."
        ],
        "codeSnippet": "import { BrowserRouter } from 'react-router-dom';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n);",
        "codeLanguage": "tsx",
        "codeTitle": "BrowserRouter Provider"
      },
      {
        "id": "m13-04",
        "number": "04",
        "title": "Routes and Route",
        "summary": "Defining URL matching rules and target components.",
        "explanation": "`<Routes>` examines all its child `<Route>` elements and chooses the best match based on the current URL path.",
        "keyPoints": [
          "Matches are prioritized based on specificity."
        ],
        "codeSnippet": "import { Routes, Route } from 'react-router-dom';\nimport HomePage from './pages/HomePage';\nimport CurriculumPage from './pages/CurriculumPage';\nimport ProjectsPage from './pages/ProjectsPage';\n\nexport function AppRoutes() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<HomePage />} />\n      <Route path=\"/curriculum\" element={<CurriculumPage />} />\n      <Route path=\"/projects\" element={<ProjectsPage />} />\n    </Routes>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Configuring Routes"
      },
      {
        "id": "m13-05",
        "number": "05",
        "title": "Link",
        "summary": "Client-side navigation without page refresh.",
        "explanation": "The `<Link to=\"/destination\">` component renders an `<a>` tag with an `onClick` handler that prevents the browser's default reload and triggers client-side route navigation.",
        "keyPoints": [
          "Always use `<Link>` instead of `<a href=\"...\">` for internal links."
        ],
        "codeSnippet": "import { Link } from 'react-router-dom';\n\n<Link to=\"/projects\" className=\"text-blue-400 hover:underline\">\n  View Real-World Projects\n</Link>",
        "codeLanguage": "tsx",
        "codeTitle": "Client Navigation with Link"
      },
      {
        "id": "m13-06",
        "number": "06",
        "title": "NavLink",
        "summary": "Active link styling for navigation bars and menus.",
        "explanation": "A special version of `<Link>` that knows whether it is currently active. It passes an `isActive` boolean to its `className` function for easy active styling.",
        "keyPoints": [
          "Makes active tab highlights declarative."
        ],
        "codeSnippet": "import { NavLink } from 'react-router-dom';\n\n<NavLink\n  to=\"/curriculum\"\n  className={({ isActive }) =>\n    cn(\n      \"px-3 py-2 rounded-md text-sm font-medium\",\n      isActive ? \"bg-slate-800 text-white\" : \"text-slate-400 hover:text-white\"\n    )\n  }\n>\n  Curriculum\n</NavLink>",
        "codeLanguage": "tsx",
        "codeTitle": "Active Styling with NavLink"
      },
      {
        "id": "m13-07",
        "number": "07",
        "title": "Navigation Hook (useNavigate)",
        "summary": "Programmatic redirects inside handlers or effects.",
        "explanation": "The `useNavigate` hook returns a navigation function for redirecting users after form submissions or logout actions.",
        "keyPoints": [
          "Can navigate forwards, backwards (`navigate(-1)`), or with options (`{ replace: true }`)."
        ],
        "codeSnippet": "import { useNavigate } from 'react-router-dom';\n\nexport function LoginForm() {\n  const navigate = useNavigate();\n\n  const handleLoginSuccess = () => {\n    // Redirect to dashboard without back-button loop:\n    navigate('/dashboard', { replace: true });\n  };\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Programmatic Navigation with useNavigate"
      },
      {
        "id": "m13-08",
        "number": "08",
        "title": "Dynamic Routes",
        "summary": "Capturing variable URL paths using parameters like :id.",
        "explanation": "Define dynamic paths with a colon prefix: `/modules/:moduleId/topics/:topicId`.",
        "keyPoints": [
          "Allows single component to handle thousands of dynamic URLs."
        ],
        "codeSnippet": "<Route path=\"/modules/:moduleId\" element={<ModuleDetailView />} />",
        "codeLanguage": "tsx",
        "codeTitle": "Dynamic Route Parameter Definition"
      },
      {
        "id": "m13-09",
        "number": "09",
        "title": "Route Parameters (useParams)",
        "summary": "Extracting dynamic parameters from URL path.",
        "explanation": "The `useParams()` hook returns an object of key/value pairs of the URL parameters matched by the `<Route path>`.",
        "keyPoints": [
          "Parameters are always strings."
        ],
        "codeSnippet": "import { useParams } from 'react-router-dom';\n\nexport function ModuleDetailView() {\n  const { moduleId } = useParams<{ moduleId: string }>();\n  return <h2>Displaying details for Module {moduleId}</h2>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Reading URL Parameters with useParams"
      },
      {
        "id": "m13-10",
        "number": "10",
        "title": "Nested Routes",
        "summary": "Sub-routes sharing layout frames using <Outlet />.",
        "explanation": "Parent routes can render common layouts (e.g. sidebar and header), with `<Outlet />` serving as the placeholder for child route components.",
        "keyPoints": [
          "Hierarchical route structures mirror visual component nesting."
        ],
        "codeSnippet": "// Route configuration:\n<Route path=\"/dashboard\" element={<DashboardLayout />}>\n  <Route index element={<DashboardOverview />} />\n  <Route path=\"analytics\" element={<AnalyticsView />} />\n  <Route path=\"settings\" element={<SettingsView />} />\n</Route>\n\n// Inside DashboardLayout.tsx:\nexport function DashboardLayout() {\n  return (\n    <div className=\"flex\">\n      <Sidebar />\n      <main className=\"flex-1 p-6\">\n        <Outlet /> {/* Child route renders here! */}\n      </main>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Nested Routes and Outlet Layout"
      },
      {
        "id": "m13-11",
        "number": "11",
        "title": "Layout Routes",
        "summary": "Grouping routes under shared layouts without adding URL path prefixes.",
        "explanation": "Omit the `path` prop on the parent Route to wrap routes in a layout without modifying the URL path.",
        "keyPoints": [
          "Pathless layout routes cleanly group public vs authenticated layouts."
        ],
        "codeSnippet": "<Route element={<AuthLayout />}>\n  <Route path=\"/login\" element={<LoginPage />} />\n  <Route path=\"/register\" element={<RegisterPage />} />\n</Route>",
        "codeLanguage": "tsx",
        "codeTitle": "Pathless Layout Route"
      },
      {
        "id": "m13-12",
        "number": "12",
        "title": "404 Page",
        "summary": "Catch-all wildcard routes (*).",
        "explanation": "Use `<Route path=\"*\" element={<NotFoundPage />} />` at the very end of your route list to catch any unmatched URLs.",
        "keyPoints": [
          "Always provide a helpful 404 page with a link back to home."
        ],
        "codeSnippet": "<Route path=\"*\" element={<NotFoundView />} />",
        "codeLanguage": "tsx",
        "codeTitle": "Catch-all 404 Route"
      },
      {
        "id": "m13-13",
        "number": "13",
        "title": "Protected Routes",
        "summary": "Restricting access to authenticated users and redirecting guests.",
        "explanation": "A wrapper route component that checks authentication state: if logged in, renders `<Outlet />`; otherwise redirects to `/login`.",
        "keyPoints": [
          "Include `state={{ from: location }}` to redirect user back after login."
        ],
        "codeSnippet": "import { Navigate, Outlet, useLocation } from 'react-router-dom';\n\nexport function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {\n  const location = useLocation();\n\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  return <Outlet />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Protected Route Gate"
      },
      {
        "id": "m13-14",
        "number": "14",
        "title": "Query Parameters (useSearchParams)",
        "summary": "Reading and updating URL search queries like ?sort=desc&page=2.",
        "explanation": "`useSearchParams` behaves like `useState`, but stores state directly in the URL query string, making URLs shareable and bookmarkable.",
        "keyPoints": [
          "Synchronizes table filters with browser history."
        ],
        "codeSnippet": "import { useSearchParams } from 'react-router-dom';\n\nexport function SearchFilter() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  const query = searchParams.get('q') || '';\n\n  const handleSearch = (newQuery: string) => {\n    setSearchParams({ q: newQuery });\n  };\n\n  return <input value={query} onChange={(e) => handleSearch(e.target.value)} />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Query Strings with useSearchParams"
      },
      {
        "id": "m13-15",
        "number": "15",
        "title": "Route Architecture",
        "summary": "Centralizing route definitions, route constants, and loaders.",
        "explanation": "Store all route path strings in a central `ROUTES` constant (`ROUTES.PROJECTS`, `ROUTES.CURRICULUM`) to prevent broken link typos across large codebases.",
        "keyPoints": [
          "Centralized route configuration improves refactoring speed."
        ],
        "codeSnippet": "export const ROUTES = {\n  HOME: '/',\n  CURRICULUM: '/curriculum',\n  PROJECTS: '/projects',\n  PROJECT_DETAIL: (id: string) => `/projects/${id}`,\n} as const;",
        "codeLanguage": "tsx",
        "codeTitle": "Centralized Route Constants"
      },
      {
        "id": "m13-16",
        "number": "16",
        "title": "React Router Best Practices",
        "summary": "Code-splitting routes with React.lazy and Suspense.",
        "explanation": "Lazy-load route pages so users only download the JavaScript for the specific page they are currently viewing.",
        "keyPoints": [
          "Wrap lazy routes in `<Suspense fallback={<LoadingSkeleton />}>`."
        ],
        "codeSnippet": "import React, { Suspense } from 'react';\n\nconst ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));\n\n<Route \n  path=\"/projects\" \n  element={\n    <Suspense fallback={<PageSkeleton />}>\n      <ProjectsPage />\n    </Suspense>\n  } \n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Lazy-loaded Route with Suspense"
      }
    ]
  },
  {
    "id": "module-14",
    "number": "14",
    "title": "API Integration",
    "category": "Routing & Network",
    "summary": "REST API communication, Axios, HTTP methods, service layers, interceptors, and robust network error handling.",
    "iconName": "Globe",
    "topics": [
      {
        "id": "m14-01",
        "number": "01",
        "title": "React + REST API",
        "summary": "How frontend React applications interface with backend services.",
        "explanation": "React applications communicate with backend servers over HTTP using JSON payloads. The frontend is decoupled from the backend technology (Node, Python, Go, PHP Laravel).",
        "keyPoints": [
          "Stateless communication via JSON.",
          "Frontend only consumes API contracts."
        ],
        "codeSnippet": "// Client sends HTTP Request -> Server processes -> Server returns JSON Response",
        "codeLanguage": "tsx",
        "codeTitle": "REST Architecture Model"
      },
      {
        "id": "m14-02",
        "number": "02",
        "title": "Fetching API Data",
        "summary": "Native fetch() API vs external HTTP client libraries.",
        "explanation": "Modern browsers have native `fetch()`, but Axios or TanStack Query simplify error handling, request cancellation, and response body JSON parsing.",
        "keyPoints": [
          "Native fetch does not reject promises on HTTP 404/500 status codes!"
        ],
        "codeSnippet": "// Native fetch requires manual ok check:\nconst response = await fetch('/api/products');\nif (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\nconst data = await response.json();",
        "codeLanguage": "tsx",
        "codeTitle": "Native fetch() Error Checking"
      },
      {
        "id": "m14-03",
        "number": "03",
        "title": "GET Request",
        "summary": "Retrieving records from backend endpoints.",
        "explanation": "Used to fetch data without side effects on the server.",
        "keyPoints": [
          "Idempotent and safe HTTP method."
        ],
        "codeSnippet": "const fetchStudents = async () => {\n  const res = await axios.get('/api/students');\n  return res.data;\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Axios GET Request"
      },
      {
        "id": "m14-04",
        "number": "04",
        "title": "POST Request",
        "summary": "Creating new resources with JSON payload.",
        "explanation": "Used for submitting forms, creating tasks, or authenticating users.",
        "keyPoints": [
          "Transmits data in request body."
        ],
        "codeSnippet": "const createStudent = async (newStudent: StudentInput) => {\n  const res = await axios.post('/api/students', newStudent);\n  return res.data;\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Axios POST Request"
      },
      {
        "id": "m14-05",
        "number": "05",
        "title": "PUT Request",
        "summary": "Full replacement update of an existing resource.",
        "explanation": "Replaces the entire entity at `/api/resources/:id`.",
        "keyPoints": [
          "Idempotent update replacing all fields."
        ],
        "codeSnippet": "await axios.put(`/api/students/${id}`, fullStudentObject);",
        "codeLanguage": "tsx",
        "codeTitle": "Axios PUT Request"
      },
      {
        "id": "m14-06",
        "number": "06",
        "title": "PATCH Request",
        "summary": "Partial update of specific modified fields.",
        "explanation": "Updates only the fields sent in the request body (e.g. toggle task status).",
        "keyPoints": [
          "Saves bandwidth by sending only changed properties."
        ],
        "codeSnippet": "await axios.patch(`/api/todos/${id}`, { completed: true });",
        "codeLanguage": "tsx",
        "codeTitle": "Axios PATCH Request"
      },
      {
        "id": "m14-07",
        "number": "07",
        "title": "DELETE Request",
        "summary": "Removing a resource by identifier.",
        "explanation": "Sends HTTP DELETE to purge a record from the database.",
        "keyPoints": [
          "Check response status 200/204 to confirm deletion."
        ],
        "codeSnippet": "await axios.delete(`/api/todos/${id}`);",
        "codeLanguage": "tsx",
        "codeTitle": "Axios DELETE Request"
      },
      {
        "id": "m14-08",
        "number": "08",
        "title": "Loading State",
        "summary": "Tracking in-flight network requests.",
        "explanation": "Set `isLoading(true)` before the request and `isLoading(false)` in `finally`.",
        "keyPoints": [
          "Always use `finally` to ensure loading spinners disappear on error."
        ],
        "codeSnippet": "try {\n  setIsLoading(true);\n  const data = await fetchStudents();\n  setStudents(data);\n} catch (err) {\n  setError('Failed to load students');\n} finally {\n  setIsLoading(false);\n}",
        "codeLanguage": "tsx",
        "codeTitle": "In-Flight Loading Lifecycle"
      },
      {
        "id": "m14-09",
        "number": "09",
        "title": "Error Handling",
        "summary": "Parsing server error responses and displaying helpful messages.",
        "explanation": "Extract error messages from `error.response?.data?.message` to give users actionable feedback.",
        "keyPoints": [
          "Differentiate network failures from 400 validation errors."
        ],
        "codeSnippet": "catch (error: any) {\n  const message = error.response?.data?.message || error.message || 'Unknown network error';\n  toast.error(message);\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Parsing API Error Responses"
      },
      {
        "id": "m14-10",
        "number": "10",
        "title": "API Service Layer",
        "summary": "Abstracting HTTP calls out of UI components.",
        "explanation": "Components should never make direct `axios.get()` calls! Keep all API endpoints in dedicated service files (e.g. `studentService.ts`).",
        "keyPoints": [
          "Decouples UI components from backend URLs and API changes."
        ],
        "codeSnippet": "// src/services/studentService.ts\nimport { apiClient } from './apiClient';\nimport { Student } from '@/types';\n\nexport const studentService = {\n  getAll: () => apiClient.get<Student[]>('/students').then(r => r.data),\n  getById: (id: string) => apiClient.get<Student>(`/students/${id}`).then(r => r.data),\n  create: (data: Omit<Student, 'id'>) => apiClient.post<Student>('/students', data).then(r => r.data),\n  delete: (id: string) => apiClient.delete(`/students/${id}`),\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Dedicated Service Layer Pattern"
      },
      {
        "id": "m14-11",
        "number": "11",
        "title": "Axios Instance Configuration",
        "summary": "Configuring base URLs, timeouts, and headers.",
        "explanation": "Create a centralized Axios instance with default headers and base URL.",
        "keyPoints": [
          "Single place to configure authorization headers."
        ],
        "codeSnippet": "import axios from 'axios';\n\nexport const apiClient = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.reactcourse.dev/v1',\n  timeout: 10000,\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Axios Centralized Instance"
      },
      {
        "id": "m14-12",
        "number": "12",
        "title": "Request Interceptors",
        "summary": "Automatically attaching Bearer tokens to outgoing requests.",
        "explanation": "Axios request interceptors run before every outgoing request, injecting the latest JWT token from memory or cookies.",
        "keyPoints": [
          "No need to manually pass headers in every service method."
        ],
        "codeSnippet": "apiClient.interceptors.request.use((config) => {\n  const token = localStorage.getItem('access_token');\n  if (token && config.headers) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  return config;\n});",
        "codeLanguage": "tsx",
        "codeTitle": "JWT Request Interceptor"
      },
      {
        "id": "m14-13",
        "number": "13",
        "title": "Response Interceptors",
        "summary": "Handling global errors and automatic 401 token refresh.",
        "explanation": "Catch 401 Unauthorized responses globally to refresh access tokens or redirect to login.",
        "keyPoints": [
          "Centralizes session expiration handling."
        ],
        "codeSnippet": "apiClient.interceptors.response.use(\n  (response) => response,\n  async (error) => {\n    if (error.response?.status === 401) {\n      // Trigger token refresh or logout\n      window.location.href = '/login?expired=true';\n    }\n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Response Error Interceptor"
      },
      {
        "id": "m14-14",
        "number": "14",
        "title": "API Error Handling Architecture",
        "summary": "Unified error models and retry policies.",
        "explanation": "Map raw HTTP error codes to strongly typed domain errors.",
        "keyPoints": [
          "Provides clean typed error models for UI components."
        ],
        "codeSnippet": "export interface ApiError {\n  statusCode: number;\n  message: string;\n  fieldErrors?: Record<string, string[]>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Strongly Typed ApiError Model"
      },
      {
        "id": "m14-15",
        "number": "15",
        "title": "Environment Variables for APIs",
        "summary": "Configuring dev vs staging vs production endpoints safely.",
        "explanation": "Use `.env.local` and `NEXT_PUBLIC_` prefixes for client-accessible variables.",
        "keyPoints": [
          "Never commit secret API keys or database credentials to git."
        ],
        "codeSnippet": "NEXT_PUBLIC_API_URL=https://api.example.com\nNEXT_PUBLIC_APP_ENV=production",
        "codeLanguage": "tsx",
        "codeTitle": "Environment Variable Configuration"
      }
    ]
  },
  {
    "id": "module-15",
    "number": "15",
    "title": "Data Fetching (TanStack Query)",
    "category": "Routing & Network",
    "summary": "Server state vs client state, TanStack Query v5, queries, mutations, query keys, caching, pagination, and optimistic updates.",
    "iconName": "Database",
    "topics": [
      {
        "id": "m15-01",
        "number": "01",
        "title": "Server State vs Client State",
        "summary": "Why server data must be treated differently than UI state.",
        "explanation": "Client state is synchronous, owned completely by the browser (e.g. modal open/closed, current tab). Server state is asynchronous, owned remotely, and can become stale at any moment without the client knowing. Managing server state with plain `useState` + `useEffect` leads to cache bugs.",
        "keyPoints": [
          "Server state requires caching, background refetching, deduplication, and stale-time policies."
        ],
        "codeSnippet": "// Client State: Modal isOpen, active tab, form inputs -> Zustand or useState\n// Server State: Products list, user profile, orders -> TanStack Query",
        "codeLanguage": "tsx",
        "codeTitle": "Client vs Server State Separation"
      },
      {
        "id": "m15-02",
        "number": "02",
        "title": "TanStack Query Introduction",
        "summary": "The asynchronous state management powerhouse for React (formerly React Query).",
        "explanation": "TanStack Query handles caching, background synchronization, deduping identical requests, retries on failure, and window focus refetching out of the box.",
        "keyPoints": [
          "Eliminates 90% of boilerplate `useEffect` fetching code.",
          "Automatic caching and garbage collection."
        ],
        "codeSnippet": "npm install @tanstack/react-query @tanstack/react-query-devtools",
        "codeLanguage": "tsx",
        "codeTitle": "Installing TanStack Query v5"
      },
      {
        "id": "m15-03",
        "number": "03",
        "title": "QueryClientProvider",
        "summary": "Setting up the query client at application root.",
        "explanation": "Wraps your component tree and provides the cache engine to all child hooks.",
        "keyPoints": [
          "Configure default `staleTime` and retry policies."
        ],
        "codeSnippet": "import { QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 1000 * 60 * 5, // Data fresh for 5 minutes\n      refetchOnWindowFocus: false,\n    },\n  },\n});\n\nexport function App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <RouterProvider router={router} />\n    </QueryClientProvider>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "QueryClientProvider Setup"
      },
      {
        "id": "m15-04",
        "number": "04",
        "title": "useQuery Hook",
        "summary": "Fetching and subscribing to server state.",
        "explanation": "The `useQuery` hook accepts a `queryKey` and a `queryFn` returning a Promise.",
        "keyPoints": [
          "Returns `{ data, isLoading, isError, error, refetch }`."
        ],
        "codeSnippet": "import { useQuery } from '@tanstack/react-query';\nimport { studentService } from '@/services/studentService';\n\nexport function StudentList() {\n  const { data: students, isLoading, isError } = useQuery({\n    queryKey: ['students'],\n    queryFn: studentService.getAll,\n  });\n\n  if (isLoading) return <LoadingSpinner />;\n  if (isError) return <ErrorMessage />;\n\n  return <ul>{students?.map(s => <li key={s.id}>{s.name}</li>)}</ul>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Basic useQuery Hook"
      },
      {
        "id": "m15-05",
        "number": "05",
        "title": "Query Keys",
        "summary": "Hierarchical arrays that uniquely identify and cache queries.",
        "explanation": "Query keys are arrays: `['students']`, `['students', studentId]`, `['products', { category, page }]`. When any item in the query key array changes, TanStack Query automatically refetches the data.",
        "keyPoints": [
          "Include all variables used in the `queryFn` inside the `queryKey`.",
          "Hierarchical invalidation allows invalidating all `['students']` queries at once."
        ],
        "codeSnippet": "// Parameterized query key:\nconst { data } = useQuery({\n  queryKey: ['products', { category, sort, page }],\n  queryFn: () => productService.getList({ category, sort, page }),\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Hierarchical Query Keys"
      },
      {
        "id": "m15-06",
        "number": "06",
        "title": "useMutation Hook",
        "summary": "Creating, updating, and deleting server data with side effects.",
        "explanation": "Unlike queries (which run automatically), mutations are triggered on-demand by user actions (like clicking Submit or Delete).",
        "keyPoints": [
          "Use `onSuccess` to invalidate cached queries and trigger refetches."
        ],
        "codeSnippet": "import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nexport function AddStudentButton() {\n  const queryClient = useQueryClient();\n\n  const mutation = useMutation({\n    mutationFn: studentService.create,\n    onSuccess: () => {\n      // Invalidate and refetch student list automatically!\n      queryClient.invalidateQueries({ queryKey: ['students'] });\n      toast.success('Student added!');\n    },\n  });\n\n  return (\n    <button onClick={() => mutation.mutate({ name: 'Sophea', gpa: 3.8 })}>\n      {mutation.isPending ? 'Saving...' : 'Add Student'}\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "useMutation with Cache Invalidation"
      },
      {
        "id": "m15-07",
        "number": "07",
        "title": "Loading and Error States",
        "summary": "Granular status flags: isPending, isFetching, isError, isSuccess.",
        "explanation": "`isPending` indicates initial load with no cached data; `isFetching` indicates background revalidation even if cached data is already visible.",
        "keyPoints": [
          "Display subtle background fetching spinners while showing cached data."
        ],
        "codeSnippet": "const { data, isPending, isFetching } = useQuery(...);\n// isPending: True on first fetch (show skeleton)\n// isFetching: True during background refresh (show subtle top indicator)",
        "codeLanguage": "tsx",
        "codeTitle": "isPending vs isFetching"
      },
      {
        "id": "m15-08",
        "number": "08",
        "title": "Stale Time vs Garbage Collection Time",
        "summary": "Fine-tuning cache lifetime with staleTime and gcTime.",
        "explanation": "`staleTime` determines how long data is considered fresh before needing a background refresh. `gcTime` determines how long inactive data stays in memory before being evicted.",
        "keyPoints": [
          "Default `staleTime` is 0 (data immediately considered stale).",
          "Set `staleTime: 60_000` for data that changes infrequently."
        ],
        "codeSnippet": "const { data } = useQuery({\n  queryKey: ['systemConfig'],\n  queryFn: fetchConfig,\n  staleTime: 1000 * 60 * 30, // 30 minutes\n  gcTime: 1000 * 60 * 60,    // 1 hour\n});",
        "codeLanguage": "tsx",
        "codeTitle": "staleTime and gcTime Configuration"
      },
      {
        "id": "m15-09",
        "number": "09",
        "title": "Pagination with keepPreviousData",
        "summary": "Seamless table pagination without page flickering.",
        "explanation": "Using `placeholderData: keepPreviousData` keeps the old page visible while the next page fetches in the background, preventing layout jumps.",
        "keyPoints": [
          "Eliminates jarring layout shifts during table pagination."
        ],
        "codeSnippet": "import { keepPreviousData, useQuery } from '@tanstack/react-query';\n\nconst { data: pageData, isPlaceholderData } = useQuery({\n  queryKey: ['students', page],\n  queryFn: () => studentService.getPage(page),\n  placeholderData: keepPreviousData,\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Smooth Pagination with keepPreviousData"
      },
      {
        "id": "m15-10",
        "number": "10",
        "title": "Infinite Queries (useInfiniteQuery)",
        "summary": "Building 'Load More' buttons and infinite scroll feeds.",
        "explanation": "Manages paginated data as an array of pages, providing `fetchNextPage` and `hasNextPage` flags.",
        "keyPoints": [
          "Pairs with intersection observer for infinite scroll."
        ],
        "codeSnippet": "const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({\n  queryKey: ['feed'],\n  queryFn: ({ pageParam = 1 }) => fetchFeed(pageParam),\n  getNextPageParam: (lastPage) => lastPage.nextPage,\n  initialPageParam: 1,\n});",
        "codeLanguage": "tsx",
        "codeTitle": "useInfiniteQuery Hook"
      },
      {
        "id": "m15-11",
        "number": "11",
        "title": "Optimistic Updates",
        "summary": "Instantly updating the UI before server confirmation.",
        "explanation": "Update the local query cache immediately when the user clicks an action (e.g. toggling a like or checking a todo). If the server request fails, rollback to the snapshot!",
        "keyPoints": [
          "Creates instantaneous, zero-latency user experience.",
          "Always save previous cache snapshot in `onMutate` for rollback."
        ],
        "codeSnippet": "const toggleMutation = useMutation({\n  mutationFn: todoService.toggle,\n  onMutate: async (todoId) => {\n    await queryClient.cancelQueries({ queryKey: ['todos'] });\n    const previousTodos = queryClient.getQueryData(['todos']);\n\n    // Optimistically update cache:\n    queryClient.setQueryData(['todos'], (old: Todo[] = []) =>\n      old.map(t => t.id === todoId ? { ...t, completed: !t.completed } : t)\n    );\n\n    return { previousTodos }; // Context for rollback\n  },\n  onError: (err, newTodo, context) => {\n    // Rollback to previous state on error!\n    queryClient.setQueryData(['todos'], context?.previousTodos);\n  },\n  onSettled: () => {\n    queryClient.invalidateQueries({ queryKey: ['todos'] });\n  },\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Complete Optimistic Update Pattern"
      },
      {
        "id": "m15-12",
        "number": "12",
        "title": "Query Invalidation",
        "summary": "Targeted cache busting after mutations.",
        "explanation": "Marking queries as invalid causes them to refetch if they are currently active on screen.",
        "keyPoints": [
          "Use exact or prefix matching."
        ],
        "codeSnippet": "queryClient.invalidateQueries({ queryKey: ['todos'] });",
        "codeLanguage": "tsx",
        "codeTitle": "Invalidating Query Cache"
      },
      {
        "id": "m15-13",
        "number": "13",
        "title": "TanStack DevTools",
        "summary": "Visualizing query cache, stale states, and mutations.",
        "explanation": "The TanStack Query Devtools floating panel displays all cached queries, their data, fetch state, and provides buttons to trigger manual refetch or cache clearing.",
        "keyPoints": [
          "Included in dev builds only; stripped in production."
        ],
        "codeSnippet": "import { ReactQueryDevtools } from '@tanstack/react-query-devtools';\n\n<QueryClientProvider client={queryClient}>\n  <App />\n  <ReactQueryDevtools initialIsOpen={false} />\n</QueryClientProvider>",
        "codeLanguage": "tsx",
        "codeTitle": "Integrating ReactQueryDevtools"
      }
    ]
  },
  {
    "id": "module-16",
    "number": "16",
    "title": "Context API",
    "category": "State & Architecture",
    "summary": "Context API mechanics, createContext, Provider, useContext, avoiding prop drilling, authentication context, theme context, and limitations.",
    "iconName": "Share2",
    "topics": [
      {
        "id": "m16-01",
        "number": "01",
        "title": "What is Context?",
        "summary": "React's native mechanism for broadcasting data across the component tree.",
        "explanation": "Context provides a way to pass data through the component tree without having to pass props down manually at every single level.",
        "keyPoints": [
          "Built directly into React; requires no external dependencies.",
          "Designed for low-frequency global data: themes, authenticated user, locale."
        ],
        "codeSnippet": "import { createContext, useContext } from 'react';",
        "codeLanguage": "tsx",
        "codeTitle": "Context Imports"
      },
      {
        "id": "m16-02",
        "number": "02",
        "title": "createContext",
        "summary": "Instantiating a context object with fallback defaults.",
        "explanation": "`const MyContext = createContext(defaultValue)` creates the context container.",
        "keyPoints": [
          "The default value is only used if a component consumes context outside a Provider."
        ],
        "codeSnippet": "interface ThemeContextType {\n  theme: 'light' | 'dark';\n  toggleTheme: () => void;\n}\n\nexport const ThemeContext = createContext<ThemeContextType | undefined>(undefined);",
        "codeLanguage": "tsx",
        "codeTitle": "Declaring Context with TypeScript"
      },
      {
        "id": "m16-03",
        "number": "03",
        "title": "Context Provider",
        "summary": "Supplying values to the subtree using <Context.Provider value={...}>.",
        "explanation": "Every Context object comes with a Provider React component that accepts a `value` prop to be consumed by descendant components.",
        "keyPoints": [
          "All consumers re-render whenever the Provider's `value` prop changes."
        ],
        "codeSnippet": "export function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const [theme, setTheme] = useState<'light' | 'dark'>('dark');\n  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      <div className={theme}>{children}</div>\n    </ThemeContext.Provider>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Custom Context Provider Component"
      },
      {
        "id": "m16-04",
        "number": "04",
        "title": "useContext",
        "summary": "Consuming context in functional components.",
        "explanation": "The `useContext(MyContext)` hook returns the current value passed to the nearest matching Provider above in the tree.",
        "keyPoints": [
          "Always create a custom hook wrapper (e.g. `useTheme()`) with safety checks."
        ],
        "codeSnippet": "export function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) {\n    throw new Error('useTheme must be used within a ThemeProvider');\n  }\n  return context;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Safe Custom Context Hook"
      },
      {
        "id": "m16-05",
        "number": "05",
        "title": "Sharing Global Data",
        "summary": "Broadcasting settings, preferences, and configurations.",
        "explanation": "Allows distant child components to read and update shared state.",
        "keyPoints": [
          "Ideal for app-wide settings that rarely change."
        ],
        "codeSnippet": "export function ThemeToggle() {\n  const { theme, toggleTheme } = useTheme();\n  return <button onClick={toggleTheme}>Active Theme: {theme}</button>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Consuming Context in Child"
      },
      {
        "id": "m16-06",
        "number": "06",
        "title": "Authentication Context",
        "summary": "Full authentication session context pattern.",
        "explanation": "Managing current user profile, token status, login, and logout handlers in a global AuthProvider.",
        "keyPoints": [
          "Widely used in production SPA applications."
        ],
        "codeSnippet": "interface AuthContextType {\n  user: User | null;\n  isAuthenticated: boolean;\n  login: (credentials: Credentials) => Promise<void>;\n  logout: () => void;\n}\n\nexport const AuthContext = createContext<AuthContextType | undefined>(undefined);",
        "codeLanguage": "tsx",
        "codeTitle": "Authentication Context Interface"
      },
      {
        "id": "m16-07",
        "number": "07",
        "title": "Avoiding Prop Drilling",
        "summary": "Comparing prop drilling vs context solutions.",
        "explanation": "Context completely eliminates passing props through intermediary components that don't need them.",
        "keyPoints": [
          "Leaf nodes access context directly."
        ],
        "codeSnippet": "// Intermediary components don't touch auth props!\n<AuthProvider>\n  <AppLayout>\n    <Sidebar />\n    <MainContent>\n      <UserAvatar /> {/* Consumes useAuth() directly */}\n    </MainContent>\n  </AppLayout>\n</AuthProvider>",
        "codeLanguage": "tsx",
        "codeTitle": "Eliminating Prop Drilling with Context"
      },
      {
        "id": "m16-08",
        "number": "08",
        "title": "Context Performance Pitfall",
        "summary": "Every consumer re-renders on any value update.",
        "explanation": "If you put an object with 10 properties in context and update just 1 property, EVERY component calling `useContext` re-renders, even if it only uses an unchanged property!",
        "keyPoints": [
          "Split unrelated state into separate contexts (e.g. `ThemeContext` vs `AuthContext`).",
          "For high-frequency updates, use Zustand selectors instead."
        ],
        "codeSnippet": "// ⚠️ Bad: Bundling high-frequency state with low-frequency state:\n// <BigContext.Provider value={{ user, timerSeconds, theme, searchResults }}>\n\n// ✅ Good: Split contexts by concern:\n// <AuthProvider><ThemeProvider><App /></ThemeProvider></AuthProvider>",
        "codeLanguage": "tsx",
        "codeTitle": "Context Splitting Strategy",
        "pitfall": "Using Context for high-frequency state (like an animation frame, mouse position, or rapidly typing text) will cause massive re-renders across the entire tree."
      },
      {
        "id": "m16-09",
        "number": "09",
        "title": "Memoizing Context Values",
        "summary": "Preventing unnecessary consumer re-renders with useMemo.",
        "explanation": "Wrap the context value object in `useMemo` so its object reference remains stable unless dependencies change.",
        "keyPoints": [
          "Prevents re-renders caused by parent re-renders."
        ],
        "codeSnippet": "export function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = useState<User | null>(null);\n\n  // Memoize value to stabilize object reference:\n  const value = useMemo(() => ({\n    user,\n    isAuthenticated: !!user,\n  }), [user]);\n\n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Memoizing Provider Value"
      },
      {
        "id": "m16-10",
        "number": "10",
        "title": "Context Best Practices",
        "summary": "Rules for safe context consumption and clean provider architectures.",
        "explanation": "1) Keep providers close to where they are needed; 2) Wrap with safety custom hooks; 3) Split distinct concerns.",
        "keyPoints": [
          "Never use context for state that belongs locally."
        ],
        "codeSnippet": "// Golden Rule: If state is only used in one branch of the tree,\n// mount the Provider at that branch, NOT at the application root!",
        "codeLanguage": "tsx",
        "codeTitle": "Localized Provider Placement"
      },
      {
        "id": "m16-11",
        "number": "11",
        "title": "Context Limitations",
        "summary": "Why large apps transition from Context to Zustand or Redux.",
        "explanation": "Context lacks fine-grained selectors and middleware. When state updates frequently, external libraries with selector subscriptions provide vastly superior performance.",
        "keyPoints": [
          "Context = Dependency Injection tool; Zustand = State Management tool."
        ],
        "codeSnippet": "/*\nUse Context for: Low-frequency, broad data (Theme, Auth, Language).\nUse Zustand for: High-frequency, complex, or modular state (Cart, Filters, Media Player).\n*/",
        "codeLanguage": "tsx",
        "codeTitle": "Context vs External State Library"
      }
    ]
  },
  {
    "id": "module-17",
    "number": "17",
    "title": "State Management (Zustand)",
    "category": "State & Architecture",
    "summary": "Zustand introduction, creating stores, reading state, actions, selectors, persist middleware, and enterprise state architecture.",
    "iconName": "Cpu",
    "topics": [
      {
        "id": "m17-01",
        "number": "01",
        "title": "Client State vs Server State",
        "summary": "Defining the role of Zustand alongside TanStack Query.",
        "explanation": "Modern React architecture delegates server caching to TanStack Query, and client-only state (shopping cart, audio player, modal manager, drawer status) to Zustand.",
        "keyPoints": [
          "Do NOT duplicate server data inside Zustand stores.",
          "Keep stores lean, synchronous, and focused on UI state."
        ],
        "codeSnippet": "// Server Data -> TanStack Query (Query cache)\n// Client UI State -> Zustand (Global store)",
        "codeLanguage": "tsx",
        "codeTitle": "Modern Separation of State Responsibilities"
      },
      {
        "id": "m17-02",
        "number": "02",
        "title": "When to Use Context vs Zustand",
        "summary": "Choosing the right tool for state scope and update frequency.",
        "explanation": "Use Context for static/low-frequency data. Use Zustand when you need fine-grained selector subscriptions that only re-render components when specific chosen properties change.",
        "keyPoints": [
          "Zustand requires NO Provider wrapping; access stores anywhere!"
        ],
        "codeSnippet": "npm install zustand",
        "codeLanguage": "tsx",
        "codeTitle": "Installing Zustand"
      },
      {
        "id": "m17-03",
        "number": "03",
        "title": "Zustand Introduction",
        "summary": "Small, fast, scalable bearbones state management.",
        "explanation": "Zustand is a minimalistic state management solution based on simplified flux principles. It has a tiny footprint (<1kb), zero boilerplate, and doesn't require wrapping your app in Providers.",
        "keyPoints": [
          "Direct hook-based access.",
          "Selective re-rendering via selector functions.",
          "Full TypeScript support with auto-inference."
        ],
        "codeSnippet": "import { create } from 'zustand';\n\ninterface CounterState {\n  count: number;\n  increment: () => void;\n  reset: () => void;\n}\n\nexport const useCounterStore = create<CounterState>((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  reset: () => set({ count: 0 }),\n}));",
        "codeLanguage": "tsx",
        "codeTitle": "Basic Zustand Store",
        "interactiveDemoKey": "ZustandDemo"
      },
      {
        "id": "m17-04",
        "number": "04",
        "title": "Creating a Store",
        "summary": "Defining state variables and updater actions inside create().",
        "explanation": "In Zustand, state and actions are colocated inside the store definition. The `set` function merges state updates shallowly.",
        "keyPoints": [
          "`set()` automatically merges state at the top level."
        ],
        "codeSnippet": "export const useUIStore = create<UIState>((set) => ({\n  isSidebarOpen: false,\n  activeModal: null,\n  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),\n  openModal: (modalName) => set({ activeModal: modalName }),\n  closeModal: () => set({ activeModal: null }),\n}));",
        "codeLanguage": "tsx",
        "codeTitle": "Colocating State and Actions"
      },
      {
        "id": "m17-05",
        "number": "05",
        "title": "Reading Store State",
        "summary": "Accessing values inside functional components.",
        "explanation": "Components invoke the store hook: `const isSidebarOpen = useUIStore(state => state.isSidebarOpen)`.",
        "keyPoints": [
          "Always pass a selector to avoid subscribing to the entire store."
        ],
        "codeSnippet": "export function SidebarToggle() {\n  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);\n  const toggleSidebar = useUIStore((state) => state.toggleSidebar);\n\n  return <button onClick={toggleSidebar}>{isSidebarOpen ? 'Close' : 'Open'}</button>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Consuming Zustand Store"
      },
      {
        "id": "m17-06",
        "number": "06",
        "title": "Selectors & Performance",
        "summary": "Preventing unnecessary renders with fine-grained selectors.",
        "explanation": "By selecting only `state.isSidebarOpen`, the component will NOT re-render if `activeModal` changes elsewhere in the store. This provides immense performance gains over Context.",
        "keyPoints": [
          "Components re-render ONLY when their selected slice changes."
        ],
        "codeSnippet": "// ✅ Optimal: Subscribes ONLY to 'itemsCount':\nconst count = useCartStore(state => state.items.length);\n\n// ❌ Suboptimal: Subscribes to ENTIRE store object:\n// const store = useCartStore(); // Re-renders on ANY change in store!",
        "codeLanguage": "tsx",
        "codeTitle": "Selector Subscription Pattern",
        "proTip": "Always use selectors like `state => state.property`. Never call `const store = useMyStore()` without a selector in performance-critical UI."
      },
      {
        "id": "m17-07",
        "number": "07",
        "title": "Updating Store State (set & get)",
        "summary": "Using set() and get() for complex state transitions.",
        "explanation": "The `get()` function allows reading other state properties inside an action without subscribing.",
        "keyPoints": [
          "Use `get()` to read current values during async flows."
        ],
        "codeSnippet": "export const useCartStore = create<CartState>((set, get) => ({\n  items: [],\n  addItem: (item) => {\n    const currentItems = get().items;\n    const existing = currentItems.find(i => i.id === item.id);\n    if (existing) {\n      set({\n        items: currentItems.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)\n      });\n    } else {\n      set({ items: [...currentItems, { ...item, qty: 1 }] });\n    }\n  },\n}));",
        "codeLanguage": "tsx",
        "codeTitle": "Using set and get in Actions"
      },
      {
        "id": "m17-08",
        "number": "08",
        "title": "Persisting State (persist middleware)",
        "summary": "Saving store state to localStorage automatically.",
        "explanation": "Zustand includes a built-in `persist` middleware that synchronizes store slices with `localStorage` or `sessionStorage`.",
        "keyPoints": [
          "Automatic hydration on page reload.",
          "Use `partialize` to choose which fields to persist."
        ],
        "codeSnippet": "import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nexport const useCartStore = create<CartStore>()(\n  persist(\n    (set) => ({\n      cartItems: [],\n      addToCart: (item) => set((s) => ({ cartItems: [...s.cartItems, item] })),\n      clearCart: () => set({ cartItems: [] }),\n    }),\n    {\n      name: 'react-course-cart-storage', // localStorage key\n    }\n  )\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Zustand with persist Middleware"
      },
      {
        "id": "m17-09",
        "number": "09",
        "title": "Accessing State Outside Components",
        "summary": "Reading and writing store data in vanilla JS, API interceptors, and utils.",
        "explanation": "Because Zustand stores are standard JavaScript objects, you can read or update them anywhere in your codebase without React hooks!",
        "keyPoints": [
          "Use `useStore.getState()` and `useStore.setState()` outside React."
        ],
        "codeSnippet": "// In an Axios interceptor or pure utility file:\nimport { useAuthStore } from '@/store/authStore';\n\n// Read token without React:\nconst token = useAuthStore.getState().token;\n\n// Update state directly outside components:\nuseAuthStore.getState().logout();",
        "codeLanguage": "tsx",
        "codeTitle": "Zustand Outside React Components"
      },
      {
        "id": "m17-10",
        "number": "10",
        "title": "DevTools Middleware",
        "summary": "Integrating with Redux DevTools browser extension.",
        "explanation": "Wrap your store in `devtools()` to inspect time-travel state changes in Redux DevTools.",
        "keyPoints": [
          "Named actions appear in DevTools timeline."
        ],
        "codeSnippet": "import { devtools } from 'zustand/middleware';\n\nexport const useStore = create<MyState>()(\n  devtools((set) => ({\n    // actions...\n  }))\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Zustand DevTools Middleware"
      },
      {
        "id": "m17-11",
        "number": "11",
        "title": "Zustand + React 19",
        "summary": "Concurrent rendering and useSyncExternalStore integration.",
        "explanation": "Zustand internally uses `useSyncExternalStore` to guarantee zero visual tearing during concurrent renders in React 18 and 19.",
        "keyPoints": [
          "Completely safe for concurrent mode."
        ],
        "codeSnippet": "// Zustand is built natively on React's useSyncExternalStore API.",
        "codeLanguage": "tsx",
        "codeTitle": "Concurrent Safety Guarantee"
      },
      {
        "id": "m17-12",
        "number": "12",
        "title": "State Management Architecture",
        "summary": "Organizing multiple stores in large applications.",
        "explanation": "Divide stores by domain: `useCartStore`, `useAuthStore`, `useUIStore`. Avoid creating a giant single monolithic store.",
        "keyPoints": [
          "Modular domain stores keep logic cleanly isolated."
        ],
        "codeSnippet": "src/store/\n├── useAuthStore.ts\n├── useCartStore.ts\n├── useUIStore.ts\n└── useCourseProgressStore.ts",
        "codeLanguage": "tsx",
        "codeTitle": "Modular Store Architecture"
      }
    ]
  },
  {
    "id": "module-18",
    "number": "18",
    "title": "React Performance",
    "category": "Enterprise & Production",
    "summary": "React rendering mechanics, re-render profiling, React.memo, useMemo, useCallback, large list virtualization, code splitting, and React Profiler.",
    "iconName": "Gauge",
    "topics": [
      {
        "id": "m18-01",
        "number": "01",
        "title": "React Rendering",
        "summary": "How and why React renders components.",
        "explanation": "Rendering is React calling your component function to obtain the new JSX element tree. A component re-renders when: 1) Its state changes; 2) Its parent re-renders; 3) A context it consumes changes.",
        "keyPoints": [
          "A parent re-render automatically re-renders ALL its children by default, even if their props didn't change!",
          "Rendering is not the same as DOM painting; if JSX output is identical, no DOM mutation occurs."
        ],
        "codeSnippet": "// When Parent re-renders, Child re-renders by default:\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Increment</button>\n      <ExpensiveChild /> {/* Re-renders on every click unless memoized! */}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Default Cascade Re-render Behavior"
      },
      {
        "id": "m18-02",
        "number": "02",
        "title": "React.memo",
        "summary": "Skipping component re-renders when props are shallowly equal.",
        "explanation": "`React.memo` wraps a component function and memoizes its rendered output. If props are shallowly equal to the previous render, React skips calling the component function entirely.",
        "keyPoints": [
          "Performs shallow equality check (`Object.is`) on every prop.",
          "Fails to prevent re-renders if you pass un-memoized object literals or inline functions as props!"
        ],
        "codeSnippet": "import React from 'react';\n\nexport const ExpensiveTableRow = React.memo(function TableRow({ item }: { item: Student }) {\n  // Only re-renders if 'item' reference changes!\n  return <tr><td>{item.name}</td><td>{item.gpa}</td></tr>;\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Memoizing Component with React.memo"
      },
      {
        "id": "m18-03",
        "number": "03",
        "title": "useMemo",
        "summary": "Caching the result of expensive calculations.",
        "explanation": "`useMemo(() => computeExpensiveValue(a, b), [a, b])` caches the calculated value and recalculates only when dependencies change.",
        "keyPoints": [
          "Use for heavy filtering, sorting, or complex mathematical transformations on large arrays.",
          "Do not overuse on cheap calculations; `useMemo` itself has memory and comparison overhead."
        ],
        "codeSnippet": "// Only re-calculates filtered items when 'query' or 'items' changes:\nconst filteredStudents = useMemo(() => {\n  return items.filter(item => \n    item.name.toLowerCase().includes(query.toLowerCase())\n  );\n}, [items, query]);",
        "codeLanguage": "tsx",
        "codeTitle": "useMemo for Array Filtering"
      },
      {
        "id": "m18-04",
        "number": "04",
        "title": "useCallback",
        "summary": "Caching function definitions between renders.",
        "explanation": "`useCallback(fn, deps)` returns a memoized version of the callback function with a stable reference across renders. Essential when passing callbacks to `React.memo` child components.",
        "keyPoints": [
          "`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.",
          "Prevents child re-renders caused by passing freshly recreated function instances."
        ],
        "codeSnippet": "// Stable function reference passed to memoized child:\nconst handleDelete = useCallback((id: string) => {\n  setStudents(prev => prev.filter(s => s.id !== id));\n}, []); // Empty deps because functional setter is used!\n\nreturn <MemoizedStudentTable onDelete={handleDelete} />;",
        "codeLanguage": "tsx",
        "codeTitle": "useCallback with Functional Setter"
      },
      {
        "id": "m18-05",
        "number": "05",
        "title": "Preventing Unnecessary Renders",
        "summary": "Architectural techniques that eliminate the need for memoization.",
        "explanation": "You can often eliminate re-renders by moving state down or lifting JSX up as `children`, completely avoiding manual `useMemo` or `React.memo` calls.",
        "keyPoints": [
          "Move state into dedicated leaf components.",
          "Pass static trees as `{children}`."
        ],
        "codeSnippet": "// Moving state down into dedicated component:\nexport function App() {\n  return (\n    <div>\n      <InputWithState /> {/* Only this small input re-renders as user types */}\n      <VeryExpensiveTree /> {/* Never re-renders when user types! */}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "State Down Optimization Pattern"
      },
      {
        "id": "m18-06",
        "number": "06",
        "title": "Large List Optimization (Virtualization)",
        "summary": "Rendering only visible DOM rows using virtual windowing.",
        "explanation": "When rendering lists of 10,000+ items, creating 10,000 DOM elements crashes browser memory. Virtualization libraries (like `@tanstack/react-virtual`) render only the 15-20 rows currently visible in the scroll viewport.",
        "keyPoints": [
          "Maintains 60fps scrolling on massive datasets.",
          "DOM contains only visible elements + small buffer."
        ],
        "codeSnippet": "// Virtualized windowing:\n// Total rows: 50,000\n// Rendered DOM elements: 20 visible + 5 buffer = 25 nodes total!",
        "codeLanguage": "tsx",
        "codeTitle": "Virtual List Concept"
      },
      {
        "id": "m18-07",
        "number": "07",
        "title": "Lazy Loading & Code Splitting",
        "summary": "Splitting bundle into on-demand chunks with React.lazy and Suspense.",
        "explanation": "Allows deferring the loading of heavy components (like rich text editors, charts, or modal dialogs) until the user actually requests them.",
        "keyPoints": [
          "Significantly reduces initial page load JavaScript size (First Contentful Paint)."
        ],
        "codeSnippet": "import React, { Suspense, useState } from 'react';\n\nconst HeavyChart = React.lazy(() => import('./HeavyAnalyticsChart'));\n\nexport function AnalyticsDashboard() {\n  const [showChart, setShowChart] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setShowChart(true)}>Show Chart</button>\n      {showChart && (\n        <Suspense fallback={<div className=\"h-64 animate-pulse bg-slate-800\" />}>\n          <HeavyChart />\n        </Suspense>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "On-demand Lazy Component Loading"
      },
      {
        "id": "m18-08",
        "number": "08",
        "title": "React Profiler",
        "summary": "Identifying slow renders and commit timelines in React DevTools.",
        "explanation": "The React Profiler records render duration and flame graphs, showing exactly which component rendered, why it rendered, and how long it took.",
        "keyPoints": [
          "Use 'Record why each component rendered while profiling' in DevTools settings."
        ],
        "codeSnippet": "// Use the Profiler component programmatically if needed:\nimport { Profiler } from 'react';\n\n<Profiler id=\"CourseTable\" onRender={(id, phase, actualDuration) => {\n  console.log(`${id} [${phase}] took ${actualDuration}ms`);\n}}>\n  <CourseTable />\n</Profiler>",
        "codeLanguage": "tsx",
        "codeTitle": "React Profiler API"
      },
      {
        "id": "m18-09",
        "number": "09",
        "title": "Performance Best Practices",
        "summary": "Checklist for maintaining 60fps React applications.",
        "explanation": "1) Measure before optimizing (premature optimization is the root of all evil); 2) Colocate state; 3) Use pagination/virtualization; 4) Optimize images; 5) Lazy-load heavy routes.",
        "keyPoints": [
          "Always test with CPU throttling (4x / 6x slowdown) in DevTools."
        ],
        "codeSnippet": "// 1. Don't optimize until you measure bottlenecks.\n// 2. Colocate state before reaching for memo/useCallback.\n// 3. Virtualize lists > 100 items.",
        "codeLanguage": "tsx",
        "codeTitle": "Performance Golden Rules"
      },
      {
        "id": "m18-10",
        "number": "10",
        "title": "Debouncing and Throttling",
        "summary": "Controlling high-frequency event execution.",
        "explanation": "Debounce delays execution until silence; Throttle limits execution to at most once per time window.",
        "keyPoints": [
          "Debounce: Search inputs; Throttle: Window scroll / resize."
        ],
        "codeSnippet": "// Debounced handler:\nconst debouncedSearch = useMemo(\n  () => debounce((val: string) => api.search(val), 300),\n  []\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Debounced API Handler"
      },
      {
        "id": "m18-11",
        "number": "11",
        "title": "Web Vitals in React",
        "summary": "LCP, FID/INP, and CLS metrics.",
        "explanation": "Core Web Vitals measure real-world user experience. Cumulative Layout Shift (CLS) is prevented by skeleton dimensions; Interaction to Next Paint (INP) is improved by non-blocking transitions.",
        "keyPoints": [
          "Use `startTransition` in React 18/19 for non-urgent UI updates."
        ],
        "codeSnippet": "import { startTransition } from 'react';\n\n// Non-urgent update won't block typing input:\nstartTransition(() => {\n  setFilteredResults(heavyCalculation(query));\n});",
        "codeLanguage": "tsx",
        "codeTitle": "startTransition for Responsive INP"
      },
      {
        "id": "m18-12",
        "number": "12",
        "title": "Bundle Size Optimization",
        "summary": "Analyzing bundle chunks and tree-shaking.",
        "explanation": "Import specific modules (`import { Check } from 'lucide-react'`) rather than entire library bundles. Use `@next/bundle-analyzer` to inspect production JS sizes.",
        "keyPoints": [
          "Avoid importing massive monolithic libraries like moment.js."
        ],
        "codeSnippet": "// ❌ Bad: Imports entire package\n// import * as Icons from 'lucide-react';\n\n// ✅ Good: Tree-shakable named imports\nimport { Check, AlertCircle } from 'lucide-react';",
        "codeLanguage": "tsx",
        "codeTitle": "Tree-shakable Module Imports"
      }
    ]
  },
  {
    "id": "module-19",
    "number": "19",
    "title": "Advanced Components",
    "category": "Enterprise & Production",
    "summary": "Reusable UI component architecture, compound components, render props, headless components, modal dialogs, dropdowns, and data tables.",
    "iconName": "Boxes",
    "topics": [
      {
        "id": "m19-01",
        "number": "01",
        "title": "Reusable UI Components",
        "summary": "Designing enterprise component libraries inspired by Shadcn UI and Radix.",
        "explanation": "Modern UI architecture separates visual styling (Tailwind CSS) from accessible primitives. Components expose accessible ARIA roles, keyboard navigation, and customizable slots.",
        "keyPoints": [
          "Follow WAI-ARIA authoring practices.",
          "Allow consumers to inject custom classNames via `cn()` utility."
        ],
        "codeSnippet": "// Example Shadcn-inspired Badge:\nimport { cva, type VariantProps } from \"class-variance-authority\";\n\nexport const badgeVariants = cva(\n  \"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors\",\n  {\n    variants: {\n      variant: {\n        default: \"bg-blue-600 text-white\",\n        secondary: \"bg-slate-800 text-slate-300\",\n        destructive: \"bg-rose-600 text-white\",\n        outline: \"border border-slate-700 text-slate-300\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n    },\n  }\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Class Variance Authority (CVA) Component Pattern"
      },
      {
        "id": "m19-02",
        "number": "02",
        "title": "Compound Components",
        "summary": "Flexible multi-part component APIs that share implicit state.",
        "explanation": "Compound components work together as a cohesive unit (like `<select>` and `<option>`). Examples include `<Tabs>`, `<Tabs.List>`, `<Tabs.Trigger>`, and `<Tabs.Content>`. They communicate via an internal React Context.",
        "keyPoints": [
          "Provides consumers with complete layout flexibility.",
          "Eliminates prop-drilling within the widget."
        ],
        "codeSnippet": "// Usage of Compound Tabs:\n<Tabs defaultValue=\"overview\">\n  <TabsList>\n    <TabsTrigger value=\"overview\">Overview</TabsTrigger>\n    <TabsTrigger value=\"curriculum\">Curriculum</TabsTrigger>\n  </TabsList>\n  <TabsContent value=\"overview\">Overview Details</TabsContent>\n  <TabsContent value=\"curriculum\">Curriculum List</TabsContent>\n</Tabs>",
        "codeLanguage": "tsx",
        "codeTitle": "Compound Component Pattern Usage"
      },
      {
        "id": "m19-03",
        "number": "03",
        "title": "Implementing Compound Components",
        "summary": "Building internal context and sub-component exports.",
        "explanation": "Create an internal context to share the active value and setter between the parent container and child triggers.",
        "keyPoints": [
          "Sub-components can be attached as static properties or named exports."
        ],
        "codeSnippet": "const TabsContext = createContext<{ active: string; setActive: (v: string) => void } | null>(null);\n\nexport function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {\n  const [active, setActive] = useState(defaultValue);\n  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;\n}\n\nexport function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {\n  const ctx = useContext(TabsContext)!;\n  const isSelected = ctx.active === value;\n  return (\n    <button \n      onClick={() => ctx.setActive(value)}\n      className={isSelected ? \"border-b-2 border-blue-500 font-bold\" : \"text-slate-400\"}\n    >\n      {children}\n    </button>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Compound Component Implementation"
      },
      {
        "id": "m19-04",
        "number": "04",
        "title": "Render Props",
        "summary": "Sharing rendering logic by passing a function as children.",
        "explanation": "A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.",
        "keyPoints": [
          "Precursor to custom hooks, still valuable for template customization."
        ],
        "codeSnippet": "export function MouseTracker({ render }: { render: (pos: { x: number; y: number }) => React.ReactNode }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  return (\n    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>\n      {render(pos)}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Render Props Pattern"
      },
      {
        "id": "m19-05",
        "number": "05",
        "title": "Headless Components",
        "summary": "Unstyled accessible logic components.",
        "explanation": "Headless UI libraries (Radix UI, Headless UI) provide 100% accessible keyboard navigation, focus trapping, and ARIA attributes with 0% CSS, allowing you to style freely with Tailwind CSS.",
        "keyPoints": [
          "Total styling freedom without reinventing accessibility."
        ],
        "codeSnippet": "// Radix UI Headless Dialog wrapped in Tailwind:\nimport * as Dialog from '@radix-ui/react-dialog';\n\nexport function Modal({ isOpen, onClose, title, children }: ModalProps) {\n  return (\n    <Dialog.Root open={isOpen} onOpenChange={onClose}>\n      <Dialog.Portal>\n        <Dialog.Overlay className=\"fixed inset-0 bg-black/70 backdrop-blur-sm\" />\n        <Dialog.Content className=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-lg w-full\">\n          <Dialog.Title className=\"text-xl font-bold text-white\">{title}</Dialog.Title>\n          {children}\n        </Dialog.Content>\n      </Dialog.Portal>\n    </Dialog.Root>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Headless Modal Component"
      },
      {
        "id": "m19-06",
        "number": "06",
        "title": "Modal / Dialog Component",
        "summary": "Portals, backdrop blur, focus trapping, and Esc key dismissal.",
        "explanation": "Modals must render via `createPortal` into `document.body` so that parent `overflow: hidden` or `z-index` stacking contexts do not clip the dialog.",
        "keyPoints": [
          "Always use `createPortal`.",
          "Trap keyboard focus inside the modal while open.",
          "Restore body scroll when closed."
        ],
        "codeSnippet": "import { createPortal } from 'react-dom';\n\nexport function PortalModal({ isOpen, onClose, children }: ModalProps) {\n  if (!isOpen) return null;\n  return createPortal(\n    <div className=\"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80\">\n      <div className=\"bg-slate-900 p-6 rounded-xl border border-slate-800 max-w-md w-full\">\n        {children}\n      </div>\n    </div>,\n    document.body\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "React Portal Modal"
      },
      {
        "id": "m19-07",
        "number": "07",
        "title": "Dropdown Menu Component",
        "summary": "Click outside dismissal and keyboard arrow navigation.",
        "explanation": "Dropdowns toggle on click, listen for outside clicks to auto-close, and support arrow key item selection.",
        "keyPoints": [
          "Use mousedown listener on `document` to detect clicks outside."
        ],
        "codeSnippet": "export function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {\n  useEffect(() => {\n    const listener = (event: MouseEvent | TouchEvent) => {\n      if (!ref.current || ref.current.contains(event.target as Node)) return;\n      handler();\n    };\n    document.addEventListener('mousedown', listener);\n    return () => document.removeEventListener('mousedown', listener);\n  }, [ref, handler]);\n}",
        "codeLanguage": "tsx",
        "codeTitle": "useClickOutside Custom Hook"
      },
      {
        "id": "m19-08",
        "number": "08",
        "title": "Tabs Component",
        "summary": "Accessible tablist, tab, and tabpanel ARIA semantics.",
        "explanation": "Complies with accessibility standards: `role=\"tablist\"`, `role=\"tab\"`, `aria-selected`, and arrow key tab switching.",
        "keyPoints": [
          "Keyboard left/right arrows switch active tab."
        ],
        "codeSnippet": "<div role=\"tablist\" className=\"flex border-b border-slate-800\">\n  <button role=\"tab\" aria-selected={active === 'code'} onClick={() => setActive('code')}>\n    Code\n  </button>\n</div>",
        "codeLanguage": "tsx",
        "codeTitle": "Accessible Tab ARIA Attributes"
      },
      {
        "id": "m19-09",
        "number": "09",
        "title": "Data Table Component",
        "summary": "Reusable data tables with sorting, filtering, and selection.",
        "explanation": "Abstracts table headers, column configurations, sorting state, and row rendering into a reusable component.",
        "keyPoints": [
          "Powers enterprise management dashboards."
        ],
        "codeSnippet": "interface Column<T> {\n  header: string;\n  accessorKey: keyof T;\n  render?: (item: T) => React.ReactNode;\n}\n\nexport function DataTable<T extends { id: string }>({ data, columns }: { data: T[]; columns: Column<T>[] }) {\n  return (\n    <table className=\"w-full text-left text-sm text-slate-300\">\n      <thead className=\"bg-slate-900 border-b border-slate-800 text-xs uppercase text-slate-400\">\n        <tr>{columns.map(c => <th key={String(c.accessorKey)} className=\"p-3\">{c.header}</th>)}</tr>\n      </thead>\n      <tbody className=\"divide-y divide-slate-800\">\n        {data.map(row => (\n          <tr key={row.id}>\n            {columns.map(c => (\n              <td key={String(c.accessorKey)} className=\"p-3\">\n                {c.render ? c.render(row) : String(row[c.accessorKey])}\n              </td>\n            ))}\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Generic Reusable DataTable Component"
      },
      {
        "id": "m19-10",
        "number": "10",
        "title": "Pagination Component",
        "summary": "Page numbers, ellipses, previous/next controls, and page size.",
        "explanation": "Displays `1, 2, ... 9, 10` pagination links and handles boundary clamping.",
        "keyPoints": [
          "Calculates total pages from `totalItems` and `pageSize`."
        ],
        "codeSnippet": "export function Pagination({ current, total, onChange }: PaginationProps) {\n  return (\n    <div className=\"flex items-center gap-2\">\n      <button disabled={current <= 1} onClick={() => onChange(current - 1)}>Prev</button>\n      <span>Page {current} of {total}</span>\n      <button disabled={current >= total} onClick={() => onChange(current + 1)}>Next</button>\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Pagination Component"
      },
      {
        "id": "m19-11",
        "number": "11",
        "title": "Toast Notification System",
        "summary": "Global toast notifications queue with auto-dismissal.",
        "explanation": "Display non-intrusive feedback toasts (Success, Error, Info) that stack and auto-dismiss after 4 seconds.",
        "keyPoints": [
          "Managed via Zustand store or React Sonner."
        ],
        "codeSnippet": "toast.success('Project 01 completed successfully!');",
        "codeLanguage": "tsx",
        "codeTitle": "Triggering Toasts"
      },
      {
        "id": "m19-12",
        "number": "12",
        "title": "Advanced Component Patterns",
        "summary": "Polymorphic components with the `as` prop.",
        "explanation": "Allows a component to render as a `<button>`, an `<a>` link, or a Next.js `<Link>` while preserving unified styling and TypeScript prop types.",
        "keyPoints": [
          "The `asChild` pattern popularized by Radix UI."
        ],
        "codeSnippet": "// Polymorphic button can render as an <a> link or <button>\n<Button as=\"a\" href=\"/curriculum\">Go to Curriculum</Button>",
        "codeLanguage": "tsx",
        "codeTitle": "Polymorphic Component Concept"
      }
    ]
  },
  {
    "id": "module-20",
    "number": "20",
    "title": "Authentication",
    "category": "Enterprise & Production",
    "summary": "JWT tokens, refresh tokens, HttpOnly cookies, protected routes, role-based access control (RBAC), and 401 interceptors.",
    "iconName": "ShieldCheck",
    "topics": [
      {
        "id": "m20-01",
        "number": "01",
        "title": "Authentication Concepts",
        "summary": "Authentication vs authorization, sessions vs JWT tokens.",
        "explanation": "Authentication proves WHO you are (e.g. valid credentials). Authorization determines WHAT you are permitted to do (e.g. Admin vs Student roles).",
        "keyPoints": [
          "JWT: JSON Web Token containing cryptographically signed user claims.",
          "Sessions: Stateful server-side session IDs stored in database."
        ],
        "codeSnippet": "// JWT Structure: header.payload.signature\n// Decoded payload contains: { sub: \"u123\", role: \"admin\", exp: 1735689600 }",
        "codeLanguage": "tsx",
        "codeTitle": "JWT Token Structure"
      },
      {
        "id": "m20-02",
        "number": "02",
        "title": "Login & Register UI",
        "summary": "Form design, password visibility toggles, and validation.",
        "explanation": "Build responsive, accessible login and registration interfaces with clear validation and loading indicators.",
        "keyPoints": [
          "Never store passwords in plain text."
        ],
        "codeSnippet": "export function LoginForm() {\n  const [showPassword, setShowPassword] = useState(false);\n  // Form submission with credentials...\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Login Interface Pattern"
      },
      {
        "id": "m20-03",
        "number": "03",
        "title": "Authentication State",
        "summary": "Managing current session, user profile, and token in memory.",
        "explanation": "Store the access token in memory or secure storage, with user profile metadata exposed to the application.",
        "keyPoints": [
          "Security rule: Avoid storing raw JWT tokens in localStorage if vulnerable to XSS."
        ],
        "codeSnippet": "interface AuthState {\n  user: UserProfile | null;\n  token: string | null;\n  isAuthenticated: boolean;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Auth State Shape"
      },
      {
        "id": "m20-04",
        "number": "04",
        "title": "Protected Routes & Layouts",
        "summary": "Preventing unauthorized access to private pages.",
        "explanation": "Gate entire layout route trees so that unauthenticated visitors are automatically forwarded to `/login`.",
        "keyPoints": [
          "Redirect preserves intended destination URL."
        ],
        "codeSnippet": "export function ProtectedLayout() {\n  const { isAuthenticated, isLoading } = useAuth();\n  if (isLoading) return <LoadingScreen />;\n  if (!isAuthenticated) return <Navigate to=\"/login\" replace />;\n  return <Outlet />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Protected Layout Route"
      },
      {
        "id": "m20-05",
        "number": "05",
        "title": "Access Tokens vs Refresh Tokens",
        "summary": "Short-lived access tokens (15m) + long-lived refresh tokens (7d).",
        "explanation": "Access tokens expire quickly to minimize the window of vulnerability if intercepted. The refresh token requests a new access token seamlessly without forcing the user to log in again.",
        "keyPoints": [
          "Access token: Sent in `Authorization: Bearer <token>` header.",
          "Refresh token: Sent to `/auth/refresh` endpoint."
        ],
        "codeSnippet": "// Token Lifecycle:\n// 1. User logs in -> Receives Access Token (15m) + Refresh Token (7d)\n// 2. Access Token expires -> App calls /refresh -> Receives new Access Token\n// 3. User remains logged in seamlessly!",
        "codeLanguage": "tsx",
        "codeTitle": "Token Rotation Lifecycle"
      },
      {
        "id": "m20-06",
        "number": "06",
        "title": "HttpOnly Cookies",
        "summary": "The most secure storage mechanism against XSS attacks.",
        "explanation": "HttpOnly cookies cannot be read by JavaScript `document.cookie`. This prevents cross-site scripting (XSS) attacks from stealing authentication sessions.",
        "keyPoints": [
          "Browser sends cookie automatically with `credentials: 'include'`.",
          "Requires CORS configuration with `withCredentials: true`."
        ],
        "codeSnippet": "// Axios configuration for HttpOnly cookie sessions:\nexport const apiClient = axios.create({\n  baseURL: '/api',\n  withCredentials: true, // Sends and receives secure cookies!\n});",
        "codeLanguage": "tsx",
        "codeTitle": "Configuring Axios for HttpOnly Cookies"
      },
      {
        "id": "m20-07",
        "number": "07",
        "title": "Handling 401 Unauthorized",
        "summary": "Automatic token refresh queue with Axios interceptors.",
        "explanation": "When an API request returns 401, pause the failed requests, call `/refresh`, update the access token, and retry the original requests seamlessly.",
        "keyPoints": [
          "Queue simultaneous requests while refresh is in flight to prevent duplicate refresh calls."
        ],
        "codeSnippet": "apiClient.interceptors.response.use(\n  (res) => res,\n  async (error) => {\n    const originalRequest = error.config;\n    if (error.response?.status === 401 && !originalRequest._retry) {\n      originalRequest._retry = true;\n      const newAccessToken = await refreshAuthToken();\n      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;\n      return apiClient(originalRequest); // Retry original request!\n    }\n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Automatic 401 Token Refresh Interceptor"
      },
      {
        "id": "m20-08",
        "number": "08",
        "title": "Role-Based Access Control (RBAC)",
        "summary": "Restricting UI elements based on user roles.",
        "explanation": "Hide or disable actions (like Delete, Edit, or Admin Dashboard) based on whether `user.role === 'admin'`.",
        "keyPoints": [
          "Always enforce authorization on the backend; frontend RBAC is solely for UX!"
        ],
        "codeSnippet": "export function RoleGate({ allowedRoles, children }: { allowedRoles: string[]; children: React.ReactNode }) {\n  const { user } = useAuth();\n  if (!user || !allowedRoles.includes(user.role)) return null;\n  return <>{children}</>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Declarative RoleGate Component"
      },
      {
        "id": "m20-09",
        "number": "09",
        "title": "Secure Logout",
        "summary": "Clearing tokens and invalidating server sessions.",
        "explanation": "On logout: 1) Call backend `/auth/logout` to revoke refresh token; 2) Clear client memory and storage; 3) Reset query cache; 4) Redirect to login.",
        "keyPoints": [
          "Clear TanStack Query cache on logout to avoid leaking user data to subsequent logins."
        ],
        "codeSnippet": "const logout = async () => {\n  try {\n    await apiClient.post('/auth/logout');\n  } finally {\n    queryClient.clear(); // Purge all cached user data!\n    useAuthStore.getState().reset();\n    window.location.href = '/login';\n  }\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Complete Secure Logout Sequence"
      },
      {
        "id": "m20-10",
        "number": "10",
        "title": "Authentication Architecture",
        "summary": "Enterprise auth structure across hooks, stores, and interceptors.",
        "explanation": "Colocate auth services, tokens, guards, and context into a dedicated `@/features/auth` slice.",
        "keyPoints": [
          "Clean encapsulation of security concerns."
        ],
        "codeSnippet": "features/auth/\n├── components/LoginForm.tsx, RoleGate.tsx\n├── hooks/useAuth.ts\n├── services/authService.ts\n└── store/useAuthStore.ts",
        "codeLanguage": "tsx",
        "codeTitle": "Auth Feature Directory Layout"
      }
    ]
  },
  {
    "id": "module-21",
    "number": "21",
    "title": "Forms & Validation (RHF + Zod)",
    "category": "Enterprise & Production",
    "summary": "React Hook Form, form registration, submission, Zod schema validation, resolvers, custom error messages, dynamic fields, and multi-step forms.",
    "iconName": "CheckSquare",
    "topics": [
      {
        "id": "m21-01",
        "number": "01",
        "title": "Advanced React Forms",
        "summary": "Why uncontrolled forms with React Hook Form outperform controlled forms.",
        "explanation": "Traditional controlled forms re-render the entire component on every keystroke. React Hook Form uses uncontrolled inputs under the hood, subscribing only to errors, which eliminates typing lag in large forms.",
        "keyPoints": [
          "Zero typing latency even in forms with 50+ fields."
        ],
        "codeSnippet": "npm install react-hook-form zod @hookform/resolvers",
        "codeLanguage": "tsx",
        "codeTitle": "Installing RHF and Zod"
      },
      {
        "id": "m21-02",
        "number": "02",
        "title": "Zod Schema Definition",
        "summary": "Declaring type-safe runtime validation schemas.",
        "explanation": "Zod lets you declare schemas with chainable validators. TypeScript types are automatically inferred via `z.infer<typeof schema>`.",
        "keyPoints": [
          "Single source of truth for both TypeScript types and runtime validation."
        ],
        "codeSnippet": "import { z } from 'zod';\n\nexport const studentSchema = z.object({\n  name: z.string().min(2, \"Name must be at least 2 characters\"),\n  email: z.string().email(\"Invalid email address\"),\n  gpa: z.coerce.number().min(0, \"GPA >= 0\").max(4.0, \"GPA <= 4.0\"),\n  major: z.enum([\"Computer Science\", \"Software Engineering\", \"Cybersecurity\"]),\n  agreeTerms: z.literal(true, {\n    errorMap: () => ({ message: \"You must accept terms\" }),\n  }),\n});\n\nexport type StudentFormData = z.infer<typeof studentSchema>;",
        "codeLanguage": "tsx",
        "codeTitle": "Complete Zod Validation Schema"
      },
      {
        "id": "m21-03",
        "number": "03",
        "title": "React Hook Form + Zod Resolver",
        "summary": "Connecting Zod schemas to useForm.",
        "explanation": "Use `@hookform/resolvers/zod` to validate form state against your Zod schema on submit or blur.",
        "keyPoints": [
          "Automatic typed submission handler `handleSubmit(onSubmit)`."
        ],
        "codeSnippet": "import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\n\nexport function StudentForm() {\n  const {\n    register,\n    handleSubmit,\n    formState: { errors, isSubmitting },\n    reset,\n  } = useForm<StudentFormData>({\n    resolver: zodResolver(studentSchema),\n    defaultValues: {\n      name: '',\n      email: '',\n      gpa: 3.5,\n    },\n  });\n\n  const onSubmit = async (data: StudentFormData) => {\n    await studentService.create(data);\n    reset();\n  };\n\n  return <form onSubmit={handleSubmit(onSubmit)}>...</form>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "useForm with zodResolver"
      },
      {
        "id": "m21-04",
        "number": "04",
        "title": "Form Registration ({...register})",
        "summary": "Connecting native inputs to React Hook Form.",
        "explanation": "`register('name')` returns `onChange`, `onBlur`, `ref`, and `name` attributes to spread onto the input.",
        "keyPoints": [
          "No manual `value` or `onChange` state wiring required."
        ],
        "codeSnippet": "<div>\n  <label className=\"block text-sm font-medium text-slate-300\">Full Name</label>\n  <input \n    {...register('name')} \n    className=\"w-full bg-slate-900 border border-slate-800 p-2 rounded text-white\" \n  />\n  {errors.name && <p className=\"text-xs text-rose-400 mt-1\">{errors.name.message}</p>}\n</div>",
        "codeLanguage": "tsx",
        "codeTitle": "Input Registration and Error Display"
      },
      {
        "id": "m21-05",
        "number": "05",
        "title": "Dynamic Form Arrays (useFieldArray)",
        "summary": "Adding and removing items dynamically (e.g. invoice line items).",
        "explanation": "`useFieldArray` provides methods (`append`, `remove`, `move`) to manage dynamic lists of inputs inside a single form.",
        "keyPoints": [
          "Crucial for order forms, tags, and multi-phone inputs."
        ],
        "codeSnippet": "import { useFieldArray } from 'react-hook-form';\n\nconst { fields, append, remove } = useFieldArray({\n  control,\n  name: \"phoneNumbers\",\n});\n\n// Render dynamic items:\n{fields.map((field, index) => (\n  <div key={field.id} className=\"flex gap-2\">\n    <input {...register(`phoneNumbers.${index}.number`)} />\n    <button type=\"button\" onClick={() => remove(index)}>Remove</button>\n  </div>\n))}\n<button type=\"button\" onClick={() => append({ number: '' })}>Add Phone</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Dynamic Inputs with useFieldArray"
      },
      {
        "id": "m21-06",
        "number": "06",
        "title": "Multi-Step Form Wizard",
        "summary": "Building multi-page registration pipelines with step validation.",
        "explanation": "Break long forms into steps (Personal Info -> Address -> Payment -> Review). Validate only the current step's fields using `trigger(['name', 'email'])` before advancing.",
        "keyPoints": [
          "Preserves entered data across steps in a single form instance.",
          "Validate current step before allowing 'Next' button click."
        ],
        "codeSnippet": "const handleNextStep = async () => {\n  // Only validate step 1 fields:\n  const isValid = await trigger(['name', 'email']);\n  if (isValid) setStep(s => s + 1);\n};",
        "codeLanguage": "tsx",
        "codeTitle": "Step Validation with trigger()"
      },
      {
        "id": "m21-07",
        "number": "07",
        "title": "Reusable RHF Field Components",
        "summary": "Integrating RHF with custom design system UI primitives.",
        "explanation": "Use `Controller` from React Hook Form to bind custom UI components (like Radix Select, DatePickers, and custom switches) that do not expose a native input ref.",
        "keyPoints": [
          "`Controller` bridges custom UI widgets with form state."
        ],
        "codeSnippet": "import { Controller } from 'react-hook-form';\n\n<Controller\n  name=\"theme\"\n  control={control}\n  render={({ field }) => (\n    <CustomSelect value={field.value} onChange={field.onChange} />\n  )}\n/>",
        "codeLanguage": "tsx",
        "codeTitle": "Controlled Custom Widget via Controller"
      }
    ]
  },
  {
    "id": "module-22",
    "number": "22",
    "title": "UI Architecture",
    "category": "Enterprise & Production",
    "summary": "Design systems, Shadcn UI architecture, component variants with CVA, layout systems, skeleton loaders, and dark mode.",
    "iconName": "Palette",
    "topics": [
      {
        "id": "m22-01",
        "number": "01",
        "title": "Design System Foundations",
        "summary": "Color tokens, typography scales, spacing, and CSS variables.",
        "explanation": "A robust design system standardizes visual language across an entire engineering team using design tokens for colors, spacing, radius, and elevation.",
        "keyPoints": [
          "HSL color variables enable effortless theme swapping (Dark/Light mode).",
          "Semantic color naming (`primary`, `muted`, `accent`, `destructive`)."
        ],
        "codeSnippet": ":root {\n  --background: 222.2 84% 4.9%;\n  --foreground: 210 40% 98%;\n  --primary: 217.2 91.2% 59.8%;\n  --destructive: 0 62.8% 30.6%;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "CSS Variable Design Tokens"
      },
      {
        "id": "m22-02",
        "number": "02",
        "title": "Component Variants with CVA",
        "summary": "Managing component style permutations cleanly.",
        "explanation": "Class Variance Authority (`cva`) lets you define type-safe variants (sizes: sm/md/lg, variants: primary/secondary/ghost) without string concatenation spaghetti.",
        "keyPoints": [
          "Standard pattern used by Shadcn UI."
        ],
        "codeSnippet": "const buttonVariants = cva(\n  \"inline-flex items-center justify-center font-medium rounded-lg transition-colors\",\n  {\n    variants: {\n      variant: {\n        default: \"bg-blue-600 text-white hover:bg-blue-700\",\n        ghost: \"hover:bg-slate-800 text-slate-300\",\n        outline: \"border border-slate-700 hover:bg-slate-800\",\n      },\n      size: {\n        sm: \"h-8 px-3 text-xs\",\n        md: \"h-10 px-4 text-sm\",\n        lg: \"h-12 px-6 text-base\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n      size: \"md\",\n    },\n  }\n);",
        "codeLanguage": "tsx",
        "codeTitle": "CVA Button Variants"
      },
      {
        "id": "m22-03",
        "number": "03",
        "title": "Responsive UI Architecture",
        "summary": "Mobile-first layouts with Tailwind breakpoints.",
        "explanation": "Design for mobile screens first (`w-full`), then enhance for tablets (`md:grid-cols-2`) and desktop (`lg:grid-cols-3`).",
        "keyPoints": [
          "Avoid fixed pixel widths that cause horizontal scrollbars on mobile."
        ],
        "codeSnippet": "<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\">\n  {/* Automatically responsive cards */}\n</div>",
        "codeLanguage": "tsx",
        "codeTitle": "Mobile-First Grid Layout"
      },
      {
        "id": "m22-04",
        "number": "04",
        "title": "Dark Mode Implementation",
        "summary": "CSS class-based dark mode toggling with system preference detection.",
        "explanation": "Toggle a `.dark` class on the root `<html>` element. Tailwind's `dark:` variant automatically updates all colors seamlessly.",
        "keyPoints": [
          "Persist theme in `localStorage` and detect `prefers-color-scheme`."
        ],
        "codeSnippet": "export function toggleDarkMode() {\n  const isDark = document.documentElement.classList.toggle('dark');\n  localStorage.setItem('theme', isDark ? 'dark' : 'light');\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Dark Mode Class Toggle"
      },
      {
        "id": "m22-05",
        "number": "05",
        "title": "Accessibility (a11y)",
        "summary": "Color contrast, screen readers, semantic tags, and keyboard focus.",
        "explanation": "Build accessible interfaces that all users can navigate using keyboards and screen readers.",
        "keyPoints": [
          "Ensure visible `:focus-visible` outlines.",
          "Use semantic `<header>`, `<main>`, `<nav>`, and `<button>` elements."
        ],
        "codeSnippet": "<button \n  className=\"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none\"\n  aria-label=\"Close dialog\"\n>\n  <X className=\"w-5 h-5\" />\n</button>",
        "codeLanguage": "tsx",
        "codeTitle": "Accessible Focus Ring"
      }
    ]
  },
  {
    "id": "module-23",
    "number": "23",
    "title": "React Project Architecture",
    "category": "Enterprise & Production",
    "summary": "Scalable folder structures, feature-based architectures, shared services, type organization, path aliases, and configuration hygiene.",
    "iconName": "FolderTree",
    "topics": [
      {
        "id": "m23-01",
        "number": "01",
        "title": "Feature-Based Architecture",
        "summary": "Organizing enterprise applications by business domain rather than technical file types.",
        "explanation": "Colocate components, hooks, services, and types that belong together. This makes navigating, editing, and deleting features effortless.",
        "keyPoints": [
          "Prevents monolith folders with 100+ unrelated files.",
          "Feature boundaries keep mental overhead low."
        ],
        "codeSnippet": "src/\n├── app/                  # Route layouts and pages\n├── components/ui/        # Reusable design system primitives\n├── features/\n│   ├── auth/             # Login, Register, useAuth, authService\n│   ├── catalog/          # ProductList, CategoryFilter, useProducts\n│   └── cart/             # CartDrawer, CartItem, useCartStore\n├── lib/                  # Shared utilities (cn, date formatters)\n└── types/                # Global TypeScript definitions",
        "codeLanguage": "tsx",
        "codeTitle": "Enterprise Feature-Based Layout"
      },
      {
        "id": "m23-02",
        "number": "02",
        "title": "Path Aliases",
        "summary": "Eliminating brittle relative paths with @/ imports.",
        "explanation": "Configure `@/*` in `tsconfig.json` so you never write `../../../../components/ui/button` again.",
        "keyPoints": [
          "Makes copying and moving files between folders painless."
        ],
        "codeSnippet": "// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"]\n    }\n  }\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Path Alias tsconfig Configuration"
      },
      {
        "id": "m23-03",
        "number": "03",
        "title": "Configuration Hygiene",
        "summary": "ESLint, Prettier, TypeScript strict mode, and environment variables.",
        "explanation": "Enforce strict TypeScript (`strict: true`) and automated lint rules to prevent bugs before code hits pull requests.",
        "keyPoints": [
          "Enforce consistent code style across engineering teams."
        ],
        "codeSnippet": "// tsconfig.json\n\"compilerOptions\": {\n  \"strict\": true,\n  \"noUncheckedIndexedAccess\": true\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Strict TypeScript Configuration"
      }
    ]
  },
  {
    "id": "module-24",
    "number": "24",
    "title": "Testing",
    "category": "Enterprise & Production",
    "summary": "Testing philosophy, Vitest, React Testing Library, user interactions, form testing, mocking API requests with MSW, and test organization.",
    "iconName": "TestTube2",
    "topics": [
      {
        "id": "m24-01",
        "number": "01",
        "title": "Testing Philosophy",
        "summary": "The testing pyramid: unit tests, component tests, and E2E tests.",
        "explanation": "Test your application the way real users interact with it! Rather than testing internal component state or implementation details, test rendered text and user events.",
        "keyPoints": [
          "'The more your tests resemble the way your software is used, the more confidence they can give you.' — Kent C. Dodds"
        ],
        "codeSnippet": "npm install -D vitest @testing-library/react @testing-library/user-event jsdom",
        "codeLanguage": "tsx",
        "codeTitle": "Installing Testing Stack"
      },
      {
        "id": "m24-02",
        "number": "02",
        "title": "React Testing Library",
        "summary": "Querying elements by role, label, and text.",
        "explanation": "RTL prioritizes accessible queries: `getByRole('button', { name: /submit/i })`, `getByLabelText`, `getByText`.",
        "keyPoints": [
          "Avoid `getByTestId` unless no accessible role exists.",
          "Tests break only when user experience breaks, not when refactoring implementation."
        ],
        "codeSnippet": "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { Counter } from './Counter';\n\ntest('increments counter on button click', async () => {\n  const user = userEvent.setup();\n  render(<Counter />);\n\n  const button = screen.getByRole('button', { name: /clicks: 0/i });\n  await user.click(button);\n\n  expect(screen.getByRole('button', { name: /clicks: 1/i })).toBeInTheDocument();\n});",
        "codeLanguage": "tsx",
        "codeTitle": "RTL User Interaction Test"
      },
      {
        "id": "m24-03",
        "number": "04",
        "title": "Mocking API Requests (MSW)",
        "summary": "Mock Service Worker for realistic network mocking.",
        "explanation": "MSW intercepts HTTP requests at the network level, returning mock JSON without modifying component code.",
        "keyPoints": [
          "Provides highest confidence testing for loading, error, and data states."
        ],
        "codeSnippet": "import { http, HttpResponse } from 'msw';\nimport { setupServer } from 'msw/node';\n\nexport const server = setupServer(\n  http.get('/api/students', () => {\n    return HttpResponse.json([{ id: '1', name: 'Alice', gpa: 3.9 }]);\n  })\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Mock Service Worker Server Handler"
      }
    ]
  },
  {
    "id": "module-25",
    "number": "25",
    "title": "Security",
    "category": "Enterprise & Production",
    "summary": "XSS prevention, dangerouslySetInnerHTML risks, token storage security, CORS, sensitive environment variables, and secure API integration.",
    "iconName": "Lock",
    "topics": [
      {
        "id": "m25-01",
        "number": "01",
        "title": "React Security Basics",
        "summary": "Built-in auto-escaping against Cross-Site Scripting (XSS).",
        "explanation": "By default, React escapes all strings rendered inside JSX before inserting them into the DOM, neutralizing basic `<script>` injection attacks.",
        "keyPoints": [
          "Automatic string escaping prevents HTML injection."
        ],
        "codeSnippet": "// If userInput is \"<script>alert('hack')</script>\",\n// React renders it as safe plain text: &lt;script&gt;...",
        "codeLanguage": "tsx",
        "codeTitle": "Automatic XSS Escaping"
      },
      {
        "id": "m25-02",
        "number": "02",
        "title": "dangerouslySetInnerHTML",
        "summary": "The hazards of raw HTML injection and sanitization with DOMPurify.",
        "explanation": "If you must render rich HTML from CMS feeds, ALWAYS sanitize it with `DOMPurify` before passing to `dangerouslySetInnerHTML`.",
        "keyPoints": [
          "Never pass un-sanitized user input to `dangerouslySetInnerHTML`."
        ],
        "codeSnippet": "import DOMPurify from 'dompurify';\n\nexport function SafeHtml({ rawContent }: { rawContent: string }) {\n  const cleanHtml = DOMPurify.sanitize(rawContent);\n  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Safe HTML Sanitization with DOMPurify",
        "pitfall": "Passing raw strings to dangerouslySetInnerHTML allows attackers to execute arbitrary JavaScript in your users' browser sessions."
      },
      {
        "id": "m25-03",
        "number": "03",
        "title": "Protecting Sensitive Environment Variables",
        "summary": "Server-only secrets vs public client variables.",
        "explanation": "Variables with `NEXT_PUBLIC_` or `VITE_` are embedded into the client bundle and are 100% visible to anyone inspecting browser network tabs. Never put database passwords, Stripe secret keys, or private certificates in client env variables!",
        "keyPoints": [
          "Public env vars: API URLs, public analytics IDs.",
          "Secret env vars: Database keys, payment secret keys."
        ],
        "codeSnippet": "// ❌ DANGEROUS: Leaked to browser client!\n// NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_live_12345\n\n// ✅ Safe: Only accessible in server environments / API routes:\n// STRIPE_SECRET_KEY=sk_live_12345",
        "codeLanguage": "tsx",
        "codeTitle": "Securing Environment Variables"
      }
    ]
  },
  {
    "id": "module-26",
    "number": "26",
    "title": "Production React",
    "category": "Enterprise & Production",
    "summary": "Production builds, Error Boundaries, SEO, metadata, accessibility audit, performance checklists, and deployment pipelines.",
    "iconName": "Rocket",
    "topics": [
      {
        "id": "m26-01",
        "number": "01",
        "title": "Production Build Process",
        "summary": "Minification, dead-code elimination, and tree-shaking.",
        "explanation": "Running `npm run build` generates an optimized static distribution with minified JavaScript, compressed CSS, and stripped development warnings.",
        "keyPoints": [
          "Build bundles are hashed for immutable browser caching."
        ],
        "codeSnippet": "npm run build && npm run start",
        "codeLanguage": "tsx",
        "codeTitle": "Production Build Command"
      },
      {
        "id": "m26-02",
        "number": "02",
        "title": "Error Boundaries",
        "summary": "Catching runtime JavaScript errors to prevent white-screen crashes.",
        "explanation": "An Error Boundary catches JavaScript errors anywhere in its child component tree, logs the error, and displays a friendly fallback UI instead of crashing the entire screen.",
        "keyPoints": [
          "Wrap major feature sections in independent Error Boundaries.",
          "A failure in a sidebar should never crash the main application view."
        ],
        "codeSnippet": "import { Component, ErrorInfo, ReactNode } from 'react';\n\nexport class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { hasError: boolean }> {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error: Error, info: ErrorInfo) {\n    console.error(\"Caught in ErrorBoundary:\", error, info);\n  }\n\n  render() {\n    if (this.state.hasError) return this.props.fallback;\n    return this.props.children;\n  }\n}",
        "codeLanguage": "tsx",
        "codeTitle": "React Error Boundary Component"
      },
      {
        "id": "m26-03",
        "number": "03",
        "title": "Production Checklist",
        "summary": "Final pre-flight audit before shipping to production.",
        "explanation": "1) Clean console logs; 2) Audit bundle size; 3) Verify OpenGraph SEO tags; 4) Check responsive mobile layouts; 5) Configure CDN caching headers.",
        "keyPoints": [
          "Ensure zero unresolved TypeScript or ESLint warnings."
        ],
        "codeSnippet": "// Production Pre-Flight:\n// [x] TypeScript build passes without any errors\n// [x] ESLint checks clean\n// [x] All images have alt tags and width/height attributes\n// [x] Error Boundaries installed around core routes",
        "codeLanguage": "tsx",
        "codeTitle": "Production Deployment Checklist"
      }
    ]
  },
  {
    "id": "module-27",
    "number": "27",
    "title": "Real-World Projects",
    "category": "Projects",
    "summary": "6 complete real-world projects: Todo App, Student Management System, Product Dashboard, Auth Portal, E-Commerce, and Final Capstone Application.",
    "iconName": "FolderGit2",
    "topics": [
      {
        "id": "m27-01",
        "number": "01",
        "title": "Project 01: Todo Management App",
        "summary": "Complete task manager with localStorage persistence, dynamic filtering, and search.",
        "explanation": "Master core state transitions, controlled inputs, and custom localStorage hooks.",
        "keyPoints": [
          "Create, edit, toggle, filter, and delete tasks.",
          "Real-time search query matching."
        ],
        "codeSnippet": "// Available in interactive demo tab! Check the Right Panel or Projects tab.",
        "codeLanguage": "tsx",
        "codeTitle": "Project 01 Overview",
        "interactiveDemoKey": "TodoAppDemo"
      },
      {
        "id": "m27-02",
        "number": "02",
        "title": "Project 02: Student Management System",
        "summary": "Full CRUD administration interface with pagination and multi-field validation.",
        "explanation": "Deep dive into data tables, modal dialogs, and sorting heuristics.",
        "keyPoints": [
          "Client-side pagination and sorting.",
          "Modal add/edit forms with error handling."
        ],
        "codeSnippet": "// Features: Student List, Add/Edit Modal, Delete confirmation, Search, Filter, Pagination.",
        "codeLanguage": "tsx",
        "codeTitle": "Project 02 Overview"
      },
      {
        "id": "m27-03",
        "number": "03",
        "title": "Project 03: Product Management Dashboard",
        "summary": "Enterprise catalog with REST API integration, skeletons, and metrics.",
        "explanation": "Service layer abstraction with Axios and asynchronous lifecycle handling.",
        "keyPoints": [
          "Loading skeletons during latency.",
          "Product inventory metrics cards."
        ],
        "codeSnippet": "// Features: REST API, Axios client, Category tree filter, Price slider, Inventory metrics.",
        "codeLanguage": "tsx",
        "codeTitle": "Project 03 Overview"
      },
      {
        "id": "m27-04",
        "number": "04",
        "title": "Project 04: Authentication Dashboard",
        "summary": "Role-Based Access Control (RBAC) portal with token refresh interceptors.",
        "explanation": "Production authentication architecture: JWT access tokens, refresh tokens, and protected routes.",
        "keyPoints": [
          "Login, Register, Logout.",
          "Protected layout routes and role guards."
        ],
        "codeSnippet": "// Features: JWT auth, Axios 401 interceptors, ProtectedRoute, RBAC gates, User Profile.",
        "codeLanguage": "tsx",
        "codeTitle": "Project 04 Overview"
      },
      {
        "id": "m27-05",
        "number": "05",
        "title": "Project 05: E-Commerce Frontend",
        "summary": "Full storefront with global Zustand cart, wishlist, and checkout pipeline.",
        "explanation": "Combines React Router with global Zustand state and persistent checkout wizards.",
        "keyPoints": [
          "Cart slide-out drawer.",
          "Multi-step checkout pipeline."
        ],
        "codeSnippet": "// Features: Dynamic catalog, Product detail, Zustand Cart Store, Wishlist, Checkout Wizard.",
        "codeLanguage": "tsx",
        "codeTitle": "Project 05 Overview"
      },
      {
        "id": "m27-06",
        "number": "06",
        "title": "Project 06: Final Capstone Application",
        "summary": "The ultimate full-stack React application integrating all 26 modules.",
        "explanation": "Synthesis of Next.js, TanStack Query v5, Zustand, React Hook Form, Zod, and Shadcn UI.",
        "keyPoints": [
          "Full 5-tier architecture.",
          "Production-ready build with Vitest testing suite."
        ],
        "codeSnippet": "// Complete multi-tier architecture:\n// React/Next.js -> TanStack Query -> Zustand -> React Hook Form + Zod -> REST API",
        "codeLanguage": "tsx",
        "codeTitle": "Project 06 Final Capstone"
      }
    ]
  }
];
