import { describe, it, expect } from "vitest";
import { symbols } from "../src/data/symbols";
import { decorativeTemplates } from "../src/data/templates";
import { unicodeStyles } from "../src/data/unicodeStyles";

describe("symbol counts", () => {
  it("reports counts", () => {
    const groupCounts = {};
    symbols.forEach((s) => { groupCounts[s.group] = (groupCounts[s.group] || 0) + 1; });
    console.log("Symbol total:", symbols.length, "groups:", groupCounts);
    console.log("Template total:", decorativeTemplates.length);
    console.log("Unicode styles:", Object.keys(unicodeStyles).length);
    expect(symbols.length).toBeGreaterThanOrEqual(100);
  });
});
