const array = [1, 3, 6, 9, 5, 7, 12, 20]
//filter
let result = array.filter(array => array < 5);
console.log(result);
//reduce
console.log(array.reduce((acc, ele) => {
  return acc + ele
},0));
//map
const result1 = array.map((val) => {
  return val*2
})
console.log(result1);