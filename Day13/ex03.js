/**
 * * Kiểm tra 3 số nhập vào từ bàn phím có phải là độ dài 3 cạnh của 1 tam giác không
 */

/**
 * * Input: Nhập 3 số a,b,c từ bàn phím
 * ! Logic: (a + b > c; a + c > b; b + c > a);
 * ? Output: Có phải 3 cạnh 1 tam giác
 */

let a = +prompt("Moi ban nhap a");
let b = +prompt("Moi ban nhap b");
let c = +prompt("Moi ban nhap c");
console.log(a, b, c);

if (a <= 2 || b <= 2 || c <= 2) {
  console.log("Đây không phải độ dài 3 cạnh tam giác");
} else if (a + b > c && b + c > a && c + b > a) {
  console.log("Đây là 3 cạnh của 1 tam giác");
} else {
  console.log("Sai");
}
