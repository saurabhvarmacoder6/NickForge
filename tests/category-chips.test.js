import { describe, it, expect } from "vitest";
import { generateNames } from "../src/utils/generator";

describe("category chip functionality", () => {
  it("pro generates pro results", () => {
    const r = generateNames({ input: "saurabh", category: "pro", count: 4 });
    expect(r.every((item) => item.category === "pro")).toBe(true);
    expect(r.length).toBeGreaterThan(0);
  });

  it("small-caps generates transformed results", () => {
    const r = generateNames({ input: "saurabh", category: "small-caps", count: 4 });
    expect(r.every((item) => item.category === "small-caps")).toBe(true);
    expect(r[0].nickname.length).toBeGreaterThan(0);
  });

  it("fullwidth transforms text", () => {
    const r = generateNames({ input: "Shadow", category: "fullwidth", count: 2 });
    expect(r[0].nickname.length).toBeGreaterThan(0);
  });

  it("math-bold transforms text", () => {
    const r = generateNames({ input: "Devil", category: "math-bold", count: 2 });
    expect(r[0].nickname.length).toBeGreaterThan(0);
  });

  it("fraktur transforms text", () => {
    const r = generateNames({ input: "RDX", category: "fraktur", count: 2 });
    expect(r.length).toBeGreaterThanOrEqual(1);
  });

  it("stylish produces styled results", () => {
    const r = generateNames({ input: "saurabh", category: "stylish", count: 4 });
    expect(r.every((item) => item.category === "stylish")).toBe(true);
  });

  it("minimal produces minimal results", () => {
    const r = generateNames({ input: "saurabh", category: "minimal", count: 3 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("decorative produces decorative frames", () => {
    const r = generateNames({ input: "Shadow", category: "decorative", count: 6 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("symbol uses symbols", () => {
    const r = generateNames({ input: "Devil", category: "symbol", count: 4 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("clean returns clean base", () => {
    const r = generateNames({ input: "saurabh", category: "clean", count: 2 });
    expect(r[0].nickname).toContain("saurabh");
  });

  it("dark produces dark frames", () => {
    const r = generateNames({ input: "Devil", category: "dark", count: 4 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("competitive produces competitive results", () => {
    const r = generateNames({ input: "RDX", category: "competitive", count: 4 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("monospace transforms text", () => {
    const r = generateNames({ input: "A", category: "monospace", count: 1 });
    expect(r[0].nickname).toBeTruthy();
  });

  it("double-struck transforms text", () => {
    const r = generateNames({ input: "X", category: "double-struck", count: 1 });
    expect(r[0].nickname).toBeTruthy();
  });

  it("math-italic transforms text", () => {
    const r = generateNames({ input: "Y", category: "math-italic", count: 1 });
    expect(r[0].nickname).toBeTruthy();
  });

  it("math-bold-italic transforms text", () => {
    const r = generateNames({ input: "Z", category: "math-bold-italic", count: 1 });
    expect(r[0].nickname).toBeTruthy();
  });
});
