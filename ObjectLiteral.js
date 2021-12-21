//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var name = 'MinhDo0210';
var price = 1000;

var cource = {
    name,
    price,
    getName() {
        return name;
    }
};  

console.log(cource); //{ name: 'JavaScript', price: 1000 }
console.log(cource.getName()); //JavaScript

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};
console.log(course); //{ name: 'Javascript', price: 1000 }