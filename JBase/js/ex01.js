/**
 * * Input: Nhận weight (kg), height (m)
 * ! LOGIC viết hàm calc BMI:
 * ? output: Trả ra chỉ số BMI phân loại, công thức BMI = w / h^2
 * ? Nếu BMI < 18.5: Thiếu cân; 18.5 <= BMI < 23: Bình thường; 23 <= BMI < 25: Thừa cân;
 * ? BMI >= 25: Béo phì
 */

const weight = +prompt("weight?");
const height = +prompt("height?");

const calcBMI = (weight, height) => {
  const BMI = weight / (height * height);
  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    return "Cân nặng chiều cao k hợp lệ";
  }
  if (BMI < 18.5) return `"BMI = ${BMI.toFixed(2)} Thiếu cân"`;
  else if (BMI < 23) return `"BMI = ${BMI.toFixed(2)} Bình thường"`;
  else if (BMI < 25) return `"BMI = ${BMI.toFixed(2)} Thừa cân"`;
  else if (BMI >= 25) return `"BMI = ${BMI.toFixed(2)} Béo phì"`;
};

console.log(calcBMI(weight, height));
