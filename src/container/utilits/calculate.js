
function calculateWithoutPlan(moneyPerMinute, typedMinutes) {
  let normalValue = typedMinutes * moneyPerMinute;
  return normalValue;
}

function calculateWithPlan(moneyPerMinute, typedMinutes, planValue) {
  let minutesLeftUsingPlan = typedMinutes - planValue;
  const percentTariff = 10;

  if (minutesLeftUsingPlan > 0) {
    let tariffValue = (percentTariff / 100) * minutesLeftUsingPlan;

    let valueUsingPlan = (minutesLeftUsingPlan + tariffValue) * moneyPerMinute;
    return valueUsingPlan;
  } else {
    return 0;
  }
}

export { calculateWithoutPlan, calculateWithPlan };
