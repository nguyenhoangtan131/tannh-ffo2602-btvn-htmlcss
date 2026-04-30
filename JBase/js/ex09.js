/**
 * * Input: Nhập km từ bàn phím
 * ! Tạo biến giá bằng không, mỗi trường hợp thì gán lại biến giá
 * ! => Công thức là số km * theo biến giá (price)
 *
 * ! <= 0 || isNan => Số km không hợp lệ
 * ! <= 1 km => 10000 đ / 1 1km cái này luôn tính trước
 *
 * ! tiếp đến cộng theo bảng giá tính từ 1.1 đổ lên
 *
 * ! tức là (1 * 10000) + (km - 1) * biến giá
 * ! <= 30 km => 8000đ / 1km
 * ! else => 7000đ / 1km
 * !
 * !
 *
 * ? Output: Tính tiền taxi
 */
function taxiBill(km) {
  let total = 0;
  let price = 0;
  if (km <= 0 || isNaN(km)) return "Số km không hợp lệ";
  else if (km <= 1) {
    total = 10000;
    return `Số tiền cần trả: ${total}`;
  } else if (km <= 30) {
    price = 8000;
    total = 1 * 10000 + (km - 1) * price;
    return `Số tiền cần trả: ${total}`;
  } else {
    price = 7000;
    total = 1 * 10000 + (km - 1) * price;
    return `Số tiền cần trả: ${total}`;
  }
}

// Output:
console.log(taxiBill(0.1)); // Output: Số tiền cần trả: 10000đ
console.log(taxiBill(1)); // Output: Số tiền cần trả: 10000đ
console.log(taxiBill(10)); // Output: Số tiền cần trả: 82000đ
console.log(taxiBill(-5)); // Output: Số km không hợp lệ
console.log(taxiBill("abc")); // Output: Số km không hợp lệ
