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
  image?: string;
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
        "codeSnippet": "",
        "codeLanguage": "jsx",
        "codeTitle": "React JS Architecture & Logo",
        "proTip": "គិតតាមបែប component-driven mental model៖ UI កើតចេញពីបំណែកឯករាជ្យផ្គុំគ្នា ដែលធ្វើឱ្យកូដងាយស្រួល scale និងថែទាំ។",
        "pitfall": "កុំព្យាយាមប្រើ DOM query ឬ mutate DOM elements ដោយផ្ទាល់ (ដូចជា innerHTML ឬ querySelector) នៅខាងក្នុង React components ឱ្យសោះ។",
        "image": "/images/react-js.png"
      },
      {
        "id": "m01-02",
        "number": "02",
        "title": "Why React?",
        "summary": "ស្វែងយល់ពីមូលហេតុចម្បងដែលធ្វើឱ្យ ReactJS ក្លាយជាជម្រើសដ៏ល្អបំផុតសម្រាប់ modern projects រួមមាន Performance, Scalability, Speed និង Long-term flexibility។",
        "explanation": "React ទទួលបានការគាំទ្រយ៉ាងខ្លាំងពីសហគមន៍ developer ទូទាំងពិភពលោក និងក្រុមហ៊ុនបច្ចេកវិទ្យាឈានមុខគេ។ មូលហេតុចម្បងដែលធ្វើឱ្យ ReactJS ក្លាយជាជម្រើសដំបូងសម្រាប់ modern projects គឺដោយសារគុណសម្បត្តិសំខាន់ៗទាំង ៤ យ៉ាង៖",
        "keyPoints": [
          "Performance: បង្កើនល្បឿន render តាមរយៈ Virtual DOM និង Fiber reconciler algorithm ដែល update តែផ្នែកនៃ DOM ណាដែលប្រែប្រួល។",
          "Scalability: រចនាសម្ព័ន្ធ modular និង component-driven architecture ជួយឱ្យ application ងាយស្រួលពង្រីកពី prototype តូចៗរហូតដល់ enterprise systems ដ៏ស្មុគស្មាញ។",
          "Speed: បង្កើនល្បឿនក្នុងការ develop កម្មវិធីដោយសារ reusable components, hot reloading, និង tooling ទំនើបៗដូចជា Vite និង Next.js។",
          "Long-term Flexibility: ភាពបត់បែនខ្ពស់ក្នុងការ integrate ជាមួយ backend APIs និង libraries ផ្សេងៗ ព្រមទាំងអាច reuse logic សម្រាប់ mobile app តាមរយៈ React Native។"
        ],
        "codeSnippet": "",
        "codeLanguage": "jsx",
        "codeTitle": "Why Use ReactJS for Modern Projects",
        "proTip": "ការរៀន React ជួយឱ្យអ្នកមានលទ្ធភាពប្រើប្រាស់ ecosystem ដ៏ធំបំផុតនៅលើពិភពលោក ដែលពោរពេញទៅដោយ production-tested packages និង UI patterns កម្រិតខ្ពស់។",
        "pitfall": "កុំមើលរំលង state architecture និង component modularity នៅពេល project ចាប់ផ្តើមរីកធំ ព្រោះវាអាចជះឥទ្ធិពលដល់ scalability និង performance។",
        "image": "/images/why-react.png"
      },
      {
        "id": "m01-03",
        "number": "03",
        "title": "React Features",
        "summary": "ស្វែងយល់ពីលក្ខណៈពិសេសស្នូលទាំង ៦ របស់ React រួមមាន Virtual DOM, Reusable Components, Seamless Updates, DevTools, Ease of Use និង Open Source។",
        "explanation": "React ត្រូវបានរចនាឡើងជាមួយនឹងលក្ខណៈពិសេសស្នូលជាច្រើន ដែលជួយឱ្យការបង្កើត modern web applications កាន់តែមានប្រសិទ្ធភាព និងរហ័សរហួន។ ខាងក្រោមនេះជាលក្ខណៈពិសេសសំខាន់ៗទាំង ៦ របស់ React៖",
        "keyPoints": [
          "Ease of Use: ភាពងាយស្រួលក្នុងការរៀនសូត្រ និងអភិវឌ្ឍន៍ ដោយសារ declarative syntax (JSX) ដែលបញ្ចូល JavaScript និង HTML ជាមួយគ្នា។",
          "Open Source: ជា open-source library ដ៏ធំដែលមានការគាំទ្រពី Meta និងសហគមន៍ global developers រាប់លាននាក់។",
          "Reusable Components: បង្កើត UI ជាបំណែកឯករាជ្យដែលអាច reuse បានគ្រប់កន្លែង កាត់បន្ថយការសរសេរកូដដដែលៗ (code duplication)។",
          "Developer Tools: មាន React DevTools សម្រាប់ inspect component tree, track props, state updates និង optimize performance។",
          "The Virtual DOM: រក្សា representation នៃ UI ក្នុង memory និង update តែ node ណាដែលផ្លាស់ប្តូរនៅលើ real DOM ជួយឱ្យល្បឿន render ដំណើរការលឿន។",
          "Seamless Updates: ការ update ទិន្នន័យលើ screen ធ្វើឡើងដោយស្វ័យប្រវត្តិ និងរលូន (reactive state & automatic batching) ដោយពុំចាំបាច់ reload page ឡើយ។"
        ],
        "codeSnippet": "",
        "codeLanguage": "jsx",
        "codeTitle": "Core Features of React",
        "proTip": "ការយល់ដឹងច្បាស់ពី Virtual DOM និង Component Lifecycle ជួយឱ្យអ្នកសរសេរ UI ដែលមាន performance ខ្ពស់ និងជៀសវាងការ re-render មិនចាំបាច់។",
        "pitfall": "កុំធ្វើការ mutate state ដោយផ្ទាល់ ព្រោះ React ពឹងផ្អែកលើ shallow equality check ដើម្បីដឹងថាតើត្រូវ re-render component ឬអត់។",
        "image": "/images/react-features.png"
      },
      {
        "id": "m01-04",
        "number": "04",
        "title": "React vs Traditional JavaScript",
        "summary": "ការប្រៀបធៀបស៊ីជម្រៅរវាងការគ្រប់គ្រង DOM បែប Imperative ក្នុង Vanilla JavaScript និង Declarative Paradigm ក្នុង ReactJS។",
        "explanation": "ការសរសេរ Traditional JavaScript (Vanilla JS) តម្រូវឱ្យ developer តាមដាន និងគ្រប់គ្រង DOM elements ដោយផ្ទាល់ (Imperative approach) តាមរយៈ query selectors, event listeners, និង manual DOM updates។ ចំណែកឯ ReactJS ប្រើប្រាស់វិធីសាស្ត្រ Declarative Paradigm ដែលចាត់ទុក UI គឺជាលទ្ធផលឆ្លុះបញ្ចាំងចេញពី State (`UI = f(State)`)។",
        "keyPoints": [
          "Imperative vs Declarative: Vanilla JS បញ្ជា DOM មួយជំហានម្តងៗ ('របៀបធ្វើ') រីឯ React កំណត់ទម្រង់ UI ចុងក្រោយដែលចង់បាន ('អ្វីដែលចង់បាន')។",
          "Manual DOM Manipulation: Traditional JS ធ្វើបច្ចុប្បន្នភាព DOM ដោយដៃ (Manual Bookkeeping) ដែលងាយបង្កបញ្ហា bug និង spaghetti code។",
          "Virtual DOM & Automatic Reconciliation: React ប្រើ Virtual DOM គណនាការផ្លាស់ប្តូរក្នុង memory រួច update DOM ពិតប្រាកដយ៉ាងមានប្រសិទ្ធភាពខ្ពស់។",
          "Component-Based Architecture: React បំបែក UI ទៅជា components ដាច់ដោយឡែកពីគ្នា ខណៈដែល traditional JS ច្រើនសរសេរកូដរាយប៉ាយលាយឡំ HTML, CSS និង JS។"
        ],
        "codeSnippet": "",
        "codeLanguage": "jsx",
        "codeTitle": "ReactJS vs JavaScript Overview",
        "proTip": "ចងចាំរូបមន្ត `UI = f(State)`៖ ក្នុង React អ្នកគ្រាន់តែផ្លាស់ប្តូរ state ហើយ React នឹងគណនាដើម្បី update DOM ឱ្យត្រូវគ្នាដោយស្វ័យប្រវត្តិ។",
        "pitfall": "ជៀសវាងការសរសេរកូដលាយគ្នាដោយប្រើ `document.getElementById()` ឬ DOM query ផ្ទាល់នៅក្នុង React components។",
        "image": "/images/react-vs-javascript.png"
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
        "codeLanguage": "jsx",
        "codeTitle": "Component Tree Architecture"
      },
      {
        "id": "m01-06",
        "number": "06",
        "title": "React Project Structure",
        "summary": "ស្វែងយល់អំពីរចនាសម្ព័ន្ធ folder និង file ស្តង់ដារនៅក្នុង React project រួមមាន node_modules, public, src និង root configuration files។",
        "explanation": "ការយល់ដឹងពីរចនាសម្ព័ន្ធ folder និង file នៅក្នុង React គឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់ក្នុងការចាប់ផ្តើមអភិវឌ្ឍន៍ web application។ កម្មវិធី React ស្តង់ដារត្រូវបានបែងចែកជាផ្នែកចម្បងៗរួមមាន `node_modules/`, `public/`, `src/`, និង configuration files នៅ root directory៖",
        "keyPoints": [
          "`node_modules/`: ផ្ទុក libraries និង dependencies ទាំងអស់ដែលបានដំឡើងតាមរយៈ npm ឬ yarn។",
          "`public/`: ផ្ទុក static assets ដូចជា `index.html` (root HTML file), `favicon.ico`, `manifest.json`, និង `robots.txt` ដែលមិនត្រូវការ build bundling។",
          "`src/`: ផ្ទុក source code ចម្បងរបស់កម្មវិធី React រួមមាន `App.js` (Root Component), `index.js` (Entry point ដែល render App ទៅក្នុង DOM), CSS styles, និង test files។",
          "Configuration Files: `.gitignore` (កំណត់ file ដែលមិនត្រូវ push ទៅ git), `package.json` (បញ្ជី dependencies និង scripts), និង `README.md`។"
        ],
        "codeSnippet": "",
        "codeLanguage": "jsx",
        "codeTitle": "Standard React Project File Tree",
        "proTip": "គួររៀបចំ folder ក្នុង `src/` ឱ្យមានរបៀបរៀបរយតាមបែប feature-based ឬ modular structure ដើម្បីងាយស្រួលថែទាំ និងពង្រីក project ពេលធំឡើង។",
        "pitfall": "កុំដាក់ source code ឬ dynamic components នៅក្នុង folder `public/` ឱ្យសោះ ព្រោះ `public/` សម្រាប់តែ static assets ដែលមិនឆ្លងកាត់ build bundler តែប៉ុណ្ណោះ។",
        "image": "/images/react-project-structure.png"
      },
      {
        "id": "m01-07",
        "number": "07",
        "title": "Creating a React Application",
        "summary": "របៀបបង្កើតគម្រោង React ស្តង់ដារ (JavaScript / JSX) ដោយប្រើប្រាស់ Vite Scaffolding Tool ទំនើប និងរហ័ស។",
        "explanation": "ទោះបីជា Create-React-App (CRA) ត្រូវបានចាត់ទុកជា deprecated ក៏ដោយ developer សម័យទំនើបប្រើប្រាស់ **Vite** ជាជម្រើសទីមួយក្នុងការបង្កើត Client-Side Single Page Application (SPA) ដែលមានល្បឿនលឿន និង build time រហ័សបំផុត។ សម្រាប់វគ្គសិក្សានេះ យើងបង្កើតគម្រោង React ធម្មតា (Standard JavaScript / JSX) ដោយមិនចាំបាច់ប្រើ TypeScript (`react-ts`) ឡើយ។",
        "keyPoints": [
          "**Vite Scaffolding**: ប្រើ `npm create vite@latest` ជាមួយ `--template react` ដើម្បីទាញយក template React ស្តង់ដារដែលប្រើ JavaScript (`.jsx`)។",
          "**Fast Development**: ផ្តល់នូវ Hot Module Replacement (HMR) យ៉ាងលឿនបំផុត ជួយឱ្យការកូដមានភាពរលូន។",
          "**Project Setup Workflow**: ៣ ជំហានងាយៗគឺ `create -> cd & npm install -> npm run dev`។"
        ],
        "codeSnippet": "# 1. បង្កើត React project ធម្មតា (JavaScript / JSX) ដោយប្រើ Vite\nnpm create vite@latest my-react-app -- --template react\n\n# 2. ចូលទៅកាន់ folder នៃ project\ncd my-react-app\n\n# 3. ដំឡើង packages/dependencies ដែលចាំបាច់\nnpm install\n\n# 4. ដំណើរការ development server\nnpm run dev",
        "codeLanguage": "bash",
        "codeTitle": "Creating a Standard React App with Vite",
        "proTip": "ប្រើ `--template react` សម្រាប់បង្កើតគម្រោង React ស្តង់ដារជាមួយ JavaScript / JSX ធម្មតាដោយមិនចាំបាច់ប្រើ TypeScript (react-ts) ឡើយ។"
      },
      {
        "id": "m01-08",
        "number": "08",
        "title": "Vite + React",
        "summary": "របៀបដែល Vite ប្រើប្រាស់ native ESM និង Rollup ដើម្បីផ្តល់ build speed យ៉ាងលឿនបំផុត។",
        "explanation": "Vite បម្រើ source code តាមរយៈ native ESM ក្នុងពេល development ដោយមិនចាំបាច់ឆ្លងកាត់ដំណើរការ bundle ទាំងមូលជាមុនឡើយ។ យន្តការនេះធានាថា Hot Module Replacement (HMR) នៅតែមានល្បឿនលឿនភ្លាមៗ ទោះបីជា application មានទំហំធំប៉ុនណាក៏ដោយ។",
        "keyPoints": [
          "ចាប់ផ្តើម dev server ភ្លាមៗ (instant server start) ដោយមិនចាំបាច់ pre-bundle project ទាំងមូល។",
          "ដំណើរការ compile JSX និង JavaScript យ៉ាងរហ័សដោយប្រើប្រាស់ esbuild engine។",
          "ដំណើរការ Rollup production bundling ប្រកបដោយប្រសិទ្ធភាពដើម្បីឱ្យ production code មានទំហំតូចបំផុត។"
        ],
        "codeSnippet": "// vite.config.js\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'),\n    },\n  },\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Vite Configuration with Path Aliases",
        "proTip": "Vite គាំទ្រ JSX តាមរយៈ file extension `.jsx` ដោយស្វ័យប្រវត្តិតាមរយៈ `@vitejs/plugin-react`។"
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
        "codeLanguage": "jsx",
        "codeTitle": "Standard NPM Scripts"
      },
      {
        "id": "m01-10",
        "number": "10",
        "title": "Understanding the React Development Environment",
        "summary": "ការយល់ដឹងពី React DevTools, React StrictMode និងការស្វែងយល់ពី double-rendering behavior ក្នុង development។",
        "explanation": "នៅក្នុង development mode ឧបករណ៍ React StrictMode នឹងដំណើរការ render components ចំនួនពីរដងដោយចេតនា ដើម្បីជួយស្វែងរក accidental side-effects និងកំហុសឆ្គងផ្សេងៗក្នុងកូដ។",
        "keyPoints": [
          "StrictMode ដំណើរការ component rendering ពីរដងក្នុង dev mode ដើម្បីធានាភាពត្រឹមត្រូវនៃកូដ។",
          "React Developer Tools browser extension អនុញ្ញាតឱ្យ developer ពិនិត្យមើល props, state, និង render timeline នៃ components នីមួយៗបានយ៉ាងងាយស្រួល។"
        ],
        "codeSnippet": "// React.StrictMode wraps your application tree\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
        "codeLanguage": "jsx",
        "codeTitle": "React StrictMode Wrapper",
        "proTip": "ប្រសិនបើអ្នកឃើញ `console.log` ដំណើរការពីរដងនៅពេល component render ដំបូង កុំបារម្ភ នេះគឺជាចេតនារបស់ React StrictMode ដើម្បីជួយស្វែងរក side-effects និងកំហុសឆ្គងដំបូងប៉ុណ្ណោះ!"
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
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
        "codeTitle": "Valid JSX Syntax Rules"
      },
      {
        "id": "m02-03",
        "number": "03",
        "title": "JSX Expressions",
        "summary": "ការបង្កប់ dynamic expressions ការគណនា និង variables នៅខាងក្នុង curly braces `{}`។",
        "explanation": "រាល់ JavaScript expression ត្រឹមត្រូវ (ដូចជា variables, ការគណនាគណិតវិទ្យា, function calls, ឬ ternary operators) អាចដាក់នៅចន្លោះសញ្ញា curly braces `{}` នៅក្នុង JSX បានទាំងអស់។",
        "keyPoints": [
          "Statements ដូចជា `if`, `for`, `while` មិនអាចសរសេរនៅខាងក្នុង `{}` បានឡើយ។ ត្រូវប្រើ ternary operators ឬ helper functions ជំនួសវិញ (ចំណែកវិធី loop បង្ហាញទិន្នន័យ យើងនឹងរៀននៅ Module 05)។",
          "Numbers និង strings នឹងត្រូវបង្ហាញលើ UI ដោយផ្ទាល់ ចំណែកឯ booleans (`true`/`false`), `null`, និង `undefined` ត្រូវបាន React ignore (មិនបង្ហាញលើអេក្រង់ឡើយ)។"
        ],
        "codeSnippet": "export function UserGreeting() {\n  const username = \"Sophea\";\n  const points = 100;\n  const multiplier = 1.5;\n\n  return (\n    <div className=\"p-4 bg-slate-900 rounded-lg text-white\">\n      <h2 className=\"text-xl\">Welcome back, {username.toUpperCase()}!</h2>\n      <p className=\"text-slate-400\">\n        Adjusted score: {(points * multiplier).toFixed(0)} XP\n      </p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
          "អាចបង្កើត helper function នៅខាងក្នុង component ហើយហៅវានៅក្នុង curly braces `{}` ដើម្បីគណនា ឬ format ទិន្នន័យបានយ៉ាងរលូន។"
        ],
        "codeSnippet": "export function ProductPrice() {\n  const priceInCents = 4999;\n\n  const formatCurrency = (cents) => \n    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);\n\n  return (\n    <div className=\"p-4 bg-slate-900 rounded-lg\">\n      <p className=\"text-slate-400 text-sm\">Course Price:</p>\n      <span className=\"text-xl font-semibold text-emerald-400\">\n        {formatCurrency(priceInCents)}\n      </span>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "JavaScript Functions in JSX"
      },
      {
        "id": "m02-05",
        "number": "05",
        "title": "JSX Attributes",
        "summary": "ក្បួនដាក់ឈ្មោះ attributes ជាទម្រង់ camelCase និងការប្រើប្រាស់ boolean attributes។",
        "explanation": "HTML attributes ត្រូវបានបំប្លែងទៅជាទម្រង់ camelCase នៅក្នុង JSX (ឧទាហរណ៍ `tabindex` ក្លាយជា `tabIndex`, `autocomplete` ក្លាយជា `autoComplete`)។ ការកំណត់ attribute ដោយមិនបញ្ជាក់តម្លៃ គឺមានតម្លៃស្មើនឹង `true` ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "ឈ្មោះ attribute ត្រូវតែសរសេរជា camelCase៖ ដូចជា `tabIndex`, `autoFocus`, `aria-*` (រក្សាសញ្ញា hyphen ដដែល)។",
          "Boolean attribute shorthand៖ ការសរសេរ `<input disabled />` គឺដូចគ្នាទៅនឹងការសរសេរ `<input disabled={true} />`។"
        ],
        "codeSnippet": "<input \n  id=\"user-email\"\n  type=\"email\"\n  autoComplete=\"email\"\n  autoFocus\n  disabled={false}\n  tabIndex={1}\n  aria-label=\"User Email Address\"\n  className=\"w-full px-4 py-2 border rounded-md\"\n/>",
        "codeLanguage": "jsx",
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
        "codeSnippet": "import { cn } from \"@/lib/utils\";\n\nexport function StatusBadge() {\n  const status = \"active\";\n\n  return (\n    <span\n      className={cn(\n        \"px-2.5 py-1 text-xs font-semibold rounded-full border\",\n        status === \"active\" && \"bg-emerald-950/50 text-emerald-400 border-emerald-800\",\n        status === \"pending\" && \"bg-amber-950/50 text-amber-400 border-amber-800\",\n        status === \"inactive\" && \"bg-rose-950/50 text-rose-400 border-rose-800\"\n      )}\n    >\n      {status.toUpperCase()}\n    </span>\n  );\n}",
        "codeLanguage": "jsx",
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
        "codeSnippet": "export function CustomProgressBar() {\n  const progress = 65;\n\n  return (\n    <div className=\"w-full bg-slate-800 h-3 rounded-full overflow-hidden\">\n      <div \n        className=\"h-full bg-blue-500 transition-all duration-300\"\n        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}\n      />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Inline Style Object in JSX"
      },
      {
        "id": "m02-08",
        "number": "08",
        "title": "JSX Fragments",
        "summary": "ការប្រមូលផ្តុំបញ្ជី children ច្រើនបញ្ចូលគ្នាដោយមិនបាច់បន្ថែម wrapper DOM nodes ឥតប្រយោជន៍។",
        "explanation": "Fragments (សរសេរពេញ `<React.Fragment>` ឬសរសេរកាត់ `<>...</>`) អនុញ្ញាតឱ្យយើង return sibling elements ច្រើនក្នុងពេលតែមួយ ដោយមិនបាច់បន្ថែម `<div>` tags ឥតប្រយោជន៍ទៅក្នុង DOM tree ឡើយ។",
        "keyPoints": [
          "ការសរសេរកាត់ `<>...</>` មិនបង្កើត DOM node បន្ថែមឡើយ (zero DOM overhead)។",
          "Fragments ជួយការពារបញ្ហាខូច layout នៅពេលប្រើប្រាស់ជាមួយ CSS Flexbox ឬ CSS Grid ដែលទាមទារ direct child relationships។",
          "ប្រសិនបើត្រូវកំណត់ attributes ដូចជា `key` (នៅពេលសិក្សាអំពី dynamic lists នៅ Module 05) ត្រូវប្រើ syntax ពេញ `<React.Fragment key={...}>` ព្រោះទម្រង់កាត់ `<>` មិនអាចទទួល attribute បានឡើយ។"
        ],
        "codeSnippet": "export function CourseOverview() {\n  return (\n    <>\n      <h2 className=\"text-xl font-bold text-white\">React Fundamentals</h2>\n      <p className=\"text-slate-400\">Master JSX, components, and core modern concepts.</p>\n      <span className=\"text-xs text-indigo-400\">No extra wrapper DOM node created</span>\n    </>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Using React Fragments"
      },
      {
        "id": "m02-09",
        "number": "09",
        "title": "Conditional JSX",
        "summary": "ការប្រើប្រាស់ ternary operators, early returns និង logical short-circuiting។",
        "explanation": "Conditional rendering នៅក្នុង JSX អនុញ្ញាតឱ្យយើងបង្ហាញ UI ផ្សេងៗគ្នាទៅតាមលក្ខខណ្ឌជាក់ស្តែង ដោយប្រើប្រាស់ ternary expressions (`? :`) ឬ logical operators។",
        "keyPoints": [
          "ប្រើ ternary operators (`condition ? <TrueUI /> : <FalseUI />`) សម្រាប់ការប្តូរ UI ពីរសណ្ឋាននៅខាងក្នុង JSX ដោយផ្ទាល់។",
          "ប្រើ logical AND (`condition && <UI />`) នៅពេលចង់បង្ហាញ UI តែមួយគត់នៅពេលដែលលក្ខខណ្ឌពិត (truthy)។"
        ],
        "codeSnippet": "export function AuthStatusBadge() {\n  const isLoggedIn = true;\n\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl\">\n      {isLoggedIn ? (\n        <span className=\"px-3 py-1.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-md text-sm font-medium\">\n          Welcome back, Member!\n        </span>\n      ) : (\n        <span className=\"px-3 py-1.5 bg-slate-800 text-slate-400 rounded-md text-sm\">\n          Please sign in to continue\n        </span>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Ternary Conditional JSX"
      },
      {
        "id": "m02-10",
        "number": "10",
        "title": "Rendering Dynamic Content",
        "summary": "ការបង្ហាញ dynamic strings, numbers, dates និង localized strings នៅលើ UI។",
        "explanation": "JSX អនុញ្ញាតឱ្យយើងបង្ហាញ dynamic data ពី JavaScript variables ទៅលើ content និង attributes (ដូចជា `src`, `href`, `alt`) បានយ៉ាងងាយស្រួល។",
        "keyPoints": [
          "អាចបញ្ចូល dynamic expressions និង variables ទៅក្នុង JSX content ដោយប្រើ curly braces `{variable}`។",
          "អាចបញ្ចូល dynamic attributes ដូចជា `alt`, `href`, និង `src` ដោយប្រើប្រាស់ `{variable}` ឬ template literals។"
        ],
        "codeSnippet": "export function UserProfileHeader() {\n  const user = {\n    name: \"Dara Som\",\n    role: \"Frontend Developer\",\n    avatarUrl: \"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150\",\n  };\n\n  return (\n    <div className=\"flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl\">\n      <img \n        src={user.avatarUrl} \n        alt={`Profile picture of ${user.name}`}\n        className=\"w-12 h-12 rounded-full border-2 border-emerald-500\" \n      />\n      <div>\n        <h3 className=\"text-white font-bold\">{user.name}</h3>\n        <p className=\"text-sm text-slate-400\">{user.role}</p>\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
        "codeSnippet": "// Summary of Core JSX Rules:\n// 1. Single Root\nreturn <div className=\"card\">...</div>;\n\n// 2. Closed Tags\n<input type=\"text\" />\n\n// 3. camelCase\n<input tabIndex={0} autoComplete=\"off\" />\n\n// 4. Expression braces\n<h1>{`Hello ${user.name}`}</h1>",
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
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
        "explanation": "Component គឺជា JavaScript function ដែល return ត្រឡប់មកវិញនូវ React element ដើម្បីកំណត់ថាតើអ្វីខ្លះត្រូវបង្ហាញនៅលើ screen។ Components ជួយប្រមូលផ្តុំ markup (JSX), logic និង styles ឱ្យស្ថិតនៅក្នុង module ឯករាជ្យតែមួយយ៉ាងមានសណ្តាប់ធ្នាប់។",
        "keyPoints": [
          "Components អនុញ្ញាតឱ្យអ្នកបំបែក UI ទាំងមូលឱ្យទៅជាបំណែកតូចៗដែលឯករាជ្យ និងអាចយកទៅប្រើឡើងវិញបាន (reusable)។",
          "Components ត្រូវតែជា pure functions (រាល់ពេល render ត្រូវតែផ្តល់ output ជាក់លាក់ និងគ្មាន side effects)។",
          "Component state អនុញ្ញាតឱ្យ UI មានភាព dynamic ផ្លាស់ប្តូរទិន្នន័យ និងឆ្លើយតបទៅនឹង interactions របស់អ្នកប្រើប្រាស់។"
        ],
        "codeSnippet": "export function WelcomeBanner() {\n  return (\n    <div className=\"bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg\">\n      <h1 className=\"text-2xl font-bold\">Welcome to Modern React</h1>\n      <p className=\"text-blue-100 mt-1\">Master components, hooks, and architecture.</p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Basic Functional Component",
        "proTip": "គិតតាមបែប Lego blocks៖ UI ទាំងមូលកើតចេញពី component តូចៗផ្គុំគ្នា ដែលធ្វើឱ្យកូដងាយស្រួល scale, debug និង test។"
      },
      {
        "id": "m03-02",
        "number": "02",
        "title": "Functional Components",
        "summary": "ស្តង់ដារទំនើបសម្រាប់ React components ដោយប្រើ JavaScript functions ធម្មតា។",
        "explanation": "Class components ត្រូវបានចាត់ទុកជា legacy ក្នុង modern React រួចទៅហើយ។ Functional components ផ្តល់នូវ syntax ខ្លីស្អាត ភាពងាយស្រួលក្នុងការអាន និងសរសេរកូដ ភាពងាយស្រួលក្នុងការធ្វើ test និងទំហំ bundle size តូចជាងមុន។",
        "keyPoints": [
          "ប្រកាស component ដោយប្រើ `function ComponentName()` ធម្មតា ឬ arrow function syntax។",
          "គាំទ្រ React Hooks សម្រាប់គ្រប់គ្រង state និង lifecycle (ដែលយើងនឹងរៀននៅ Modules បន្តបន្ទាប់)។",
          "កាត់បន្ថយ boilerplate code ធៀបនឹង class components និងមិនចាំបាច់ដោះស្រាយបញ្ហា `this` binding ឡើយ។"
        ],
        "codeSnippet": "// 1. Function Declaration Component\nexport function AppHeader() {\n  return (\n    <header className=\"p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center\">\n      <h1 className=\"text-xl font-bold text-white\">React Course</h1>\n      <span className=\"text-xs px-2 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded\">\n        Active\n      </span>\n    </header>\n  );\n}\n\n// 2. Arrow Function Component\nexport const UserBadge = () => {\n  return (\n    <div className=\"inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full\">\n      <span className=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\" />\n      <span className=\"text-xs text-slate-300 font-medium\">Online</span>\n    </div>\n  );\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Modern Functional Component Declarations",
        "proTip": "អ្នកអាចប្រកាស component ដោយប្រើ function declaration ឬ arrow function បានយ៉ាងងាយស្រួល ទៅតាមចំណង់ចំណូលចិត្តនៃការសរសេរកូដ។"
      },
      {
        "id": "m03-03",
        "number": "03",
        "title": "Creating Components",
        "summary": "ការសរសេរ ការ export ការ import និងការរៀបចំ components ឆ្លងកាត់ files ផ្សេងៗក្នុងគម្រោង។",
        "explanation": "បង្កើត components នៅក្នុង `.jsx` file ដាច់ដោយឡែក។ គួរប្រើប្រាស់ Named Exports ជាជាង Default Exports ដើម្បីឱ្យ editor (ដូចជា VS Code) អាចធ្វើ auto-import និង safe refactoring បានត្រឹមត្រូវ ដោយមិនបារម្ភពីការច្រឡំឈ្មោះ។",
        "keyPoints": [
          "ផ្តល់អាទិភាពដល់ Named Exports (`export function Header()`) ជាជាង Default Exports ដើម្បីបង្កើនភាពច្បាស់លាស់ពេល import។",
          "គួររក្សា file component នីមួយៗក្រោម ១៥០-២០០ បន្ទាត់ ដើម្បីធានាថាវាងាយស្រួលអាន និង maintain។",
          "ដាក់ឈ្មោះ file ឱ្យដូចគ្នានឹងឈ្មោះ Component ឧទាហរណ៍ `Header.jsx` សម្រាប់ `Header` component។"
        ],
        "codeSnippet": "// src/components/Header.jsx\nexport function Header() {\n  return (\n    <header className=\"h-16 border-b border-slate-800 px-6 flex items-center justify-between\">\n      <span className=\"font-bold text-lg text-white\">ReactMaster</span>\n      <nav className=\"flex gap-4 text-sm text-slate-400\">\n        <a href=\"#modules\" className=\"hover:text-white\">Curriculum</a>\n        <a href=\"#projects\" className=\"hover:text-white\">Projects</a>\n      </nav>\n    </header>\n  );\n}",
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
        "codeTitle": "PascalCase Naming Rule",
        "pitfall": "ការសរសេរ `<userProfile />` ជំនួសឱ្យ `<UserProfile />` នឹងធ្វើឱ្យ React ស្វែងរក HTML tag ឈ្មោះ userProfile ដែលមិនមាននៅក្នុង browser!"
      },
      {
        "id": "m03-05",
        "number": "05",
        "title": "Component Structure",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធផ្ទៃក្នុង៖ imports, variables & helpers, និង JSX return។",
        "explanation": "រចនាសម្ព័ន្ធ component ដែលមានស្តង់ដារច្បាស់លាស់ជួយឱ្យកូដមានភាពងាយស្រួលក្នុងការអាន និងស្មានដឹងជាមុន (Predictable)៖ ១) Imports; ២) Component declaration; ៣) Internal variables & helper logic; ៤) JSX return statement។ (នៅ Modules បន្តបន្ទាប់ យើងនឹងបន្ថែម Props, Event Handlers និង State ទៅក្នុងរចនាសម្ព័ន្ធនេះជាបន្តបន្ទាប់)។",
        "keyPoints": [
          "រៀបចំ import statements ទាំងអស់នៅផ្នែកខាងលើបង្អស់នៃ file។",
          "រៀបចំ variables និង helper formatting logic មុនពេល return JSX។",
          "return JSX markup យ៉ាងច្បាស់លាស់ និងមាន structure ងាយយល់។"
        ],
        "codeSnippet": "// 1. Imports\nimport { Sparkles } from 'lucide-react';\n\n// 2. Component Declaration\nexport function WelcomeBanner() {\n  // 3. Variables & Helper Logic\n  const courseTitle = \"Mastering Modern React\";\n  const badgeText = \"Foundations\";\n\n  // 4. JSX Return\n  return (\n    <div className=\"p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2\">\n      <div className=\"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium\">\n        <Sparkles className=\"w-3.5 h-3.5\" />\n        <span>{badgeText}</span>\n      </div>\n      <h2 className=\"text-xl font-bold text-white\">{courseTitle}</h2>\n      <p className=\"text-sm text-slate-400\">\n        Learn React step-by-step with clean component structure.\n      </p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Predictable Component Layout Structure",
        "proTip": "ការរៀបចំតាមលំដាប់លំដោយ Imports -> Variables & Logic -> JSX Return ជួយឱ្យ developer ក្នុងក្រុមអាចចូលមកអាន និងកែសម្រួលកូដបានយ៉ាងរហ័ស។"
      },
      {
        "id": "m03-06",
        "number": "06",
        "title": "Component Composition",
        "summary": "ការកសាង user interface ស្មុគស្មាញដោយការផ្គុំ atomic components តូចៗបញ្ចូលគ្នា។",
        "explanation": "Composition គឺជាអានុភាពដ៏ខ្លាំងក្លាបំផុតរបស់ React (React's core superpower)។ ជំនួសឱ្យការសរសេរកូដ UI ទាំងអស់ចូលគ្នាក្នុង monolithic component ដ៏ធំមួយ វិធីសាស្ត្រត្រឹមត្រូវគឺការផ្គុំ components តូចៗដែលផ្តោតលើមុខងារតែមួយបញ្ចូលគ្នា។",
        "keyPoints": [
          "បំបែកអេក្រង់ធំៗឱ្យទៅជា components តូចៗដែលឯករាជ្យពីគ្នា។",
          "ផ្គុំ components តូចៗទាំងនោះបញ្ចូលគ្នានៅក្នុង layout ឬ page component ធំមួយ។",
          "ជួយបង្កើនភាពច្បាស់លាស់នៃកូដ និងងាយស្រួលក្នុងការ debug។"
        ],
        "codeSnippet": "function Header() {\n  return (\n    <header className=\"p-4 bg-slate-900 border-b border-slate-800\">\n      <h1 className=\"text-xl font-bold text-white\">Dashboard Overview</h1>\n    </header>\n  );\n}\n\nfunction Sidebar() {\n  return (\n    <aside className=\"w-64 p-4 bg-slate-900/50 border-r border-slate-800 text-slate-300\">\n      <nav className=\"space-y-2\">\n        <p className=\"text-sm font-semibold text-slate-400\">Navigation</p>\n        <p className=\"text-sm hover:text-white cursor-pointer\">Analytics</p>\n        <p className=\"text-sm hover:text-white cursor-pointer\">Settings</p>\n      </nav>\n    </aside>\n  );\n}\n\nfunction ContentArea() {\n  return (\n    <main className=\"flex-1 p-6 text-slate-200\">\n      <h2 className=\"text-lg font-semibold text-white\">Main Activity</h2>\n      <p className=\"text-sm text-slate-400 mt-1\">Here is your daily activity feed.</p>\n    </main>\n  );\n}\n\n// Composing multiple components together into a complete page\nexport function DashboardPage() {\n  return (\n    <div className=\"min-h-screen bg-slate-950 flex flex-col\">\n      <Header />\n      <div className=\"flex flex-1\">\n        <Sidebar />\n        <ContentArea />\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Component Composition Pattern",
        "proTip": "ការផ្គុំ component តូចៗបញ្ចូលគ្នា ជួយឱ្យអ្នកអាចកែប្រែផ្នែកនីមួយៗនៃ UI ដោយឯករាជ្យ និងមិនប៉ះពាល់ដល់ផ្នែកផ្សេងទៀតឡើយ។"
      },
      {
        "id": "m03-07",
        "number": "07",
        "title": "Reusable Components",
        "summary": "ការបង្កើត UI components ដែលអាចយកទៅហៅប្រើប្រាស់ឡើងវិញបានច្រើនដងក្នុងកម្មវិធី។",
        "explanation": "Reusable component គឺជា component ដែលត្រូវបានបង្កើតឡើងយ៉ាងមានរបៀបរៀបរយ ដើម្បីអាចយកទៅហៅប្រើប្រាស់ឡើងវិញបានច្រើនកន្លែងនៅក្នុង application ដោយមិនបាច់សរសេរកូដ JSX ដដែលៗឡើងវិញឡើយ។",
        "keyPoints": [
          "បង្កើត component តែមួយដង តែអាចយកទៅ reuse បាននៅគ្រប់ទីកន្លែងក្នុង application។",
          "កាត់បន្ថយការចម្លង markup និង styles ដដែលៗ (DRY - Don't Repeat Yourself)។",
          "ងាយស្រួលកែសម្រួល UI ពីព្រោះនៅពេលកែ component ដើមតែមួយ កន្លែងដែលបាន reuse ទាំងអស់នឹង update ដោយស្វ័យប្រវត្តិ។"
        ],
        "codeSnippet": "// 1. Self-contained component with its own markup and styles\nexport function SubscribeCard() {\n  return (\n    <div className=\"p-5 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-3\">\n      <h3 className=\"font-semibold text-white\">Subscribe to Newsletter</h3>\n      <p className=\"text-xs text-slate-400\">Get modern React tips directly in your inbox.</p>\n      <button className=\"px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors\">\n        Subscribe Now\n      </button>\n    </div>\n  );\n}\n\n// 2. Reusing the exact same component in different pages/sections\nexport function HomePage() {\n  return (\n    <div className=\"space-y-6 max-w-xl mx-auto\">\n      <section className=\"p-4 bg-slate-950 border border-slate-800 rounded-lg\">\n        <h2 className=\"text-sm font-semibold text-slate-400 mb-3\">Main Content</h2>\n        <SubscribeCard />\n      </section>\n\n      <section className=\"p-4 bg-slate-950 border border-slate-800 rounded-lg\">\n        <h2 className=\"text-sm font-semibold text-slate-400 mb-3\">Sidebar Widget</h2>\n        <SubscribeCard />\n      </section>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Reusing Components Across the UI",
        "proTip": "ការបង្កើត component មួយដែល encapsulation ទាំង markup និង styling ជួយឱ្យអ្នកអាច reuse វាបានច្រើនដងដោយមិនចាំបាច់សរសេរកូដស្ទួនឡើយ (DRY)។"
      },
      {
        "id": "m03-08",
        "number": "08",
        "title": "Nested Components",
        "summary": "ការ render child components នៅខាងក្នុង parent tree ដោយជៀសវាងការប្រកាស component នៅខាងក្នុង function body។",
        "explanation": "យើងអាច render components បង្កប់គ្នាក្នុង parent-child hierarchy បានយ៉ាងងាយស្រួល។ ប៉ុន្តែសូមកុំប្រកាស (declare) function component មួយនៅខាងក្នុង body នៃ component មួយផ្សេងទៀតឱ្យសោះ ព្រោះវានឹងត្រូវ re-create ថ្មីរាល់ពេល render ដែលនាំឱ្យបាត់បង់ state ខាងក្នុង និងបញ្ហា performance ធ្ងន់ធ្ងរ។",
        "keyPoints": [
          "ត្រូវប្រកាស child components នៅ module scope (ខាងក្រៅ parent component) ជានិច្ច។",
          "ហៅប្រើប្រាស់ child components នៅក្នុង JSX នៃ parent component តាមរយៈ syntax `<ChildComponent />`។",
          "រៀបចំ component tree ឱ្យមាន hierarchy ច្បាស់លាស់ដើម្បីងាយស្រួលអាន និងថែទាំ។"
        ],
        "codeSnippet": "// ❌ Anti-pattern: Defining child component INSIDE parent component\n/*\nfunction Parent() {\n  // Re-declared on every single render!\n  function UserAvatar() { \n    return <div className=\"w-10 h-10 rounded-full bg-blue-500\" />; \n  }\n  return <UserAvatar />;\n}\n*/\n\n// ✅ Correct: Declared at module scope (outside parent)\nfunction UserAvatar() {\n  return (\n    <div className=\"w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold\">\n      R\n    </div>\n  );\n}\n\nfunction UserDetails() {\n  return (\n    <div>\n      <p className=\"text-sm font-medium text-white\">Ratha Tech</p>\n      <p className=\"text-xs text-slate-400\">Full-Stack Developer</p>\n    </div>\n  );\n}\n\n// Parent rendering nested child components\nexport function UserCard() {\n  return (\n    <div className=\"flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl\">\n      <UserAvatar />\n      <UserDetails />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
        "codeSnippet": "src/\n├── components/\n│   ├── ui/             # Primitives: Button.jsx, Input.jsx\n│   └── layout/         # Header.jsx, Sidebar.jsx\n└── features/\n    └── cart/           # CartDrawer.jsx, CartItem.jsx, CartSummary.jsx",
        "codeLanguage": "jsx",
        "codeTitle": "Component Tier Hierarchy",
        "proTip": "ការបែងចែក components ជា tier ច្បាស់លាស់ជួយឱ្យ team ងាយដឹងថាតើ component ណាជា shared primitive និង component ណាជា business logic។"
      },
      {
        "id": "m03-10",
        "number": "10",
        "title": "Feature-based Components",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធតាម business domain capability ជំនួសឱ្យការបែងចែកតាម technical role។",
        "explanation": "Feature folders ជួយប្រមូលផ្តុំរាល់ components និង helper files ដែលពាក់ព័ន្ធនឹង business domain តែមួយនៅកន្លែងតែមួយ។ នៅពេលអ្នកចង់កែប្រែ ឬលុប feature ណាមួយចេញ រាល់ files ពាក់ព័ន្ធទាំងអស់ស្ថិតនៅជាមួយគ្នា មិនរាយប៉ាយឡើយ។",
        "keyPoints": [
          "បង្កើន maintainability នៃ project នៅពេលដែល codebase រីកធំឡើងលើសពី ១០០+ files។",
          "បង្កើតព្រំដែនច្បាស់លាស់រវាង feature-specific code និង shared reusable UI components។",
          "ងាយស្រួលក្នុងការធ្វើ code review, testing និង onboarding សមាជិកថ្មីក្នុងក្រុម។"
        ],
        "codeSnippet": "features/auth/\n├── components/\n│   ├── LoginForm.jsx\n│   ├── RegisterModal.jsx\n│   └── PasswordStrength.jsx\n└── utils/\n    └── authHelper.js",
        "codeLanguage": "jsx",
        "codeTitle": "Feature Folder Structure",
        "proTip": "នៅពេល feature មួយត្រូវលុបចោល អ្នកគ្រាន់តែលុប folder `features/feature-name` មួយប៉ុណ្ណោះ ដោយមិនបាច់ដើររក files រាយប៉ាយក្នុង folders ផ្សេងៗឡើយ។"
      },
      {
        "id": "m03-11",
        "number": "11",
        "title": "Container vs Presentational Components",
        "summary": "ការបំបែករវាង structural container និង visual UI rendering ឱ្យដាច់ពីគ្នា។",
        "explanation": "Presentational components ផ្តោតតែទៅលើការបង្ហាញរូបរាង UI ប៉ុណ្ណោះ (Visual layout និង styles)។ ចំណែកឯ Container components ផ្តោតលើការរៀបចំ structural layout (ដែលយើងនឹងបន្ថែម props និង state នៅ Modules បន្តបន្ទាប់)។",
        "keyPoints": [
          "Presentational (Pure UI): ផ្តោតលើ visual elements, CSS styles និង HTML structure។",
          "Container (Structural / Layout): រៀបចំ layout wrapper និងកំណត់ទីតាំងសម្រាប់ presentational components។",
          "ជួយឱ្យកូដមានភាពច្បាស់លាស់ ងាយស្រួលរៀបចំ និង reuse។"
        ],
        "codeSnippet": "// 1. Presentational Component: Focuses purely on visual UI layout & styling\nexport function ProfileCardUI() {\n  return (\n    <div className=\"p-5 bg-slate-900 border border-slate-800 rounded-2xl text-center max-w-sm mx-auto\">\n      <div className=\"w-16 h-16 mx-auto rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold\">\n        RT\n      </div>\n      <h3 className=\"mt-3 text-lg font-bold text-white\">Ratha Tech</h3>\n      <p className=\"text-sm text-slate-400\">Frontend Engineer</p>\n      <div className=\"mt-4 pt-3 border-t border-slate-800 flex justify-around text-xs text-slate-300\">\n        <span>12 Courses</span>\n        <span>48 Projects</span>\n      </div>\n    </div>\n  );\n}\n\n// 2. Container Component: Provides structural layout wrapper\nexport function ProfileContainer() {\n  return (\n    <section className=\"p-8 bg-slate-950 border border-slate-800/60 rounded-3xl max-w-md mx-auto\">\n      <h2 className=\"text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 text-center\">\n        User Profile Overview\n      </h2>\n      <ProfileCardUI />\n    </section>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Container vs Presentational Pattern",
        "proTip": "ការបំបែករវាង Container (រៀបចំ layout) និង Presentational (UI design) ជួយឱ្យ frontend engineer អាចផ្តោតលើ visual design ដោយមិនច្របូកច្របល់ឡើយ។"
      },
      {
        "id": "m03-12",
        "number": "12",
        "title": "Component Best Practices",
        "summary": "គោលការណ៍ Single Responsibility, Component Purity និងការរៀបចំកូដឱ្យមានអនាម័យ។",
        "explanation": "រក្សា components ឱ្យមានទំហំល្មម និងផ្តោតលើទំនួលខុសត្រូវតែមួយ (Single Responsibility Principle)។ ជៀសវាងការសរសេរ component មួយឱ្យធ្វើការងារច្រើនពេក ឬផ្ទុក markup រាប់រយបន្ទាត់នៅក្នុង file តែមួយ។",
        "keyPoints": [
          "រក្សា component ឱ្យមាន Purity៖ រាល់ពេល component ដំណើរការ ត្រូវតែ return JSX ដូចគ្នា និងគ្មានផលប៉ះពាល់ចំហៀង (No side effects)។",
          "ជៀសវាង side effects ក្នុងអំឡុងពេល rendering (ដូចជាការ mutate external variables) — component គួរតែជា pure function ដែល render UI ដោយគ្មានផលប៉ះពាល់ទៅក្រៅ។",
          "កុំសរសេរ component តែមួយឱ្យទទួលបន្ទុកច្រើនពេក (Do one thing and do it well)។"
        ],
        "codeSnippet": "// Golden Rule of React: Purity during render\n\n// ❌ Impure: Mutating external variables during render\nlet renderCount = 0;\nfunction BadComponent() {\n  renderCount++; // Side effect: modifies external state on every render!\n  return <div>Render count: {renderCount}</div>;\n}\n\n// ✅ Pure: Rendering has no observable external mutations\nfunction GoodComponent() {\n  const currentTitle = \"Modern React Development\";\n  return <h2 className=\"text-xl font-semibold text-white\">{currentTitle}</h2>;\n}",
        "codeLanguage": "jsx",
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
          "Props អនុញ្ញាតឱ្យ component មួយអាចទទួលទិន្នន័យផ្សេងៗគ្នា ដើម្បីបង្ហាញ UI តាមតម្រូវការ។"
        ],
        "codeSnippet": "export function Alert({ type, message }) {\n  const bg = type === \"error\" ? \"bg-rose-950/60 border-rose-800 text-rose-300\" \n           : type === \"warning\" ? \"bg-amber-950/60 border-amber-800 text-amber-300\"\n           : \"bg-blue-950/60 border-blue-800 text-blue-300\";\n\n  return <div className={`p-3 border rounded-lg ${bg}`}>{message}</div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Basic Props in Component",
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
        "codeLanguage": "jsx",
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
          "អ្នកអាចពិនិត្យមើលតម្លៃ props ដោយប្រើ `console.log(props)` ដើម្បីយល់ច្បាស់ពីទិន្នន័យដែលបានបញ្ជូនមក។"
        ],
        "codeSnippet": "export function CourseHeader(props) {\n  return (\n    <div>\n      <h1 className=\"text-3xl font-bold text-white\">{props.title}</h1>\n      <p className=\"text-slate-400\">{props.subtitle}</p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Receiving the Props Object",
        "proTip": "អ្នកអាចចូលទៅកាន់ properties តាមរយៈ props.propertyName ឬប្រើ destructuring ដើម្បីឱ្យកូដកាន់តែខ្លីស្អាត។"
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
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
        "codeTitle": "Passing Object Props",
        "proTip": "បើ object មានទំហំធំ ឬប្រើប្រាស់ឡើងវិញច្រើនកន្លែង គួរប្រកាសជា variable នៅខាងក្រៅ ឬគ្រប់គ្រងដោយ state។"
      },
      {
        "id": "m04-07",
        "number": "07",
        "title": "Props with Arrays",
        "summary": "ការបញ្ជូនទិន្នន័យជា Array ទៅកាន់ components តាមរយៈ Props។",
        "explanation": "យើងអាចបញ្ជូន arrays ទៅកាន់ components តាមរយៈ props ដើម្បីចែករំលែកបណ្តុំទិន្នន័យ ដូចជា tags, categories ឬ navigation links។",
        "keyPoints": [
          "បញ្ជូន arrays នៅខាងក្នុង curly braces៖ `items={['A', 'B', 'C']}` ឬ `features={featureList}`។",
          "Child component អាចទទួលយក array prop និងទាញយកធាតុមកបង្ហាញតាមរយៈ array indexing (ដូចជា `features[0]`)។",
          "ការ loop បង្ហាញធាតុ array ទាំងអស់ដោយស្វ័យប្រវត្តិ នឹងត្រូវសិក្សាលម្អិតនៅ Module 05 (Rendering Data តាមរយៈ `.map()`)។"
        ],
        "codeSnippet": "// 1. Child component receives an array prop\nexport function FeatureBadges({ features }) {\n  return (\n    <div className=\"flex flex-wrap gap-2\">\n      <span className=\"px-2.5 py-1 bg-slate-800 text-xs rounded-md text-indigo-300\">\n        {features[0]}\n      </span>\n      <span className=\"px-2.5 py-1 bg-slate-800 text-xs rounded-md text-indigo-300\">\n        {features[1]}\n      </span>\n      <span className=\"px-2.5 py-1 bg-slate-800 text-xs rounded-md text-indigo-300\">\n        {features[2]}\n      </span>\n    </div>\n  );\n}\n\n// 2. Parent component passes an array as a prop\nexport function CourseFeatureCard() {\n  const courseFeatures = [\"Components\", \"JSX Syntax\", \"Props System\"];\n  return <FeatureBadges features={courseFeatures} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Passing Array Props",
        "proTip": "យើងអាចបញ្ជូន Array ទៅ component ដោយប្រើ curly braces ដូចជា items={['React', 'Next.js']}។ នៅ Module 05 បន្ទាប់ យើងនឹងរៀនប្រើ .map() ដើម្បី loop បង្ហាញធាតុ array ទាំងអស់ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m04-08",
        "number": "08",
        "title": "Props with Functions",
        "summary": "ការបញ្ជូន functions ទៅកាន់ components តាមរយៈ Props ដើម្បីធ្វើការគណនា ឬ format ទិន្នន័យ។",
        "explanation": "ការបញ្ជូន functions ចុះក្រោមជា props អនុញ្ញាតឱ្យ child components អាចហៅប្រើប្រាស់ logic ឬ formatting rules ដែល parent បានកំណត់។",
        "keyPoints": [
          "Functions នៅក្នុង JavaScript អាចបញ្ជូនជា props តាមរយៈ curly braces៖ `<Component formatFn={myFunction} />`។",
          "បញ្ជូន function reference ដោយផ្ទាល់ (កុំ invoke function ដោយប្រើ `()` ក្នុង JSX attribute ឱ្យសោះ)។",
          "Child component អាចទទួលយក និងហៅដំណើរការ function prop នោះដើម្បីទាញយកលទ្ធផល (ចំណែកឯការភ្ជាប់ function prop ជាមួយ browser click events នឹងត្រូវសិក្សាលម្អិតនៅ Module 06)។"
        ],
        "codeSnippet": "// 1. Child component receives and calls a function prop\nexport function StatusDisplay({ statusCode, getStatusLabel }) {\n  // Execute the function prop to get formatted text\n  const label = getStatusLabel(statusCode);\n\n  return (\n    <div className=\"inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg\">\n      <span className=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\" />\n      <span className=\"text-xs text-white font-medium\">{label}</span>\n    </div>\n  );\n}\n\n// 2. Parent defines the function and passes it down as a prop\nexport function SystemMonitor() {\n  const resolveStatus = (code) => {\n    if (code === 200) return \"System Operational (Online)\";\n    if (code === 500) return \"Server Error\";\n    return \"Status Unknown\";\n  };\n\n  return <StatusDisplay statusCode={200} getStatusLabel={resolveStatus} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Passing Functions as Props",
        "proTip": "Functions ក្នុង JavaScript គឺជា first-class values ដូចនេះអ្នកអាចបញ្ជូន functions ទៅកាន់ child components តាមរយៈ props បានដូចជា string ឬ number ដែរ។"
      },
      {
        "id": "m04-09",
        "number": "09",
        "title": "Destructuring Props",
        "summary": "បច្ចេកទេសទាញយក props យ៉ាងខ្លីស្អាតនៅត្រង់ function signature។",
        "explanation": "ការធ្វើ Destructuring props ជួយឱ្យកូដខ្លី ស្អាត មិនបាច់សរសេរពាក្យ `props.` ដដែលៗ និងបង្ហាញយ៉ាងច្បាស់នូវរាល់ properties ណាខ្លះដែល component កំពុងប្រើប្រាស់។",
        "keyPoints": [
          "ធ្វើ Destructure ដោយផ្ទាល់នៅត្រង់ parameters នៃ function៖ `({ label, value, trend })`។",
          "អាចកំណត់ default fallback values ឬ rename properties បានយ៉ាងងាយស្រួល។",
          "អាចប្រើ Rest parameter `...rest` ដើម្បីចាប់យក props ដែលនៅសល់ទាំងអស់។"
        ],
        "codeSnippet": "export function MetricCard({ \n  label, \n  value, \n  trend = \"up\" \n}) {\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl\">\n      <p className=\"text-sm text-slate-400\">{label}</p>\n      <div className=\"flex items-baseline gap-2 mt-1\">\n        <span className=\"text-2xl font-bold text-white\">{value}</span>\n        <span className={trend === \"up\" ? \"text-emerald-400 text-xs\" : \"text-rose-400 text-xs\"}>\n          {trend === \"up\" ? \"▲ +12%\" : \"▼ -4%\"}\n        </span>\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
          "ES6 defaults ផ្តល់នូវ syntax ខ្លី និងងាយស្រួលយល់សម្រាប់ props ដែលអាចមាន ឬគ្មាន (Optional)។",
          "Fallback value នឹងត្រូវយកមកប្រើ លុះត្រាតែ prop នោះមានតម្លៃ `undefined`។",
          "កាត់បន្ថយ runtime bugs នៅពេលដែល parent មិនបានបញ្ជូន prop ណាមួយមក។"
        ],
        "codeSnippet": "// Fallbacks assigned directly in destructuring:\nexport function Button({ \n  label, \n  variant = \"primary\", \n  size = \"md\" \n}) {\n  return <button className={`btn-${variant} btn-${size}`}>{label}</button>;\n}",
        "codeLanguage": "jsx",
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
          "អាចផ្ទុក JSX elements, strings, numbers ឬ components ផ្សេងៗជាច្រើន។",
          "ជាគ្រឹះស្នូលសម្រាប់បង្កើត Wrapper components, Layouts, Cards, Modals និង Context Providers។",
          "អនុញ្ញាតឱ្យ component អាចទទួលអ្វីក៏បាន ចាប់ពី text ធម្មតា រហូតដល់ JSX elements ស្មុគស្មាញ។"
        ],
        "codeSnippet": "export function Card({ title, children }) {\n  return (\n    <div className=\"bg-slate-900 border border-slate-800 rounded-xl p-5\">\n      <h3 className=\"text-lg font-semibold text-white mb-3\">{title}</h3>\n      <div className=\"text-slate-300\">{children}</div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
        "codeLanguage": "jsx",
        "codeTitle": "Props vs State Comparison Matrix",
        "proTip": "បើទិន្នន័យត្រូវចែករំលែក ឬគ្រប់គ្រងដោយ parent ចូរប្រើ Props។ បើទិន្នន័យផ្លាស់ប្តូរតាមរយៈ user interaction ផ្ទៃក្នុង component នោះ ចូរប្រើ State។"
      },
      {
        "id": "m04-13",
        "number": "13",
        "title": "One-way Data Flow",
        "summary": "លំហូរទិន្នន័យតែមួយទិស (Unidirectional) ការពារបញ្ហា circular dependency bugs ក្នុងកម្មវិធី។",
        "explanation": "នៅក្នុង React ទិន្នន័យតែងតែហូរចុះក្រោម (Strictly Downwards) ពី Parent Component ទៅកាន់ Child Component តាមរយៈ props ជានិច្ច។ Child component មិនអាចផ្លាស់ប្តូរទិន្នន័យរបស់ parent ដោយផ្ទាល់បានឡើយ ដែលធ្វើឱ្យលំហូរទិន្នន័យមានភាពច្បាស់លាស់ និងអាចទស្សន៍ទាយបាន (Predictable)។",
        "keyPoints": [
          "**Data flows down**៖ Parent ជាអ្នកកាន់កាប់ទិន្នន័យដើម ហើយបញ្ជូនវាចុះក្រោមទៅកាន់ child components ជា props។",
          "**Read-only props**៖ Child components ទទួលយក props មកបង្ហាញ ប៉ុន្តែមិនអាច mutate ឬកែប្រែ props ទាំងនោះបានឡើយ។",
          "**Single Source of Truth**៖ ទិន្នន័យនីមួយៗគួរតែមានកន្លែងគ្រប់គ្រងដើមតែមួយគត់ក្នុង component tree (ចំណែកឯ dynamic state នឹងត្រូវសិក្សានៅ Module 07)។"
        ],
        "codeSnippet": "// 1. Child component receives data from its parent\nfunction UserBadge({ username, role }) {\n  return (\n    <div className=\"flex items-center gap-2\">\n      <span className=\"font-semibold text-white\">{username}</span>\n      <span className=\"text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30\">\n        {role}\n      </span>\n    </div>\n  );\n}\n\n// 2. Parent component owns data and passes it strictly downwards\nexport function UserProfileCard() {\n  const user = {\n    username: \"Dara Som\",\n    role: \"Senior Developer\",\n    department: \"Engineering\",\n  };\n\n  return (\n    <div className=\"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2\">\n      <h3 className=\"text-slate-400 text-xs uppercase tracking-wider\">User Information</h3>\n      {/* Data flows down strictly as props */}\n      <UserBadge username={user.username} role={user.role} />\n      <p className=\"text-sm text-slate-300\">Department: {user.department}</p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
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
    "summary": "ស្វែងយល់អំពីការបង្ហាញទិន្នន័យលើ UI តាមរយៈ .map(), ក្បួនច្បាប់នៃការប្រើប្រាស់ Key prop, Conditional Rendering, Skeleton Loading UI និងការរៀបចំ Error States ឱ្យមានប្រសិទ្ធភាពខ្ពស់។",
    "iconName": "ListTree",
    "topics": [
      {
        "id": "m05-01",
        "number": "01",
        "title": "Rendering Arrays",
        "summary": "ការបង្ហាញទិន្នន័យជាបណ្តុំ (Arrays) នៃ primitives ឬ objects នៅលើអេក្រង់។",
        "explanation": "React អនុញ្ញាតឱ្យយើង render arrays នៃ elements ដោយផ្ទាល់នៅលើ UI។ នៅពេលដែល array នៃ JSX elements ត្រូវបានបញ្ជូនចូល React នឹងធ្វើការ iterate និង mount រាល់ element នីមួយៗតាមលំដាប់លំដោយ។",
        "keyPoints": [
          "Arrays ត្រូវបាន render ទៅលើ screen តាមលំដាប់លំដោយនៃធាតុនៅក្នុង array។",
          "រាល់ top-level element ទាំងអស់នៅក្នុង array ចាំបាច់ត្រូវតែមាន `key` prop មួយដែលមានតម្លៃ unique (មិនជាន់គ្នា)។",
          "ជៀសវាងការ render array ដែលផ្ទុក plain objects ដោយផ្ទាល់ ព្រោះ React មិនអនុញ្ញាតឱ្យ render object ជា child element ឡើយ។"
        ],
        "codeSnippet": "export function NumberList() {\n  const numbers = [10, 20, 30, 40, 50];\n  return (\n    <ul className=\"flex gap-2\">\n      {numbers.map((n) => (\n        <li key={n} className=\"px-3 py-1 bg-slate-800 rounded text-blue-400 font-mono\">\n          {n}\n        </li>\n      ))}\n    </ul>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Rendering Simple Arrays",
        "proTip": "React អាច render array នៃ JSX elements បានដោយស្វ័យប្រវត្តិ ប៉ុន្តែរាល់ element នីមួយៗត្រូវតែមាន `key` prop តែមួយគត់ (unique key)។"
      },
      {
        "id": "m05-02",
        "number": "02",
        "title": "map() in React",
        "summary": "ការប្រើប្រាស់ declarative array method ស្តង់ដារដើម្បីបំប្លែងទិន្នន័យទៅជា JSX elements។",
        "explanation": "Method `.map()` របស់ JavaScript គឺជាវិធីសាស្ត្រស្តង់ដារដ៏ពេញនិយមបំផុតសម្រាប់បំប្លែង (transform) array នៃទិន្នន័យទៅជា array នៃ JSX elements។ ដោយសារតែ `.map()` return ត្រឡប់មកវិញនូវ new array នោះយើងអាចបង្កប់វាដោយផ្ទាល់នៅក្នុងរង្វង់ក្រចកទោល `{}` នៃ JSX បានយ៉ាងងាយស្រួល។",
        "keyPoints": [
          "ប្រើ `.map()` ជំនួសឱ្យ `forEach` ឬ `for` loop ធម្មតា ព្រោះ `.map()` return នូវ array ថ្មីដែល React អាចយកទៅ render បានភ្លាមៗ។",
          "រក្សា mapping callback function ឱ្យនៅជា pure function និងសរសេរឱ្យខ្លី ងាយយល់។",
          "ត្រូវប្រាកដថាបានដាក់ `key` prop នៅលើ outer element បំផុតដែលបាន return ចេញពី `.map()`។"
        ],
        "codeSnippet": "interface Student {\n  id: string;\n  name: string;\n  score: number;\n}\n\nexport function Leaderboard({ students }: { students: Student[] }) {\n  return (\n    <div className=\"divide-y divide-slate-800\">\n      {students.map((student, index) => (\n        <div key={student.id} className=\"flex justify-between py-2 text-sm\">\n          <span className=\"text-slate-300\">#{index + 1} {student.name}</span>\n          <span className=\"font-bold text-emerald-400\">{student.score} pts</span>\n        </div>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Mapping Objects to JSX Elements",
        "proTip": "ជៀសវាងការប្រើ `.forEach()` ក្នុង JSX ព្រោះវា return `undefined`។ ប្រើ `.map()` ជានិច្ច ព្រោះវាបង្កើត និង return នូវ new array នៃ JSX elements។"
      },
      {
        "id": "m05-03",
        "number": "03",
        "title": "Rendering Objects",
        "summary": "របៀបទាញយក និងបង្ហាញ properties របស់ object នៅខាងក្នុង JSX templates ឱ្យបានត្រឹមត្រូវ។",
        "explanation": "នៅក្នុង React អ្នកមិនអាច render JavaScript object ទាំងមូលដោយផ្ទាល់នៅខាងក្នុង JSX បានទេ (ឧទាហរណ៍៖ `<div>{user}</div>` នឹងបណ្តាលឱ្យមាន runtime error)។ អ្នកត្រូវតែទាញយក properties នីមួយៗដែលជា primitive values (`user.name`) មកបង្ហាញ ឬបំប្លែងវាទៅជា string ដោយប្រើ `JSON.stringify`។",
        "keyPoints": [
          "Plain JavaScript objects មិនមែនជា valid React children នោះឡើយ។",
          "ត្រូវចូលទៅកាន់ property ជាក់លាក់ (ឧ. `object.property`) ឬប្រើ `Object.entries(obj)` រួចធ្វើការ map ដើម្បីបង្ហាញទិន្នន័យ។",
          "ប្រើប្រាស់ optional chaining (`user?.address?.city`) ដើម្បីការពារបញ្ហា crash នៅពេលដែល nested object មានតម្លៃ null ឬ undefined។"
        ],
        "codeSnippet": "// ❌ Error: Objects are not valid as a React child:\n// return <div>{user}</div>;\n\n// ✅ Correct:\nexport function UserProfile({ user }: { user: { name: string; email: string } }) {\n  return (\n    <div>\n      <h4 className=\"font-semibold text-white\">{user.name}</h4>\n      <p className=\"text-xs text-slate-400\">{user.email}</p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Rendering Object Properties Correctly",
        "proTip": "ប្រសិនបើអ្នកចង់ inspect មើលរចនាសម្ព័ន្ធ object ទាំងមូលលើ UI សម្រាប់ debugging អ្នកអាចប្រើ `<pre>{JSON.stringify(user, null, 2)}</pre>` បាន។"
      },
      {
        "id": "m05-04",
        "number": "04",
        "title": "Rendering Lists",
        "summary": "ការកសាង dynamic lists និង card grids ដែលមានទំហំធំ និងអាច scale បានយ៉ាងងាយស្រួល។",
        "explanation": "ការរួមបញ្ចូលគ្នារវាង `.map()` ជាមួយនឹង reusable components អនុញ្ញាតឱ្យយើងបង្កើត dynamic lists, product feeds, ឬ comment sections បានយ៉ាងរលូន និងមានរចនាសម្ព័ន្ធច្បាស់លាស់។",
        "keyPoints": [
          "បំបែក list item នីមួយៗឱ្យទៅជា dedicated component ដាច់ដោយឡែក ដើម្បីបង្កើនភាពច្បាស់លាស់នៃកូដ និងងាយស្រួលធ្វើ memoization។",
          "បញ្ជូន data ទៅកាន់ child component តាមរយៈ props ឬ object prop (`module={mod}`)។",
          "ដាក់ `key` prop នៅលើ custom component ផ្ទាល់នៅកម្រិត loop (`<ModuleCard key={mod.id} ... />`) មិនមែននៅខាងក្នុង root tag របស់ component នោះទេ។"
        ],
        "codeSnippet": "export function ModuleGrid({ modules }: { modules: ModuleItem[] }) {\n  return (\n    <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n      {modules.map((mod) => (\n        <ModuleCard key={mod.id} module={mod} />\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Rendering List of Grid Cards",
        "proTip": "នៅពេលដែលកូដខាងក្នុង loop មានភាពស្មុគស្មាញ ចូរទាញវាចេញទៅជា reusable subcomponent (ដូចជា `<ModuleCard />`) ដើម្បីឱ្យកូដមានរបៀប និងងាយស្រួល optimize performance។"
      },
      {
        "id": "m05-05",
        "number": "05",
        "title": "Keys",
        "summary": "សារៈសំខាន់នៃ key prop និងរបៀបដែល React reconciliation ប្រើវាដើម្បីតាមដានធាតុនីមួយៗ។",
        "explanation": "Keys ផ្តល់នូវអត្តសញ្ញាណស្ថិតស្ថេរ (stable identity) ដល់ elements ឆ្លងកាត់ការ render នីមួយៗ។ នៅពេលដែលធាតុក្នុង array ផ្លាស់ប្តូរលំដាប់ ត្រូវបានបន្ថែម ឬលុបចេញ React នឹងប្រៀបធៀប keys ទាំងនេះដើម្បីដឹងថាតើ DOM nodes ណាខ្លះត្រូវរក្សាទុកប្រើឡើងវិញ (reuse) ឬត្រូវបង្កើតជាថ្មី ដោយមិនចាំបាច់ render បញ្ជីទាំងមូលឡើងវិញឡើយ។",
        "keyPoints": [
          "Keys ត្រូវតែមានតម្លៃ unique (មិនជាន់គ្នា) ក្នុងចំណោមធាតុបងប្អូន (siblings) ជាមួយគ្នា។",
          "ដាច់ខាតកុំប្រើ `Math.random()` ជា key ព្រោះវានឹងផ្លាស់ប្តូរតម្លៃគ្រប់ពេល render ដែលធ្វើឱ្យ React បង្កើត DOM node ថ្មីរាល់ពេល។",
          "ចៀសវាងការប្រើ array index ជា key ប្រសិនបើតារាងទិន្នន័យអាចមានការ sort, filter, ឬបន្ថែម/លុបធាតុ។"
        ],
        "codeSnippet": "// ✅ Use stable IDs from your database/backend\n{todos.map(todo => (\n  <TodoItem key={todo.id} todo={todo} />\n))}\n\n// ⚠️ Array index is acceptable ONLY if list is strictly static:\n{['Home', 'About', 'Contact'].map((item, idx) => (\n  <span key={idx}>{item}</span>\n))}",
        "codeLanguage": "jsx",
        "codeTitle": "Correct Key Usage in React",
        "pitfall": "ការប្រើប្រាស់ array index ជា key នៅពេលដែលមានការលុប បន្ថែម ឬ sort ទិន្នន័យ នឹងបណ្តាលឱ្យ component state ច្រឡំធាតុគ្នា និងបង្កើត bugs ធ្ងន់ធ្ងរនៅលើ UI!"
      },
      {
        "id": "m05-06",
        "number": "06",
        "title": "Dynamic Components",
        "summary": "ការជ្រើសរើស component មកបង្ហាញដោយស្វ័យប្រវត្តិតាម runtime ដោយប្រើ lookup dictionaries/maps។",
        "explanation": "Dynamic Components គឺជាបច្ចេកទេសផ្គូផ្គង string identifier ឬ status key ទៅកាន់ React component constructor ជាក់លាក់ណាមួយនៅពេល runtime។ វិធីសាស្ត្រនេះជួយកាត់បន្ថយការសរសេរ `if/else` ឬ `switch` វែងអន្លាយ និងធ្វើឱ្យកូដងាយស្រួលពង្រីក (scalable)។",
        "keyPoints": [
          "រក្សាទុក components នៅក្នុង dictionary/lookup object ហើយហៅប្រើវាដោយប្រើ dynamic key (ឧ. `iconMap[type]`)។",
          "ត្រូវប្រាកដថាតម្លៃ component ដែលទាញចេញមកត្រូវបានចាត់ទុកជា identifier ដែលចាប់ផ្តើមដោយអក្សរធំ (Capitalized variable name ដូចជា `IconComponent`) មុនពេលយកទៅ render ជា JSX tag (`<IconComponent />`)។",
          "កំណត់ fallback component សម្រាប់ករណីដែល key មិនត្រូវគ្នានឹងទិន្នន័យក្នុង dictionary។"
        ],
        "codeSnippet": "import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';\n\nconst iconMap = {\n  success: CheckCircle,\n  warning: AlertTriangle,\n  error: XCircle,\n  info: Info,\n};\n\nexport function DynamicStatusIcon({ type }: { type: 'success' | 'warning' | 'error' | 'info' }) {\n  const IconComponent = iconMap[type];\n  return <IconComponent className=\"w-5 h-5\" />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Dynamic Component Lookup Map",
        "proTip": "បង្កើត lookup object នៅខាងក្រៅ component function ដើម្បីជៀសវាងការបង្កើត object ឡើងវិញរាល់ពេល component ធ្វើការ render។"
      },
      {
        "id": "m05-07",
        "number": "07",
        "title": "Conditional Rendering",
        "summary": "យុទ្ធសាស្ត្រផ្សេងៗក្នុងការបង្ហាញ UI ផ្អែកលើលក្ខខណ្ឌ និង state របស់កម្មវិធី។",
        "explanation": "នៅក្នុង React យើងអាចជ្រើសរើសបង្ហាញ UI ផ្សេងៗគ្នាអាស្រ័យលើតម្លៃនៃ state ឬ props។ អ្នកអាចជ្រើសរើសប្រើប្រាស់បច្ចេកទេស early return, ternary operators (`? :`), ឬ `switch` statement ផ្អែកលើទម្រង់ UI ជាក់ស្តែង។",
        "keyPoints": [
          "ប្រើ **Early Return** សម្រាប់គ្រប់គ្រង state កម្រិតទំព័រ (page-level guards) ដូចជាស្ថានភាព unauthenticated, loading, ឬ error។",
          "ប្រើ **Ternary Operator** សម្រាប់ការផ្លាស់ប្តូរ UI ពីរជម្រើសនៅខាងក្នុង JSX markup ដោយផ្ទាល់។",
          "រៀបចំកូដឱ្យមានភាពច្បាស់លាស់ ដោយជៀសវាងការដាក់ nested conditionals ច្រើនជាន់ដែលពិបាកអាន។"
        ],
        "codeSnippet": "export function AccountStatus({ status }: { status: 'loading' | 'verified' | 'unverified' }) {\n  if (status === 'loading') {\n    return <p className=\"text-slate-500\">Checking status...</p>;\n  }\n\n  return (\n    <div>\n      {status === 'verified' ? (\n        <span className=\"text-emerald-400\">Account Active ✓</span>\n      ) : (\n        <span className=\"text-amber-400\">Please verify your email address</span>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Conditional Rendering Pattern",
        "proTip": "ប្រើ Early Return Pattern ដើម្បីការពារកុំឱ្យកូដខាងក្រោមដំណើរការ នៅពេលដែលទិន្នន័យកំពុងស្ថិតក្នុងដំណាក់កាល Loading ឬជួប Error។"
      },
      {
        "id": "m05-08",
        "number": "08",
        "title": "Ternary Rendering",
        "summary": "ការប្រើប្រាស់ Ternary Operator (? :) សម្រាប់ inline if/else logic យ៉ាងខ្លីស្អាត។",
        "explanation": "Ternary operator តាមទម្រង់ `condition ? <ComponentA /> : <ComponentB />` គឺជាដំណោះស្រាយដ៏ស័ក្តិសមបំផុតសម្រាប់ប្តូររវាង UI ពីរផ្សេងគ្នា (mutually exclusive) នៅខាងក្នុង JSX markup ដោយផ្ទាល់។",
        "keyPoints": [
          "ល្អបំផុតសម្រាប់ binary switches ដូចជា Dark/Light theme, Active/Inactive state, ឬ Login/Logout buttons។",
          "ជួយឱ្យកូដ JSX មានភាពខ្លី និងមានភាព declarative ខ្ពស់។",
          "អាចប្រើសម្រាប់កំណត់ dynamic CSS class names ផ្អែកលើ state ផងដែរ។"
        ],
        "codeSnippet": "<button className={isActive ? \"bg-blue-600 text-white\" : \"bg-slate-800 text-slate-400\"}>\n  {isActive ? \"Currently Selected\" : \"Select Option\"}\n</button>",
        "codeLanguage": "jsx",
        "codeTitle": "Inline Ternary Operator",
        "proTip": "កុំសរសេរ ternary តត្រួតគ្នា (nested ternaries) នៅក្នុង JSX ព្រោះវាពិបាកអាន និងងាយបង្កើតកំហុស។ ប្រសិនបើមានលើសពី ២ លក្ខខណ្ឌ ចូរប្រើ early return ឬ helper function ជំនួសវិញ។"
      },
      {
        "id": "m05-09",
        "number": "09",
        "title": "Logical AND Rendering",
        "summary": "ការប្រើប្រាស់ Logical AND (&&) ដើម្បី render UI នៅពេលដែលលក្ខខណ្ឌពិត (truthy)។",
        "explanation": "ការប្រើប្រាស់ syntax `condition && <Element />` នឹងធ្វើការ render `<Element />` ប្រសិនបើ `condition` មានតម្លៃ truthy ហើយវានឹងរំលងមិន render អ្វីទាំងអស់ប្រសិនបើតម្លៃជា `false` ឬ `null`។",
        "keyPoints": [
          "ប្រើប្រាស់នៅពេលដែលអ្នកចង់បង្ហាញ UI តែមួយជម្រើស (render ពេលពិត ឬមិន render ទាល់តែសោះ)។",
          "ត្រូវប្រាកដថា operand ខាងឆ្វេងមានតម្លៃជា boolean ពិតប្រាកដ (ឧ. `Boolean(val)`, `val > 0`, ឬ `!!val`) ដើម្បីជៀសវាងការ render ចេញលេខ `0` ឬ `NaN` ដោយអចេតនា។",
          "ស័ក្តិសមបំផុតសម្រាប់ badge alerts, discount banners, ឬ error indicators។"
        ],
        "codeSnippet": "export function NotificationBanner({ hasDiscount, discountCode }: BannerProps) {\n  return (\n    <div>\n      {hasDiscount && (\n        <div className=\"bg-emerald-950/80 border border-emerald-800 p-2 text-emerald-300 text-xs rounded\">\n          Use code <strong>{discountCode}</strong> for 20% off!\n        </div>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Logical AND Guard",
        "pitfall": "ប្រយ័ត្នបញ្ហាលេខ `0`៖ ការសរសេរ `items.length && <List />` នឹងបង្ហាញលេខ `0` លើអេក្រង់នៅពេលដែល array ទទេ! ត្រូវសរសេរ `items.length > 0 && <List />` ជានិច្ច។"
      },
      {
        "id": "m05-10",
        "number": "10",
        "title": "Empty States",
        "summary": "ការរចនាទម្រង់ Empty State ប្រកបដោយភាពទាក់ទាញ នៅពេលដែលបញ្ជីទិន្នន័យទទេស្អាត។",
        "explanation": "Empty States គឺជាផ្ទាំង UI ដែលត្រូវបង្ហាញនៅពេលដែលបណ្តុំទិន្នន័យគ្មានធាតុ (empty array) ដូចជាលទ្ធផលស្វែងរកមិនឃើញ ឬមិនទាន់មានទិន្នន័យបង្កើតថ្មី។ ការរចនា Empty State ច្បាស់លាស់ជួយណែនាំអ្នកប្រើប្រាស់ និងលើកកម្ពស់ UX ឱ្យកាន់តែប្រសើរ។",
        "keyPoints": [
          "ពិនិត្យប្រវែង array មុនពេលបង្ហាញ (`data.length === 0`) ដើម្បីប្តូរទៅ render Empty State។",
          "គួររួមបញ្ចូលនូវ Icon តំណាង, ចំណងជើងពន្យល់ច្បាស់លាស់, និង Call-to-Action (CTA) button ដើម្បីជំរុញឱ្យអ្នកប្រើប្រាស់បង្កើតទិន្នន័យដំបូង។",
          "ជៀសវាងការទុកឱ្យទំព័រនៅសល់តែចន្លោះទទេស្អាត ដែលអាចធ្វើឱ្យអ្នកប្រើប្រាស់គិតថាកម្មវិធីខូច ឬគាំង។"
        ],
        "codeSnippet": "export function TaskList({ tasks = [] }) {\n  // Check if data array is empty\n  if (tasks.length === 0) {\n    return (\n      <div className=\"text-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-2xl\">\n        <h3 className=\"text-lg font-medium text-white\">No tasks created yet</h3>\n        <p className=\"text-sm text-slate-400 max-w-sm mx-auto mt-1 mb-4\">\n          Your task list is empty. Add a new item to get started.\n        </p>\n        <span className=\"inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium\">\n          Ready for your first task\n        </span>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"space-y-2\">\n      {tasks.map((task) => (\n        <div key={task.id} className=\"p-3 bg-slate-900 rounded-lg text-white\">\n          {task.title}\n        </div>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Engaging Empty State Component",
        "proTip": "Empty State ដ៏ល្អមិនត្រឹមតែប្រាប់ថា 'គ្មានទិន្នន័យ' ប៉ុណ្ណោះទេ តែត្រូវតែណែនាំអ្នកប្រើប្រាស់ពីសកម្មភាពបន្ទាប់ (Next Action) តាមរយៈ Call-to-Action (CTA) button។"
      },
      {
        "id": "m05-11",
        "number": "11",
        "title": "Loading UI",
        "summary": "ការប្រើ Skeleton loaders និង spinners ដើម្បីបង្កើន perceived performance សម្រាប់ UX ទំនើប។",
        "explanation": "Skeleton loaders ជួយកាត់បន្ថយបាតុភូត Cumulative Layout Shift (CLS) ដោយការបង្ហាញគ្រោង layout ដែលមានទម្រង់ និងទំហំប្រហាក់ប្រហែលនឹងទិន្នន័យពិត ខណៈពេលដែល network request កំពុងដំណើរការ។",
        "keyPoints": [
          "ប្រើប្រាស់ utility class ដូចជា `animate-pulse` របស់ Tailwind CSS ដើម្បីបង្កើត effect ភ្លឺផ្លេកៗសម្រាប់ skeleton placeholders។",
          "រៀបចំ skeleton ឱ្យត្រូវគ្នានឹង card, list item, ឬ page structure ដែលនឹងត្រូវបង្ហាញ។",
          "ជួយបង្កើន perceived performance ធ្វើឱ្យអ្នកប្រើប្រាស់មានអារម្មណ៍ថាកម្មវិធីដំណើរការរហ័ស និងឆ្លើយតបទាន់ចិត្ត។"
        ],
        "codeSnippet": "export function CardSkeleton() {\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl animate-pulse space-y-3\">\n      <div className=\"h-5 bg-slate-800 rounded w-2/3\" />\n      <div className=\"h-4 bg-slate-800/60 rounded w-full\" />\n      <div className=\"h-4 bg-slate-800/60 rounded w-4/5\" />\n      <div className=\"h-8 bg-slate-800 rounded w-24 mt-4\" />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Tailwind Skeleton Loader",
        "proTip": "Skeleton loading ផ្តល់អារម្មណ៍ថាកម្មវិធីដើរលឿនជាង Spinner ធម្មតា ព្រោះវាបង្ហាញទម្រង់ទ្រង់ទ្រាយនៃ Layout ជាមុន (Perceived Performance)។"
      },
      {
        "id": "m05-12",
        "number": "12",
        "title": "Error UI",
        "summary": "ការបង្ហាញសារប្រាប់ដំណឹងអំពី error និង conditional UI ដើម្បីផ្តល់បទពិសោធន៍ល្អដល់អ្នកប្រើប្រាស់។",
        "explanation": "នៅពេលដែលដំណើរការទាញយកទិន្នន័យជួបការបរាជ័យ (failed) កម្មវិធីត្រូវតែបង្ហាញនូវផ្ទាំង Error UI តាមរយៈ conditional rendering ដើម្បីផ្តល់ព័ត៌មានមានប្រយោជន៍ដល់អ្នកប្រើប្រាស់។",
        "keyPoints": [
          "ប្រើ conditional rendering ដើម្បីប្តូររវាង Normal UI និង Error UI ផ្អែកលើ status នៃទិន្នន័យ។",
          "បង្ហាញ error message ដែលងាយស្រួលយល់ និងមិនស្មុគស្មាញពេកសម្រាប់អ្នកប្រើប្រាស់ទូទៅ។",
          "ប្រើពណ៌សម្គាល់សមស្រប (ដូចជា tông ពណ៌ rose ឬ red) ដើម្បីឱ្យអ្នកប្រើប្រាស់ចាប់អារម្មណ៍ភ្លាមៗ (ចំណែកឯ button interactions នឹងត្រូវសិក្សានៅ Module 06)។"
        ],
        "codeSnippet": "export function DataDisplay({ isError, errorMessage, data }) {\n  // Conditional Error UI rendering\n  if (isError) {\n    return (\n      <div className=\"p-5 bg-rose-950/40 border border-rose-800/60 rounded-xl text-center\">\n        <p className=\"text-rose-300 font-medium\">{errorMessage}</p>\n        <p className=\"mt-2 text-xs text-rose-400\">\n          Please check your connection and refresh the page.\n        </p>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"p-5 bg-slate-900 border border-slate-800 rounded-xl\">\n      <h3 className=\"text-white font-bold\">{data.title}</h3>\n      <p className=\"text-slate-400 text-sm mt-1\">{data.description}</p>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Conditional Error UI Component",
        "proTip": "កុំគ្រាន់តែបង្ហាញពាក្យថា 'Something went wrong'។ ចូរផ្តល់នូវ error message ដែលជាក់លាក់ រួមជាមួយការណែនាំដោះស្រាយច្បាស់លាស់។"
      }
    ]
  },
  {
    "id": "module-06",
    "number": "06",
    "title": "Events",
    "category": "Core Concepts",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី React SyntheticEvent System, onClick, onChange, onSubmit, Event Bubbling/Propagation, ការប្រើប្រាស់ preventDefault និងគោលការណ៍ Best Practices ក្នុងការគ្រប់គ្រង Events ឱ្យមានសុវត្ថិភាព។",
    "iconName": "Zap",
    "topics": [
      {
        "id": "m06-01",
        "number": "01",
        "title": "React Events",
        "summary": "ប្រព័ន្ធ SyntheticEvent របស់ React ដែលធ្វើការ wrap native browser events ឱ្យដំណើរការដូចគ្នានៅលើគ្រប់ browsers។",
        "explanation": "នៅក្នុង React រាល់ event ទាំងអស់មិនត្រូវបាន bind ទៅលើ DOM ផ្ទាល់ដូច JavaScript ធម្មតានោះឡើយ។ React ប្រើប្រាស់ប្រព័ន្ធ `SyntheticEvent` ដែលជា wrapper ព័ទ្ធជុំវិញ native browser event ដើម្បីធានាថា event ដំណើរការដូចគ្នាបេះបិទលើគ្រប់ web browsers ទាំងអស់ មិនថា Chrome, Safari, Firefox, ឬ Edge ឡើយ។",
        "keyPoints": [
          "React Synthetic Events ត្រូវគ្នានឹងស្តង់ដារ W3C និងផ្តល់នូវ cross-browser consistency យ៉ាងរលូន។",
          "Event attributes នៅក្នុង JSX ត្រូវបានសរសេរជាទម្រង់ camelCase ជានិច្ច ដូចជា `onClick`, `onChange`, `onKeyDown` ជំនួសឱ្យ `onclick`, `onchange`។",
          "React ធ្វើការ delegated events នៅកម្រិត root container ដើម្បីបង្កើន memory performance និងល្បឿនប្រតិបត្តិការ។"
        ],
        "codeSnippet": "export function EventLogger() {\n  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n    console.log(\"Event Type:\", e.type);\n    console.log(\"Coordinates:\", e.clientX, e.clientY);\n  };\n\n  return <button onClick={handleClick}>Log Event</button>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "React SyntheticEvent Handling",
        "proTip": "SyntheticEvent ផ្តល់នូវ interface ដូចគ្នាបេះបិទទៅនឹង W3C native event specification ដូច្នេះអ្នកអាចប្រើ `e.target`, `e.preventDefault()`, ឬ `e.clientX` បានយ៉ាងងាយស្រួល។"
      },
      {
        "id": "m06-02",
        "number": "02",
        "title": "Event Handlers",
        "summary": "ភាពខុសគ្នារវាងការបញ្ជូន Function Reference និងការហៅ Function (Invocation) ពេល render។",
        "explanation": "កំហុសឆ្គងទូទៅបំផុតមួយសម្រាប់អ្នកចាប់ផ្តើមរៀន React គឺការដាក់វង់ក្រចក `()` នៅពេលភ្ជាប់ handler។ អ្នកត្រូវតែបញ្ជូន **Function Reference** (`onClick={handleClick}`) មិនមែនជាការហៅ function ដោយផ្ទាល់ (`onClick={handleClick()}`) នោះទេ ព្រោះការហៅ function នឹងធ្វើឱ្យកូដនោះដំណើរការភ្លាមៗនៅពេល component កំពុង render។",
        "keyPoints": [
          "បញ្ជូន Function Reference ដោយគ្មានវង់ក្រចក៖ `onClick={handleClick}`។",
          "ប្រសិនបើអ្នកត្រូវការបញ្ជូន arguments បន្ថែម ចូរប្រើ inline arrow function៖ `onClick={() => handleDelete(id)}`។",
          "ការសរសេរ `onClick={handleClick()}` នឹង return តម្លៃរបស់ function ទៅឱ្យ onClick ដែលមិនត្រឹមតែរត់ខុសពេលនោះទេ ថែមទាំងធ្វើឱ្យ event លែងដំណើរការទៀតផង។"
        ],
        "codeSnippet": "// ❌ Wrong: handleClick runs immediately on render!\n// <button onClick={handleClick()}>Click</button>\n\n// ✅ Correct: Function reference passed\n<button onClick={handleClick}>Click</button>\n\n// ✅ Correct: Arrow function wrapper for arguments\n<button onClick={() => handleDelete(item.id)}>Delete</button>",
        "codeLanguage": "jsx",
        "codeTitle": "Function Reference vs Invocation",
        "pitfall": "ដាច់ខាតកុំដាក់វង់ក្រចក `()` នៅខាងចុង handler ដូចជា `onClick={handleClick()}` ព្រោះវានឹងរត់ភ្លាមៗនៅពេល render ហើយបង្កជា infinite loop ប្រសិនបើមាន state update នៅខាងក្នុង!"
      },
      {
        "id": "m06-03",
        "number": "03",
        "title": "onClick",
        "summary": "ការចាប់យក និងគ្រប់គ្រង Click interactions លើ buttons, links, និង UI cards។",
        "explanation": "`onClick` គឺជា event handler ដែលត្រូវបានប្រើប្រាស់ញឹកញាប់បំផុតនៅក្នុងកម្មវិធី React។ វាត្រូវបាន trigger នៅពេលដែលអ្នកប្រើប្រាស់ចុច mouse, ប៉ះលើ touchscreen, ឬចុចគ្រាប់ចុច Enter/Space នៅលើ element នោះ។",
        "keyPoints": [
          "ដំណើរការជាមួយ mouse clicks, mobile touches និង keyboard navigation នៅពេលប្រើប្រាស់ HTML elements ស្តង់ដារដូចជា `<button>`។",
          "ប្រសិនបើអ្នកដាក់ `onClick` លើ `<div>` ធម្មតា ត្រូវប្រាកដថាបានបន្ថែម accessibility attributes ដូចជា `role=\"button\"` និង `tabIndex={0}`។",
          "អាចចាប់យក click coordinates, modifier keys (Shift, Ctrl, Alt) តាមរយៈ event object `e`។"
        ],
        "codeSnippet": "<button \n  onClick={(e) => {\n    e.stopPropagation();\n    console.log(\"Clicked!\");\n  }}\n  className=\"px-4 py-2 bg-blue-600 rounded-lg text-white\"\n>\n  Click Me\n</button>",
        "codeLanguage": "jsx",
        "codeTitle": "onClick Handler",
        "proTip": "គួរប្រើ native `<button>` element ជានិច្ចសម្រាប់ធាតុដែលអាចចុចបាន (clickable elements) ព្រោះវាគាំទ្រ accessibility (a11y) និង keyboard interaction (Enter/Space) ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m06-04",
        "number": "04",
        "title": "onChange",
        "summary": "ការតាមដានការផ្លាស់ប្តូរទិន្នន័យ (Real-time updates) លើ text inputs, textareas, និង select dropdowns។",
        "explanation": "ខុសប្លែកពី vanilla JavaScript ដែល `change` event ដំណើរការតែនៅពេលដែល input បាត់បង់ focus (blur) នៅក្នុង React វិញ `onChange` ត្រូវបាន trigger ភ្លាមៗរាល់ពេលដែលតម្លៃក្នុង input ប្រែប្រួល (សូម្បីតែការវាយអក្សរតែមួយតួ)។ នេះជាមូលដ្ឋានគ្រឹះដ៏សំខាន់សម្រាប់គ្រប់គ្រង Form State ក្នុងទម្រង់ Controlled Components។",
        "keyPoints": [
          "ទាញយកតម្លៃថ្មីរបស់ input តាមរយៈ `e.target.value`។",
          "សម្រាប់ checkboxes ត្រូវទាញយកតាមរយៈ `e.target.checked` ជំនួសឱ្យ `value`។",
          "ប្រើរួមគ្នាជាមួយ `value` prop ដើម្បីបង្កើតជា Controlled Input ដែលមានលំហូរទិន្នន័យច្បាស់លាស់។"
        ],
        "codeSnippet": "export function SearchInput({ value, onChange }: SearchInputProps) {\n  return (\n    <input \n      type=\"text\" \n      value={value} \n      onChange={(e) => onChange(e.target.value)}\n      placeholder=\"Filter topics...\"\n      className=\"w-full bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-white\"\n    />\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "onChange Event Handler",
        "proTip": "នៅក្នុង React ព្រឹត្តិការណ៍ `onChange` ដំណើរការលើរាល់ការចុចអក្សរម្តងៗ (keystroke) ដូច `oninput` ក្នុង JavaScript ធម្មតាដែរ ដែលជួយឱ្យការបង្កើត Controlled Components មានភាពងាយស្រួលបំផុត។"
      },
      {
        "id": "m06-05",
        "number": "05",
        "title": "onSubmit",
        "summary": "ការគ្រប់គ្រង Form submissions និងការការពារមិនឱ្យ browser refresh/reload ទំព័រ។",
        "explanation": "តាមលំនាំដើមរបស់ browser នៅពេលដែល form ត្រូវបាន submit វានឹងធ្វើការ refresh ទំព័រទាំងមូល ឬបញ្ជូន HTTP request ទៅកាន់ action URL។ នៅក្នុងកម្មវិធី Single Page Application (SPA) យើងត្រូវតែប្រើប្រាស់ `e.preventDefault()` នៅខាងក្នុង `onSubmit` handler ដើម្បីទប់ស្កាត់ការ reload និងអនុញ្ញាតឱ្យ JavaScript ចាត់ចែង submission តាមរយៈ API។",
        "keyPoints": [
          "ត្រូវហៅ `e.preventDefault()` ជានិច្ចនៅដើមបន្ទាត់នៃ form handler function។",
          "ភ្ជាប់ `onSubmit` ទៅកាន់ `<form>` tag ផ្ទាល់ មិនមែនភ្ជាប់ `onClick` ទៅកាន់ submit button នោះទេ ដើម្បីឱ្យ user អាច submit តាមរយៈការចុច Enter បាន។",
          "ជួយឱ្យ form validation ដើរស្របតាមស្តង់ដារ HTML5 (ដូចជា required attributes) មុនពេល handler ដំណើរការ។"
        ],
        "codeSnippet": "export function LoginForm() {\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    console.log(\"Form submitted safely without page reload!\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"space-y-3\">\n      <input type=\"email\" placeholder=\"Email\" required />\n      <button type=\"submit\" className=\"bg-blue-600 px-4 py-2 rounded text-white\">Log In</button>\n    </form>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "onSubmit Form Handler",
        "pitfall": "ប្រសិនបើអ្នកភ្លេចហៅ `e.preventDefault()` នោះ browser នឹងធ្វើការ reload ទំព័រទាំងមូល និងបាត់បង់ state ទាំងអស់នៃ Single Page Application (SPA) របស់អ្នក!"
      },
      {
        "id": "m06-06",
        "number": "06",
        "title": "onMouseEnter & onMouseLeave",
        "summary": "ការគ្រប់គ្រង Hover interactions, animations និងការបង្ហាញ tooltips។",
        "explanation": "`onMouseEnter` និង `onMouseLeave` ត្រូវបានប្រើប្រាស់សម្រាប់ចាប់យកសកម្មភាព hover របស់ mouse cursor ចូល និងចេញពី element។ ព្រឹត្តិការណ៍ទាំងពីរនេះស័ក្តិសមបំផុតសម្រាប់ការបង្កើត interactions, preview popovers, ឬ logging animations។",
        "keyPoints": [
          "`onMouseEnter` និង `onMouseLeave` មិនធ្វើការ bubble ឡើងលើ parent ឡើយ (ខុសពី `onMouseOver` និង `onMouseOut`) ដែលជួយកាត់បន្ថយបញ្ហា flickering នៅពេល hover លើ child elements។",
          "ចាប់យក mouse cursor coordinates ឬ trigger custom logic ក្នុងពេល hover (ចំណែកឯការផ្លាស់ប្តូរ UI តាមរយៈ State នឹងត្រូវសិក្សានៅ Module 07 បន្ទាប់)។",
          "ត្រូវប្រាកដថាបានផ្តល់នូវ keyboard alternative (ដូចជា `onFocus` និង `onBlur`) សម្រាប់អ្នកប្រើប្រាស់ដែលមិនប្រើ mouse។"
        ],
        "codeSnippet": "export function HoverPreview() {\n  const handleMouseEnter = () => {\n    console.log(\"Mouse cursor entered container\");\n  };\n\n  const handleMouseLeave = () => {\n    console.log(\"Mouse cursor left container\");\n  };\n\n  return (\n    <div \n      onMouseEnter={handleMouseEnter}\n      onMouseLeave={handleMouseLeave}\n      className=\"p-6 border border-slate-800 rounded-xl bg-slate-900 hover:border-indigo-500 transition-colors text-center text-slate-300 cursor-pointer\"\n    >\n      Hover over me! (Check browser console for event logs)\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Hover Handlers",
        "proTip": "សម្រាប់ visual effects សាមញ្ញៗ (ដូចជាការប្តូរពណ៌ ឬស្រមោល) គួរប្រើ CSS `:hover` ឬ Tailwind `hover:` classes។ ប្រើ `onMouseEnter/Leave` នៅពេលដែលអ្នកត្រូវការចាប់យក mouse events ក្នុង JavaScript logic។"
      },
      {
        "id": "m06-07",
        "number": "07",
        "title": "Passing Event Functions",
        "summary": "ការបញ្ជូន custom event callback functions ឆ្លងកាត់ props ចុះទៅកាន់ child components។",
        "explanation": "នៅក្នុង React ទិន្នន័យហូរពីលើចុះក្រោម (One-way Data Flow) ប៉ុន្តែនៅពេលដែល child component ចង់ប្រាប់ parent អំពីសកម្មភាពណាមួយ Parent ត្រូវតែបញ្ជូន callback function មួយចុះក្រោមតាមរយៈ props ដើម្បីឱ្យ child អាចហៅ (trigger) ឡើងវិញបាន។",
        "keyPoints": [
          "**ក្បួនដាក់ឈ្មោះស្តង់ដារ**៖ ប្រើបុព្វបទ `on*` សម្រាប់ props (ឧ. `onSelect`, `onSubmit`) និង `handle*` សម្រាប់ function definitions (ឧ. `handleSelect`, `handleSubmit`)។",
          "Parent component ជាអ្នកគ្រប់គ្រង state និងសម្រេចចិត្តថាតើត្រូវធ្វើអ្វីបន្ត នៅពេលដែល child ធ្វើការ trigger event។",
          "ជួយឱ្យ child components មានភាព reusable ខ្ពស់ ព្រោះពួកវាមិនចាំបាច់ដឹងពី business logic ស៊ីជម្រៅរបស់ parent ឡើយ។"
        ],
        "codeSnippet": "interface TopicItemProps {\n  topic: TopicItem;\n  onSelectTopic: (topic: TopicItem) => void;\n}\n\nexport function TopicCard({ topic, onSelectTopic }: TopicItemProps) {\n  return (\n    <div onClick={() => onSelectTopic(topic)} className=\"cursor-pointer\">\n      <h4>{topic.title}</h4>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Passing Event Callbacks",
        "proTip": "គោរពតាម React Naming Convention៖ ប្រើបុព្វបទ `on` សម្រាប់ឈ្មោះ Prop (`onSelectTopic`, `onDelete`) និងប្រើបុព្វបទ `handle` សម្រាប់ឈ្មោះ Function អនុវត្តផ្ទាល់ (`handleSelectTopic`, `handleDelete`)។"
      },
      {
        "id": "m06-08",
        "number": "08",
        "title": "Event Parameters",
        "summary": "ការបញ្ជូន arguments បន្ថែម (ដូចជា record ID) ទៅកាន់ event handlers តាមរយៈ inline arrow functions។",
        "explanation": "ជាញឹកញាប់នៅក្នុងបញ្ជីទិន្នន័យ (Lists) អ្នកត្រូវការបញ្ជូនតម្លៃជាក់លាក់ណាមួយ (ដូចជា Item ID, index ឬ record object) ទៅកាន់ handler ពេលចុចលើធាតុនីមួយៗ។ ដំណោះស្រាយដ៏សាមញ្ញ និងមានប្រសិទ្ធភាពបំផុតគឺការប្រើ inline arrow function ដើម្បី wrap ពីលើ handler នោះ។",
        "keyPoints": [
          "ប្រើ syntax៖ `onClick={(e) => handleAction(item.id, e)}` ដើម្បីបញ្ជូនទាំង ID និង event object។",
          "ជៀសវាងការសរសេរ `onClick={handleAction(item.id)}` ដាច់ខាត ព្រោះវានឹងរត់កូដភ្លាមៗពេល render។",
          "វិធីសាស្ត្រនេះជួយឱ្យកូដមានភាពសាមញ្ញ ងាយយល់ និងស្អាតបាត។"
        ],
        "codeSnippet": "<button onClick={(e) => handleArchive(item.id, e)}>\n  Archive Item\n</button>",
        "codeLanguage": "jsx",
        "codeTitle": "Passing Custom Parameters",
        "proTip": "ប្រសិនបើអ្នកត្រូវការទាំង custom argument និង event object ដើម ចូរទទួលយក `e` ក្នុង arrow function រួចបញ្ជូនបន្ត៖ `(e) => handleAction(id, e)`។"
      },
      {
        "id": "m06-09",
        "number": "09",
        "title": "Preventing Default Behavior",
        "summary": "ការប្រើប្រាស់ e.preventDefault() លើ forms, links និង keyboard shortcuts។",
        "explanation": "ធាតុ HTML មួយចំនួនមានឥរិយាបថលំនាំដើមរបស់ browser (default browser action) ដូចជា tag `<a>` នឹងបើកតំណភ្ជាប់ថ្មី, tag `<form>` នឹង reload ទំព័រពេល submit, ឬគ្រាប់ចុច arrow keys នឹង scroll ទំព័រ។ តាមរយៈ method `e.preventDefault()` យើងអាចទប់ស្កាត់សកម្មភាពទាំងនេះ ដើម្បីជំនួសដោយ custom logic របស់យើងវិញ។",
        "keyPoints": [
          "នៅក្នុង React ការ return `false` ពី handler មិនមានប្រសិទ្ធភាពទប់ស្កាត់ default behavior ឡើយ — អ្នកត្រូវតែហៅ `e.preventDefault()` ដោយផ្ទាល់។",
          "ប្រើលើ `<form onSubmit>` ដើម្បីការពារកុំឱ្យ reload ទំព័រ។",
          "ប្រើលើ tag `<a>` នៅពេលដែលអ្នកចង់ប្រើ SPA routing (ដូចជា `router.push`) ជំនួសឱ្យ hard browser navigation។"
        ],
        "codeSnippet": "const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {\n  e.preventDefault();\n  router.push('/custom-destination');\n};",
        "codeLanguage": "jsx",
        "codeTitle": "e.preventDefault() Usage",
        "proTip": "នៅក្នុង React ការសរសេរ `return false;` មិនអាចទប់ស្កាត់លំនាំដើមរបស់ browser បានដូចក្នុង vanilla JS ឬ jQuery ឡើយ។ អ្នកត្រូវតែហៅ `e.preventDefault()` ជានិច្ច។"
      },
      {
        "id": "m06-10",
        "number": "10",
        "title": "Event Propagation",
        "summary": "ស្វែងយល់អំពី Event Bubbling និងការទប់ស្កាត់ parent trigger ដោយប្រើ e.stopPropagation()។",
        "explanation": "នៅក្នុង Document Object Model (DOM) ព្រឹត្តិការណ៍ clicks និង interactions ផ្សេងៗនឹងធ្វើដំណើរផុសឡើងលើ (Event Bubbling) ពី child element ឡើងទៅកាន់ parent elements តាមលំដាប់រហូតដល់ root។ ការហៅ `e.stopPropagation()` អនុញ្ញាតឱ្យយើងបញ្ឈប់ដំណើរ bubbling នេះមិនឱ្យប៉ះពាល់ដល់ parent handlers ឡើយ។",
        "keyPoints": [
          "សំខាន់បំផុតសម្រាប់ nested clickable elements ដូចជាប៊ូតុង \"Delete\" ឬ \"Bookmark\" ដែលស្ថិតនៅក្នុង clickable card។",
          "`e.stopPropagation()` បញ្ឈប់ការបញ្ជូន event ទៅកាន់ parent components ខាងលើ។",
          "ខុសពី `e.preventDefault()`៖ `preventDefault` ទប់ស្កាត់ browser default action ចំណែក `stopPropagation` ទប់ស្កាត់កុំឱ្យ event រត់ឡើងទៅ parent។"
        ],
        "codeSnippet": "export function CardWithAction() {\n  return (\n    <div onClick={() => console.log(\"Card opened\")} className=\"p-4 border rounded\">\n      <h3>Card Title</h3>\n      <button \n        onClick={(e) => {\n          e.stopPropagation(); // Prevents card opening!\n          console.log(\"Deleted\");\n        }}\n        className=\"text-rose-500\"\n      >\n        Delete\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "e.stopPropagation() in Nested Elements",
        "pitfall": "នៅពេលដែលមានប៊ូតុង 'Delete' ឬ 'Like' នៅខាងក្នុង Card ដែលអាចចុចបើកមើល detail បាន ប្រសិនបើអ្នកមិនប្រើ `e.stopPropagation()` ទេ នោះការចុច Delete ក៏នឹងបើក Card នោះដែរ!"
      },
      {
        "id": "m06-11",
        "number": "11",
        "title": "Keyboard Events",
        "summary": "ការគ្រប់គ្រង Keyboard interactions ដូចជាការចុច Enter, Escape ដើម្បីបិទ modal, និង shortcut Cmd+K។",
        "explanation": "ការគ្រប់គ្រង keyboard events (ដូចជា `onKeyDown`, `onKeyUp`) អនុញ្ញាតឱ្យអ្នកបង្កើតនូវបទពិសោធន៍ប្រើប្រាស់ដ៏សម្បូរបែប ដូចជាការបិទ Modal ដោយចុចគ្រាប់ចុច `Escape`, ការបញ្ជូនសារដោយចុច `Enter`, ឬការ trigger shortcuts ផ្សេងៗ។",
        "keyPoints": [
          "ពិនិត្យគ្រាប់ចុចដោយប្រើប្រាស់ `e.key` (ឧ. `e.key === 'Escape'`, `e.key === 'Enter'`)។",
          "សម្រាប់ shortcut keys បញ្ចូលគ្នា ត្រូវពិនិត្យ boolean flags ដូចជា `e.metaKey` (សម្រាប់ Mac Command) ឬ `e.ctrlKey` (សម្រាប់ Windows Ctrl)។",
          "ចាប់យក keyboard events ដោយផ្ទាល់លើ input ឬ interactive elements តាមរយៈ handler `onKeyDown` ឬ `onKeyUp`។"
        ],
        "codeSnippet": "export function SearchInput() {\n  const handleKeyDown = (e) => {\n    if (e.key === 'Enter') {\n      alert(`Search submitted for: ${e.target.value}`);\n    } else if (e.key === 'Escape') {\n      e.target.value = '';\n    }\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2\">\n      <label className=\"block text-xs text-slate-400\">\n        Type query and press Enter to search, or Escape to clear:\n      </label>\n      <input\n        type=\"text\"\n        onKeyDown={handleKeyDown}\n        placeholder=\"Search courses...\"\n        className=\"w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500\"\n      />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Keyboard Event Handler with onKeyDown",
        "proTip": "ប្រើប្រាស់ `e.key` ជំនួសឱ្យ `e.keyCode` (deprecated) ព្រោះ `e.key` ផ្តល់ឈ្មោះគ្រាប់ចុចច្បាស់លាស់ដូចជា `'Enter'`, `'Escape'`, ឬ `'ArrowDown'`។"
      },
      {
        "id": "m06-12",
        "number": "12",
        "title": "Event Handling Best Practices",
        "summary": "គោលការណ៍ល្អៗដូចជាការបំបែក Event Handlers ចេញពី JSX, ការដាក់ឈ្មោះច្បាស់លាស់ និង preventDefault។",
        "explanation": "ដើម្បីកសាងកម្មវិធី React ឱ្យមានប្រសិទ្ធភាពខ្ពស់ និងគ្មាន bugs អ្នកគួរតែរៀបចំ event handlers ឱ្យមានរបៀបរៀបរយ បំបែក logic ចេញពី JSX markup និងផ្តល់ឈ្មោះ handler functions ឱ្យមានន័យច្បាស់លាស់។",
        "keyPoints": [
          "**បំបែក Handler ចេញពី JSX**៖ សរសេរ handler functions ដាច់ដោយឡែកនៅផ្នែកខាងលើនៃ component ដើម្បីឱ្យ JSX markup មានភាពស្រឡះ និងងាយស្រួលអាន។",
          "**Naming Conventions**៖ ប្រើបុព្វបទ `handle` សម្រាប់ handler functions ដូចជា `handleSaveDraft`, `handleDiscard`។",
          "**គ្រប់គ្រង Default Behavior**៖ ប្រើ `e.preventDefault()` ឱ្យបានត្រឹមត្រូវដើម្បីទប់ស្កាត់ default browser actions (ចំណែក form state នឹងត្រូវសិក្សានៅ Module 07 និង Module 08)។"
        ],
        "codeSnippet": "// Best Practice: Extract event handlers into descriptive, named functions\nexport function ActionToolbar() {\n  const handleSaveDraft = (e) => {\n    e.preventDefault();\n    console.log(\"Draft successfully saved!\");\n    alert(\"Draft saved!\");\n  };\n\n  const handleDiscard = () => {\n    const confirmed = window.confirm(\"Are you sure you want to discard changes?\");\n    if (confirmed) {\n      console.log(\"Draft discarded by user\");\n    }\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900 border border-slate-800 rounded-xl flex gap-3\">\n      <button \n        type=\"button\" \n        onClick={handleSaveDraft}\n        className=\"px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium\"\n      >\n        Save Draft\n      </button>\n      <button \n        type=\"button\" \n        onClick={handleDiscard}\n        className=\"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium\"\n      >\n        Discard\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Best Practice Event Handler",
        "proTip": "តែងតែទាញយក handler logic ចេញពី JSX មកសរសេរជា function ដាច់ដោយឡែក ដើម្បីឱ្យ JSX ងាយស្រួលអាន និងងាយស្រួលធ្វើ unit test។"
      }
    ]
  },
  {
    "id": "module-07",
    "number": "07",
    "title": "State",
    "category": "Core Concepts",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី useState Hook, ភាពខុសគ្នារវាង State vs Props, យន្តការ Re-rendering, គោលការណ៍ Immutability លើ Objects និង Arrays, Derived State និង State Batching ក្នុង React 18+។",
    "iconName": "Sliders",
    "topics": [
      {
        "id": "m07-01",
        "number": "01",
        "title": "What is State?",
        "summary": "សតិចងចាំរបស់ Component (Memory) ដែលធ្វើឱ្យ UI ធ្វើការ re-render ដោយស្វ័យប្រវត្តិនៅពេលទិន្នន័យប្រែប្រួល។",
        "explanation": "State គឺជាទិន្នន័យដែលផ្លាស់ប្តូរទៅតាមពេលវេលា ឆ្លើយតបទៅនឹងសកម្មភាពរបស់អ្នកប្រើប្រាស់ (User Actions) ឬការឆ្លើយតបពីបណ្តាញ (Network Responses)។ នៅពេលដែល state ប្រែប្រួលតម្លៃ React នឹងរៀបចំកាលវិភាគ (schedule) ដើម្បីធ្វើការ re-render component នោះឡើងវិញ និង update លើ DOM ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "State មានលក្ខណៈឯកជន (private) សម្រាប់តែ instance នៃ component ផ្ទាល់ខ្លួនប៉ុណ្ណោះ។",
          "State ត្រូវបាន React រក្សាទុកតម្លៃឆ្លងកាត់ការ re-render នីមួយៗ (ខុសពីអថេរធម្មតាដែលត្រូវប្រកាសឡើងវិញ)។",
          "ការ update តម្លៃ state គឺជាកត្តាចម្បងដែល trigger ឱ្យមានដំណើរការ reconciliation និងការ re-render UI។"
        ],
        "codeSnippet": "import { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)} className=\"px-4 py-2 bg-blue-600 text-white rounded\">\n      Count: {count}\n    </button>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Basic State Declaration",
        "proTip": "គិតពី State ដូចជាសតិចងចាំ (Memory) របស់ Component៖ អថេរធម្មតាក្នុង function នឹងត្រូវ reset ឡើងវិញរាល់ពេល render តែ State ត្រូវបាន React រក្សាទុកឆ្លងកាត់ការ render ទាំងអស់។",
        "interactiveDemoKey": "StateDemo"
      },
      {
        "id": "m07-02",
        "number": "02",
        "title": "State vs Props",
        "summary": "ការប្រៀបធៀបរវាងទិន្នន័យខាងក្នុងដែលអាចកែប្រែបាន (State) និងទិន្នន័យបញ្ជូនពីក្រៅដែលមិនអាចកែប្រែបាន (Props)។",
        "explanation": "ខណៈពេលដែល Props ត្រូវបានប្រើដើម្បី configure component ពីខាងក្រៅ (ដូច parameters នៃ function) State វិញត្រូវបានប្រើដើម្បីផ្ទុក និងគ្រប់គ្រងទិន្នន័យដែលមានប្រតិកម្មរហ័ស (interactive changes) នៅខាងក្នុង component ផ្ទាល់។",
        "keyPoints": [
          "**Props**៖ បញ្ជូនពីលើចុះក្រោម (Parent -> Child) និងមានលក្ខណៈ Read-only (Immutable)។",
          "**State**៖ បង្កើត និងគ្រប់គ្រងផ្ទៃក្នុង component ដោយអាចធ្វើការកែប្រែតម្លៃបានតាមរយៈ updater function។",
          "Component អាចបញ្ជូន state របស់ខ្លួនចុះក្រោមទៅឱ្យ child component ប្រើប្រាស់ក្នុងនាមជា props បាន។"
        ],
        "codeSnippet": "// Props: Read-only input from parent\nfunction Display({ message }: { message: string }) {\n  return <h1>{message}</h1>;\n}\n\n// State: Internal interactive value\nfunction Editor() {\n  const [text, setText] = useState(\"Hello\");\n  return <Display message={text} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "State vs Props in Action",
        "proTip": "ច្បាប់ងាយចងចាំ៖ ប្រសិនបើទិន្នន័យនោះបញ្ជូនមកពី Parent ហើយមិនអាចកែប្រែបាន វាគឺជា Props។ ប្រសិនបើ Component ខ្លួនឯងជាអ្នកបង្កើត គ្រប់គ្រង និងផ្លាស់ប្តូរ វាគឺជា State។"
      },
      {
        "id": "m07-03",
        "number": "03",
        "title": "useState",
        "summary": "ការប្រកាស State variables និង updater functions ដោយប្រើប្រាស់ standard hook របស់ React។",
        "explanation": "Hook `useState` គឺជា built-in hook មូលដ្ឋានបំផុតក្នុង React។ នៅពេលហៅប្រើ វា return ត្រឡប់មកវិញនូវ Array Destructuring ដែលមាន ២ ធាតុ៖ ទីមួយគឺជាតម្លៃ State បច្ចុប្បន្ន និងទីពីរគឺជា Updater Function សម្រាប់កែប្រែតម្លៃនោះ (`const [state, setState] = useState(initialValue)`)។",
        "keyPoints": [
          "ត្រូវតែហៅ hooks នៅកម្រិតកំពូល (Top level) នៃ React function component ជានិច្ច។",
          "ដាច់ខាតកុំហៅ hooks នៅខាងក្នុង loops, conditions, ឬ nested functions។",
          "នៅក្នុង TypeScript អ្នកអាចកំណត់ Generic type ដូចជា `useState<User | null>(null)` ដើម្បីធានា Type Safety។"
        ],
        "codeSnippet": "const [isOpen, setIsOpen] = useState(false);\nconst [user, setUser] = useState<User | null>(null);\nconst [tags, setTags] = useState<string[]>([]);",
        "codeLanguage": "jsx",
        "codeTitle": "useState TypeScript Declarations",
        "proTip": "គោរពតាមច្បាប់ Rules of Hooks ជានិច្ច៖ ហៅ `useState` នៅកម្រិតខាងលើបង្អស់ (Top Level) នៃ Component មិនត្រូវដាក់ក្នុង if conditions ឬ loops ឡើយ។"
      },
      {
        "id": "m07-04",
        "number": "04",
        "title": "Updating State",
        "summary": "ភាពខុសគ្នារវាងការជំនួសតម្លៃផ្ទាល់ និងការប្រើប្រាស់ Functional Updater Pattern (prev => prev + 1)។",
        "explanation": "នៅពេលដែលតម្លៃ state ថ្មីត្រូវការគណនាផ្អែកលើតម្លៃ state ចាស់ អ្នកគួរតែបញ្ជូន callback function ទៅឱ្យ updater ជានិច្ច ដូចជា៖ `setCount(prev => prev + 1)`។ វិធីនេះធានាថាអ្នកនឹងទទួលបានតម្លៃ state ចុងក្រោយបង្អស់ជានិច្ច និងការពារបញ្ហា Stale Closure អំឡុងពេលមាន batched updates។",
        "keyPoints": [
          "**Functional update pattern**៖ `setCount(prev => prev + 1)`។",
          "ធានាថានឹងទាញយកតម្លៃ state ថ្មីបំផុតពិតប្រាកដ ទោះបីជាហៅច្រើនដងជាប់គ្នាក្នុង event តែមួយក៏ដោយ។",
          "ជួយការពារ bugs នៅពេលដំណើរការក្នុង asynchronous callbacks (ដូចជា `setTimeout` ឬ `fetch`)។"
        ],
        "codeSnippet": "// ⚠️ Problem with direct state:\n// setCount(count + 1);\n// setCount(count + 1); // count is still stale; only increments by 1!\n\n// ✅ Solution: Functional updates\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // Increments by 2 safely!",
        "codeLanguage": "jsx",
        "codeTitle": "Functional State Updates",
        "proTip": "នៅពេលណាដែលតម្លៃ State ថ្មីត្រូវពឹងផ្អែកលើតម្លៃ State ចាស់ ចូរប្រើ Functional Updater (`prev => ...`) ជានិច្ច ដើម្បីការពារបញ្ហា Stale State ពេលមាន batching ឬ async calls។"
      },
      {
        "id": "m07-05",
        "number": "05",
        "title": "State and Re-rendering",
        "summary": "របៀបដែល React ធ្វើការប្រៀបធៀប Object.is() ដើម្បីសម្រេចថាតើត្រូវ re-render ឬអត់។",
        "explanation": "React ធ្វើការប្រៀបធៀបតម្លៃ state ចាស់ និងថ្មីដោយប្រើប្រាស់ algorithm `Object.is()`។ ប្រសិនបើតម្លៃ memory reference នៅដដែល (មិនប្រែប្រួល) React នឹងសន្មតថាគ្មានអ្វីផ្លាស់ប្តូរឡើយ ហើយរំលងការ re-render ចោល។ ហេតុនេះហើយបានជាការ mutate objects ឬ arrays ដោយផ្ទាល់មិនអាចធ្វើឱ្យ UI ធ្វើបច្ចុប្បន្នភាពបាន។",
        "keyPoints": [
          "ការ mutate object/array ដោយផ្ទាល់រក្សា memory reference ដដែល -> React មិន trigger re-render ឡើយ!",
          "ត្រូវតែ return object ឬ array ថ្មីជានិច្ចតាមរយៈ Spread Operator (`...`) ឬ Immutable methods។",
          "រាល់ការផ្លាស់ប្តូរ state ដោយជោគជ័យនឹងជំរុញឱ្យ component និង child components របស់វា re-render ឡើងវិញ។"
        ],
        "codeSnippet": "// ❌ Bug: Mutating array in place fails to re-render\n/*\nitems.push(newItem);\nsetItems(items); // Identical reference! React does nothing.\n*/\n\n// ✅ Fix: Create new array reference via spread\nsetItems(prev => [...prev, newItem]);",
        "codeLanguage": "jsx",
        "codeTitle": "Immutability & Object.is() Comparison",
        "pitfall": "ការកែប្រែ array ឬ object ដោយផ្ទាល់ (in-place mutation) ដូចជា `.push()` ឬ `.splice()` នឹងមិន trigger ឱ្យមានការ re-render ឡើយ! ត្រូវតែបង្កើត reference ថ្មីជានិច្ច `[...prev, newItem]`។"
      },
      {
        "id": "m07-06",
        "number": "06",
        "title": "Updating Objects",
        "summary": "ការ update object state ដោយរក្សាគោលការណ៍ Immutability តាមរយៈ Object Spread Operator (...)។",
        "explanation": "នៅក្នុង JavaScript អថេរ object គឺជា reference type។ នៅពេលអ្នកចង់កែប្រែ property ណាមួយនៅក្នុង object state អ្នកត្រូវតែប្រើប្រាស់ Object Spread Operator (`...`) ដើម្បីចម្លង properties ចាស់ៗទាំងអស់ រួច overwrite លើ property ណាដែលអ្នកចង់ផ្លាស់ប្តូរតម្លៃ។",
        "keyPoints": [
          "រូបមន្តទូទៅ៖ `setUser(prev => ({ ...prev, name: 'New Name' }))`។",
          "កុំកែប្រែដោយផ្ទាល់ដូចជា `user.name = 'New Name'` ដាច់ខាត។",
          "ត្រូវប្រាកដថា wrap object literals ដោយវង់ក្រចក `({ ... })` ពេល return ចេញពី arrow function។"
        ],
        "codeSnippet": "interface Profile {\n  name: string;\n  theme: 'light' | 'dark';\n  notifications: boolean;\n}\n\nconst [profile, setProfile] = useState<Profile>({\n  name: 'Alex',\n  theme: 'dark',\n  notifications: true,\n});\n\n// Update single field safely:\nconst toggleTheme = () => {\n  setProfile(prev => ({\n    ...prev,\n    theme: prev.theme === 'dark' ? 'light' : 'dark',\n  }));\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Updating Object State Immutably",
        "proTip": "ត្រូវចងចាំថា Spread Operator `...prev` ធ្វើការ copy តែ shallow level ប៉ុណ្ណោះ។ ប្រសិនបើមាន nested objects ជ្រៅ អ្នកត្រូវ spread តាមដំណាក់កាលនីមួយៗ ឬពិចារណាប្រើ Immer library។"
      },
      {
        "id": "m07-07",
        "number": "07",
        "title": "Updating Arrays",
        "summary": "វិធីសាស្ត្របន្ថែម លុប កែប្រែ និង filter ធាតុក្នុង array ដោយមិន mutate តម្លៃដើម។",
        "explanation": "Arrays នៅក្នុង State មិនត្រូវកែប្រែតាមរយៈ mutating methods ដូចជា `.push()`, `.pop()`, `.splice()`, ឬ `.reverse()` ឡើយ។ ជំនួសមកវិញ អ្នកត្រូវតែប្រើប្រាស់ immutable methods ដូចជា `.filter()` សម្រាប់លុបធាតុ, `.map()` សម្រាប់កែប្រែធាតុ និង `[...prev, item]` សម្រាប់បន្ថែមធាតុថ្មី។",
        "keyPoints": [
          "**បន្ថែមធាតុថ្មី**៖ `[...items, newItem]`",
          "**លុបធាតុ**៖ `items.filter(i => i.id !== id)`",
          "**កែប្រែធាតុជាក់លាក់**៖ `items.map(i => i.id === id ? { ...i, done: true } : i)`",
          "វិធីសាស្ត្រទាំងអស់នេះបង្កើត array ថ្មីមួយជានិច្ច ដែលធ្វើឱ្យ React ដឹងពីការប្រែប្រួល និង re-render UI ភ្លាមៗ។"
        ],
        "codeSnippet": "// Common Immutable Array Operations:\n// 1. Add\nsetTodos(prev => [...prev, newTodo]);\n\n// 2. Remove\nsetTodos(prev => prev.filter(todo => todo.id !== deleteId));\n\n// 3. Update single item\nsetTodos(prev => prev.map(todo => \n  todo.id === targetId ? { ...todo, completed: !todo.completed } : todo\n));",
        "codeLanguage": "jsx",
        "codeTitle": "Immutable Array Helpers",
        "proTip": "ចងចាំក្បួន ៣ យ៉ាងសម្រាប់ Array State៖ បន្ថែមប្រើ `[...prev, item]`, លុបប្រើ `.filter()`, និងកែប្រែតម្លៃប្រើ `.map()`។"
      },
      {
        "id": "m07-08",
        "number": "08",
        "title": "Multiple State Variables",
        "summary": "ពេលណាដែលត្រូវបំបែក state ជាច្រើន និងពេលណាដែលគួរប្រមូលផ្តុំជា object តែមួយ។",
        "explanation": "អ្នកអាចហៅ `useState` ច្រើនដងនៅក្នុង component តែមួយបាន។ គោលការណ៍ល្អគឺត្រូវបំបែក state ណាដែលមិនទាក់ទងគ្នាឱ្យនៅជាអថេរឯករាជ្យដាច់ដោយឡែកពីគ្នា។ វិធីនេះជួយឱ្យកូដងាយស្រួលអាន ងាយស្រួលថែទាំ និងងាយស្រួល refactor ទៅថ្ងៃមុខ។",
        "keyPoints": [
          "អថេរ State ដាច់ដោយឡែកពីគ្នាធ្វើឱ្យ logic មានភាពសាមញ្ញ និងកាត់បន្ថយភាពស្មុគស្មាញនៃការ update។",
          "ដាក់បញ្ចូលគ្នាជា Object លុះត្រាតែវាជា fields នៃ Form តែមួយ ឬតម្លៃដែលផ្លាស់ប្តូរទន្ទឹមគ្នាជានិច្ច។",
          "ជួយជៀសវាងការ spread properties ច្រើនជាន់ដោយមិនចាំបាច់។"
        ],
        "codeSnippet": "// Good: Independent concerns kept separate\nconst [searchQuery, setSearchQuery] = useState('');\nconst [currentPage, setCurrentPage] = useState(1);\nconst [isLoading, setIsLoading] = useState(false);",
        "codeLanguage": "jsx",
        "codeTitle": "Multiple State Slices",
        "proTip": "បំបែក state ប្រសិនបើតម្លៃទាំងនោះផ្លាស់ប្តូរដាច់ដោយឡែកពីគ្នា។ ប្រមូលផ្តុំជា object តែមួយប្រសិនបើតម្លៃទាំងនោះតែងតែផ្លាស់ប្តូរជាមួយគ្នា (ដូចជា mouse coordinates `{x, y}`) ឬជា form inputs។"
      },
      {
        "id": "m07-09",
        "number": "09",
        "title": "Derived State",
        "summary": "ការគណនាតម្លៃចេញពី state/props ដែលមានស្រាប់អំឡុងពេល render ដោយមិនចាំបាច់បង្កើត state ជាន់គ្នា។",
        "explanation": "កំហុសដ៏ធំបំផុតមួយក្នុង React គឺការបង្កើត State ស្ទួន (redundant state) សម្រាប់ទិន្នន័យដែលអាចគណនាចេញពី props ឬ state ដទៃទៀតបាន។ អ្នកមិនចាំបាច់រក្សាទុកអ្វីដែលជាលទ្ធផលនៃការគណនានោះទេ ចូរគណនាវាដោយផ្ទាល់ (Derived on the fly) អំឡុងពេល render។",
        "keyPoints": [
          "ការរក្សាទុក State ស្ទួននឹងនាំឱ្យកើតមាន bugs ធ្ងន់ធ្ងរនៅពេលដែលទិន្នន័យទាំងពីរមិនស៊ីសង្វាក់គ្នា (Out-of-sync)។",
          "គណនាដោយផ្ទាល់ក្នុង component body៖ `const count = items.length;`។",
          "ប្រើប្រាស់ `useMemo` លុះត្រាតែការគណនានោះមានភាពស្មុគស្មាញ និងស៊ីធនធាន CPU ខ្លាំង (expensive calculation) ប៉ុណ្ណោះ។"
        ],
        "codeSnippet": "// ❌ Redundant state anti-pattern:\n// const [items, setItems] = useState([]);\n// const [itemCount, setItemCount] = useState(0); // Redundant!\n\n// ✅ Derived state:\nexport function CartView({ items }: { items: CartItem[] }) {\n  // Purely derived calculation during render:\n  const itemCount = items.length;\n  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n\n  return <div>Total ({itemCount} items): ${totalPrice.toFixed(2)}</div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Derived State Pattern",
        "proTip": "ចូរសួរខ្លួនឯងថា៖ តើតម្លៃនេះអាចគណនាចេញពី Props ឬ State ដែលមានស្រាប់បានដែរឬទេ? ប្រសិនបើអាច ដាច់ខាតកុំយកវាទៅដាក់ក្នុង `useState`!"
      },
      {
        "id": "m07-10",
        "number": "10",
        "title": "State Initialization",
        "summary": "ការប្រើប្រាស់ Lazy State Initialization Function សម្រាប់ប្រតិបត្តិការ setup ដែលស៊ី memory ឬ CPU ខ្លាំង។",
        "explanation": "ប្រសិនបើតម្លៃដំបូង (initial state) នៃ component របស់អ្នកត្រូវការការគណនាស្មុគស្មាញ ឬអានទិន្នន័យពី Storage (ដូចជាការ parse JSON ពី `localStorage`) អ្នកគួរតែបញ្ជូន function ទៅកាន់ `useState(() => computeValue())` ដែលហៅថា **Lazy State Initialization**។ Function នេះនឹងដំណើរការតែម្តងគត់នៅពេល component ត្រូវ mount ដំបូង។",
        "keyPoints": [
          "ការសរសេរ `useState(computeValue())` នឹងដំណើរការ `computeValue()` រាល់ពេលដែល component ធ្វើការ re-render (ខ្ជះខ្ជាយ CPU)។",
          "ការសរសេរ `useState(() => computeValue())` ដំណើរការតែម្តងគត់នៅពេល initial mount។",
          "ជួយបង្កើន performance របស់ application យ៉ាងខ្លាំងចំពោះ heavy setup operations។"
        ],
        "codeSnippet": "// Runs only once on initial mount:\nconst [savedTheme, setSavedTheme] = useState(() => {\n  if (typeof window === 'undefined') return 'dark';\n  return localStorage.getItem('theme') || 'dark';\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Lazy State Initialization Function",
        "proTip": "ប្រសិនបើការទាញយក initial value ត្រូវការអានពី `localStorage` ឬ parse JSON ធំ ចូរប្រើ `useState(() => getHeavyData())` ព្រោះវាដំណើរការតែម្តងគត់ពេល component mount ដំបូង។"
      },
      {
        "id": "m07-11",
        "number": "11",
        "title": "State Batching",
        "summary": "យន្តការ Automatic Batching ក្នុង React 18+ ដែលប្រមូលផ្តុំ updates ច្រើនក្នុង async calls ឱ្យ render តែម្តងគត់។",
        "explanation": "State Batching គឺជាយន្តការឆ្លាតវៃរបស់ React ដែលធ្វើការប្រមូលផ្តុំការផ្លាស់ប្តូរ state ជាច្រើនបញ្ចូលគ្នា រួចធ្វើការ re-render តែមួយលើកគត់ ដើម្បីបង្កើនល្បឿន និងប្រសិទ្ធភាពនៃ application។ ចាប់ពី React 18 ឡើងទៅ យន្តការ **Automatic Batching** នេះដំណើរការលើគ្រប់ស្ថានភាពទាំងអស់ រួមទាំង asynchronous operations ដូចជា Promises, `setTimeout`, ឬ native event listeners។",
        "keyPoints": [
          "កាត់បន្ថយការ re-render កម្រិតមធ្យមដែលមិនចាំបាច់ (prevents unnecessary intermediate re-renders)។",
          "ជួយបង្កើន overall rendering performance របស់កម្មវិធី។",
          "ប្រសិនបើអ្នកត្រូវការ force update ភ្លាមៗ (កម្រជួប) អ្នកអាចប្រើ `flushSync()` ពី `react-dom` បាន។"
        ],
        "codeSnippet": "async function handleAsyncSave() {\n  await api.save();\n  // In React 18+, both updates batch into 1 single render:\n  setIsLoading(false);\n  setSuccess(true);\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Automatic Async Batching",
        "proTip": "នៅក្នុង React 18+ Automatic Batching ដំណើរការគ្រប់ទីកន្លែង រួមទាំងខាងក្នុង `setTimeout`, Promises និង Native Event Handlers ផងដែរ។"
      },
      {
        "id": "m07-12",
        "number": "12",
        "title": "State Management Best Practices",
        "summary": "គោលការណ៍ State Colocation, ការរក្សា state ឱ្យនៅកៀក UI បំផុត និង Single Source of Truth។",
        "explanation": "ការគ្រប់គ្រង State ឱ្យមានរបៀបរៀបរយគឺជាគន្លឹះចម្បងក្នុងការជៀសវាង bugs និងធ្វើឱ្យកម្មវិធី React ងាយស្រួលពង្រីក។ គោលការណ៍ចម្បងគឺត្រូវរក្សា State ឱ្យនៅជិតបំផុតទៅនឹងទីកន្លែងដែលត្រូវប្រើប្រាស់វា (State Colocation) និងជៀសវាងការបង្កើត Global State ដោយមិនចាំបាច់។",
        "keyPoints": [
          "**State Colocation**៖ រក្សា state ឱ្យនៅខាងក្នុង component ផ្ទាល់។ លើក state ឡើងទៅ parent (Lifting State Up) លុះត្រាតែមាន sibling components ផ្សេងទៀតត្រូវការប្រើប្រាស់ទិន្នន័យនោះរួមគ្នា។",
          "**Single Source of Truth**៖ កុំចម្លង props ទៅដាក់ក្នុង state លុះត្រាតែអ្នកមានបំណងចង់ឱ្យវាដើរតួជា initial value ស៊ីដាច់ដោយឡែក។",
          "រក្សា state ឱ្យនៅជាទម្រង់សាមញ្ញ និងប្រើ derived values ជំនួសការបង្កើត state ស្ទួន។"
        ],
        "codeSnippet": "// State Colocation Rule:\n// If only ComponentA needs 'isModalOpen', keep it inside ComponentA,\n// NOT in the global store or App root!",
        "codeLanguage": "jsx",
        "codeTitle": "State Colocation Rule",
        "proTip": "គោលការណ៍ State Colocation៖ ប្រសិនបើមានតែ ComponentA មួយគត់ដែលប្រើប្រាស់ state នោះ ចូរទុកវានៅក្នុង ComponentA កុំទាន់ប្រញាប់លើកវាទៅដាក់ក្នុង Global Store ឬ App Root!"
      }
    ]
  },
  {
    "id": "module-08",
    "number": "08",
    "title": "Forms",
    "category": "Core Concepts",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី Controlled vs Uncontrolled Components, ប្រភេទ Input ផ្សេងៗ (Text, Textarea, Select, Checkbox, Radio), Form Validation, ការគ្រប់គ្រង Error States និងការបង្កើត Reusable Form Components។",
    "iconName": "FileText",
    "topics": [
      {
        "id": "m08-01",
        "number": "01",
        "title": "React Forms",
        "summary": "ភាពខុសគ្នារវាងទម្រង់ Form ធម្មតាក្នុង HTML និង State-driven model របស់ React។",
        "explanation": "នៅក្នុង HTML ធម្មតា ធាតុ form inputs ដូចជា `<input>`, `<textarea>`, និង `<select>` តែងតែរក្សាទុក state ផ្ទៃក្នុងរបស់វាដោយផ្ទាល់នៅលើ DOM។ ប៉ុន្តែនៅក្នុង React វិញ យើងចងភ្ជាប់តម្លៃរបស់ input ទៅនឹង React State ដោយធ្វើឱ្យ State ដើរតួជា Single Source of Truth (ប្រភពទិន្នន័យតែមួយគត់ដែលគួរឱ្យទុកចិត្ត)។",
        "keyPoints": [
          "**Controlled Inputs**៖ ចងភ្ជាប់ attribute `value` ទៅនឹង State និងប្រើ event handler `onChange` ដើម្បី update State នោះ។",
          "Component គ្រប់គ្រងរាល់អ្វីៗទាំងអស់ដែលបង្ហាញនៅលើ screen ធ្វើឱ្យការ validate និង format ទិន្នន័យមានភាពងាយស្រួល។",
          "ជួយឱ្យ UI ឆ្លើយតបទាន់ចិត្តភ្លាមៗរាល់ពេលដែលអ្នកប្រើប្រាស់វាយបញ្ចូលអក្សរ។"
        ],
        "codeSnippet": "export function SimpleForm() {\n  const [name, setName] = useState('');\n  return (\n    <input \n      value={name} \n      onChange={(e) => setName(e.target.value)} \n      className=\"p-2 border rounded\"\n    />\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Input",
        "proTip": "នៅក្នុង React យើងមិនទាញតម្លៃ input ចេញពី DOM តាមរយៈ `document.getElementById` ឡើយ។ យើងចងភ្ជាប់តម្លៃ input ជាមួយ State ដើម្បីឱ្យ React ក្លាយជា Single Source of Truth។",
        "interactiveDemoKey": "FormValidationDemo"
      },
      {
        "id": "m08-02",
        "number": "02",
        "title": "Controlled Components",
        "summary": "ការគ្រប់គ្រងតម្លៃ Inputs ទាំងស្រុងតាមរយៈ React State (Single Source of Truth)។",
        "explanation": "Controlled Component ធានាថារាល់អ្វីៗដែលអ្នកប្រើប្រាស់មើលឃើញនៅលើអេក្រង់ គឺតែងតែស៊ីសង្វាក់គ្នា (synchronized) ជាមួយ React State ជានិច្ច។ វិធីសាស្ត្រនេះអនុញ្ញាតឱ្យយើងអាចត្រួតពិនិត្យ (validate), កែតម្រូវទម្រង់ (format), និងសម្អាត (sanitize) តម្លៃដែលបញ្ចូលមកបានភ្លាមៗក្នុង real-time។",
        "keyPoints": [
          "តម្លៃរបស់ element ត្រូវបានកំណត់ និងគ្រប់គ្រងដោយ State ជានិច្ច (`value={state}`)។",
          "រាល់ការផ្លាស់ប្តូរតម្លៃត្រូវតែឆ្លងកាត់ `onChange` handler ជាមុនសិន មុនពេលបង្ហាញឡើងវិញនៅលើអេក្រង់។",
          "អ្នកអាចបដិសេធ ឬកែសម្រួលអក្សរដែលអ្នកប្រើប្រាស់វាយចូល (ឧទាហរណ៍៖ អនុញ្ញាតឱ្យវាយតែលេខ) យ៉ាងងាយស្រួល។"
        ],
        "codeSnippet": "export function PhoneInput() {\n  const [phone, setPhone] = useState('');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    // Only allow digits:\n    const cleaned = e.target.value.replace(/\\D/g, '').slice(0, 10);\n    setPhone(cleaned);\n  };\n\n  return <input value={phone} onChange={handleChange} placeholder=\"Digits only\" />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Input with Sanitization",
        "proTip": "Controlled Components អនុញ្ញាតឱ្យអ្នកធ្វើការ format ឬ sanitize ទិន្នន័យ (ដូចជាលេខទូរស័ព្ទ ឬកាតធនាគារ) បានភ្លាមៗមុនពេលវាត្រូវបានបង្ហាញលើអេក្រង់។"
      },
      {
        "id": "m08-03",
        "number": "03",
        "title": "Input Fields",
        "summary": "ការគ្រប់គ្រង input types ផ្សេងៗដូចជា text, number, email និង password។",
        "explanation": "ធាតុ `<input>` ស្តង់ដារនៅក្នុង React មានឥរិយាបថដូចគ្នានឹង HTML input ធម្មតាដែរ ប៉ុន្តែ attributes មួយចំនួនត្រូវបានប្តូរទៅជាទម្រង់ camelCase។ អ្នកអាចប្រើប្រាស់ input types ផ្សេងៗដូចជា `text`, `email`, `password`, ឬ `number` ជាមួយ Controlled State បានយ៉ាងរលូន។",
        "keyPoints": [
          "ប្រើប្រាស់ `type=\"email\"` ឬ `type=\"password\"` ជាមួយនឹង controlled values ជានិច្ច។",
          "តែងតែផ្តល់នូវ `placeholder` និង label ច្បាស់លាស់ដើម្បីបង្កើន accessibility និងបទពិសោធន៍អ្នកប្រើប្រាស់។",
          "ប្រើ Tailwind classes ដើម្បីរៀបចំ styles ឱ្យស្រស់ស្អាត ដូចជា focus ring និង border states។"
        ],
        "codeSnippet": "<input \n  type=\"password\"\n  value={password}\n  onChange={(e) => setPassword(e.target.value)}\n  placeholder=\"Enter secure password\"\n  className=\"px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white\"\n/>",
        "codeLanguage": "jsx",
        "codeTitle": "Password Input",
        "proTip": "សម្រាប់ `type=\"number\"` ចងចាំថា `e.target.value` នៅតែ return ជា string ជានិច្ច។ ដូច្នេះអ្នកត្រូវប្រើ `Number(e.target.value)` ឬ `e.target.valueAsNumber` ប្រសិនបើចង់បានតម្លៃជាលេខពិតប្រាកដ។"
      },
      {
        "id": "m08-04",
        "number": "04",
        "title": "Textarea",
        "summary": "ការគ្រប់គ្រង multi-line text input ដោយប្រើ controlled value prop ជំនួសឱ្យ children។",
        "explanation": "ខុសប្លែកពី HTML ស្តង់ដារដែលអត្ថបទរបស់ textarea ត្រូវស្ថិតនៅចន្លោះបើក និងបិទ tags នៅក្នុង React ធាតុ `<textarea>` ត្រូវបានរចនាឡើងឱ្យប្រើប្រាស់ `value` attribute ដូចគ្នានឹង `<input>` ធម្មតាដែរ។ ការធ្វើបែបនេះជួយឱ្យ API នៃ form elements ទាំងអស់មានភាពស៊ីសង្វាក់គ្នាតែមួយ។",
        "keyPoints": [
          "ប្រើប្រាស់ `value` attribute សម្រាប់កំណត់តម្លៃអត្ថបទ មិនត្រូវដាក់ជា children ឡើយ។",
          "ប្រើ `rows` និង `cols` ឬ CSS classes ដើម្បីកំណត់កម្ពស់ដំបូងនៃ textarea។",
          "ភ្ជាប់ `onChange={(e) => setBio(e.target.value)}` ដើម្បី update state ពេលវាយបញ្ចូល។"
        ],
        "codeSnippet": "<textarea \n  value={bio} \n  onChange={(e) => setBio(e.target.value)} \n  rows={4} \n  className=\"w-full bg-slate-900 border rounded-lg p-3 text-white\"\n/>",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Textarea",
        "pitfall": "នៅក្នុង HTML ធម្មតា អត្ថបទក្នុង textarea ត្រូវសរសេរនៅចន្លោះ tags `<textarea>hello</textarea>`។ ប៉ុន្តែក្នុង React ការធ្វើបែបនេះជាកំហុស! អ្នកត្រូវតែប្រើ `value` attribute ជានិច្ច `<textarea value={bio} />`។"
      },
      {
        "id": "m08-05",
        "number": "05",
        "title": "Select",
        "summary": "ការគ្រប់គ្រង Dropdown select ដោយកំណត់ value ផ្ទាល់លើ <select> tag។",
        "explanation": "នៅក្នុង HTML ធម្មតា ដើម្បីកំណត់ថាជម្រើសណាមួយត្រូវបានជ្រើសរើស អ្នកត្រូវដាក់ attribute `selected` ទៅលើ `<option selected>` ជាក់លាក់នោះ។ ប៉ុន្តែនៅក្នុង React អ្នកគ្រាន់តែបញ្ជាក់ `value` prop ទៅលើ tag `<select>` ផ្ទាល់តែម្តង ដែលធ្វើឱ្យការគ្រប់គ្រង dropdown selection កាន់តែមានភាពងាយស្រួល។",
        "keyPoints": [
          "`<select value={selected}>` ជាអ្នកកំណត់ថាតើ option ណាដែលកំពុង active។",
          "តម្លៃក្នុង `<select>` នឹង update តាមរយៈ `onChange={(e) => setRole(e.target.value)}`។",
          "អាច loop បង្ហាញ options ពី array នៃទិន្នន័យដោយប្រើ `.map()` រួមជាមួយ `key` prop។"
        ],
        "codeSnippet": "<select \n  value={role} \n  onChange={(e) => setRole(e.target.value)}\n  className=\"bg-slate-900 border border-slate-800 text-white rounded-lg p-2\"\n>\n  <option value=\"student\">Student</option>\n  <option value=\"instructor\">Instructor</option>\n  <option value=\"admin\">Administrator</option>\n</select>",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Select Dropdown",
        "proTip": "នៅក្នុង React កុំដាក់ attribute `selected` នៅលើ `<option>` ឡើយ។ គ្រាន់តែបញ្ជាក់ `value={selectedRole}` នៅលើ `<select>` tag គឺគ្រប់គ្រាន់ហើយ។"
      },
      {
        "id": "m08-06",
        "number": "06",
        "title": "Checkbox",
        "summary": "ការគ្រប់គ្រង boolean inputs តាមរយៈ checked prop និង e.target.checked។",
        "explanation": "Checkbox ត្រូវបានប្រើប្រាស់សម្រាប់ទិន្នន័យប្រភេទ Boolean (`true` ឬ `false`) ដូចជាការយល់ព្រមលើលក្ខខណ្ឌ ឬការបើក/បិទមុខងារណាមួយ។ នៅក្នុង React អ្នកត្រូវប្រើប្រាស់ attribute `checked={isChecked}` ជំនួសឱ្យ `value` ហើយអានតម្លៃតាមរយៈ `e.target.checked`។",
        "keyPoints": [
          "ប្រើ `checked={booleanValue}` ដើម្បីកំណត់ស្ថានភាពជ្រើសរើស។",
          "អានតម្លៃតាមរយៈ `e.target.checked` មិនមែន `e.target.value` ឡើយ។",
          "តែងតែរុំព័ទ្ធ checkbox នៅក្នុង `<label>` ជាមួយនឹង text ដើម្បីឱ្យ user អាចចុចលើអក្សរបាន (Clickable area ធំជាងមុន)។"
        ],
        "codeSnippet": "<label className=\"flex items-center gap-2 cursor-pointer\">\n  <input \n    type=\"checkbox\" \n    checked={agreed} \n    onChange={(e) => setAgreed(e.target.checked)}\n    className=\"w-4 h-4 rounded text-blue-600\"\n  />\n  <span className=\"text-sm text-slate-300\">I accept terms and conditions</span>\n</label>",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Checkbox",
        "pitfall": "ដាច់ខាតកុំអាន `e.target.value` លើ checkbox ព្រោះវានឹងផ្តល់តម្លៃ string 'on' ជានិច្ច! ត្រូវអាន `e.target.checked` ដែលផ្តល់តម្លៃ boolean (`true` ឬ `false`)។"
      },
      {
        "id": "m08-07",
        "number": "07",
        "title": "Radio Button",
        "summary": "ការគ្រប់គ្រងការជ្រើសរើសជម្រើសតែមួយគត់ចេញពីក្រុម (Radio Group)។",
        "explanation": "Radio Buttons ត្រូវបានប្រើប្រាស់នៅពេលដែលអ្នកចង់ឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសយកជម្រើសតែមួយគត់ (Single-choice) ចេញពីជម្រើសជាច្រើន។ គ្រប់ radio inputs នៅក្នុង group តែមួយត្រូវតែប្រើប្រាស់ `name` attribute ដូចគ្នា និងត្រូវគ្រប់គ្រងដោយការប្រៀបធៀប `checked={selectedOption === value}`។",
        "keyPoints": [
          "ចងភ្ជាប់ radio buttons ទាំងអស់ក្នុង group ទៅកាន់ state string តែមួយ។",
          "លក្ខខណ្ឌជ្រើសរើសត្រូវបានកំណត់តាមរយៈ boolean expression៖ `checked={plan === option}`។",
          "ប្រើ `.map()` ដើម្បី render radio buttons ចេញពី array ដើម្បីកាត់បន្ថយកូដស្ទួន។"
        ],
        "codeSnippet": "export function PlanSelector() {\n  const [plan, setPlan] = useState<'free' | 'pro'>('pro');\n\n  return (\n    <div className=\"flex gap-4\">\n      {['free', 'pro'].map((option) => (\n        <label key={option} className=\"flex items-center gap-2\">\n          <input \n            type=\"radio\" \n            name=\"plan\" \n            value={option} \n            checked={plan === option} \n            onChange={(e) => setPlan(e.target.value as 'free' | 'pro')} \n          />\n          <span className=\"capitalize\">{option} Plan</span>\n        </label>\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Radio Group",
        "proTip": "Radio buttons ទាំងអស់នៅក្នុង group តែមួយត្រូវតែមាន `name` attribute ដូចគ្នា និងចងភ្ជាប់ទៅកាន់ State string តែមួយគត់។"
      },
      {
        "id": "m08-08",
        "number": "08",
        "title": "Form Submission",
        "summary": "ការវេចខ្ចប់ទិន្នន័យ Form និងការបញ្ជូនទៅកាន់ API endpoints ដោយសុវត្ថិភាព។",
        "explanation": "ការគ្រប់គ្រង Form Submission នៅក្នុង React ត្រូវបានធ្វើឡើងតាមរយៈ event `onSubmit` នៅលើ `<form>` tag។ មុនពេលបញ្ជូនទិន្នន័យទៅកាន់ API endpoint យើងត្រូវធ្វើការ validation ពិនិត្យភាពត្រឹមត្រូវ និងគ្រប់គ្រង loading state ដើម្បីកុំឱ្យអ្នកប្រើប្រាស់ចុច submit ស្ទួនច្រើនដង។",
        "keyPoints": [
          "ត្រូវតែហៅ `e.preventDefault()` ជានិច្ចដើម្បីការពារមិនឱ្យ browser ធ្វើការ refresh ទំព័រ។",
          "បើក `isSubmitting = true` អំឡុងពេល network request កំពុងដំណើរការ និងបិទ submit button។",
          "បង្ហាញ notification banners ឬ toast messages នៅពេល submission ជោគជ័យ ឬជួបកំហុស error។"
        ],
        "codeSnippet": "const handleSubmit = async (e: React.FormEvent) => {\n  e.preventDefault();\n  setIsSubmitting(true);\n  try {\n    await apiClient.post('/users', formData);\n    showSuccessToast('User registered successfully');\n  } catch (err) {\n    showErrorToast('Failed to register user');\n  } finally {\n    setIsSubmitting(false);\n  }\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Safe Form Submission Handler",
        "proTip": "ប្រើ try/catch/finally block រួមជាមួយ `isSubmitting` state ជានិច្ច ដើម្បីការពារការចុច double-submit និងបង្ហាញ visual loading feedback ដល់ user។"
      },
      {
        "id": "m08-09",
        "number": "09",
        "title": "Form State",
        "summary": "ការគ្រប់គ្រង inputs ច្រើន fields ក្នុងពេលតែមួយដោយប្រើ State Object តែមួយ។",
        "explanation": "ប្រសិនបើ form របស់អ្នកមាន input fields ច្រើន (ឧទាហរណ៍ ៥ ទៅ ១០ fields) ការបង្កើត `useState` ដាច់ដោយឡែកសម្រាប់ field នីមួយៗនឹងធ្វើឱ្យកូដវែងអន្លាយ និងពិបាកគ្រប់គ្រង។ ដំណោះស្រាយដ៏ប្រសើរគឺការប្រើប្រាស់ **Single State Object** រួមជាមួយ dynamic object key `[e.target.name]: e.target.value`។",
        "keyPoints": [
          "ប្រើ Dynamic Object Property Keys ក្នុង JavaScript៖ `[e.target.name]: e.target.value`។",
          "ត្រូវប្រាកដថាបាន spread state ចាស់ជានិច្ច (`...prev`) ដើម្បីកុំឱ្យបាត់បង់ទិន្នន័យក្នុង fields ដទៃទៀត។",
          "ងាយស្រួលក្នុងការ reset form ទាំងមូលត្រឡប់ទៅជា clean object វិញក្រោយពេល submit។"
        ],
        "codeSnippet": "export function MultiFieldForm() {\n  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setForm(prev => ({\n      ...prev,\n      [e.target.name]: e.target.value,\n    }));\n  };\n\n  return (\n    <form className=\"space-y-2\">\n      <input name=\"firstName\" value={form.firstName} onChange={handleChange} placeholder=\"First Name\" />\n      <input name=\"lastName\" value={form.lastName} onChange={handleChange} placeholder=\"Last Name\" />\n      <input name=\"email\" value={form.email} onChange={handleChange} placeholder=\"Email\" />\n    </form>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Unified Multi-Field Form Handler",
        "proTip": "កំណត់ attribute `name` លើ input នីមួយៗឱ្យដូចគ្នាបេះបិទនឹង key នៅក្នុង Form State Object នោះអ្នកអាចប្រើ generic `handleChange` តែមួយមុខគត់សម្រាប់គ្រប់ fields ទាំងអស់!"
      },
      {
        "id": "m08-10",
        "number": "10",
        "title": "Form Validation",
        "summary": "ក្បួនច្បាប់នៃការ validate ទិន្នន័យ synchronously នៅខាង client-side។",
        "explanation": "Client-side Form Validation គឺជាដំណាក់កាលត្រួតពិនិត្យភាពត្រឹមត្រូវនៃទិន្នន័យដែលអ្នកប្រើប្រាស់បានបញ្ចូល (ដូចជា ប្រវែងអប្បបរមា, ទម្រង់ Email regex, ឬ Required fields) មុនពេលបញ្ជូនទៅកាន់ server។ រាល់កំហុសដែលរកឃើញនឹងត្រូវរក្សាទុកក្នុង Errors Object ដើម្បីយកទៅបង្ហាញលើ UI។",
        "keyPoints": [
          "បង្កើត validation function ដែល return boolean (`isValid`) ឬ error map object។",
          "ពិនិត្យលក្ខខណ្ឌច្បាស់លាស់ ដូចជាវត្តមានតួអក្សរ `@` ក្នុង email ឬប្រវែង password យ៉ាងតិច ៨ តួ។",
          "ប្រសិនបើមាន errors ត្រូវបញ្ឈប់ដំណើរការ submission ភ្លាមៗ និងបង្ហាញសារប្រាប់ user។"
        ],
        "codeSnippet": "const validate = () => {\n  const newErrors: Record<string, string> = {};\n  if (!form.email.includes('@')) newErrors.email = 'Invalid email address';\n  if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';\n  setErrors(newErrors);\n  return Object.keys(newErrors).length === 0;\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Synchronous Validation Logic",
        "proTip": "ការ validate អាចធ្វើឡើងនៅពេល `onSubmit` (សាមញ្ញបំផុត), `onBlur` (ពេល user ចាកចេញពី field), ឬ `onChange` (real-time feedback) ផ្អែកលើបទពិសោធន៍ UX ដែលអ្នកចង់ផ្តល់ជូន។"
      },
      {
        "id": "m08-11",
        "number": "11",
        "title": "Validation Errors",
        "summary": "ការបង្ហាញសារប្រាប់ error ឱ្យស្អាត និងងាយយល់នៅកៀកនឹង input fields នីមួយៗ (Inline Errors)។",
        "explanation": "ការបង្ហាញកំហុសនៅលើ UI គួរតែមានភាពច្បាស់លាស់ និងនៅកៀកនឹង input field ផ្ទាល់ (Inline Errors)។ អ្នកអាចផ្លាស់ប្តូរពណ៌ border នៃ input ទៅជាពណ៌ក្រហម (rose/red) និងបង្ហាញ error text នៅពីក្រោម input ដើម្បីឱ្យអ្នកប្រើប្រាស់ងាយស្រួលកែតម្រូវ។",
        "keyPoints": [
          "ផ្លាស់ប្តូរ CSS border classes ដោយផ្អែកលើវត្តមានរបស់ error (ឧ. `errors.email && \"border-rose-500\"`).",
          "បង្ហាញ conditional message ខាងក្រោម input ដោយប្រើ syntax `errors.field && <p>{errors.field}</p>`។",
          "ប្រើ attribute `aria-describedby` សម្រាប់ accessibility ដើម្បីឱ្យ screen readers អាចអាន error message បាន។"
        ],
        "codeSnippet": "<div>\n  <input \n    className={cn(\"border rounded p-2\", errors.email && \"border-rose-500 bg-rose-950/20\")}\n    value={email}\n    onChange={(e) => setEmail(e.target.value)}\n  />\n  {errors.email && <p className=\"text-xs text-rose-400 mt-1\">{errors.email}</p>}\n</div>",
        "codeLanguage": "jsx",
        "codeTitle": "Inline Validation Error",
        "proTip": "Inline error messages ផ្តល់ UX ល្អជាង alert popups ឆ្ងាយណាស់ ព្រោះវាប្រាប់អ្នកប្រើប្រាស់យ៉ាងច្បាស់ចំចំណុចនៃបញ្ហា។"
      },
      {
        "id": "m08-12",
        "number": "12",
        "title": "Resetting Forms",
        "summary": "ការសម្អាត និងកំណត់ទម្រង់ form ឱ្យត្រឡប់ទៅតម្លៃដើមវិញក្រោយ submit រួច។",
        "explanation": "បន្ទាប់ពីទិន្នន័យត្រូវបានបញ្ជូនទៅកាន់ server ដោយជោគជ័យ អ្នកត្រូវតែសម្អាត fields ទាំងអស់ឱ្យត្រឡប់ទៅជាតម្លៃទទេស្អាតវិញ (clean initial state)។ វិធីល្អបំផុតគឺកំណត់ initial state ជា constant ខាងក្រៅ ដើម្បីងាយស្រួល reset ដោយគ្រាន់តែហៅ `setForm(INITIAL_STATE)`។",
        "keyPoints": [
          "បង្កើត constant `INITIAL_FORM` នៅខាងក្រៅ component function។",
          "កំណត់ `setForm(INITIAL_FORM)` និង `setErrors({})` នៅពេល request ទទួលបានជោគជ័យ។",
          "ជៀសវាងការសរសេរ reset fields ម្តងមួយៗដោយដៃ ដែលអាចបណ្តាលឱ្យភ្លេច field ណាមួយ។"
        ],
        "codeSnippet": "const INITIAL_FORM = { title: '', description: '' };\n\nexport function CreateTaskForm() {\n  const [form, setForm] = useState(INITIAL_FORM);\n\n  const handleSuccess = () => {\n    // Reset to blank:\n    setForm(INITIAL_FORM);\n  };\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Resetting Form State",
        "proTip": "ទាញ initial values ចេញមកជា constant នៅខាងក្រៅ component (ឧ. `INITIAL_FORM`) ដើម្បីងាយស្រួលហៅប្រើឡើងវិញទាំងពេល mount និងពេល reset form។"
      },
      {
        "id": "m08-13",
        "number": "13",
        "title": "Reusable Form Components",
        "summary": "ការកសាង reusable wrappers ដូចជា FormField, TextField និង SelectField សម្រាប់ enterprise apps។",
        "explanation": "នៅក្នុងកម្មវិធីកម្រិត Enterprise ដែលមានទម្រង់ form រាប់សិបទំព័រ ការសរសេរ markup សម្រាប់ label, error message, និង layout ម្តងហើយម្តងទៀត គឺជាការខ្ជះខ្ជាយពេលវេលា។ ការបង្កើត reusable field wrapper (ដូចជា `<FormField />`) ជួយប្រមូលផ្តុំរចនាសម្ព័ន្ធទូទៅទាំងនេះឱ្យនៅកន្លែងតែមួយ។",
        "keyPoints": [
          "បង្កើត component wrapper ដែលទទួល `label`, `error`, និង `children` ជា props។",
          "រក្សាភាពបត់បែនដោយប្រើ `children` prop ដើម្បីឱ្យវាអាចរុំ input គ្រប់ប្រភេទ មិនថា text, select ឬ textarea។",
          "ជួយឱ្យ styling និង design system នៃ form ទាំងមូលមានភាពឯកភាព និងងាយស្រួលកែប្រែទៅថ្ងៃមុខ។"
        ],
        "codeSnippet": "interface FormFieldProps {\n  label: string;\n  error?: string;\n  children: React.ReactNode;\n}\n\nexport function FormField({ label, error, children }: FormFieldProps) {\n  return (\n    <div className=\"space-y-1\">\n      <label className=\"block text-xs font-semibold text-slate-300 uppercase tracking-wider\">{label}</label>\n      {children}\n      {error && <p className=\"text-xs text-rose-400 font-medium\">{error}</p>}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Reusable FormField Wrapper",
        "proTip": "ការបង្កើត reusable `<FormField />` component ជួយកាត់បន្ថយកូដស្ទួនរាប់រយបន្ទាត់នៅក្នុង Form ធំៗ និងធានាថា Label, Helper Text និង Error Messages មាន Style ដូចគ្នាបេះបិទលើគ្រប់ទំព័រ។"
      }
    ]
  },
  {
    "id": "module-09",
    "number": "09",
    "title": "Component Communication",
    "category": "Core Concepts",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពីលំហូរទិន្នន័យពី Parent ទៅ Child, ការបញ្ជូន Callback Functions ពី Child ទៅ Parent, បច្ចេកទេស Lifting State Up, ការទំនាក់ទំនងរវាង Sibling Components, បញ្ហា Prop Drilling និងដំណោះស្រាយតាមរយៈ Component Composition។",
    "iconName": "Network",
    "topics": [
      {
        "id": "m09-01",
        "number": "01",
        "title": "Parent to Child",
        "summary": "លំហូរទិន្នន័យចុះក្រោមតាមរយៈ Props ក្នុងប្រព័ន្ធ Unidirectional Data Flow។",
        "explanation": "នៅក្នុង React មធ្យោបាយចម្បងក្នុងការបញ្ជូនទិន្នន័យគឺការហូរចុះក្រោមពី Parent Component ទៅកាន់ Child Component តាមរយៈ **Props**។ Parent អាចបញ្ជូនទាំង primitive values, objects, arrays, ឬសូម្បីតែ JSX elements ទៅឱ្យ Child បានយ៉ាងងាយស្រួល។",
        "keyPoints": [
          "ជាទម្រង់ស្តង់ដារនៃ **Unidirectional Data Flow** (លំហូរទិន្នន័យមួយទិស) ក្នុង React។",
          "Child Component ទទួលបាន Props ក្នុងលក្ខណៈ Read-only (មិនអាចកែប្រែតម្លៃដើមបានឡើយ)។",
          "នៅពេលដែលទិន្នន័យនៅក្នុង Parent ផ្លាស់ប្តូរ Child Component នឹងធ្វើការ re-render ដោយស្វ័យប្រវត្តិតាមតម្លៃថ្មីនោះ។"
        ],
        "codeSnippet": "<ChildComponent message=\"Hello from parent!\" count={42} />",
        "codeLanguage": "jsx",
        "codeTitle": "Parent to Child Data Flow",
        "proTip": "ចងចាំជានិច្ចថា Props ហូរតាមទិសដៅតែមួយគត់ (Top-Down)៖ Parent គឺជាអ្នកផ្គត់ផ្គង់ទិន្នន័យ ចំណែក Child គឺជាអ្នកទទួលទិន្នន័យយកទៅបង្ហាញ។"
      },
      {
        "id": "m09-02",
        "number": "02",
        "title": "Child to Parent",
        "summary": "ការជូនដំណឹងពីសកម្មភាពឡើងលើទៅកាន់ Parent តាមរយៈ Callback Functions។",
        "explanation": "ដោយសារតែ React មិនអនុញ្ញាតឱ្យបញ្ជូន Props ត្រឡប់ឡើងលើវិញ ដើម្បីឱ្យ Child អាចប្រាប់ Parent អំពីព្រឹត្តិការណ៍ ឬសកម្មភាពណាមួយ (User Action) Parent ត្រូវតែបញ្ជូន **Callback Function** មួយចុះក្រោមជា Prop។ នៅពេលដែលសកម្មភាពកើតឡើង Child នឹងធ្វើការ invoke (ហៅ) function នោះជាមួយនឹង arguments ជាក់លាក់។",
        "keyPoints": [
          "Parent បញ្ជូន handler function តាមរយៈ prop (ឧទាហរណ៍៖ `onSelect={(id) => setSelected(id)}`)។",
          "Child ធ្វើការហៅ function នោះនៅពេលមាន interaction៖ `props.onSelect(itemId)`។",
          "Parent ទទួល parameters ពី Child រួចធ្វើការ update លើ state របស់ខ្លួន។"
        ],
        "codeSnippet": "// Parent:\n<ChildComponent onSelect={(itemId) => setSelected(itemId)} />\n\n// Child:\n<button onClick={() => onSelect('item-1')}>Select Item</button>",
        "codeLanguage": "jsx",
        "codeTitle": "Child to Parent Notification",
        "proTip": "កុំព្យាយាមផ្លាស់ប្តូរ State របស់ Parent ដោយផ្ទាល់ពីក្នុង Child! ត្រូវតែបញ្ជូន function ចុះក្រោម ហើយឱ្យ Child ហៅ function នោះវិញ។"
      },
      {
        "id": "m09-03",
        "number": "03",
        "title": "Passing Functions",
        "summary": "ការប្រើប្រាស់ Event Callbacks ដើម្បីបំបែក UI rendering និង State logic ឱ្យដាច់ពីគ្នា។",
        "explanation": "ការបញ្ជូន Functions តាមរយៈ Props (Callback Delegation) ជួយផ្តាច់ UI Rendering របស់ Child ចេញពី State Management Logic របស់ Parent។ បច្ចេកទេសនេះធ្វើឱ្យ Child Components មានភាពឯករាជ្យ និងអាចយកទៅប្រើប្រាស់ឡើងវិញបានច្រើនកន្លែង (Highly Reusable) ជាមួយឥរិយាបថខុសៗគ្នា។",
        "keyPoints": [
          "Child Component គ្រាន់តែទទួលរ៉ាប់រងលើ visual presentation និងការ trigger callbacks ប៉ុណ្ណោះ។",
          "បង្កើនភាពងាយស្រួលក្នុងការ reuse Child Component ឆ្លងកាត់ features ផ្សេងៗក្នុង app។",
          "ជួយឱ្យការធ្វើ Unit Test លើ UI Component មានភាពសាមញ្ញ ព្រោះគ្រាន់តែ mock callback functions។"
        ],
        "codeSnippet": "export function ActionToolbar({ onSave, onCancel }: ToolbarProps) {\n  return (\n    <div className=\"flex gap-2\">\n      <button onClick={onSave} className=\"bg-emerald-600 px-3 py-1 text-white rounded\">Save</button>\n      <button onClick={onCancel} className=\"bg-slate-700 px-3 py-1 text-white rounded\">Cancel</button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Callback Action Delegation",
        "proTip": "ការបញ្ជូន callback functions ជួយឱ្យ Child Component ក្លាយជា 'Dumb/Presentational Component' ដែលមិនចាំបាច់ខ្វល់ខ្វាយពីរបៀបរក្សាទុកទិន្នន័យ ឬការហៅ API ឡើយ។"
      },
      {
        "id": "m09-04",
        "number": "04",
        "title": "Lifting State Up",
        "summary": "ការលើក State ទៅកាន់ Ancestor Component រួមដែលនៅជិតបំផុតសម្រាប់ Sibling Components។",
        "explanation": "នៅពេលដែល Components ពីរបងប្អូន (Siblings) ត្រូវការចែករំលែកទិន្នន័យ ឬធ្វើសមកាលកម្ម (synchronize) ជាមួយគ្នា អ្នកមិនអាចបញ្ជូនទិន្នន័យពីបងប្អូនមួយទៅមួយទៀតដោយផ្ទាល់បានទេ។ អ្នកត្រូវតែ **លើក State ឡើង (Lift State Up)** ចេញពី components ទាំងពីរនោះ ទៅដាក់ក្នុង Parent រួមដែលនៅជិតពួកវាបំផុត។",
        "keyPoints": [
          "លុបបំបាត់បញ្ហាទិន្នន័យស្ទួន និងមិនស៊ីសង្វាក់គ្នា (Out-of-sync bugs)។",
          "Parent រួមដើរតួជា **Single Source of Truth** សម្រាប់ siblings ទាំងអស់។",
          "Parent បញ្ជូន state ចុះក្រោមជា props និងបញ្ជូន updater functions សម្រាប់ឱ្យ siblings ធ្វើការកែប្រែតម្លៃ។"
        ],
        "codeSnippet": "export function CommonParent() {\n  const [activeTab, setActiveTab] = useState('summary');\n\n  return (\n    <div>\n      <TabList activeTab={activeTab} onTabChange={setActiveTab} />\n      <TabContent activeTab={activeTab} />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Lifting State Up Pattern",
        "proTip": "នៅពេលណាដែល Components ពីរ ឬច្រើនត្រូវការបង្ហាញទិន្នន័យដូចគ្នា ឬធ្វើសមកាលកម្មគ្នា ចូរលើក State នោះឡើងទៅកាន់ Parent រួមដែលនៅជិតបំផុត (Closest Common Ancestor)។"
      },
      {
        "id": "m09-05",
        "number": "05",
        "title": "Sharing State",
        "summary": "ការធ្វើសមកាលកម្មទិន្នន័យរវាង Sibling Components តាមរយៈ Hoisted State។",
        "explanation": "ការចែករំលែក State រវាង Sibling Components ត្រូវបានសម្រេចឡើងដោយការ hoisted state ទៅកាន់ Parent។ Sibling ទាំងពីរនឹងទទួលបានទិន្នន័យរួមនោះជា props ហើយរាល់ការកែប្រែតម្លៃដែលកើតចេញពី sibling ណាមួយ នឹងឆ្លុះបញ្ចាំងទៅកាន់ sibling ផ្សេងទៀតភ្លាមៗ។",
        "keyPoints": [
          "ធានានូវភាពស៊ីសង្វាក់គ្នានៃទិន្នន័យរវាងផ្ទាំង UI ផ្សេងៗនៅលើអេក្រង់តែមួយ។",
          "Sibling ទីមួយដើរតួជា Controller (អ្នកផ្លាស់ប្តូរទិន្នន័យ) រីឯ Sibling ទីពីរដើរតួជា Consumer (អ្នកបង្ហាញលទ្ធផល)។",
          "រក្សាស្ថាបត្យកម្មកូដឱ្យមានលក្ខណៈ Predictable និងងាយស្រួល Debug។"
        ],
        "codeSnippet": "// Sibling 1 (Filter input) -> updates query in Parent -> Sibling 2 (Results list) receives filtered query",
        "codeLanguage": "jsx",
        "codeTitle": "Sibling State Sharing",
        "proTip": "ឧទាហរណ៍ជាក់ស្តែង៖ SearchBar (Sibling 1) វាយបញ្ចូលពាក្យស្វែងរក ហើយបញ្ជូនទៅ update ក្នុង Parent រួច ProductList (Sibling 2) ទទួលបានពាក្យស្វែងរកនោះមកធ្វើការ filter ទិន្នន័យបង្ហាញលើ UI។"
      },
      {
        "id": "m09-06",
        "number": "06",
        "title": "Sibling Communication",
        "summary": "ហេតុផលដែល Sibling Components មិនអាចទំនាក់ទំនងគ្នាដោយផ្ទាល់ និងស្ថាបត្យកម្មដំណោះស្រាយ។",
        "explanation": "នៅក្នុង React រាល់ Component ទាំងអស់ត្រូវបានបង្កើតឡើងក្នុងលក្ខណៈឯករាជ្យដាច់ដោយឡែកពីគ្នា (Isolated)។ Sibling A គ្មានសិទ្ធិ ឬមធ្យោបាយណាមួយដើម្បីចូលទៅកាន់ State ឬហៅ Functions នៅខាងក្នុង Sibling B ដោយផ្ទាល់ឡើយ (No Peer-to-Peer coupling)។",
        "keyPoints": [
          "**គ្មានការតភ្ជាប់ផ្ទាល់ (No Direct Coupling)**៖ ការពារកុំឱ្យ components ជាប់ជំពាក់គ្នាខ្លាំង (tight coupling) ដែលនាំឱ្យពិបាកកែប្រែ។",
          "**ដំណោះស្រាយ**៖"
        ],
        "codeSnippet": "/*\n             [Common Parent]  <── Holds state\n             /             \\\n      [Sibling A]       [Sibling B]\n     (Triggers update)   (Reflects update)\n*/",
        "codeLanguage": "jsx",
        "codeTitle": "Sibling Communication Architecture",
        "pitfall": "កុំព្យាយាមប្រើ DOM manipulation ឬ global event emitters ដើម្បីឱ្យ siblings និយាយគ្នាដោយផ្ទាល់! គោរពតាម React Data Flow ជានិច្ច តាមរយៈ Shared Parent ឬ Global Store (Zustand/Context)។"
      },
      {
        "id": "m09-07",
        "number": "07",
        "title": "Prop Drilling",
        "summary": "ស្វែងយល់អំពីបញ្ហា Prop Drilling និងផលប៉ះពាល់ដល់ការថែទាំកូដក្នុងកម្មវិធីធំៗ។",
        "explanation": "Prop Drilling (ឬ Threading) គឺជាស្ថានភាពដែលអ្នកត្រូវបញ្ជូន Props ឆ្លងកាត់ components ជាច្រើនជាន់ចុះក្រោម គ្រាន់តែដើម្បីឱ្យ component កូនចៅនៅជ្រៅបំផុត (Leaf Component) អាចចូលទៅកាន់ទិន្នន័យនោះបាន។ បញ្ហានេះធ្វើឱ្យ components នៅកណ្តាលពោរពេញដោយ props ដែលមិនចាំបាច់ និងធ្វើឱ្យការ refactor កូដមានភាពស្មុគស្មាញ។",
        "keyPoints": [
          "ធ្វើឱ្យ Component APIs មានភាពរញ៉េរញ៉ៃ (Pollutes component interfaces)។",
          "ដំណោះស្រាយមាន ៣ សំខាន់ៗ៖"
        ],
        "codeSnippet": "// Prop Drilling Anti-pattern:\n// <Page user={user}> -> <Dashboard user={user}> -> <Sidebar user={user}> -> <Avatar user={user}>",
        "codeLanguage": "jsx",
        "codeTitle": "Prop Drilling Demonstration",
        "pitfall": "Prop Drilling កើតឡើងនៅពេលដែលអ្នកត្រូវបញ្ជូន Props កាត់ components ៤ ទៅ ៥ ជាន់ ដែល components នៅកណ្តាលមិនត្រូវការប្រើទិន្នន័យនោះទាល់តែសោះ គ្រាន់តែជួយហុចបន្តប៉ុណ្ណោះ!"
      },
      {
        "id": "m09-08",
        "number": "08",
        "title": "Component Composition as Solution",
        "summary": "ការដោះស្រាយបញ្ហា Prop Drilling យ៉ាងមានប្រសិទ្ធភាពតាមរយៈ children prop និង Slotted Elements។",
        "explanation": "ជាញឹកញាប់ អ្នកអាចលុបបំបាត់បញ្ហា Prop Drilling បានយ៉ាងងាយស្រួលដោយមិនចាំបាច់ប្រើប្រាស់ Context API ឬ State Management Library ឡើយ។ ដំណោះស្រាយនោះគឺ **Component Composition** ដោយគ្រាន់តែបញ្ជូន leaf component ចូលទៅជា `children` ឬ slots ផ្ទាល់តែម្តង។",
        "keyPoints": [
          "Components នៅកណ្តាល (ដូចជា `<Sidebar>`) គ្រាន់តែ render `{children}` ដោយមិនបាច់ដឹងពី props របស់ child ឡើយ។",
          "Leaf Component (ដូចជា `<Avatar user={user} />`) ត្រូវបានបង្កើតឡើងនៅ Parent កំពូលផ្ទាល់ ដែលមាន access ទៅកាន់ `user` រួចជាស្រេច។",
          "ជួយកាត់បន្ថយ coupling និងធ្វើឱ្យ components នៅកណ្តាលមានភាព generic ខ្ពស់។"
        ],
        "codeSnippet": "// Instead of passing user through Sidebar:\n// <Sidebar><Avatar user={user} /></Sidebar>",
        "codeLanguage": "jsx",
        "codeTitle": "Composition Solving Prop Drilling",
        "proTip": "មុននឹងប្រញាប់យក Context ឬ Zustand មកដោះស្រាយ Prop Drilling ចូរពិនិត្យមើលថាតើអ្នកអាចប្រើ Component Composition (`children`) បានដែរឬទេ ព្រោះវាជាដំណោះស្រាយដ៏សាមញ្ញ និងមានប្រសិទ្ធភាពខ្ពស់បំផុត!"
      },
      {
        "id": "m09-09",
        "number": "09",
        "title": "Designing Component APIs",
        "summary": "ការរចនា Props ឱ្យមាន ergonomics, intuitive និង type-safe សម្រាប់រយៈពេលវែង។",
        "explanation": "ការរចនា Props របស់ Component ប្រៀបដូចជាការបង្កើត Public Library API មួយអ៊ីចឹង៖ អ្នកគួរតែរក្សាវាឱ្យសាមញ្ញបំផុត ផ្តល់តម្លៃ default សមរម្យ និងប្រើប្រាស់ TypeScript Type Definitions ឱ្យបានច្បាស់លាស់ដើម្បីឱ្យអ្នកដទៃងាយស្រួលហៅប្រើប្រាស់ និងការពារកំហុស។",
        "keyPoints": [
          "ប្រើប្រាស់ **Discriminated Unions** ក្នុង TypeScript សម្រាប់លក្ខខណ្ឌដែលមិនអាចកើតមានទន្ទឹមគ្នា (Mutually Exclusive States)។",
          "កំណត់ឈ្មោះ Props ឱ្យច្បាស់លាស់ និងមានលក្ខណៈ Intuitive ស្របតាមក្បួន React conventions។",
          "ជៀសវាងការបង្កើត props ច្រើនហួសហេតុ (Boolean flag explosion) ដែលធ្វើឱ្យ component ពិបាកថែទាំ។"
        ],
        "codeSnippet": "type AlertProps = \n  | { variant: 'simple'; message: string }\n  | { variant: 'actionable'; message: string; actionLabel: string; onAction: () => void };",
        "codeLanguage": "jsx",
        "codeTitle": "Discriminated Union Props",
        "proTip": "ប្រើ TypeScript Discriminated Unions សម្រាប់ mutually exclusive props ដើម្បីការពារកុំឱ្យ developer ផ្សេងទៀតច្រឡំបញ្ជូន props ដែលផ្ទុយគ្នា។"
      }
    ]
  },
  {
    "id": "module-10",
    "number": "10",
    "title": "useEffect",
    "category": "Hooks & Lifecycle",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី useEffect Hook, Side Effects, ច្បាប់នៃ Dependency Array, Cleanup Functions, ការទាញយកទិន្នន័យ (Data Fetching), Race Conditions ជាមួយ AbortController, កំហុសទូទៅ និងពេលណាដែលមិនគួរប្រើ useEffect។",
    "iconName": "Clock",
    "topics": [
      {
        "id": "m10-01",
        "number": "01",
        "title": "What is useEffect?",
        "summary": "Hook សម្រាប់ធ្វើសមកាលកម្ម Component ទៅកាន់ External Systems ខាងក្រៅ។",
        "explanation": "Hook `useEffect` អនុញ្ញាតឱ្យអ្នកដំណើរការកូដបន្ទាប់ពី Component បាន Render និង Paint លើអេក្រង់រួចរាល់ ដើម្បីធ្វើសមកាលកម្ម (synchronize) ជាមួយប្រព័ន្ធខាងក្រៅ (External Systems) ដូចជា Browser DOM APIs, Network Requests, Timers, ឬ WebSocket Connections។",
        "keyPoints": [
          "ដំណើរការដោយអសមកាលកម្ម (asynchronously) បន្ទាប់ពី browser បាន render និង paint UI រួចរាល់ ដែលធ្វើឱ្យ UI មិនគាំង (non-blocking)។",
          "ជំនួស lifecycle methods ចាស់ៗក្នុង Class Components ដូចជា `componentDidMount`, `componentDidUpdate`, និង `componentWillUnmount`។",
          "ជួយឱ្យ Component មានប្រតិកម្មឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរទិន្នន័យពីខាងក្រៅ។"
        ],
        "codeSnippet": "import { useEffect } from 'react';\n\nuseEffect(() => {\n  document.title = `React Course - ${topicTitle}`;\n}, [topicTitle]);",
        "codeLanguage": "jsx",
        "codeTitle": "Synchronizing Document Title",
        "proTip": "គិតពី `useEffect` ដូចជាស្ពានតភ្ជាប់រវាង React Component និងពិភពខាងក្រៅ (ដូចជា DOM APIs, Timers, ឬ Server APIs)។"
      },
      {
        "id": "m010-02",
        "number": "02",
        "title": "Side Effects",
        "summary": "អ្វីទៅដែលត្រូវបានចាត់ទុកជា Side Effect នៅក្នុងកម្មវិធី React។",
        "explanation": "នៅក្នុងវិទ្យាសាស្ត្រកុំព្យូទ័រ **Side Effect** សំដៅលើរាល់ប្រតិបត្តិការណាដែលធ្វើការកែប្រែ ឬជះឥទ្ធិពលទៅលើអ្វីមួយដែលនៅក្រៅ scope នៃ function ដែលកំពុងដំណើរការ (ដូចជាការសរសេរចូល `localStorage`, ការហៅ API request, ការកំណត់ timers, ឬការកែប្រែ DOM ផ្ទាល់)។",
        "keyPoints": [
          "React Render functions ត្រូវតែជា **Pure Functions** (ទទួល props/state រួច return JSX តែប៉ុណ្ណោះ គ្មាន side effects ឡើយ)។",
          "Side effects ត្រូវតែស្ថិតនៅក្នុងកន្លែងពីរគត់៖ **Event Handlers** (ឆ្លើយតបនឹងការចុចរបស់ user) ឬ **useEffect** (ដំណើរការពេល render រួច)។",
          "ការដាក់ side effects ក្នុង render body អាចបណ្តាលឱ្យកើត bugs ធ្ងន់ធ្ងរ និង re-render គ្មានទីបញ្ចប់។"
        ],
        "codeSnippet": "// Side effects belong in useEffect or event handlers, NOT in render body!",
        "codeLanguage": "jsx",
        "codeTitle": "Side Effect Placement",
        "pitfall": "ដាច់ខាតកុំដំណើរការ Side Effects ដោយផ្ទាល់នៅក្នុង Render Body របស់ Component ព្រោះ Render Phase ត្រូវតែជា Pure Function ជានិច្ច!"
      },
      {
        "id": "m10-03",
        "number": "03",
        "title": "useEffect Syntax",
        "summary": "រចនាសម្ព័ន្ធ Syntax នៃ Effect Callback និងប៉ារ៉ាម៉ែត្រ Dependency Array។",
        "explanation": "រចនាសម្ព័ន្ធនៃ `useEffect` ទទួលប៉ារ៉ាម៉ែត្រចំនួនពីរ៖ ប៉ារ៉ាម៉ែត្រទីមួយគឺជា **Effect Callback Function** (កូដដែលត្រូវដំណើរការ និង optional cleanup function) ហើយប៉ារ៉ាម៉ែត្រទីពីរគឺជា **Dependency Array** (បញ្ជីនៃអថេរដែលកំណត់ថាតើពេលណា Effect ត្រូវដំណើរការឡើងវិញ)។",
        "keyPoints": [
          "**Setup logic**៖ ដំណើរការនៅពេល component mount ឬនៅពេលដែល dependencies ណាមួយផ្លាស់ប្តូរតម្លៃ។",
          "**Cleanup function (Optional)**៖ Return ជា function នៅចុងបញ្ចប់ ដើម្បីសម្អាតធនធានចាស់ៗមុនពេល effect រត់ម្តងទៀត ឬពេល component unmount។",
          "**Dependency array**៖ កំណត់លក្ខខណ្ឌនៃការ re-run របស់ effect។"
        ],
        "codeSnippet": "useEffect(() => {\n  // Setup logic runs here\n  return () => {\n    // Optional cleanup logic runs here\n  };\n}, [/* dependencies */]);",
        "codeLanguage": "jsx",
        "codeTitle": "useEffect Anatomy",
        "proTip": "រចនាសម្ព័ន្ធ Syntax ងាយចាំ៖ `useEffect(() => { /* setup */ return () => { /* cleanup */ } }, [dependencies])`។"
      },
      {
        "id": "m10-04",
        "number": "04",
        "title": "Dependency Array",
        "summary": "ការប្រៀបធៀប No Array, Empty Array [], និង Populated Dependencies [a, b]។",
        "explanation": "Dependency Array គឺជាកត្តាកំណត់ថាតើ `useEffect` របស់អ្នកត្រូវដំណើរការនៅពេលណាខ្លះ។ មានជម្រើស ៣ សំខាន់ៗក្នុងការកំណត់ Dependency Array៖",
        "keyPoints": [],
        "codeSnippet": "// 1. Runs after every single render (rarely desired):\nuseEffect(() => { console.log('Rendered'); });\n\n// 2. Runs once on initial mount:\nuseEffect(() => { console.log('Mounted'); }, []);\n\n// 3. Runs when count changes:\nuseEffect(() => { console.log('Count is', count); }, [count]);",
        "codeLanguage": "jsx",
        "codeTitle": "Dependency Array Options",
        "pitfall": "ដាច់ខាតកុំកុហក Dependency Array! ប្រសិនបើអ្នកប្រើប្រាស់អថេរ state ឬ prop ណាមួយនៅខាងក្នុង Effect អ្នកត្រូវតែបញ្ជាក់វានៅក្នុង Dependency Array ជានិច្ច ដើម្បីជៀសវាងបញ្ហា Stale Closure។"
      },
      {
        "id": "m10-05",
        "number": "05",
        "title": "Running Effects",
        "summary": "បន្ទាត់ពេលវេលានៃការដំណើរការ៖ Render, DOM Paint រួចទើប Effect Execution។",
        "explanation": "React ដំណើរការទៅតាមលំដាប់លំដោយយ៉ាងច្បាស់លាស់៖ ដំបូង React នឹងគណនា JSX (Render Phase), បន្ទាប់មក browser នឹងគូរ pixels លើអេក្រង់ (Paint UI), ហើយបន្ទាប់មកទៀតទើប React ចាប់ផ្តើមដំណើរការកូដនៅខាងក្នុង `useEffect`។",
        "keyPoints": [
          "Effects មានលក្ខណៈ **Non-blocking** តាមលំនាំដើម ដូច្នេះអ្នកប្រើប្រាស់អាចមើលឃើញ UI ភ្លាមៗដោយមិនចាំបាច់រង់ចាំ effect បញ្ចប់។",
          "ជួយបង្កើន Perceived Performance នៃកម្មវិធី web ឱ្យមានអារម្មណ៍ថារលូន និងឆ្លើយតបរហ័ស។"
        ],
        "codeSnippet": "// Timeline:\n// 1. Render JSX -> 2. Browser Paints UI -> 3. useEffect Runs",
        "codeLanguage": "jsx",
        "codeTitle": "Effect Execution Timeline",
        "proTip": "ដោយសារតែ `useEffect` ដំណើរការក្រោយពេល Paint លើ Screen រួច វាមិនធ្វើឱ្យ UI កកស្ទះឡើយ។ ប្រសិនបើអ្នកត្រូវការវាស់ទំហំ DOM មុនពេល Paint អ្នកអាចប្រើ `useLayoutEffect` ជំនួសវិញ។"
      },
      {
        "id": "m10-06",
        "number": "06",
        "title": "Effects with State",
        "summary": "ការដំណើរការ Effect ឆ្លើយតបទៅនឹងការប្រែប្រួលនៃ State។",
        "explanation": "នៅពេលដែលអ្នកដាក់អថេរ State ទៅក្នុង Dependency Array នោះ Effect នឹងដំណើរការឡើងវិញរាល់ពេលដែលតម្លៃនៃ State នោះផ្លាស់ប្តូរ។ វិធីសាស្ត្រនេះស័ក្តិសមបំផុតសម្រាប់ការបង្កើតមុខងារដូចជា Auto-save, LocalStorage Synchronization ឬការវិភាគទិន្នន័យ (Analytics tracking)។",
        "keyPoints": [
          "Trigger សកម្មភាពខាងក្រៅដោយស្វ័យប្រវត្តិ នៅពេលដែល internal state ប្រែប្រួល។",
          "ប្រើរួមជាមួយ Cleanup function ដើម្បី clear timers ចាស់ៗ (Debounce pattern)។",
          "ប្រយ័ត្ន៖ កុំ update state ដដែលនោះនៅខាងក្នុង effect ដោយគ្មានលក្ខខណ្ឌបញ្ឈប់ ព្រោះវានឹងបង្កជា infinite loop!"
        ],
        "codeSnippet": "useEffect(() => {\n  if (draftText) {\n    const timer = setTimeout(() => saveDraft(draftText), 1000);\n    return () => clearTimeout(timer);\n  }\n}, [draftText]);",
        "codeLanguage": "jsx",
        "codeTitle": "Auto-save on State Change",
        "proTip": "ការប្រើ Debounce រួមជាមួយ `useEffect` គឺជាបច្ចេកទេសដ៏ល្អឥតខ្ចោះសម្រាប់ការធ្វើ Auto-save សេចក្តីព្រាង (Drafts) នៅពេលដែលអ្នកប្រើប្រាស់ផ្អាកវាយអក្សរ។"
      },
      {
        "id": "m10-07",
        "number": "07",
        "title": "Effects with Props",
        "summary": "ការធ្វើសមកាលកម្មទិន្នន័យនៅពេលដែល Props ពី Parent ផ្លាស់ប្តូរ។",
        "explanation": "នៅពេលដែល Parent Component បញ្ជូនតម្លៃ Props ថ្មីចុះមក (ឧទាហរណ៍៖ ការផ្លាស់ប្តូរ Route Parameter ឬ ID នៃធាតុដែលត្រូវបង្ហាញ) Child Component អាចប្រើ `useEffect` ដោយដាក់ Prop នោះជា dependency ដើម្បីធ្វើសមកាលកម្មទិន្នន័យ ឬទាញយកព័ត៌មានលម្អិតថ្មីពី Server។",
        "keyPoints": [
          "ប្រើប្រាស់តម្លៃ Prop ជា dependency ដើម្បីឆ្លើយតបទៅនឹងការផ្លាស់ប្តូរពី Parent។",
          "រៀបចំកូដឱ្យត្រៀមខ្លួនជានិច្ចចំពោះករណីដែល Prop អាចផ្លាស់ប្តូរតម្លៃញឹកញាប់។",
          "សម្អាតទិន្នន័យចាស់ ឬ cancel requests មុនពេលទាញយកទិន្នន័យសម្រាប់ Prop ថ្មី។"
        ],
        "codeSnippet": "useEffect(() => {\n  fetchModuleDetails(moduleId);\n}, [moduleId]);",
        "codeLanguage": "jsx",
        "codeTitle": "Reacting to Prop Changes",
        "proTip": "ជាញឹកញាប់ `props` ដែលត្រូវដាក់ក្នុង dependencies គឺជា ID (ដូចជា `userId`, `moduleId`, ឬ route params) ដើម្បីទាញយកទិន្នន័យថ្មីពេល user ប្តូរទំព័រ។"
      },
      {
        "id": "m10-08",
        "number": "08",
        "title": "Cleanup Functions",
        "summary": "ការការពារ Memory Leaks, ការសម្អាត Timers និងការដោះចេញនូវ Event Listeners។",
        "explanation": "ប្រសិនបើ Effect របស់អ្នកបង្កើត subscription, interval, ឬ DOM event listener អ្នកត្រូវតែ return **Cleanup Function** មួយចេញពី Effect នោះ។ React នឹងដំណើរការ cleanup function នេះមុនពេល effect រត់ម្តងទៀត និងនៅពេលដែល Component ត្រូវបាន unmount ចេញពី DOM។",
        "keyPoints": [
          "សំខាន់បំផុតក្នុងការការពារ **Memory Leaks** នៅក្នុងកម្មវិធី web។",
          "ចាំបាច់ត្រូវប្រើសម្រាប់ `clearInterval`, `clearTimeout`, `removeEventListener`, និងការ disconnect WebSocket connections។",
          "ជួយធានាថាកម្មវិធីដំណើរការបានស្អាតបាត និងមិនស៊ីធនធាន RAM របស់ browser ដោយឥតប្រយោជន៍។"
        ],
        "codeSnippet": "useEffect(() => {\n  const interval = setInterval(() => {\n    setSeconds(s => s + 1);\n  }, 1000);\n\n  // Cleanup: Clears interval when unmounted\n  return () => clearInterval(interval);\n}, []);",
        "codeLanguage": "jsx",
        "codeTitle": "Timer Cleanup Function",
        "proTip": "ច្បាប់មាសនៃ Cleanup Function៖ រាល់ពេលដែលអ្នកបង្កើត `setInterval`, `addEventListener`, ឬ WebSocket នៅក្នុង Effect អ្នកត្រូវតែ return function ដើម្បី `clearInterval`, `removeEventListener`, ឬ `close()` ជានិច្ច!"
      },
      {
        "id": "m10-09",
        "number": "09",
        "title": "Fetching Data with useEffect",
        "summary": "ការហៅ API និងការដោះស្រាយបញ្ហា Race Conditions ដោយប្រើ AbortController។",
        "explanation": "ការទាញយកទិន្នន័យពី API គឺជាការប្រើប្រាស់ដ៏ពេញនិយមមួយរបស់ `useEffect`។ ទោះជាយ៉ាងណាក៏ដោយ នៅពេលដែលអ្នកប្រើប្រាស់ចុចផ្លាស់ប្តូរលឿនពេក វាអាចបណ្តាលឱ្យកើតមានបញ្ហា **Race Conditions** (ស្ថានភាពដែល request ចាស់ឆ្លើយតបយឺតជាង request ថ្មី ហើយមក overwrite ទិន្នន័យលើអេក្រង់)។ ដើម្បីការពារបញ្ហានេះ យើងត្រូវប្រើប្រាស់ browser API `AbortController`។",
        "keyPoints": [
          "បង្កើត `new AbortController()` ហើយបញ្ជូន `controller.signal` ទៅកាន់ `fetch` request។",
          "Return cleanup function `() => controller.abort()` ដើម្បី cancel request ដែលកំពុងដំណើរការ ប្រសិនបើ dependencies ផ្លាស់ប្តូរ ឬ component unmount។",
          "ចាប់យក error និងពិនិត្យ `err.name !== 'AbortError'` ដើម្បីកុំឱ្យបង្ហាញ error មិនពិតលើ UI។"
        ],
        "codeSnippet": "useEffect(() => {\n  const controller = new AbortController();\n  setIsLoading(true);\n\n  fetch(`/api/topics/${topicId}`, { signal: controller.signal })\n    .then(res => res.json())\n    .then(data => {\n      setTopic(data);\n      setIsLoading(false);\n    })\n    .catch(err => {\n      if (err.name !== 'AbortError') setError(err.message);\n    });\n\n  return () => controller.abort(); // Cancel if topicId changes!\n}, [topicId]);",
        "codeLanguage": "jsx",
        "codeTitle": "Safe Data Fetching with AbortController",
        "pitfall": "បញ្ហា Race Condition៖ ប្រសិនបើ user ចុចប្តូរពី Topic A ទៅ Topic B យ៉ាងលឿន request របស់ Topic A ដែលមកដល់ក្រោយ អាចនឹង overwrite ទិន្នន័យរបស់ Topic B! ត្រូវប្រើ `AbortController` ដើម្បី cancel request ចាស់ជានិច្ច។"
      },
      {
        "id": "m10-10",
        "number": "10",
        "title": "Common useEffect Mistakes",
        "summary": "កំហុសទូទៅដូចជា Infinite Loops, Missing Dependencies និង Object Reference Traps។",
        "explanation": "ការប្រើប្រាស់ `useEffect` មិនបានត្រឹមត្រូវ គឺជាប្រភពដ៏ធំមួយនៃ bugs នៅក្នុងកម្មវិធី React។ កំហុសដែលកើតឡើងញឹកញាប់បំផុតរួមមានការបង្កើត Infinite Loops, ការបាត់បង់ dependencies, និងអន្ទាក់នៃ Object References។",
        "keyPoints": [
          "**Infinite Loop Trap**៖ ការហៅ `setState` នៅខាងក្នុង effect ដោយមិនបានកំណត់ dependency array ឱ្យបានត្រឹមត្រូវ ឬដាក់ state នោះក្នុង dependency ខ្លួនឯង។",
          "**Object/Function Reference Trap**៖ ជៀសវាងការដាក់ objects ឬ functions ដែលមិនទាន់ memoized ទៅក្នុង dependencies។ ចូរប្រើ primitive values (strings, numbers, booleans) ឬប្រើ `useCallback` / `useMemo`។",
          "គោរពតាម ESLint rule `react-hooks/exhaustive-deps` ជានិច្ច។"
        ],
        "codeSnippet": "// ❌ Infinite Loop Bug:\n/*\nuseEffect(() => {\n  setCount(count + 1); // Triggers re-render -> runs effect -> triggers re-render...\n}, [count]);\n*/",
        "codeLanguage": "jsx",
        "codeTitle": "Infinite Loop Example",
        "pitfall": "ការបង្កើត Object ឬ Function នៅខាងក្នុង component body ហើយយកវាទៅដាក់ក្នុង dependency array នឹងបណ្តាលឱ្យ Effect រត់រាល់ពេល render ដោយសារតែ Object/Function Reference ថ្មីត្រូវបានបង្កើតឡើងរាល់ដង!"
      },
      {
        "id": "m10-11",
        "number": "11",
        "title": "When NOT to use useEffect",
        "summary": "គោលការណ៍ណែនាំ React ទំនើប៖ ជៀសវាងការប្រើ Effect សម្រាប់ Derived State និង User Events។",
        "explanation": "នៅក្នុង React សម័យទំនើប ក្រុមការងារស្នូលរបស់ React (React Core Team) បានផ្តល់ការណែនាំយ៉ាងច្បាស់លាស់អំពីករណីដែល **មិនគួរប្រើប្រាស់** `useEffect`៖\n1. **កុំប្រើសម្រាប់គណនា Derived Data**៖ គណនាតម្លៃនោះដោយផ្ទាល់នៅពេល render។\n2. **កុំប្រើសម្រាប់គ្រប់គ្រង User Events**៖ ចាត់ចែង logic នោះដោយផ្ទាល់នៅខាងក្នុង `onClick` ឬ `onSubmit` handlers។\n3. **កុំប្រើសម្រាប់ Reset State ពេល Prop ប្តូរ**៖ ប្រើប្រាស់ `key` prop លើ component ដើម្បី reset វិញ។",
        "keyPoints": [
          "ការគណនាដោយផ្ទាល់ពេល render ជួយជៀសវាងការ re-render ពីរបីដង (flashes of content)។",
          "សម្រាប់ការទាញយកទិន្នន័យពី Server ក្នុងកម្មវិធីធំៗ គួរប្រើ libraries ដូចជា **TanStack Query** (React Query) ឬ Next.js Data Fetching ជំនួសការសរសេរ `useEffect` ដោយដៃ។"
        ],
        "codeSnippet": "// ❌ Bad: Redundant effect for derived data\n/*\nuseEffect(() => {\n  setFullName(`${firstName} ${lastName}`);\n}, [firstName, lastName]);\n*/\n\n// ✅ Good: Compute directly during render!\nconst fullName = `${firstName} ${lastName}`;",
        "codeLanguage": "jsx",
        "codeTitle": "Avoiding Redundant Effects",
        "proTip": "React Core Team ណែនាំថា៖ អ្នកមិនត្រូវការ `useEffect` ឡើយដើម្បីផ្លាស់ប្តូរទិន្នន័យសម្រាប់ render! គណនាវាដោយផ្ទាល់អំឡុងពេល render ឬចាត់ចែងក្នុង event handler ផ្ទាល់។"
      }
    ]
  },
  {
    "id": "module-11",
    "number": "11",
    "title": "useRef",
    "category": "Hooks & Lifecycle",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពី useRef Hook, ការរក្សាទុកតម្លៃ mutable ដោយមិនបង្កឱ្យមានការ re-render, ការចូលទៅកាន់ DOM elements ដោយផ្ទាល់, ការ focus inputs, ការប្រៀបធៀប useRef vs useState និងកំហុសទូទៅ។",
    "iconName": "Crosshair",
    "topics": [
      {
        "id": "m11-01",
        "number": "01",
        "title": "What is useRef?",
        "summary": "Hook សម្រាប់ផ្ទុកតម្លៃដែលអាចកែប្រែបាន (Mutable Value) ដោយមិន trigger ឱ្យមានការ re-render UI ឡើយ។",
        "explanation": "Hook `useRef` ផ្តល់ត្រឡប់មកវិញនូវ JavaScript Object ធម្មតាមួយដែលមាន property តែមួយគត់គឺ `{ current: initialValue }`។ ចំណុចពិសេសនៃ `useRef` គឺថារាល់ការកែប្រែតម្លៃលើ `.current` **នឹងមិន trigger ឱ្យមានការ re-render UI ឡើយ**។ វាត្រូវបានប្រើប្រាស់ជាទូទៅបំផុតសម្រាប់ភ្ជាប់ទៅកាន់ DOM Elements ដោយផ្ទាល់ និងរក្សាទុក Timer IDs។",
        "keyPoints": [
          "រក្សាតម្លៃទុកឆ្លងកាត់ការ re-render ទាំងអស់ដូច State ដែរ ប៉ុន្តែការកែប្រែវាមិនបង្កឱ្យ UI ធ្វើការ re-render នោះទេ។",
          "ជាឧបករណ៍ចម្បងក្នុងការធ្វើ DOM Manipulation នៅក្នុង React។",
          "តម្លៃក្នុង `.current` អាចផ្លាស់ប្តូរបានដោយសេរី (Mutable)។"
        ],
        "codeSnippet": "import { useRef } from 'react';\n\nconst renderCountRef = useRef(0);\nrenderCountRef.current++; // Mutated without causing re-render!",
        "codeLanguage": "jsx",
        "codeTitle": "useRef Declaration",
        "proTip": "គិតពី `useRef` ដូចជាប្រអប់សម្ងាត់មួយដែលអ្នកអាចផ្លាស់ប្តូររបស់ខាងក្នុងបានគ្រប់ពេល ដោយមិនឱ្យ React ដឹង ឬចាប់បង្ខំឱ្យ Component ត្រូវគូរ UI ឡើងវិញឡើយ។"
      },
      {
        "id": "m11-02",
        "number": "02",
        "title": "useRef Syntax",
        "summary": "រចនាសម្ព័ន្ធ Syntax និងការកំណត់ TypeScript Types សម្រាប់ HTML DOM Nodes។",
        "explanation": "នៅពេលប្រើប្រាស់ `useRef` សម្រាប់ភ្ជាប់ទៅកាន់ DOM Element អ្នកគួរតែ initialize តម្លៃដំបូងជា `null`៖ `const inputRef = useRef<HTMLInputElement>(null)`។ នៅពេលដែល component ត្រូវបាន mount ទៅលើអេក្រង់រួចរាល់ React នឹងបញ្ចូល DOM node ជាក់ស្តែងទៅក្នុង `inputRef.current` ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "នៅក្នុង TypeScript ត្រូវកំណត់ Type Parameter ឱ្យត្រូវគ្នានឹង HTML element ដូចជា `HTMLInputElement`, `HTMLDivElement`, ឬ `HTMLVideoElement`។",
          "ភ្ជាប់ ref ទៅកាន់ JSX element តាមរយៈ attribute `ref={inputRef}`។",
          "នៅពេល unmount React នឹង reset `.current` ឱ្យទៅជា `null` វិញ។"
        ],
        "codeSnippet": "const inputRef = useRef<HTMLInputElement>(null);\nreturn <input ref={inputRef} type=\"text\" />;",
        "codeLanguage": "jsx",
        "codeTitle": "useRef Syntax with TypeScript",
        "proTip": "សម្រាប់ DOM refs ត្រូវកំណត់ initial value ជា `null` ជានិច្ច ដូចជា `useRef<HTMLInputElement>(null)` ដើម្បីឱ្យ React ដឹងថាត្រូវចងភ្ជាប់ជាមួយ DOM node ពេល component mount។"
      },
      {
        "id": "m11-03",
        "number": "03",
        "title": "Accessing DOM Elements",
        "summary": "ការភ្ជាប់ និងធ្វើអន្តរកម្មដោយផ្ទាល់ជាមួយ Native HTML DOM Elements។",
        "explanation": "តាមរយៈ `useRef` អ្នកអាចហៅប្រើប្រាស់ native browser DOM methods ដោយផ្ទាល់បាន ដូចជា `.focus()`, `.scrollIntoView()`, ឬវាស់ទំហំ dimensions នៃ element តាមរយៈ `.getBoundingClientRect()` ដោយមិនចាំបាច់ប្រើ `document.querySelector` ឡើយ។",
        "keyPoints": [
          "តែងតែពិនិត្យមើលវត្តមានរបស់ DOM node ជាមុន៖ `if (ref.current)` ឬប្រើ `ref.current?.method()`។",
          "ស័ក្តិសមបំផុតសម្រាប់ auto-scrolling ក្នុង chat windows ឬ container lists។",
          "ប្រើសម្រាប់តែ imperatively controls ប៉ុណ្ណោះ ជៀសវាងការប្រើ ref ដើម្បីកែប្រែ DOM markup ដោយផ្ទាល់។"
        ],
        "codeSnippet": "export function ScrollToBottom() {\n  const bottomRef = useRef<HTMLDivElement>(null);\n\n  const scrollToBottom = () => {\n    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });\n  };\n\n  return (\n    <div>\n      <button onClick={scrollToBottom}>Scroll Down</button>\n      <div style={{ height: 1000 }} />\n      <div ref={bottomRef} />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "DOM Scroll into View via Ref",
        "pitfall": "DOM Node នឹងមានតម្លៃតែបន្ទាប់ពី Component បាន Mount រួចរាល់ប៉ុណ្ណោះ។ ដូច្នេះត្រូវប្រើ Optional Chaining (`ref.current?.focus()`) ឬពិនិត្យ `if (ref.current)` ជានិច្ចមុននឹងហៅ method!"
      },
      {
        "id": "m11-04",
        "number": "04",
        "title": "Focus Input",
        "summary": "ការបញ្ជាឱ្យ cursor focus លើ input field ដោយស្វ័យប្រវត្តិតាមរយៈកូដ (Programmatic Focus)។",
        "explanation": "ករណីប្រើប្រាស់ដ៏ពេញនិយមបំផុតមួយនៃ `useRef` គឺការបញ្ជាឱ្យ cursor ចូលទៅកាន់ Input Field ដោយស្វ័យប្រវត្តិ (Programmatic Focus)។ ឧទាហរណ៍៖ នៅពេលដែល Modal បើកឡើង ឬនៅពេលដែល user ចុចប៊ូតុងស្វែងរក យើងចង់ឱ្យ input ទទួល focus ភ្លាមៗដោយមិនចាំបាច់ឱ្យ user យក mouse ទៅចុច។",
        "keyPoints": [
          "ហៅ `inputRef.current?.focus()` នៅខាងក្នុង `useEffect` (ពេល mount) ឬនៅខាងក្នុង event handler។",
          "ជួយលើកកម្ពស់ Accessibility និងល្បឿននៃការបំពេញទិន្នន័យ។",
          "អាចប្រើ `.select()` ដើម្បី highlight text ទាំងអស់នៅក្នុង input ផងដែរ។"
        ],
        "codeSnippet": "export function AutoFocusSearch() {\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  useEffect(() => {\n    inputRef.current?.focus();\n  }, []);\n\n  return <input ref={inputRef} placeholder=\"Search topics...\" className=\"border p-2\" />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Programmatic Input Focus",
        "proTip": "ការ auto-focus លើ input ពេលបើក Modal dialog ឬចុច shortcut `Cmd+K` ផ្តល់នូវ UX ដ៏រលូន និងស្រួលប្រើប្រាស់បំផុតសម្រាប់ user។"
      },
      {
        "id": "m11-05",
        "number": "05",
        "title": "Storing Mutable Values",
        "summary": "ការរក្សាទុក Timer IDs, Interval Handles និង Previous State ដោយគ្មាន overhead នៃ re-rendering។",
        "explanation": "ក្រៅពីការភ្ជាប់ទៅកាន់ DOM `useRef` គឺជាឧបករណ៍ដ៏ល្អឥតខ្ចោះសម្រាប់រក្សាទុកទិន្នន័យបច្ចេកទេសផ្ទៃក្នុងដែលត្រូវអាន ឬកែប្រែនៅក្នុង event handlers ឬ cleanup functions ដូចជា Timer IDs (`setInterval`/`setTimeout`) ឬតម្លៃ State ពីមុន (Previous State)។",
        "keyPoints": [
          "ល្អបំផុតសម្រាប់រក្សាទុក handles របស់ `setInterval` ឬ `setTimeout`។",
          "គ្មាន overhead នៃដំណើរការ re-rendering ជួយឱ្យ application ដំណើរការបានរហ័ស។",
          "អាចចូលទៅអាន និងកែប្រែតម្លៃបានភ្លាមៗដោយមិនបារម្ភពីរឿង Stale Closure។"
        ],
        "codeSnippet": "export function Stopwatch() {\n  const [time, setTime] = useState(0);\n  const timerRef = useRef<NodeJS.Timeout | null>(null);\n\n  const start = () => {\n    if (timerRef.current !== null) return;\n    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);\n  };\n\n  const stop = () => {\n    if (timerRef.current) {\n      clearInterval(timerRef.current);\n      timerRef.current = null;\n    }\n  };\n\n  return <div>Time: {time}s <button onClick={start}>Start</button> <button onClick={stop}>Stop</button></div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Storing Timer Handle in useRef",
        "proTip": "នៅពេលបង្កើត Stopwatch ឬ Timer ចូរទុក Interval ID នៅក្នុង `useRef` មិនមែន `useState` ទេ ព្រោះការផ្លាស់ប្តូរ ID មិនត្រូវការបង្ហាញលើអេក្រង់ឡើយ។"
      },
      {
        "id": "m11-06",
        "number": "06",
        "title": "useRef vs useState",
        "summary": "ការណែនាំអំពីពេលវេលាដែលត្រូវជ្រើសរើស Mutable Ref ឬ Reactive State។",
        "explanation": "ការយល់ដឹងអំពីភាពខុសគ្នារវាង `useRef` និង `useState` គឺមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការរៀបចំ State Architecture៖\n- ប្រសិនបើការផ្លាស់ប្តូរតម្លៃទាមទារឱ្យ UI ធ្វើបច្ចុប្បន្នភាពលើអេក្រង់ -> ប្រើ **`useState`**។\n- ប្រសិនបើការផ្លាស់ប្តូរតម្លៃគ្រាន់តែជាទិន្នន័យផ្ទៃក្នុងដែលមិនត្រូវការ re-render UI -> ប្រើ **`useRef`**។",
        "keyPoints": [
          "**useState** -> គ្រប់គ្រង Visual UI Rendering និង Reactivity។",
          "**useRef** -> គ្រប់គ្រង Internal Data Storage, DOM Element References និង Timers។"
        ],
        "codeSnippet": "/*\n| តម្រូវការ | Hook ដែលត្រូវជ្រើសរើស |\n|-----------------------------------|-----------------------|\n| ត្រូវការ re-render UI ពេលតម្លៃប្តូរ | useState |\n| ចង់ភ្ជាប់ទៅកាន់ DOM Element | useRef |\n| រក្សាទុក Timer ID / Socket | useRef |\n| តម្លៃ Input ក្នុង Form | useState (controlled) |\n*/",
        "codeLanguage": "jsx",
        "codeTitle": "useRef vs useState Decision Guide",
        "proTip": "ច្បាប់ងាយយល់បំផុត៖ ប្រសិនបើទិន្នន័យនោះត្រូវបង្ហាញលើ Screen ឱ្យ user ឃើញ ចូរប្រើ `useState`។ ប្រសិនបើទិន្នន័យនោះប្រើតែក្នុង code ខាងក្រោយខ្នង ចូរប្រើ `useRef`។"
      },
      {
        "id": "m11-07",
        "number": "07",
        "title": "useRef Use Cases",
        "summary": "ករណីប្រើប្រាស់ជាក់ស្តែងជាមួយ Media Players, Canvas Drawing និង Third-party DOM Libraries។",
        "explanation": "`useRef` ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុងស្ថានភាពជាក់ស្តែងជាច្រើន ជាពិសេសនៅពេលដែលយើងត្រូវធ្វើការជាមួយ HTML5 Media Elements ដូចជា `<video>` និង `<audio>`, HTML5 `<canvas>`, ឬ Third-party Libraries ណាដែលតម្រូវឱ្យគ្រប់គ្រង DOM ដោយផ្ទាល់ (ដូចជា Chart.js, Leaflet, Mapbox)។",
        "keyPoints": [
          "ដើរតួជាស្ពានតភ្ជាប់រវាង Declarative React និង Imperative Browser APIs។",
          "ប្រើសម្រាប់បញ្ជា play/pause, volume, ឬ seek ពេលវេលានៅលើ Video player។",
          "ប្រើដើម្បីទាញយក Canvas 2D/WebGL Context សម្រាប់គូរក្រាហ្វិក។"
        ],
        "codeSnippet": "export function VideoPlayer({ src }: { src: string }) {\n  const videoRef = useRef<HTMLVideoElement>(null);\n\n  return (\n    <div>\n      <video ref={videoRef} src={src} />\n      <button onClick={() => videoRef.current?.play()}>Play</button>\n      <button onClick={() => videoRef.current?.pause()}>Pause</button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Controlling HTML5 Video with useRef",
        "proTip": "`useRef` គឺជាស្ពានដ៏សំខាន់សម្រាប់ភ្ជាប់ React ជាមួយនឹង Third-party libraries ខាងក្រៅដូចជា Chart.js, D3, Leaflet Maps, ឬ Video.js។"
      },
      {
        "id": "m11-08",
        "number": "08",
        "title": "Common useRef Mistakes",
        "summary": "ការជៀសវាងការអាន ឬកែប្រែ ref.current អំឡុងពេល Render Phase។",
        "explanation": "កំហុសឆ្គងដ៏ធ្ងន់ធ្ងរបំផុតនៅពេលប្រើប្រាស់ `useRef` គឺការអាន ឬកែប្រែតម្លៃ `ref.current` នៅចំពេលដែល Component កំពុងធ្វើការ Render JSX។ សកម្មភាពនេះបំពានលើច្បាប់ Component Purity របស់ React និងអាចបណ្តាលឱ្យ UI បង្ហាញទិន្នន័យខុសប្រក្រតី។",
        "keyPoints": [
          "**កុំកែប្រែ Ref ពេល Render**៖ ការសរសេរ `ref.current = 123` ក្នុង component body ធ្វើឱ្យ output នៃ render មិនអាចទស្សន៍ទាយទុកជាមុនបាន (Non-deterministic)។",
          "ត្រូវអាន ឬកែប្រែ `ref.current` តែនៅខាងក្នុង **Event Handlers** ឬ **`useEffect`** ប៉ុណ្ណោះ។",
          "ប្រសិនបើអ្នកត្រូវការប្រើប្រាស់តម្លៃនោះសម្រាប់ render JSX ចូរប្រើ `useState` ជំនួសវិញ។"
        ],
        "codeSnippet": "// ❌ Impure: Writing to ref during render\n/*\nfunction Bad() {\n  myRef.current = 123; // Don't do this during render!\n  return <div>{myRef.current}</div>;\n}\n*/",
        "codeLanguage": "jsx",
        "codeTitle": "Do Not Mutate Refs During Render",
        "pitfall": "ដាច់ខាតកុំអាន ឬកែប្រែ `ref.current` នៅចំកណ្តាល JSX Render Body ព្រោះវានឹងបំពានលើគោលការណ៍ Pure Component របស់ React និងធ្វើឱ្យ UI មានឥរិយាបថមិនប្រក្រតី!"
      }
    ]
  },
  {
    "id": "module-12",
    "number": "12",
    "title": "Custom Hooks",
    "category": "Hooks & Lifecycle",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពីការបង្កើត Reusable Custom Hooks, ការទាញយក Business Logic ចេញពី UI, ការកសាង useFetch, useLocalStorage, useDebounce, ស្ថាបត្យកម្ម Hooks និងគោលការណ៍ Best Practices ក្នុង TypeScript។",
    "iconName": "Wrench",
    "topics": [
      {
        "id": "m12-01",
        "number": "01",
        "title": "What is a Custom Hook?",
        "summary": "JavaScript Functions ដែលចាប់ផ្តើមដោយពាក្យ 'use' និងប្រមូលផ្តុំ React Hooks ផ្សេងៗបញ្ចូលគ្នា។",
        "explanation": "Custom Hook គឺជា JavaScript Function ធម្មតាមួយដែលឈ្មោះរបស់វាចាប់ផ្តើមដោយពាក្យ `use` (ដូចជា `useToggle`, `useFetch`, `useLocalStorage`) និងមានសមត្ថភាពហៅ React Hooks ផ្សេងទៀតនៅខាងក្នុងខ្លួនវា។ Custom Hooks ជួយឱ្យយើងអាចទាញយក State និង Effect Logic ស្មុគស្មាញចេញពី Component ដើម្បីយកទៅប្រើប្រាស់ឡើងវិញបានច្រើនកន្លែងដោយមិនបាច់សរសេរកូដស្ទួន។",
        "keyPoints": [
          "ឈ្មោះត្រូវតែចាប់ផ្តើមដោយពាក្យ `use` ជាដាច់ខាត (ឧ. `useDebounce`, `useLocalStorage`) ដើម្បីឱ្យ React និង Linter ដឹងថាវាជា Hook។",
          "ចែករំលែក Stateful Logic មិនមែនចែករំលែក State នោះទេ (រាល់ Component ដែលហៅ Custom Hook នឹងទទួលបាន State Instance ឯករាជ្យរៀងៗខ្លួន)។",
          "ត្រូវតែគោរពតាមច្បាប់ Rules of Hooks ដូចជា Built-in Hooks ដែរ (មិនត្រូវហៅក្នុង loops ឬ conditions ឡើយ)។"
        ],
        "codeSnippet": "// Basic Custom Hook:\nexport function useToggle(initialValue = false): [boolean, () => void] {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(v => !v);\n  return [value, toggle];\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Simple useToggle Custom Hook",
        "proTip": "Custom Hook គ្រាន់តែជា JavaScript function ធម្មតាប៉ុណ្ណោះ ប៉ុន្តែវាមានសមត្ថភាពពិសេសអាចហៅ Built-in Hooks ដទៃទៀតដូចជា `useState`, `useEffect`, ឬ `useRef` បាន។",
        "interactiveDemoKey": "CustomHookDemo"
      },
      {
        "id": "m12-02",
        "number": "02",
        "title": "Why Custom Hooks?",
        "summary": "អត្ថប្រយោជន៍នៃការ reuse កូដ, ការធ្វើឱ្យ UI component ស្រឡះស្អាត និងភាពងាយស្រួលក្នុងការធ្វើ Unit Test។",
        "explanation": "ការទាញយក State workflows និង Effects ស្មុគស្មាញទៅដាក់ក្នុង Custom Hooks ជួយឱ្យ UI Components របស់អ្នកនៅសល់តែកូដខ្លីៗ ស្រឡះស្អាត និងផ្តោតសំខាន់តែលើ Layout និង Markup ប៉ុណ្ណោះ។ លើសពីនេះ វាក៏ជួយឱ្យ Business Logic អាចយកទៅធ្វើ Unit Test បានយ៉ាងងាយស្រួលដោយឡែកពី UI ផងដែរ។",
        "keyPoints": [
          "លុបបំបាត់ការចម្លងកូដ (Copy-Paste) ដដែលៗឆ្លងកាត់ទំព័រជាច្រើនក្នុងកម្មវិធី។",
          "ផ្តាច់ Business Logic ឱ្យនៅដាច់ដោយឡែកពី Rendering Presentation។",
          "ធ្វើឱ្យកូដងាយស្រួលអាន ងាយស្រួលថែទាំ និងមានភាព modular ខ្ពស់។"
        ],
        "codeSnippet": "// Component remains pure and concise:\nexport function SettingsView() {\n  const [isDarkMode, toggleTheme] = useToggle(true);\n  const [isNotificationsEnabled, toggleNotifications] = useToggle(false);\n\n  return (\n    <div>\n      <button onClick={toggleTheme}>Dark Mode: {isDarkMode ? 'ON' : 'OFF'}</button>\n      <button onClick={toggleNotifications}>Alerts: {isNotificationsEnabled ? 'ON' : 'OFF'}</button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Using Custom Hooks in Components",
        "proTip": "នៅពេលដែល Component របស់អ្នកចាប់ផ្តើមមាន `useEffect` និង `useState` ច្រើនជាន់ ចូរពិចារណាទាញពួកវាចេញទៅជា Custom Hook ដើម្បីឱ្យ Component នៅសល់តែកូដ Declarative UI ស្រឡះស្អាត។"
      },
      {
        "id": "m12-03",
        "number": "03",
        "title": "Creating Custom Hooks",
        "summary": "ច្បាប់នៃការបង្កើត Hook, ក្បួនដាក់ឈ្មោះ និងទម្រង់នៃការ return តម្លៃ (Tuples vs Objects)។",
        "explanation": "ការបង្កើត Custom Hook ត្រូវអនុវត្តតាម Rules of Hooks ទាំងអស់។ នៅពេល return តម្លៃត្រឡប់មកវិញ អ្នកអាចជ្រើសរើស return ជា Array Tuple `[value, updater]` ឬ return ជា Object `{ data, isLoading, error }` អាស្រ័យលើចំនួនទិន្នន័យ និងភាពងាយស្រួលរបស់អ្នកប្រើប្រាស់។",
        "keyPoints": [
          "ប្រើ **Tuple `[val, fn]`** សម្រាប់ទិន្នន័យតិច (១ ទៅ ២) ដែលអនុញ្ញាតឱ្យ consumer អាចប្តូរឈ្មោះ variable តាមចិត្តពេល destructuring។",
          "ប្រើ **Object `{ ... }`** សម្រាប់ទិន្នន័យច្រើន (៣ ឡើងទៅ) ដើម្បីឱ្យ consumer អាចជ្រើសរើសទាញយកតែ property ណាដែលត្រូវការ។",
          "អាចទទួល parameters សម្រាប់ configure ឥរិយាបថរបស់ Hook បានដូច function ធម្មតា។"
        ],
        "codeSnippet": "// Return object with named properties:\nexport function useWindowDimensions() {\n  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });\n\n  useEffect(() => {\n    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });\n    handleResize();\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return dimensions;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useWindowDimensions Hook",
        "proTip": "ច្បាប់ក្នុងការ Return តម្លៃ៖ Return ជា Array/Tuple `[value, setter]` ប្រសិនបើតម្លៃមាន ១ ឬ ២ ដូច `useState`។ Return ជា Object `{ data, isLoading, error }` ប្រសិនបើតម្លៃមានចាប់ពី ៣ ឡើងទៅ ដើម្បីឱ្យងាយស្រួល destructure តាមឈ្មោះ។"
      },
      {
        "id": "m12-04",
        "number": "04",
        "title": "Reusing Logic",
        "summary": "ការចែករំលែកឥរិយាបថ (Behavior) ដោយរក្សា State Instance ដាច់ដោយឡែកពីគ្នា។",
        "explanation": "ចំណុចសំខាន់ដែលត្រូវចងចាំគឺថា ការហៅ Custom Hook មួយនៅក្នុង Components ពីរផ្សេងគ្នា នឹងបង្កើត State Instances ពីរដាច់ដោយឡែកពីគ្នាទាំងស្រុង។ Custom Hooks ជួយយើងក្នុងការចែករំលែករូបមន្តនៃការគណនា និងឥរិយាបថ (Stateful Logic) មិនមែនជាការចែករំលែកទិន្នន័យ State រួមគ្នានោះឡើយ។",
        "keyPoints": [
          "រាល់ការហៅ Hook ម្តងៗ គឺស្មើនឹងការបង្កើត state និង effects ថ្មីមួយសម្រាប់តែ component នោះ។",
          "ប្រសិនបើអ្នកចង់ចែករំលែក **ទិន្នន័យ State តែមួយគត់** ឆ្លងកាត់ Components ជាច្រើន ចូរប្រើ **React Context** ឬ **Zustand** ជំនួសវិញ។",
          "ជួយឱ្យ components នីមួយៗរក្សាភាពឯករាជ្យ និងគ្មានផលប៉ះពាល់ដល់គ្នាទៅវិញទៅមក (No Side Coupling)។"
        ],
        "codeSnippet": "// Component A has its own independent toggle state;\n// Component B has its own independent toggle state.",
        "codeLanguage": "jsx",
        "codeTitle": "Isolated Hook State Instances",
        "pitfall": "Custom Hooks ចែករំលែកតែ 'Logic' ប៉ុណ្ណោះ មិនមែនចែករំលែក 'State' រួមគ្នានោះទេ! ប្រសិនបើ Component A និង Component B ហៅ `useToggle()` នោះពួកវាទាំងពីរមាន State ដាច់ដោយឡែកពីគ្នា ១០០%។"
      },
      {
        "id": "m12-05",
        "number": "05",
        "title": "useFetch Hook",
        "summary": "ការបង្កើត Custom Hook សម្រាប់គ្រប់គ្រង HTTP Requests, Loading State និង Error Handling។",
        "explanation": "`useFetch` គឺជាគំរូ Custom Hook ដ៏ពេញនិយមបំផុតមួយ ដែលធ្វើការប្រមូលផ្តុំ lifecycle ទាំងមូលនៃការហៅ network request រួមមាន៖ ការរក្សាទុកទិន្នន័យ `data`, ស្ថានភាពកំពុងទាញយក `isLoading`, សារប្រាប់កំហុស `error`, និងយន្តការ cleanup ការពារ memory leaks។",
        "keyPoints": [
          "Return ចេញជា object `{ data, isLoading, error }` ដែលមានភាពងាយស្រួលក្នុងការយកទៅ render លើ UI។",
          "ប្រើប្រាស់ boolean flag `ignore` ឬ `AbortController` ក្នុង cleanup function ដើម្បីចៀសវាង race conditions។",
          "គាំទ្រ TypeScript Generics `<T>` ដើម្បីធានាថាទិន្នន័យដែល return មកមាន Type Safety ត្រឹមត្រូវ។"
        ],
        "codeSnippet": "export function useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    let ignore = false;\n    setIsLoading(true);\n\n    fetch(url)\n      .then(res => res.json())\n      .then(result => {\n        if (!ignore) {\n          setData(result);\n          setIsLoading(false);\n        }\n      })\n      .catch(err => {\n        if (!ignore) {\n          setError(err.message);\n          setIsLoading(false);\n        }\n      });\n\n    return () => { ignore = true; };\n  }, [url]);\n\n  return { data, isLoading, error };\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Production useFetch Custom Hook",
        "proTip": "ការប្រើប្រាស់ flag `ignore = true` នៅក្នុង cleanup function គឺជាវិធីសាស្ត្រដ៏សាមញ្ញក្នុងការការពារកុំឱ្យ stale network response មក update លើ component ដែល unmount រួច។"
      },
      {
        "id": "m12-06",
        "number": "06",
        "title": "useLocalStorage Hook",
        "summary": "ការរក្សាទុក State ទៅក្នុង Browser LocalStorage ដោយស្វ័យប្រវត្តិតាមរយៈ JSON serialization។",
        "explanation": "Custom Hook `useLocalStorage` ធ្វើការរួមបញ្ចូលគ្នារវាង `useState` ជាមួយនឹង browser `localStorage` API។ រាល់ពេលដែល State ប្រែប្រួលតម្លៃ វានឹងធ្វើការ serialize ទៅជា JSON string និងរក្សាទុកក្នុង Storage ដោយស្វ័យប្រវត្តិ ហើយនៅពេលដែល user refresh ទំព័រ វានឹង re-hydrate ទិន្នន័យត្រឡប់មកវិញភ្លាមៗ។",
        "keyPoints": [
          "មានសុវត្ថិភាពខ្ពស់ជាមួយ SSR តាមរយៈការពិនិត្យ `typeof window !== 'undefined'`។",
          "ប្រើប្រាស់ `try/catch` block ដើម្បីការពារកុំឱ្យ crash នៅពេលដែលទិន្នន័យ JSON ខូច ឬ user បិទ storage access។",
          "គាំទ្រទាំងតម្លៃផ្ទាល់ និង functional updater pattern ដូចជា `setValue(prev => ...)`។"
        ],
        "codeSnippet": "export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {\n  const [storedValue, setStoredValue] = useState<T>(() => {\n    if (typeof window === 'undefined') return initialValue;\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value: T | ((prev: T) => T)) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      if (typeof window !== 'undefined') {\n        window.localStorage.setItem(key, JSON.stringify(valueToStore));\n      }\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return [storedValue, setValue];\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Enterprise useLocalStorage Hook",
        "proTip": "តែងតែពិនិត្យ `typeof window !== 'undefined'` ជានិច្ច មុនពេលចូលទៅកាន់ `localStorage` ដើម្បីកុំឱ្យមានកំហុស Error ពេលដំណើរការលើ Next.js Server-Side Rendering (SSR)។"
      },
      {
        "id": "m12-07",
        "number": "07",
        "title": "useDebounce Hook",
        "summary": "ការពន្យារពេល State updates សម្រាប់ការស្វែងរក (Search Inputs) ដើម្បីកាត់បន្ថយ API calls។",
        "explanation": "`useDebounce` គឺជា Custom Hook ដ៏ចាំបាច់សម្រាប់ search inputs និង filter forms។ វាជួយទប់ស្កាត់ការហៅ API រាល់ពេលចុចអក្សរម្តងៗ (keystroke) ដោយពន្យារពេលរហូតដល់អ្នកប្រើប្រាស់ផ្អាកវាយអក្សរតាមចំនួន milliseconds ដែលបានកំណត់ (ឧទាហរណ៍៖ 300ms ឬ 500ms)។",
        "keyPoints": [
          "បង្កើត timer តាមរយៈ `setTimeout` និងសម្អាត timer វិញតាមរយៈ `clearTimeout` ក្នុង cleanup function។",
          "កាត់បន្ថយបន្ទុក Server (Server Load) និងសន្សំសំចៃ Network Bandwidth យ៉ាងច្រើន។",
          "ផ្តល់នូវបទពិសោធន៍រលូន និងមិនធ្វើឱ្យ UI កន្ត្រាក់អំឡុងពេលវាយបញ្ចូលទិន្នន័យ។"
        ],
        "codeSnippet": "export function useDebounce<T>(value: T, delay: number = 300): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return debouncedValue;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useDebounce Custom Hook",
        "proTip": "ប្រសិនបើគ្មាន debounce ទេ ការវាយពាក្យ 'react' នឹងបាញ់ API request ចំនួន ៥ ដង! ជាមួយ `useDebounce` វាបាញ់ API តែម្តងគត់នៅពេល user វាយចប់។"
      },
      {
        "id": "m12-08",
        "number": "08",
        "title": "Custom Hook Architecture",
        "summary": "ការរៀបចំ Directory រចនាសម្ព័ន្ធ Folder និងការផ្គុំ Composable Hook Pipelines។",
        "explanation": "នៅក្នុងគម្រោងធំៗ អ្នកអាចផ្គុំ Custom Hooks តូចៗបញ្ចូលគ្នាដើម្បីបង្កើតជា Hook កម្រិតខ្ពស់ (Composable Pipeline) ដូចជា `useUser` ហៅប្រើ `useFetch` ហើយ `useFetch` ហៅប្រើ `useLocalStorage` ជាដើម។ ការរៀបចំ Folder ឱ្យមានរបៀបរៀបរយគឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ភាពងាយស្រួលក្នុងការស្វែងរក និងថែទាំ។",
        "keyPoints": [
          "**Global Hooks** (`src/hooks/`)៖ សម្រាប់ hooks ទូទៅដែលប្រើឆ្លងកាត់ project ទាំងមូល (ដូចជា `useDebounce`, `useLocalStorage`)។",
          "**Feature Hooks** (`src/features/*/hooks/`)៖ សម្រាប់ hooks ដែលទាក់ទងនឹង business domain ជាក់លាក់។",
          "លើកកម្ពស់គោលការណ៍ Single Responsibility Principle លើ hook នីមួយៗ។"
        ],
        "codeSnippet": "src/\n├── hooks/\n│   ├── useLocalStorage.ts\n│   ├── useDebounce.ts\n│   └── useMediaQuery.ts\n└── features/students/hooks/\n    └── useStudentFilters.ts",
        "codeLanguage": "jsx",
        "codeTitle": "Hooks Folder Architecture",
        "proTip": "គោលការណ៍ Colocation សម្រាប់ Hooks៖ Hooks ទូទៅ (Generic) ទុកក្នុង `@/hooks` រីឯ Hooks សម្រាប់ feature ជាក់លាក់ ទុកក្នុង folder របស់ feature នោះ (ឧ. `@/features/students/hooks`)។"
      },
      {
        "id": "m12-09",
        "number": "09",
        "title": "Custom Hook Best Practices",
        "summary": "ការប្រើប្រាស់ as const សម្រាប់ Type Inference ត្រឹមត្រូវ និងការរក្សា Stable Callbacks ជាមួយ useCallback។",
        "explanation": "ដើម្បីបង្កើត Custom Hooks ប្រកបដោយគុណភាពខ្ពស់ និងផ្តល់នូវបទពិសោធន៍ល្អបំផុតដល់ Developer ដទៃទៀត (Developer Experience - DX) អ្នកគួរតែអនុវត្តតាមគោលការណ៍សំខាន់ៗមួយចំនួន ជាពិសេសការគ្រប់គ្រង TypeScript Type Inference និងការរក្សា Function References ឱ្យមានស្ថេរភាព។",
        "keyPoints": [
          "បន្ថែម **`as const`** នៅលើ Tuple Return ដើម្បីឱ្យ TypeScript យល់ច្បាស់ពី Type នៃធាតុនីមួយៗដោយស្វ័យប្រវត្តិ។",
          "ប្រើប្រាស់ **`useCallback`** សម្រាប់រាល់ function ណាដែល return ចេញពី Hook ប្រសិនបើ function នោះអាចត្រូវបានយកទៅប្រើក្នុង dependency array នៃ components ដទៃទៀត។",
          "ផ្តល់នូវ Default Parameters ដែលសមស្រប ដើម្បីឱ្យ Hook មានភាពងាយស្រួលក្នុងការហៅប្រើប្រាស់។"
        ],
        "codeSnippet": "// Using \"as const\" for tuple inference:\nexport function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(c => c + 1);\n  return [count, increment] as const;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Tuple Return with as const",
        "proTip": "នៅពេល return tuple array ពី Custom Hook ក្នុង TypeScript ត្រូវបន្ថែម `as const` នៅខាងចុងជានិច្ច ដើម្បីឱ្យ TypeScript ដឹងច្បាស់ថាធាតុទីមួយជាតម្លៃ និងធាតុទីពីរជា function (មិនច្រឡំជា union type `(number | Function)[]`)។"
      }
    ]
  },
  {
    "id": "module-13",
    "number": "13",
    "title": "React Routing",
    "category": "Routing & Network",
    "summary": "ស្វែងយល់ស៊ីជម្រៅអំពីស្ថាបត្យកម្ម Single Page Application (SPA), React Router v6+, BrowserRouter, Routes, Route, Link, NavLink, Dynamic Routes, Nested Layouts, Protected Routes, useSearchParams និង Code-splitting។",
    "iconName": "Compass",
    "topics": [
      {
        "id": "m13-01",
        "number": "01",
        "title": "SPA Concept",
        "summary": "របៀបដែល Single Page Applications បង្ហាញអេក្រង់ច្រើនដោយមិនបាច់ reload ទំព័រ browser។",
        "explanation": "នៅក្នុងស្ថាបត្យកម្ម **Single Page Application (SPA)** កម្មវិធីរុករក (Browser) ទាញយកតែឯកសារ HTML តែមួយគត់ និង JavaScript bundle ដំបូងមកដំណើរការ។ នៅពេលដែលអ្នកប្រើប្រាស់ចុចផ្លាស់ប្តូរទំព័រទៅកាន់ URL ថ្មី JavaScript នៅខាង client-side នឹងធ្វើអន្តរាគមន៍កាត់ផ្តាច់ (intercept) ការ reload របស់ browser ហើយធ្វើការ update លើ DOM ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "ការផ្លាស់ប្តូរទំព័រធ្វើឡើងភ្លាមៗ (Instant Navigation) ដោយគ្មានផ្ទាំងពណ៌ស (White Screen Flashes) ដូច traditional websites ឡើយ។",
          "State របស់កម្មវិធីត្រូវបានរក្សាទុកក្នុង JavaScript Memory ឆ្លងកាត់ការផ្លាស់ប្តូរ Route នីមួយៗ។",
          "Server គ្រាន់តែផ្គត់ផ្គង់ static bundle និង API endpoints (JSON Data) ប៉ុណ្ណោះ។"
        ],
        "codeSnippet": "// Traditional Multi-Page App: Server returns full HTML page per URL.\n// Single Page App (SPA): Client-side JavaScript swaps view components on URL change.",
        "codeLanguage": "jsx",
        "codeTitle": "SPA Mental Model",
        "proTip": "នៅក្នុង SPA ទោះបីជា URL លើ address bar ផ្លាស់ប្តូរទៅ `/projects` ឬ `/settings` ក៏ដោយ ក៏ browser មិនដែលទាញយក HTML ថ្មីពី server ដែរ — JavaScript គ្រាន់តែផ្លាស់ប្តូរ Component លើអេក្រង់ប៉ុណ្ណោះ។"
      },
      {
        "id": "m13-02",
        "number": "02",
        "title": "React Router",
        "summary": "បណ្ណាល័យស្តង់ដារសម្រាប់គ្រប់គ្រង declarative client-side routing ក្នុង React SPAs។",
        "explanation": "**React Router** គឺជាបណ្ណាល័យស្តង់ដារដ៏ពេញនិយមបំផុតសម្រាប់គ្រប់គ្រង Routing នៅក្នុងកម្មវិធី React SPA។ វាធ្វើការផ្គូផ្គង UI Components ទៅនឹង URL ជាក់លាក់នៅលើ Browser Address Bar និងផ្តល់នូវ Components និង Hooks ជាច្រើនដើម្បីរៀបចំរចនាសម្ព័ន្ធទំព័រ។",
        "keyPoints": [
          "ធ្វើសមកាលកម្ម UI ជាមួយនឹង Browser URL តាមទម្រង់ Declarative។",
          "ចាប់ពី Version 6 ឡើងទៅ React Router គាំទ្រ Nested Routes, Data Loaders, Action Handlers និង Layout Outlets យ៉ាងរលូន។",
          "ប្រើ package `react-router-dom` សម្រាប់ web applications។"
        ],
        "codeSnippet": "npm install react-router-dom",
        "codeLanguage": "bash",
        "codeTitle": "Installing React Router",
        "proTip": "React Router v6+ ប្រើប្រាស់ Element-based syntax (`element={<Home />}`) និង Hooks ទំនើបៗដូចជា `useNavigate`, `useParams` ដែលជួយឱ្យការគ្រប់គ្រង Route មានភាពងាយស្រួលបំផុត។"
      },
      {
        "id": "m13-03",
        "number": "03",
        "title": "BrowserRouter",
        "summary": "ការ wrap កម្មវិធីដើម្បីភ្ជាប់ជាមួយ HTML5 Browser History API។",
        "explanation": "`<BrowserRouter>` គឺជា Router Provider ស្នូលដែលត្រូវរុំព័ទ្ធពីលើកម្មវិធី React ទាំងមូល។ វាប្រើប្រាស់ **HTML5 History API** (ដូចជា `pushState`, `replaceState` និង `popstate` event) ដើម្បីរក្សា UI របស់អ្នកឱ្យស៊ីសង្វាក់គ្នាជាមួយនឹង URL នៅក្នុង address bar។",
        "keyPoints": [
          "ដាក់ `<BrowserRouter>` នៅចំណុចកំពូលបង្អស់ (Root Level) នៃ React App។",
          "ផ្តល់នូវ Routing Context ដល់ Child Components ទាំងអស់ ដើម្បីឱ្យពួកវាអាចប្រើ `<Link>`, `useNavigate()`, ឬ `useParams()` បាន។",
          "នៅលើ production server អ្នកត្រូវ configure fallback rewrite ទៅកាន់ `index.html` សម្រាប់ client-side routes ទាំងអស់។"
        ],
        "codeSnippet": "import { BrowserRouter } from 'react-router-dom';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n);",
        "codeLanguage": "jsx",
        "codeTitle": "BrowserRouter Provider",
        "proTip": "តែងតែដាក់ `<BrowserRouter>` នៅ root level នៃ component tree របស់អ្នក (ដូចជា `main.tsx` ឬ `App.tsx`) ដើម្បីឱ្យ components ទាំងអស់អាចហៅប្រើ Router hooks បាន។"
      },
      {
        "id": "m13-04",
        "number": "04",
        "title": "Routes and Route",
        "summary": "ការកំណត់លក្ខខណ្ឌផ្គូផ្គង URL Path និង Target Components ដែលត្រូវ render។",
        "explanation": "Component `<Routes>` ដើរតួជាអ្នកត្រួតពិនិត្យ Child `<Route>` ទាំងអស់របស់ខ្លួន ហើយជ្រើសរើសយក Route ណាដែលត្រូវគ្នានឹង URL បច្ចុប្បន្នបំផុតដើម្បីយក Component ក្នុង `element` មក render បង្ហាញលើអេក្រង់។",
        "keyPoints": [
          "`<Routes>` ជ្រើសរើសយក route ដែលមានភាពជាក់លាក់បំផុត (Specificity Matching) ដោយស្វ័យប្រវត្តិ។",
          "កំណត់ `path` (ឧទាហរណ៍៖ `\"/\"`, `\"/projects\"`) និង `element` (ឧទាហរណ៍៖ `<HomePage />`) សម្រាប់ route នីមួយៗ។",
          "អាចរៀបចំជា hierarchical nested structure ដើម្បីបង្កើត sub-pages បានយ៉ាងងាយស្រួល។"
        ],
        "codeSnippet": "import { Routes, Route } from 'react-router-dom';\nimport HomePage from './pages/HomePage';\nimport CurriculumPage from './pages/CurriculumPage';\nimport ProjectsPage from './pages/ProjectsPage';\n\nexport function AppRoutes() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<HomePage />} />\n      <Route path=\"/curriculum\" element={<CurriculumPage />} />\n      <Route path=\"/projects\" element={<ProjectsPage />} />\n    </Routes>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Configuring Routes",
        "proTip": "នៅក្នុង React Router v6 `<Routes>` នឹងជ្រើសរើស Route ណាដែល 'Best Match' បំផុតដោយស្វ័យប្រវត្តិ ដោយមិនចាំបាច់ប្រើ `exact` keyword ដូចក្នុង v5 ទៀតឡើយ។"
      },
      {
        "id": "m13-05",
        "number": "05",
        "title": "Link",
        "summary": "ការធ្វើដំណើរឆ្លងកាត់ទំព័រ (Client-side Navigation) ដោយគ្មាន page refresh។",
        "explanation": "Component `<Link>` ត្រូវបានប្រើប្រាស់សម្រាប់ការធ្វើដំណើរឆ្លងកាត់ទំព័រនានានៅខាងក្នុងកម្មវិធី React SPA។ នៅលើ DOM វា render ចេញជា HTML `<a>` tag ធម្មតា ប៉ុន្តែវាបានភ្ជាប់មកជាមួយ internal `onClick` handler ដែលទប់ស្កាត់ការ reload browser និងជំរុញឱ្យ client-side routing ដំណើរការភ្លាមៗ។",
        "keyPoints": [
          "ប្រើប្រាស់ attribute `to=\"/destination\"` ដើម្បីបញ្ជាក់គោលដៅ។",
          "ប្រើ `<Link>` សម្រាប់ internal links និងប្រើ `<a>` ធម្មតាសម្រាប់តែ external links (តំណភ្ជាប់ទៅក្រៅ website) ប៉ុណ្ណោះ។",
          "រក្សា state របស់កម្មវិធីឱ្យនៅដដែល មិនធ្វើឱ្យបាត់បង់ទិន្នន័យពេលប្តូរទំព័រឡើយ។"
        ],
        "codeSnippet": "import { Link } from 'react-router-dom';\n\n<Link to=\"/projects\" className=\"text-blue-400 hover:underline\">\n  View Real-World Projects\n</Link>",
        "codeLanguage": "jsx",
        "codeTitle": "Client Navigation with Link",
        "pitfall": "ដាច់ខាតកុំប្រើ `<a href=\"/projects\">` សម្រាប់ internal navigation ក្នុង SPA ព្រោះវានឹង reload browser ទាំងមូល! ត្រូវប្រើ `<Link to=\"/projects\">` ជានិច្ច។"
      },
      {
        "id": "m13-06",
        "number": "06",
        "title": "NavLink",
        "summary": "ការកំណត់ Style លើ Active Navigation Links សម្រាប់ headers និង sidebars។",
        "explanation": "`<NavLink>` គឺជាទម្រង់ពិសេសមួយនៃ `<Link>` ដែលមានសមត្ថភាពដឹងថាតើ URL បច្ចុប្បន្នកំពុងត្រូវគ្នានឹងតំណភ្ជាប់របស់វា (Active State) ឬអត់។ វាបញ្ជូន boolean parameter `{ isActive }` ទៅក្នុង `className` ឬ `style` callback function ដែលជួយឱ្យការរចនា navigation bar, tabs, ឬ sidebar menu មានភាពងាយស្រួលបំផុត។",
        "keyPoints": [
          "ប្រើសម្រាប់ Navigation Bars, Sidebars, និង Tab Menus។",
          "`className={({ isActive }) => isActive ? 'active-class' : 'inactive-class'}`។",
          "គាំទ្រ accessibility (a11y) ដោយបន្ថែម `aria-current=\"page\"` លើ active link ដោយស្វ័យប្រវត្តិ។"
        ],
        "codeSnippet": "import { NavLink } from 'react-router-dom';\n\n<NavLink\n  to=\"/curriculum\"\n  className={({ isActive }) =>\n    cn(\n      \"px-3 py-2 rounded-md text-sm font-medium\",\n      isActive ? \"bg-slate-800 text-white\" : \"text-slate-400 hover:text-white\"\n    )\n  }\n>\n  Curriculum\n</NavLink>",
        "codeLanguage": "jsx",
        "codeTitle": "Active Styling with NavLink",
        "proTip": "`<NavLink>` បញ្ជូន boolean `isActive` ទៅក្នុង `className` function ដោយស្វ័យប្រវត្តិ ដែលអនុញ្ញាតឱ្យអ្នក highlight menu item ណាដែលកំពុងបើកបានយ៉ាងរលូន។"
      },
      {
        "id": "m13-07",
        "number": "07",
        "title": "Navigation Hook (useNavigate)",
        "summary": "ការបញ្ជា redirect ទំព័រតាមរយៈកូដ (Programmatic Navigation) ក្នុង handlers ឬ effects។",
        "explanation": "Hook `useNavigate` ផ្តល់ត្រឡប់មកវិញនូវ navigation function ដែលអនុញ្ញាតឱ្យអ្នកបញ្ជាប្តូរទំព័រតាមរយៈកូដ JavaScript (Programmatic Navigation) ដូចជាការ redirect ទៅកាន់ Dashboard បន្ទាប់ពី submit form ជោគជ័យ ឬការ redirect ទៅ Login បន្ទាប់ពី user ចុច Logout។",
        "keyPoints": [
          "ប្រើ `navigate('/path')` ដើម្បីទៅកាន់ទំព័រថ្មី។",
          "ប្រើ `navigate(-1)` ដើម្បីត្រឡប់ក្រោយ (Go Back) ឬ `navigate(1)` ដើម្បីទៅមុខ (Go Forward) ដូច browser buttons។",
          "ជម្រើស `{ replace: true }` នឹងជំនួស URL ចាស់ក្នុង history stack (ការពារ back-button loop)។"
        ],
        "codeSnippet": "import { useNavigate } from 'react-router-dom';\n\nexport function LoginForm() {\n  const navigate = useNavigate();\n\n  const handleLoginSuccess = () => {\n    // Redirect to dashboard without back-button loop:\n    navigate('/dashboard', { replace: true });\n  };\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Programmatic Navigation with useNavigate",
        "proTip": "ប្រើ `navigate('/dashboard', { replace: true })` ក្រោយពេល Login ជោគជ័យ ដើម្បីកុំឱ្យ user អាចចុចប៊ូតុង Back ត្រឡប់មកទំព័រ Login វិញបាន។"
      },
      {
        "id": "m13-08",
        "number": "08",
        "title": "Dynamic Routes",
        "summary": "ការចាប់យក dynamic URL paths ដោយប្រើ parameters ដូចជា :id ឬ :moduleId។",
        "explanation": "Dynamic Routes អនុញ្ញាតឱ្យអ្នកកំណត់ pattern នៃ URL ដែលមានតម្លៃប្រែប្រួល dynamic ដោយប្រើសញ្ញាពីរចុច (`:`) នៅពីមុខឈ្មោះ parameter ដូចជា `/modules/:moduleId` ឬ `/products/:id`។ វិធីសាស្ត្រនេះជួយឱ្យ Component តែមួយអាចទទួលរ៉ាប់រងការបង្ហាញទំព័រលម្អិតនៃទិន្នន័យរាប់ពាន់ records បានយ៉ាងរលូន។",
        "keyPoints": [
          "កំណត់ Dynamic segment ដោយប្រើបុព្វបទ `:` ដូចជា `:moduleId`។",
          "អនុញ្ញាតឱ្យ component តែមួយដើរតួជា template សម្រាប់ URLs រាប់ពាន់ផ្សេងគ្នា។",
          "តម្លៃជាក់ស្តែងនៃ parameter នឹងត្រូវទាញយកតាមរយៈ `useParams()` hook។"
        ],
        "codeSnippet": "<Route path=\"/modules/:moduleId\" element={<ModuleDetailView />} />",
        "codeLanguage": "jsx",
        "codeTitle": "Dynamic Route Parameter Definition",
        "proTip": "អ្នកអាចដាក់ parameters ច្រើនក្នុង path តែមួយបាន ដូចជា `/courses/:courseId/modules/:moduleId/lessons/:lessonId`។"
      },
      {
        "id": "m13-09",
        "number": "09",
        "title": "Route Parameters (useParams)",
        "summary": "ការទាញយក dynamic parameters ចេញពី URL path តាមរយៈ useParams hook។",
        "explanation": "Hook `useParams()` ផ្តល់នូវ Object ដែលផ្ទុក key/value pairs នៃ dynamic parameters ទាំងអស់ដែលត្រូវគ្នានឹង `<Route path>` បច្ចុប្បន្ន។ អ្នកអាចទាញយក parameter ទាំងនោះមកប្រើប្រាស់ដើម្បីទាញយកទិន្នន័យពី API ឬធ្វើការ filter បង្ហាញលើ UI។",
        "keyPoints": [
          "តម្លៃដែលទាញចេញពី `useParams` គឺតែងតែជា **String** ជានិច្ច។",
          "នៅក្នុង TypeScript អ្នកអាចកំណត់ Generic type ដូចជា `useParams<{ moduleId: string }>()` ដើម្បីទទួលបាន Type Safety និង Auto-completion។",
          "ប្រើរួមជាមួយ `useEffect` ដើម្បីទាញយកទិន្នន័យថ្មីរាល់ពេលដែល parameter ផ្លាស់ប្តូរតម្លៃ។"
        ],
        "codeSnippet": "import { useParams } from 'react-router-dom';\n\nexport function ModuleDetailView() {\n  const { moduleId } = useParams<{ moduleId: string }>();\n  return <h2>Displaying details for Module {moduleId}</h2>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Reading URL Parameters with useParams",
        "proTip": "ចងចាំថា `useParams` តែងតែ return តម្លៃជា `string` ជានិច្ច! ប្រសិនបើ ID របស់អ្នកជាលេខ ត្រូវប្រើ `Number(id)` មុនពេលយកទៅប្រៀបធៀប។"
      },
      {
        "id": "m13-10",
        "number": "10",
        "title": "Nested Routes",
        "summary": "ការរៀបចំ sub-routes ដែលចែករំលែក layout រួមគ្នាដោយប្រើប្រាស់ <Outlet />។",
        "explanation": "Nested Routes គឺជាបច្ចេកទេសរៀបចំ Route ជាថ្នាក់កូនចៅ ដែលអនុញ្ញាតឱ្យ Parent Route អាចចែករំលែក Layout រួម (ដូចជា Header, Sidebar, ឬ Footer) ទៅឱ្យ Child Routes ទាំងអស់។ Component `<Outlet />` ដើរតួជាកន្លែងទំនេរ (placeholder) សម្រាប់ render កូនចៅដែលត្រូវគ្នានឹង URL។",
        "keyPoints": [
          "ជួយជៀសវាងការសរសេរ Layout components ស្ទួនៗគ្នានៅគ្រប់ទំព័រ។",
          "នៅពេលដែល user ផ្លាស់ប្តូរ sub-routes មានតែផ្នែកខាងក្នុង `<Outlet />` ប៉ុណ្ណោះដែល re-render ចំណែក Header និង Sidebar នៅរក្សាទុកដដែល (គ្មាន flickering)។",
          "ប្រើ `index` attribute សម្រាប់កំណត់ default view នៅពេលដែល path ត្រូវគ្នានឹង parent ផ្ទាល់។"
        ],
        "codeSnippet": "// Route configuration:\n<Route path=\"/dashboard\" element={<DashboardLayout />}>\n  <Route index element={<DashboardOverview />} />\n  <Route path=\"analytics\" element={<AnalyticsView />} />\n  <Route path=\"settings\" element={<SettingsView />} />\n</Route>\n\n// Inside DashboardLayout.jsx:\nexport function DashboardLayout() {\n  return (\n    <div className=\"flex\">\n      <Sidebar />\n      <main className=\"flex-1 p-6\">\n        <Outlet /> {/* Child route renders here! */}\n      </main>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Nested Routes and Outlet Layout",
        "proTip": "គិតពី `<Outlet />` ដូចជា 'រន្ធដោត (Slot)' មួយនៅក្នុង Layout៖ រាល់ Sub-Route ណាដែលត្រូវគ្នានឹង URL វានឹងរត់មកបង្ហាញនៅចំកន្លែងដែលដាក់ `<Outlet />` នោះភ្លាម។"
      },
      {
        "id": "m13-11",
        "number": "11",
        "title": "Layout Routes",
        "summary": "ការប្រមូលផ្តុំ routes ក្រោម layout រួមដោយមិនចាំបាច់បន្ថែម URL path prefix (Pathless Routes)។",
        "explanation": "ប្រសិនបើអ្នកចង់រុំព័ទ្ធ Routes មួយក្រុមនៅក្នុង Layout តែមួយ ដោយមិនចង់បន្ថែម prefix ទៅក្នុង URL ឡើយ អ្នកអាចលុប attribute `path` ចេញពី parent `<Route>` បាន។ បច្ចេកទេសនេះហៅថា **Pathless Layout Routes**។",
        "keyPoints": [
          "Parent Route គ្រាន់តែកំណត់ `element={<Layout />}` ដោយគ្មាន `path` attribute។",
          "អនុញ្ញាតឱ្យ routes ដូចជា `/login` និង `/register` ចែករំលែក `AuthLayout` ជាមួយគ្នាដោយមិនចាំបាច់ក្លាយជា `/auth/login` ឡើយ។",
          "ជួយឱ្យ URL Structure មានភាពខ្លី និងស្រស់ស្អាត។"
        ],
        "codeSnippet": "<Route element={<AuthLayout />}>\n  <Route path=\"/login\" element={<LoginPage />} />\n  <Route path=\"/register\" element={<RegisterPage />} />\n</Route>",
        "codeLanguage": "jsx",
        "codeTitle": "Pathless Layout Route",
        "proTip": "Pathless Layout Routes គឺល្អឥតខ្ចោះសម្រាប់ការបែងចែក Layout ពីរផ្សេងគ្នា ដូចជា Public Layout (សម្រាប់ Landing, About) និង Auth Layout (សម្រាប់ Login, Register)។"
      },
      {
        "id": "m13-12",
        "number": "12",
        "title": "404 Page",
        "summary": "ការបង្កើត Catch-all Wildcard Route (*) សម្រាប់បង្ហាញទំព័រ Not Found។",
        "explanation": "ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើប្រាស់វាយ URL ខុស ឬចូលទៅកាន់តំណភ្ជាប់ដែលមិនមាននៅក្នុងកម្មវិធី អ្នកត្រូវតែបង្កើត Catch-all Route ដោយប្រើសញ្ញាផ្កាយ (`path=\"*\"`) នៅខាងចុងបង្អស់នៃ `<Routes>` list។",
        "keyPoints": [
          "`path=\"*\"` នឹងចាប់យកគ្រប់ URL ណាដែលមិនត្រូវគ្នានឹង routes ខាងលើទាំងអស់។",
          "តែងតែផ្តល់នូវការរចនាទំព័រ 404 ប្រកបដោយភាពរួសរាយ រួមជាមួយនឹងប៊ូតុងត្រឡប់ទៅកាន់ទំព័រដើមវិញ (Home Link)។",
          "ជៀសវាងការទុកឱ្យទំព័រទទេស្អាតពេល user វាយ URL ខុស។"
        ],
        "codeSnippet": "<Route path=\"*\" element={<NotFoundView />} />",
        "codeLanguage": "jsx",
        "codeTitle": "Catch-all 404 Route",
        "proTip": "តែងតែដាក់ Catch-all Route (`path=\"*\"`) នៅបន្ទាត់ចុងក្រោយបង្អស់នៃ `<Routes>` ជានិច្ច ដើម្បីចាប់យក URL ទាំងឡាយណាដែលមិនត្រូវគ្នានឹង route ខាងលើ។"
      },
      {
        "id": "m13-13",
        "number": "13",
        "title": "Protected Routes",
        "summary": "ការការពារទំព័រឯកជនសម្រាប់តែ Authenticated Users និងការ redirect ភ្ញៀវទៅកាន់ login។",
        "explanation": "Protected Route (ឬ Route Guard) គឺជា Component Wrapper ដែលធ្វើការត្រួតពិនិត្យ Authentication State របស់អ្នកប្រើប្រាស់៖ ប្រសិនបើ user បាន Login រួចរាល់ វានឹងអនុញ្ញាតឱ្យ render `<Outlet />`; ប្រសិនបើមិនទាន់ Login ទេ វានឹង redirect ទៅកាន់ទំព័រ `/login` ភ្លាមៗ។",
        "keyPoints": [
          "ប្រើប្រាស់ component `<Navigate to=\"/login\" replace />` សម្រាប់ការ redirect ដោយស្វ័យប្រវត្តិ។",
          "ភ្ជាប់ `state={{ from: location }}` ដើម្បីចងចាំទំព័រដើមដែល user បានព្យាយាមចូល។",
          "អាចអនុវត្តបន្ថែមសម្រាប់ Role-based Authorization (ដូចជា Admin-only routes)។"
        ],
        "codeSnippet": "import { Navigate, Outlet, useLocation } from 'react-router-dom';\n\nexport function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {\n  const location = useLocation();\n\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  return <Outlet />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Protected Route Gate",
        "proTip": "បញ្ជូន `state={{ from: location }}` ទៅក្នុង `<Navigate>` ដើម្បីឱ្យទំព័រ Login អាចដឹង និង redirect user ត្រឡប់មកកាន់ទំព័រដែលគាត់ចង់ចូលវិញដោយស្វ័យប្រវត្តិ ក្រោយពេល Login ជោគជ័យ។"
      },
      {
        "id": "m13-14",
        "number": "14",
        "title": "Query Parameters (useSearchParams)",
        "summary": "ការអាន និងកែប្រែ URL query strings ដូចជា ?sort=desc&page=2។",
        "explanation": "Hook `useSearchParams` មានរបៀបប្រើប្រាស់ស្រដៀងគ្នានឹង `useState` ដែរ ប៉ុន្តែវាធ្វើការរក្សាទុកទិន្នន័យ State នៅលើ URL Query String ដោយផ្ទាល់ (ឧទាហរណ៍៖ `?q=react&sort=popular`)។ វិធីសាស្ត្រនេះជួយឱ្យ filter state អាច share ទៅកាន់អ្នកដទៃ និងរក្សាទុកក្នុង browser history បាន។",
        "keyPoints": [
          "អានតម្លៃតាមរយៈ `searchParams.get('key')`។",
          "Update តម្លៃតាមរយៈ `setSearchParams({ key: value })`។",
          "ធ្វើសមកាលកម្មទិន្នន័យតារាង ការ filter និង pagination ជាមួយ Browser History យ៉ាងរលូន។"
        ],
        "codeSnippet": "import { useSearchParams } from 'react-router-dom';\n\nexport function SearchFilter() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  const query = searchParams.get('q') || '';\n\n  const handleSearch = (newQuery: string) => {\n    setSearchParams({ q: newQuery });\n  };\n\n  return <input value={query} onChange={(e) => handleSearch(e.target.value)} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Query Strings with useSearchParams",
        "proTip": "ការរក្សាទុក Search Query, Filter, និង Pagination នៅក្នុង URL Query Parameters ជួយឱ្យ user អាចចម្លងតំណភ្ជាប់ (Shareable Link) ឬ Bookmark ទុកមើលពេលក្រោយបានយ៉ាងងាយស្រួល។"
      },
      {
        "id": "m13-15",
        "number": "15",
        "title": "Route Architecture",
        "summary": "ការប្រមូលផ្តុំ Route Definitions និង Route Path Constants ឱ្យមានរបៀបរៀបរយ។",
        "explanation": "នៅក្នុងកម្មវិធីខ្នាតធំ ការសរសេរ Path string ដោយផ្ទាល់ (Hardcoding strings) នៅតាម components នានា អាចនាំឱ្យកើតមាន Broken Links ដោយសារតែការវាយអក្សរខុស ឬការពិបាកពេលផ្លាស់ប្តូរ URL structure។ ការប្រមូលផ្តុំ Paths ទាំងអស់ឱ្យស្ថិតនៅក្នុង object constant `ROUTES` តែមួយ គឺជា Best Practice ដ៏សំខាន់។",
        "keyPoints": [
          "បង្កើត `ROUTES` constant object ដោយបន្ថែម `as const`។",
          "គាំទ្រ dynamic route helpers ដូចជា `ROUTES.PROJECT_DETAIL(id)`។",
          "ជួយឱ្យការ refactor ផ្លាស់ប្តូរ URL paths អាចធ្វើឡើងនៅកន្លែងតែមួយដោយសុវត្ថិភាព។"
        ],
        "codeSnippet": "export const ROUTES = {\n  HOME: '/',\n  CURRICULUM: '/curriculum',\n  PROJECTS: '/projects',\n  PROJECT_DETAIL: (id: string) => `/projects/${id}`,\n} as const;",
        "codeLanguage": "jsx",
        "codeTitle": "Centralized Route Constants",
        "proTip": "ជៀសវាងការសរសេរ Hardcoded Strings ដូចជា `navigate('/projects')` នៅគ្រប់កន្លែង! ចូរប្រមូលផ្តុំវាក្នុង `ROUTES` constant ដើម្បីការពារកុំឱ្យមានកំហុសវាយខុសអក្ខរាវិរុទ្ធ (Typos)។"
      },
      {
        "id": "m13-16",
        "number": "16",
        "title": "React Router Best Practices",
        "summary": "ការធ្វើ Code-splitting លើ Routes ដោយប្រើប្រាស់ React.lazy និង Suspense។",
        "explanation": "ដើម្បីបង្កើនល្បឿននៃការផ្ទុកទំព័រដំបូង (Initial Page Load Time) នៃកម្មវិធី SPA ធំៗ អ្នកគួរតែអនុវត្ត **Route-based Code Splitting**។ តាមរយៈការប្រើប្រាស់ `React.lazy()` និង `<Suspense>` browser នឹងទាញយក JavaScript សម្រាប់តែទំព័រជាក់លាក់ដែលអ្នកប្រើប្រាស់កំពុងបើកមើលប៉ុណ្ណោះ។",
        "keyPoints": [
          "ប្រើប្រាស់ `React.lazy(() => import('./pages/PageName'))` សម្រាប់ទំព័រ route ទាំងអស់។",
          "រុំព័ទ្ធ route components នៅក្នុង `<Suspense fallback={<LoadingSkeleton />}>`។",
          "ជួយកាត់បន្ថយ Time to Interactive (TTI) និងបង្កើនពិន្ទុ Performance របស់ Web Vitals។"
        ],
        "codeSnippet": "import React, { Suspense } from 'react';\n\nconst ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));\n\n<Route \n  path=\"/projects\" \n  element={\n    <Suspense fallback={<PageSkeleton />}>\n      <ProjectsPage />\n    </Suspense>\n  } \n/>",
        "codeLanguage": "jsx",
        "codeTitle": "Lazy-loaded Route with Suspense",
        "proTip": "ការប្រើ `React.lazy()` ជាមួយ Routes ជួយកាត់បន្ថយទំហំ Initial JavaScript Bundle យ៉ាងច្រើន ព្រោះ browser ទាញយកតែ code នៃទំព័រណាដែល user កំពុងបើកមើលប៉ុណ្ណោះ។"
      }
    ]
  },
  {
    "id": "module-14",
    "number": "14",
    "title": "API Integration",
    "category": "Routing & Network",
    "summary": "ការតភ្ជាប់កម្មវិធី React ជាមួយ REST API, ការប្រើប្រាស់ Axios, HTTP methods (GET, POST, PUT, PATCH, DELETE), service layers, interceptors, និងការគ្រប់គ្រង Network Errors ប្រកបដោយប្រសិទ្ធភាព។",
    "iconName": "Globe",
    "topics": [
      {
        "id": "m14-01",
        "number": "01",
        "title": "React + REST API",
        "summary": "ស្វែងយល់អំពីរបៀបដែល Frontend React ធ្វើការទំនាក់ទំនងជាមួយ Backend Services តាមរយៈ REST API។",
        "explanation": "កម្មវិធី React ធ្វើការទំនាក់ទំនងជាមួយ Backend Servers តាមរយៈពិធីការ HTTP ដោយផ្លាស់ប្តូរទិន្នន័យជាទម្រង់ JSON។ រចនាសម្ព័ន្ធបែប Decoupled Architecture នេះអនុញ្ញាតឱ្យ Frontend និង Backend អភិវឌ្ឍដោយឡែកពីគ្នា ដោយគ្រាន់តែគោរពតាមកិច្ចព្រមព្រៀង API Contract (Endpoints & Data Formats) តែប៉ុណ្ណោះ។",
        "keyPoints": [
          "ការទំនាក់ទំនងគ្មានស្ថានភាព (Stateless Communication) តាមរយៈ HTTP Requests និង JSON Payload។",
          "Frontend ទទួលខុសត្រូវលើ User Interface (UI) និង State រីឯ Backend ទទួលខុសត្រូវលើ Database, Security, និង Business Logic។",
          "ប្រើប្រាស់ HTTP Methods ស្របតាមស្តង់ដារ REST (GET, POST, PUT, PATCH, DELETE)។"
        ],
        "codeSnippet": "// 1. Client (React) ផ្ញើ HTTP Request ទៅកាន់ Server:\n// GET /api/v1/products -> Headers: { Authorization: \"Bearer ...\" }\n\n// 2. Server ដំណើរការ Business Logic និង Query Database\n\n// 3. Server ឆ្លើយតបមកវិញនូវ JSON Response:\n// Status: 200 OK\n// Body: [ { \"id\": 1, \"title\": \"React Masterclass\", \"price\": 49 } ]",
        "codeLanguage": "jsx",
        "codeTitle": "REST Architecture Model",
        "proTip": "React ដំណើរការតែនៅលើ Client (Browser) ប៉ុណ្ណោះ ដូច្នេះវាត្រូវការទាញយកទិន្នន័យពី Server តាមរយៈ HTTP APIs (JSON) ដោយមិនខ្វល់ថា Backend សរសេរដោយ Node.js, Python, Laravel ឬ Go នោះឡើយ (Decoupled Architecture)។"
      },
      {
        "id": "m14-02",
        "number": "02",
        "title": "Fetching API Data",
        "summary": "ការប្រៀបធៀបរវាង Browser Native fetch() API និង External HTTP Client Libraries ដូចជា Axios។",
        "explanation": "Browser សម័យទំនើបបានភ្ជាប់មកជាមួយនូវ Native `fetch()` API សម្រាប់ធ្វើ HTTP Requests។ ទោះជាយ៉ាងណាក៏ដោយ បណ្ណាល័យជំនួយដូចជា Axios ឬ TanStack Query ត្រូវបាននិយមប្រើប្រាស់យ៉ាងទូលំទូលាយ ព្រោះវាជួយសម្រួលដល់ការ parse ទិន្នន័យ JSON ដោយស្វ័យប្រវត្តិ ការកំណត់ Request Timeouts និងការគ្រប់គ្រង Error។",
        "keyPoints": [
          "`fetch()` បោះ Promise reject តែនៅពេលជួបបញ្ហា Network Failure ប៉ុណ្ណោះ មិន reject ពេលជួប HTTP 404/500 ឡើយ។",
          "ត្រូវតែពិនិត្យមើល `if (!response.ok)` ជានិច្ចនៅពេលប្រើប្រាស់ `fetch()`។",
          "ត្រូវតែហៅ `await response.json()` ដើម្បីបំប្លែង Response Body ទៅជា JavaScript Object។"
        ],
        "codeSnippet": "async function fetchProducts() {\n  // Native fetch តម្រូវឱ្យពិនិត្យមើល response.ok ដោយផ្ទាល់ដៃ៖\n  const response = await fetch('/api/products');\n  \n  if (!response.ok) {\n    throw new Error(`HTTP Error! Status: ${response.status}`);\n  }\n  \n  const data = await response.json();\n  return data;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Native fetch() Error Checking",
        "pitfall": "Native `fetch()` នឹងមិនបោះ Error (Promise rejection) ទេទោះបីជា Server ឆ្លើយតបមកវិញនូវ Status Code 404 (Not Found) ឬ 500 (Internal Server Error) ក៏ដោយ! អ្នកត្រូវតែពិនិត្យមើល `response.ok` ដោយខ្លួនឯងជានិច្ច។"
      },
      {
        "id": "m14-03",
        "number": "03",
        "title": "GET Request",
        "summary": "ការទាញយកទិន្នន័យ (Retrieve Data) ពី Backend API Endpoints មកបង្ហាញលើ UI។",
        "explanation": "HTTP GET ត្រូវបានប្រើប្រាស់សម្រាប់ទាញយកទិន្នន័យពី Server ដោយគ្មានការផ្លាស់ប្តូរ (Side Effects) លើទិន្នន័យនៅក្នុង Database ឡើយ។ នៅពេលប្រើប្រាស់ Axios ទិន្នន័យដែល Server ឆ្លើយតបមកវិញនឹងត្រូវបាន Parse ជា JSON រួចស្រេចនៅក្នុង property `res.data`។",
        "keyPoints": [
          "GET Request គ្មាន Request Body ឡើយ — បើចង់ចម្លងទិន្នន័យតម្រង សូមប្រើ Query Parameters (e.g. `?page=1&limit=10`)។",
          "មានសុវត្ថិភាព (Safe) និងអាចត្រូវបាន Caching ដោយ Browser ឬ CDN។",
          "ស្រង់យកទិន្នន័យតាមរយៈ `response.data` នៅពេលប្រើ Axios។"
        ],
        "codeSnippet": "import axios from 'axios';\n\nconst fetchStudents = async () => {\n  const res = await axios.get('/api/students', {\n    params: { page: 1, limit: 10 }\n  });\n  return res.data;\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Axios GET Request",
        "proTip": "HTTP GET គឺជាវិធីសាស្ត្រមួយដែលមានសុវត្ថិភាព (Safe) និង Idempotent មានន័យថាការហៅ GET ច្រើនដងនឹងមិនកែប្រែ ឬបំផ្លាញទិន្នន័យនៅលើ Server ឡើយ។"
      },
      {
        "id": "m14-04",
        "number": "04",
        "title": "POST Request",
        "summary": "ការផ្ញើទិន្នន័យបង្កើត Resource ថ្មីនៅលើ Server តាមរយៈ Request Body ជាទម្រង់ JSON។",
        "explanation": "HTTP POST ត្រូវបានប្រើប្រាស់សម្រាប់បញ្ជូនទិន្នន័យថ្មីទៅកាន់ Server ដូចជាការចុះឈ្មោះគណនី (Sign Up), ការបង្កើតទិន្នន័យថ្មី (Create Item), ឬការបញ្ជូន Form Data។ ទិន្នន័យទាំងនេះត្រូវបានវេចខ្ចប់នៅក្នុង Request Body ជាទម្រង់ JSON Payload។",
        "keyPoints": [
          "បញ្ជូនទិន្នន័យនៅក្នុង Request Body (មិនមែននៅលើ URL)។",
          "មិនមែនជា Idempotent ទេ — ការហៅ POST Request ដដែលៗច្រើនដង នឹងបង្កើត Resource ថ្មីៗច្រើនដងដូចគ្នា។",
          "ជាទូទៅ Server ឆ្លើយតបមកវិញនូវ Status `201 Created` រួមជាមួយទិន្នន័យថ្មីដែលបានបង្កើត។"
        ],
        "codeSnippet": "import axios from 'axios';\n\ninterface StudentInput {\n  name: string;\n  email: string;\n}\n\nconst createStudent = async (newStudent: StudentInput) => {\n  const res = await axios.post('/api/students', newStudent);\n  return res.data; // Server returns created record with new ID\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Axios POST Request",
        "proTip": "កុំភ្លេចកំណត់ `Content-Type: application/json` នៅលើ Request Header ដើម្បីឱ្យ Server ដឹងថាទិន្នន័យដែលផ្ញើទៅជា JSON (ប្រសិនបើប្រើ Axios វាកំណត់ Header នេះឱ្យដោយស្វ័យប្រវត្តិ)។"
      },
      {
        "id": "m14-05",
        "number": "05",
        "title": "PUT Request",
        "summary": "ការធ្វើបច្ចុប្បន្នភាពទិន្នន័យទាំងមូល (Full Resource Replacement) នៃ Resource ណាមួយ។",
        "explanation": "HTTP PUT ត្រូវបានប្រើប្រាស់ដើម្បីជំនួស ឬធ្វើបច្ចុប្បន្នភាពទិន្នន័យនៃ Resource ណាមួយទាំងមូល (Full Replacement) នៅលើ Server តាមរយៈ Identifier (ឧទាហរណ៍៖ `/api/students/:id`)។",
        "keyPoints": [
          "ជាវិធីសាស្ត្រ Idempotent — ការបញ្ជូន PUT ស្នើសុំជាមួយ Payload ដដែលច្រើនដង នឹងទទួលបានលទ្ធផលចុងក្រោយដូចគ្នា។",
          "តម្រូវឱ្យបញ្ជូន Object ពេញលេញដែលមានគ្រប់ Field ទាំងអស់នៃ Resource នោះ។",
          "ប្រើសម្រាប់កែប្រែទិន្នន័យដែលមានស្រាប់ ឬបង្កើត Resource ថ្មីប្រសិនបើមិនទាន់មាន (អាស្រ័យលើការរចនា API)។"
        ],
        "codeSnippet": "import axios from 'axios';\n\nconst updateStudentProfile = async (id: string, fullProfile: StudentProfile) => {\n  const res = await axios.put(`/api/students/${id}`, fullProfile);\n  return res.data;\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Axios PUT Request",
        "pitfall": "ការប្រើប្រាស់ `PUT` តម្រូវឱ្យអ្នកផ្ញើទិន្នន័យគ្រប់ Properties ទាំងអស់នៃ Object។ ប្រសិនបើអ្នកផ្ញើតែ property មួយ Backend ខ្លះអាចនឹងលុប properties ផ្សេងទៀតដែលបាត់ចោល! បើចង់ update តែមួយចំណែក ចូរប្រើ `PATCH` ជំនួសវិញ។"
      },
      {
        "id": "m14-06",
        "number": "06",
        "title": "PATCH Request",
        "summary": "ការធ្វើបច្ចុប្បន្នភាពតែចំណែកជាក់លាក់ណាមួយនៃទិន្នន័យ (Partial Update)។",
        "explanation": "ខុសប្លែកពី `PUT`, HTTP PATCH ត្រូវបានប្រើប្រាស់សម្រាប់ធ្វើបច្ចុប្បន្នភាពតែវាលទិន្នន័យជាក់លាក់ណាមួយ (Partial Update) ដោយមិនប៉ះពាល់ដល់ Field ផ្សេងទៀតដែលមិនបានបញ្ជាក់នៅក្នុង Request Body ឡើយ។",
        "keyPoints": [
          "សន្សំសំចៃ Bandwidth បណ្តាញ ដោយផ្ញើទៅតែ Fields ដែលមានការផ្លាស់ប្តូរ។",
          "ស័ក្តិសមបំផុតសម្រាប់ Inline Editing, Switch toggles, ឬ Quick status updates។",
          "មិនតម្រូវឱ្យបញ្ជូន Object ពេញលេញនោះឡើយ។"
        ],
        "codeSnippet": "import axios from 'axios';\n\nconst toggleTodoStatus = async (id: string, isCompleted: boolean) => {\n  // ផ្ញើតែ field 'completed' ទៅកាន់ Server ប៉ុណ្ណោះ\n  const res = await axios.patch(`/api/todos/${id}`, { \n    completed: isCompleted \n  });\n  return res.data;\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Axios PATCH Request",
        "proTip": "ប្រើប្រាស់ `PATCH` នៅពេលអ្នកចង់កែប្រែតែវាលទិន្នន័យខ្លះ (Fields) ដូចជាការចុច Toggle status បញ្ចប់ការងារ (e.g., `{ completed: true }`) ដើម្បីកាត់បន្ថយទំហំទិន្នន័យផ្ញើតាម Network។"
      },
      {
        "id": "m14-07",
        "number": "07",
        "title": "DELETE Request",
        "summary": "ការលុបទិន្នន័យ Resource ចេញពី Server ដោយបញ្ជាក់ពី Unique Identifier (ID)។",
        "explanation": "HTTP DELETE ត្រូវបានប្រើសម្រាប់ស្នើសុំលុបចោលនូវ Resource ណាមួយចេញពី Database តាមរយៈ ID ឬ Endpoint ជាក់លាក់។",
        "keyPoints": [
          "ពិនិត្យ Response Status `200 OK` ឬ `204 No Content` ដើម្បីបញ្ជាក់ថាទិន្នន័យត្រូវបានលុបដោយជោគជ័យ។",
          "ជាទូទៅមិនមាន Request Body ទេ ដោយកំណត់ Identifier នៅលើ URL Path។",
          "ធ្វើបច្ចុប្បន្នភាព UI State បន្ទាប់ពីការលុបជោគជ័យ តាមរយៈការ filter item ចេញពី array state។"
        ],
        "codeSnippet": "import axios from 'axios';\n\nconst removeStudent = async (studentId: string) => {\n  await axios.delete(`/api/students/${studentId}`);\n  // Update UI local state បន្ទាប់ពីលុបជោគជ័យ៖\n  setStudents((prev) => prev.filter((s) => s.id !== studentId));\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Axios DELETE Request",
        "proTip": "បន្ទាប់ពីលុបដោយជោគជ័យ (Status 200 ឬ 204 No Content) អ្នកគួរបច្ចុប្បន្នភាព Local State ភ្លាមៗ (Filter out item) ឬ Re-fetch ទិន្នន័យ ដើម្បីឱ្យ UI បង្ហាញការផ្លាស់ប្តូរភ្លាមៗ។"
      },
      {
        "id": "m14-08",
        "number": "08",
        "title": "Loading State",
        "summary": "ការគ្រប់គ្រង និងតាមដានស្ថានភាពកំពុងទាញយកទិន្នន័យ (In-flight Requests) ដើម្បីបង្ហាញ Spinner ឬ Skeleton UI។",
        "explanation": "នៅពេលកម្មវិធី React ធ្វើការទំនាក់ទំនងជាមួយ API តាមបណ្តាញ Internet វាតែងតែមានរយៈពេលពន្យារពេល (Network Latency)។ ការបង្កើត Loading State ជួយឱ្យអ្នកប្រើប្រាស់ដឹងថាកម្មវិធីកំពុងដំណើរការ ដោយបង្ហាញនូវ Loading Spinner ឬ Skeleton Loader ជំនួសឱ្យទំព័រទទេរ។",
        "keyPoints": [
          "កំណត់ `setIsLoading(true)` មុនពេលចាប់ផ្តើមស្នើសុំ API Request។",
          "កំណត់ `setIsLoading(false)` នៅក្នុងប្លុក `finally` ជានិច្ច ដើម្បីការពារកុំឱ្យ Spinner វិលមិនឈប់ពេលមានកំហុស។",
          "ប្រើ Skeleton Loaders សម្រាប់បង្កើនបទពិសោធន៍អ្នកប្រើប្រាស់ (Perceived Performance)។"
        ],
        "codeSnippet": "import { useState, useEffect } from 'react';\n\nexport function StudentList() {\n  const [students, setStudents] = useState([]);\n  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    const loadData = async () => {\n      try {\n        setIsLoading(true);\n        setError(null);\n        const data = await fetchStudents();\n        setStudents(data);\n      } catch (err: any) {\n        setError('មិនអាចទាញយកទិន្នន័យសិស្សបានឡើយ');\n      } finally {\n        setIsLoading(false); // ដំណើរការជានិច្ច ទោះបីជាជោគជ័យ ឬ error\n      }\n    };\n\n    loadData();\n  }, []);\n\n  if (isLoading) return <p>កំពុងផ្ទុកទិន្នន័យ...</p>;\n  if (error) return <p className=\"text-red-500\">{error}</p>;\n\n  return <ul>{students.map(s => <li key={s.id}>{s.name}</li>)}</ul>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "In-Flight Loading Lifecycle",
        "proTip": "ត្រូវដាក់ `setIsLoading(false)` នៅក្នុងប្លុក `finally` ជានិច្ច ដើម្បីធានាថា Loading Spinner នឹងបាត់ទៅវិញជានិច្ច ទោះបីជាការហៅ API ជោគជ័យ ឬបរាជ័យ (Error) ក៏ដោយ។"
      },
      {
        "id": "m14-09",
        "number": "09",
        "title": "Error Handling",
        "summary": "ការចាប់យក និងបំប្លែង Server Error Responses មកជាសារជូនដំណឹងដែលងាយស្រួលយល់ដល់អ្នកប្រើប្រាស់។",
        "explanation": "បញ្ហាបណ្តាញ (Network failures), ការបញ្ចូលទិន្នន័យមិនត្រឹមត្រូវ (422 Validation errors), ឬបញ្ហាខាង Server (500 Server error) សុទ្ធតែអាចកើតឡើងបានគ្រប់ពេលវេលា។ ការគ្រប់គ្រង Error ឱ្យបានត្រឹមត្រូវជួយការពារកុំឱ្យកម្មវិធី Crash និងផ្តល់សារជូនដំណឹងច្បាស់លាស់ដល់ User។",
        "keyPoints": [
          "បែងចែកឱ្យដាច់រវាងបញ្ហាដាច់បណ្តាញ (No Internet) និងកំហុសឆ្លើយតបពី Server (HTTP Status 4xx / 5xx)។",
          "ស្រង់យកសារ Error ដែល Server បញ្ជូនមកតាមរយៈ `error.response?.data?.message`។",
          "ផ្តល់នូវប៊ូតុង Retry ដើម្បីឱ្យ User អាចចុចសាកល្បងម្តងទៀតបាន។"
        ],
        "codeSnippet": "import axios from 'axios';\n\ntry {\n  await axios.post('/api/register', formData);\n} catch (error: any) {\n  if (axios.isAxiosError(error)) {\n    // ស្រង់យកសារ Error ដែល Backend បានកំណត់\n    const message = error.response?.data?.message || 'ការចុះឈ្មោះមិនបានសម្រេច';\n    showToast(message, 'error');\n  } else {\n    showToast('មានបញ្ហាមិនរំពឹងទុកបានកើតឡើង', 'error');\n  }\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Parsing API Error Responses",
        "proTip": "កុំបង្ហាញ raw error object (ឧទាហរណ៍ `[object Object]`) ទៅកាន់ User! ត្រូវស្រង់យក `error.response?.data?.message` ឬប្រើ Fallback message ដូចជា 'មានបញ្ហាតភ្ជាប់បណ្តាញ'។"
      },
      {
        "id": "m14-10",
        "number": "10",
        "title": "API Service Layer",
        "summary": "ការបំបែកកូដ HTTP Calls ចេញពី UI Components ទៅកាន់ Dedicated Service Layer ឱ្យមានរបៀបរៀបរយ។",
        "explanation": "ដើម្បីកុំឱ្យ UI Components មានភាពស្មុគស្មាញ និងពោរពេញដោយកូដ HTTP endpoints អ្នកគួរតែអនុវត្ត **Service Layer Pattern**។ វិធីសាស្ត្រនេះប្រមូលផ្តុំរាល់ API Calls ទាំងអស់ទៅក្នុងម៉ូឌុលដាច់ដោយឡែក (ដូចជា `studentService.ts`, `authService.ts`)។",
        "keyPoints": [
          "បំបែកការងាររវាង UI Presentation និង Data Fetching Logic។",
          "បង្កើត Type-safe API methods ជាមួយ TypeScript។",
          "ងាយស្រួលក្នុងការធ្វើ Mock ទិន្នន័យនៅពេលសរសេរ Unit Test។"
        ],
        "codeSnippet": "// src/services/studentService.ts\nimport { apiClient } from './apiClient';\nimport { Student, CreateStudentInput } from '@/types';\n\nexport const studentService = {\n  getAll: async (): Promise<Student[]> => {\n    const res = await apiClient.get<Student[]>('/students');\n    return res.data;\n  },\n  \n  getById: async (id: string): Promise<Student> => {\n    const res = await apiClient.get<Student>(`/students/${id}`);\n    return res.data;\n  },\n  \n  create: async (payload: CreateStudentInput): Promise<Student> => {\n    const res = await apiClient.post<Student>('/students', payload);\n    return res.data;\n  },\n  \n  delete: async (id: string): Promise<void> => {\n    await apiClient.delete(`/students/${id}`);\n  },\n};",
        "codeLanguage": "jsx",
        "codeTitle": "Dedicated Service Layer Pattern",
        "proTip": "កុំសរសេរ `axios.get('/api/users')` ដោយផ្ទាល់នៅក្នុង Component! ការបង្កើត Service Layer (ឧទាហរណ៍ `userService.ts`) ជួយឱ្យកូដងាយស្រួល reuse និងងាយស្រួលកែប្រែពេល Backend URL ផ្លាស់ប្តូរ។"
      },
      {
        "id": "m14-11",
        "number": "11",
        "title": "Axios Instance Configuration",
        "summary": "ការបង្កើត និងកំណត់រចនាសម្ព័ន្ធ Axios Instance តែមួយសម្រាប់គម្រោង (Base URL, Timeouts, Headers)។",
        "explanation": "ជំនួសឱ្យការ import `axios` លំនាំដើមមកប្រើប្រាស់នៅគ្រប់ទីកន្លែង អ្នកគួរបង្កើត **Custom Axios Instance** តែមួយកណ្តាល (Centralized Instance)។ វាជួយឱ្យអ្នកកំណត់ Base URL, Timeouts, និង Default Headers បានយ៉ាងងាយស្រួល។",
        "keyPoints": [
          "កំណត់ `baseURL` តាមរយៈ Environment Variable (ឧទាហរណ៍៖ `process.env.NEXT_PUBLIC_API_URL`)។",
          "កំណត់ `timeout` (ឧទាហរណ៍៖ 10 វិនាទី) ដើម្បីការពារកុំឱ្យ Request គាំងយូរពេកពេលបណ្តាញខ្សោយ។",
          "កំណត់ `headers` លំនាំដើមដូចជា `Content-Type: application/json`។"
        ],
        "codeSnippet": "// src/lib/apiClient.ts\nimport axios from 'axios';\n\nexport const apiClient = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.reactcourse.dev/v1',\n  timeout: 10000, // 10 វិនាទី\n  headers: {\n    'Content-Type': 'application/json',\n    'Accept': 'application/json',\n  },\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Axios Centralized Instance",
        "proTip": "ការប្រើ `axios.create()` ជួយឱ្យអ្នកកំណត់ `baseURL`, `timeout`, និង headers លំនាំដើមនៅកន្លែងតែមួយ ដោយមិនចាំបាច់សរសេរ URL ពេញលេញនៅគ្រប់ endpoint នោះឡើយ។"
      },
      {
        "id": "m14-12",
        "number": "12",
        "title": "Request Interceptors",
        "summary": "ការភ្ជាប់ Authentication Bearer Tokens ទៅក្នុង Request Headers ដោយស្វ័យប្រវត្តិកំណត់មុនពេល Request ចេញទៅ។",
        "explanation": "Axios Interceptors អនុញ្ញាតឱ្យអ្នកស្ទាក់ចាប់ (Intercept) និងកែប្រែ HTTP Requests មុនពេលវាត្រូវបានបញ្ជូនចេញទៅកាន់ Server។ ករណីប្រើប្រាស់ទូទៅបំផុតគឺការទាញយក JWT Access Token ពី LocalStorage/Cookie រួចបញ្ចូលវាទៅក្នុង Header `Authorization: Bearer <token>`។",
        "keyPoints": [
          "ដំណើរការរាល់ពេលដែល Request ណាមួយត្រូវបានហៅចេញពី `apiClient`។",
          "ជួយលុបបំបាត់ការសរសេរ `headers: { Authorization: ... }` ដដែលៗនៅគ្រប់ endpoint។",
          "ត្រូវតែ return `config` ជានិច្ច ដើម្បីឱ្យ Request អាចបន្តដំណើរទៅមុខទៀត។"
        ],
        "codeSnippet": "// src/lib/apiClient.ts\napiClient.interceptors.request.use(\n  (config) => {\n    const token = localStorage.getItem('access_token');\n    \n    if (token && config.headers) {\n      config.headers.Authorization = `Bearer ${token}`;\n    }\n    \n    return config;\n  },\n  (error) => {\n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "jsx",
        "codeTitle": "JWT Request Interceptor",
        "proTip": "Request Interceptor ជួយកាត់បន្ថយការសរសេរកូដដដែលៗ ព្រោះវានឹងអាន Token ពី Storage រួចភ្ជាប់ទៅក្នុង `Authorization` header ដោយស្វ័យប្រវត្តិសម្រាប់រាល់ Request ទាំងអស់។"
      },
      {
        "id": "m14-13",
        "number": "13",
        "title": "Response Interceptors",
        "summary": "ការគ្រប់គ្រង Global Errors និងដំណើរការ Automatic Token Refresh នៅពេលជួប Status Code 401 Unauthorized។",
        "explanation": "Response Interceptors អនុញ្ញាតឱ្យអ្នកត្រួតពិនិត្យ និងកែច្នៃលទ្ធផល Response ដែលទទួលបានពី Server មុនពេលវាត្រូវបានបញ្ជូនទៅកាន់ប្លុក `.then()` ឬ `try/catch` របស់ Component។ វាស័ក្តិសមបំផុតសម្រាប់ការដោះស្រាយវិបត្តិ Session ផុតកំណត់ (401 Unauthorized) ឬការកត់ត្រា Log សកល។",
        "keyPoints": [
          "ស្ទាក់ចាប់កំហុស 401 ដើម្បីធ្វើការ Logout ឬស្នើសុំ Refresh Token ថ្មីដោយស្វ័យប្រវត្តិ។",
          "អាចបំប្លែងទម្រង់ Response Data ឱ្យស្រួលប្រើប្រាស់មុនពេលបញ្ជូនទៅ UI។",
          "ត្រូវតែហៅ `Promise.reject(error)` ដើម្បីឱ្យប្លុក `catch` របស់ Caller នៅតែអាចចាប់ Error បានដដែល។"
        ],
        "codeSnippet": "// src/lib/apiClient.ts\napiClient.interceptors.response.use(\n  (response) => response,\n  async (error) => {\n    if (error.response?.status === 401) {\n      // សម្អាត Auth Token ដែលផុតកំណត់\n      localStorage.removeItem('access_token');\n      // បញ្ជូន User ទៅកាន់ទំព័រចូលប្រើប្រាស់\n      window.location.href = '/login?expired=true';\n    }\n    \n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "jsx",
        "codeTitle": "Response Error Interceptor",
        "proTip": "Response Interceptor គឺជាកន្លែងដ៏ល្អឥតខ្ចោះក្នុងការដោះស្រាយ Session Expiry — នៅពេល API ឆ្លើយតប 401 អ្នកអាចធ្វើការ Refresh Token ឬ Redirect user ទៅកាន់ទំព័រ Login ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m14-14",
        "number": "14",
        "title": "API Error Handling Architecture",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធដោះស្រាយកំហុសកម្រិតស្ថាបត្យកម្ម (Unified Error Models និង Retry Policies)។",
        "explanation": "នៅក្នុងកម្មវិធីខ្នាតធំ (Enterprise Applications) ការរៀបចំរចនាសម្ព័ន្ធ Error ឱ្យមានស្តង់ដារតែមួយ (Normalized Error Schema) គឺជាកត្តាសំខាន់។ វាជួយសម្រួលដល់ការបង្ហាញ Validation Errors នៅតាម Field នីមួយៗនៃ Form និងការកំណត់គោលការណ៍ Retry ដោយស្វ័យប្រវត្តិពេលបណ្តាញដាច់។",
        "keyPoints": [
          "បង្កើត TypeScript Type ឬ Interface សម្រាប់កំហុស API (`ApiError`)។",
          "ស្រង់យក Validation Errors ដែលបញ្ជូនមកពី Backend (ឧទាហរណ៍ `fieldErrors`)។",
          "កំណត់គោលការណ៍ Retry (e.g. សាកល្បងហៅឡើងវិញ ៣ ដងចំពោះ 503 Service Unavailable)។"
        ],
        "codeSnippet": "export interface ApiError {\n  statusCode: number;\n  message: string;\n  fieldErrors?: Record<string, string[]>;\n}\n\nexport function parseApiError(error: any): ApiError {\n  if (error.response) {\n    return {\n      statusCode: error.response.status,\n      message: error.response.data?.message || 'កំហុសពីម៉ាស៊ីនបម្រើ (Server Error)',\n      fieldErrors: error.response.data?.errors,\n    };\n  }\n  \n  return {\n    statusCode: 0,\n    message: 'មិនអាចតភ្ជាប់ទៅកាន់ម៉ាស៊ីនបម្រើបានឡើយ',\n  };\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Strongly Typed ApiError Model",
        "proTip": "ការបង្កើត Custom `ApiError` interface ឬ class ជួយឱ្យ Frontend មានទម្រង់ Error តែមួយច្បាស់លាស់ ងាយស្រួលបង្ហាញ Validation errors នៅលើ Form fields នីមួយៗ។"
      },
      {
        "id": "m14-15",
        "number": "15",
        "title": "Environment Variables for APIs",
        "summary": "ការប្រើប្រាស់ Environment Variables ដើម្បីគ្រប់គ្រង API Endpoints សម្រាប់ Development, Staging, និង Production ដោយសុវត្ថិភាព។",
        "explanation": "ការផ្លាស់ប្តូរ Base URL រវាងបរិស្ថានសាកល្បងនៅលើម៉ាស៊ីនផ្ទាល់ខ្លួន (Local Development), Staging Server, និង Production Server ត្រូវតែធ្វើឡើងតាមរយៈ **Environment Variables** (`.env`)។ វិធីសាស្ត្រនេះការពារកុំឱ្យមានការ hardcode URL ទៅក្នុង source code។",
        "keyPoints": [
          "ប្រើប្រាស់ Prefix ពិសេសសម្រាប់ Client-side (ដូចជា `NEXT_PUBLIC_` ក្នុង Next.js ឬ `VITE_` ក្នុង Vite)។",
          "បង្កើតឯកសារ `.env.example` ដើម្បីជាគំរូសម្រាប់ក្រុមការងារ (Team) ដោយមិនមានផ្ទុក sensitive keys ឡើយ។",
          "ដាក់ឯកសារ `.env.local` នៅក្នុង `.gitignore` ជានិច្ច ដើម្បីការពារការបែកធ្លាយសម្ងាត់លើ Git repository។"
        ],
        "codeSnippet": "// .env.development\nNEXT_PUBLIC_API_URL=http://localhost:8000/api/v1\nNEXT_PUBLIC_APP_ENV=development\n\n// .env.production\nNEXT_PUBLIC_API_URL=https://api.reactcourse.dev/v1\nNEXT_PUBLIC_APP_ENV=production\n\n// src/lib/apiClient.ts\nconst baseURL = process.env.NEXT_PUBLIC_API_URL;",
        "codeLanguage": "jsx",
        "codeTitle": "Environment Variable Configuration",
        "pitfall": "ហាមដាច់ខាតកុំរក្សាទុក Secret Keys (ដូចជា Database Passwords, Private API Secret Keys) នៅក្នុងអថេរដែលមាន prefix `NEXT_PUBLIC_` ព្រោះតម្លៃទាំងនោះនឹងត្រូវបែកធ្លាយទៅកាន់ Browser របស់ Client!"
      }
    ]
  },
  {
    "id": "module-15",
    "number": "15",
    "title": "Data Fetching (TanStack Query)",
    "category": "Routing & Network",
    "summary": "ការប្រៀបធៀប Server State និង Client State, TanStack Query v5, Queries, Mutations, Query Keys, ប្រព័ន្ធ Caching, Pagination, និង Optimistic Updates។",
    "iconName": "Database",
    "topics": [
      {
        "id": "m15-01",
        "number": "01",
        "title": "Server State vs Client State",
        "summary": "មូលហេតុដែលទិន្នន័យ Server State ត្រូវតែគ្រប់គ្រងខុសប្លែកទាំងស្រុងពី UI Client State។",
        "explanation": "នៅក្នុងការអភិវឌ្ឍកម្មវិធី React ទំនើប យើងត្រូវបែងចែក State ជាពីរប្រភេទដាច់ពីគ្នា៖ **Client State** គឺជាទិន្នន័យក្នុង Browser (Synchronous) ដែលគ្រប់គ្រងដោយផ្ទាល់ដោយ UI (ដូចជា ការបើកផ្ទាំង Modal, Theme ងងឹត/ភ្លឺ, Form Input)។ ចំណែកឯ **Server State** គឺជាទិន្នន័យ Asynchronous ដែលត្រូវបានរក្សាទុកនៅលើ Database ពីចម្ងាយ (Remote) និងអាចត្រូវបានកែប្រែដោយអ្នកប្រើប្រាស់ផ្សេងទៀតនៅពេលណាក៏បាន។",
        "keyPoints": [
          "**Client State**: គ្រប់គ្រងដោយ `useState`, `useReducer`, ឬបណ្ណាល័យដូចជា Zustand។",
          "**Server State**: ត្រូវការ Caching, ការទាញយកទិន្នន័យជាប្រចាំនៅ Background (Background Refetching), ការបំបាត់ Request ជាន់គ្នា (Deduplication), និងគោលការណ៍ Stale-time។",
          "ការគ្រប់គ្រង Server State ដោយផ្ទាល់តាមរយៈ `useState` + `useEffect` បង្កឱ្យមានកូដស្មុគស្មាញ និងងាយកើត Bugs បំផុត។"
        ],
        "codeSnippet": "// 1. Client State: គ្រប់គ្រង UI ក្នុងមូលដ្ឋាន (Zustand ឬ useState)\nconst [isSidebarOpen, setIsSidebarOpen] = useState(false);\nconst [currentTab, setCurrentTab] = useState<'posts' | 'settings'>('posts');\n\n// 2. Server State: ទិន្នន័យពី Database ពីចម្ងាយ (TanStack Query)\n// ត្រូវការ Caching, Stale Invalidation, និង Background Refetching\nconst { data: userProfile } = useQuery({\n  queryKey: ['profile', userId],\n  queryFn: () => userService.getProfile(userId),\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Client vs Server State Separation",
        "proTip": "ចូរកុំច្រឡំ Client State (ដូចជាការបើក/បិទ Modal, Active Tab) ជាមួយ Server State (ដូចជាបញ្ជីទំនិញ, User Profile)។ ការព្យាយាមគ្រប់គ្រង Server State ដោយប្រើតែ `useState` + `useEffect` នឹងនាំឱ្យកើតមានបញ្ហា Cache Bugs, Duplicate Requests, និងទិន្នន័យចាស់ហួសសម័យ (Stale Data)។"
      },
      {
        "id": "m15-02",
        "number": "02",
        "title": "TanStack Query Introduction",
        "summary": "ស្វែងយល់ពីបណ្ណាល័យគ្រប់គ្រង Asynchronous Server State ដ៏មានឥទ្ធិពលបំផុតសម្រាប់ React (ពីមុនហៅថា React Query)។",
        "explanation": "TanStack Query (ពីមុនហៅថា React Query) គឺជាបណ្ណាល័យស្តង់ដារឧស្សាហកម្មសម្រាប់ការទាញយក (Fetching), Caching, ធ្វើសមកាលកម្ម (Synchronizing), និងធ្វើបច្ចុប្បន្នភាព Server State នៅក្នុងកម្មវិធី React។ វាជួយដោះស្រាយបញ្ហាស្មុគស្មាញជាច្រើនដូចជា Window Focus Refetching, Network Reconnect Refetching, និង Query Deduplication។",
        "keyPoints": [
          "លុបបំបាត់ការសរសេរ `useEffect` + `useState` ដ៏ដដែលៗសម្រាប់ Data Fetching។",
          "មានប្រព័ន្ធ Caching ដ៏ឆ្លាតវៃ និង Garbage Collection ដោយស្វ័យប្រវត្តិ។",
          "គាំទ្រការ Refresh ទិន្នន័យដោយស្វ័យប្រវត្តិនៅពេល User ត្រឡប់មកកាន់ផ្ទាំង Browser វិញ (Window Focus)។"
        ],
        "codeSnippet": "# ដំឡើង TanStack Query v5 និង DevTools សម្រាប់ React\nnpm install @tanstack/react-query @tanstack/react-query-devtools",
        "codeLanguage": "bash",
        "codeTitle": "Installing TanStack Query v5",
        "proTip": "TanStack Query លុបបំបាត់ការសរសេរ boilerplate code ក្នុង `useEffect` រហូតដល់ទៅ 90% ដោយវាជួយគ្រប់គ្រង Caching, Background Refetching, Deduplication, និង Network Retries ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m15-03",
        "number": "03",
        "title": "QueryClientProvider",
        "summary": "ការដំឡើង និងកំណត់រចនាសម្ព័ន្ធ QueryClient នៅ Root នៃកម្មវិធី React។",
        "explanation": "`QueryClientProvider` ដើរតួជា Context Provider ដែលរុំព័ទ្ធ Component Tree ទាំងមូលនៃកម្មវិធីរបស់អ្នក។ វាធ្វើការចែករំលែក `QueryClient` instance ដែលជាកន្លែងរក្សាទុក Cache និងគ្រប់គ្រងរាល់ Query ទាំងអស់ទៅកាន់ Hooks ទាំងឡាយក្នុង App។",
        "keyPoints": [
          "បង្កើត `QueryClient` តែមួយគត់សម្រាប់កម្មវិធី។",
          "កំណត់លំនាំដើម `defaultOptions` ដូចជា `staleTime`, `retry`, និង `refetchOnWindowFocus`។",
          "រុំព័ទ្ធ Component Tree នៅចំណុចកំពូល (Root Layout ឬ App Component)។"
        ],
        "codeSnippet": "import { QueryClient, QueryClientProvider } from '@tanstack/react-query';\nimport { RouterProvider } from 'react-router-dom';\n\n// បង្កើត Client Instance តែមួយគត់\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 1000 * 60 * 5, // ទិន្នន័យនៅ Fresh រយៈពេល ៥ នាទី\n      refetchOnWindowFocus: false, // មិនបាច់ refetch ពេល focus window ឡើងវិញ\n      retry: 2, // សាកល្បងហៅឡើងវិញ ២ ដងប្រសិនបើបរាជ័យ\n    },\n  },\n});\n\nexport function App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <RouterProvider router={router} />\n    </QueryClientProvider>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "QueryClientProvider Setup",
        "proTip": "ត្រូវបង្កើត `queryClient` instance នៅខាងក្រៅ Component ឬប្រើ `useState(() => new QueryClient())` ដើម្បីការពារកុំឱ្យ Query Cache ត្រូវ Reset រាល់ពេល App re-render។"
      },
      {
        "id": "m15-04",
        "number": "04",
        "title": "useQuery Hook",
        "summary": "ការទាញយក និង Subscribe ទៅកាន់ Server State តាមរយៈ Hook useQuery។",
        "explanation": "Hook `useQuery` គឺជាឧបករណ៍ស្នូលនៃ TanStack Query ដែលប្រើប្រាស់សម្រាប់ទាញយកទិន្នន័យ (Fetch Data)។ វាត្រូវការ options ចម្បងពីរគឺ `queryKey` (កូនសោសម្គាល់ cache នៃទិន្នន័យ) និង `queryFn` (អនុគមន៍ដែល return Promise ដូចជា axios call)។",
        "keyPoints": [
          "ផ្តល់នូវ State ពេញលេញរួមមាន `{ data, isLoading, isError, error, refetch }`។",
          "ធ្វើការ Caching ទិន្នន័យដោយស្វ័យប្រវត្តិតាមរយៈ `queryKey`។",
          "ប្រសិនបើមាន component ច្រើនហៅ `useQuery` ជាមួយ key ដូចគ្នាក្នុងពេលតែមួយ វានឹងធ្វើ network request តែម្តងគត់ (Automatic Deduplication)។"
        ],
        "codeSnippet": "import { useQuery } from '@tanstack/react-query';\nimport { studentService } from '@/services/studentService';\n\nexport function StudentList() {\n  const { \n    data: students, \n    isLoading, \n    isError, \n    error \n  } = useQuery({\n    queryKey: ['students'],\n    queryFn: studentService.getAll,\n  });\n\n  if (isLoading) return <p>កំពុងទាញយកទិន្នន័យ...</p>;\n  if (isError) return <p className=\"text-red-500\">{error.message}</p>;\n\n  return (\n    <ul>\n      {students?.map((student) => (\n        <li key={student.id}>{student.name} - GPA: {student.gpa}</li>\n      ))}\n    </ul>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Basic useQuery Hook",
        "proTip": "Hook `useQuery` ផ្តល់ជូន State ស្រាប់ៗដូចជា `data`, `isLoading`, `isError`, និង `refetch` ដោយអ្នកមិនចាំបាច់បង្កើត `useState` និង `useEffect` ដើម្បីតាមដាន Status ដោយផ្ទាល់ដៃទៀតឡើយ។"
      },
      {
        "id": "m15-05",
        "number": "05",
        "title": "Query Keys",
        "summary": "ការប្រើប្រាស់ Hierarchical Arrays ជាសោរសម្គាល់ (Keys) សម្រាប់ Caching និង Refetching ទិន្នន័យ។",
        "explanation": "នៅក្នុង TanStack Query រាល់ Query ទាំងអស់ត្រូវតែមាន `queryKey` ដែលជា Array នៃតម្លៃផ្សេងៗ ដូចជា Strings, Numbers, ឬ Objects (ឧទាហរណ៍៖ `['students']`, `['students', studentId]`, `['products', { category, page }]`)។ នៅពេលធាតុណាមួយក្នុង Array ផ្លាស់ប្តូរ TanStack Query នឹងដឹងថាទិន្នន័យបានប្រែប្រួល រួចទាញយកទិន្នន័យថ្មីដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "Query Keys ត្រូវតែជា Array ជានិច្ច (Array-based keys)។",
          "ដាក់បញ្ចូលគ្រប់ Dependency Variables ចូលទៅក្នុង `queryKey`។",
          "រចនាសម្ព័ន្ធបែបឋានានុក្រម (Hierarchical structure) ជួយឱ្យងាយស្រួលក្នុងការធ្វើ Invalidation ទាំងមូល (ឧ. លុប cache គ្រប់ `['students', ...]` ទាំងអស់)។"
        ],
        "codeSnippet": "import { useQuery } from '@tanstack/react-query';\n\n// Query Key ដែលមាន Parameters៖\nexport function ProductList({ category, page, sort }: FilterProps) {\n  const { data } = useQuery({\n    // នៅពេល category, page, ឬ sort ផ្លាស់ប្តូរ វានឹង Fetch ថ្មីដោយស្វ័យប្រវត្តិ\n    queryKey: ['products', { category, page, sort }],\n    queryFn: () => productService.getList({ category, page, sort }),\n  });\n\n  return <div>{/* បង្ហាញបញ្ជីទំនិញ */}</div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Hierarchical Query Keys",
        "pitfall": "រាល់អថេរ (Variables) ទាំងអស់ដែលត្រូវបានប្រើនៅក្នុង `queryFn` (ដូចជា `id`, `page`, `filter`) ត្រូវតែដាក់បញ្ចូលទៅក្នុង `queryKey` array ជានិច្ច បើពុំនោះទេ Query នឹងមិនធ្វើការ Refetch ឡើងវិញឡើយនៅពេលអថេរទាំងនោះផ្លាស់ប្តូរ!"
      },
      {
        "id": "m15-06",
        "number": "06",
        "title": "useMutation Hook",
        "summary": "ការបង្កើត កែប្រែ និងលុបទិន្នន័យនៅលើ Server ជាមួយ Side Effects តាមរយៈ useMutation។",
        "explanation": "ខុសប្លែកពី Query ដែលដំណើរការដោយស្វ័យប្រវត្តិតាម Lifecycle, Mutation ត្រូវបានបញ្ឆេះឡើងតាមរយៈសកម្មភាពផ្ទាល់របស់អ្នកប្រើប្រាស់ (User Action) ដូចជាការចុចប៊ូតុង Submit Form (POST), កែសម្រួលព័ត៌មាន (PUT/PATCH), ឬលុបទិន្នន័យ (DELETE)។",
        "keyPoints": [
          "ប្រើប្រាស់ `useMutation({ mutationFn: ... })`។",
          "ដំណើរការ Mutation តាមរយៈអនុគមន៍ `mutation.mutate(payload)`។",
          "ប្រើប្រាស់ Lifecycle Callbacks: `onSuccess`, `onError`, `onSettled`។",
          "ហៅ `queryClient.invalidateQueries` ក្នុង `onSuccess` ដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យតារាង។"
        ],
        "codeSnippet": "import { useMutation, useQueryClient } from '@tanstack/react-query';\nimport { studentService } from '@/services/studentService';\n\nexport function AddStudentButton() {\n  const queryClient = useQueryClient();\n\n  const mutation = useMutation({\n    mutationFn: studentService.create,\n    onSuccess: () => {\n      // បង្ខំឱ្យបញ្ជីសិស្ស Fetch ឡើងវិញដោយស្វ័យប្រវត្តិ!\n      queryClient.invalidateQueries({ queryKey: ['students'] });\n      alert('បានបន្ថែមសិស្សដោយជោគជ័យ!');\n    },\n    onError: (error: any) => {\n      alert(`បរាជ័យ៖ ${error.message}`);\n    },\n  });\n\n  return (\n    <button \n      disabled={mutation.isPending}\n      onClick={() => mutation.mutate({ name: 'សុភា', gpa: 3.8 })}\n    >\n      {mutation.isPending ? 'កំពុងរក្សាទុក...' : 'បន្ថែមសិស្ស'}\n    </button>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useMutation with Cache Invalidation",
        "proTip": "ប្រើប្រាស់ callback `onSuccess` របស់ `useMutation` ដើម្បីហៅ `queryClient.invalidateQueries()` ជួយឱ្យ UI ធ្វើបច្ចុប្បន្នភាពទិន្នន័យថ្មីភ្លាមៗដោយស្វ័យប្រវត្តិបន្ទាប់ពី Save ឬ Delete រួច។"
      },
      {
        "id": "m15-07",
        "number": "07",
        "title": "Loading and Error States",
        "summary": "ការស្វែងយល់ពីភាពខុសគ្នារវាង Status Flags: isPending, isFetching, isError, និង isSuccess។",
        "explanation": "នៅក្នុង TanStack Query v5 ស្ថានភាពនៃការទាញយកទិន្នន័យត្រូវបានបែងចែកយ៉ាងលម្អិត។ ការយល់ដឹងពីភាពខុសគ្នារវាង `isPending` និង `isFetching` ជួយឱ្យអ្នកអាចបង្កើត UI ដែលមានភាពរលូន និងមិនរំខានដល់អ្នកប្រើប្រាស់។",
        "keyPoints": [
          "`isPending`: `true` នៅពេល Query ពុំទាន់មានទិន្នន័យក្នុង Cache នៅឡើយ (កំពុងផ្ទុកដំបូង - បង្ហាញ Skeleton UI)។",
          "`isFetching`: `true` រាល់ពេលដែលមាន Network Request កំពុងដំណើរការ ទោះបីជាមានទិន្នន័យចាស់បង្ហាញនៅលើអេក្រង់រួចហើយក៏ដោយ (ស័ក្តិសមសម្រាប់របារ Spinner តូចនៅខាងលើ)។",
          "`isError` & `error`: មានតម្លៃនៅពេលដែល Promise ជួបបរាជ័យ (Reject)។"
        ],
        "codeSnippet": "const { data, isPending, isFetching, isError } = useQuery({\n  queryKey: ['dashboardStats'],\n  queryFn: fetchStats,\n});\n\n// 1. Initial Load: ពុំទាន់មានទិន្នន័យបង្ហាញឡើយ\nif (isPending) return <DashboardSkeleton />;\n\n// 2. Error: មានបញ្ហាបណ្តាញ\nif (isError) return <ErrorBanner />;\n\nreturn (\n  <div>\n    {/* 3. បង្ហាញសញ្ញាសម្គាល់តូចមួយនៅពេល Background Fetching កំពុងដំណើរការ */}\n    {isFetching && <span className=\"text-xs text-blue-500\">កំពុងធ្វើសមកាលកម្ម...</span>}\n    <StatsGrid stats={data} />\n  </div>\n);",
        "codeLanguage": "jsx",
        "codeTitle": "isPending vs isFetching",
        "proTip": "`isPending` មានតម្លៃ true តែនៅពេលដំបូងដែលពុំទាន់មាន Cache ទិន្នន័យប៉ុណ្ណោះ (ស័ក្តិសមសម្រាប់ Skeleton UI) រីឯ `isFetching` មានតម្លៃ true រាល់ពេលមាន Network Request កំពុងដំណើរការ (រួមទាំង Background Revalidation)។"
      },
      {
        "id": "m15-08",
        "number": "08",
        "title": "Stale Time vs Garbage Collection Time",
        "summary": "ការកំណត់ និងគ្រប់គ្រងអាយុកាល Cache តាមរយៈ staleTime និង gcTime។",
        "explanation": "ការគ្រប់គ្រង Memory និង Cache នៅក្នុង TanStack Query ពឹងផ្អែកលើគំនិតស្នូលពីរគឺ `staleTime` និង `gcTime` (Garbage Collection Time - កាលពីមុនហៅថា `cacheTime`)។ ការកំណត់តម្លៃទាំងពីរនេះឱ្យបានត្រឹមត្រូវជួយកាត់បន្ថយ Network Requests ឥតប្រយោជន៍។",
        "keyPoints": [
          "**`staleTime`**: រយៈពេល (គិតជា milliseconds) ដែលទិន្នន័យត្រូវបានចាត់ទុកថា \"នៅថ្មីស្រស់ (Fresh)\"។ ដរាបណាទិន្នន័យនៅ Fresh នោះ TanStack Query នឹងមិនធ្វើការស្នើសុំ Network Request ឡើយ។ តម្លៃលំនាំដើមគឺ `0`។",
          "**`gcTime`**: រយៈពេលដែលទិន្នន័យដែលគ្មាន Component ណាមួយកំពុងប្រើប្រាស់ (Inactive) អាចបន្តស្ថិតនៅក្នុង RAM មុនពេលត្រូវលុបចោល។ តម្លៃលំនាំដើមគឺ 5 នាទី (`300_000` ms)។"
        ],
        "codeSnippet": "const { data } = useQuery({\n  queryKey: ['systemConfig'],\n  queryFn: fetchSystemConfig,\n  staleTime: 1000 * 60 * 10, // ទិន្នន័យនៅ Fresh រយៈពេល 10 នាទី (មិនបាច់ fetch ឡើងវិញទេ)\n  gcTime: 1000 * 60 * 60,    // រក្សាទុកក្នុង Cache RAM រយៈពេល 1 ម៉ោងមុននឹងលុបចោល\n});",
        "codeLanguage": "jsx",
        "codeTitle": "staleTime and gcTime Configuration",
        "proTip": "`staleTime` កំណត់ថាតើទិន្នន័យនៅស្រស់ (Fresh) រយៈពេលប៉ុន្មានមុនពេលត្រូវ Refetch ម្តងទៀត រីឯ `gcTime` កំណត់ថាតើទិន្នន័យដែលលែងប្រើ (Inactive) ត្រូវរក្សាទុកក្នុង Memory រយៈពេលប៉ុន្មានមុនពេលត្រូវលុបចោល។"
      },
      {
        "id": "m15-09",
        "number": "09",
        "title": "Pagination with keepPreviousData",
        "summary": "ការធ្វើ Pagination នៅលើតារាងទិន្នន័យដោយរលូន គ្មានការព្រិចភ្នែក (Flickering) ដោយប្រើ keepPreviousData។",
        "explanation": "នៅពេលធ្វើ Pagination តាមរបៀបធម្មតា រាល់ពេល User ចុចប្តូរទំព័រ (`page` state ផ្លាស់ប្តូរ) តារាងទិន្នន័យអាចនឹងបាត់ភ្លាមៗ រួចបង្ហាញ Loading Spinner ជំនួសវិញ ដែលធ្វើឱ្យ UI ព្រិចភ្នែក (Flicker)។ ការប្រើប្រាស់ `keepPreviousData` ជួយដោះស្រាយបញ្ហានេះយ៉ាងមានប្រសិទ្ធភាព។",
        "keyPoints": [
          "នាំចូល `keepPreviousData` ពី `@tanstack/react-query`។",
          "កំណត់ `placeholderData: keepPreviousData` នៅក្នុង `useQuery` options។",
          "ប្រើប្រាស់ `isPlaceholderData` ដើម្បីបង្ហាញ Opacity ឬ Disable ប៊ូតុង Next/Prev ពេលកំពុងផ្ទុកទំព័រថ្មី។"
        ],
        "codeSnippet": "import { useState } from 'react';\nimport { useQuery, keepPreviousData } from '@tanstack/react-query';\nimport { studentService } from '@/services/studentService';\n\nexport function PaginatedStudents() {\n  const [page, setPage] = useState(1);\n\n  const { data, isPlaceholderData } = useQuery({\n    queryKey: ['students', page],\n    queryFn: () => studentService.getPage(page),\n    placeholderData: keepPreviousData, // រក្សាទិន្នន័យទំព័រចាស់រហូតដល់ទំព័រថ្មី Fetch ចប់\n  });\n\n  return (\n    <div className={isPlaceholderData ? 'opacity-50' : 'opacity-100'}>\n      <table>{/* បង្ហាញតារាងទិន្នន័យ */}</table>\n      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>ថយក្រោយ</button>\n      <span>ទំព័រទី {page}</span>\n      <button onClick={() => setPage(p => p + 1)} disabled={isPlaceholderData || !data?.hasMore}>បន្ទាប់</button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Smooth Pagination with keepPreviousData",
        "proTip": "ការប្រើ `placeholderData: keepPreviousData` ជួយរក្សាទិន្នន័យនៃទំព័រចាស់ឱ្យនៅបង្ហាញលើអេក្រង់រហូតទាល់តែទំព័រថ្មីទាញយកចប់ ជៀសវាងការលោត Layout Jump ឬការបង្ហាញ Loading ពេញអេក្រង់។"
      },
      {
        "id": "m15-10",
        "number": "10",
        "title": "Infinite Queries (useInfiniteQuery)",
        "summary": "ការបង្កើតមុខងារ 'Load More' និងប្រព័ន្ធរំកិលទំព័រគ្មានដែនកំណត់ (Infinite Scroll) ជាមួយ useInfiniteQuery។",
        "explanation": "សម្រាប់ទំព័រដែលត្រូវការបង្ហាញ Feed ដូចជា Facebook, Twitter ឬ E-commerce Products ការប្រើប្រាស់ `useInfiniteQuery` អនុញ្ញាតឱ្យអ្នកទាញយកទិន្នន័យបន្ថែមជាទំព័រៗ (Pages) ដោយរក្សាទុកទិន្នន័យចាស់ទាំងអស់នៅក្នុង Array តែមួយ។",
        "keyPoints": [
          "ផ្តល់នូវ `fetchNextPage()`, `hasNextPage`, និង `isFetchingNextPage`។",
          "កំណត់ `getNextPageParam: (lastPage) => lastPage.nextCursor` ដើម្បីគណនាទំព័របន្ទាប់។",
          "ត្រូវកំណត់ `initialPageParam: 1` នៅក្នុង TanStack Query v5។"
        ],
        "codeSnippet": "import { useInfiniteQuery } from '@tanstack/react-query';\n\nexport function InfinitePostFeed() {\n  const { \n    data, \n    fetchNextPage, \n    hasNextPage, \n    isFetchingNextPage \n  } = useInfiniteQuery({\n    queryKey: ['postsFeed'],\n    queryFn: ({ pageParam }) => postService.getFeed(pageParam),\n    initialPageParam: 1,\n    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,\n  });\n\n  return (\n    <div>\n      {data?.pages.map((page, i) => (\n        <div key={i}>\n          {page.items.map(post => <PostCard key={post.id} post={post} />)}\n        </div>\n      ))}\n      <button \n        disabled={!hasNextPage || isFetchingNextPage}\n        onClick={() => fetchNextPage()}\n      >\n        {isFetchingNextPage ? 'កំពុងផ្ទុកបន្ថែម...' : hasNextPage ? 'ទាញយកបន្ថែម' : 'អស់ទិន្នន័យហើយ'}\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useInfiniteQuery Hook",
        "proTip": "ប្រើប្រាស់ `useInfiniteQuery` រួមគ្នាជាមួយ `IntersectionObserver` ដើម្បីចាប់សញ្ញានៅពេលដែល User រំកិលដល់បាតទំព័រ រួចហៅ `fetchNextPage()` ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m15-11",
        "number": "11",
        "title": "Optimistic Updates",
        "summary": "ការធ្វើបច្ចុប្បន្នភាព UI ភ្លាមៗមុនពេល Server ឆ្លើយតបបញ្ជាក់ និងការ Rollback ត្រឡប់មកវិញប្រសិនបើមានកំហុស។",
        "explanation": "Optimistic Update គឺជាបច្ចេកទេសកម្រិតខ្ពស់ដែលធ្វើការ Update UI ភ្លាមៗបន្ទាប់ពី User ចុចប៊ូតុង (ដូចជាចុច Like បេះដូង ឬគូសធីក Task បញ្ចប់) ដោយសន្មតជាមុនថា Server នឹងដំណើរការជោគជ័យ។ ប្រសិនបើ Server បរាជ័យដោយសារដាច់ Network វានឹងធ្វើការ Rollback ទិន្នន័យចាស់ត្រឡប់មកវិញភ្លាម។",
        "keyPoints": [
          "បោះបង់ Outgoing Queries ចោលជាមួយ `cancelQueries` ក្នុង `onMutate` ដើម្បីកុំឱ្យទិន្នន័យចាស់ជាន់គ្នា។",
          "រក្សាទុក Snapshot នៃទិន្នន័យចាស់ (`previousData`) មុនពេល update cache។",
          "ប្រើ `setQueryData` ដើម្បីកែប្រែ Cache ភ្លាមៗ។",
          "ក្នុងករណី `onError` ត្រូវ Rollback Cache ដោយប្រើ Snapshot ចាស់។",
          "ក្នុង `onSettled` ត្រូវ `invalidateQueries` ដើម្បីឱ្យទិន្នន័យត្រឹមត្រូវ 100% ជាមួយ Database។"
        ],
        "codeSnippet": "import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nconst toggleTodoMutation = useMutation({\n  mutationFn: todoService.toggleComplete,\n  onMutate: async (todoId: string) => {\n    // 1. បោះបង់ Queries ដែលកំពុងរត់\n    await queryClient.cancelQueries({ queryKey: ['todos'] });\n\n    // 2. រក្សាទុក Snapshot ចាស់សម្រាប់ Rollback\n    const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);\n\n    // 3. Update Cache ក្នុងមូលដ្ឋានភ្លាមៗ (Optimistic Update)\n    queryClient.setQueryData<Todo[]>(['todos'], (old = []) =>\n      old.map(t => t.id === todoId ? { ...t, completed: !t.completed } : t)\n    );\n\n    return { previousTodos }; // ផ្ញើទៅ onError តាមរយៈ Context\n  },\n  onError: (err, todoId, context) => {\n    // 4. Rollback ត្រឡប់មកទិន្នន័យដើមវិញពេល Server បរាជ័យ\n    if (context?.previousTodos) {\n      queryClient.setQueryData(['todos'], context.previousTodos);\n    }\n  },\n  onSettled: () => {\n    // 5. Sync ទិន្នន័យចុងក្រោយជាមួយ Server\n    queryClient.invalidateQueries({ queryKey: ['todos'] });\n  },\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Complete Optimistic Update Pattern",
        "proTip": "ការធ្វើ Optimistic Update ធ្វើឱ្យ UI មានអារម្មណ៍ថាឆ្លើយតបរហ័សទាន់ចិត្ត (Zero-latency)! កុំភ្លេចរក្សាទុក Snapshot ចាស់នៅក្នុង `onMutate` ដើម្បីអាច Rollback ត្រឡប់មកវិញក្នុង `onError` ប្រសិនបើ Server បរាជ័យ។"
      },
      {
        "id": "m15-12",
        "number": "12",
        "title": "Query Invalidation",
        "summary": "ការលុប Cache ចាស់ចោល និងបង្ខំឱ្យ Refetch ទិន្នន័យថ្មីចំគោលដៅបន្ទាប់ពី Mutation។",
        "explanation": "បន្ទាប់ពីអ្នកប្រើប្រាស់បានផ្លាស់ប្តូរទិន្នន័យនៅលើ Server (តាមរយៈ Mutation) ទិន្នន័យដែលរក្សាទុកក្នុង Cache ក្នុង Browser អាចនឹងលែងត្រឹមត្រូវទៀតហើយ។ ការប្រើប្រាស់ `invalidateQueries` ជួយកំណត់ឱ្យ Queries ទាំងនោះក្លាយជា Stale ហើយបង្ខំឱ្យ Refetch ឡើងវិញជាបន្ទាន់។",
        "keyPoints": [
          "សម្គាល់ Query ថា Stale និងបង្ខំឱ្យ Active Queries ទាញយកទិន្នន័យថ្មីភ្លាមៗ។",
          "គាំទ្រ Prefix Matching (ឧទាហរណ៍៖ `['students']` នឹង invalidate ទាំង `['students']`, `['students', 1]`, និង `['students', { page: 2 }]`)។",
          "អាចប្រើ `exact: true` ប្រសិនបើចង់ invalidate តែ Key ជាក់លាក់មួយគត់។"
        ],
        "codeSnippet": "import { useQueryClient } from '@tanstack/react-query';\n\nexport function useDeleteStudent() {\n  const queryClient = useQueryClient();\n\n  return useMutation({\n    mutationFn: studentService.delete,\n    onSuccess: () => {\n      // បង្ខំឱ្យ refetch បញ្ជីសិស្សទាំងអស់ឡើងវិញ\n      queryClient.invalidateQueries({ \n        queryKey: ['students'],\n        exact: false, // Invalidate រាល់ keys ទាំងអស់ដែលផ្តើមដោយ 'students'\n      });\n    },\n  });\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Invalidating Query Cache",
        "proTip": "ការហៅ `queryClient.invalidateQueries({ queryKey: ['students'] })` នឹងសម្គាល់រាល់ Query ទាំងអស់ដែលផ្ដើមដោយ `['students']` ថា Stale ហើយនឹង Refetch ដោយស្វ័យប្រវត្តិនូវ Query ណាដែលកំពុងបង្ហាញនៅលើអេក្រង់ (Active)។"
      },
      {
        "id": "m15-13",
        "number": "13",
        "title": "TanStack DevTools",
        "summary": "ការប្រើប្រាស់ផ្ទាំង TanStack DevTools ដើម្បីពិនិត្យមើល Cache State, Stale Queries, និង Mutations។",
        "explanation": "TanStack Query Devtools គឺជាផ្ទាំងជំនួយដ៏អស្ចារ្យដែលបង្ហាញអំពីដំណើរការខាងក្នុងទាំងអស់នៃ Cache៖ រាល់ Query Key នីមួយៗ, ស្ថានភាព Fresh/Stale/Fetching/Inactive, រួមទាំងប៊ូតុងសម្រាប់ចុច Refetch, Reset ឬ Invalidate Cache ដោយផ្ទាល់ដៃសម្រាប់ Debugging។",
        "keyPoints": [
          "ផ្តល់នូវរូបភាពច្បាស់លាស់អំពីស្ថានភាព Cache និង Network requests ក្នុងពេលជាក់ស្តែង (Real-time)។",
          "មិនត្រូវបានបញ្ចូលក្នុង Production Bundle ឡើយ (Zero-overhead in production)។",
          "ដាក់បញ្ចូល `<ReactQueryDevtools />` នៅខាងក្នុង `<QueryClientProvider>`។"
        ],
        "codeSnippet": "import { QueryClient, QueryClientProvider } from '@tanstack/react-query';\nimport { ReactQueryDevtools } from '@tanstack/react-query-devtools';\n\nconst queryClient = new QueryClient();\n\nexport function RootApp() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <App />\n      {/* បើកផ្ទាំង DevTools នៅជ្រុងខាងក្រោមសម្រាប់ Debug */}\n      <ReactQueryDevtools initialIsOpen={false} buttonPosition=\"bottom-right\" />\n    </QueryClientProvider>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Integrating ReactQueryDevtools",
        "proTip": "DevTools ដំណើរការតែនៅក្នុងបរិស្ថាន Development ប៉ុណ្ណោះ ហើយនឹងត្រូវបានដកចេញដោយស្វ័យប្រវត្តិនៅពេល Build ទៅកាន់ Production ដូច្នេះគ្មានផលប៉ះពាល់ដល់ Bundle size ឡើយ។"
      }
    ]
  },
  {
    "id": "module-16",
    "number": "16",
    "title": "Context API",
    "category": "State & Architecture",
    "summary": "ស្វែងយល់ពីយន្តការ Context API របស់ React, ការប្រើប្រាស់ createContext, Provider, useContext, ការលុបបំបាត់ Prop Drilling, Authentication Context, Theme Context, និងចំណុចកម្រិតនៃការប្រើប្រាស់ (Limitations)។",
    "iconName": "Share2",
    "topics": [
      {
        "id": "m16-01",
        "number": "01",
        "title": "What is Context?",
        "summary": "យន្តការស្នូលរបស់ React សម្រាប់បញ្ជូនទិន្នន័យទៅកាន់គ្រប់ Components ទាំងអស់នៅក្នុង Tree ដោយមិនចាំបាច់ឆ្លងកាត់ Props។",
        "explanation": "នៅក្នុង React ជាទូទៅទិន្នន័យត្រូវបានបញ្ជូនពីលើចុះក្រោម (Top-down) ពី Parent ទៅកាន់ Child តាមរយៈ Props។ ប៉ុន្តែនៅពេលដែលកម្មវិធីកាន់តែធំ មានទិន្នន័យមួយចំនួនដែលត្រូវការប្រើប្រាស់នៅស្ទើរតែគ្រប់ទីកន្លែង (ដូចជា ព័ត៌មានអ្នកប្រើប្រាស់ដែលបាន Login, ការកំណត់ Theme ងងឹត/ភ្លឺ)។ **Context API** ផ្តល់នូវវិធីសាស្ត្រក្នុងការបញ្ជូនទិន្នន័យចូលទៅកាន់ Component Tree ទាំងមូលដោយផ្ទាល់ ដោយមិនចាំបាច់ឆ្លងកាត់ Props នៅគ្រប់ជាន់ថ្នាក់ឡើយ។",
        "keyPoints": [
          "ភ្ជាប់មកជាមួយ React រួចជាស្រេច (Built-in) ដោយមិនចាំបាច់ដំឡើងបណ្ណាល័យខាងក្រៅឡើយ។",
          "ស័ក្តិសមបំផុតសម្រាប់ទិន្នន័យសកលដែលមានការផ្លាស់ប្តូរតិចតួច (Low-frequency updates)។",
          "ជួយដោះស្រាយបញ្ហា Prop Drilling យ៉ាងមានប្រសិទ្ធភាព។"
        ],
        "codeSnippet": "import { createContext, useContext, useState } from 'react';\n\n// Context គឺជាយន្តការដើមរបស់ React មិនត្រូវការ npm package បន្ថែមឡើយ",
        "codeLanguage": "jsx",
        "codeTitle": "Context Imports",
        "proTip": "Context API ត្រូវបានបង្កើតឡើងសម្រាប់ទិន្នន័យសកល (Global Data) ដែលកម្រមានការផ្លាស់ប្តូរញឹកញាប់ (Low-frequency updates) ដូចជា Current User Auth, Theme (Light/Dark), ឬ Preferred Language (Locale)។"
      },
      {
        "id": "m16-02",
        "number": "02",
        "title": "createContext",
        "summary": "ការបង្កើត Context Object ជាមួយនឹងតម្លៃលំនាំដើម (Default Fallback Value)។",
        "explanation": "ដើម្បីបង្កើត Context ថ្មីមួយ យើងត្រូវប្រើប្រាស់អនុគមន៍ `createContext(defaultValue)`។ អនុគមន៍នេះនឹង return នូវ Context Object មួយដែលមានផ្ទុកទាំង Provider Component និង Consumer សម្រាប់ប្រើប្រាស់នៅក្នុង Component Tree។",
        "keyPoints": [
          "កំណត់ TypeScript Interface សម្រាប់ទម្រង់នៃ Context Data ដើម្បីទទួលបាន Type Safety។",
          "តម្លៃ Default Value ដើរតួជា Fallback នៅពេលដែល Component ត្រូវបាន Render នៅក្រៅ Context Provider (មានប្រយោជន៍ខ្លាំងសម្រាប់ការធ្វើ Unit Test)។",
          "ដាក់ឈ្មោះ Context ដោយសរសេរអក្សរធំនៅខាងដើម ដូចជា `ThemeContext`, `AuthContext`។"
        ],
        "codeSnippet": "import { createContext } from 'react';\n\n// 1. កំណត់រចនាសម្ព័ន្ធ Interface នៃ Context\nexport interface ThemeContextType {\n  theme: 'light' | 'dark';\n  toggleTheme: () => void;\n}\n\n// 2. បង្កើត Context ដោយកំណត់ defaultValue ឬ undefined\nexport const ThemeContext = createContext<ThemeContextType | undefined>(undefined);",
        "codeLanguage": "jsx",
        "codeTitle": "Declaring Context with TypeScript",
        "proTip": "តម្លៃ `defaultValue` ដែលកំណត់ក្នុង `createContext(defaultValue)` នឹងត្រូវប្រើប្រាស់តែក្នុងករណីដែល Component ហៅ `useContext` នៅខាងក្រៅ Provider ប៉ុណ្ណោះ។ ប្រសិនបើមាន Provider វានឹងយកតម្លៃក្នុង `value` prop ជានិច្ច។"
      },
      {
        "id": "m16-03",
        "number": "03",
        "title": "Context Provider",
        "summary": "ការផ្គត់ផ្គង់ទិន្នន័យទៅកាន់ Child Components តាមរយៈ <Context.Provider value={...}>។",
        "explanation": "រាល់ Context Object នីមួយៗតែងតែភ្ជាប់មកជាមួយនូវ Component មួយឈ្មោះថា `<Context.Provider>`។ Provider នេះទទួលយក prop មួយឈ្មោះថា `value` ដែលជាទិន្នន័យ ឬអនុគមន៍ដែលអ្នកចង់ចែករំលែកទៅកាន់ Child Components ទាំងអស់ដែលស្ថិតនៅខាងក្នុងវា។",
        "keyPoints": [
          "រាល់ Child Component ទាំងអស់ដែលនៅក្រោម Provider អាចទាញយកទិន្នន័យ `value` បានគ្រប់ពេលវេលា។",
          "នៅពេលដែលតម្លៃ `value` ផ្លាស់ប្តូរ រាល់ Consumer Components ទាំងអស់ដែលកំពុងប្រើប្រាស់ Context នោះនឹង Re-render ដោយស្វ័យប្រវត្តិ។",
          "គួរតែបង្កើត Wrapper Component ដូចជា `ThemeProvider` ដើម្បីគ្រប់គ្រង State ផ្ទៃក្នុង។"
        ],
        "codeSnippet": "import React, { useState } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nexport function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const [theme, setTheme] = useState<'light' | 'dark'>('dark');\n\n  const toggleTheme = () => {\n    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      <div className={`app-container ${theme}`}>\n        {children}\n      </div>\n    </ThemeContext.Provider>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Custom Context Provider Component",
        "proTip": "ការរៀបចំ Custom Provider Component (ដូចជា `ThemeProvider`) ជួយវេចខ្ចប់ State Logic ឱ្យមានរបៀបរៀបរយ និងធ្វើឱ្យ Root Component មើលទៅស្អាត មិនច្របូកច្របល់។"
      },
      {
        "id": "m16-04",
        "number": "04",
        "title": "useContext",
        "summary": "ការទាញយកទិន្នន័យពី Context មកប្រើប្រាស់នៅក្នុង Functional Components យ៉ាងងាយស្រួល។",
        "explanation": "Hook `useContext` អនុញ្ញាតឱ្យ Functional Component អាចអានតម្លៃបច្ចុប្បន្នពី Context Provider ដែលនៅជិតបំផុតខាងលើវា។ ជំនួសឱ្យការហៅ `useContext(ThemeContext)` ដោយផ្ទាល់នៅគ្រប់ Component វិធីសាស្ត្រល្អបំផុតគឺការបង្កើត Custom Hook ដូចជា `useTheme()` ដើម្បីផ្តល់ភាពងាយស្រួល និងសុវត្ថិភាព។",
        "keyPoints": [
          "`useContext` ទទួលយក Context Object ជា Argument (`useContext(MyContext)`)។",
          "ត្រួតពិនិត្យ និង throw Error ប្រសិនបើ Component ត្រូវបានហៅនៅក្រៅ Provider ដែលត្រូវគ្នា។",
          "ផ្តល់នូវ TypeScript Types ត្រឹមត្រូវ 100% ដោយមិនបាច់ type check ដោយផ្ទាល់ដៃ។"
        ],
        "codeSnippet": "import { useContext } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  \n  if (context === undefined) {\n    throw new Error('useTheme ត្រូវតែប្រើប្រាស់នៅខាងក្នុង <ThemeProvider> ប៉ុណ្ណោះ!');\n  }\n  \n  return context;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Safe Custom Context Hook",
        "proTip": "ត្រូវបង្កើត Custom Hook ជានិច្ច (ឧទាហរណ៍ `useTheme()`) ដើម្បីរុំព័ទ្ធ `useContext(ThemeContext)` និងបន្ថែមការឆែក `if (!context) throw new Error(...)` ដើម្បីដាស់តឿន Developer ភ្លាមៗប្រសិនបើភ្លេចដាក់ Provider!"
      },
      {
        "id": "m16-05",
        "number": "05",
        "title": "Sharing Global Data",
        "summary": "ការចែករំលែកការកំណត់ (Settings), Preferences, និង Configurations ទៅកាន់គ្រប់ផ្នែកទាំងអស់នៃកម្មវិធី។",
        "explanation": "អត្ថប្រយោជន៍ដ៏ធំបំផុតនៃ Context គឺសមត្ថភាពក្នុងការចែករំលែកទិន្នន័យសកល (Global Data) ទៅកាន់គ្រប់ Components កូនចៅដែលនៅឆ្ងាយៗ ក្នុងដើមឈើ Component Tree ដោយមិនចាំបាច់មានការផ្សារភ្ជាប់ Props ពីមួយទៅមួយឡើយ។",
        "keyPoints": [
          "Component ណាក៏ដោយនៅក្រោម Provider អាចអាន និងកែប្រែ Global State បាន។",
          "ស័ក្តិសមបំផុតសម្រាប់ Theme, Localization (ភាសា), និង UI Configuration។",
          "ការផ្លាស់ប្តូរ State ក្នុង Context នឹងជំរុញឱ្យ UI Update ឡើងវិញភ្លាមៗ។"
        ],
        "codeSnippet": "import { useTheme } from './useTheme';\n\nexport function ThemeToggle() {\n  const { theme, toggleTheme } = useTheme();\n\n  return (\n    <button \n      onClick={toggleTheme}\n      className=\"p-2 rounded border transition-colors\"\n    >\n      ប្តូរ Theme (បច្ចុប្បន្ន៖ {theme === 'dark' ? 'ងងឹត 🌙' : 'ភ្លឺ ☀️'})\n    </button>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Consuming Context in Child",
        "proTip": "ការប្រើប្រាស់ Context ជាមួយ Theme (Dark/Light Mode) អនុញ្ញាតឱ្យ Button តូចមួយនៅជ្រុង Navbar អាចផ្លាស់ប្តូរ Styling នៃកម្មវិធីទាំងមូលបានភ្លាមៗ។"
      },
      {
        "id": "m16-06",
        "number": "06",
        "title": "Authentication Context",
        "summary": "ការរៀបចំប្រព័ន្ធគ្រប់គ្រង Session ការពារ Login/Logout និង User Profile សកលជាមួយ AuthContext។",
        "explanation": "គំរូដ៏ពេញនិយមបំផុតនៃការប្រើប្រាស់ Context API នៅក្នុង Real-world Projects គឺការគ្រប់គ្រង **Authentication State**។ វាអនុញ្ញាតឱ្យ Navbar ដឹងថា User ចូលប្រើប្រាស់ហើយឬនៅ, អនុញ្ញាតឱ្យ Router ការពារទំព័រ Private, និងអនុញ្ញាតឱ្យ Profile Page បង្ហាញព័ត៌មានអ្នកប្រើប្រាស់។",
        "keyPoints": [
          "រក្សាទុកព័ត៌មាន User បច្ចុប្បន្ន (`user: User | null`)។",
          "ផ្តល់នូវអនុគមន៍ `login(credentials)` និង `logout()`។",
          "ផ្តល់នូវ Flag `isAuthenticated` និង `isLoading` សម្រាប់តាមដានស្ថានភាព Session។"
        ],
        "codeSnippet": "import React, { createContext, useContext, useState } from 'react';\n\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\ninterface AuthContextType {\n  user: User | null;\n  isAuthenticated: boolean;\n  login: (email: string, pass: string) => Promise<void>;\n  logout: () => void;\n}\n\nexport const AuthContext = createContext<AuthContextType | undefined>(undefined);",
        "codeLanguage": "jsx",
        "codeTitle": "Authentication Context Interface",
        "proTip": "AuthProvider គួរបញ្ចូលទាំង User Object, Login handler, Logout handler, និង `isLoadingAuth` flag ដើម្បីងាយស្រួលគ្រប់គ្រង Protected Routes និង Navigation Header។"
      },
      {
        "id": "m16-07",
        "number": "07",
        "title": "Avoiding Prop Drilling",
        "summary": "ការប្រៀបធៀបរវាងបញ្ហា Prop Drilling និងដំណោះស្រាយតាមរយៈ Context API។",
        "explanation": "បញ្ហា **Prop Drilling** កើតឡើងនៅពេលដែលអ្នកត្រូវបញ្ជូន Prop ឆ្លងកាត់ Components កណ្តាលជាច្រើនជាន់ (ឧទាហរណ៍៖ `App` -> `Layout` -> `Sidebar` -> `UserMenu` -> `Avatar`) ទោះបីជា Components កណ្តាលទាំងនោះមិនត្រូវការប្រើប្រាស់ Prop នោះទាល់តែសោះក៏ដោយ។ Context API ជួយលុបបំបាត់បញ្ហានេះចោលទាំងស្រុង។",
        "keyPoints": [
          "Component កណ្តាលមិនចាំបាច់ដឹងអំពី Props ដែលខ្លួនមិនប្រើឡើយ។",
          "សន្សំសំចៃពេលវេលាក្នុងការ Refactor នៅពេល Component hierarchy ផ្លាស់ប្តូរ។",
          "Component ចុងក្រោយ (Leaf Component) អាចទាញយក Context ដោយផ្ទាល់។"
        ],
        "codeSnippet": "// ❌ បែប Prop Drilling (ពិបាកថែទាំ):\n// <App user={user}> -> <Layout user={user}> -> <Header user={user}> -> <Avatar user={user} />\n\n// ✅ បែប Context API (ស្អាត និងមានរបៀប):\nexport function AppLayout() {\n  return (\n    <AuthProvider>\n      <Header />\n      <Sidebar />\n      <MainContent>\n        {/* UserAvatar ហៅ useAuth() ដោយផ្ទាល់ មិនបាច់ pass props ឆ្លងកាត់ Header/Sidebar ឡើយ */}\n        <UserAvatar />\n      </MainContent>\n    </AuthProvider>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Eliminating Prop Drilling with Context",
        "proTip": "Prop Drilling ធ្វើឱ្យ Component កណ្តាលដែលមិនត្រូវការប្រើប្រាស់ទិន្នន័យ ត្រូវបង្ខំចិត្តទទួលនិងបញ្ជូន Props បន្ត។ Context ជួយឱ្យ Leaf Component អាចទាញយកទិន្នន័យដោយផ្ទាល់ពី Parent ជាន់ខ្ពស់បំផុត។"
      },
      {
        "id": "m16-08",
        "number": "08",
        "title": "Context Performance Pitfall",
        "summary": "បញ្ហា Re-render នៃគ្រប់ Consumers ទាំងអស់នៅពេលដែលតម្លៃ Context ណាមួយផ្លាស់ប្តូរ។",
        "explanation": "ចំណុចខ្សោយដ៏ធំបំផុតរបស់ React Context API គឺបញ្ហា **Unnecessary Re-renders**។ ប្រសិនបើអ្នកដាក់ Object មួយដែលមាន 10 properties ទៅក្នុង Context ហើយមាន property តែ 1 ផ្លាស់ប្តូរ នោះរាល់ Component ទាំងអស់ដែលហៅ `useContext` នឹងត្រូវ Re-render ទាំងអស់ ទោះបីជា Component នោះប្រើតែ property ដែលមិនផ្លាស់ប្តូរក៏ដោយ!",
        "keyPoints": [
          "Context គ្មាន Selector Mechanism ដូច Zustand ឬ Redux ឡើយ (គ្មាន fine-grained reactivity)។",
          "ដំណោះស្រាយ៖ បំបែក Context ទៅតាមមុខងារ (Context Splitting) ដូចជា `ThemeContext` ដាច់ដោយឡែកពី `AuthContext`។",
          "មិនត្រូវប្រើ Context សម្រាប់ទិន្នន័យដែលមានការកែប្រែរៀងរាល់ Millisecond (High frequency) ឡើយ។"
        ],
        "codeSnippet": "// ❌ មិនល្អ៖ បូកច្របាច់បញ្ចូលគ្នាក្នុង Context តែមួយ\n// <GlobalContext.Provider value={{ user, theme, timer, searchQuery, cart }}>\n\n// ✅ ល្អ៖ បំបែក Context តាមមុខងារ និងភាពញឹកញាប់នៃការប្រែប្រួល\nexport function AppProviders({ children }: { children: React.ReactNode }) {\n  return (\n    <AuthProvider>\n      <ThemeProvider>\n        <CartProvider>\n          {children}\n        </CartProvider>\n      </ThemeProvider>\n    </AuthProvider>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Context Splitting Strategy",
        "pitfall": "កុំដាក់ទិន្នន័យដែលមានការប្រែប្រួលញឹកញាប់ (High-frequency updates ដូចជា Mouse Coordinates, Animation Frame, ឬ Input Text) ចូលទៅក្នុង Context ឱ្យសោះ ព្រោះរាល់ Consumer ទាំងអស់នឹង Re-render ឥតឈប់ឈរ បង្កឱ្យ UI គាំងយឺត!"
      },
      {
        "id": "m16-09",
        "number": "09",
        "title": "Memoizing Context Values",
        "summary": "ការការពារកុំឱ្យ Consumer Re-render ដោយឥតប្រយោជន៍តាមរយៈ useMemo និង useCallback។",
        "explanation": "នៅពេលដែល Component ដែលជា Provider ត្រូវ Re-render (ឧទាហរណ៍ដោយសារ Parent របស់វា re-render) តម្លៃ `value={{ user, login }}` នឹងបង្កើត Object ថ្មីក្នុង Memory ជានិច្ច (`{}` !== `{}`)។ នេះធ្វើឱ្យ React គិតថាតម្លៃ Context បានផ្លាស់ប្តូរ និងបង្ខំឱ្យ Child Consumers Re-render។ ការប្រើប្រាស់ `useMemo` ជួយរក្សា Object Reference ឱ្យនៅដដែល។",
        "keyPoints": [
          "ប្រើប្រាស់ `useMemo` សម្រាប់រុំព័ទ្ធ Value Object នៃ Provider។",
          "ប្រើប្រាស់ `useCallback` សម្រាប់អនុគមន៍ដែលបញ្ជូនទៅក្នុង Context។",
          "កំណត់ Dependency Array ឱ្យបានត្រឹមត្រូវ។"
        ],
        "codeSnippet": "import React, { useState, useMemo, useCallback } from 'react';\nimport { AuthContext } from './AuthContext';\n\nexport function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = useState<User | null>(null);\n\n  const logout = useCallback(() => {\n    setUser(null);\n    localStorage.removeItem('token');\n  }, []);\n\n  // ប្រើ useMemo ដើម្បីរក្សា Object Reference កុំឱ្យបង្កើតថ្មីឥតប្រយោជន៍\n  const value = useMemo(() => ({\n    user,\n    isAuthenticated: !!user,\n    logout,\n  }), [user, logout]);\n\n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Memoizing Provider Value",
        "proTip": "ត្រូវរុំព័ទ្ធ Object Value នៅក្នុង `useMemo` ជានិច្ច ព្រោះរាល់ពេល Provider component re-render វាបង្កើត Object reference ថ្មី ដែលនឹងបង្ខំឱ្យរាល់ Child Consumers ទាំងអស់ re-render តាមដែរ!"
      },
      {
        "id": "m16-10",
        "number": "10",
        "title": "Context Best Practices",
        "summary": "គោលការណ៍ល្អបំផុតសម្រាប់ការរចនា Provider ឱ្យមានរបៀប និងការបែងចែក Context តាមមុខងារ។",
        "explanation": "ដើម្បីកុំឱ្យកម្មវិធីរបស់អ្នកជួបបញ្ហា Performance ឬពិបាកថែទាំ អ្នកគួរតែអនុវត្តតាមគោលការណ៍ណែនាំស្តង់ដារនៅពេលប្រើប្រាស់ Context API៖",
        "keyPoints": [],
        "codeSnippet": "// ឧទាហរណ៍៖ MultiStepFormProvider ត្រូវការតែក្នុងទំព័រ Checkout ប៉ុណ្ណោះ\nexport function CheckoutPage() {\n  return (\n    <CheckoutFormProvider>\n      <StepIndicator />\n      <StepContent />\n      <StepNavigation />\n    </CheckoutFormProvider>\n  );\n}\n// មិនចាំបាច់ដាក់ CheckoutFormProvider នៅ Root App ឡើយ!",
        "codeLanguage": "jsx",
        "codeTitle": "Localized Provider Placement",
        "proTip": "គោលការណ៍មាស៖ ប្រសិនបើ State ត្រូវបានប្រើប្រាស់តែនៅក្នុងផ្នែកមួយនៃ Page (ដូចជា Sidebar ឬ Form Step) ចូរដាក់ Provider នៅត្រឹម Parent នៃផ្នែកនោះ កុំដាក់នៅ Root App ទាំងមូល!"
      },
      {
        "id": "m16-11",
        "number": "11",
        "title": "Context Limitations",
        "summary": "ហេតុផលដែលកម្មវិធីខ្នាតធំជ្រើសរើសប្តូរពី Context ទៅកាន់ State Management Libraries ដូចជា Zustand ឬ Redux។",
        "explanation": "ទោះបីជា Context API ងាយស្រួលប្រើប្រាស់ព្រោះជា Built-in Feature របស់ React ក៏ដោយ វានៅតែមានកម្រិតបច្ចេកទេសមួយចំនួនចំពោះកម្មវិធីខ្នាតធំ (Large-scale Applications)។",
        "keyPoints": [
          "**គ្មាន Selectors**: មិនអាច Subscribe យកតែ property មួយដែលចង់បាន (ប្រសិនបើតម្លៃមួយផ្លាស់ប្តូរ Consumer ទាំងអស់ Re-render)។",
          "**គ្មាន Middleware / DevTools**: គ្មានប្រព័ន្ធ Time-travel Debugging ឬ Middleware ស៊ីជម្រៅដូច Redux/Zustand ឡើយ។",
          "**Provider Hell**: កម្មវិធីធំៗអាចនឹងមាន Provider ជង់គ្នាជាច្រើនជាន់ (`<Auth><Theme><Cart><Chat><Modal>...`)។"
        ],
        "codeSnippet": "/*\n📌 ពេលណាត្រូវប្រើ Context API៖\n- ទិន្នន័យកម្រផ្លាស់ប្តូរ (Low frequency) ដូចជា Theme, Auth, Language/Locale។\n- ការកំណត់សកល ឬទំហំគម្រោងតូចទៅមធ្យម។\n\n📌 ពេលណាត្រូវប្តូរទៅប្រើ Zustand ឬ Redux Toolkit៖\n- ទិន្នន័យមានការផ្លាស់ប្តូរញឹកញាប់ (High frequency) ដូចជា Shopping Cart, Filters, Canvas/Audio Player។\n- ត្រូវការ Fine-grained Selectors ដើម្បីកុំឱ្យ Re-render ផ្ដេសផ្ដាស។\n- ចង់បាន State Store នៅក្រៅ React Component Tree (ងាយស្រួល access ក្នុង helper files)។\n*/",
        "codeLanguage": "jsx",
        "codeTitle": "Context vs External State Library",
        "proTip": "Context API គឺជាឧបករណ៍ Dependency Injection (ការបញ្ជូនទិន្នន័យពីលើចុះក្រោម) មិនមែនជា Full-fledged State Manager នោះទេ។ សម្រាប់កម្មវិធីធំៗដែលមាន State ស្មុគស្មាញ និងត្រូវការ Selectors ចូរប្រើ Zustand ជំនួសវិញ។"
      }
    ]
  },
  {
    "id": "module-17",
    "number": "17",
    "title": "State Management (Zustand)",
    "category": "State & Architecture",
    "summary": "ស្វែងយល់ពី Zustand State Management, ការបង្កើត Stores, ការអានតម្លៃ State, Actions, Selectors ការពារ Re-render, Persist Middleware, និងស្ថាបត្យកម្មគ្រប់គ្រង State កម្រិត Enterprise។",
    "iconName": "Cpu",
    "topics": [
      {
        "id": "m17-01",
        "number": "01",
        "title": "Client State vs Server State",
        "summary": "ការកំណត់តួនាទីរបស់ Zustand ឱ្យដំណើរការទន្ទឹមគ្នាជាមួយ TanStack Query យ៉ាងស៊ីចង្វាក់។",
        "explanation": "នៅក្នុងស្ថាបត្យកម្មទំនើបនៃកម្មវិធី React ការបែងចែកភារកិច្ចរវាង Server State និង Client State គឺជាគន្លឹះដ៏សំខាន់។ យើងប្រគល់ការងារគ្រប់គ្រង Cache ទិន្នន័យដែលទាញយកពី Backend ទៅកាន់ TanStack Query រីឯទិន្នន័យ Client State សុទ្ធសាធ (ដូចជា កន្ត្រកទំនិញ Shopping Cart, ផ្ទាំង Modal/Drawer, Audio Player, Theme) ត្រូវបានប្រគល់ឱ្យ Zustand គ្រប់គ្រង។",
        "keyPoints": [
          "**TanStack Query**: គ្រប់គ្រង Asynchronous Server Data (Products, User Profile, Posts)។",
          "**Zustand**: គ្រប់គ្រង Synchronous Client UI State (Cart items, Modal visibility, Dark mode)។",
          "មិនត្រូវចម្លង ឬ Sync ទិន្នន័យ Server ចូលទៅក្នុង Zustand Store ដោយមិនចាំបាច់ឡើយ។"
        ],
        "codeSnippet": "// 1. Server Data -> គ្រប់គ្រងដោយ TanStack Query (Query Cache)\nconst { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });\n\n// 2. Client UI State -> គ្រប់គ្រងដោយ Zustand (Global Client Store)\nconst { cart, addToCart } = useCartStore();",
        "codeLanguage": "jsx",
        "codeTitle": "Modern Separation of State Responsibilities",
        "proTip": "កុំចម្លងទិន្នន័យពី Server យកមកដាក់ក្នុង Zustand Store ឱ្យសោះ! ចូរទុកឱ្យ TanStack Query គ្រប់គ្រង Server Cache ហើយប្រើ Zustand សម្រាប់តែ UI Client State សុទ្ធសាធ (ដូចជា Shopping Cart, Drawer, Audio Player)។"
      },
      {
        "id": "m17-02",
        "number": "02",
        "title": "When to Use Context vs Zustand",
        "summary": "ការជ្រើសរើសឧបករណ៍ត្រឹមត្រូវរវាង Context API និង Zustand អាស្រ័យលើទំហំ និងភាពញឹកញាប់នៃការ Update State។",
        "explanation": "ទាំង Context API និង Zustand សុទ្ធតែជាឧបករណ៍ចែករំលែក State ប៉ុន្តែវាមានចំណុចខ្លាំងខុសគ្នា៖ Context API គឺល្អបំផុតសម្រាប់ទិន្នន័យដែលមានការប្រែប្រួលតិចតួច (Low frequency) ដូចជា Theme ឬ Locale។ ចំណែក Zustand គឺស័ក្តិសមបំផុតសម្រាប់ទិន្នន័យដែលមានការកែប្រែញឹកញាប់ (High frequency) ឬរចនាសម្ព័ន្ធស្មុគស្មាញ ព្រោះវាគាំទ្រ Fine-grained Selectors ការពារការ Re-render ផ្ដេសផ្ដាស។",
        "keyPoints": [
          "**Context API**: ភ្ជាប់មកជាមួយ React ស្រាប់ ស័ក្តិសមសម្រាប់ Theme, Language, Auth session។",
          "**Zustand**: ដំណើរការលឿន គ្មាន Provider Hell គាំទ្រ Fine-grained Selectors និង Middleware។",
          "មិនចាំបាច់រុំ `<Provider>` នៅជុំវិញ Component Tree ឡើយនៅពេលប្រើ Zustand។"
        ],
        "codeSnippet": "# ដំឡើង Zustand នៅក្នុងគម្រោងរបស់អ្នក\nnpm install zustand",
        "codeLanguage": "bash",
        "codeTitle": "Installing Zustand",
        "proTip": "ប្រើ Context សម្រាប់ទិន្នន័យ Static/Low-frequency (Theme, Locale)។ ប្រើ Zustand នៅពេលអ្នកត្រូវការ Fine-grained Selectors ដែល Re-render តែ Component ណាដែលប្រើប្រាស់ Field ផ្លាស់ប្តូរប៉ុណ្ណោះ និងមិនចាំបាច់រុំព័ទ្ធ Provider ឡើយ!"
      },
      {
        "id": "m17-03",
        "number": "03",
        "title": "Zustand Introduction",
        "summary": "ស្វែងយល់ពី Zustand ដែលជាបណ្ណាល័យគ្រប់គ្រង State ដ៏តូច លឿន និងងាយស្រួលបំផុតសម្រាប់ React។",
        "explanation": "Zustand (ពាក្យអាល្លឺម៉ង់មានន័យថា \"State / ស្ថានភាព\") គឺជាបណ្ណាល័យគ្រប់គ្រង State ដ៏ពេញនិយមបំផុតនាពេលបច្ចុប្បន្ន។ វាត្រូវបានបង្កើតឡើងដោយផ្អែកលើគោលការណ៍ Flux ដ៏សាមញ្ញ ប៉ុន្តែលុបបំបាត់ចោលនូវភាពស្មុគស្មាញ (Boilerplate) របស់ Redux ទាំងស្រុង។",
        "keyPoints": [
          "បង្កើត Store ដោយផ្ទាល់តាមរយៈ Hook តែមួយគត់គឺ `create()`។",
          "គ្មានការប្រើប្រាស់ Reducer, Action Types, ឬ Dispatchers ស្មុគស្មាញឡើយ។",
          "គាំទ្រ TypeScript ពេញលេញ និងមានសមត្ថភាព Re-render យ៉ាងរហ័សបំផុត។"
        ],
        "codeSnippet": "import { create } from 'zustand';\n\ninterface CounterState {\n  count: number;\n  increment: () => void;\n  reset: () => void;\n}\n\nexport const useCounterStore = create<CounterState>((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  reset: () => set({ count: 0 }),\n}));",
        "codeLanguage": "jsx",
        "codeTitle": "Basic Zustand Store",
        "proTip": "Zustand មានទំហំ Bundle តូចជាង 1KB មិនត្រូវការ Provider រុំព័ទ្ធកម្មវិធី គ្មាន Boilerplate ស្មុគស្មាញដូច Redux និងគាំទ្រ TypeScript 100% ដោយស្វ័យប្រវត្តិ។",
        "interactiveDemoKey": "ZustandDemo"
      },
      {
        "id": "m17-04",
        "number": "04",
        "title": "Creating a Store",
        "summary": "ការកំណត់អថេរ State និង Updater Actions នៅខាងក្នុងអនុគមន៍ create() តែមួយ។",
        "explanation": "នៅក្នុង Zustand ការបង្កើត Store ត្រូវបានធ្វើឡើងតាមរយៈអនុគមន៍ `create()`។ គំរូដ៏ល្អបំផុតគឺការដាក់ State Properties និង Actions (Functions ដែលកែប្រែ State នោះ) នៅជាមួយគ្នាក្នុង Object តែមួយ។ អនុគមន៍ `set()` នឹងធ្វើការ Shallow Merge លើ State កម្រិតកំពូលដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "ប្រើ TypeScript Interface ដើម្បីកំណត់រចនាសម្ព័ន្ធ State និង Actions ឱ្យបានច្បាស់លាស់។",
          "អនុគមន៍ `set()` ធ្វើការ Merge តែ Properties ណាដែលបានបញ្ជាក់ ដោយមិនបាត់ Properties ផ្សេងឡើយ។",
          "អាចប្រើ `set(state => ({ ... }))` នៅពេលត្រូវការតម្លៃ State ចាស់មកគណនា។"
        ],
        "codeSnippet": "import { create } from 'zustand';\n\ninterface UIState {\n  isSidebarOpen: boolean;\n  activeModal: string | null;\n  toggleSidebar: () => void;\n  openModal: (modalName: string) => void;\n  closeModal: () => void;\n}\n\nexport const useUIStore = create<UIState>((set) => ({\n  isSidebarOpen: false,\n  activeModal: null,\n  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),\n  openModal: (modalName) => set({ activeModal: modalName }),\n  closeModal: () => set({ activeModal: null }),\n}));",
        "codeLanguage": "jsx",
        "codeTitle": "Colocating State and Actions",
        "proTip": "នៅក្នុង Zustand ទិន្នន័យ State និង Actions (អនុគមន៍កែប្រែ) ត្រូវបានដាក់រួមគ្នានៅក្នុង Store តែមួយ (Colocation) ដែលធ្វើឱ្យកូដងាយអាន និងងាយស្រួលហៅប្រើ។"
      },
      {
        "id": "m17-05",
        "number": "05",
        "title": "Reading Store State",
        "summary": "ការទាញយកតម្លៃ State មកប្រើប្រាស់នៅក្នុង Functional Components តាមរយៈ Selector Hook។",
        "explanation": "ដើម្បីអានតម្លៃទិន្នន័យពី Store មកបង្ហាញនៅក្នុង React Functional Component អ្នកគ្រាន់តែហៅ Custom Hook ដែលបានបង្កើត (`useUIStore`) រួចបញ្ជូន Selector Function មួយដើម្បីទាញយកតែ Property ឬ Action ដែលត្រូវការប៉ុណ្ណោះ។",
        "keyPoints": [
          "Component នឹង Subscribe ដោយស្វ័យប្រវត្តិតាមរយៈ Hook។",
          "ការបំបែកការទាញយក State និង Actions ដោយឡែកពីគ្នា ជួយសម្រួលដល់ការគ្រប់គ្រង Performance។",
          "គ្មានតម្រូវការប្រើ Consumer Components ឬ HOC (Higher-Order Components) ឡើយ។"
        ],
        "codeSnippet": "import { useUIStore } from '@/store/useUIStore';\n\nexport function SidebarToggle() {\n  // ស្រង់យកតែតម្លៃ isSidebarOpen និង toggleSidebar\n  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);\n  const toggleSidebar = useUIStore((state) => state.toggleSidebar);\n\n  return (\n    <button \n      onClick={toggleSidebar}\n      className=\"p-2 bg-blue-600 text-white rounded\"\n    >\n      {isSidebarOpen ? 'បិទ Sidebar ◀' : 'បើក Sidebar ▶'}\n    </button>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Consuming Zustand Store",
        "proTip": "ចូរហៅប្រើ Selector ជានិច្ច ដូចជា `useUIStore(state => state.isSidebarOpen)` ជំនួសឱ្យការហៅ Store ទាំងមូល ដើម្បីធានាថា Component នឹងមិន Re-render ផ្ដេសផ្ដាស។"
      },
      {
        "id": "m17-06",
        "number": "06",
        "title": "Selectors & Performance",
        "summary": "ការការពារការ Re-render ដោយឥតប្រយោជន៍តាមរយៈ Fine-grained Selectors នៅក្នុង Zustand។",
        "explanation": "អត្ថប្រយោជន៍ធំបំផុតមួយរបស់ Zustand លើ Context API គឺសមត្ថភាព **Fine-grained Subscriptions**។ នៅពេលអ្នកប្រើប្រាស់ Selector Function ដូចជា `state => state.isSidebarOpen` Component នោះនឹង Re-render តែមួយគត់នៅពេលដែលតម្លៃ `isSidebarOpen` ផ្លាស់ប្តូរ! ប្រសិនបើ Property ផ្សេងទៀតក្នុង Store ផ្លាស់ប្តូរ Component នេះនឹងមិន Re-render ឡើយ។",
        "keyPoints": [
          "Component នឹង Re-render តែនៅពេលដែលលទ្ធផលនៃ Selector ផ្លាស់ប្តូរ (Strict Equality `===`)។",
          "អាចគណនា Derived Data ក្នុង Selector បាន (ឧទាហរណ៍៖ `state => state.items.length`)។",
          "ចៀសវាងការ return Object ថ្មីក្នុង Selector បើគ្មាន Custom Equality Check (ដូចជា `useShallow`)។"
        ],
        "codeSnippet": "import { useCartStore } from '@/store/useCartStore';\n\nexport function CartBadge() {\n  // ✅ ល្អបំផុត៖ Subscribe តែលើចំនួនសរុបនៃទំនិញ\n  // ប្រសិនបើឈ្មោះទំនិញ ឬតម្លៃកែប្រែ Badge នេះនឹងមិន Re-render ឡើយ\n  const itemCount = useCartStore((state) => state.items.length);\n\n  return <span className=\"badge\">{itemCount}</span>;\n}\n\n// ❌ មិនល្អ៖ Subscribe ទៅកាន់ Store ទាំងមូល\n// const store = useCartStore(); // នឹង Re-render រាល់ពេល Store មានការប្រែប្រួលណាមួយ!",
        "codeLanguage": "jsx",
        "codeTitle": "Selector Subscription Pattern",
        "proTip": "កុំសរសេរ `const store = useMyStore()` ក្នុង UI Component ដែលត្រូវការ Performance ខ្ពស់ឱ្យសោះ! ត្រូវប្រើ Selector `state => state.property` ដើម្បី Subscribe តែលើ property ជាក់លាក់ប៉ុណ្ណោះ។"
      },
      {
        "id": "m17-07",
        "number": "07",
        "title": "Updating Store State (set & get)",
        "summary": "ការប្រើប្រាស់ set() និង get() សម្រាប់ការផ្លាស់ប្តូរ និងគណនាស្ថានភាព State ដ៏ស្មុគស្មាញ។",
        "explanation": "អនុគមន៍ `create((set, get) => ...)` ផ្តល់ជូននូវ Parameters សំខាន់ពីរគឺ `set` សម្រាប់កែប្រែតម្លៃ State និង `get` សម្រាប់អានតម្លៃ State បច្ចុប្បន្ននៅខាងក្នុង Action Functions ដោយផ្ទាល់។ នេះមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ការត្រួតពិនិត្យលក្ខខណ្ឌមុនពេល Update (ដូចជា ការពិនិត្យមើលថាតើទំនិញមានក្នុងកន្ត្រករួចហើយឬនៅ)។",
        "keyPoints": [
          "ប្រើ `get()` ដើម្បីអានទិន្នន័យ State ផ្សេងទៀតដោយមិនបាច់រង់ចាំ Component re-render។",
          "ស័ក្តិសមបំផុតសម្រាប់ Asynchronous Actions (ដូចជា API Calls)។",
          "`set()` អាចទទួលយក Object ដោយផ្ទាល់ ឬ Updater Function (`state => ({ ... })`)។"
        ],
        "codeSnippet": "import { create } from 'zustand';\n\ninterface CartItem {\n  id: string;\n  name: string;\n  qty: number;\n}\n\ninterface CartStore {\n  items: CartItem[];\n  addItem: (product: { id: string; name: string }) => void;\n}\n\nexport const useCartStore = create<CartStore>((set, get) => ({\n  items: [],\n  addItem: (product) => {\n    const currentItems = get().items;\n    const existingIndex = currentItems.findIndex((i) => i.id === product.id);\n\n    if (existingIndex > -1) {\n      // ប្រសិនបើមានទំនិញរួចហើយ បង្កើនចំនួន qty + 1\n      const updated = [...currentItems];\n      updated[existingIndex].qty += 1;\n      set({ items: updated });\n    } else {\n      // ប្រសិនបើមិនទាន់មាន បន្ថែមចូលថ្មី\n      set({ items: [...currentItems, { ...product, qty: 1 }] });\n    }\n  },\n}));",
        "codeLanguage": "jsx",
        "codeTitle": "Using set and get in Actions",
        "proTip": "ប្រើប្រាស់ `get()` នៅខាងក្នុង Actions ដើម្បីអានតម្លៃ State បច្ចុប្បន្នផ្សេងទៀត ឬក្នុង Async Functions ដោយមិនចាំបាច់ឆ្លងកាត់ការ Subscribe របស់ Component ឡើយ។"
      },
      {
        "id": "m17-08",
        "number": "08",
        "title": "Persisting State (persist middleware)",
        "summary": "ការរក្សាទុកទិន្នន័យ State ទៅក្នុង localStorage ដោយស្វ័យប្រវត្តិតាមរយៈ persist middleware។",
        "explanation": "Zustand មានភ្ជាប់មកជាមួយនូវ Built-in Middleware ដ៏មានឥទ្ធិពលមួយឈ្មោះថា `persist`។ Middleware នេះនឹងធ្វើការ Sync ទិន្នន័យ State ទៅកាន់ `localStorage` (ឬ `sessionStorage`) ដោយស្វ័យប្រវត្តិនៅរាល់ពេលដែលមានការកែប្រែ State ហើយវានឹង Rehydrate ទិន្នន័យត្រឡប់មកវិញដោយស្វ័យប្រវត្តិពេល Reload Page។",
        "keyPoints": [
          "នាំចូល `persist` ពី `zustand/middleware`។",
          "ដាក់ឈ្មោះសោរ `name` សម្រាប់សម្គាល់ Storage Key ក្នុង Browser។",
          "ប្រើ `partialize` option ដើម្បីចម្រាញ់យកតែ State ណាដែលចង់រក្សាទុក។"
        ],
        "codeSnippet": "import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\ninterface CartStore {\n  cartItems: string[];\n  addToCart: (item: string) => void;\n  clearCart: () => void;\n}\n\nexport const useCartStore = create<CartStore>()(\n  persist(\n    (set) => ({\n      cartItems: [],\n      addToCart: (item) => set((s) => ({ cartItems: [...s.cartItems, item] })),\n      clearCart: () => set({ cartItems: [] }),\n    }),\n    {\n      name: 'shopping-cart-storage', // Key ក្នុង localStorage\n      // partialize: (state) => ({ cartItems: state.cartItems }), // រក្សាទុកតែ cartItems\n    }\n  )\n);",
        "codeLanguage": "jsx",
        "codeTitle": "Zustand with persist Middleware",
        "proTip": "ប្រើប្រាស់ option `partialize` ដើម្បីជ្រើសរើសរក្សាទុកតែ Fields ណាដែលសំខាន់ (ដូចជា `cartItems`) ទៅក្នុង localStorage ដោយមិនចាំបាច់រក្សាទុក State បណ្តោះអាសន្នដូចជា `isLoading` ឡើយ។"
      },
      {
        "id": "m17-09",
        "number": "09",
        "title": "Accessing State Outside Components",
        "summary": "ការអាន និងកែប្រែទិន្នន័យ Zustand Store នៅក្រៅ React Components ដូចជាក្នុង Axios Interceptors ឬ Pure Utilities។",
        "explanation": "គុណសម្បត្តិដ៏អស្ចារ្យមួយរបស់ Zustand គឺសមត្ថភាពក្នុងការអាន និងកែប្រែ State នៅខាងក្រៅ React Component Tree (Vanilla JavaScript)។ នេះអនុញ្ញាតឱ្យអ្នកអាចទាញយក Auth Token ឬហៅ Action Logout ដោយផ្ទាល់នៅក្នុង Axios Interceptor ឬ Router Guards ដោយមិនបាច់បារម្ភពីរឿង Hook Rules ឡើយ។",
        "keyPoints": [
          "ប្រើ `useStore.getState()` ដើម្បីអាន State បច្ចុប្បន្ននៅក្រៅ React។",
          "ប្រើ `useStore.setState()` ដើម្បីកែប្រែ State ដោយផ្ទាល់ពីគ្រប់ទីកន្លែង។",
          "ប្រើ `useStore.subscribe()` ដើម្បីតាមដានការផ្លាស់ប្តូរនៅក្រៅ React។"
        ],
        "codeSnippet": "// src/lib/apiClient.ts (ឯកសារ Vanilla TypeScript គ្មាន React Component ឡើយ)\nimport axios from 'axios';\nimport { useAuthStore } from '@/store/useAuthStore';\n\nexport const apiClient = axios.create({ baseURL: '/api' });\n\napiClient.interceptors.request.use((config) => {\n  // 1. អាន Token ដោយផ្ទាល់ពី Zustand Store នៅក្រៅ React:\n  const token = useAuthStore.getState().token;\n  \n  if (token && config.headers) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  \n  return config;\n});\n\napiClient.interceptors.response.use(\n  (res) => res,\n  (error) => {\n    if (error.response?.status === 401) {\n      // 2. ហៅ Action logout ពី Zustand Store ដោយផ្ទាល់:\n      useAuthStore.getState().logout();\n    }\n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "jsx",
        "codeTitle": "Zustand Outside React Components",
        "proTip": "Zustand Store គឺជា JavaScript Object សាមញ្ញមួយ ដូច្នេះអ្នកអាចហៅ `useStore.getState()` ដើម្បីអាន និង `useStore.setState()` ដើម្បីកែប្រែ State នៅគ្រប់ទីកន្លែងក្រៅ React ដោយមិនចាំបាច់ប្រើ Hooks ឡើយ!"
      },
      {
        "id": "m17-10",
        "number": "10",
        "title": "DevTools Middleware",
        "summary": "ការតភ្ជាប់ Zustand Store ជាមួយ Redux DevTools Extension ក្នុង Browser សម្រាប់ធ្វើ Time-travel Debugging។",
        "explanation": "Zustand ផ្តល់នូវការគាំទ្រយ៉ាងពេញលេញសម្រាប់កម្មវិធីបន្ថែមរបស់ Browser គឺ **Redux DevTools**។ តាមរយៈការប្រើប្រាស់ Middleware `devtools()` រាល់ការផ្លាស់ប្តូរ State និងឈ្មោះ Action ទាំងអស់នឹងត្រូវបានបង្ហាញក្នុង Timeline នៃ DevTools ដែលជួយឱ្យការ Debug កម្មវិធីកាន់តែរហ័ស។",
        "keyPoints": [
          "នាំចូល `devtools` ពី `zustand/middleware`។",
          "អាចកំណត់ឈ្មោះ Action ជា Argument ទីពីរក្នុង `set(..., false, 'actionName')`។",
          "គាំទ្រការត្រួតពិនិត្យ State Diffs និង State History (Time-travel Debugging)។"
        ],
        "codeSnippet": "import { create } from 'zustand';\nimport { devtools } from 'zustand/middleware';\n\ninterface CounterStore {\n  count: number;\n  inc: () => void;\n}\n\nexport const useCounterStore = create<CounterStore>()(\n  devtools(\n    (set) => ({\n      count: 0,\n      inc: () => set((state) => ({ count: state.count + 1 }), false, 'counter/increment'),\n    }),\n    { name: 'CounterStore' }\n  )\n);",
        "codeLanguage": "jsx",
        "codeTitle": "Zustand DevTools Middleware",
        "proTip": "ការរុំព័ទ្ធ Store ជាមួយ `devtools()` ជួយឱ្យអ្នកអាចតាមដានរាល់ Action ដែលបានកើតឡើង មើល State Diff និងធ្វើ Time-travel Debugging យ៉ាងងាយស្រួលនៅក្នុង DevTools។"
      },
      {
        "id": "m17-11",
        "number": "11",
        "title": "Zustand + React 19",
        "summary": "ការគាំទ្រ Concurrent Rendering និងការប្រើប្រាស់ useSyncExternalStore ដើម្បីធានាសុវត្ថិភាព 100% ក្នុង React 18 និង 19។",
        "explanation": "នៅក្នុងសម័យកាលនៃ React 18 និង React 19 ការបង្ហាញផ្ទាំងទិដ្ឋភាពក្នុងពេលដំណាលគ្នា (Concurrent Rendering) អាចបណ្តាលឱ្យមានបញ្ហា **Visual Tearing** (UI ផ្នែកខ្លះបង្ហាញ State ចាស់ ផ្នែកខ្លះបង្ហាញ State ថ្មីក្នុង Frame តែមួយ) ប្រសិនបើបណ្ណាល័យ State ខាងក្រៅមិនត្រូវបានរចនាត្រឹមត្រូវ។ Zustand បានរួមបញ្ចូល និងពឹងផ្អែកលើ `useSyncExternalStore` API ដោយផ្ទាល់ ដើម្បីលុបបំបាត់បញ្ហានេះ។",
        "keyPoints": [
          "សុវត្ថិភាព 100% ជាមួយ Concurrent Features នៃ React 19 (Transitions, Suspense)។",
          "គ្មានបញ្ហា Visual Tearing ឬ State Inconsistency ឡើយ។",
          "ដំណើរការស៊ីសង្វាក់គ្នាយ៉ាងរលូនជាមួយ Server Components និង Client Components។"
        ],
        "codeSnippet": "// Zustand ត្រូវបានសរសេរឡើងដោយផ្អែកលើ React useSyncExternalStore API:\n// import { useSyncExternalStore } from 'react';\n// ធានាសុវត្ថិភាពពេញលេញក្នុង Concurrent Rendering និង React Server/Client transitions!",
        "codeLanguage": "jsx",
        "codeTitle": "Concurrent Safety Guarantee",
        "proTip": "Zustand ត្រូវបានបង្កើតឡើងនៅលើ React Native Hook `useSyncExternalStore` ដូច្នេះវាការពារបញ្ហា Visual Tearing ទាំងស្រុងនៅពេលដំណើរការក្នុង Concurrent Mode នៃ React 18 និង 19។"
      },
      {
        "id": "m17-12",
        "number": "12",
        "title": "State Management Architecture",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធ Stores ជាច្រើនទៅតាម Domain មុខងារនៅក្នុងគម្រោងខ្នាតធំ (Large-scale Apps)។",
        "explanation": "នៅក្នុងកម្មវិធីខ្នាតធំ (Enterprise Scale) ការរៀបចំ Directory និងការបែងចែក Store ឱ្យមានរបៀបរៀបរយគឺជារឿងចាំបាច់។ យុទ្ធសាស្ត្រល្អបំផុតគឺការបង្កើត **Domain-based Modular Stores** ដោយបែងចែក State ទៅតាមមុខងារនីមួយៗ ជាជាងការច្របាច់បញ្ចូលគ្នាក្នុង Store យក្សតែមួយ។",
        "keyPoints": [
          "រៀបចំ Folder `src/store/` ដោយបែងចែកជាឯកសារ Store ដាច់ដោយឡែកពីគ្នា។",
          "ប្រើប្រាស់ TypeScript Interfaces យ៉ាងច្បាស់លាស់សម្រាប់ Store នីមួយៗ។",
          "ងាយស្រួលក្នុងការធ្វើ Refactor និងកាត់បន្ថយទំហំ Bundle តាមរយៈ Tree-shaking។"
        ],
        "codeSnippet": "src/store/\n├── useAuthStore.ts           // គ្រប់គ្រង Auth Token, Session, User Profile\n├── useCartStore.ts           // គ្រប់គ្រង Cart Items, Checkout, Totals\n├── useUIStore.ts             // គ្រប់គ្រង Modals, Sidebar, Theme\n└── useNotificationStore.ts   // គ្រប់គ្រង Toast Messages, In-app Alerts",
        "codeLanguage": "jsx",
        "codeTitle": "Modular Store Architecture",
        "proTip": "ជៀសវាងការបង្កើត Giant Monolithic Store តែមួយកណ្តាល! ចូរបំបែកជា Modular Domain Stores ដូចជា `useAuthStore`, `useCartStore`, `useUIStore` ដើម្បីឱ្យកូដមានភាពស្អាត ងាយស្រួល Test និងថែទាំ។"
      }
    ]
  },
  {
    "id": "module-18",
    "number": "18",
    "title": "React Performance",
    "category": "Enterprise & Production",
    "summary": "យន្តការ React Rendering, ការ Profiling រកមើលបញ្ហា Re-render, React.memo, useMemo, useCallback, ការបង្កើនល្បឿន Large Lists តាមរយៈ Virtualization, Code Splitting, និង React Profiler។",
    "iconName": "Gauge",
    "topics": [
      {
        "id": "m18-01",
        "number": "01",
        "title": "React Rendering",
        "summary": "ស្វែងយល់អំពីមូលហេតុ និងរបៀបដែល React ដំណើរការ Render លើ Components។",
        "explanation": "នៅក្នុង React ពាក្យថា \"Rendering\" សំដៅលើដំណើរការដែល React ហៅអនុគមន៍ Component របស់អ្នក ដើម្បីទទួលបាន JSX Elements Tree ថ្មី។ Component មួយនឹង Re-render នៅពេល៖ ១) State របស់វាផ្លាស់ប្តូរ ២) Parent Component របស់វា Re-render ឬ ៣) Context ដែលវា Subscribe មានការកែប្រែតម្លៃ។",
        "keyPoints": [
          "**Cascade Re-rendering**: នៅពេល Parent Re-render នោះរាល់ Child Components ទាំងអស់នឹង Re-render តាមដោយស្វ័យប្រវត្តិ ទោះបីជា Props របស់វាមិនផ្លាស់ប្តូរក៏ដោយ!",
          "ការ Render (គណនា Virtual DOM ក្នុង JS) ខុសប្លែកពី DOM Painting (គូរលើ Browser)។ React ធ្វើការ Diffing ហើយ update តែ Real DOM ណាដែលមានការប្រែប្រួលពិតប្រាកដប៉ុណ្ណោះ។",
          "Re-render ច្រើនដងមិនមែនតែងតែមានន័យថាយឺតនោះទេ ប៉ុន្តែវាអាចបង្កបញ្ហាប្រសិនបើ Child Component នោះមានការគណនាស្មុគស្មាញ។"
        ],
        "codeSnippet": "import { useState } from 'react';\n\nexport function Parent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n      {/* ExpensiveChild នឹង Re-render រាល់ពេលចុចប៊ូតុង ទោះបីគ្មាន props ក៏ដោយ! */}\n      <ExpensiveChild />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Default Cascade Re-render Behavior",
        "proTip": "ការ Render មិនមែនមានន័យថា Browser ត្រូវ Paint DOM ឡើងវិញគ្រប់ពេលនោះទេ! React គ្រាន់តែហៅអនុគមន៍ Component ដើម្បីគណនា JSX ថ្មីប៉ុណ្ណោះ។ បើ JSX ថ្មីដូចគ្នានឹងចាស់ នោះគ្មានការផ្លាស់ប្តូរលើ Real DOM ឡើយ។"
      },
      {
        "id": "m18-02",
        "number": "02",
        "title": "React.memo",
        "summary": "ការរំលងការ Re-render នៃ Component ប្រសិនបើ Props មិនមានការផ្លាស់ប្តូរ (Shallow Equality)។",
        "explanation": "`React.memo` គឺជា Higher-Order Component (HOC) ដែលប្រើសម្រាប់រុំព័ទ្ធ Component របស់អ្នកដើម្បីធ្វើ Memoization។ ប្រសិនបើ Props ដែលបញ្ជូនមកកាន់ Component នោះមិនមានការផ្លាស់ប្តូរតម្លៃ (Shallow Comparison `Object.is`) React នឹងរំលងការហៅ Render លើ Component នោះទាំងស្រុង ដោយប្រើលទ្ធផល Render ចាស់។",
        "keyPoints": [
          "ធ្វើការប្រៀបធៀប Props តាមរយៈ Shallow Equality Check (`Object.is`)។",
          "មិនអាចការពារ Re-render បានឡើយ ប្រសិនបើ Parent បញ្ជូន Object ឬ Function ថ្មីរាល់ render។",
          "ស័ក្តិសមបំផុតសម្រាប់ Heavy Components ដែលទទួល Props មិនសូវផ្លាស់ប្តូរ។"
        ],
        "codeSnippet": "import React from 'react';\n\ninterface TableRowProps {\n  item: { id: string; name: string; gpa: number };\n}\n\n// រុំជាមួយ React.memo ដើម្បីកុំឱ្យ re-render បើ prop 'item' មិនផ្លាស់ប្តូរ\nexport const ExpensiveTableRow = React.memo(function TableRow({ item }: TableRowProps) {\n  // ការគណនា ឬ Render ស្មុគស្មាញ...\n  return (\n    <tr>\n      <td>{item.name}</td>\n      <td>{item.gpa}</td>\n    </tr>\n  );\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Memoizing Component with React.memo",
        "pitfall": "ការប្រើ `React.memo` នឹងគ្មានប្រសិទ្ធភាពឡើយ ប្រសិនបើអ្នកបញ្ជូន Inline Objects (ដូចជា `style={{ color: 'red' }}`) ឬ Inline Functions (ដូចជា `onClick={() => doSomething()}`) ពី Parent ព្រោះវានឹងបង្កើត Memory Reference ថ្មីជានិច្ច!"
      },
      {
        "id": "m18-03",
        "number": "03",
        "title": "useMemo",
        "summary": "ការ Cache លទ្ធផលនៃការគណនាដែលចំណាយកម្លាំងម៉ាស៊ីនច្រើន (Expensive Calculations)។",
        "explanation": "Hook `useMemo` ត្រូវបានប្រើប្រាស់ដើម្បី Cache (Memoize) លទ្ធផលនៃការគណនាណាដែលចំណាយពេលយូរ ឬកម្លាំងម៉ាស៊ីនច្រើន (Expensive Calculations)។ React នឹងរក្សាទុកលទ្ធផលចាស់ ហើយធ្វើការគណនាឡើងវិញតែនៅពេលដែល Dependencies នៅក្នុង Array មានការផ្លាស់ប្តូរប៉ុណ្ណោះ។",
        "keyPoints": [
          "Syntax: `const cachedValue = useMemo(() => computeValue(a, b), [a, b]);`",
          "ជៀសវាងការគណនាឡើងវិញនូវប្រតិបត្តិការ Array ធំៗ (Filtering, Sorting, Aggregations)។",
          "ជួយរក្សា Object Reference ឱ្យមានស្ថិរភាព នៅពេលត្រូវបញ្ជូន Object ទៅកាន់ Memoized Child Component។"
        ],
        "codeSnippet": "import { useMemo } from 'react';\n\nexport function ProductList({ products, searchQuery }: ProductListProps) {\n  // គណនាឡើងវិញតែនៅពេល 'products' ឬ 'searchQuery' មានការផ្លាស់ប្តូរ\n  const filteredProducts = useMemo(() => {\n    return products.filter((item) =>\n      item.title.toLowerCase().includes(searchQuery.toLowerCase())\n    );\n  }, [products, searchQuery]);\n\n  return (\n    <ul>\n      {filteredProducts.map((p) => (\n        <li key={p.id}>{p.title}</li>\n      ))}\n    </ul>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useMemo for Array Filtering",
        "proTip": "កុំប្រើ `useMemo` លើការគណនាតូចតាចធម្មតា (ដូចជាការបូកលេខ ២ ខ្ទង់) ឱ្យសោះ! `useMemo` ខ្លួនឯងក៏ត្រូវការទំហំ Memory និងដំណើរការ CPU ក្នុងការប្រៀបធៀប Dependencies ផងដែរ។ ប្រើវាសម្រាប់តែការ Filter, Sort, ឬ Transform ទិន្នន័យ Array ធំៗប៉ុណ្ណោះ។"
      },
      {
        "id": "m18-04",
        "number": "04",
        "title": "useCallback",
        "summary": "ការ Cache អនុគមន៍ (Function Definitions) កុំឱ្យបង្កើតថ្មីរាល់ពេល Re-render។",
        "explanation": "នៅក្នុង JavaScript អនុគមន៍គឺជា Object ដូច្នេះរាល់ពេលដែល Component មួយ Re-render អនុគមន៍ដែលសរសេរខាងក្នុងនោះនឹងត្រូវបានបង្កើតជា Instance ថ្មីជានិច្ចក្នុង Memory។ Hook `useCallback` ជួយ Cache Function Definition ឱ្យនៅដដែលឆ្លងកាត់ការ Render ដរាបណា Dependencies មិនផ្លាស់ប្តូរ។",
        "keyPoints": [
          "`useCallback(fn, deps)` មានសមមូលនឹង `useMemo(() => fn, deps)`។",
          "សំខាន់បំផុតនៅពេលបញ្ជូន Callback Functions ទៅកាន់ Child Components ដែលត្រូវបានរុំដោយ `React.memo`។",
          "គ្មានប្រយោជន៍ឡើយ ប្រសិនបើ Child Component មិនមែនជា Memoized Component!"
        ],
        "codeSnippet": "import { useState, useCallback } from 'react';\n\nexport function StudentManager() {\n  const [students, setStudents] = useState<Student[]>([]);\n\n  // រក្សា Function Reference ឱ្យនៅដដែលជាអចិន្ត្រៃយ៍ (empty deps [])\n  const handleDelete = useCallback((id: string) => {\n    setStudents((prev) => prev.filter((s) => s.id !== id));\n  }, []);\n\n  return <MemoizedStudentList onDelete={handleDelete} students={students} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useCallback with Functional Setter",
        "proTip": "ប្រើប្រាស់ `useCallback` ជាមួយ Functional State Updater (ដូចជា `setCount(c => c + 1)`) ដើម្បីកុំឱ្យមាន Dependency នៅក្នុង Array (`[]`) ធ្វើឱ្យ Function Reference មានស្ថិរភាពជាអចិន្ត្រៃយ៍។"
      },
      {
        "id": "m18-05",
        "number": "05",
        "title": "Preventing Unnecessary Renders",
        "summary": "បច្ចេកទេសស្ថាបត្យកម្មក្នុងការលុបបំបាត់ Re-render ដោយមិនចាំបាច់ប្រើ useMemo ឬ React.memo។",
        "explanation": "មុនពេលប្រញាប់ប្រើប្រាស់ `React.memo`, `useMemo` ឬ `useCallback` ដែលធ្វើឱ្យកូដស្មុគស្មាញ អ្នកអាចលុបបំបាត់ Re-render ស្ទើរតែទាំងស្រុងតាមរយៈការរៀបចំ Component Composition ឱ្យបានត្រឹមត្រូវ៖ គឺការទម្លាក់ State ទៅក្រោម (Move State Down) និងការលើក Content ឡើងលើជា `children` (Lift Content Up)។",
        "keyPoints": [
          "**Move State Down**: ប្រសិនបើ Input State ប្រើតែក្នុង Textbox មួយ សូមបំបែក Textbox នោះជា Component ដាច់ដោយឡែក។",
          "**Lift Content Up**: នៅពេល Component ទទួល `children` props ទោះបី Component នោះ Re-render ក៏ `children` នឹងមិន Re-render ឡើយ។",
          "ដំណោះស្រាយស្ថាបត្យកម្មស្អាតជាង និងមិនបង្ក Overload លើ Memory ដូច Memoization។"
        ],
        "codeSnippet": "// 1. បំបែក Input ដែលមាន State ញឹកញាប់ទៅជា Component ដាច់ដោយឡែក\nfunction SearchBox() {\n  const [query, setQuery] = useState('');\n  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;\n}\n\n// 2. ក្នុង App ដើម VeryExpensiveTree នឹងមិន Re-render ឡើយនៅពេល User វាយអក្សរ!\nexport function App() {\n  return (\n    <div>\n      <SearchBox />\n      <VeryExpensiveChartTree />\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "State Down Optimization Pattern",
        "proTip": "យុទ្ធសាស្ត្រ 'State Down' និង 'Lift Content Up' គឺជាដំណោះស្រាយស្ថាបត្យកម្មដ៏ល្អបំផុត៖ បង្វែរ State ទៅកាន់ Child Component ណាដែលត្រូវការវា ឬបញ្ជូន Static Tree ជា `children` prop ដើម្បីកុំឱ្យវា Re-render តាម Parent។"
      },
      {
        "id": "m18-06",
        "number": "06",
        "title": "Large List Optimization (Virtualization)",
        "summary": "ការបង្កើនល្បឿនបញ្ជីទិន្នន័យធំៗដោយ Render តែជួរដេក (Rows) ណាដែលកំពុងមើលឃើញលើអេក្រង់ប៉ុណ្ណោះ។",
        "explanation": "នៅពេលដែលកម្មវិធីត្រូវបង្ហាញបញ្ជីទិន្នន័យរាប់ម៉ឺនជួរដេក (ដូចជា តារាងប្រតិបត្តិការធនាគារ ឬ Logs) ការ Render DOM Node ទាំងអស់ក្នុងពេលតែមួយនឹងធ្វើឱ្យ Browser ស៊ី Memory យ៉ាងខ្លាំង និងគាំង UI។ បច្ចេកទេស **List Virtualization (Windowing)** ដំណើរការដោយគណនា និង Render តែ ២០ ទៅ ៣០ ជួរដេកដែលកំពុងស្ថិតនៅក្នុង Viewport នៃ Scrollbar ប៉ុណ្ណោះ។",
        "keyPoints": [
          "រក្សាល្បឿន 60 FPS ទោះបីជាមានទិន្នន័យ 100,000+ ជួរដេកក៏ដោយ។",
          "Real DOM ផ្ទុកតែ Nodes ដែល User មើលឃើញផ្ទាល់ភ្នែក បូកជាមួយ Buffer តូចមួយ។",
          "បណ្ណាល័យពេញនិយម៖ `@tanstack/react-virtual`, `react-window`។"
        ],
        "codeSnippet": "// គោលការណ៍នៃ Virtual Windowing៖\n// - ទិន្នន័យសរុបក្នុង JavaScript Array: 50,000 ធាតុ\n// - កម្ពស់ Scroll Container សរុប: 2,000,000px (តាមរយៈ spacer div)\n// - DOM Nodes ដែលបានបង្កើតពិតប្រាកដក្នុង HTML: ត្រឹមតែ 15 ទៅ 25 nodes ប៉ុណ្ណោះ!",
        "codeLanguage": "jsx",
        "codeTitle": "Virtual List Concept",
        "proTip": "ការបង្ហាញ 10,000 DOM Elements ក្នុងពេលតែមួយនឹងធ្វើឱ្យ Browser គាំង Memory! Virtualization (Windowing) ជាមួយ `@tanstack/react-virtual` ជួយឱ្យបញ្ជីទិន្នន័យ 100,000 ជួរដេកអាច Scroll បានយ៉ាងរលូនក្នុងកម្រិត 60 FPS។"
      },
      {
        "id": "m18-07",
        "number": "07",
        "title": "Lazy Loading & Code Splitting",
        "summary": "ការបំបែក JavaScript Bundle ជាចំណែកតូចៗ និងទាញយកតែពេលត្រូវការ (On-demand) ដោយប្រើ React.lazy និង Suspense។",
        "explanation": "តាមលំនាំដើម Webpack ឬ Turbopack នឹងច្របាច់កូដទាំងអស់ទៅក្នុង Bundle តែមួយ។ នេះមានន័យថា User ត្រូវរង់ចាំទាញយកកូដផ្ទាំងគ្រប់គ្រង Admin, Charts, និង Rich Text Editors ទាំងអស់ ទោះបីពួកគេគ្រាន់តែចង់មើល Landing Page ក៏ដោយ។ **Code Splitting** អនុញ្ញាតឱ្យយើងបំបែក Bundle ទាំងនោះ និងទាញយកតែពេល User ត្រូវការ។",
        "keyPoints": [
          "ប្រើ `React.lazy(() => import('./Component'))` សម្រាប់ Dynamic Imports។",
          "រុំព័ទ្ធ Lazy Component នៅក្នុង `<Suspense fallback={<LoadingSpinner />}>`។",
          "កាត់បន្ថយទំហំ Initial Bundle យ៉ាងច្រើន បង្កើនល្បឿនផ្ទុកទំព័រដំបូង។"
        ],
        "codeSnippet": "import React, { Suspense, useState } from 'react';\n\n// ទាញយក JavaScript file តែនៅពេល Component នេះត្រូវបង្ហាញ\nconst HeavyAnalyticsChart = React.lazy(() => import('./HeavyAnalyticsChart'));\n\nexport function Dashboard() {\n  const [showChart, setShowChart] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setShowChart(true)}>បង្ហាញក្រាហ្វិក</button>\n      \n      {showChart && (\n        <Suspense fallback={<div className=\"h-64 animate-pulse bg-slate-800 rounded\" />}>\n          <HeavyAnalyticsChart />\n        </Suspense>\n      )}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "On-demand Lazy Component Loading",
        "proTip": "ប្រើប្រាស់ `React.lazy()` សម្រាប់ Heavy Components ដែលកម្របើកមើលភ្លាមៗ (ដូចជា Rich Text Editor, Modal Popup, ឬ Analytics Charts) ដើម្បីកាត់បន្ថយទំហំ Initial Bundle Size និងបង្កើនពិន្ទុ First Contentful Paint (FCP)។"
      },
      {
        "id": "m18-08",
        "number": "08",
        "title": "React Profiler",
        "summary": "ការស្វែងរកចំណុចដែលដំណើរការយឺត (Slow Renders) តាមរយៈ React DevTools Profiler។",
        "explanation": "ផ្ទាំង **React DevTools Profiler** គឺជាឧបករណ៍ដ៏សំខាន់បំផុតសម្រាប់វិភាគ Performance នៃកម្មវិធី React។ វាធ្វើការកត់ត្រារយៈពេល Render (Render Duration), បង្ហាញក្រាហ្វិក Flamegraph, និងបង្ហាញមូលហេតុច្បាស់ៗថាតើ Component ណាខ្លះ Re-render និងចំណាយពេលប៉ុន្មាន Milliseconds។",
        "keyPoints": [
          "មើលពណ៌ Flamegraph (ពណ៌លឿង/ទឹកក្រូច = ចំណាយពេលយូរ, ពណ៌ខៀវ/ប្រផេះ = លឿន ឬមិនបាន render)។",
          "ប្រើប្រាស់ `<Profiler id=\"...\" onRender={...}>` សម្រាប់ការវាស់វែងតាម Programmatic ក្នុង Code។",
          "ធ្វើតេស្ត Profiling នៅក្នុង Production Build (ជាមួយ Profiling flag បើក) ដើម្បីទទួលបានទិន្នន័យជាក់ស្តែង។"
        ],
        "codeSnippet": "import { Profiler } from 'react';\n\nfunction onRenderCallback(\n  id: string,\n  phase: 'mount' | 'update',\n  actualDuration: number\n) {\n  console.log(`Component ${id} [${phase}] ចំណាយពេល: ${actualDuration.toFixed(2)}ms`);\n}\n\nexport function App() {\n  return (\n    <Profiler id=\"CourseTable\" onRender={onRenderCallback}>\n      <CourseTable />\n    </Profiler>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "React Profiler API",
        "proTip": "បើកជម្រើស 'Record why each component rendered while profiling' នៅក្នុង Settings នៃ React DevTools ដើម្បីដឹងច្បាស់ថាតើ Component មួយ Re-render ដោយសារ State, Hook, ឬ Prop ណាមួយ។"
      },
      {
        "id": "m18-09",
        "number": "09",
        "title": "Performance Best Practices",
        "summary": "គោលការណ៍ណែនាំ និងបញ្ជីត្រួតពិនិត្យ (Checklist) ដើម្បីរក្សា Frame Rate កម្រិត 60 FPS ក្នុងកម្មវិធី React។",
        "explanation": "ដើម្បីធានាថាកម្មវិធី React របស់អ្នកដំណើរការបានរលូនក្នុងល្បឿន 60 FPS (Frames Per Second) នៅគ្រប់ឧបករណ៍ទាំងអស់ រួមទាំងទូរស័ព្ទកម្លាំងខ្សោយ អ្នកគួរតែអនុវត្តតាមបញ្ជីត្រួតពិនិត្យ (Checklist) ខាងក្រោម៖",
        "keyPoints": [],
        "codeSnippet": "// វិធានមាសទាំង ៤ នៃ React Performance៖\n// 1. កុំប្រញាប់ Optimize បើពុំទាន់មានភស្តុតាងពី Profiler ថាវាដំណើរការយឺត។\n// 2. រៀបចំស្ថាបត្យកម្ម Component (State Down / Lift Content Up) មុននឹងប្រើ React.memo។\n// 3. ប្រើប្រាស់ Virtualization នៅពេលបញ្ជីទិន្នន័យមានលើសពី 100 ជួរដេក។\n// 4. ប្រើ Lazy Loading សម្រាប់ Routes និង Heavy Libraries។",
        "codeLanguage": "jsx",
        "codeTitle": "Performance Golden Rules",
        "proTip": "កុំធ្វើ Optimization មុនពេលវាស់វែងបញ្ហាជាក់ស្តែង (Premature optimization is the root of all evil)! ត្រូវប្រើ DevTools Profiler រកឃើញ Bottleneck សិន សឹមធ្វើការកែសម្រួល។"
      },
      {
        "id": "m18-10",
        "number": "10",
        "title": "Debouncing and Throttling",
        "summary": "ការគ្រប់គ្រង និងកម្រិតភាពញឹកញាប់នៃការបញ្ឆេះ Events ដូចជា Search Input ឬ Window Scroll។",
        "explanation": "Events មួយចំនួនដូចជាការវាយអក្សរក្នុង Input (Key strokes), ការរំកិលទំព័រ (Scroll), ឬការផ្លាស់ប្តូរទំហំបង្អួច (Resize) អាចបញ្ឆេះរាប់សិបដងក្នុងមួយវិនាទី។ ការអនុវត្ត **Debounce** និង **Throttle** ជួយទប់ស្កាត់កុំឱ្យអនុគមន៍ ឬ API Calls ដំណើរការញឹកញាប់ជ្រុល។",
        "keyPoints": [
          "**Debounce**: ពន្យារពេលដំណើរការរហូតទាល់តែគ្មាន Event កើតឡើងទៀតក្នុងរយៈពេលដែលបានកំណត់ (ឧទាហរណ៍៖ រង់ចាំ User វាយអក្សរចប់ 300ms ទើបហៅ API)។",
          "**Throttle**: កម្រិតឱ្យអនុគមន៍ដំណើរការត្រឹមតែមួយដងគត់ ក្នុងចន្លោះពេលជាក់លាក់មួយ (ឧទាហរណ៍៖ អនុញ្ញាតឱ្យរត់ត្រឹមតែម្តងគត់រៀងរាល់ 100ms ពេល Scroll)។"
        ],
        "codeSnippet": "import { useMemo } from 'react';\nimport debounce from 'lodash.debounce';\n\nexport function SearchInput({ onSearch }: { onSearch: (val: string) => void }) {\n  // បង្កើត debounced handler តែមួយគត់ (stable reference)\n  const debouncedSearch = useMemo(\n    () => debounce((query: string) => onSearch(query), 300),\n    [onSearch]\n  );\n\n  return (\n    <input \n      type=\"text\" \n      placeholder=\"ស្វែងរក...\" \n      onChange={(e) => debouncedSearch(e.target.value)} \n    />\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Debounced API Handler",
        "proTip": "ប្រើ Debounce (ពន្យារពេលរហូតដល់ User ឈប់វាយអក្សរ 300ms) សម្រាប់ Search Input API Calls។ ប្រើ Throttle (អនុញ្ញាតឱ្យរត់តែមួយដងក្នុងចន្លោះពេលកំណត់) សម្រាប់ Window Scroll ឬ Resize Events។"
      },
      {
        "id": "m18-11",
        "number": "11",
        "title": "Web Vitals in React",
        "summary": "ការវាស់វែង និងកែលម្អសូចនាករ Core Web Vitals (LCP, FID/INP, CLS) ក្នុងកម្មវិធី React។",
        "explanation": "**Core Web Vitals** គឺជាស្តង់ដាររង្វាស់របស់ Google សម្រាប់វាស់ស្ទង់បទពិសោធន៍អ្នកប្រើប្រាស់ពិតប្រាកដ រួមមាន៖ **LCP** (Largest Contentful Paint - ល្បឿនបង្ហាញផ្ទាំងធំជាងគេ), **INP** (Interaction to Next Paint - ភាពរហ័សនៃការឆ្លើយតបពេលចុច), និង **CLS** (Cumulative Layout Shift - ភាពនឹងនរនៃទំព័រមិនរំកិលរញ៉េរញ៉ៃ)។",
        "keyPoints": [
          "ការពារ **CLS**: កំណត់ Aspect Ratio និងវិមាត្រជាក់លាក់សម្រាប់រូបភាព និងប្រើប្រាស់ Skeleton Loaders។",
          "កែលម្អ **INP**: ប្រើប្រាស់ `startTransition` ឬ `useDeferredValue` ដើម្បីបំបែកកិច្ចការធ្ងន់ៗកុំឱ្យ Block Main Thread។",
          "កែលម្អ **LCP**: ធ្វើការ Optimize រូបភាព និងប្រើ Server Components / SSR។"
        ],
        "codeSnippet": "import { useState, useTransition } from 'react';\n\nexport function SearchFilter() {\n  const [input, setInput] = useState('');\n  const [results, setResults] = useState([]);\n  const [isPending, startTransition] = useTransition();\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    // 1. បន្ទាន់៖ Update input ភ្លាមៗដើម្បីឱ្យ UI មិនគាំងពេលវាយអក្សរ\n    setInput(e.target.value);\n\n    // 2. មិនបន្ទាន់៖ ដំណើរការ Filter ធ្ងន់ៗក្នុង Transition\n    startTransition(() => {\n      setResults(heavyFilteringCalculation(e.target.value));\n    });\n  };\n\n  return <input value={input} onChange={handleChange} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "startTransition for Responsive INP",
        "proTip": "ប្រើប្រាស់ `startTransition` ក្នុង React 18/19 សម្រាប់ការ Update ណាដែលមិនបន្ទាន់ (Non-urgent UI updates) ដើម្បីកុំឱ្យរាំងស្ទះដល់ការចុច ឬវាយអក្សររបស់ User ដោយជួយកែលម្អពិន្ទុ INP (Interaction to Next Paint) យ៉ាងខ្លាំង។"
      },
      {
        "id": "m18-12",
        "number": "12",
        "title": "Bundle Size Optimization",
        "summary": "ការកាត់បន្ថយទំហំ JavaScript Bundle តាមរយៈ Tree-shaking និងការវិភាគ Bundle Chunks។",
        "explanation": "ទំហំ JavaScript Bundle កាន់តែធំ ធ្វើឱ្យ Browser ចំណាយពេលយូរក្នុងការទាញយក និង Parse កូដ។ ការធ្វើឱ្យ Bundle តូចតាមរយៈ **Tree-shaking** (ការកាត់ចោលកូដដែលមិនបានប្រើ) និងការវិភាគតាមរយៈ `@next/bundle-analyzer` គឺជាយុទ្ធសាស្ត្រស្នូលក្នុងការបង្កើនល្បឿន Web Application។",
        "keyPoints": [
          "ប្រើប្រាស់ Named Imports ដើម្បីឱ្យ Bundler អាចធ្វើ Tree-shaking បាន។",
          "ជំនួសបណ្ណាល័យធំៗដោយជម្រើសទំនើបៗ (ឧ. ប្រើ `date-fns` ឬ Intl API ជំនួស `moment.js`)។",
          "ប្រើឧបករណ៍ `@next/bundle-analyzer` ដើម្បីពិនិត្យមើលថាតើ Package ណាខ្លះស៊ីទំហំធំជាងគេក្នុង Bundle។"
        ],
        "codeSnippet": "// ❌ មិនល្អ៖ ទាញយក Icons ទាំងពាន់ចូលក្នុង Bundle\n// import * as Icons from 'lucide-react';\n\n// ✅ ល្អបំផុត៖ Tree-shakable Named Imports (ទាញយកតែ 2 icons ប៉ុណ្ណោះ)\nimport { Check, AlertCircle } from 'lucide-react';\n\n// ✅ ជំនួស moment.js ដោយ native Intl API៖\nconst formattedDate = new Intl.DateTimeFormat('km-KH').format(new Date());",
        "codeLanguage": "jsx",
        "codeTitle": "Tree-shakable Module Imports",
        "pitfall": "ជៀសវាងការសរសេរ `import * as Icons from 'lucide-react'` ឬការប្រើ Library ធំៗដែលមិនគាំទ្រ Tree-shaking ដូចជា `moment.js`! ចូរប្រើ Named Imports ដូចជា `import { Check } from 'lucide-react'` និងបណ្ណាល័យស្រាលៗដូចជា `date-fns`។"
      }
    ]
  },
  {
    "id": "module-19",
    "number": "19",
    "title": "Advanced Components",
    "category": "Enterprise & Production",
    "summary": "ស្ថាបត្យកម្ម Reusable UI Component កម្រិត Enterprise, Compound Components, Render Props, Headless Components, Modals, Dropdowns, Data Tables, និង Polymorphic Components។",
    "iconName": "Boxes",
    "topics": [
      {
        "id": "m19-01",
        "number": "01",
        "title": "Reusable UI Components",
        "summary": "ការរចនា និងបង្កើត Component Library កម្រិត Enterprise ដោយយកលំនាំតាម Shadcn UI និង Radix UI។",
        "explanation": "ស្ថាបត្យកម្ម Component ទំនើប (ដូចជាគំរូរបស់ Shadcn UI) ផ្តោតសំខាន់លើការបំបែករវាង Visual Styling (Tailwind CSS) និង Accessible Logic (Prims/Hooks)។ តាមរយៈការប្រើប្រាស់បណ្ណាល័យ `class-variance-authority` (CVA) យើងអាចបង្កើត UI Components ដែលមាន Variants ច្រើនប្រភេទ (ដូចជា Primary, Outline, Ghost, Destructive) ប្រកបដោយ Type-safety ខ្ពស់។",
        "keyPoints": [
          "គោរពតាមស្តង់ដារ WAI-ARIA Authoring Practices សម្រាប់ការប្រើប្រាស់ Keyboard និង Screen Readers។",
          "អនុញ្ញាតឱ្យ Consumer អាច Override styles បានតាមរយៈ Utility Function `cn()` (`clsx` + `tailwind-merge`)។",
          "ផ្តល់នូវ Props ដែលអាចបត់បែនបានខ្ពស់ ដូចជា Size, Variant, និង Icon slots។"
        ],
        "codeSnippet": "import { cva, type VariantProps } from 'class-variance-authority';\nimport { cn } from '@/lib/utils';\n\nexport const badgeVariants = cva(\n  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',\n  {\n    variants: {\n      variant: {\n        default: 'bg-blue-600 text-white hover:bg-blue-700',\n        secondary: 'bg-slate-800 text-slate-300 hover:bg-slate-700',\n        destructive: 'bg-rose-600 text-white hover:bg-rose-700',\n        outline: 'border border-slate-700 text-slate-300',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n    },\n  }\n);\n\ninterface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}\n\nexport function Badge({ className, variant, ...props }: BadgeProps) {\n  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Class Variance Authority (CVA) Component Pattern",
        "proTip": "ការប្រើប្រាស់ CVA (`class-variance-authority`) រួមជាមួយ `tailwind-merge` និង `clsx` (តាមរយៈ `cn()` utility) ជួយឱ្យ Component មាន Variants ច្បាស់លាស់ (default, secondary, destructive) និងអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្ដូរ classNames បានយ៉ាងរលូនដោយគ្មានការជាន់គ្នានៃ CSS rules។"
      },
      {
        "id": "m19-02",
        "number": "02",
        "title": "Compound Components",
        "summary": "ការបង្កើត Component APIs ដែលមានច្រើនផ្នែកតូចៗធ្វើការរួមគ្នា និងចែករំលែក State ដោយស្វ័យប្រវត្តិ (Implicit State)។",
        "explanation": "**Compound Components Pattern** គឺជាគំរូរចនាដ៏ពេញនិយមមួយដែលអនុញ្ញាតឱ្យ Components តូចៗជាច្រើនធ្វើការរួមគ្នាជាឯកភាពមួយ (ដូចជា `<select>` និង `<option>` ក្នុង HTML)។ ឧទាហរណ៍ជាក់ស្តែងគឺ `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, និង `<TabsContent>` ដែលអាចចែករំលែក State ខាងក្នុង (Active Tab) ដោយស្វ័យប្រវត្តិតាមរយៈ React Context។",
        "keyPoints": [
          "ផ្តល់នូវភាពបត់បែនខ្ពស់លើការរៀបចំ Layout និង Markup ដោយមិនកំណត់ទីតាំងស្លាក។",
          "លុបបំបាត់ការបញ្ជូន Props (Prop Drilling) ដ៏ស្មុគស្មាញរវាង Parent និង Children។",
          "ធ្វើឱ្យ API នៃ Component មានលក្ខណៈ Declarative និងងាយយល់ដូច native HTML។"
        ],
        "codeSnippet": "// របៀបប្រើប្រាស់ Compound Tabs Component ដ៏ស្រស់ស្អាត និងបត់បែន៖\nexport function CourseTabs() {\n  return (\n    <Tabs defaultValue=\"overview\">\n      <TabsList>\n        <TabsTrigger value=\"overview\">សេចក្តីសង្ខេប</TabsTrigger>\n        <TabsTrigger value=\"curriculum\">មាតិកាមេរៀន</TabsTrigger>\n        <TabsTrigger value=\"reviews\">ការវាយតម្លៃ</TabsTrigger>\n      </TabsList>\n\n      <TabsContent value=\"overview\">\n        <p>ព័ត៌មានលម្អិតអំពីវគ្គសិក្សា React Masterclass...</p>\n      </TabsContent>\n\n      <TabsContent value=\"curriculum\">\n        <p>បញ្ជីមេរៀនទាំងអស់ចំនួន ២៧ ម៉ូឌុល...</p>\n      </TabsContent>\n    </Tabs>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Compound Component Pattern Usage",
        "proTip": "Compound Component Pattern ដូចគ្នានឹង `<select>` និង `<option>` ក្នុង HTML ដើមដែរ — អ្នកប្រើប្រាស់មានសេរីភាពពេញលេញក្នុងការរៀបចំ Layout (ដូចជាដាក់ TabsTrigger ខាងលើ ខាងឆ្វេង ឬខាងក្រោម) ដោយមិនចាំបាច់ pass props រញ៉េរញ៉ៃឡើយ។"
      },
      {
        "id": "m19-03",
        "number": "03",
        "title": "Implementing Compound Components",
        "summary": "ការបង្កើត Internal React Context ដើម្បីភ្ជាប់ទំនាក់ទំនងរវាង Parent Container និង Sub-components។",
        "explanation": "ដើម្បីបង្កើត Compound Component ដោយផ្ទាល់ យើងត្រូវប្រើប្រាស់ **React Context** នៅខាងក្នុង។ Parent Component (`Tabs`) នឹងដើរតួជា Provider គ្រប់គ្រង State (`activeTab`) រីឯ Sub-components (`TabsTrigger`, `TabsContent`) នឹងទាញយក State និង Handler នោះមកប្រើប្រាស់ដោយផ្ទាល់។",
        "keyPoints": [
          "បង្កើត Internal Context (`TabsContext`) សម្រាប់ចែករំលែក `active` និង `setActive`។",
          "Sub-components អាច Export ជា Named Exports ឬចងភ្ជាប់លើ Parent (`Tabs.Trigger = TabsTrigger`)។",
          "`TabsContent` ពិនិត្យលក្ខខណ្ឌ `if (active !== value) return null;` ដើម្បីបង្ហាញតែមាតិកាដែលត្រូវគ្នា។"
        ],
        "codeSnippet": "import React, { createContext, useContext, useState } from 'react';\n\nconst TabsContext = createContext<{ active: string; setActive: (v: string) => void } | null>(null);\n\nexport function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {\n  const [active, setActive] = useState(defaultValue);\n  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;\n}\n\nexport function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {\n  const ctx = useContext(TabsContext);\n  if (!ctx) throw new Error('TabsTrigger ត្រូវតែប្រើប្រាស់ក្នុង <Tabs>');\n  \n  const isSelected = ctx.active === value;\n  return (\n    <button \n      onClick={() => ctx.setActive(value)}\n      className={`px-4 py-2 text-sm font-medium ${isSelected ? 'border-b-2 border-blue-500 text-blue-500 font-bold' : 'text-slate-400'}`}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {\n  const ctx = useContext(TabsContext);\n  if (!ctx || ctx.active !== value) return null;\n  return <div className=\"p-4\">{children}</div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Compound Component Implementation",
        "proTip": "បង្កើត Internal Context មួយសម្រាប់តែ Compound Component នោះ ដើម្បីចែករំលែក active state និង setter handler។ អ្នកអាច export sub-components ជា Named Exports ឬចងភ្ជាប់ជា Static Properties (ដូចជា `Tabs.Trigger = TabsTrigger`)។"
      },
      {
        "id": "m19-04",
        "number": "04",
        "title": "Render Props",
        "summary": "ការចែករំលែក State និង Logic តាមរយៈការបញ្ជូនអនុគមន៍ជា Prop ឬ Children (Function as a Child)។",
        "explanation": "**Render Prop** គឺជាបច្ចេកទេសមួយដែល Component មួយទទួលយកអនុគមន៍ (Function) មួយតាមរយៈ Prop (ឬជា Children) ដែលអនុគមន៍នោះ return នូវ React Element។ Component នឹងហៅអនុគមន៍នោះដោយបញ្ជូនទិន្នន័យ State ខាងក្នុងទៅឱ្យ ដែលអនុញ្ញាតឱ្យ Consumer មានសិទ្ធិសម្រេចចិត្តលើទម្រង់ UI ដែលត្រូវ Render។",
        "keyPoints": [
          "Syntax: `<Component render={(data) => <UI data={data} />} />` ឬ `<Component>{(data) => <UI />}</Component>`។",
          "អនុញ្ញាតឱ្យបំបែក Data/Behavior Logic ចេញពី Presentation UI។",
          "នៅតែពេញនិយមខ្លាំងក្នុង Virtualized Lists និង Form Libraries (ដូចជា Formik/Downshift)។"
        ],
        "codeSnippet": "import React, { useState } from 'react';\n\ninterface MouseTrackerProps {\n  render: (pos: { x: number; y: number }) => React.ReactNode;\n}\n\nexport function MouseTracker({ render }: MouseTrackerProps) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n\n  return (\n    <div \n      className=\"h-64 border border-dashed rounded p-4\"\n      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}\n    >\n      {/* ហៅអនុគមន៍ render ដោយបញ្ជូន State ទៅឱ្យ Consumer */}\n      {render(pos)}\n    </div>\n  );\n}\n\n// ការប្រើប្រាស់៖\n// <MouseTracker render={({ x, y }) => <p>កូអរដោនេកណ្ដុរ៖ X: {x}, Y: {y}</p>} />",
        "codeLanguage": "jsx",
        "codeTitle": "Render Props Pattern",
        "proTip": "ទោះបីជា Custom Hooks ត្រូវបាននិយមប្រើប្រាស់ជំនួស Render Props ភាគច្រើនក៏ដោយ Render Props នៅតែមានតម្លៃខ្ពស់បំផុតសម្រាប់ការធ្វើ UI Template Customization (ដូចជាការអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កំណត់របៀប Render ជួរនីមួយៗនៃ List)។"
      },
      {
        "id": "m19-05",
        "number": "05",
        "title": "Headless Components",
        "summary": "ការស្វែងយល់ពី Headless UI (Radix UI, Headless UI) ដែលផ្តោតលើ Logic, Accessibility (A11y), និង Keyboard Navigation ដោយគ្មាន CSS។",
        "explanation": "**Headless UI Components** (ដូចជា Radix UI, Headless UI, ឬ React Aria) ផ្តល់នូវ Logic ទាំងស្រុង, State Management, Accessibility Attributes (ARIA), Focus Trapping, និង Keyboard Navigation ប៉ុន្តែគ្មាន Styling (0% CSS) ឡើយ។ នេះផ្តល់ឱ្យ Developer នូវសេរីភាព 100% ក្នុងការតុបតែង Visual Design តាមរយៈ Tailwind CSS ដោយមិនបាច់បារម្ភពីរឿង A11y ឡើយ។",
        "keyPoints": [
          "ធានាបាននូវភាពងាយស្រួលប្រើប្រាស់ (Accessibility - A11y) កម្រិតខ្ពស់បំផុត។",
          "គ្មាន CSS Bundled មកជាមួយឡើយ (Zero default styles) — តុបតែងដោយសេរីជាមួយ Tailwind CSS។",
          "គឺជាគ្រឹះស្នូលនៃ UI Libraries ទំនើបៗដូចជា Shadcn UI។"
        ],
        "codeSnippet": "import * as Dialog from '@radix-ui/react-dialog';\n\ninterface ModalProps {\n  isOpen: boolean;\n  onClose: (open: boolean) => void;\n  title: string;\n  children: React.ReactNode;\n}\n\nexport function Modal({ isOpen, onClose, title, children }: ModalProps) {\n  return (\n    <Dialog.Root open={isOpen} onOpenChange={onClose}>\n      <Dialog.Portal>\n        {/* Backdrop ងងឹតព្រិលៗ */}\n        <Dialog.Overlay className=\"fixed inset-0 bg-black/70 backdrop-blur-sm z-50\" />\n        \n        {/* ប្រអប់ផ្ទាំង Modal Content */}\n        <Dialog.Content className=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-lg w-full z-50 shadow-2xl\">\n          <Dialog.Title className=\"text-xl font-bold text-white mb-2\">{title}</Dialog.Title>\n          {children}\n        </Dialog.Content>\n      </Dialog.Portal>\n    </Dialog.Root>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Headless Modal Component",
        "proTip": "កុំបង្កើត Dropdown ឬ Modal ពីសូន្យដោយខ្លួនឯង បើអ្នកមិនចង់ឈឺក្បាលជាមួយបញ្ហា ARIA attributes, Focus Trapping, និង Keyboard Navigation (Tab, Esc, Up/Down Arrows)! ចូរប្រើ Headless Primitives ដូចជា Radix UI រួចតុបតែងវាជាមួយ Tailwind CSS។"
      },
      {
        "id": "m19-06",
        "number": "06",
        "title": "Modal / Dialog Component",
        "summary": "ការបង្កើតផ្ទាំង Modal Dialog ពេញលេញជាមួយ React Portal, Backdrop Blur, Focus Trapping, និងការចុចបិទដោយគ្រាប់ចុច Esc។",
        "explanation": "ផ្ទាំង Modal (Dialog) គឺជា Component សំខាន់មួយដែលតម្រូវឱ្យបង្ហាញនៅពីលើគេបង្អស់នៃផ្ទាំងអេក្រង់។ ដើម្បីជៀសវាងបញ្ហា Stacking Context (`z-index`) ឬការកាត់ផ្ទៃដោយ `overflow: hidden` របស់ Parent Component យើងត្រូវតែ Render វាទៅកាន់ `document.body` តាមរយៈ **React Portal** (`createPortal`)។",
        "keyPoints": [
          "ប្រើប្រាស់ `createPortal(children, document.body)` ដើម្បី Render ទៅក្រៅ DOM Hierarchy ដើម។",
          "ដោះស្រាយ Focus Trapping (មិនឱ្យចុច Tab ធ្លាយចេញក្រៅ Modal)។",
          "គាំទ្រការចុចលើ Backdrop ឬចុចគ្រាប់ចុច `Escape` ដើម្បីបិទផ្ទាំង។",
          "ចាក់សោរមិនឱ្យរំកិល Scroll លើ Background (`overflow: hidden` លើ body) ពេល Modal បើក។"
        ],
        "codeSnippet": "import { useEffect } from 'react';\nimport { createPortal } from 'react-dom';\n\ninterface ModalProps {\n  isOpen: boolean;\n  onClose: () => void;\n  children: React.ReactNode;\n}\n\nexport function PortalModal({ isOpen, onClose, children }: ModalProps) {\n  useEffect(() => {\n    const handleKeyDown = (e: KeyboardEvent) => {\n      if (e.key === 'Escape') onClose();\n    };\n    if (isOpen) {\n      document.addEventListener('keydown', handleKeyDown);\n      document.body.style.overflow = 'hidden'; // ចាក់សោរបាតទំព័រ\n    }\n    return () => {\n      document.removeEventListener('keydown', handleKeyDown);\n      document.body.style.overflow = 'unset';\n    };\n  }, [isOpen, onClose]);\n\n  if (!isOpen) return null;\n\n  return createPortal(\n    <div className=\"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm\">\n      <div className=\"bg-slate-900 p-6 rounded-2xl border border-slate-800 max-w-md w-full shadow-2xl\">\n        {children}\n      </div>\n    </div>,\n    document.body\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "React Portal Modal",
        "proTip": "ត្រូវប្រើ `createPortal(jsx, document.body)` ជានិច្ចនៅពេលបង្កើត Modal ដើម្បីការពារកុំឱ្យ Modal ត្រូវកាត់ផ្តាច់ដោយ CSS `overflow: hidden` ឬបញ្ហា `z-index` stacking context នៃ Parent Components។"
      },
      {
        "id": "m19-07",
        "number": "07",
        "title": "Dropdown Menu Component",
        "summary": "ការបង្កើត Menu Dropdown ដែលអាចចុចបិទដោយស្វ័យប្រវត្តិតាមរយៈ Click Outside និងគាំទ្រ Keyboard Navigation។",
        "explanation": "Dropdown Menu គឺជា Component ដែលលាក់/បង្ហាញជម្រើសផ្សេងៗនៅពេលចុចលើប៊ូតុង Trigger។ លក្ខណៈសម្បត្តិសំខាន់នៃ Dropdown ដែលមានគុណភាពខ្ពស់គឺការបិទដោយស្វ័យប្រវត្តិនៅពេល User ចុចនៅកន្លែងផ្សេងក្រៅ Menu (**Click Outside**) និងការគាំទ្រ Keyboard Navigation (សញ្ញាព្រួញចុះឡើង និង Enter)។",
        "keyPoints": [
          "ប្រើប្រាស់ `useRef` ដើម្បីភ្ជាប់ទៅកាន់ Container Element នៃ Dropdown។",
          "ស្តាប់ Event `mousedown` ឬ `touchstart` លើ `document` ដើម្បីពិនិត្យមើលថាតើ `ref.current.contains(event.target)` ដែរឬទេ។",
          "ត្រូវតែដក (Cleanup) Event Listener ចេញជានិច្ចនៅពេល Component Unmount។"
        ],
        "codeSnippet": "import { useEffect } from 'react';\n\nexport function useClickOutside(\n  ref: React.RefObject<HTMLElement | null>, \n  handler: () => void\n) {\n  useEffect(() => {\n    const listener = (event: MouseEvent | TouchEvent) => {\n      // ប្រសិនបើចុចលើធាតុខាងក្នុង Dropdown មិនបាច់ធ្វើអ្វីឡើយ\n      if (!ref.current || ref.current.contains(event.target as Node)) {\n        return;\n      }\n      // ប្រសិនបើចុចនៅខាងក្រៅ ដំណើរការ handler ដើម្បីបិទ Menu\n      handler();\n    };\n\n    document.addEventListener('mousedown', listener);\n    document.addEventListener('touchstart', listener);\n\n    return () => {\n      document.removeEventListener('mousedown', listener);\n      document.removeEventListener('touchstart', listener);\n    };\n  }, [ref, handler]);\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useClickOutside Custom Hook",
        "proTip": "ប្រើប្រាស់ Custom Hook `useClickOutside` ដោយស្តាប់ Event `mousedown` លើ `document` ដើម្បីដឹងថាតើការចុចនោះស្ថិតនៅក្រៅ Container នៃ Dropdown ឬអត់ ដើម្បីបិទ Menu ដោយរលូន។"
      },
      {
        "id": "m19-08",
        "number": "08",
        "title": "Tabs Component",
        "summary": "ការបង្កើតផ្ទាំង Tabs ស្របតាមស្តង់ដារ Accessibility ARIA (tablist, tab, tabpanel)។",
        "explanation": "ការបង្កើត Tabs Component មិនត្រឹមតែជាការផ្លាស់ប្តូរ CSS ប៉ុណ្ណោះទេ ប៉ុន្តែត្រូវគោរពតាមស្តង់ដារ Accessibility (A11y)។ នេះរួមបញ្ចូលទាំងការកំណត់ ARIA Roles ឱ្យបានត្រឹមត្រូវ និងការគាំទ្រការផ្លាស់ប្តូរ Tab តាមរយៈគ្រាប់ចុចសញ្ញាព្រួញនៅលើ Keyboard។",
        "keyPoints": [
          "**`role=\"tablist\"`**: ដាក់លើ Wrapper នៃប៊ូតុង Tabs ទាំងអស់។",
          "**`role=\"tab\"`**: ដាក់លើប៊ូតុង Tab នីមួយៗ រួមជាមួយ `aria-selected={isActive}`។",
          "**`role=\"tabpanel\"`**: ដាក់លើផ្ទាំង Content ដែលត្រូវគ្នានឹង Tab នោះ។"
        ],
        "codeSnippet": "export function AccessibleTabs({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {\n  return (\n    <div>\n      <div role=\"tablist\" aria-label=\"ការកំណត់គណនី\" className=\"flex border-b border-slate-800\">\n        <button\n          role=\"tab\"\n          id=\"tab-profile\"\n          aria-selected={active === 'profile'}\n          aria-controls=\"panel-profile\"\n          onClick={() => onSelect('profile')}\n          className={`px-4 py-2 text-sm font-semibold ${active === 'profile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400'}`}\n        >\n          ប្រវត្តិរូប\n        </button>\n      </div>\n      \n      <div role=\"tabpanel\" id=\"panel-profile\" aria-labelledby=\"tab-profile\" hidden={active !== 'profile'} className=\"p-4\">\n        មាតិកានៃទំព័រប្រវត្តិរូប...\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Accessible Tab ARIA Attributes",
        "proTip": "ត្រូវប្រាកដថាប្រើ `role='tablist'`, `role='tab'`, `role='tabpanel'`, និង `aria-selected` ដើម្បីឱ្យ Screen Readers អាចអានបានត្រឹមត្រូវ និងគាំទ្រការប្តូរ Tab ដោយចុចសញ្ញាព្រួញឆ្វេង/ស្តាំលើ Keyboard។"
      },
      {
        "id": "m19-09",
        "number": "09",
        "title": "Data Table Component",
        "summary": "ការរចនា Reusable Data Table Component ជាមួយ TypeScript Generics, Dynamic Columns, Sorting, និង Custom Cell Rendering។",
        "explanation": "នៅក្នុង Dashboard គ្រប់គ្រងកម្រិត Enterprise តារាងទិន្នន័យ (Data Table) ត្រូវបានប្រើប្រាស់ស្ទើរតែគ្រប់ទីកន្លែង។ ការបង្កើត Generic DataTable Component ជួយកាត់បន្ថយការសរសេរកូដ HTML Table ដដែលៗ ដោយគ្រាន់តែបញ្ជូន Data Array និង Column Configuration Objects មកជាការស្រេច។",
        "keyPoints": [
          "ប្រើប្រាស់ TypeScript Generics (`<T extends { id: string | number }>`) សម្រាប់ទិន្នន័យគ្រប់ប្រភេទ។",
          "Column Definition គាំទ្រទាំងការទាញយកតម្លៃផ្ទាល់ (`accessorKey`) និង Custom Cell Renderers (`render: (row) => JSX`)។",
          "ងាយស្រួលពង្រីកមុខងារបន្ថែមដូចជា Sorting, Row Selection, និង Pagination។"
        ],
        "codeSnippet": "interface Column<T> {\n  header: string;\n  accessorKey: keyof T;\n  render?: (item: T) => React.ReactNode;\n}\n\ninterface DataTableProps<T> {\n  data: T[];\n  columns: Column<T>[];\n}\n\nexport function DataTable<T extends { id: string | number }>({ data, columns }: DataTableProps<T>) {\n  return (\n    <div className=\"overflow-x-auto rounded-xl border border-slate-800\">\n      <table className=\"w-full text-left text-sm text-slate-300\">\n        <thead className=\"bg-slate-900/80 border-b border-slate-800 text-xs uppercase text-slate-400\">\n          <tr>\n            {columns.map((col) => (\n              <th key={String(col.accessorKey)} className=\"p-3 font-semibold\">{col.header}</th>\n            ))}\n          </tr>\n        </thead>\n        <tbody className=\"divide-y divide-slate-800\">\n          {data.map((row) => (\n            <tr key={row.id} className=\"hover:bg-slate-800/40 transition-colors\">\n              {columns.map((col) => (\n                <td key={String(col.accessorKey)} className=\"p-3\">\n                  {col.render ? col.render(row) : String(row[col.accessorKey] ?? '')}\n                </td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Generic Reusable DataTable Component",
        "proTip": "ប្រើប្រាស់ TypeScript Generics (`<T>`) ក្នុងការរចនា Columns Schema (`accessorKey`, `header`, `render`) ដើម្បីទទួលបាន Auto-completion និង Type-safety ពេញលេញសម្រាប់គ្រប់ Field នៃទិន្នន័យ។"
      },
      {
        "id": "m19-10",
        "number": "10",
        "title": "Pagination Component",
        "summary": "ការបង្កើត Component ប្តូរទំព័រ (Pagination) រួមមានលេខទំព័រ សញ្ញាចុចៗ (...) និងប៊ូតុង Prev/Next។",
        "explanation": "នៅពេលតារាងទិន្នន័យមានកំណត់ត្រារាប់ពាន់ Pagination Component ជួយបែងចែកទិន្នន័យជាទំព័រៗយ៉ាងច្បាស់លាស់។ Pagination ដ៏ល្អគួរតែបង្ហាញប៊ូតុងថយក្រោយ (Prev), ប៊ូតុងបន្ទាប់ (Next), និងលេខទំព័រដែលមានសញ្ញាចុចៗ (`...`) នៅពេលចំនួនទំព័រមានច្រើន។",
        "keyPoints": [
          "គណនាទំព័រសរុប៖ `totalPages = Math.ceil(total / pageSize)`។",
          "Disable ប៊ូតុង Previous នៅពេល `currentPage === 1` និងប៊ូតុង Next នៅពេល `currentPage === totalPages`។",
          "ផ្តល់នូវ Callback `onPageChange(pageNumber)` ទៅកាន់ Parent Component។"
        ],
        "codeSnippet": "interface PaginationProps {\n  current: number;\n  total: number;\n  onChange: (page: number) => void;\n}\n\nexport function Pagination({ current, total, onChange }: PaginationProps) {\n  return (\n    <div className=\"flex items-center justify-between px-4 py-3 border-t border-slate-800\">\n      <div className=\"flex items-center gap-2\">\n        <button\n          disabled={current <= 1}\n          onClick={() => onChange(current - 1)}\n          className=\"px-3 py-1.5 text-xs font-medium rounded border border-slate-700 disabled:opacity-40\"\n        >\n          ថយក្រោយ\n        </button>\n        <span className=\"text-xs text-slate-400\">\n          ទំព័រទី <strong className=\"text-white\">{current}</strong> នៃ <strong>{total}</strong>\n        </span>\n        <button\n          disabled={current >= total}\n          onClick={() => onChange(current + 1)}\n          className=\"px-3 py-1.5 text-xs font-medium rounded border border-slate-700 disabled:opacity-40\"\n        >\n          បន្ទាប់\n        </button>\n      </div>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Pagination Component",
        "proTip": "គណនាចំនួនទំព័រសរុបតាមរយៈ `Math.ceil(totalItems / pageSize)` និងប្រើប្រាស់ Logic បង្ហាញសញ្ញា (...) (Ellipsis) នៅពេលចំនួនទំព័រមានច្រើន ដើម្បីកុំឱ្យប៊ូតុងលេខទំព័រវែងជ្រុលហៀរអេក្រង់។"
      },
      {
        "id": "m19-11",
        "number": "11",
        "title": "Toast Notification System",
        "summary": "ការបង្កើតប្រព័ន្ធសារជូនដំណឹង (Toast Queue) សកល ដែលអាចបាត់ទៅវិញដោយស្វ័យប្រវត្តិ (Auto-dismiss)។",
        "explanation": "Toast Notifications គឺជាសារជូនដំណឹងតូចៗដែលផុសឡើងនៅជ្រុងនៃអេក្រង់ ដើម្បីផ្តល់ Feedback ភ្លាមៗដល់ User បន្ទាប់ពីធ្វើសកម្មភាពអ្វីមួយ (ដូចជា Save ជោគជ័យ ឬជួបបញ្ហាបណ្តាញ) ដោយមិនរំខានដល់ការងាររបស់ពួកគេឡើយ។",
        "keyPoints": [
          "បង្ហាញនៅជ្រុងខាងលើ ឬខាងក្រោម (Top-Right / Bottom-Right) តាមរយៈ Portal។",
          "បាត់ទៅវិញដោយស្វ័យប្រវត្តិបន្ទាប់ពី ៣ ទៅ ៥ វិនាទី (Auto-dismiss) ឬអាចចុចបិទដោយផ្ទាល់។",
          "គ្រប់គ្រងតាមរយៈ Zustand Store សកល ឬបណ្ណាល័យស្រាលៗដូចជា `sonner`។"
        ],
        "codeSnippet": "// ឧទាហរណ៍នៃការហៅប្រើ Toast ពីគ្រប់ទីកន្លែងក្នុងកម្មវិធី៖\nimport { toast } from 'sonner';\n\nexport function SaveProjectButton() {\n  const handleSave = async () => {\n    try {\n      await saveProject();\n      toast.success('គម្រោងត្រូវបានរក្សាទុកដោយជោគជ័យ! 🎉');\n    } catch (err: any) {\n      toast.error('បរាជ័យក្នុងការរក្សាទុកគម្រោង!');\n    }\n  };\n\n  return <button onClick={handleSave}>រក្សាទុក</button>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Triggering Toasts",
        "proTip": "ប្រព័ន្ធ Toast គួរតែគាំទ្រការតម្រៀបជង់គ្នា (Stacking), កំណត់ Timer បាត់ទៅវិញដោយស្វ័យប្រវត្តិ (Auto-dismiss 3-5 វិនាទី), និងអាចហៅប្រើប្រាស់បានយ៉ាងងាយស្រួលពីគ្រប់ទីកន្លែងតាមរយៈ `toast.success()`, `toast.error()`។"
      },
      {
        "id": "m19-12",
        "number": "12",
        "title": "Advanced Component Patterns",
        "summary": "ការស្វែងយល់ពី Polymorphic Components (as prop) និង asChild Pattern ដ៏ពេញនិយមក្នុង Radix UI។",
        "explanation": "**Polymorphic Components** អនុញ្ញាតឱ្យ Component មួយអាច Render ខ្លួនឯងទៅជា HTML Elements ខុសៗគ្នា (ដូចជា Render ជា `<button>`, `<a>`, ឬ Next.js `<Link>`) ដោយប្រើប្រាស់ prop ឈ្មោះ `as` ឬ `asChild` (ពី Radix UI Slot) ខណៈពេលដែលរក្សានូវ Styling, Variants, និង Type Safety ទាំងអស់ដូចគ្នា។",
        "keyPoints": [
          "**`as` prop**: អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្តូរ Tag ដូចជា `<Button as=\"a\" href=\"...\">`។",
          "**`asChild` pattern (Slot)**: បញ្ចូល Props និង ClassNames ចូលទៅក្នុង Child Element ផ្ទាល់ដោយមិនបង្កើត DOM Node បន្ថែម។",
          "ជួយជៀសវាងបញ្ហា Nested Interactive Elements (ដូចជាការដាក់ `<a>` នៅខាងក្នុង `<button>` ដែលជាកំហុស Invalid HTML)។"
        ],
        "codeSnippet": "// 1. បង្ហាញជា Button ធម្មតា\n<Button onClick={handleClick}>ចុចទីនេះ</Button>\n\n// 2. បង្ហាញជា Tag <a> (Link) ប៉ុន្តែមាន Style ដូច Button បេះបិទ\n<Button as=\"a\" href=\"/curriculum\">ទៅកាន់ទំព័រមេរៀន</Button>\n\n// 3. គំរូ asChild ជាមួយ Radix UI Slot និង Next.js Link:\n// <Button asChild>\n//   <Link href=\"/projects\">មើលគម្រោងទាំងអស់</Link>\n// </Button>",
        "codeLanguage": "jsx",
        "codeTitle": "Polymorphic Component Concept",
        "proTip": "គំរូ Polymorphic Component (ដូចជា `<Button as='a' href='...'>` ឬ `asChild`) អនុញ្ញាតឱ្យ Component មួយអាចបំប្លែងខ្លួនទៅជា HTML Tag ផ្សេងទៀត (ដូចជា Button ក្លាយជា Link) ដោយរក្សានូវ Styles, Variants, និង Accessibility ដដែល។"
      }
    ]
  },
  {
    "id": "module-20",
    "number": "20",
    "title": "Authentication",
    "category": "Enterprise & Production",
    "summary": "ស្វែងយល់ពីប្រព័ន្ធផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ (Authentication), JWT Tokens, Refresh Tokens, HttpOnly Cookies, Protected Routes, Role-Based Access Control (RBAC), និង 401 Interceptors។",
    "iconName": "ShieldCheck",
    "topics": [
      {
        "id": "m20-01",
        "number": "01",
        "title": "Authentication Concepts",
        "summary": "ការស្វែងយល់ពីភាពខុសគ្នារវាង Authentication (អ្នកណា) និង Authorization (សិទ្ធិអ្វីខ្លះ), Sessions និង JWT Tokens។",
        "explanation": "នៅក្នុងប្រព័ន្ធសុវត្ថិភាពនៃកម្មវិធី Web យើងត្រូវបែងចែកពាក្យបច្ចេកទេសសំខាន់ពីរឱ្យដាច់ពីគ្នា៖ **Authentication (AuthN)** គឺជាដំណើរការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់ (តើអ្នកជានរណា?) រីឯ **Authorization (AuthZ)** គឺជាការត្រួតពិនិត្យសិទ្ធិអំណាច (តើអ្នកត្រូវបានអនុញ្ញាតឱ្យចូលមើល ឬកែប្រែទិន្នន័យអ្វីខ្លះ?)។ លើសពីនេះ យើងមានវិធីសាស្ត្រ Session-based (រក្សាទុក Session ID ក្នុង Database) និង Token-based (JWT)។",
        "keyPoints": [
          "**JWT (JSON Web Token)**: Token ដែលត្រូវបានចុះហត្ថលេខាឌីជីថល (Cryptographically Signed) មាន ៣ ផ្នែក៖ Header, Payload, និង Signature។",
          "**Stateless Authentication**: Server មិនចាំបាច់រក្សាទុក Session ក្នុង Memory ឡើយ ដោយគ្រាន់តែ Verify ហត្ថលេខារបស់ JWT។",
          "**Claims**: ព័ត៌មានដែលផ្ទុកក្នុង Payload នៃ JWT (ដូចជា `sub: userId`, `role: admin`, `exp: expirationTime`)។"
        ],
        "codeSnippet": "// រចនាសម្ព័ន្ធនៃ JWT: header.payload.signature\n// ឧទាហរណ៍ទិន្នន័យបន្ទាប់ពី Decoded Payload៖\nconst decodedPayload = {\n  sub: \"usr_99824\",       // User ID\n  name: \"សុខ សាន\",        // ឈ្មោះអ្នកប្រើប្រាស់\n  role: \"admin\",          // តួនាទីសម្រាប់ Authorization (RBAC)\n  exp: 1735689600         // កាលបរិច្ឆេទផុតកំណត់ (Unix Timestamp)\n};",
        "codeLanguage": "jsx",
        "codeTitle": "JWT Token Structure",
        "proTip": "Authentication គឺជាការផ្ទៀងផ្ទាត់ថា 'តើអ្នកជាអ្នកណា?' (Who you are) តាមរយៈ Email/Password។ ចំណែក Authorization គឺជាការកំណត់ថា 'តើអ្នកមានសិទ្ធិធ្វើអ្វីខ្លះ?' (What permissions you have) ដូចជា Admin ឬ User ធម្មតា។"
      },
      {
        "id": "m20-02",
        "number": "02",
        "title": "Login & Register UI",
        "summary": "ការរចនា និងបង្កើតផ្ទាំង Login និង Register ជាមួយ Input Validation, Password Visibility Toggle, និង Loading States។",
        "explanation": "ផ្ទាំងចូលប្រើប្រាស់ (Login) និងចុះឈ្មោះ (Register) គឺជាចំណុចចាប់ផ្តើមដំបូងនៃបទពិសោធន៍អ្នកប្រើប្រាស់។ ទម្រង់បែបបទទាំងនេះត្រូវតែមានភាពច្បាស់លាស់ គាំទ្រការផ្ទៀងផ្ទាត់ទិន្នន័យ (Validation), បង្ហាញ Error Message ចំកន្លែង, មានមុខងារ Show/Hide Password, និងមាន Loading State ដើម្បីកុំឱ្យ User ចុច Submit ត្រួតគ្នា។",
        "keyPoints": [
          "មិនត្រូវរក្សាទុក Password ក្នុង Plain Text ឡើយ។",
          "ប្រើប្រាស់ Type `password` សម្រាប់ Input លេខសម្ងាត់ និងផ្តល់ Icon សម្រាប់ចុចមើល។",
          "បង្ហាញ Error Alert ច្បាស់លាស់នៅពេល Credentials មិនត្រឹមត្រូវ (ឧ. \"អ៊ីមែល ឬលេខសម្ងាត់មិនត្រឹមត្រូវ\")។"
        ],
        "codeSnippet": "import { useState } from 'react';\nimport { Eye, EyeOff, Loader2 } from 'lucide-react';\n\nexport function LoginForm({ onSubmit, isLoading }: LoginFormProps) {\n  const [showPassword, setShowPassword] = useState(false);\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    onSubmit({ email, password });\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"space-y-4 max-w-sm w-full\">\n      <div>\n        <label className=\"block text-sm font-medium mb-1\">អ៊ីមែល</label>\n        <input \n          type=\"email\" \n          value={email} \n          onChange={(e) => setEmail(e.target.value)} \n          required \n          className=\"w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700\" \n        />\n      </div>\n\n      <div>\n        <label className=\"block text-sm font-medium mb-1\">លេខសម្ងាត់</label>\n        <div className=\"relative\">\n          <input \n            type={showPassword ? 'text' : 'password'} \n            value={password} \n            onChange={(e) => setPassword(e.target.value)} \n            required \n            className=\"w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 pr-10\" \n          />\n          <button \n            type=\"button\" \n            onClick={() => setShowPassword(!showPassword)} \n            className=\"absolute right-3 top-2.5 text-slate-400 hover:text-white\"\n          >\n            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}\n          </button>\n        </div>\n      </div>\n\n      <button \n        type=\"submit\" \n        disabled={isLoading} \n        className=\"w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2\"\n      >\n        {isLoading ? <Loader2 className=\"animate-spin\" size={18} /> : 'ចូលប្រើប្រាស់'}\n      </button>\n    </form>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Login Interface Pattern",
        "proTip": "តែងតែបន្ថែមប៊ូតុង Show/Hide Password (Toggle visibility) ដើម្បីជួយសម្រួលដល់ User លើ Mobile និងការពារកំហុសវាយលេខសម្ងាត់ខុស។ កុំភ្លេច Disable ប៊ូតុង Submit ពេលកំពុងដំណើរការ Network Request។"
      },
      {
        "id": "m20-03",
        "number": "03",
        "title": "Authentication State",
        "summary": "ការគ្រប់គ្រង Session បច្ចុប្បន្ន, User Profile, និង Access Token នៅក្នុង Memory ជាមួយ Zustand ឬ Context។",
        "explanation": "ការគ្រប់គ្រង Auth State ទាមទារឱ្យមានការរៀបចំទិន្នន័យច្បាស់លាស់ រួមមានព័ត៌មាន Profile របស់អ្នកប្រើប្រាស់ (`user`), ស្ថានភាពតភ្ជាប់ (`isAuthenticated`), កាលវិភាគផ្ទុកទិន្នន័យ (`isLoading`), និង Access Token សម្រាប់ធ្វើ Request ទៅកាន់ API។",
        "keyPoints": [
          "**In-Memory Storage**: រក្សាទុក Access Token ក្នុង JavaScript Memory (Zustand Store) ជួយការពារការលួចទិន្នន័យពី XSS Scripts។",
          "ផ្តល់នូវ Flag `isLoading` (ឬ `isInitializing`) ដើម្បីការពារកុំឱ្យ UI លោតភ្លាមៗទៅកាន់ទំព័រ Login មុនពេល Refresh Session ចប់។",
          "រក្សាទិន្នន័យ Profile ឱ្យស្របគ្នាជាមួយ State លើ Backend។"
        ],
        "codeSnippet": "export interface UserProfile {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'student' | 'instructor';\n  avatarUrl?: string;\n}\n\nexport interface AuthState {\n  user: UserProfile | null;\n  token: string | null;\n  isAuthenticated: boolean;\n  isLoading: boolean;\n  setAuth: (user: UserProfile, token: string) => void;\n  clearAuth: () => void;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Auth State Shape",
        "pitfall": "ហាមដាច់ខាតកុំរក្សាទុក JWT Token ដែលមានសិទ្ធិខ្ពស់នៅក្នុង LocalStorage ប្រសិនបើកម្មវិធីរបស់អ្នកងាយរងគ្រោះដោយសារការវាយប្រហារ XSS (Cross-Site Scripting)! ការរក្សាទុកក្នុង Memory ឬ HttpOnly Cookies គឺមានសុវត្ថិភាពជាងឆ្ងាយណាស់។"
      },
      {
        "id": "m20-04",
        "number": "04",
        "title": "Protected Routes & Layouts",
        "summary": "ការការពារទំព័រ Private និងការបញ្ជូន User ដែលមិនទាន់ Login ទៅកាន់ទំព័រ /login ដោយស្វ័យប្រវត្តិតាមរយៈ Layout Route។",
        "explanation": "នៅក្នុង Single Page Application ទំព័រមួយចំនួនដូចជា Dashboard, Profile, ឬ Settings ត្រូវតែការពារមិនឱ្យអ្នកដែលមិនទាន់ Login អាចចូលមើលបានឡើយ។ ការប្រើប្រាស់ **Protected Route Layout** ជាមួយ React Router អនុញ្ញាតឱ្យយើងត្រួតពិនិត្យ Auth State នៅកន្លែងតែមួយ និង Redirect ពួកគេទៅកាន់ `/login` ប្រសិនបើគ្មានសិទ្ធិ។",
        "keyPoints": [
          "បង្ហាញ Loading Spinner ដរាបណា `isLoading` នៅជា `true` (កំពុងផ្ទៀងផ្ទាត់ Session ដំបូង)។",
          "ប្រើ `<Navigate to=\"/login\" state={{ from: location }} replace />` ដើម្បីបញ្ជូនទៅកាន់ទំព័រចូល។",
          "ប្រើ `<Outlet />` ដើម្បី Render ទំព័រកូនចៅទាំងអស់នៅពេលដែល Auth State ត្រឹមត្រូវ។"
        ],
        "codeSnippet": "import { Navigate, Outlet, useLocation } from 'react-router-dom';\nimport { useAuth } from '@/features/auth/hooks/useAuth';\n\nexport function ProtectedLayout() {\n  const { isAuthenticated, isLoading } = useAuth();\n  const location = useLocation();\n\n  // 1. កំពុងផ្ទៀងផ្ទាត់ Session ដំបូង\n  if (isLoading) {\n    return <div className=\"flex h-screen items-center justify-center\">កំពុងផ្ទៀងផ្ទាត់...</div>;\n  }\n\n  // 2. បើមិនទាន់ Login បញ្ជូនទៅកាន់ /login ព្រមទាំងភ្ជាប់ location ដើម\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  // 3. បើ Login រួចហើយ អនុញ្ញាតឱ្យចូលមើលទំព័រខាងក្នុង\n  return <Outlet />;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Protected Layout Route",
        "proTip": "នៅពេល Redirect user ទៅកាន់ `/login` ត្រូវភ្ជាប់ URL ដើមដែលពួកគេចង់ចូលមើលតាមរយៈ State ដូចជា `state={{ from: location }}` ដើម្បីឱ្យពួកគេអាចត្រឡប់មកទំព័រនោះវិញភ្លាមៗបន្ទាប់ពី Login ជោគជ័យ។"
      },
      {
        "id": "m20-05",
        "number": "05",
        "title": "Access Tokens vs Refresh Tokens",
        "summary": "ការប្រើប្រាស់ Short-lived Access Tokens (15 នាទី) រួមជាមួយ Long-lived Refresh Tokens (7 ថ្ងៃ) ដើម្បីបង្កើនសុវត្ថិភាព។",
        "explanation": "យុទ្ធសាស្ត្រសុវត្ថិភាពកម្រិតស្តង់ដារឧស្សាហកម្មគឺការប្រើប្រាស់ Token ពីរប្រភេទរួមគ្នា៖ **Access Token** (មានអាយុកាលខ្លី ដូចជា 15 នាទី) ប្រើសម្រាប់ភ្ជាប់ជាមួយរាល់ HTTP Requests ទៅកាន់ Protected Endpoints។ ចំណែកឯ **Refresh Token** (មានអាយុកាលវែង ដូចជា 7 ទៅ 30 ថ្ងៃ) ត្រូវបានរក្សាទុកក្នុង HttpOnly Cookie ដើម្បីស្នើសុំ Access Token ថ្មីពេលអាចាស់ផុតកំណត់។",
        "keyPoints": [
          "**Access Token**: បញ្ជូនទៅក្នុង Header `Authorization: Bearer <token>`។",
          "**Refresh Token**: រក្សាទុកដោយសុវត្ថិភាព និងផ្ញើទៅកាន់ Endpoint `/api/auth/refresh` តែមួយគត់។",
          "**Token Rotation**: រាល់ពេល Refresh Server នឹងចេញទាំង Access Token ថ្មី និង Refresh Token ថ្មីដើម្បីការពារ Replay Attacks។"
        ],
        "codeSnippet": "// វដ្តជីវិតនៃ Token (Token Lifecycle):\n// 1. User ចូលប្រើប្រាស់ -> ទទួលបាន Access Token (15 នាទី) + Refresh Token (7 ថ្ងៃ)\n// 2. ក្រោយ 15 នាទី Access Token ផុតកំណត់ -> API ឆ្លើយតប 401\n// 3. កម្មវិធីហៅ POST /api/auth/refresh ដោយស្វ័យប្រវត្តិនូវ Background\n// 4. ទទួលបាន Access Token ថ្មីភ្លាមៗ -> User អាចបន្តប្រើប្រាស់ដោយរលូន មិនបាច់ Login ឡើងវិញឡើយ!",
        "codeLanguage": "jsx",
        "codeTitle": "Token Rotation Lifecycle",
        "proTip": "Access Token មានអាយុកាលខ្លីដើម្បីកាត់បន្ថយហានិភ័យប្រសិនបើត្រូវ Hacker លួចបាន។ Refresh Token ត្រូវបានប្រើដើម្បីស្នើសុំ Access Token ថ្មីស្ងាត់ៗនៅ Background ដោយមិនចាំបាច់តម្រូវឱ្យ User វាយ Password ចូលម្តងទៀតឡើយ។"
      },
      {
        "id": "m20-06",
        "number": "06",
        "title": "HttpOnly Cookies",
        "summary": "យន្តការរក្សាទុក Authentication Session ដ៏មានសុវត្ថិភាពបំផុតប្រឆាំងនឹងការវាយប្រហារ XSS Attacks។",
        "explanation": "**HttpOnly Cookie** គឺជាទម្រង់ Cookie ពិសេសដែលត្រូវបានកំណត់ដោយ Server តាមរយៈ Header `Set-Cookie: ...; HttpOnly; Secure; SameSite=Strict`។ លក្ខណៈពិសេសរបស់វាគឺ JavaScript ក្នុង Browser មិនអាចអានតម្លៃតាមរយៈ `document.cookie` បានឡើយ ដែលជាខែលការពារដ៏រឹងមាំបំផុតប្រឆាំងនឹង Cross-Site Scripting (XSS)។",
        "keyPoints": [
          "Browser នឹងភ្ជាប់ Cookie នេះទៅកាន់ Server ដោយស្វ័យប្រវត្តិនូវរាល់ Request។",
          "តម្រូវឱ្យបើក CORS Configuration: `credentials: 'include'` ឬ `withCredentials: true`។",
          "ត្រូវកំណត់ `SameSite=Lax` ឬ `SameSite=Strict` ដើម្បីការពារការវាយប្រហារ CSRF។"
        ],
        "codeSnippet": "import axios from 'axios';\n\n// ការកំណត់រចនាសម្ព័ន្ធ Axios សម្រាប់ទទួល និងផ្ញើ Secure Cookies៖\nexport const apiClient = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL,\n  withCredentials: true, // ផ្ញើ Secure Cookies ទៅកាន់ Server គ្រប់ Request\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});",
        "codeLanguage": "jsx",
        "codeTitle": "Configuring Axios for HttpOnly Cookies",
        "proTip": "HttpOnly Cookies មិនអាចអាន ឬកែប្រែដោយ JavaScript (`document.cookie`) ក្នុង Browser បានឡើយ ដូច្នេះទោះបីជាកម្មវិធីមានចន្លោះប្រហោង XSS ក៏ Hacker មិនអាចលួច Session Token បានដែរ។ កុំភ្លេចកំណត់ `withCredentials: true` ក្នុង Axios!"
      },
      {
        "id": "m20-07",
        "number": "07",
        "title": "Handling 401 Unauthorized",
        "summary": "ការបង្កើត Axios Response Interceptor សម្រាប់ស្ទាក់ចាប់កំហុស 401 និងធ្វើការ Refresh Token ដោយស្វ័យប្រវត្តិ។",
        "explanation": "នៅពេលដែល Access Token ផុតកំណត់ Server នឹងឆ្លើយតបមកវិញនូវ Status Code `401 Unauthorized`។ តាមរយៈការរៀបចំ **Axios Response Interceptor** យើងអាចស្ទាក់ចាប់កំហុសនេះ រួចហៅ API សុំ Token ថ្មីដោយស្ងាត់ៗ ហើយបញ្ជូន Request ដើមដែលបរាជ័យនោះឡើងវិញ (Retry Request) ដោយ User មិនបាច់ដឹងខ្លួនឡើយ។",
        "keyPoints": [
          "ពិនិត្យលក្ខខណ្ឌ `error.response?.status === 401` និង `!originalRequest._retry`។",
          "ដាក់ទង់ `originalRequest._retry = true` ដើម្បីការពារ Infinite Loop។",
          "ប្រសិនបើ Refresh Token ក៏ផុតកំណត់ដែរ ត្រូវធ្វើការ Logout និង Redirect ទៅកាន់ទំព័រ Login។"
        ],
        "codeSnippet": "import { apiClient } from '@/lib/apiClient';\nimport { refreshAccessToken, logoutUser } from '@/features/auth/services/authService';\n\napiClient.interceptors.response.use(\n  (response) => response,\n  async (error) => {\n    const originalRequest = error.config;\n\n    // ប្រសិនបើ Error 401 ហើយមិនទាន់បានព្យាយាម Retry\n    if (error.response?.status === 401 && !originalRequest._retry) {\n      originalRequest._retry = true;\n\n      try {\n        // 1. ស្នើសុំ Access Token ថ្មីពី Server\n        const newAccessToken = await refreshAccessToken();\n        \n        // 2. ដាក់ Token ថ្មីចូលទៅក្នុង Header នៃ Request ដើម\n        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;\n        \n        // 3. ហៅ Request ដើមម្តងទៀតដោយជោគជ័យ\n        return apiClient(originalRequest);\n      } catch (refreshError) {\n        // បើ Refresh បរាជ័យ បង្ខំឱ្យ Logout ភ្លាម\n        logoutUser();\n        window.location.href = '/login?session_expired=true';\n        return Promise.reject(refreshError);\n      }\n    }\n\n    return Promise.reject(error);\n  }\n);",
        "codeLanguage": "jsx",
        "codeTitle": "Automatic 401 Token Refresh Interceptor",
        "proTip": "នៅពេលមាន API Requests ជាច្រើនបរាជ័យក្នុងពេលតែមួយដោយសារ Access Token ផុតកំណត់ ចូរប្រើ Request Queue ដើម្បីកុំឱ្យកម្មវិធីហៅ API `/refresh` ជាន់គ្នាដដែលៗច្រើនដង។"
      },
      {
        "id": "m20-08",
        "number": "08",
        "title": "Role-Based Access Control (RBAC)",
        "summary": "ការកំណត់សិទ្ធិ និងលាក់/បង្ហាញ UI Elements ផ្អែកលើតួនាទីរបស់អ្នកប្រើប្រាស់ (Admin, Editor, Student)។",
        "explanation": "នៅក្នុងកម្មវិធីដែលមានអ្នកប្រើប្រាស់ច្រើនប្រភេទ (ដូចជា Admin, Instructor, Student) យើងត្រូវគ្រប់គ្រងសិទ្ធិមើលឃើញ និងដំណើរការមុខងារផ្សេងៗ។ ការបង្កើត Declarative Component ដូចជា `<RoleGate>` ឬ Custom Hook `useHasPermission()` ជួយឱ្យកូដ UI មានភាពងាយស្រួលអាន និងមានសុវត្ថិភាព។",
        "keyPoints": [
          "**Frontend RBAC**: ជួយបង្កើន UX ដោយលាក់ប៊ូតុង ឬតំណភ្ជាប់ដែល User គ្មានសិទ្ធិប្រើប្រាស់។",
          "**Backend Authorization**: គឺជាកន្លែងការពារសុវត្ថិភាពពិតប្រាកដដែលមិនអាចខ្វះបាន។",
          "ប្រើ Array នៃ Roles (ឧ. `allowedRoles={['admin', 'editor']}`) ដើម្បីភាពបត់បែន។"
        ],
        "codeSnippet": "import { useAuth } from '@/features/auth/hooks/useAuth';\n\ninterface RoleGateProps {\n  allowedRoles: Array<'admin' | 'instructor' | 'student'>;\n  children: React.ReactNode;\n  fallback?: React.ReactNode;\n}\n\nexport function RoleGate({ allowedRoles, children, fallback = null }: RoleGateProps) {\n  const { user } = useAuth();\n\n  if (!user || !allowedRoles.includes(user.role)) {\n    return <>{fallback}</>;\n  }\n\n  return <>{children}</>;\n}\n\n// របៀបប្រើប្រាស់៖\n// <RoleGate allowedRoles={['admin']}>\n//   <button className=\"bg-red-600\">លុបវគ្គសិក្សាចោល</button>\n// </RoleGate>",
        "codeLanguage": "jsx",
        "codeTitle": "Declarative RoleGate Component",
        "pitfall": "ការលាក់ប៊ូតុងនៅលើ Frontend (UI RBAC) គឺសម្រាប់តែបទពិសោធន៍អ្នកប្រើប្រាស់ (UX) ប៉ុណ្ណោះ! អ្នកត្រូវតែការពារ និងផ្ទៀងផ្ទាត់សិទ្ធិនៅលើ Backend API ជានិច្ច ព្រោះ User អាចកែប្រែកូដ JavaScript ក្នុង Browser បាន។"
      },
      {
        "id": "m20-09",
        "number": "09",
        "title": "Secure Logout",
        "summary": "ការចាកចេញដោយសុវត្ថិភាព៖ ការលុប Tokens, ការ Revoke Session លើ Server, និងការសម្អាត Query Cache។",
        "explanation": "ដំណើរការ Logout ប្រកបដោយសុវត្ថិភាពមិនមែនត្រឹមតែជាការលុប State ក្នុង Browser ប៉ុណ្ណោះទេ។ វាទាមទារឱ្យមានការជូនដំណឹងទៅកាន់ Backend Server ដើម្បី Revoke/Blacklist Refresh Token, សម្អាត Storage ក្នុង Client, សម្អាត TanStack Query Cache, និងប្តូរទិសដៅទៅកាន់ទំព័រ Login។",
        "keyPoints": [
          "ហៅ API `POST /api/auth/logout` ដើម្បីឱ្យ Server លុប Session ឬ Refresh Cookie ចោល។",
          "ហៅ `queryClient.clear()` ដើម្បីសម្អាតរាល់ទិន្នន័យសម្ងាត់ទាំងអស់ក្នុង RAM Cache។",
          "Reset Zustand Auth Store ឱ្យមកសភាពដើម (`user: null`, `token: null`)។"
        ],
        "codeSnippet": "import { apiClient } from '@/lib/apiClient';\nimport { queryClient } from '@/lib/queryClient';\nimport { useAuthStore } from '@/features/auth/store/useAuthStore';\n\nexport async function secureLogout() {\n  try {\n    // 1. បញ្ជូនសញ្ញាទៅ Backend ដើម្បី Revoke Refresh Token & សម្អាត Cookie\n    await apiClient.post('/auth/logout');\n  } catch (error) {\n    console.warn('Logout API error, clearing local state anyway:', error);\n  } finally {\n    // 2. សម្អាតរាល់ Cached Queries ក្នុង TanStack Query (ការពារការធ្លាយទិន្នន័យ)\n    queryClient.clear();\n\n    // 3. Reset Local Auth Store\n    useAuthStore.getState().clearAuth();\n\n    // 4. បញ្ជូន User ទៅកាន់ទំព័រ Login\n    window.location.href = '/login';\n  }\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Complete Secure Logout Sequence",
        "proTip": "កុំភ្លេចហៅ `queryClient.clear()` ឬ `queryClient.resetQueries()` ពេល Logout ដើម្បីលុបបំបាត់ទិន្នន័យសម្ងាត់ ឬព័ត៌មានផ្ទាល់ខ្លួនដែលសេសសល់ក្នុង Cache កុំឱ្យ User បន្ទាប់អាចមើលឃើញ!"
      },
      {
        "id": "m20-10",
        "number": "10",
        "title": "Authentication Architecture",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធ Auth Feature កម្រិត Enterprise ឱ្យមានរបៀប (Hooks, Stores, Services, និង Guards)។",
        "explanation": "នៅក្នុងកម្មវិធីខ្នាតធំ (Enterprise Scalable Apps) ការរៀបចំ Directory តាមទម្រង់ **Feature-based Architecture** គឺជាការអនុវត្តល្អបំផុត។ ការប្រមូលផ្តុំរាល់ Components, Hooks, API Services, និង Zustand Stores នៃប្រព័ន្ធ Auth ទៅក្នុង `src/features/auth/` ជួយឱ្យកូដមានរបៀបរៀបរយ និងងាយស្រួល Refactor។",
        "keyPoints": [
          "បំបែកការទទួលខុសត្រូវតាមស្រទាប់ (Layered Responsibilities)៖ Components, Hooks, Services, Types, Stores។",
          "ប្រើប្រាស់ Barrel Export (`index.ts`) ដើម្បី Export តែ Public APIs នៃ Feature នោះ។",
          "ការពារកុំឱ្យកូដ Auth របាត់របាយពាសវាលពាសកាលក្នុងគម្រោង។"
        ],
        "codeSnippet": "src/features/auth/\n├── components/\n│   ├── LoginForm.tsx            // ផ្ទាំង Form ចូលប្រើប្រាស់\n│   ├── RegisterForm.tsx         // ផ្ទាំង Form ចុះឈ្មោះ\n│   ├── ProtectedLayout.tsx      // Route Guard ការពារទំព័រ Private\n│   └── RoleGate.tsx             // Component ពិនិត្យសិទ្ធិ Role\n├── hooks/\n│   └── useAuth.ts               // Custom Hook សម្រាប់ UI ហៅប្រើ\n├── services/\n│   └── authService.ts           // API calls (login, register, refresh, logout)\n├── store/\n│   └── useAuthStore.ts          // Zustand In-Memory Token & Profile Store\n├── types/\n│   └── auth.types.ts            // TypeScript Interfaces (User, Credentials, Tokens)\n└── index.ts                     // Public Barrel Export",
        "codeLanguage": "jsx",
        "codeTitle": "Auth Feature Directory Layout",
        "proTip": "ប្រមូលផ្តុំកូដទាំងអស់ដែលទាក់ទងនឹង Authentication ទៅក្នុង Folder តែមួយ (`features/auth/`) ដើម្បីងាយស្រួលថែទាំ ងាយស្រួលសរសេរ Unit Test និងងាយស្រួលផ្លាស់ប្តូរ Auth Provider ពេលអនាគត។"
      }
    ]
  },
  {
    "id": "module-21",
    "number": "21",
    "title": "Forms & Validation (RHF + Zod)",
    "category": "Enterprise & Production",
    "summary": "ស្វែងយល់ពី React Hook Form, ការចុះឈ្មោះ Inputs (register), ការផ្ទៀងផ្ទាត់ទិន្នន័យជាមួយ Zod Schema Validation, resolvers, Dynamic Fields (useFieldArray), និង Multi-step Form Wizard។",
    "iconName": "CheckSquare",
    "topics": [
      {
        "id": "m21-01",
        "number": "01",
        "title": "Advanced React Forms",
        "summary": "មូលហេតុដែល Uncontrolled Forms ជាមួយ React Hook Form មានល្បឿនលឿនជាង Controlled Forms ធម្មតា។",
        "explanation": "នៅក្នុង React ការបង្កើត Form តាមបែបបុរាណ (Controlled Components ដោយប្រើ `useState` លើគ្រប់ Input) បង្កឱ្យមានបញ្ហា Performance យ៉ាងខ្លាំង៖ រាល់ពេល User ចុចវាយអក្សរមួយតួៗ Component ទាំងមូលត្រូវតែ Re-render ឡើងវិញ។ **React Hook Form (RHF)** ប្រើប្រាស់វិធីសាស្ត្រ Uncontrolled Inputs តាមរយៈ DOM Refs ដោយ Subscribe តែនៅពេលមានកំហុស Validation ប៉ុណ្ណោះ ដែលជួយលុបបំបាត់ Typing Lag ចោលទាំងស្រុង។",
        "keyPoints": [
          "គ្មានភាពយឺតយ៉ាវពេលវាយអក្សរ (Zero Typing Latency) ទោះបីជា Form មានរាប់សិប Field ក៏ដោយ។",
          "កាត់បន្ថយចំនួន Re-renders នៃ Component ឱ្យនៅកម្រិតទាបបំផុត។",
          "រួមបញ្ចូលគ្នាយ៉ាងរលូនជាមួយបណ្ណាល័យ Validation ដូចជា Zod តាមរយៈ Resolvers។"
        ],
        "codeSnippet": "# ដំឡើង React Hook Form, Zod, និង Hookform Resolvers\nnpm install react-hook-form zod @hookform/resolvers",
        "codeLanguage": "bash",
        "codeTitle": "Installing RHF and Zod",
        "proTip": "Controlled Forms ធម្មតា (`value` + `onChange` ជាមួយ `useState`) នឹងបង្ខំឱ្យ Component ទាំងមូល Re-render រាល់ពេល User ចុចវាយអក្សរមួយតួៗ! React Hook Form ប្រើ Uncontrolled Inputs តាមរយៈ DOM Refs ដែលធ្វើឱ្យគ្មាន typing lag ទាល់តែសោះ ទោះជា Form មានរាប់សិបវាលក៏ដោយ។"
      },
      {
        "id": "m21-02",
        "number": "02",
        "title": "Zod Schema Definition",
        "summary": "ការប្រកាស Type-safe Runtime Validation Schema ជាមួយបណ្ណាល័យ Zod និងការទាញយក Type ដោយស្វ័យប្រវត្តិតាមរយៈ z.infer។",
        "explanation": "**Zod** គឺជាបណ្ណាល័យ TypeScript-first សម្រាប់ធ្វើការប្រកាស និងផ្ទៀងផ្ទាត់រចនាសម្ព័ន្ធទិន្នន័យ (Schema Validation) នៅពេល Runtime។ តាមរយៈ Zod យើងអាចកំណត់លក្ខខណ្ឌសុពលភាពច្បាស់លាស់ (ដូចជា ប្រវែងអក្សរ, ទម្រង់អ៊ីមែល, ដែនកំណត់លេខ) ព្រមទាំងសារ Error ផ្ទាល់ខ្លួនជាភាសាខ្មែរ ហើយទាញយក TypeScript Type ដោយស្វ័យប្រវត្តិតាមរយៈ `z.infer`។",
        "keyPoints": [
          "**Single Source of Truth**: កំណត់ Schema តែម្តង បានទាំង Validation Logic និង TypeScript Interface។",
          "ប្រើ `z.coerce.number()` ដើម្បីបំប្លែងតម្លៃ Input String ទៅជា Number ដោយស្វ័យប្រវត្តិ។",
          "ប្រើ `z.infer<typeof schema>` ដើម្បីទាញយក Static TypeScript Type ដោយស្វ័យប្រវត្តិ។"
        ],
        "codeSnippet": "import { z } from 'zod';\n\nexport const studentSchema = z.object({\n  name: z.string().min(2, 'ឈ្មោះត្រូវតែមានយ៉ាងតិច ២ តួអក្សរ'),\n  email: z.string().email('ទម្រង់អ៊ីមែលមិនត្រឹមត្រូវឡើយ'),\n  gpa: z.coerce.number().min(0, 'GPA ត្រូវធំជាង ឬស្មើ ០').max(4.0, 'GPA ត្រូវតូចជាង ឬស្មើ ៤.០'),\n  major: z.enum(['Computer Science', 'Software Engineering', 'Cybersecurity'], {\n    errorMap: () => ({ message: 'សូមជ្រើសរើសជំនាញសិក្សា' }),\n  }),\n  agreeTerms: z.literal(true, {\n    errorMap: () => ({ message: 'អ្នកត្រូវតែយល់ព្រមតាមលក្ខខណ្ឌ' }),\n  }),\n});\n\n// ទាញយក TypeScript Type ដោយស្វ័យប្រវត្តិពី Schema:\nexport type StudentFormData = z.infer<typeof studentSchema>;",
        "codeLanguage": "jsx",
        "codeTitle": "Complete Zod Validation Schema",
        "proTip": "ជាមួយ Zod អ្នកកំណត់ Schema តែម្តងគត់ គឺទទួលបានទាំង Runtime Validation ត្រួតពិនិត្យទិន្នន័យ (Min length, Email, Number coerce) និងទទួលបាន Static TypeScript Type តាមរយៈ `z.infer<typeof schema>` ដោយមិនចាំបាច់សរសេរ Type ស្ទួនឡើយ (Single Source of Truth)។"
      },
      {
        "id": "m21-03",
        "number": "03",
        "title": "React Hook Form + Zod Resolver",
        "summary": "ការតភ្ជាប់ Zod Validation Schema ជាមួយ Hook useForm តាមរយៈ zodResolver។",
        "explanation": "ការរួមបញ្ចូលគ្នារវាង React Hook Form និង Zod ត្រូវបានសម្រេចឡើងតាមរយៈកញ្ចប់ `@hookform/resolvers/zod`។ តាមរយៈការកំណត់ `resolver: zodResolver(mySchema)` នៅក្នុង Hook `useForm` រាល់ពេលដែល User ចុច Submit ឬចាកចេញពី Input (onBlur) Zod នឹងពិនិត្យសុពលភាព ហើយបញ្ជូន Error ចូលទៅក្នុង `formState.errors` ដោយស្វ័យប្រវត្តិ។",
        "keyPoints": [
          "បញ្ជូន Generic Type `<StudentFormData>` ទៅកាន់ `useForm` ដើម្បីទទួលបាន Type-safety ពេញលេញ។",
          "អនុគមន៍ `handleSubmit(onSubmit)` ធានាថា `onSubmit` នឹងត្រូវហៅតែពេលទិន្នន័យត្រឹមត្រូវ 100%។",
          "ស្រង់យក `errors` និង `isSubmitting` ពី `formState` សម្រាប់គ្រប់គ្រង UI។"
        ],
        "codeSnippet": "import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\nimport { studentSchema, type StudentFormData } from './studentSchema';\n\nexport function StudentForm() {\n  const {\n    register,\n    handleSubmit,\n    formState: { errors, isSubmitting },\n    reset,\n  } = useForm<StudentFormData>({\n    resolver: zodResolver(studentSchema),\n    defaultValues: {\n      name: '',\n      email: '',\n      gpa: 3.5,\n    },\n  });\n\n  const onSubmit = async (data: StudentFormData) => {\n    // data ទទួលបាន Type ត្រឹមត្រូវ 100% ពី Zod!\n    await studentService.create(data);\n    reset(); // Reset form ក្រោយ save ជោគជ័យ\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)} className=\"space-y-4\">\n      {/* Inputs នានា... */}\n    </form>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "useForm with zodResolver",
        "proTip": "ការប្រើ `resolver: zodResolver(schema)` ធ្វើឱ្យ `handleSubmit(onSubmit)` ដំណើរការតែនៅពេលដែលទិន្នន័យទាំងអស់ឆ្លងកាត់ការផ្ទៀងផ្ទាត់របស់ Zod ដោយជោគជ័យប៉ុណ្ណោះ។ បើមានកំហុស វានឹង Populate ចូលក្នុង `formState.errors` ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m21-04",
        "number": "04",
        "title": "Form Registration ({...register})",
        "summary": "ការភ្ជាប់ Native Input Elements ទៅកាន់ React Hook Form តាមរយៈ {...register('fieldName')}។",
        "explanation": "ដើម្បីភ្ជាប់ Native HTML Input (ដូចជា `<input>`, `<select>`, `<textarea>`) ទៅកាន់ React Hook Form យើងប្រើប្រាស់អនុគមន៍ `register('fieldName')`។ អនុគមន៍នេះនឹង return នូវ Object មួយដែលមាន `name`, `ref`, `onChange`, និង `onBlur` ដែលយើងអាច Spread ចូលទៅក្នុង Input Element បានយ៉ាងរហ័ស។",
        "keyPoints": [
          "ប្រើប្រាស់ `{...register('fieldName')}` ដោយផ្ទាល់លើ Native Elements។",
          "អានសារ Error តាមរយៈ `errors.fieldName?.message`។",
          "មិនបាច់សរសេរ `value={...}` ឬ `onChange={(e) => ...}` ដោយផ្ទាល់ដៃឡើយ។"
        ],
        "codeSnippet": "<div className=\"space-y-1\">\n  <label className=\"block text-sm font-medium text-slate-300\">ឈ្មោះសិស្ស</label>\n  <input \n    {...register('name')} \n    placeholder=\"បញ្ចូលឈ្មោះពេញ...\"\n    className=\"w-full bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-white focus:ring-2 focus:ring-blue-500\" \n  />\n  {errors.name && (\n    <p className=\"text-xs text-rose-400 mt-1\">{errors.name.message}</p>\n  )}\n</div>",
        "codeLanguage": "jsx",
        "codeTitle": "Input Registration and Error Display",
        "proTip": "`register('name')` នឹង return នូវ `name`, `ref`, `onChange`, និង `onBlur`។ ការប្រើ Spread Syntax `{...register('name')}` ជួយឱ្យអ្នកមិនបាច់សរសេរ State handlers ដោយផ្ទាល់ដៃឡើយ។"
      },
      {
        "id": "m21-05",
        "number": "05",
        "title": "Dynamic Form Arrays (useFieldArray)",
        "summary": "ការគ្រប់គ្រងបញ្ជី Input ដែលអាចបន្ថែម និងលុបបានតាមចិត្ត (Dynamic Fields) ដូចជា Invoice Items ឬ Phone Numbers តាមរយៈ useFieldArray។",
        "explanation": "នៅក្នុងទម្រង់បែបបទស្មុគស្មាញ (ដូចជា ការបង្កើតវិក្កយបត្រ Invoice ដែលមានទំនិញច្រើនមុខ ឬការបញ្ចូលលេខទូរស័ព្ទច្រើនខ្សែ) ចំនួន Inputs មិនថេរនោះទេ។ Hook `useFieldArray` ផ្តល់នូវអនុគមន៍ជំនួយជាច្រើនដូចជា `append()`, `remove()`, `insert()`, និង `move()` សម្រាប់គ្រប់គ្រង Dynamic Array Fields យ៉ាងមានប្រសិទ្ធភាព។",
        "keyPoints": [
          "ភ្ជាប់ជាមួយ `control` ពី `useForm()` និងបញ្ជាក់ `name` នៃ Array Property។",
          "ត្រូវតែប្រើ `key={field.id}` ជានិច្ចនៅពេល render បញ្ជីជួរដេក។",
          "ចុះឈ្មោះ Field តាមរយៈ Template Literal៖ `register(\\`items.\\${index}.name\\`)`។"
        ],
        "codeSnippet": "import { useForm, useFieldArray } from 'react-hook-form';\n\nexport function InvoiceForm() {\n  const { register, control, handleSubmit } = useForm();\n  \n  const { fields, append, remove } = useFieldArray({\n    control,\n    name: 'items',\n  });\n\n  return (\n    <div className=\"space-y-3\">\n      {fields.map((field, index) => (\n        <div key={field.id} className=\"flex gap-2 items-center\">\n          <input \n            {...register(`items.${index}.description`)} \n            placeholder=\"ឈ្មោះទំនិញ\" \n            className=\"bg-slate-900 border border-slate-700 p-2 rounded\"\n          />\n          <input \n            type=\"number\"\n            {...register(`items.${index}.price`)} \n            placeholder=\"តម្លៃ\" \n            className=\"w-24 bg-slate-900 border border-slate-700 p-2 rounded\"\n          />\n          <button \n            type=\"button\" \n            onClick={() => remove(index)}\n            className=\"text-red-400 hover:text-red-300\"\n          >\n            លុប\n          </button>\n        </div>\n      ))}\n\n      <button \n        type=\"button\" \n        onClick={() => append({ description: '', price: 0 })}\n        className=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm\"\n      >\n        + បន្ថែមទំនិញ\n      </button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Dynamic Inputs with useFieldArray",
        "proTip": "នៅពេល Map បង្ហាញ fields ត្រូវតែប្រើ `field.id` ជា React `key` ជានិច្ច (ដូចជា `key={field.id}`) កុំប្រើ `index` ជា key ឱ្យសោះ ដើម្បីកុំឱ្យមានបញ្ហាច្រឡំតម្លៃពេលលុប ឬរៀបលំដាប់ជួរឡើងវិញ!"
      },
      {
        "id": "m21-06",
        "number": "06",
        "title": "Multi-Step Form Wizard",
        "summary": "ការបែងចែក Form វែងៗជាដំណាក់កាលៗ (Multi-step) និងការផ្ទៀងផ្ទាត់ទិន្នន័យជាជំហានៗដោយប្រើ trigger()។",
        "explanation": "នៅពេលដែល Form មានទិន្នន័យច្រើន ដូចជាដំណើរការចុះឈ្មោះក្រុមហ៊ុន ឬការទិញទំនិញ (Checkout) ការបំបែក Form នោះជាដំណាក់កាលៗ (Wizard: ព័ត៌មានផ្ទាល់ខ្លួន -> អាសយដ្ឋាន -> ការទូទាត់) ជួយសម្រួលដល់ User យ៉ាងខ្លាំង។ អនុគមន៍ `trigger()` របស់ React Hook Form អនុញ្ញាតឱ្យយើង Validate តែ Fields នៃជំហានបច្ចុប្បន្នមុននឹងបន្តទៅមុខ។",
        "keyPoints": [
          "រក្សាទុកទិន្នន័យទាំងអស់ក្នុង `useForm` តែមួយគត់ ដើម្បីកុំឱ្យបាត់បង់ទិន្នន័យពេលប្តូរជំហាន។",
          "ប្រើ `trigger(['fieldA', 'fieldB'])` ដើម្បីពិនិត្យសុពលភាពមុននឹងអនុញ្ញាតឱ្យទៅ `step + 1`។",
          "ហៅ `handleSubmit(onSubmit)` ចុងក្រោយបង្អស់តែនៅជំហានបញ្ចប់ប៉ុណ្ណោះ។"
        ],
        "codeSnippet": "export function MultiStepWizard() {\n  const [step, setStep] = useState(1);\n  const { register, trigger, handleSubmit } = useForm<FormFields>();\n\n  const handleNext = async () => {\n    let isValid = false;\n    \n    if (step === 1) {\n      // ផ្ទៀងផ្ទាត់តែ Field ក្នុងជំហានទី ១ ប៉ុណ្ណោះ\n      isValid = await trigger(['name', 'email']);\n    } else if (step === 2) {\n      // ផ្ទៀងផ្ទាត់តែ Field ក្នុងជំហានទី ២\n      isValid = await trigger(['address', 'city']);\n    }\n\n    if (isValid) {\n      setStep((s) => s + 1);\n    }\n  };\n\n  return (\n    <div>\n      {step === 1 && <StepOne register={register} />}\n      {step === 2 && <StepTwo register={register} />}\n      {step === 3 && <StepThree register={register} />}\n      \n      <button type=\"button\" onClick={handleNext}>បន្ទាប់ ➔</button>\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Step Validation with trigger()",
        "proTip": "ប្រើប្រាស់ `await trigger(['field1', 'field2'])` ដើម្បីផ្ទៀងផ្ទាត់តែវាលទិន្នន័យក្នុងជំហានបច្ចុប្បន្នប៉ុណ្ណោះ មុនពេលអនុញ្ញាតឱ្យ User ចុចប៊ូតុង 'បន្ទាប់' (Next Step) ដោយមិនបាច់ Validate Form ទាំងមូលក្នុងពេលតែមួយឡើយ។"
      },
      {
        "id": "m21-07",
        "number": "07",
        "title": "Reusable RHF Field Components",
        "summary": "ការភ្ជាប់ Custom UI Widgets (ដូចជា Radix Select, DatePicker, Switch) ទៅកាន់ React Hook Form តាមរយៈ Component Controller។",
        "explanation": "UI Components មួយចំនួនក្នុង Design System សម័យទំនើប (ដូចជា Radix Select, Dropdown, Toggle Switch, ឬ DatePicker) មិនមែនជា Native HTML `<input>` ឡើយ ដូច្នេះពួកវាមិនអាចប្រើ `{...register()}` ដោយផ្ទាល់បានទេ។ ដើម្បីដោះស្រាយបញ្ហានេះ React Hook Form ផ្តល់នូវ Component ពិសេសមួយឈ្មោះថា `<Controller>` សម្រាប់ដើរតួជាស្ពានចម្លង State។",
        "keyPoints": [
          "ប្រើ `<Controller>` សម្រាប់គ្រប់គ្រង Non-native ឬ Controlled UI Components។",
          "Render prop ផ្តល់នូវ `{ field: { value, onChange, onBlur, ref }, fieldState: { error } }`។",
          "ជួយរក្សាភាពស៊ីសង្វាក់គ្នានៃ Design System ជាមួយ Validation របស់ RHF + Zod។"
        ],
        "codeSnippet": "import { Controller, useForm } from 'react-hook-form';\nimport { CustomSelect } from '@/components/ui/CustomSelect';\n\nexport function SettingsForm() {\n  const { control, handleSubmit } = useForm();\n\n  return (\n    <form onSubmit={handleSubmit(console.log)}>\n      <Controller\n        name=\"theme\"\n        control={control}\n        defaultValue=\"dark\"\n        render={({ field, fieldState }) => (\n          <div>\n            <label>ជ្រើសរើស Theme</label>\n            <CustomSelect\n              value={field.value}\n              onChange={field.onChange}\n              options={[\n                { label: 'ងងឹត (Dark)', value: 'dark' },\n                { label: 'ភ្លឺ (Light)', value: 'light' },\n              ]}\n            />\n            {fieldState.error && <p className=\"text-red-500\">{fieldState.error.message}</p>}\n          </div>\n        )}\n      />\n    </form>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Controlled Custom Widget via Controller",
        "proTip": "សម្រាប់ Custom Components នៃ Design System ដែលមិន expose native input `ref` (ដូចជា Custom Dropdown ឬ Rich Text Editor) ចូរប្រើ `<Controller name='...' control={control} render={({ field }) => ...} />` ដើម្បីផ្សារភ្ជាប់ State ជាមួយ React Hook Form ដោយរលូន។"
      }
    ]
  },
  {
    "id": "module-22",
    "number": "22",
    "title": "UI Architecture",
    "category": "Enterprise & Production",
    "summary": "ស្ថាបត្យកម្ម Design System, រចនាសម្ព័ន្ធបែប Shadcn UI, Component Variants ជាមួយ CVA, Responsive Layout Systems, Dark Mode Implementation, និង Accessibility (a11y)។",
    "iconName": "Palette",
    "topics": [
      {
        "id": "m22-01",
        "number": "01",
        "title": "Design System Foundations",
        "summary": "ការកំណត់ Design Tokens (Colors, Spacing, Typography, Radius) និងការប្រើប្រាស់ CSS Variables សម្រាប់ Design System ទាំងមូល។",
        "explanation": "ប្រព័ន្ធ Design System ដ៏រឹងមាំជួយធ្វើឱ្យរចនាបថ និងភាសាមើលឃើញ (Visual Language) មានភាពស៊ីសង្វាក់គ្នានៅទូទាំងក្រុមការងារវិស្វកម្មទាំងមូល។ នេះត្រូវបានសម្រេចឡើងតាមរយៈការបង្កើត **Design Tokens** សម្រាប់ពណ៌ (Colors), គម្លាត (Spacing), កម្រិតកោង (Border Radius), និងស្រមោល (Elevation) ដោយប្រើប្រាស់ CSS Variables។",
        "keyPoints": [
          "ប្រើប្រាស់ CSS Variables ជាមួយតម្លៃពណ៌ HSL ជួយសម្រួលដល់ការប្តូរ Dark/Light Themes។",
          "ដាក់ឈ្មោះពណ៌តាមតួនាទី Semantics (ដូចជា `primary`, `secondary`, `muted`, `accent`, `destructive`) ជៀសវាងការដាក់ឈ្មោះតាមពណ៌ជាក់ស្តែង (ដូចជា `blue-500`)។",
          "ភ្ជាប់ CSS Variables ទៅក្នុង `tailwind.config.js` ដើម្បីអាចហៅប្រើជាមួយ Tailwind Utility Classes។"
        ],
        "codeSnippet": "@layer base {\n  :root {\n    /* Light Mode Tokens */\n    --background: 0 0% 100%;\n    --foreground: 222.2 84% 4.9%;\n    --primary: 221.2 83.2% 53.3%;\n    --primary-foreground: 210 40% 98%;\n    --destructive: 0 84.2% 60.2%;\n  }\n\n  .dark {\n    /* Dark Mode Tokens */\n    --background: 222.2 84% 4.9%;\n    --foreground: 210 40% 98%;\n    --primary: 217.2 91.2% 59.8%;\n    --primary-foreground: 222.2 47.4% 11.2%;\n    --destructive: 0 62.8% 30.6%;\n  }\n}",
        "codeLanguage": "css",
        "codeTitle": "CSS Variable Design Tokens",
        "proTip": "ការប្រើប្រាស់ទម្រង់ពណ៌ HSL (Hue, Saturation, Lightness) នៅក្នុង CSS Variables (ដូចជា `--background: 222.2 84% 4.9%`) ជួយឱ្យអ្នកអាចប្តូរ Dark Mode ឬអនុវត្តពណ៌ថ្លា (Opacity `/80`) ក្នុង Tailwind CSS បានយ៉ាងងាយស្រួលបំផុត។"
      },
      {
        "id": "m22-02",
        "number": "02",
        "title": "Component Variants with CVA",
        "summary": "ការគ្រប់គ្រង Style Permutations នៃ Component (Sizes, Variants, States) ដោយស្អាត និងមាន Type-Safety ជាមួយ Class Variance Authority (CVA)។",
        "explanation": "បណ្ណាល័យ **Class Variance Authority (`cva`)** គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់គ្រប់គ្រងបន្សំនៃ Styles (Variants, Sizes, States) របស់ Component ដោយគ្មានការសរសេរលក្ខខណ្ឌ Ternary `? :` ឬ String Concatenation ដ៏ស្មុគស្មាញឡើយ។ CVA នឹងបង្កើត TypeScript Types ដោយស្វ័យប្រវត្តិស្របតាម Props ដែលបានកំណត់។",
        "keyPoints": [
          "កំណត់ Base Styles ដែលចែករំលែករួមគ្នាក្នុង Component។",
          "កំណត់ Variants (ដូចជា `variant: { default, ghost, outline }` និង `size: { sm, md, lg }`)។",
          "កំណត់ `defaultVariants` សម្រាប់ករណីដែល User មិនបានបញ្ជាក់ Prop។",
          "ប្រើប្រាស់ `VariantProps<typeof componentVariants>` សម្រាប់ TypeScript Interface។"
        ],
        "codeSnippet": "import { cva, type VariantProps } from 'class-variance-authority';\nimport { cn } from '@/lib/utils';\n\nexport const buttonVariants = cva(\n  'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none',\n  {\n    variants: {\n      variant: {\n        default: 'bg-blue-600 text-white hover:bg-blue-700',\n        ghost: 'hover:bg-slate-800 text-slate-300',\n        outline: 'border border-slate-700 hover:bg-slate-800 text-slate-200',\n        destructive: 'bg-rose-600 text-white hover:bg-rose-700',\n      },\n      size: {\n        sm: 'h-8 px-3 text-xs',\n        md: 'h-10 px-4 text-sm',\n        lg: 'h-12 px-6 text-base',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n      size: 'md',\n    },\n  }\n);",
        "codeLanguage": "jsx",
        "codeTitle": "CVA Button Variants",
        "proTip": "CVA គឺជាស្តង់ដារឧស្សាហកម្មដែលប្រើក្នុង Shadcn UI។ វាជួយការពារកុំឱ្យមានការតភ្ជាប់ String (String concatenation) រញ៉េរញ៉ៃ និងផ្តល់នូវ TypeScript Types ត្រឹមត្រូវសម្រាប់ Props ដូចជា `variant='outline'` និង `size='lg'`។"
      },
      {
        "id": "m22-03",
        "number": "03",
        "title": "Responsive UI Architecture",
        "summary": "ការរចនា Layout បែប Mobile-First ដោយប្រើប្រាស់ Tailwind Breakpoints (sm, md, lg, xl)។",
        "explanation": "នៅក្នុងការអភិវឌ្ឍ UI ទំនើប គោលការណ៍ **Mobile-First** គឺជាកាតព្វកិច្ចចម្បង។ នៅក្នុង Tailwind CSS រាល់ Class ធម្មតាដែលគ្មាន prefix (ដូចជា `w-full`, `p-4`, `grid-cols-1`) គឺអនុវត្តលើអេក្រង់តូចបំផុត (ទូរស័ព្ទដៃ)។ Breakpoint prefixes ដូចជា `sm:`, `md:`, `lg:`, `xl:` ត្រូវបានប្រើសម្រាប់បន្ថែម និងកែលម្អ Layout លើអេក្រង់ធំៗជាបន្តបន្ទាប់។",
        "keyPoints": [
          "**Mobile-First**: ចាប់ផ្តើមពីអេក្រង់តូច (`col-span-1`) រួចពង្រីកលើអេក្រង់ធំ (`md:col-span-2`, `lg:col-span-3`)។",
          "ជៀសវាង Fixed Pixel Widths ដែលបណ្តាលឱ្យបែកប្លង់ ឬកើតមានរបារ Horizontal Scrollbar លើទូរស័ព្ទ។",
          "ប្រើ Flexbox និង CSS Grid ជាមួយ Fluid Gap (`gap-4 md:gap-6`)។"
        ],
        "codeSnippet": "// Layout បែប Mobile-First៖\n// - ទូរស័ព្ទ៖ បង្ហាញ ១ ជួរឈរ (grid-cols-1)\n// - Tablet (>=768px)៖ បង្ហាញ ២ ជួរឈរ (md:grid-cols-2)\n// - Desktop (>=1024px)៖ បង្ហាញ ៤ ជួរឈរ (lg:grid-cols-4)\nexport function CourseGrid({ courses }: CourseGridProps) {\n  return (\n    <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6\">\n      {courses.map((course) => (\n        <CourseCard key={course.id} course={course} />\n      ))}\n    </div>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Mobile-First Grid Layout",
        "proTip": "តែងតែរចនាទម្រង់អេក្រង់ទូរស័ព្ទ (Mobile-First) ជាមុនសិន (`grid-cols-1`) រួចពង្រីកទៅកាន់ Tablet (`md:grid-cols-2`) និង Desktop (`lg:grid-cols-4`)។ ជៀសវាងការដាក់កម្ពស់ ឬទទឹងជា Fixed Pixels (`w-[500px]`) ដែលបណ្តាលឱ្យហៀរអេក្រង់លើទូរស័ព្ទ (Horizontal Scroll)។"
      },
      {
        "id": "m22-04",
        "number": "04",
        "title": "Dark Mode Implementation",
        "summary": "ការបង្កើតមុខងារ Dark Mode តាមរយៈ CSS Class (.dark), ការរក្សាទុកក្នុង localStorage, និងការចាប់យក System Preference។",
        "explanation": "ការអនុវត្ត Dark Mode ប្រកបដោយវិជ្ជាជីវៈនៅក្នុង React និង Tailwind CSS ត្រូវបានធ្វើឡើងតាមរយៈ **Class Strategy**។ នៅពេលដែលអ្នកប្រើប្រាស់ប្តូរ Theme យើងគ្រាន់តែបន្ថែម ឬដក Class `.dark` ចេញពី `<html>` element រួចរក្សាទុកជម្រើសនោះក្នុង `localStorage` ដើម្បីកុំឱ្យបាត់ពេល Refresh Page។",
        "keyPoints": [
          "កំណត់ `darkMode: 'class'` នៅក្នុង `tailwind.config.js`។",
          "ប្រើប្រាស់ `dark:` modifier ក្នុង Tailwind (ឧទាហរណ៍៖ `bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100`)។",
          "ពិនិត្យមើលជម្រើសរបស់ប្រព័ន្ធប្រតិបត្តិការតាមរយៈ `window.matchMedia('(prefers-color-scheme: dark)')`។"
        ],
        "codeSnippet": "export function toggleDarkMode() {\n  const isDark = document.documentElement.classList.toggle('dark');\n  localStorage.setItem('theme', isDark ? 'dark' : 'light');\n}\n\n// ដំណើរការពិនិត្យពេល App ចាប់ផ្តើមដំណើរការដំបូង៖\nexport function initTheme() {\n  const savedTheme = localStorage.getItem('theme');\n  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {\n    document.documentElement.classList.add('dark');\n  } else {\n    document.documentElement.classList.remove('dark');\n  }\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Dark Mode Class Toggle",
        "proTip": "ប្រើប្រាស់ Class-based Dark Mode (`class` strategy ក្នុង Tailwind) ដោយបន្ថែម ឬដក class `.dark` លើ `<html>` element។ កុំភ្លេចពិនិត្យមើល `window.matchMedia('(prefers-color-scheme: dark)')` ដើម្បីកំណត់ Theme ស្របតាមប្រព័ន្ធប្រតិបត្តិការរបស់ User ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m22-05",
        "number": "05",
        "title": "Accessibility (a11y)",
        "summary": "ការបង្កើត UI ដែលគាំទ្រ Accessibility (A11y) រួមមាន Color Contrast, Screen Readers, Semantic HTML Tags, និង Keyboard Focus Rings។",
        "explanation": "**Web Accessibility (a11y)** ធានាថាមនុស្សគ្រប់រូប រួមទាំងអ្នកដែលមានពិការភាពភ្នែក ឬពិការភាពរាងកាយ អាចប្រើប្រាស់ និងបញ្ជាកម្មវិធីរបស់អ្នកបានយ៉ាងពេញលេញតាមរយៈ Screen Readers និង Keyboard។ នេះរួមបញ្ចូលទាំងកម្រិតពណ៌កម្រិតពន្លឺ (Color Contrast យ៉ាងហោចណាស់ 4.5:1), Semantic HTML Tags, និងការកំណត់ Focus Indicators។",
        "keyPoints": [
          "ប្រើប្រាស់ Semantic HTML Elements (`<nav>`, `<header>`, `<main>`, `<button>`) ជំនួសឱ្យការប្រើ `<div>` នៅគ្រប់កន្លែង។",
          "ត្រូវតែផ្តល់ `aria-label` សម្រាប់ប៊ូតុងណាដែលមានតែ Icon (គ្មានអក្សរ) ដូចជាប៊ូតុងបិទផ្ទាំង Dialog។",
          "ប្រើប្រាស់ `focus-visible:ring-2` ដើម្បីបង្ហាញរង្វង់ព័ទ្ធជុំវិញនៅពេលបញ្ជាតាម Keyboard។"
        ],
        "codeSnippet": "import { X } from 'lucide-react';\n\nexport function CloseButton({ onClick }: { onClick: () => void }) {\n  return (\n    <button \n      onClick={onClick}\n      aria-label=\"បិទផ្ទាំងសន្ទនា\" // ចាំបាច់សម្រាប់ Screen Readers ពេលប៊ូតុងគ្មានអត្ថបទ\n      className=\"p-2 rounded-lg text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors\"\n    >\n      <X className=\"w-5 h-5\" />\n    </button>\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Accessible Focus Ring",
        "proTip": "កុំលុប `outline: none` ចោលដោយមិនបានជំនួសដោយ `:focus-visible` ring ឱ្យសោះ! អ្នកប្រើប្រាស់ដែលបញ្ជាតាម Keyboard ត្រូវការ Focus Ring ច្បាស់លាស់ដើម្បីដឹងថា Cursor កំពុងស្ថិតនៅលើប៊ូតុង ឬ Input ណាមួយ។"
      }
    ]
  },
  {
    "id": "module-23",
    "number": "23",
    "title": "React Project Architecture",
    "category": "Enterprise & Production",
    "summary": "រចនាសម្ព័ន្ធ Folder ដែលអាចពង្រីកបាន (Scalable Folder Structures), ស្ថាបត្យកម្ម Feature-based, Shared Services, ការរៀបចំ Types, Path Aliases (@/), និងស្តង់ដារ Configuration Hygiene។",
    "iconName": "FolderTree",
    "topics": [
      {
        "id": "m23-01",
        "number": "01",
        "title": "Feature-Based Architecture",
        "summary": "ការរៀបចំរចនាសម្ព័ន្ធកម្មវិធីតាម Business Domain (Features) ជំនួសឱ្យការបែងចែកតាមប្រភេទឯកសារបច្ចេកទេស (File Types)។",
        "explanation": "នៅក្នុងគម្រោងខ្នាតធំ (Enterprise Scale) ការរៀបចំ Folder តាមប្រភេទឯកសារបច្ចេកទេស (Technical Layering ដូចជា ដាក់គ្រប់ Components ទាំងអស់ក្នុង `src/components/`, គ្រប់ Hooks ក្នុង `src/hooks/`) នឹងធ្វើឱ្យពិបាកស្វែងរកកូដនៅពេលគម្រោងកើនឡើងដល់រាប់រយឯកសារ។ **Feature-Based Architecture** ដោះស្រាយបញ្ហានេះដោយប្រមូលផ្តុំកូដដែលទាក់ទងគ្នាទៅតាមមុខងារអាជីវកម្ម (Business Domain) ដូចជា Auth, Products, Cart, និង Checkout។",
        "keyPoints": [
          "**Colocation**: ដាក់ Components, Hooks, API Services, និង Types ដែលដំណើរការរួមគ្នាឱ្យនៅជិតគ្នាបំផុត។",
          "កាត់បន្ថយការភ័ន្តច្រឡំផ្លូវចិត្ត (Mental Overhead) របស់ Developer នៅពេលបង្កើត ឬកែប្រែមុខងារមួយ។",
          "ងាយស្រួលលុបមុខងារ (Delete Feature) ចេញពីគម្រោងដោយមិនបន្សល់ទុក Dead Code នៅកន្លែងផ្សេងឡើយ។"
        ],
        "codeSnippet": "src/\n├── app/                  # Route Pages និង Layouts (Next.js App Router)\n├── components/ui/        # Reusable Design System Primitives (Button, Modal, Input)\n├── features/             # ម៉ូឌុលមុខងារនីមួយៗ (Feature Slices)\n│   ├── auth/             # LoginForm, useAuth, authService, authStore\n│   ├── catalog/          # ProductList, CategoryFilter, useProducts, productService\n│   └── cart/             # CartDrawer, CartItem, useCartStore\n├── lib/                  # Shared Utilities (cn helper, axios client, date formatters)\n└── types/                # Global TypeScript Type Definitions",
        "codeLanguage": "jsx",
        "codeTitle": "Enterprise Feature-Based Layout",
        "proTip": "កុំដាក់ឯកសារទាំងអស់ច្របូកច្របល់ក្នុង folders ធំៗដូចជា `components/`, `hooks/`, `services/` ដែលមានរាប់រយ files ឱ្យសោះ! ចូរប្រមូលផ្តុំ components, hooks, types, និង services នៃមុខងារមួយទៅក្នុង folder តែមួយ (ដូចជា `features/auth/`, `features/cart/`) ដើម្បីងាយស្រួលអភិវឌ្ឍ និងលុបចេញពេលលែងត្រូវការ។"
      },
      {
        "id": "m23-02",
        "number": "02",
        "title": "Path Aliases",
        "summary": "ការលុបបំបាត់ Relative Paths ដ៏វែងអន្លាយ (`../../../../`) តាមរយៈការកំណត់ Path Aliases `@/*` ក្នុង tsconfig.json។",
        "explanation": "ការប្រើប្រាស់ Relative Paths ដ៏វែងអន្លាយដូចជា `import { Button } from '../../../../components/ui/button'` មិនត្រឹមតែមើលទៅច្របូកច្របល់ប៉ុណ្ណោះទេ ប៉ុន្តែវាងាយនឹងបណ្តាលឱ្យខូច (Broken Imports) យ៉ាងខ្លាំងនៅពេលអ្នកផ្លាស់ប្តូរទីតាំងឯកសារ។ តាមរយៈការកំណត់ **Path Aliases** (`@/*`) នៅក្នុង `tsconfig.json` យើងអាច Import ពី Root `src/` ដោយផ្ទាល់ពីគ្រប់ទីកន្លែង។",
        "keyPoints": [
          "កំណត់ `baseUrl: \".\"` និង `paths: { \"@/*\": [\"./src/*\"] }` ក្នុង `tsconfig.json`។",
          "ជួយឱ្យការ Refactor ឬចម្លងកូដរវាង Folders មានភាពរលូន និងគ្មានកំហុស។",
          "អាចកំណត់ Aliases បន្ថែមដូចជា `@components/*` ឬ `@features/*` តាមការចង់បាន។"
        ],
        "codeSnippet": "// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"],\n      \"@components/*\": [\"./src/components/*\"],\n      \"@features/*\": [\"./src/features/*\"]\n    }\n  }\n}\n\n// របៀប Import ស្អាត និងមានរបៀប៖\n// import { Button } from '@/components/ui/button';\n// import { useAuth } from '@/features/auth';",
        "codeLanguage": "json",
        "codeTitle": "Path Alias tsconfig Configuration",
        "proTip": "ការប្រើប្រាស់ `@/*` ជួយឱ្យកូដ Import មើលទៅស្អាត មានលក្ខណៈស្តង់ដារ និងធ្វើឱ្យការផ្លាស់ប្តូរទីតាំងឯកសារ (Move/Refactor files) មិនបណ្តាលឱ្យខូច Broken Import Paths ឡើយ។"
      },
      {
        "id": "m23-03",
        "number": "03",
        "title": "Configuration Hygiene",
        "summary": "ការកំណត់ស្តង់ដារ TypeScript Strict Mode, ESLint, Prettier, និង Environment Variables ដើម្បីទប់ស្កាត់ Bugs មុនពេល Push កូដ។",
        "explanation": "ការកំណត់ស្តង់ដារអភិវឌ្ឍន៍ (Tooling & Configuration) តាំងពីថ្ងៃដំបូង គឺជាការវិនិយោគដ៏មានតម្លៃបំផុតសម្រាប់គម្រោង។ ការបើកដំណើរការ **TypeScript Strict Mode**, ការកំណត់ច្បាប់ **ESLint** សម្រាប់ React Hooks, និងការប្រើ **Prettier** សម្រាប់ Formatting ជួយលុបបំបាត់ Bugs និងរក្សាគុណភាពកូដឱ្យមានស្តង់ដារខ្ពស់ស្មើគ្នានៅទូទាំងក្រុមការងារ។",
        "keyPoints": [
          "**Strict Mode**: បើកដំណើរការ Type Checking កម្រិតខ្ពស់បំផុត (`\"strict\": true`)។",
          "**Unchecked Indexes**: ប្រើ `\"noUncheckedIndexedAccess\": true` ដើម្បីការពារ Bug `Cannot read properties of undefined`។",
          "**Husky & Lint-staged**: រត់ Lint និង Format ពិនិត្យកូដដោយស្វ័យប្រវត្តិតាមរយៈ Git Pre-commit Hooks។"
        ],
        "codeSnippet": "// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"lib\": [\"dom\", \"dom.iterable\", \"esnext\"],\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"noImplicitOverride\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"skipLibCheck\": true\n  }\n}",
        "codeLanguage": "json",
        "codeTitle": "Strict TypeScript Configuration",
        "proTip": "តែងតែបើក `\"strict\": true` និង `\"noUncheckedIndexedAccess\": true` នៅក្នុង `tsconfig.json` ដើម្បីបង្ខំឱ្យ TypeScript ត្រួតពិនិត្យករណី `undefined` ពេលចូលប្រើ Arrays ឬ Objects ជៀសវាង Runtime Crash លើ Production។"
      }
    ]
  },
  {
    "id": "module-24",
    "number": "24",
    "title": "Testing",
    "category": "Enterprise & Production",
    "summary": "ទស្សនវិជ្ជានៃការធ្វើតេស្ត (Testing Philosophy), ការប្រើប្រាស់ Vitest, React Testing Library (RTL), ការធ្វើតេស្តលើ User Interactions, ការ Mocking API Requests តាមរយៈ MSW, និងការរៀបចំរចនាសម្ព័ន្ធ Tests។",
    "iconName": "TestTube2",
    "topics": [
      {
        "id": "m24-01",
        "number": "01",
        "title": "Testing Philosophy",
        "summary": "ពីរ៉ាមីតនៃការធ្វើតេស្ត (Testing Pyramid)៖ Unit Tests, Component Integration Tests, និង End-to-End (E2E) Tests។",
        "explanation": "គោលការណ៍ស្នូលនៃការធ្វើតេស្តកម្មវិធី React ទំនើប គឺការធ្វើតេស្តលើកម្មវិធីរបស់អ្នកតាមរបៀបដែលអ្នកប្រើប្រាស់ពិតប្រាកដប្រាស្រ័យទាក់ទងជាមួយវា។ ជំនួសឱ្យការធ្វើតេស្តលម្អិតលើ Implementation Details (ដូចជា ឈ្មោះ State ឬឈ្មោះ Internal Methods ដែលងាយនឹងខូចពេល Refactor) យើងផ្តោតលើអ្វីដែលបង្ហាញនៅលើអេក្រង់ (DOM Output) និងប្រតិកម្មចំពោះសកម្មភាពចុច ឬវាយអក្សររបស់ User។",
        "keyPoints": [
          "**Unit Tests**: ធ្វើតេស្តលើ Pure Functions, Math Calculations, និង Helper Utilities (លឿនបំផុត)។",
          "**Component Tests (RTL)**: ធ្វើតេស្តលើការ Render នៃ Component និង User Events ជាមួយ React Testing Library។",
          "**E2E Tests (Playwright / Cypress)**: ធ្វើតេស្តលើ User Flows ពេញលេញតាំងពីដើមដល់ចប់នៅលើ Real Browser។"
        ],
        "codeSnippet": "# ដំឡើង Vitest, React Testing Library, User Event, និង JSDOM\nnpm install -D vitest @testing-library/react @testing-library/user-event jsdom",
        "codeLanguage": "bash",
        "codeTitle": "Installing Testing Stack",
        "proTip": "កុំធ្វើតេស្តលើ Implementation Details (ដូចជាការឆែកតម្លៃ state ខាងក្នុង component) ឱ្យសោះ! ចូរធ្វើតេស្តលើឥរិយាបថដែល User មើលឃើញ និងប្រាស្រ័យទាក់ទងផ្ទាល់ (ដូចជា ការចុចប៊ូតុង និងការឃើញអត្ថបទលើអេក្រង់)។ 'The more your tests resemble the way your software is used, the more confidence they can give you.'"
      },
      {
        "id": "m24-02",
        "number": "02",
        "title": "React Testing Library",
        "summary": "ការស្វែងរក Elements តាមរយៈ Role, Label, និង Text ស្របតាមស្តង់ដារ Accessibility និងការសាកល្បង User Events។",
        "explanation": "**React Testing Library (RTL)** ត្រូវបានបង្កើតឡើងដើម្បីលើកកម្ពស់ការធ្វើតេស្តដែលស្របតាមស្តង់ដារ Accessibility។ វាមិនផ្តល់នូវ API សម្រាប់ចូលមើល State ឬ Props របស់ Component ឡើយ ប៉ុន្តែវាផ្តល់នូវ Query Selectors ដូចជា `getByRole`, `getByLabelText`, និង `getByText` ដើម្បីស្វែងរក Elements ដូចដែលមនុស្ស និង Screen Readers មើលឃើញ។",
        "keyPoints": [
          "លំដាប់អាទិភាពនៃ Queries៖ `getByRole` > `getByLabelText` > `getByPlaceholderText` > `getByText` > `getByTestId`។",
          "ប្រើ `@testing-library/user-event` ជំនួសឱ្យ `fireEvent` ដើម្បីក្លែងបន្លំព្រឹត្តិការណ៍ចុច និងវាយអក្សរបានដូចមនុស្សពិតប្រាកដ។",
          "ធ្វើតេស្តមិនខូចឡើយ (Resilient to Refactoring) ដរាបណា User Experience នៅដដែល។"
        ],
        "codeSnippet": "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { Counter } from './Counter';\n\ntest('បង្កើនចំនួនលេខកើនឡើង ១ នៅពេលចុចប៊ូតុង', async () => {\n  const user = userEvent.setup();\n  render(<Counter />);\n\n  // 1. ស្វែងរកប៊ូតុងដែលមានឈ្មោះបង្ហាញថា \"ចុច: 0\"\n  const button = screen.getByRole('button', { name: /ចុច: 0/i });\n  \n  // 2. ក្លែងបន្លំសកម្មភាព User ចុចលើប៊ូតុង\n  await user.click(button);\n\n  // 3. ផ្ទៀងផ្ទាត់ថាតើប៊ូតុងប្តូរមក \"ចុច: 1\" ដែរឬទេ\n  expect(screen.getByRole('button', { name: /ចុច: 1/i })).toBeInTheDocument();\n});",
        "codeLanguage": "jsx",
        "codeTitle": "RTL User Interaction Test",
        "proTip": "តែងតែផ្តល់អាទិភាពដល់ `getByRole('button', { name: /.../ })` ឬ `getByLabelText` ជានិច្ច! ចៀសវាងការប្រើ `getByTestId` លុះត្រាតែ Element នោះគ្មាន Accessible Role ពិតប្រាកដ។ វិធីនេះជួយធានាថា App របស់អ្នកទាំងមានតេស្តល្អ និងទាំងគាំទ្រ Accessibility (A11y)។"
      },
      {
        "id": "m24-03",
        "number": "04",
        "title": "Mocking API Requests (MSW)",
        "summary": "ការប្រើប្រាស់ Mock Service Worker (MSW) ដើម្បីស្ទាក់ចាប់ និងក្លែងបន្លំ Network Requests យ៉ាងជាក់ស្តែងបំផុត។",
        "explanation": "**Mock Service Worker (MSW)** គឺជាបណ្ណាល័យស្តង់ដារមាសសម្រាប់ការក្លែងបន្លំ API (API Mocking) ក្នុងប្រព័ន្ធ Ecosystem នៃ JavaScript។ ជំនួសឱ្យការ Mock អនុគមន៍ `fetch` ឬ `axios` ដោយប្រើ `vi.fn()` ដែលងាយប្រឈមនឹងកំហុស MSW ធ្វើការស្ទាក់ចាប់ HTTP Requests នៅកម្រិត Network Layer ដោយផ្ទាល់ ដែលធ្វើឱ្យកូដតេស្តដំណើរការដូចទៅនឹង Server ពិតប្រាកដ។",
        "keyPoints": [
          "ស្ទាក់ចាប់ Network Calls ដោយមិនចាំបាច់កែប្រែកូដ Application Code ឡើយ។",
          "ងាយស្រួលសរសេរតេស្តសាកល្បងករណីជួប Error 500, 404, ឬ Network Timeout។",
          "ចែករំលែក Mock Handlers ដូចគ្នារវាងការធ្វើ Unit Tests (Node.js) និងការ Develop ក្នុង Browser។"
        ],
        "codeSnippet": "import { http, HttpResponse } from 'msw';\nimport { setupServer } from 'msw/node';\n\n// កំណត់ API Handlers សម្រាប់ស្ទាក់ចាប់ Endpoint:\nexport const server = setupServer(\n  http.get('/api/students', () => {\n    return HttpResponse.json([\n      { id: '1', name: 'សោភា', gpa: 3.9 },\n      { id: '2', name: 'រដ្ឋា', gpa: 3.7 },\n    ]);\n  })\n);\n\n// ក្នុង setupTests.ts:\n// beforeAll(() => server.listen());\n// afterEach(() => server.resetHandlers());\n// afterAll(() => server.close());",
        "codeLanguage": "jsx",
        "codeTitle": "Mock Service Worker Server Handler",
        "proTip": "MSW ស្ទាក់ចាប់ Network Requests នៅកម្រិត Service Worker (Network Layer) ដោយមិនចាំបាច់កែប្រែកូដ Component ឬ Axios instance ឡើយ។ វាអនុញ្ញាតឱ្យអ្នកធ្វើតេស្តលើ Loading, Error 500, និង Success States យ៉ាងមានទំនុកចិត្តខ្ពស់បំផុត។"
      }
    ]
  },
  {
    "id": "module-25",
    "number": "25",
    "title": "Security",
    "category": "Enterprise & Production",
    "summary": "ការការពារការវាយប្រហារ Cross-Site Scripting (XSS), ហានិភ័យនៃ dangerouslySetInnerHTML, សុវត្ថិភាពនៃការរក្សាទុក Tokens, CORS, ការការពារ Environment Variables សម្ងាត់, និងការតភ្ជាប់ API ប្រកបដោយសុវត្ថិភាព។",
    "iconName": "Lock",
    "topics": [
      {
        "id": "m25-01",
        "number": "01",
        "title": "React Security Basics",
        "summary": "យន្តការ Auto-Escaping របស់ React ប្រឆាំងនឹងការវាយប្រហារ Cross-Site Scripting (XSS)។",
        "explanation": "ការវាយប្រហារ **Cross-Site Scripting (XSS)** កើតឡើងនៅពេលដែលជនអនាមិកអាចបញ្ចូលកូដ JavaScript បំពានចូលទៅក្នុងគេហទំព័រ ដើម្បីលួច Session Cookies, Tokens ឬក្លែងបន្លំជា User។ React ត្រូវបានរចនាឡើងជាមួយនឹងប្រព័ន្ធសុវត្ថិភាពដ៏រឹងមាំតាំងពីគ្រឹះ ដោយវាធ្វើការ **Auto-escaping** រាល់ String ទាំងអស់ដែលត្រូវបាន Render ក្នុង JSX មុនពេលបញ្ចូលទៅក្នុង Real DOM។",
        "keyPoints": [
          "React បំប្លែងតួអក្សរគ្រោះថ្នាក់ (ដូចជា `<`, `>`, `&`, `\"`) ទៅជា HTML Entities ដោយស្វ័យប្រវត្តិ។",
          "ទប់ស្កាត់ការដំណើរការកូដ `<script>alert('hack')</script>` ដែល User បញ្ចូលតាមរយៈ Form។",
          "មិនត្រូវប្រើ `eval()` ឬបង្កើត HTML តាមរយៈ String Concatenation ឡើយ។"
        ],
        "codeSnippet": "export function UserComment({ commentText }: { commentText: string }) {\n  // ប្រសិនបើ commentText គឺជា៖ \"<script>stealTokens()</script>\"\n  // React នឹង Render វាជាអត្ថបទធម្មតាសុវត្ថិភាព 100%៖\n  // &lt;script&gt;stealTokens()&lt;/script&gt;\n  return <div className=\"comment-box\">{commentText}</div>;\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Automatic XSS Escaping",
        "proTip": "តាមលំនាំដើម JSX នឹងបំប្លែងរាល់ Strings ទាំងអស់ទៅជា Escaped Plain Text មុនពេលបញ្ចូលទៅក្នុង DOM (ដូចជា `<` ទៅជា `&lt;`) ដូច្នេះការវាយប្រហារតាមរយៈ `<script>` injection ត្រូវបានទប់ស្កាត់ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "id": "m25-02",
        "number": "02",
        "title": "dangerouslySetInnerHTML",
        "summary": "ហានិភ័យនៃការបញ្ចូលកូដ HTML ផ្ទាល់ (Raw HTML Injection) និងដំណោះស្រាយសម្អាតមេរោគតាមរយៈ DOMPurify។",
        "explanation": "ឈ្មោះរបស់ Prop `dangerouslySetInnerHTML` ត្រូវបានក្រុមការងារ React ដាក់ពាក្យថា **\"dangerously\"** ដោយចេតនា ដើម្បីដាស់តឿន Developer ពីហានិភ័យសុវត្ថិភាពធ្ងន់ធ្ងរ។ ប្រសិនបើអ្នកត្រូវតែ Render Rich Text HTML ដែលបានមកពី CMS ឬអ្នកប្រើប្រាស់ អ្នកត្រូវតែធ្វើការសម្អាត (Sanitize) មេរោគ និង Script បំពានចោលជាមុនសិនតាមរយៈបណ្ណាល័យ **`DOMPurify`**។",
        "keyPoints": [
          "ហាមដាច់ខាតកុំបញ្ជូន Raw HTML ដែលមិនទាន់ Sanitize ចូលទៅក្នុង `dangerouslySetInnerHTML`។",
          "ប្រើប្រាស់ `DOMPurify.sanitize()` ដើម្បីដកស្លាក `<script>`, `onerror=`, `javascript:` ចេញ។",
          "ពិចារណាប្រើប្រាស់ Markdown Parser (ដូចជា `react-markdown`) ជំនួសឱ្យ Raw HTML។"
        ],
        "codeSnippet": "import DOMPurify from 'dompurify';\n\ninterface SafeHtmlProps {\n  rawHtmlContent: string;\n}\n\nexport function SafeHtmlRenderer({ rawHtmlContent }: SafeHtmlProps) {\n  // សម្អាតរាល់កូដគ្រោះថ្នាក់ទាំងអស់មុនពេល Render\n  const cleanHtml = DOMPurify.sanitize(rawHtmlContent, {\n    USE_PROFILES: { html: true }, // អនុញ្ញាតតែ HTML សុវត្ថិភាព\n  });\n\n  return (\n    <div \n      className=\"prose prose-invert\"\n      dangerouslySetInnerHTML={{ __html: cleanHtml }} \n    />\n  );\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Safe HTML Sanitization with DOMPurify",
        "pitfall": "ការបញ្ជូន Raw HTML Strings ដែលមិនបានឆ្លងកាត់ការសម្អាត (Sanitization) ទៅកាន់ `dangerouslySetInnerHTML` អនុញ្ញាតឱ្យ Hacker អាចដំណើរការកូដ JavaScript បំពាន (XSS) ក្នុង Browser របស់ User និងអាចលួចយក Session/Credentials បាន!"
      },
      {
        "id": "m25-03",
        "number": "03",
        "title": "Protecting Sensitive Environment Variables",
        "summary": "ការបែងចែកឱ្យដាច់រវាង Server-only Secrets និង Public Client Variables ក្នុង Environment Variables (.env)។",
        "explanation": "កំហុសឆ្គងផ្នែកសុវត្ថិភាពទូទៅបំផុតមួយក្នុងការអភិវឌ្ឍ Frontend គឺការធ្វេសប្រហែសបែកធ្លាយលេខសម្ងាត់ (API Secrets) ទៅកាន់ Client Browser។ នៅក្នុង Next.js ឬ Vite អថេរដែលមាន Prefix `NEXT_PUBLIC_` ឬ `VITE_` នឹងត្រូវបញ្ចូលដោយផ្ទាល់ទៅក្នុង Client JavaScript Files។ អ្នកត្រូវតែបែងចែកឱ្យច្បាស់រវាង **Public Configuration** និង **Server-Only Secrets**។",
        "keyPoints": [
          "**Public Variables (`NEXT_PUBLIC_`)**: សម្រាប់ទិន្នន័យសាធារណៈ (Base API URL, Google Analytics ID)។",
          "**Server Secrets (គ្មាន prefix)**: សម្រាប់ទិន្នន័យសម្ងាត់ (Database Passwords, Stripe Secret Key, JWT Secret) ដែលអាចហៅប្រើបានតែក្នុង API Routes / Server Components។",
          "បន្ថែម `.env*.local` ទៅក្នុង `.gitignore` ជានិច្ច ដើម្បីកុំឱ្យច្រឡំ Commit ឡើង GitHub។"
        ],
        "codeSnippet": "# ❌ គ្រោះថ្នាក់បំផុត៖ បែកធ្លាយទៅកាន់ Browser របស់ Client ទាំងអស់!\nNEXT_PUBLIC_STRIPE_SECRET_KEY=sk_live_51M0SecretKey12345\nNEXT_PUBLIC_DATABASE_PASSWORD=super_secret_db_pass\n\n# ✅ សុវត្ថិភាព 100%៖ អាចអានបានតែនៅលើ Server (Node.js/Next.js Route Handlers)\nSTRIPE_SECRET_KEY=sk_live_51M0SecretKey12345\nDATABASE_URL=postgresql://user:pass@localhost:5432/mydb\n\n# ✅ សុវត្ថិភាពសម្រាប់ Client (ទិន្នន័យសាធារណៈ)\nNEXT_PUBLIC_API_URL=https://api.reactcourse.dev/v1\nNEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51M0PublicKey12345",
        "codeLanguage": "bash",
        "codeTitle": "Securing Environment Variables",
        "pitfall": "រាល់អថេរណាដែលមាន Prefix `NEXT_PUBLIC_` ឬ `VITE_` នឹងត្រូវបានបញ្ចូលទៅក្នុង Client JavaScript Bundle ដែលមានន័យថានរណាក៏អាចមើលឃើញតម្លៃនោះបានដែរ! ហាមដាច់ខាតកុំដាក់ Stripe Secret Keys, Database Passwords ឬ Private API Keys ក្នុងអថេរ Client!"
      }
    ]
  },
  {
    "id": "module-26",
    "number": "26",
    "title": "Production React",
    "category": "Enterprise & Production",
    "summary": "ការរៀបចំ Production Build, Error Boundaries ទប់ស្កាត់ White Screen Crash, SEO Metadata, Bundle Optimization, Tree-shaking, និង Pre-flight Production Checklist មុនពេល Deploy។",
    "iconName": "Rocket",
    "topics": [
      {
        "id": "m26-01",
        "number": "01",
        "title": "Production Build Process",
        "summary": "ការធ្វើ Minification, Dead-code elimination, Tree-shaking, និងការបង្រួម Bundle សម្រាប់ Production Deployment។",
        "explanation": "ដំណើរការ **Production Build** (`npm run build`) គឺជាដំណាក់កាលបំប្លែងកូដ React (JSX, TypeScript, CSS modules) ឱ្យទៅជា Static Assets (HTML, CSS, JavaScript) ដែលត្រូវបាន Optimized ខ្ពស់បំផុត។ នៅដំណាក់កាលនេះ Bundler នឹងលុបចោលរាល់ Development Warnings, ធ្វើ **Minification** (បង្រួមឈ្មោះ Variables និងលុប Whitespace), អនុវត្ត **Tree-shaking** (កាត់ចោលកូដណាដែលមិនដែលត្រូវបានហៅប្រើប្រាស់ - Dead Code Elimination), និងបំបែក Chunk ដោយផ្អែកលើ Route (Code Splitting)។",
        "keyPoints": [
          "**Minification & Compression**: បង្រួមកូដ JavaScript និង CSS ឱ្យនៅទំហំតូចបំផុត រួមជាមួយការ Enable Gzip/Brotli compression នៅលើ Web Server (Nginx/Cloudflare)។",
          "**Dead-Code Elimination (Tree-shaking)**: បំបាត់ចោល Modules ឬ Functions ណាដែល Import មកតែមិនដែលប្រើក្នុងកម្មវិធី។",
          "**Content Hashing**: រាល់ Chunk JS/CSS មានបន្ថែម Unique Hash ក្នុង Filename ដើម្បីការពារកុំឱ្យ Browser សន្សំ Cache ចាស់ពេលមានការ Update កូដថ្មី។",
          "**Bundle Analyzer**: ប្រើប្រាស់ Tool ដូចជា `rollup-plugin-visualizer` ឬ `@next/bundle-analyzer` ដើម្បីពិនិត្យមើល Dependencies ណាដែលស៊ីទំហំធំខុសប្រក្រតី។"
        ],
        "codeSnippet": "{\n  \"name\": \"my-enterprise-react-app\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc -b && vite build\",\n    \"preview\": \"vite preview\",\n    \"build:analyze\": \"vite build --mode analyze\"\n  },\n  \"dependencies\": {\n    \"react\": \"^19.0.0\",\n    \"react-dom\": \"^19.0.0\"\n  },\n  \"devDependencies\": {\n    \"@types/react\": \"^19.0.0\",\n    \"rollup-plugin-visualizer\": \"^5.14.0\",\n    \"typescript\": \"^5.7.0\",\n    \"vite\": \"^6.0.0\"\n  }\n}",
        "codeLanguage": "json",
        "codeTitle": "Production Build & Analysis Scripts",
        "proTip": "ពេលដំណើរការ build tool ដូចជា Vite ឬ Webpack វានឹងបង្កើតឯកសារ Bundle ដែលមាន Content Hashing (ឧ. `index.d4f1a2.js`) ក្នុងឈ្មោះឯកសារ ដើម្បីទាញយកអត្ថប្រយោជន៍ពេញលេញពី Immutable Browser Caching។",
        "pitfall": "កុំ Deploy ដោយប្រើ Dev Server (`npm run dev`) ទៅលើ Production Server ឱ្យសោះ ព្រោះ Dev Server មិនបានធ្វើ Code Splitting, Tree-shaking ឬ Minification ឡើយ ដែលបណ្តាលឱ្យ Performance ធ្លាក់ចុះ និងចំណាយ Bandwidth ខ្ពស់។"
      },
      {
        "id": "m26-02",
        "number": "02",
        "title": "Error Boundaries",
        "summary": "ការចាប់ Runtime JavaScript Errors ក្នុង Component Tree ដើម្បីបង្ហាញ Fallback UI និងការពារកុំឱ្យបែកផ្ទាំងពណ៌ស (White Screen of Death)។",
        "explanation": "កាលពីមុន ប្រសិនបើមាន JavaScript Error ណាមួយកើតឡើងក្នុងពេល Render នៃ React Component វានឹងធ្វើឱ្យ React Unmount App ទាំងមូល ហើយបង្ហាញផ្ទាំងពណ៌សទទេរស្អាត (**White Screen of Death**) ដល់ User។ **Error Boundary** គឺជា Class Component ពិសេសមួយដែលដើរតួជា \"សំណាញ់សុវត្ថិភាព\" សម្រាប់ចាប់រាល់ Runtime Errors ដែលកើតឡើងនៅក្នុង Child Component Tree របស់វា កត់ត្រាកំហុសទៅកាន់ Logging Service (ដូចជា Sentry) និងបង្ហាញ Fallback UI យ៉ាងស្រស់ស្អាតជំនួសឱ្យការ Crash។",
        "keyPoints": [
          "**`static getDerivedStateFromError(error)`**: ប្រើដើម្បី Update Component State (ឧ. `hasError: true`) ឱ្យ React បង្ហាញ Fallback UI ភ្លាមៗ។",
          "**`componentDidCatch(error, info)`**: ប្រើសម្រាប់បញ្ជូនព័ត៌មានលម្អិតនៃ Error និង Component Stack Trace ទៅកាន់ Monitoring Tools (ដូចជា Sentry ឬ Datadog)។",
          "**Granular Boundaries**: បំបែក Error Boundaries តាម Feature ឬ Widget នីមួយៗ (Granular isolation) ជៀសវាងឱ្យ Error តូចមួយធ្វើឱ្យបែកផ្ទាំង App ទាំងមូល។",
          "**Reset Capability**: ផ្តល់ប៊ូតុង \"Try Again\" នៅក្នុង Fallback UI ដើម្បីឱ្យ User អាចព្យាយាម Render ម្តងទៀតដោយមិនបាច់ Refresh ទំព័រទាំងមូល។"
        ],
        "codeSnippet": "import React, { Component, ReactNode, ErrorInfo } from \"react\";\n\ninterface Props {\n  fallback?: ReactNode;\n  children: ReactNode;\n}\n\ninterface State {\n  hasError: boolean;\n  errorMessage: string;\n}\n\nexport class ErrorBoundary extends Component<Props, State> {\n  public state: State = {\n    hasError: false,\n    errorMessage: \"\",\n  };\n\n  public static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, errorMessage: error.message };\n  }\n\n  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n    // បញ្ជូនកំហុសទៅកាន់ Production Monitoring Service (Sentry/LogRocket)\n    console.error(\"Uncaught runtime error:\", error, errorInfo);\n  }\n\n  public handleReset = () => {\n    this.setState({ hasError: false, errorMessage: \"\" });\n  };\n\n  public render() {\n    if (this.state.hasError) {\n      if (this.props.fallback) {\n        return this.props.fallback;\n      }\n\n      return (\n        <div className=\"p-6 my-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center\">\n          <h3 className=\"text-lg font-semibold text-red-400\">ផ្នែកនេះជួបប្រទះបញ្ហាបច្ចេកទេស</h3>\n          <p className=\"text-sm text-slate-300 mt-2 mb-4\">{this.state.errorMessage || \"មានបញ្ហាមិនរំពឹងទុកបានកើតឡើង។\"}</p>\n          <button\n            onClick={this.handleReset}\n            className=\"px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition\"\n          >\n            ព្យាយាមម្តងទៀត\n          </button>\n        </div>\n      );\n    }\n\n    return this.props.children;\n  }\n}",
        "codeLanguage": "jsx",
        "codeTitle": "Production React Error Boundary Component",
        "proTip": "Error Boundary ចាប់បានតែ Errors ក្នុងអំឡុងពេល Rendering, Lifecycle methods, និង Constructors ប៉ុណ្ណោះ។ ចំពោះ Async code (ដូចជា `fetch`) ឬ Event Handlers (ដូចជា `onClick`) អ្នកត្រូវប្រើ `try...catch` ធម្មតា។",
        "pitfall": "កុំដាក់ Error Boundary តែមួយគត់នៅកំពូល Root នៃ App ទាំងមូល! គួរដាក់ Error Boundary ដាច់ដោយឡែកជុំវិញ Widget នីមួយៗ (ដូចជា Feed, Sidebar, Comments) ដើម្បីឱ្យផ្នែកផ្សេងទៀតនៅតែបន្តដំណើរការបាន ទោះបីជា Widget មួយជួបបញ្ហាក៏ដោយ។"
      },
      {
        "id": "m26-03",
        "number": "03",
        "title": "Production Checklist",
        "summary": "បញ្ជីត្រួតពិនិត្យ Pre-flight គ្រប់ជ្រុងជ្រោយ (TypeScript, Linting, SEO, Performance, Caching) មុនពេល Ship ទៅ Production។",
        "explanation": "មុននឹងធ្វើការ **Deploy** កម្មវិធី React ទៅកាន់ Production Environment (Vercel, AWS, Cloudflare, Netlify) Developer ត្រូវតែអនុវត្តតាម **Pre-flight Production Checklist** ដើម្បីធានាបាននូវគុណភាពកូដ, សុវត្ថិភាពទិន្នន័យ, ល្បឿន Performance, ភាពងាយស្រួលចូលមើល (Accessibility), និងភាពត្រឹមត្រូវនៃ SEO។ ការខកខានត្រួតពិនិត្យចំណុចទាំងនេះអាចបណ្ដាលឱ្យកើតមានកំហុស Runtime Crashes នៅចំពោះមុខអតិថិជនពិតប្រាកដ។",
        "keyPoints": [
          "**Type Safety & Linting**: ត្រូវប្រាកដថាគ្មាន TypeScript Error (`tsc --noEmit`) និងគ្មាន ESLint Warning ណាមួយនៅសេសសល់ឡើយ។",
          "**Remove Debug Logs**: លុបចោលរាល់ `console.log()` និង Debugging Tools មុនពេល Build។",
          "**SEO & Social Metadata**: ពិនិត្យមើល `<title>`, `<meta name=\"description\">`, Canonical URLs, Favicon, និង Open Graph tags (`og:title`, `og:image`)។",
          "**Asset Optimization**: បង្រួមរូបភាពឱ្យទៅជាទម្រង់ WebP/AVIF, ប្រើ Lazy Loading សម្រាប់រូបភាពក្រៅអេក្រង់ និងដាក់ `alt` tags គ្រប់រូបភាពទាំងអស់។",
          "**Environment Separation**: ពិនិត្យមើលថាតើ `.env.production` ប្រើប្រាស់ Production API URLs និងមិនមានបែកធ្លាយ Private Secret Keys ចូល Client Bundle ឡើយ។",
          "**Performance & Lighthouse Audit**: ដំណើរការ Google Lighthouse ដើម្បីទទួលបានពិន្ទុ Performance, Accessibility, Best Practices, និង SEO យ៉ាងហោចណាស់ 90+។"
        ],
        "codeSnippet": "# .github/workflows/production-check.yml\nname: Production Pre-Flight Checks\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  audit:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: \"npm\"\n\n      - name: Install Dependencies\n        run: npm ci\n\n      - name: Type Checking\n        run: npx tsc --noEmit\n\n      - name: Code Linting\n        run: npm run lint\n\n      - name: Production Build Test\n        run: npm run build\n\n      - name: Audit Vulnerabilities\n        run: npm audit --audit-level=high",
        "codeLanguage": "yaml",
        "codeTitle": "Production Pre-flight CI/CD Pipeline",
        "proTip": "គួររៀបចំ CI/CD Pipeline (ដូចជា GitHub Actions ឬ GitLab CI) ឱ្យដំណើរការ `tsc --noEmit`, `eslint .`, និង `npm run build` ដោយស្វ័យប្រវត្តិនៅរាល់ពេលបើក Pull Request មុននឹងអនុញ្ញាតឱ្យ Merge ចូល Main branch។",
        "pitfall": "ការភ្លេចកំណត់ Open Graph (`og:image`, `og:title`) metadata និង `robots.txt` នឹងធ្វើឱ្យ Search Engines មិនអាច Index ទំព័ររបស់អ្នកបានត្រឹមត្រូវ ហើយបាត់បង់ការបង្ហាញ Social Preview Cards នៅពេល Share លើ Telegram ឬ Facebook។"
      }
    ]
  },
  {
    "id": "module-27",
    "number": "27",
    "title": "Real-World Projects",
    "category": "Projects",
    "summary": "គម្រោងអនុវត្តផ្ទាល់ជាក់ស្ដែងកម្រិត Real-World ចំនួន 6៖ Todo App, Student Management System, Product Dashboard, Auth Portal, E-Commerce Storefront, និង Final Capstone Enterprise Application។",
    "iconName": "FolderGit2",
    "topics": [
      {
        "id": "m27-01",
        "number": "01",
        "title": "Project 01: Todo Management App",
        "summary": "កម្មវិធីគ្រប់គ្រងកិច្ចការងារជាមួយ localStorage persistence, dynamic filtering, និង live search។",
        "explanation": "នៅក្នុងគម្រោងដំបូងនេះ អ្នកនឹងអនុវត្តផ្ទាល់នូវគោលការណ៍គ្រឹះស្នូលរបស់ React ដូចជា State Management តាមរយៈ `useState`, Event Handling, Controlled Inputs, Derived State សម្រាប់ការ Filter ទិន្នន័យ (All, Active, Completed) និងការរក្សាទុកទិន្នន័យលើ Browser តាមរយៈ Custom Hook `useLocalStorage`។",
        "keyPoints": [
          "**CRUD Operations**: បន្ថែម (Add), កែសម្រួល (Edit inline), ធីកបញ្ចប់ (Toggle), និងលុប (Delete) កិច្ចការងារនីមួយៗ។",
          "**Dynamic Filtering & Live Search**: ត្រងទិន្នន័យតាមស្ថានភាពការងារ និងស្វែងរកតាមរយៈ Real-time Text Query។",
          "**Persistence with Custom Hook**: ប្រើប្រាស់ `useLocalStorage` ដើម្បី Synchronize រវាង React State និង Browser Storage ដោយស្វ័យប្រវត្តិ។",
          "**Keyboard Shortcuts**: បន្ថែម UX ល្អប្រសើរដូចជាចុច `Enter` ដើម្បី Add task និងចុច `Escape` ដើម្បី Cancel edit mode។"
        ],
        "codeSnippet": "import { useState, useEffect } from \"react\";\n\nexport function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {\n  // Lazy state initialization ដើម្បីកុំឱ្យអាន localStorage រាល់ពេល Re-render\n  const [storedValue, setStoredValue] = useState<T>(() => {\n    try {\n      if (typeof window === \"undefined\") return initialValue;\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(`Error reading localStorage key \"${key}\":`, error);\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    try {\n      window.localStorage.setItem(key, JSON.stringify(storedValue));\n    } catch (error) {\n      console.error(`Error saving localStorage key \"${key}\":`, error);\n    }\n  }, [key, storedValue]);\n\n  return [storedValue, setStoredValue];\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Todo App Custom Hook Architecture",
        "proTip": "ដើម្បីឱ្យ UI មានភាពរលូន និងមិនជួបបញ្ហា Hydration mismatch នៅពេលប្រើ localStorage គួរទាញយកតម្លៃដំបូងតាមរយៈ Lazy Initializer ក្នុង `useState(() => ...)`។",
        "pitfall": "កុំធ្វើការ Update Todo Item ដោយផ្ទាល់លើ State Array ចាស់ (Mutation) ដូចជា `todos[index].completed = true` ឱ្យសោះ។ ត្រូវបង្កើត Array ថ្មីតាមរយៈ `.map()` ជានិច្ច ដើម្បីរក្សា Immutability របស់ React State។",
        "interactiveDemoKey": "TodoAppDemo"
      },
      {
        "id": "m27-02",
        "number": "02",
        "title": "Project 02: Student Management System",
        "summary": "ផ្ទាំង Admin CRUD ពេញលេញសម្រាប់គ្រប់គ្រងទិន្នន័យសិស្ស ជាមួយ Client-side Pagination, Sorting, និង Modal Form Validation។",
        "explanation": "គម្រោងនេះផ្តោតលើការកសាងផ្ទាំងគ្រប់គ្រងរដ្ឋបាល (**Admin CRUD Dashboard**) ជាក់ស្តែងសម្រាប់ទិន្នន័យសិស្សនិស្សិត។ អ្នកនឹងរៀនពីការរៀបចំ Data Table ប្រកបដោយអន្តរកម្ម, ការតម្រៀបទិន្នន័យ (Sorting តាម Name, GPA, Enroll Date), ការបែងចែកទំព័រ (Pagination), ផ្ទាំង Modal បញ្ចូល/កែសម្រួលព័ត៌មាន (Add/Edit Modal) និងផ្ទាំង Confirmation Dialog មុននឹងលុបទិន្នន័យចេញ។",
        "keyPoints": [
          "**Full CRUD Workflow**: បង្កើតសិស្សថ្មី, អាននិងបង្ហាញតារាងទិន្នន័យ, កែសម្រួល Profile, និងលុបទិន្នន័យដោយសុវត្ថិភាព។",
          "**Client-Side Pagination**: បែងចែកទិន្នន័យបង្ហាញតាមទំព័រ (ឧ. 10 នាក់ក្នុងមួយទំព័រ) ជាមួយប៊ូតុង Next, Prev, និង Page Numbers។",
          "**Multi-Field Validation**: ត្រួតពិនិត្យភាពត្រឹមត្រូវនៃ Email, Phone Number, GPA (0.0 - 4.0), និង Major មុនពេល Submit Form។",
          "**Multi-Criteria Filtering**: ត្រងតាមជំនាញសិក្សា (Major), ស្ថានភាពសិស្ស (Active, Graduated, Probation) និងពាក្យគន្លឹះស្វែងរក។"
        ],
        "codeSnippet": "import { useMemo, useState } from \"react\";\n\nexport interface Student {\n  id: string;\n  name: string;\n  email: string;\n  major: string;\n  gpa: number;\n  status: \"Active\" | \"Graduated\" | \"Probation\";\n}\n\nexport function useStudentTable(students: Student[], pageSize = 10) {\n  const [search, setSearch] = useState(\"\");\n  const [selectedMajor, setSelectedMajor] = useState(\"All\");\n  const [currentPage, setCurrentPage] = useState(1);\n  const [sortKey, setSortKey] = useState<keyof Student>(\"name\");\n  const [sortOrder, setSortOrder] = useState<\"asc\" | \"desc\">(\"asc\");\n\n  // 1. Filtered Students\n  const filtered = useMemo(() => {\n    return students.filter((s) => {\n      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.email.includes(search);\n      const matchMajor = selectedMajor === \"All\" || s.major === selectedMajor;\n      return matchSearch && matchMajor;\n    });\n  }, [students, search, selectedMajor]);\n\n  // 2. Sorted Students\n  const sorted = useMemo(() => {\n    return [...filtered].sort((a, b) => {\n      const valA = a[sortKey];\n      const valB = b[sortKey];\n      if (valA < valB) return sortOrder === \"asc\" ? -1 : 1;\n      if (valA > valB) return sortOrder === \"asc\" ? 1 : -1;\n      return 0;\n    });\n  }, [filtered, sortKey, sortOrder]);\n\n  // 3. Paginated Slice\n  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));\n  const paginatedStudents = useMemo(() => {\n    const start = (currentPage - 1) * pageSize;\n    return sorted.slice(start, start + pageSize);\n  }, [sorted, currentPage, pageSize]);\n\n  return {\n    paginatedStudents,\n    totalPages,\n    currentPage,\n    setCurrentPage,\n    search,\n    setSearch: (val: string) => { setSearch(val); setCurrentPage(1); },\n    sortKey,\n    sortOrder,\n    toggleSort: (key: keyof Student) => {\n      if (sortKey === key) setSortOrder(prev => prev === \"asc\" ? \"desc\" : \"asc\");\n      else { setSortKey(key); setSortOrder(\"asc\"); }\n    }\n  };\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Student Pagination & Sorting Logic",
        "proTip": "នៅពេលបង្កើត Client-side Pagination ត្រូវគណនា Total Pages តាមរយៈ `Math.ceil(filteredStudents.length / pageSize)` ដោយផ្អែកលើ Filtered List មិនមែន Original Array ទាំងមូលឡើយ។",
        "pitfall": "កុំភ្លេច Reset Current Page មកលេខ 1 វិញនៅពេលដែល User វាយពាក្យ Search ឬប្តូរ Category Filter បើពុំនោះទេ User អាចនឹងជាប់នៅលើទំព័រទទេដែលគ្មានទិន្នន័យ (Empty State)។"
      },
      {
        "id": "m27-03",
        "number": "03",
        "title": "Project 03: Product Management Dashboard",
        "summary": "ផ្ទាំង Dashboard សន្និធិផលិតផលភ្ជាប់ជាមួយ REST API, Axios Client, Loading Skeletons, និង Inventory Metrics Cards។",
        "explanation": "នៅក្នុងគម្រោងនេះ អ្នកនឹងអនុវត្តការតភ្ជាប់ React ជាមួយ REST API តាមកម្រិតស្តង់ដារសហគ្រាស (Enterprise Architecture) ដោយរៀបចំ **Service Layer Pattern** តាមរយៈ Axios។ គម្រោងនេះរួមបញ្ចូលទាំងការគ្រប់គ្រង Asynchronous States (Loading Skeletons, Empty States, Error Retries), ការគណនា Metrics កាតសង្ខេប (Total Inventory, Low Stock Alerts), និងការ Filter តាមប្រភេទផលិតផល និង Price Range Slider។",
        "keyPoints": [
          "**Service Layer Abstraction**: បំបែក Logic នៃការហៅ API ទៅកាន់ `services/api/productService.ts` ដាច់ដោយឡែកពី UI Components។",
          "**High-Fidelity Skeleton Loading**: បង្ហាញ UI Skeleton យ៉ាងរលូនក្នុងកំឡុងពេលទាញយកទិន្នន័យពី Backend Network។",
          "**Inventory Metrics Summary**: គណនា KPI សំខាន់ៗ (ចំនួនទំនិញសរុប, តម្លៃស្តុកសរុប, ចំនួនទំនិញជិតដាច់ស្តុក) ដោយស្វ័យប្រវត្តិ។",
          "**Optimistic UI Updates**: ធ្វើបច្ចុប្បន្នភាពចំនួនស្តុកលើផ្ទាំងអេក្រង់ភ្លាមៗ មុនពេល API ឆ្លើយតបជោគជ័យ ដើម្បីបង្កើនល្បឿន UX ឱ្យកាន់តែរហ័ស។"
        ],
        "codeSnippet": "import { useState, useEffect, useCallback } from \"react\";\nimport axios from \"axios\";\n\nexport interface Product {\n  id: string;\n  name: string;\n  category: string;\n  price: number;\n  stock: number;\n}\n\n// 1. Service Layer\nexport const productService = {\n  async getAll(): Promise<Product[]> {\n    const { data } = await axios.get<Product[]>(\"/api/products\");\n    return data;\n  },\n  async updateStock(id: string, stock: number): Promise<Product> {\n    const { data } = await axios.patch<Product>(`/api/products/${id}`, { stock });\n    return data;\n  }\n};\n\n// 2. Custom Data Fetching Hook\nexport function useProducts() {\n  const [products, setProducts] = useState<Product[]>([]);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n\n  const fetchProducts = useCallback(async () => {\n    setIsLoading(true);\n    setError(null);\n    try {\n      const data = await productService.getAll();\n      setProducts(data);\n    } catch (err: any) {\n      setError(err.response?.data?.message || \"បរាជ័យក្នុងការទាញយកទិន្នន័យផលិតផល\");\n    } finally {\n      setIsLoading(false);\n    }\n  }, []);\n\n  useEffect(() => {\n    fetchProducts();\n  }, [fetchProducts]);\n\n  return { products, isLoading, error, refetch: fetchProducts };\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Product Service & API Integration Hook",
        "proTip": "បង្កើត Service Layer ដាច់ដោយឡែក (`productService.ts`) ជៀសវាងការហៅ `axios.get()` ដោយផ្ទាល់នៅខាងក្នុង Components ដើម្បីឱ្យកូដមានភាពងាយស្រួល Refactor និង Mock ពេលសរសេរ Unit Tests។",
        "pitfall": "កុំភ្លេចគ្រប់គ្រង Asynchronous Lifecycle States ឱ្យបានគ្រប់ជ្រុងជ្រោយ (Idle, Loading, Error, Success)។ កុំទុកឱ្យ User ជាប់គាំងលើ Loading Skeleton រហូតនៅពេល API ឆ្លើយតបមកដោយ Error ឡើយ។"
      },
      {
        "id": "m27-04",
        "number": "04",
        "title": "Project 04: Authentication Dashboard",
        "summary": "ប្រព័ន្ធគ្រប់គ្រងសិទ្ធិ Role-Based Access Control (RBAC) ជាមួយ JWT Tokens, Refresh Interceptors, និង Protected Routes។",
        "explanation": "នៅក្នុងគម្រោងនេះ អ្នកនឹងបង្កើតស្ថាបត្យកម្ម Authentication និង Authorization កម្រិត Production។ គម្រោងនេះគ្របដណ្តប់លើការគ្រប់គ្រង JWT Access Tokens, Silent Refresh Tokens តាមរយៈ Axios Interceptors, ការការពារទំព័រតាមរយៈ `ProtectedRoute`, ការបែងចែកសិទ្ធិមើលទិន្នន័យតាមតួនាទី (**Role-Based Access Control - RBAC**) រវាង Admin, Editor, និង Viewer ព្រមទាំងការគ្រប់គ្រង User Profile។",
        "keyPoints": [
          "**JWT Authentication Lifecycle**: ដំណើរការ Login, ផ្ទៀងផ្ទាត់ Credentials, រក្សាទុក Token, និង Logout សម្អាត State ទាំងមូល។",
          "**Axios 401 Interceptors**: យន្តការស្ទាក់ចាប់ Token ផុតកំណត់ និងដំណើរការ Refresh Token ដោយស្វ័យប្រវត្តិកុំឱ្យដាច់ Session របស់ User។",
          "**Protected Layout Routes**: បិទមិនឱ្យ User ដែលមិនទាន់ Login អាចចូលទៅកាន់ទំព័រ Dashboard បាន ដោយបង្វែរ (Redirect) ទៅកាន់ `/login` ដោយស្វ័យប្រវត្តិ។",
          "**Role Guards (RBAC)**: អនុញ្ញាតឱ្យបង្ហាញ Menu ឬ Button ជាក់លាក់មួយទៅតាមតួនាទីរបស់អ្នកប្រើប្រាស់ (ឧទាហរណ៍៖ មានតែ Admin ទើបឃើញប៊ូតុង Delete User)។"
        ],
        "codeSnippet": "import React, { createContext, useContext, ReactNode } from \"react\";\nimport { Navigate, useLocation } from \"react-router-dom\";\n\nexport type UserRole = \"admin\" | \"editor\" | \"viewer\";\n\nexport interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: UserRole;\n}\n\ninterface AuthContextType {\n  user: User | null;\n  isAuthenticated: boolean;\n  isLoading: boolean;\n  logout: () => void;\n}\n\nexport const AuthContext = createContext<AuthContextType | null>(null);\n\nexport function useAuth() {\n  const context = useContext(AuthContext);\n  if (!context) throw new Error(\"useAuth must be used within an AuthProvider\");\n  return context;\n}\n\n// Protected Route & RBAC Component Guard\nexport function ProtectedRoute({\n  children,\n  allowedRoles,\n}: {\n  children: ReactNode;\n  allowedRoles?: UserRole[];\n}) {\n  const { user, isAuthenticated, isLoading } = useAuth();\n  const location = useLocation();\n\n  if (isLoading) {\n    return <div className=\"p-8 text-center text-slate-400\">ផ្ទៀងផ្ទាត់គណនី...</div>;\n  }\n\n  if (!isAuthenticated || !user) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  if (allowedRoles && !allowedRoles.includes(user.role)) {\n    return <Navigate to=\"/unauthorized\" replace />;\n  }\n\n  return <>{children}</>;\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Role-Based Protected Route Guard",
        "proTip": "រៀបចំ Axios Response Interceptor ដើម្បីស្ទាក់ចាប់កំហុស HTTP 401 (Unauthorized) និងហៅ Refresh Token API ដោយស្វ័យប្រវត្តិ មុននឹងព្យាយាមបញ្ជូន Request ដើមទៅម្តងទៀត (Auto-retry failed request)។",
        "pitfall": "កុំពិនិត្យសិទ្ធិ Role តែនៅលើ Frontend UI តែមួយមុខឱ្យសោះ។ Protected Route នៅលើ React គឺសម្រាប់តែបទពិសោធន៍ User Interface (UX) ប៉ុណ្ណោះ ចំណែកសុវត្ថិភាពទិន្នន័យពិតប្រាកដត្រូវតែផ្ទៀងផ្ទាត់សិទ្ធិ Authorization នៅលើ Backend API ជានិច្ច។"
      },
      {
        "id": "m27-05",
        "number": "05",
        "title": "Project 05: E-Commerce Frontend",
        "summary": "ហាងទំនិញ Online ពេញលេញជាមួយ Zustand Global Cart Store, Persistent Storage, Wishlist, និង Multi-step Checkout Wizard។",
        "explanation": "គម្រោងនេះរួមបញ្ចូលគ្នានូវ **React Router**, ការគ្រប់គ្រង Global State តាមរយៈ **Zustand**, និងការរចនា UX ហាងលក់ទំនិញ Online ទំនើប។ អ្នកនឹងកសាងទំព័រ Catalog ជាមួយ Dynamic Category Tabs, ទំព័រពិនិត្យលម្អិតទំនិញ (Product Details), ផ្ទាំង Shopping Cart Slide-out Drawer, ប្រព័ន្ធ Wishlist, និងដំណាក់កាលទូទាត់ប្រាក់ច្រើនជំហាន (**Multi-step Checkout Pipeline**: Shipping → Payment → Order Summary)។",
        "keyPoints": [
          "**Global Cart Management**: គ្រប់គ្រងចំនួនទំនិញ, បន្ថែមចូលកន្ត្រក, កែប្រែបរិមាណ, និងគណនាតម្លៃសរុបជាមួយ Zustand។",
          "**Persistent Storage**: រក្សាទុកកន្ត្រកទំនិញជាប់ក្នុង Browser Storage តាមរយៈ Zustand `persist` middleware។",
          "**Slide-out Cart Drawer**: បង្ហាញផ្ទាំង Cart Drawer យ៉ាងរលូនពីចំហៀងអេក្រង់ ដោយមិនបាច់ផ្លាស់ប្តូរទំព័រ។",
          "**Multi-Step Checkout Wizard**: ដំណើរការបញ្ជាទិញជាជំហានៗ ជាមួយការត្រួតពិនិត្យភាពត្រឹមត្រូវនៃអាសយដ្ឋានដឹកជញ្ជូន និងវិធីសាស្ត្រទូទាត់។"
        ],
        "codeSnippet": "import { create } from \"zustand\";\nimport { persist } from \"zustand/middleware\";\n\nexport interface CartItem {\n  id: string;\n  name: string;\n  price: number;\n  quantity: number;\n  image: string;\n}\n\ninterface CartStore {\n  items: CartItem[];\n  isDrawerOpen: boolean;\n  openDrawer: () => void;\n  closeDrawer: () => void;\n  addItem: (product: Omit<CartItem, \"quantity\">) => void;\n  removeItem: (id: string) => void;\n  updateQuantity: (id: string, quantity: number) => void;\n  clearCart: () => void;\n  getTotalPrice: () => number;\n  getTotalItems: () => number;\n}\n\nexport const useCartStore = create<CartStore>()(\n  persist(\n    (set, get) => ({\n      items: [],\n      isDrawerOpen: false,\n      openDrawer: () => set({ isDrawerOpen: true }),\n      closeDrawer: () => set({ isDrawerOpen: false }),\n\n      addItem: (product) => {\n        set((state) => {\n          const existing = state.items.find((item) => item.id === product.id);\n          if (existing) {\n            return {\n              items: state.items.map((item) =>\n                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item\n              ),\n            };\n          }\n          return { items: [...state.items, { ...product, quantity: 1 }] };\n        });\n      },\n\n      removeItem: (id) => {\n        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));\n      },\n\n      updateQuantity: (id, quantity) => {\n        if (quantity <= 0) {\n          get().removeItem(id);\n          return;\n        }\n        set((state) => ({\n          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),\n        }));\n      },\n\n      clearCart: () => set({ items: [] }),\n\n      getTotalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),\n      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),\n    }),\n    {\n      name: \"ecommerce-cart-storage\",\n    }\n  )\n);",
        "codeLanguage": "tsx",
        "codeTitle": "Zustand Global Shopping Cart Store",
        "proTip": "ប្រើប្រាស់ `persist` middleware របស់ Zustand សម្រាប់ Shopping Cart Store ដើម្បីឱ្យទំនិញក្នុងកន្ត្រកនៅតែរក្សាទុកដដែល ទោះបីជា User បិទផ្ទាំង Browser ឬ Refresh ក៏ដោយ។",
        "pitfall": "កុំគណនា Subtotal ឬតម្លៃទំនិញសរុបក្នុង Local Component State ដាច់ដោយឡែកពីគ្នា។ ត្រូវគណនាផលបូកទាំងអស់ (Derived Value) ដោយផ្ទាល់នៅក្នុង Zustand Store ដើម្បីធានាបាននូវ Single Source of Truth។"
      },
      {
        "id": "m27-06",
        "number": "06",
        "title": "Project 06: Final Capstone Application",
        "summary": "កម្មវិធី Full-Scale Enterprise React កម្រិតកំពូលដែលរួមបញ្ចូលចំណេះដឹងពី Module 01 ដល់ Module 26 ទាំងអស់ (Next.js, TanStack Query v5, Zustand, React Hook Form, Zod, Shadcn UI, Vitest)។",
        "explanation": "នេះគឺជាគម្រោងចុងក្រោយបង្អស់ (**Final Capstone**) ដែលសំយោគចំណេះដឹងទាំងអស់ពី Module 01 ដល់ Module 26 ទៅជាកម្មវិធីកម្រិតសហគ្រាស (**Enterprise-Grade Application**) ពេញលេញមួយ។ គម្រោងនេះរួមបញ្ចូលស្ថាបត្យកម្មទំនើប៖ **Next.js / React 19**, **TanStack Query v5** សម្រាប់ Server-state Caching និង Optimistic Updates, **Zustand** សម្រាប់ Global Client UI State, **React Hook Form + Zod** សម្រាប់ Type-safe Form Validation, **Tailwind CSS + Shadcn UI** សម្រាប់ Design System, និង **Vitest** សម្រាប់ Automated Testing។",
        "keyPoints": [
          "**Enterprise 5-Tier Architecture**: បែងចែកស្រទាប់កូដច្បាស់លាស់ (Presentation → Features → Services → Store → Types/Utils)។",
          "**Server Cache Invalidation**: ប្រើ TanStack Query `useMutation` ជាមួយ `queryClient.invalidateQueries` និង Optimistic UI Rollback។",
          "**Type-Safe Validation**: បង្កើត Zod Schema តែមួយសម្រាប់បង្កើតទាំង TypeScript Type និង Form Validation Logic។",
          "**Production-Ready Standards**: រៀបចំ Error Boundaries, Suspense Skeletons, SEO Metadata, និង Unit Test Suite ជាមួយ Vitest & React Testing Library។"
        ],
        "codeSnippet": "import React from \"react\";\nimport { useQuery, useMutation, useQueryClient } from \"@tanstack/react-query\";\nimport { useForm } from \"react-hook-form\";\nimport { zodResolver } from \"@hookform/resolvers/zod\";\nimport { z } from \"zod\";\nimport { useUIStore } from \"@/store/useUIStore\";\n\n// 1. Zod Schema & Inferred Type\nexport const customerSchema = z.object({\n  name: z.string().min(2, \"ឈ្មោះត្រូវមានយ៉ាងតិច ២ តួអក្សរ\"),\n  email: z.string().email(\"ទម្រង់ Email មិនត្រឹមត្រូវ\"),\n  plan: z.enum([\"starter\", \"pro\", \"enterprise\"]),\n});\n\nexport type CustomerInput = z.infer<typeof customerSchema>;\n\n// 2. Enterprise Feature Component\nexport function CustomerManagementFeature() {\n  const queryClient = useQueryClient();\n  const { addToast } = useUIStore();\n\n  // Data Fetching via TanStack Query v5\n  const { data: customers, isLoading } = useQuery({\n    queryKey: [\"customers\"],\n    queryFn: async () => {\n      const res = await fetch(\"/api/customers\");\n      if (!res.ok) throw new Error(\"បរាជ័យក្នុងការទាញយកទិន្នន័យ\");\n      return res.json();\n    },\n  });\n\n  // Form Management with React Hook Form & Zod\n  const form = useForm<CustomerInput>({\n    resolver: zodResolver(customerSchema),\n    defaultValues: { name: \"\", email: \"\", plan: \"starter\" },\n  });\n\n  // Mutation with Cache Invalidation\n  const mutation = useMutation({\n    mutationFn: async (newCustomer: CustomerInput) => {\n      const res = await fetch(\"/api/customers\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        body: JSON.stringify(newCustomer),\n      });\n      return res.json();\n    },\n    onSuccess: () => {\n      queryClient.invalidateQueries({ queryKey: [\"customers\"] });\n      form.reset();\n      addToast({ type: \"success\", message: \"បង្កើតអតិថិជនថ្មីបានជោគជ័យ!\" });\n    },\n  });\n\n  return (\n    <div className=\"space-y-6\">\n      <h2 className=\"text-2xl font-bold text-slate-100\">Customer Management</h2>\n      {/* Forms, Tables, Skeletons, and Metrics integrate here */}\n    </div>\n  );\n}",
        "codeLanguage": "tsx",
        "codeTitle": "Enterprise 5-Tier Architecture Integration",
        "proTip": "អនុវត្ត 5-Tier Architecture ឱ្យបានដាច់ស្រឡះ៖ Presentation (Components), Domain Features, State/Caching (TanStack Query + Zustand), Network Service (Axios), និង Type/Validation Schemas (TypeScript + Zod)។",
        "pitfall": "កុំច្រឡំរវាង Server State និង Client State! ទិន្នន័យពី Database/API ត្រូវទុកឱ្យ TanStack Query ជាអ្នកគ្រប់គ្រង Cache និង Revalidation ចំណែក Client-only State (ដូចជា Dark/Light mode, Sidebar collapse, Active filter tabs) ទើបត្រូវរក្សាទុកក្នុង Zustand។"
      }
    ]
  }
];
