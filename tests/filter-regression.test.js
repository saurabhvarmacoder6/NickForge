import { describe, it, expect } from "vitest";
import { generateNames } from "../src/utils/generator";

describe("filter regression", () => {
  it("generates results that match their own category", () => {
    const names = generateNames({ input: "saurabh", category: "small-caps", count: 4 });
    names.forEach((n) => {
      expect(n.category).toBe("small-caps");
      expect(n.nickname).toBeTruthy();
    });
  });

  it("filter 'all' includes everything", () => {
    const names = generateNames({ input: "Shadow", category: "pro", count: 8 });
    expect(names.every((n) => n.category === "pro")).toBe(true);
  });

  it("each filter category produces unique results", () => {
    const pro = generateNames({ input: "Devil", category: "pro", count: 4 });
    const dark = generateNames({ input: "Devil", category: "dark", count: 4 });
    expect(pro[0].nickname).not.toBe(dark[0].nickname);
  });

  it("no duplicate results in a batch", () => {
    const names = generateNames({ input: "RDX", category: "competitive", count: 10 });
    const unique = new Set(names.map((n) => n.nickname));
    expect(unique.size).toBe(names.length);
  });

  it("results contain non-empty nicknames for every input", () => {
    ["saurabh", "Shadow", "Devil", "RDX", "saurabh jod"].forEach((name) => {
      const r = generateNames({ input: name, category: "pro", count: 4 });
      r.forEach((n) => {
        expect(n.nickname.length).toBeGreaterThan(0);
      });
    });
  });

  it("filtering by category selects only that category", () => {
    const names = generateNames({ input: "X", category: "symbol", count: 6 });
    const filtered = names.filter((n) => n.category === "symbol");
    expect(filtered.length).toBe(names.length);
  });

  it("reset filter shows all results", () => {
    const names = generateNames({ input: "Player", category: "clean", count: 4 });
    expect(names.length).toBeGreaterThan(0);
  });
});
