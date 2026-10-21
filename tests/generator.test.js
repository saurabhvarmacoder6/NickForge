import { describe, it, expect } from "vitest";
import { generateNames, generateSquad } from "../src/utils/generator";

describe("generator", () => {
  it("generates names with input", () => {
    const names = generateNames({ input: "Shadow", category: "pro", count: 4 });
    expect(names.length).toBeGreaterThan(0);
    expect(names[0].nickname).toContain("Shadow");
  });

  it("handles empty input", () => {
    const names = generateNames({ input: "", category: "minimal", count: 3 });
    expect(names.length).toBeGreaterThanOrEqual(1);
  });

  it("produces unique results for same input", () => {
    const names = generateNames({ input: "X", category: "pro", count: 8 });
    const unique = new Set(names.map((n) => n.nickname));
    expect(unique.size).toBe(names.length);
  });

  it("counts characters correctly", () => {
    const name = generateNames({ input: "A", category: "clean", count: 1 })[0];
    expect(name.length).toBe(name.nickname.length);
  });

  it("generates squad for 2-6 members", () => {
    const squad = generateSquad({ members: ["A", "B", "C", "D", "E", "F"], theme: "pro" });
    expect(squad.length).toBe(6);
  });

  it("supports different categories", () => {
    const categories = ["pro", "stylish", "minimal", "clean", "dark", "competitive", "symbol", "decorative"];
    categories.forEach((cat) => {
      const name = generateNames({ input: "Test", category: cat, count: 1 })[0];
      expect(name).toBeTruthy();
      expect(name.category).toBe(cat);
    });
  });
});
