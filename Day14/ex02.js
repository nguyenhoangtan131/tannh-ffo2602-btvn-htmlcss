function calcBMI(height, weight) {
  const bmi = (weight * 10000) / (height * height);
  return bmi;
}

const height = +prompt("height?");
const weight = +prompt("weight?");

console.log(calcBMI(height, weight));
