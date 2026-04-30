/**
 * * input: 1 số đầu vào
 * ! logic: số a nhỏ hơn 0, có case là nếu b < 0 => true ; else là false
 * ! logic: số a > 0, có case là nếu b > 0 => true; else là false
 * ? output: trả ra  true false, kiểm tra số có cùng dấu không?
 */

function isSameSign(a, b) {
  if (a < 0) {
    if (b < 0) return true;
    return false;
  }

  if (a > 0) {
    if (b > 0) return true;
    return false;
  }
}

console.log(isSameSign(10, 20));
console.log(isSameSign(-10, -20));
console.log(isSameSign(10, -20));
