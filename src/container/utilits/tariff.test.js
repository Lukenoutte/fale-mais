import  tariff from "./tariff";

test("Get Tariff", () => {
    
    expect(tariff("011", "016")).toBe(1.90);
    expect(tariff("011", "018")).toBe(0.90);
    expect(tariff("011", "017")).toBe(1.70);
});