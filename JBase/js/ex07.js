/**
 * * Input: nhập 3 số
 * ! Logic: Cho biến trung gian gán vào số đầu, so từng số,
 * ! nếu số sau lớn hơn số đầu =>  gán biến vào số sau, không thì khỏi gán
 * ? Output: Tìm số lớn nhất
 */
alert("Nhập 3 số khác nhau để tìm ra số lớn nhất: VD 8, 9, 5, Kết quả: 9");
const a = +prompt("a?");
const b = +prompt("b?");
const c = +prompt("c?");

const resMaxNumber = (a, b, c) => {
  let maxNum = a;
  if (b > a) maxNum = b;
  if (c > b) maxNum = c;
  console.log(`maxNum: ${maxNum}`);
};

console.log(`số lớn nhất từ anh sách mà bạn đã nhập:`);
resMaxNumber(a, b, c);
