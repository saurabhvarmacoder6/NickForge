import { describe, it, expect } from "vitest";
import { generateNames } from "../src/utils/generator";

describe("bug reproduction", () => {
  it("shows results for saurabh / pro", () => {
    const r = generateNames({ input: "saurabh", category: "pro", count: 8 });
    console.log("saurabh/pro:", r.map(x => x.nickname));
    expect(r.length).toBeGreaterThan(0);
  });

  it("shows results for Shadow / decorative", () => {
    const r = generateNames({ input: "Shadow", category: "decorative", count: 8 });
    console.log("Shadow/decorative:", r.map(x => x.nickname));
    expect(r.length).toBeGreaterThan(0);
  });

  it("shows results for small-caps filter", () => {
    const r = generateNames({ input: "saurabh", category: "small-caps", count: 4 });
    console.log("saurabh/small-caps:", r.map(x => x.nickname));
    expect(r.length).toBeGreaterThan(0);
  });

  it("shows results for fullwidth", () => {
    const r = generateNames({ input: "Shadow", category: "fullwidth", count: 4 });
    console.log("Shadow/fullwidth:", r.map(x => x.nickname));
    expect(r.length).toBeGreaterThan(0);
  });

  it("filter matches results", () => {
    const r = generateNames({ input: "Devil", category: "dark", count: 6 });
    console.log("Devil/dark:", r.map(x => ({ nickname: x.nickname, category: x.category })));
    const filtered = r.filter(x => x.category === "dark");
    expect(filtered.length).toBeGreaterThan(0);
  });

  it("filter all includes everything", () => {
    const allResults = generateNames({ input: "RDX", category: "pro", count: 8 });
    expect(allResults.length).toBeGreaterThan(0);
  });

  it("empty input produces results", () => {
    const r = generateNames({ input: "", category: "minimal", count: 4 });
    console.log("empty/minimal:", r.map(x => x.nickname));
    expect(r.length).toBeGreaterThanOrEqual(1);
  });

  it("no stale results between categories", () => {
    const a = generateNames({ input: "X", category: "symbol", count: 4 });
    const b = generateNames({ input: "X", category: "clean", count: 4 });
    expect(b[0].category).toBe("clean");
    expect(a[0].category).toBe("symbol");
  });
});
