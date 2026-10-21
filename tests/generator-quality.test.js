import { describe, it, expect } from "vitest";
import { generateNames, generateSquad } from "../src/utils/generator";

describe("generation quality", () => {
  it("produces varied results for saurabh", () => {
    const names = generateNames({ input: "saurabh", category: "pro", count: 10 });
    expect(names.length).toBeGreaterThanOrEqual(4);
    const unique = new Set(names.map((n) => n.nickname));
    expect(unique.size).toBeGreaterThanOrEqual(4);
    const hasRealVariation = names.some((n) => n.nickname.includes("saurabh") && n.nickname !== "saurabhX" && n.nickname !== "saurabh_Pro");
    expect(hasRealVariation).toBe(true);
  });

  it("produces varied results for Shadow", () => {
    const names = generateNames({ input: "Shadow", category: "pro", count: 8 });
    const unique = new Set(names.map((n) => n.nickname));
    expect(unique.size).toBeGreaterThanOrEqual(3);
  });

  it("produces varied decorative results for Devil", () => {
    const names = generateNames({ input: "Devil", category: "decorative", count: 8 });
    expect(names.length).toBeGreaterThanOrEqual(4);
  });

  it("produces varied competitive results for RDX", () => {
    const names = generateNames({ input: "RDX", category: "competitive", count: 6 });
    expect(names.length).toBeGreaterThanOrEqual(3);
  });

  it("unicode styles work for small-caps", () => {
    const names = generateNames({ input: "saurabh", category: "small-caps", count: 2 });
    expect(names.length).toBeGreaterThanOrEqual(1);
  });

  it("unicode styles work for fullwidth", () => {
    const names = generateNames({ input: "saurabh", category: "fullwidth", count: 1 });
    expect(names[0].nickname).toBeTruthy();
  });

  it("deduplicates within a batch", () => {
    const names = generateNames({ input: "X", category: "pro", count: 20 });
    const unique = new Set(names.map((n) => n.nickname));
    expect(unique.size).toBe(names.length);
  });

  it("handles empty input gracefully", () => {
    const names = generateNames({ input: "", category: "minimal", count: 4 });
    expect(names.length).toBeGreaterThanOrEqual(1);
  });

  it("squad supports 2-6 members", () => {
    const squad = generateSquad({ members: ["A", "B", "C"], theme: "pro" });
    expect(squad.length).toBe(3);
  });
});
