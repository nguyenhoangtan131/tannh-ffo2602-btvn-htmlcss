/**
 * * Input: swapNumber(a,b)
 * ! LOGIC: a + b ra 1 cái tổng, dùng tổng đó trừ chính nó là ra số b, ngược lại với b
 * ! b = 8 - 5 = 3
 * ? output: output đảo vị trí 2 số k mảng, không biến trung gian
 */

function swapNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return `${a}, ${b}`;
}

console.log(swapNumber(3, 5));
