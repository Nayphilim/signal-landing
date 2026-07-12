import { describe, expect, it } from "vitest";
import { estimate, perSeat, teamPrice } from "./pricing";

describe("perSeat", () => {
  it("uses volume tiers", () => {
    expect(perSeat(10)).toBe(24);
    expect(perSeat(50)).toBe(19);
    expect(perSeat(150)).toBe(15);
  });
});

describe("estimate", () => {
  it("multiplies seats by the tier rate", () => {
    expect(estimate(10, false)).toBe(240);
  });
  it("applies the 20% yearly discount", () => {
    expect(estimate(10, true)).toBe(192);
  });
});

describe("teamPrice", () => {
  it("is $24 monthly, $19 yearly", () => {
    expect(teamPrice(false)).toBe(24);
    expect(teamPrice(true)).toBe(19);
  });
});
