const students = [
  { id: 1, name: "Nguyen Minh Hoang", score: 4 },
  { id: 2, name: "Nguyen Minh Chau", score: 9 },
  { id: 3, name: "Nguyen Minh Khang", score: 5 },
  { id: 4, name: "Nguyen Minh Tue", score: 10 },
];

/**
 * * 1. Tạo mảng có đầy đủ thông tin sinh viên ban đầu
 * * + phân loại level,type chia ra 3 nhóm:
 * ! fail: < 4
 * ! trung bình: >= 4 -> < 7
 * ! khá: >= 7 - < 8
 * ! giỏi: >= 8 - <= 9
 * ! Xuất sắc: > 9
 * * Gợi ý: Nên tách thành 2 hàm, hàm chuyên biệt có chức năng phân loại sinh viên
 * * 2. Tạo ra các mảng mới theo sự phân loại học lực của sinh viên (Không tạo mảng rỗng)
 */

/**
 * * Câu 1:
 * * Input: 1 mảng đầu vào
 * ! Logic: cứ dùng hàm filter, khi này sẽ ra mảng các danh sách học sinh theo chỉ tiêu
 * ! nếu độ dài khi filter > 0 thì ta mới tạo mảng và gắn danh sách đã lọc vào
 * ? Output: tạo mảng dạng
 * ? failArray: {id, name, score},
 * ? mediocoreArray: {id, name, score}
 */

const getLevelArray = (students) => {
  const failStudents = students.filter((student) => student.score < 4);
  const mediocoreStudents = students.filter(
    (student) => student.score >= 4 && student.score < 7,
  );
  const greatStudents = students.filter(
    (student) => student.score >= 7 && student.score < 8,
  );
  const goodStudents = students.filter(
    (student) => student.score >= 8 && student.score < 9,
  );
  const excellentStudents = students.filter((student) => student.score >= 9);
  if (failStudents.length > 0) {
    const failStudentsArray = [];
    failStudentsArray.push(...failStudents);
    console.log("failArray: ", failStudentsArray);
  }
  if (mediocoreStudents.length > 0) {
    const mediocoreStudentsArray = [];
    mediocoreStudentsArray.push(...mediocoreStudents);
    console.log("mediocoreArray: ", mediocoreStudentsArray);
  }
  if (greatStudents.length > 0) {
    const greatStudentsArray = [];
    greatStudentsArray.push(...greatStudents);
    console.log("greatArray: ", greatStudentsArray);
  }
  if (goodStudents.length > 0) {
    const goodStudentsArray = [];
    goodStudentsArray.push(...goodStudents);
    console.log("GoodArray: ", goodStudentsArray);
  }
  if (excellentStudents.length > 0) {
    const excellentStudentsArray = [];
    excellentStudentsArray.push(...excellentStudents);
    console.log("ExcellentArray: ", excellentStudentsArray);
  }
};

getLevelArray(students);
