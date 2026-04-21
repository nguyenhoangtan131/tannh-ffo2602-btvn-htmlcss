/**
 * * Viết hàm in ra hình vuông độ dài là 5 với các kí tự *
 * * *****
 * * *****
 * * *****
 * * *****
 * * *****
 */

/**
 * * Input: Cho 1 biến đếm, dùng loop
 * ! Logic: dùng vòng lặp, , đếm tới 5, ngắt dòng 1 cái, có 4 lần ngắt dòng,
 * ! => row mỗi khi lên là sẽ in ra 5 dòng trước, sau đó ngắt
 */

for (let row = 1; row < 6; row++) {
  if (row == 1 || row == 2 || row == 3 || row == 4 || row == 5) {
    console.log("*****");
    console.log("\n");
  }
}
