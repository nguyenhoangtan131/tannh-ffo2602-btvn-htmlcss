//**

// ! dựa vào bài 2, ta có thể làm nếu a > b thì ta thực
// ! đổi 2 vế: * nếu a > b đổi a với b
// ! * nếu b > c đổi b với c
// ! * kiểm tra nốt a lớn hơn c thì đổi a với c
// ! chỉ cần 3 if, nếu không lớn hơn thì để nguyên
// ? output: Thứ tự tăng dần 5 7 9

function sortNumber(a, b, c) {
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }

  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  return `a: ${a}; b: ${b}; c: ${c}`;
}

console.log(sortNumber(9, 7, 5));
console.log(sortNumber(5, 9, 7));
console.log(sortNumber(9, 5, 7));
console.log(sortNumber(7, 5, 9));
console.log(sortNumber(7, 9, 5));
