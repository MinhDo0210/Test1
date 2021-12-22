const array = [1, 3, 6, 9, 5, 7, 12, 20]

//filter(): lặp các phần tử trong mảng và trả về một mảng mới thỏa mãn điều kiện lọc
let result = array.filter(array => array < 5);
console.log(result);

//map(): Tạo một mảng mới thay đổi phần tử theo điều kiện
const result1 = array.map((val) => {
  return val*2
})
console.log(result1);
//forEach(): thực thi hàm đã được cung cấp trên mỗi phần tử của mảng và không trả về kết quả
//array.forEach(element => console.log(element));

//Find(): Trả về một phần tử đầu tiên trong mảng thõa mãn điều kiện tìm kiếm.
let result2 = array.find(array => array > 5);
console.log(result2);

//findIndex(): Trả về giá trị Index (chỉ mục) của một phần tử đầu tiên trong mảng thõa mãn điều kiện tìm kiếm.
let result3 = array.findIndex(array => array > 8);
console.log(result3);


//reduce(): dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).
//Accumulator: biến lưu trữ
//Current Value: Giá trị hiện tại
//initial value: giá trị khởi tạo

console.log(array.reduce((acc, ele) => {
  return acc + ele
},0)); //initial value

//Flat - "làm phẳng" mảng từ Mảng sâu (đưa về mảng cùng cấp)
var deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = deptArray.reduce((flatOutput, deptItem) => {
  return flatOutput.concat(deptItem); //concat: nối mảng
}, []) //initial value: mảng
console.log(flatArray);

var topics = [
  {
    topic: "Font-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS"
      },
      {
        id: 2,
        title: "JavaScript"
      },
      {
        id: 3,
        title: "ReactJS"
      }
    ]
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP"
      },
      {
        id: 2,
        title: "NodeJS"
      },
    ]
  },
]

var newCourses = topics.reduce((course, topic) => {
  return course.concat(topic.courses);
}, []);

console.log(newCourses);
