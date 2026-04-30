const students = [
  { id: 1, name: "Nguyen Minh Hoang", age: 33 },
  { id: 2, name: "Nguyen Minh Chau", age: 20 },
  { id: 3, name: "Hoang Quoc Viet", age: 27 },
  { id: 4, name: "Tran Duc An", age: 24 },
];

/**
 * * 1. Đếm xem có bao nhiêu bạn có tên dài hơn 10 ký tự
 * * 2. Đếm xem có bao nhiêu bạn từ đủ 25 tuổi
 * * 3. Trả về mảng có những người ở độ tuổi 20 đến 30
 */

/**
 * * Câu 1:
 * ! Logic: Tương tự
 * ! Dùng hàm filter đếm length name >= 10
 * ? Output:
 * * * Câu 2:
 * ! Logic: Biến đến count, mỗi khi có bạn >= 25
 * ! Dùng hàm filter đếm age >= 25 tuổi
 * ? Output: Trả 1 số đếm bao nhiêu bạn >= 25
 * * * Câu 3:
 * ! logic: phương thức filter age >= 20 <= 30
 * ? Output: trả 1 mảng 20 tới 30 tuổi
 */

const ex01_result = students.filter((student) => student.name.length >= 10);
console.log(ex01_result.length);

const ex02_result = students.filter((student) => student.age >= 25);
console.log(ex02_result.length);

const ex03_result = students.filter(
  (student) => student.age >= 20 && student.age <= 30,
);
console.log(ex03_result);
