//Scope là phạm vi hoạt động của biến (var, let, const)
//Local scope chỉ có ý nghĩa bên trong function
//Global Scope thì có thể dùng bên ngoài hoặc bên trong function

// Global Scope
var myVar = 1;
let myLet = 2;
const myConst = 3;

function test(){
  // Local Scope
    var myVar = 11;
    var myLet = 12;
    var myConst = 13;
    console.log("Function scope:");
    console.log("myVar = " + myVar); // myVar= 11
    console.log("myLet = " + myLet); // myLet = 12
    console.log("myConst = " + myConst); // myConst = 13
}
// gọi hàm test
test();
// myVar = 11
// myLet = 12
// myConst = 13

console.log("Global scope:");
console.log("myVar = " + myVar); // myVar= 1
console.log("myLet = " + myLet); // myLet = 2
console.log("myConst = " + myConst); // myConst = 3


//Block Scope là code nằm trong dấu {...}
//Dùng Var trong block thì có nghĩa là ta đặt lại giá trị của biến
// Global Scope
var myVar = 1;

if(true) {
    // Block Scope
    var myVar = 2;
    console.log("Block scope: myVar =" + myVar); 
    //Block scope: myVar = 2
}
console.log("Global scope: myVar = " + myVar); 
//Global scope: myVar = 2

//Dùng let thì biến chỉ có ý nghĩa bên trong block
// Global Scope
let myLet = 1;

if(true) {
    // Block Scope
    let myLet = 2;
    console.log("Block scope: myLet =" + myLet); 
    //Block scope: myLet = 2
}
console.log("Global scope: myLet = " + myLet); 
//Global scope: myLet = 1
