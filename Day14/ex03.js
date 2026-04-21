/**
 * *Input salary input
 * ! Dùng if else cho từng trường hợp,
 * ! nộp 5% có nghĩa là lấy số taxpercent là: salary * 5 / 100
 * ! 14 triệu ở mốc 1 sẽ cho 5 % thuế, phần còn lại là ví dụ 30tr sẽ còn 16 triệu là nhân 10%
 * ! biểu diễn là (25 - 11) * 5 / 100 + ( salary - 14 * 10)
 * ? xuất ra số thuế phải đóng
 */

const salary = +prompt("salary?");
function calcTax(salary) {
  if (isNaN(salary) || salary < 0) {
    return "Không hợp lệ";
  }
  let tax = 0;
  let tax_point_1 = ((salary - 11000000) * 5) / 100;
  let tax_point_2 =
    ((25000000 - 11000000) * 5) / 100 + ((salary - 25000000) * 10) / 100;
  let tax_point_3 =
    ((25000000 - 11000000) * 5) / 100 +
    ((50000000 - 25000000) * 10) / 100 +
    ((salary - 50000000) * 20) / 100;
  let tax_point_4 =
    ((25000000 - 11000000) * 5) / 100 +
    ((50000000 - 25000000) * 10) / 100 +
    ((80000000 - 50000000) * 20) / 100 +
    ((salary - 80000000) * 30) / 100;
  if (salary <= 11000000) {
    return 0;
  }
  if (salary <= 25000000) {
    return tax_point_1;
  }
  if (salary <= 50000000) {
    return tax_point_2;
  }
  if (salary <= 80000000) {
    return tax_point_3;
  }
  if (salary > 80000000) {
    return tax_point_4;
  }
}

console.log(calcTax(salary));
