import { describe, expect, it } from "vitest";
import { add, multiply } from "./math";

describe("Math Functions", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});