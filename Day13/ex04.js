let MyNumber = 10;

/**
 * * Input: Số 10
 * ! Logic: brute force: case 1 3 5 7 9 => console.log == không chia hết, ngược lại 2 4 6 8 10
 * ? Output: Kiểm tra xem có chia hết cho 2 không (dùng switch case)
 */

switch (MyNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    console.log("Không chia hết cho 2 ");
  default:
    console.log("Chia hết cho 2");
}
