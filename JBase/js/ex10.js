/**
 * * Input: Nhập số electric
 * ! Logic: validate, khai báo biến price, biến total
 * ! mốc 1 (electric <= 50): electric * price theo đơn giản
 *
 * ! mốc 2 (electric <= 100):
 * ! lấy số electric (mốc 2 - mốc 1) * đơn giá mốc 2 + số điện của mốc 1 * đơn giá mốc 1
 *
 * ! mốc 3 (electric <= 200):
 * ! lấy số electric (mốc 3 - mốc 2) * đơn giá mốc 3 +
 * ! (mốc 2 - mốc 1) * đơn giá mốc 2 + số điện của mốc 1 * đơn giá mốc 1
 *
 * ! mốc 4 (electric <= 350):
 * ! lấy số electric (mốc 4 - mốc 3) * đơn giá mốc 4 +
 * ! lấy số electric (mốc 3 - mốc 2) * đơn giá mốc 3 +
 * ! (mốc 2 - mốc 1) * đơn giá mốc 2 + số điện của mốc 1 * đơn giá mốc 1
 *
 * ! mốc cuối (else):
 * ! lấy số electric (mốc 5 - mốc 4) * đơn giá mốc 5 +
 * ! lấy số electric (mốc 4 - mốc 3) * đơn giá mốc 4 +
 * ! lấy số electric (mốc 3 - mốc 2) * đơn giá mốc 3 +
 * ! (mốc 2 - mốc 1) * đơn giá mốc 2 + số điện của mốc 1 * đơn giá mốc 1
 * ? Output: Output: Số điện cần trả : vd 45000đ
 */

function electricBill(electric) {
  let total = 0;
  let price1 = 1500;
  let price2 = 2000;
  let price3 = 3000;
  let price4 = 4000;
  let price5 = 5000;
  if (electric <= 0 || isNaN(electric)) return "Số điện không hợp lệ";
  else if (electric <= 50) {
    total = electric * price1;
  } else if (electric <= 100) {
    total = (electric - 50) * price2 + 50 * price1;
  } else if (electric <= 200) {
    total = (electric - 100) * price3 + (100 - 50) * price2 + 50 * price1;
  } else if (electric <= 350) {
    total =
      (electric - 200) * price4 +
      (200 - 100) * price3 +
      (100 - 50) * price2 +
      50 * price1;
  } else {
    total =
      (electric - 350) * price5 +
      (350 - 200) * price4 +
      (200 - 100) * price3 +
      (100 - 50) * price2 +
      50 * price1;
  }
  return `Số điện cần trả: ${total}`;
}

console.log(electricBill(30)); // Output: Số tiền cần trả: 45000đ
console.log(electricBill(75)); // Output: Số tiền cần trả: 125000đ
console.log(electricBill(-10)); // Output: Số điện không hợp lệ
console.log(electricBill("abc")); // Output: Số điện không hợp lệ
