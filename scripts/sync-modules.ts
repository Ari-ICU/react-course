import fs from "fs";
import path from "path";
import { modulesData, ModuleItem, TopicItem } from "../src/data/modules-data";

const CONTENT_DIR = path.resolve(__dirname, "../src/content/modules");
const DATA_FILE = path.resolve(__dirname, "../src/data/modules-data.ts");

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function yamlString(val: string): string {
  if (val.includes("\n") || val.includes('"') || val.includes("'")) {
    return JSON.stringify(val);
  }
  return `"${val.replace(/"/g, '\\"')}"`;
}

/**
 * Generate MDX files from modulesData
 */
export function exportToMDX() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  let totalModules = 0;
  let totalLessons = 0;

  for (const mod of modulesData) {
    totalModules++;
    const modSlug = slugify(mod.title);
    const modFolderName = `${mod.id}-${modSlug}`;
    const modDirPath = path.join(CONTENT_DIR, modFolderName);

    if (!fs.existsSync(modDirPath)) {
      fs.mkdirSync(modDirPath, { recursive: true });
    }

    // 1. Create index.mdx for the module
    const moduleIndexContent = `---
id: ${yamlString(mod.id)}
number: ${yamlString(mod.number)}
title: ${yamlString(mod.title)}
category: ${yamlString(mod.category)}
summary: ${yamlString(mod.summary)}
iconName: ${yamlString(mod.iconName)}
totalLessons: ${mod.topics.length}
---

# Module ${mod.number}: ${mod.title}

${mod.summary}

## Module Syllabus (${mod.topics.length} Lessons)

${mod.topics.map((t) => `- **Lesson ${t.number}**: ${t.title} - *${t.summary}*`).join("\n")}
`;

    fs.writeFileSync(path.join(modDirPath, "index.mdx"), moduleIndexContent, "utf8");

    // 2. Create an MDX file for each topic/lesson
    for (const topic of mod.topics) {
      totalLessons++;
      const topicSlug = slugify(topic.title);
      const lessonFileName = `${topic.number}-${topicSlug}.mdx`;
      const lessonFilePath = path.join(modDirPath, lessonFileName);

      const frontmatterLines: string[] = [
        "---",
        `id: ${yamlString(topic.id)}`,
        `number: ${yamlString(topic.number)}`,
        `title: ${yamlString(topic.title)}`,
        `moduleId: ${yamlString(mod.id)}`,
        `moduleNumber: ${yamlString(mod.number)}`,
        `category: ${yamlString(mod.category)}`,
        `summary: ${yamlString(topic.summary)}`,
      ];

      if (topic.interactiveDemoKey) {
        frontmatterLines.push(`interactiveDemoKey: ${yamlString(topic.interactiveDemoKey)}`);
      }
      if (topic.codeTitle) {
        frontmatterLines.push(`codeTitle: ${yamlString(topic.codeTitle)}`);
      }
      if (topic.image) {
        frontmatterLines.push(`image: ${yamlString(topic.image)}`);
      }

      frontmatterLines.push("---");

      const keyPointsList = topic.keyPoints && topic.keyPoints.length > 0
        ? `\n\n### Key Concepts & Rules:\n\n${topic.keyPoints.map((kp) => `- ${kp}`).join("\n")}`
        : "";

      const imageSection = topic.image
        ? `\n\n### ${topic.codeTitle || topic.title}\n\n![${topic.title}](${topic.image})`
        : "";

      const codeBlockSection = topic.codeSnippet
        ? `\n\n### Code Example: ${topic.codeTitle || topic.title}\n\n\`\`\`${topic.codeLanguage || "jsx"}\n${topic.codeSnippet}\n\`\`\``
        : imageSection;

      const lessonContent = `${frontmatterLines.join("\n")}

# ${topic.title}

${topic.explanation}${keyPointsList}${codeBlockSection}
`;

      fs.writeFileSync(lessonFilePath, lessonContent, "utf8");
    }
  }

  // Remove the old flat file if present
  const oldFlatFile = path.join(CONTENT_DIR, "module-04-passing-props.mdx");
  if (fs.existsSync(oldFlatFile)) {
    fs.unlinkSync(oldFlatFile);
    console.log("Removed legacy flat file:", oldFlatFile);
  }

  console.log(`Successfully exported ${totalModules} modules and ${totalLessons} lesson MDX files to ${CONTENT_DIR}`);
}

/**
 * Parses frontmatter and body from an MDX file
 */
function parseMDXFile(content: string) {
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    return { frontmatter: {}, body: content };
  }

  const fmRaw = frontmatterMatch[1];
  const body = content.slice(frontmatterMatch[0].length).trim();
  const frontmatter: Record<string, any> = {};

  const lines = fmRaw.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      try {
        val = JSON.parse(val);
      } catch {
        val = val.slice(1, -1);
      }
    } else if (val === "true") {
      val = true as any;
    } else if (val === "false") {
      val = false as any;
    } else if (/^\d+$/.test(val)) {
      val = parseInt(val, 10) as any;
    }

    frontmatter[key] = val;
  }

  return { frontmatter, body };
}

/**
 * Recompiles MDX folders back into modulesData format
 */
