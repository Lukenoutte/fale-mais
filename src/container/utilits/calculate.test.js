import { calculateWithoutPlan, calculateWithPlan } from "./calculate";

test("Calculate value with plan", () => {
    expect(calculateWithPlan(1.90, 20, 30)).toBe(0);
    expect(calculateWithPlan(1.70, 80, 60)).toBe(37.4);
    expect(calculateWithPlan(1.90, 200, 120)).toBe(167.2);
});

test("Calculate value without plan", () => {
    expect(calculateWithoutPlan(1.90, 20, 30)).toBe(38);
    expect(calculateWithoutPlan(1.70, 80, 60)).toBe(136);
    expect(calculateWithoutPlan(1.90, 200, 120)).toBe(380);
});