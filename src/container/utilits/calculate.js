
function calculateWithoutPlan(moneyPerMinute, typedMinutes) {
  return typedMinutes * moneyPerMinute;
}

function calculateWithPlan(moneyPerMinute, typedMinutes, planValue) {
  const minutesLeftUsingPlan = typedMinutes - planValue;
  const percentTariff = 10;
  if (minutesLeftUsingPlan < 1) return 0
  const tariffValue = (percentTariff / 100) * minutesLeftUsingPlan;
  return (minutesLeftUsingPlan + tariffValue) * moneyPerMinute;
}

export { calculateWithoutPlan, calculateWithPlan };
