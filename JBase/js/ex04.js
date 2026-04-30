/**
 *  * input: 3 số nhập vào
 * ! logic: kiểm tra các điều kiện tam giác: a + b > c ||
 * ? output: Kiểm tra xem 3 cạnh có phải là 1 tam giác hợp lệ hay không
 */

const a = +prompt("a?");
const b = +prompt("b?");
const c = +prompt("c?");

function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a)
    return "Không phải 3 cạnh tam giác";
  else return "Là tam giác";
}

console.log(isTriangle(a, b, c));
