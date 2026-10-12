import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const files = [
  new URL("./SKILL.md", import.meta.url),
  new URL("./SKILL.md.tmpl", import.meta.url),
];

test("the ship skill does not add a hardcoded co-author trailer", () => {
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    expect(text).not.toContain("Co-Authored-By:");
  }
});
