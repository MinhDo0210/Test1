// Var:(Hoisting: tự động đưa biến lên đầu scope trước khi code được thực hiện)
// Bất cứ khi nào một biến được khai báo bằng từ khóa var, các biến đó là:
// •	Phạm vi hàm (function scope) hoặc phạm vi toàn cục (global scope)
// •	Có thể gán lại (Re-assignable) và có thể khai báo lại (Re-declarable)
// •	Không thuộc vùng chết tạm thời (Temporal Dead Zone - TDZ)
    console.log (greeting);
    var greeting = "say hello";
//Sẽ được hiểu la:
    var greeting;
    console.log(greeting);
    greeting = "say hello";
// --Let: Bất cứ khi nào một biến được khai báo bằng từ khóa let, các biến đó là:
// •	Phạm vi khối (Block scope)
// •	Có thể gán lại nhưng không thể khai báo lại
// •	Phụ thuộc vào vùng chết tạm thời (TDZ)
    let greeting = "say Hi";
    let times = 4;

    if (times > 3) {
            let hello = "say Hello instead";
            console.log(hello);
        }
    console.log(hello);
// --Const: Bất cứ khi nào một biến được khai báo bằng từ khóa const, các biến đó là:
// •	Phạm vi khối
// •	Không thể gán lại cũng không thể khai báo lại
// •	Phụ thuộc vào vùng chết tạm thời
    const greeting = "say Hi";
    greeting = "say Hello instead";

    const greeting = "say Hi";
    const greeting = "say Hello instead";