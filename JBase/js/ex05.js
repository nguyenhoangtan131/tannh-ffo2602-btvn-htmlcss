/**
 * * Input: Nhập n
 * ! Logic: chạy vòng for, kiểm tra xem số nào căn bậc 2 ra mà là số nguyên thì đẩy vào mảng
 * ? Output: Danh sách số chính phương
 */
const n = +prompt("Nhập 1 số n để xem danh sách số chính phương");
const squareNumbers = (n) => {
  if (n < 4 || !Number.isInteger(n))
    console.log(`Số: ${n} Không chứa số chính phương`);
  let temp = 0;
  let squareNumberArray = [];
  for (let i = 4; i < n; i++) {
    temp = Math.sqrt(i);
    if (Number.isInteger(temp)) {
      squareNumberArray.push(i);
    }
  }
  console.log(squareNumberArray);
};

squareNumbers(10);
squareNumbers(20);

console.log(`Danh sách số chính phương bạn vừa nhập:`);

squareNumbers(n);
