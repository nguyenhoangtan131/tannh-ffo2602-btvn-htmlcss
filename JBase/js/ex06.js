/**
 * * Input: 1 số n
 * ! Logic: Các số chỉ chia được cho 1 và chính nó
 * ! Chạy i từ 2 tới n, chia 1 số từ 2 tới nhỏ hơn chính nó, chỉ cần ra 1 số nguyên là sai
 * !  ngược lại đưa vào mảng
 * ! khi break nhảy ra vòng for, thì khi này cập nhật vào mảng
 *
 * ! validate 1 số chính phương phải lớn hơn 1
 * ? Output: In ra mảng chứa số nguyên tố
 */

const n = +prompt(
  "Nhập 1 số n để xem danh sách số nguyên tố, Ví dụ nhập 10 ra: 2, 3, 5, 7",
);

const printPrimeNum = (n) => {
  if (n < 2 || !Number.isNaN)
    return console.log(`Số ${n} không phải là 1 số chính phương hợp lệ`);
  const res = [];
  for (let i = 2; i <= n; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (Number.isInteger(i / j)) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      res.push(i);
    }
  }
  console.log(res);
};

console.log(`Danh sách số nguyên tố bạn vừa nhập:`);
printPrimeNum(n);
