//Function
function sum(a, b){
    return a + b;
}
console.log(sum(3, 2));

//Arrow Function
// Arrow function là một tính năng mới của ES6, giúp viết code ngắn gọn hơn.
// Arrow function sử dụng tốt hơn khi dùng: map, filter, reducer,...
// Arrow function không có bind.
// Arrow function không phù hợp là method của object.
//This dùng để trỏ tới chính object gọi hàm đó.
var sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(5, 3));


const numbers = [1,2,3,4]
const newArray = numbers.map(item => item * 2 )
console.log(newArray)