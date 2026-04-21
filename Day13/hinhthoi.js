/**
 * *     *
 * *    ***
 * *   *****
 * *  *******
 * *   *****
 * *    ***
 * *     *
 */

/**
 * * Input: Tự gán biến
 * ! Logic: cho biến row , khi row hết thì xuống dòng
 * ! tức là row = 7:
 * ! row 1 thì ngắt: *
 * ! row 2 thì ngắt ***
 * ! row 3 thì ngắt *****
 * ! row 4 giữ nguyên *******
 * ! row 5 thì ngắt *****
 * ! row 6 thì ngắt ***
 * ! row 7 thì ngắt *
 * ! còn biến col phải có giá trị mặc định là *******
 * ! Ngắt vị trí phần tử là xong
 * ! Cách dễ hơn, có thể in thẳng ra?
 * ? Output: ra được hình thoi khép dần như trên
 */

for (let row = 1; row <= 7; row++) {
  if (row == 1 || row == 7) {
    console.log("   *   ");
  } else if (row == 2 || row == 6) {
    console.log("  ***  ");
  } else if (row == 3 || row == 5) {
    console.log(" ***** ");
  } else {
    console.log("*******");
  }
}
