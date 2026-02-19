import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "fs";
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "src");
const DIST = resolve(ROOT, "dist");
const TMP = resolve(ROOT, ".build-tmp");
const PYFTSUBSET = resolve(ROOT, ".venv/bin/pyftsubset");

mkdirSync(DIST, { recursive: true });
mkdirSync(TMP, { recursive: true });

// 1. Compile Tailwind CSS (tree-shaken)
console.log("Compiling Tailwind...");
const tailwindCss = execSync(
  `npx tailwindcss -i "${resolve(SRC, "tailwind.css")}" --minify`,
  { cwd: ROOT }
).toString();
console.log(`  Tailwind CSS: ${Math.round(tailwindCss.length / 1024)}KB`);

// 2. Collect all unique characters across all HTML files
// Only build files that don't start with _ (convention: _about.html = draft/template)
const htmlFiles = readdirSync(SRC).filter((f) => f.endsWith(".html") && !f.startsWith("_"));
const allChars = new Set<string>();
for (const file of htmlFiles) {
  const html = readFileSync(resolve(SRC, file), "utf-8");
  // Strip HTML tags to get text content, but also keep chars used in attributes
  for (const ch of html) {
    allChars.add(ch);
  }
}
const unicodes = [...allChars].map((ch) => "U+" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
console.log(`  Unique characters: ${allChars.size}`);

// Process each HTML file
for (const file of htmlFiles) {
  let html = readFileSync(resolve(SRC, file), "utf-8");

  // 3. Replace Tailwind CDN script + config with compiled CSS
  html = html.replace(
    /\s*<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>[\s\S]*?<\/script>/,
    ""
  );
  html = html.replace("</style>", `\n${tailwindCss}\n    </style>`);

  // 4. Inline images as base64 data URIs (skip favicons — copy those to dist)
  html = html.replace(/src="images\/([^"]+)"/g, (_match, imgFile: string) => {
    const srcPath = resolve(SRC, "images", imgFile);
    const buf = readFileSync(srcPath);
    const base64 = buf.toString("base64");
    const ext = imgFile.split(".").pop();
    const mimeTypes: Record<string, string> = { webp: "image/webp", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };
    const mimeType = mimeTypes[ext || ""] || "image/png";
    console.log(`  Inlined ${imgFile} (${Math.round(buf.length / 1024)}KB)`);
    return `src="data:${mimeType};base64,${base64}"`;
  });

  // 5. Inline Google Fonts (CSS + subsetted font files as base64)
  const fontLinkRegex = /<link[^>]+fonts\.googleapis\.com[^>]+>/g;
  const fontLinks = html.match(fontLinkRegex) || [];
  let inlinedFontCss = "";
  let fontIndex = 0;

  for (const link of fontLinks) {
    const href = (
      link.match(/href='([^']+)'/) || link.match(/href="([^"]+)"/)
    )?.[1];
    if (!href) continue;

    // Fetch CSS with modern UA to get woff2 format
    const fullCss = execSync(
      `curl -s -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" "${href}"`
    ).toString();

    // Only keep latin @font-face blocks
    const css = fullCss
      .split("/* ")
      .filter((block) => block.startsWith("latin */") || !block.includes("*/"))
      .join("/* ");

    // Download, subset, and inline each font file
    let processedCss = css;
    const urlMatches = [...css.matchAll(/url\(([^)]+)\)/g)];
    for (const [, url] of urlMatches) {
      if (url.startsWith("data:")) continue;
      fontIndex++;

      // Download font to temp file
      const origPath = resolve(TMP, `font-${fontIndex}.woff2`);
      const subsetPath = resolve(TMP, `font-${fontIndex}.subset.woff2`);
      execSync(`curl -s -o "${origPath}" "${url}"`);
      const origSize = readFileSync(origPath).length;

      // Subset with pyftsubset
      execSync(
        `${PYFTSUBSET} "${origPath}" --unicodes="${unicodes.join(",")}" --flavor=woff2 --output-file="${subsetPath}"`,
      );

      const subsetBuf = readFileSync(subsetPath);
      const fontBase64 = subsetBuf.toString("base64");
      processedCss = processedCss.replace(
        url,
        `data:font/woff2;base64,${fontBase64}`
      );
      console.log(
        `  Inlined font: ${Math.round(origSize / 1024)}KB → ${Math.round(subsetBuf.length / 1024)}KB`
      );
    }

    inlinedFontCss += processedCss;
    html = html.replace(link, "");
  }

  if (inlinedFontCss) {
    html = html.replace("</style>", `\n${inlinedFontCss}\n    </style>`);
  }

  writeFileSync(resolve(DIST, file), html);
  console.log(`Built ${file}`);
}

// Copy static files to dist
for (const f of ["serve.json", "_headers", "images/favicon.ico"]) {
  const src = resolve(SRC, f);
  try {
    mkdirSync(dirname(resolve(DIST, f)), { recursive: true });
    writeFileSync(resolve(DIST, f), readFileSync(src));
  } catch {}
}

// Clean up
rmSync(TMP, { recursive: true });
console.log("Done");
