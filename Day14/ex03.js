/**
 * *Input salary input
 * ! Dùng if else cho từng trường hợp,
 * ! khi tính ta sẽ xuất ra số thuế phải
 * ! tính, xong dùng cái số đó tính thẳng luôn
 * ! console log ra số thuế
 * ? xuất ra số thuế phải đóng
 */

const salary = +prompt("salary?");
function calcTax(salary) {
  if (salary <= 11000000) {
    return 0;
  }
  if (salary <= 25000000) {
    return salary / 10;
  }
  if (salary <= 50000000) {
    return salary / 20;
  }
  if (salary > 80000000) {
    return salary / 30;
  } else {
    return "Lương không hợp lệ";
  }
}

console.log(calcTax(salary));