export function compileFromMDX() {
  if (!fs.existsSync(CONTENT_DIR)) {
    throw new Error(`Content directory ${CONTENT_DIR} not found`);
  }

  const moduleFolders = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name.startsWith("module-"))
    .map((dirent) => dirent.name)
    .sort((a, b) => {
      const numA = parseInt(a.replace(/^module-(\d+).*/, "$1"), 10);
      const numB = parseInt(b.replace(/^module-(\d+).*/, "$1"), 10);
      return numA - numB;
    });

  const compiledModules: ModuleItem[] = [];

  for (const folderName of moduleFolders) {
    const modDirPath = path.join(CONTENT_DIR, folderName);
    const indexPath = path.join(modDirPath, "index.mdx");
    let modMeta: any = {};

    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, "utf8");
      modMeta = parseMDXFile(indexContent).frontmatter;
    }

    const lessonFiles = fs
      .readdirSync(modDirPath)
      .filter((file) => file.endsWith(".mdx") && file !== "index.mdx")
      .sort((a, b) => {
        const numA = parseInt(a.split("-")[0], 10);
        const numB = parseInt(b.split("-")[0], 10);
        return numA - numB;
      });

    const topics: TopicItem[] = [];

    for (const lessonFile of lessonFiles) {
      const filePath = path.join(modDirPath, lessonFile);
      const rawContent = fs.readFileSync(filePath, "utf8");
      const { frontmatter, body } = parseMDXFile(rawContent);

      // Parse explanation, key points, and code snippet from body
      let explanation = "";
      const keyPoints: string[] = [];
      let codeSnippet = "";
      let codeLanguage = frontmatter.codeLanguage || "jsx";

      const titleMatch = body.match(/^#\s+[^\r\n]+/);
      let rest = body;
      if (titleMatch) {
        rest = body.slice(titleMatch[0].length).trim();
      }

      // Look for code block
      const codeBlockMatch = rest.match(/```(\w*)\r?\n([\s\S]*?)```/);
      if (codeBlockMatch) {
        codeLanguage = codeBlockMatch[1] || codeLanguage;
        codeSnippet = codeBlockMatch[2].trimEnd();
      }

      // Look for key concepts
      const keyPointsMatch = rest.match(/###\s+Key Concepts & Rules:?\s*([\s\S]*?)(?=###\s+Code Example|\s*```|$)/);
      if (keyPointsMatch) {
        const kpSection = keyPointsMatch[1].trim();
        const kpLines = kpSection.split(/\r?\n/);
        for (const line of kpLines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
            keyPoints.push(trimmed.replace(/^[-*]\s*/, ""));
          }
        }
      }

      // Look for image in frontmatter or in markdown
      let image = frontmatter.image || "";
      const imageMatch = rest.match(/!\[.*?\]\((.*?)\)/);
      if (!image && imageMatch) {
        image = imageMatch[1];
      }

      // Explanation is everything between Title and Key Concepts / Code Example / Image
      let explEndIdx = rest.indexOf("### Key Concepts");
      if (explEndIdx === -1) explEndIdx = rest.indexOf("### Code Example");
      if (explEndIdx === -1) explEndIdx = rest.indexOf("### ");
      if (explEndIdx === -1) explEndIdx = rest.indexOf("![");
      if (explEndIdx === -1) explEndIdx = rest.indexOf("```");
      if (explEndIdx !== -1) {
        explanation = rest.slice(0, explEndIdx).trim();
      } else {
        explanation = rest.trim();
      }

      const topicItem: TopicItem = {
        id: frontmatter.id,
        number: String(frontmatter.number).padStart(2, "0"),
        title: frontmatter.title,
        summary: frontmatter.summary || "",
        explanation: explanation || frontmatter.summary || "",
        keyPoints: keyPoints,
        codeSnippet: codeSnippet,
        codeLanguage: codeLanguage,
        codeTitle: frontmatter.codeTitle,
        interactiveDemoKey: frontmatter.interactiveDemoKey,
        image: image || undefined,
      };

      topics.push(topicItem);
    }

    const moduleItem: ModuleItem = {
      id: modMeta.id || folderName.split("-").slice(0, 2).join("-"),
      number: String(modMeta.number || folderName.replace(/^module-(\d+).*/, "$1")).padStart(2, "0"),
      title: modMeta.title || folderName,
      category: modMeta.category || "Fundamentals",
      summary: modMeta.summary || "",
      iconName: modMeta.iconName || "BookOpen",
      topics: topics,
    };

    compiledModules.push(moduleItem);
  }

  return compiledModules;
}

// CLI Execution
const args = process.argv.slice(2);
if (args.includes("--compile")) {
  console.log("Compiling MDX files back to modulesData...");
  const compiled = compileFromMDX();
  const fileOutput = `// Generated from src/content/modules by scripts/sync-modules.ts
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

export const modulesData: ModuleItem[] = ${JSON.stringify(compiled, null, 2)};
`;
  fs.writeFileSync(DATA_FILE, fileOutput, "utf8");
  console.log(`Recompiled ${compiled.length} modules and updated ${DATA_FILE}`);
} else {
  console.log("Exporting modulesData to MDX files...");
  exportToMDX();
}
