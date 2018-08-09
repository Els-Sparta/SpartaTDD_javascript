function addTwoNumber(num1, num2) {
  return num1 + num2;
}

function minusTwoNumber(num1, num2) {
  return num1 - num2;
}

function multiplyTwoNumber(num1, num2) {
  return num1 * num2;
}

function divideTwoNumber(num1, num2) {
  return num1 / num2;
}

function powerOfTwoNumber(num1, num2) {
  return Math.pow(num1, num2);
}

function sqrtOfNumber(num1) {
  return Math.sqrt(num1);
}

function metricBMIcalculator(weight, height) {
  return Math.round((weight/height) / height);
}

function imperialBMIcalculator(weight, height) {
  return Math.round(((weight * 703)/height)/height);
}

function tripTime(distance, average_speed) {
  time_result = distance / average_speed;
  return Math.round(time_result);
}

function tripPrice(distance, fuel_efficiency, cost_per_gallon) {
  price_result = (distance / fuel_efficiency) * cost_per_gallon
  return Math.round(price_result);
}

module.exports = {
  addTwoNumber: addTwoNumber,
  minusTwoNumber: minusTwoNumber,
  multiplyTwoNumber: multiplyTwoNumber,
  divideTwoNumber: divideTwoNumber,
  powerOfTwoNumber: powerOfTwoNumber,
  sqrtOfNumber: sqrtOfNumber,
  metricBMIcalculator: metricBMIcalculator,
  imperialBMIcalculator: imperialBMIcalculator,
  tripTime: tripTime,
  tripPrice: tripPrice
}
