// 한국 나이 계산기
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);

// 숫자 계산기
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.multiply(10, minusResult);
const divideResult = calculator.divide(multiplyResult, plusResult);
const squaredResult = calculator.squared(divideResult, minusResult);

console.log(squaredResult);
