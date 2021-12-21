const array = [1, 3, 6, 9, 5, 7, 12, 20]
//filter: lặp các phần tử trong mảng và trả về một mảng mới thỏa mãn điều kiện lọc
let result = array.filter(array => array < 5);
console.log(result);

//map: Tạo một mảng mới thay đổi phần tử theo điều kiện
const result1 = array.map((val) => {
  return val*2
})
console.log(result1);

//reduce: 
console.log(array.reduce((acc, ele) => {
  return acc + ele
},0));