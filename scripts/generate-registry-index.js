import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REGISTRY_DIR = path.resolve(__dirname, "../open-sse/providers/registry");

function generate() {
  const files = fs.readdirSync(REGISTRY_DIR)
    .filter(f => f.endsWith(".js") && f !== "index.js" && f !== "REGISTRY_TEMPLATE.js")
    .sort();

  const imports = [];
  const exports = [];

  files.forEach((file, index) => {
    imports.push(`import p${index} from "./${file}";`);
    exports.push(`  p${index}`);
  });

  const content = [
    `// Auto-generated: static imports for all registry entries`,
    imports.join("\n"),
    ``,
    `export default [`,
    exports.join(",\n"),
    `];`,
    ``
  ].join("\n");

  fs.writeFileSync(path.join(REGISTRY_DIR, "index.js"), content, "utf8");
  console.log(`✅ Successfully generated registry index with ${files.length} entries.`);
}

generate();
