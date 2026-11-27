import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const docsDir = path.join(repoRoot, "docs");
const distDir = path.join(docsDir, ".vuepress", "dist");
const documentsPath = path.join(
  docsDir,
  ".vuepress",
  "config-client",
  "documents.ts"
);
const sidebarPath = path.join(
  docsDir,
  ".vuepress",
  "config-client",
  "sidebar.ts"
);

const baseUrl = "https://docs.cloudlinux.com";
const siteTitle = "CloudLinux Documentation";
const siteSummary =
  "CloudLinux OS is a Linux distribution for shared hosting that isolates each customer in a Lightweight Virtual Environment (LVE) with its own resource limits, and adds CageFS, PHP/Python/Node.js/Ruby selectors, MySQL Governor and AccelerateWP. This documentation also covers CLN (CloudLinux Network) licensing, the CloudLinux subsystem for Ubuntu and end-user guides.";

const normalizeRouteKey = (route) => (route.endsWith("/") ? route : `${route}/`);

const parseExportDefault = (content) => {
  const withoutExport = content.replace(/^\s*export\s+default\s+/m, "").trim();
  const withoutSemicolon = withoutExport.replace(/;?\s*$/, "");
  return new Function(`return (${withoutSemicolon})`)();
};

const routeToDocPath = (route) => {
  const cleaned = route.replace(/^\//, "");
  if (route.endsWith(".md")) {
    return path.join(docsDir, cleaned);
  }
  const withSlash = route.endsWith("/") ? route : `${route}/`;
  return path.join(docsDir, withSlash.replace(/^\//, ""), "README.md");
};

const routeToMdUrl = (route) => {
  if (route.endsWith(".md")) {
    return `${baseUrl}${route}`;
  }
  const withSlash = route.endsWith("/") ? route : `${route}/`;
  return `${baseUrl}${withSlash}index.md`;
};

const routeToDistMarkdownPath = (route) => {
  const cleaned = route.replace(/^\//, "");
  if (route.endsWith(".md")) {
    return path.join(distDir, cleaned);
  }
  const withSlash = route.endsWith("/") ? route : `${route}/`;
  return path.join(distDir, withSlash.replace(/^\//, ""), "index.md");
};

const getMarkdownTitle = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  let startIndex = 0;
  if (lines[0] === "---") {
    const endIndex = lines.findIndex((line, i) => i > 0 && line === "---");
    if (endIndex !== -1) {
      // A frontmatter title is the full page title; the first heading may be a
      // shorter in-page one.
      const titleLine = lines
        .slice(1, endIndex)
        .find((line) => /^title:\s*/.test(line));
      if (titleLine) {
        return titleLine
          .replace(/^title:\s*/, "")
          .trim()
          .replace(/^['"]|['"]$/g, "");
      }
      startIndex = endIndex + 1;
    }
  }
  for (let i = startIndex; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line.startsWith("# ")) {
      return line.replace(/^#\s+/, "").trim();
    }
  }
  return path.basename(filePath, path.extname(filePath));
};

const sanitizeMarkdownTitle = (title) => {
  const hasHtml = /<[^>]+>/.test(title);
  let normalized = title.replace(/<[^>]*>/g, " ");
  normalized = normalized.replace(/\s+/g, " ").trim();
  if (hasHtml && /\bdeprecated\b/i.test(normalized)) {
    normalized = normalized.replace(/\bdeprecated\b/gi, "[DEPRECATED]");
    normalized = normalized.replace(/\s*\[DEPRECATED\]\s*/g, " [DEPRECATED] ");
    normalized = normalized.replace(/\s+/g, " ").trim();
  }
  return normalized;
};

const stripFrontmatter = (content) => {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== "---") {
    return content;
  }
  const endIndex = lines.findIndex((line, i) => i > 0 && line === "---");
  if (endIndex === -1) {
    return content;
  }
  return lines.slice(endIndex + 1).join("\n").trimStart();
};

const readMarkdownContent = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8");
  return stripFrontmatter(content);
};

const writeMarkdownCopy = async (filePath, route) => {
  const outputPath = routeToDistMarkdownPath(route);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const content = await fs.readFile(filePath, "utf8");
  await fs.writeFile(outputPath, content);
};

const buildLlmsTxt = async () => {
  const [documentsRaw, sidebarRaw] = await Promise.all([
    fs.readFile(documentsPath, "utf8"),
    fs.readFile(sidebarPath, "utf8"),
  ]);
  const documents = parseExportDefault(documentsRaw);
  const sidebar = parseExportDefault(sidebarRaw);
  const normalizedSidebar = new Map(
    Object.entries(sidebar).map(([key, value]) => [
      normalizeRouteKey(key),
      value,
    ])
  );

  const lines = [`# ${siteTitle}`, "", `> ${siteSummary}`, ""];
  const fullLines = [`# ${siteTitle}`, "", `> ${siteSummary}`, ""];

  // A document links to a page inside a sidebar section (for example
  // "/cloudlinuxos/cloudlinux_installation/" lives in "/cloudlinuxos/"), so
  // pick the longest sidebar key that prefixes the document link. Several
  // documents can point into the same section (AccelerateWP and Isolates are
  // pages of CloudLinux OS); that section is emitted once, under the first
  // document that reaches it.
  const sidebarKeys = [...normalizedSidebar.keys()].sort(
    (a, b) => b.length - a.length
  );
  const emittedSections = new Set();

  for (const doc of documents) {
    const heading = sanitizeMarkdownTitle(doc.title);
    const docRoute = normalizeRouteKey(doc.link.split("#")[0]);
    const sectionKey = sidebarKeys.find((key) => docRoute.startsWith(key));
    if (!sectionKey || emittedSections.has(sectionKey)) {
      continue;
    }
    emittedSections.add(sectionKey);
    const sidebarEntry = normalizedSidebar.get(sectionKey);
    // A sidebar child is either a route string, or a ["route", "Sidebar label"]
    // pair used to give the sidebar a shorter label than the page title.
    const sidebarRoutes = sidebarEntry
      .flatMap((entry) => entry.children || [])
      .map((child) => (Array.isArray(child) ? child[0] : child));

    const orderedRoutes = sidebarRoutes;

    lines.push(`## ${heading}`, "");
    fullLines.push(`## ${heading}`, "");

    for (const route of orderedRoutes) {
      const docPath = routeToDocPath(route);
      try {
        await fs.access(docPath);
      } catch {
        continue;
      }
      await writeMarkdownCopy(docPath, route);
      const rawTitle = await getMarkdownTitle(docPath);
      const title = sanitizeMarkdownTitle(rawTitle);
      lines.push(`- [${title}](${routeToMdUrl(route)})`);

      const content = await readMarkdownContent(docPath);
      fullLines.push(`### ${title}`, "", content.trimEnd(), "");
    }

    lines.push("");
    fullLines.push("");
  }

  const outputPath = path.join(distDir, "llms.txt");
  lines.push(
    "---",
    "",
    `For more comprehensive documentation, see [llms-full.txt](${baseUrl}/llms-full.txt)`
  );
  await fs.writeFile(outputPath, lines.join("\n").trimEnd() + "\n");

  const fullOutputPath = path.join(distDir, "llms-full.txt");
  await fs.writeFile(fullOutputPath, fullLines.join("\n").trimEnd() + "\n");
};

buildLlmsTxt().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
