//Đồng bộ là code sẽ được chạy tuần tự theo trình tự đã viết sẵn từ trên xuống dưới
function test(){
    console.log('1');
    console.log('2');
    console.log('3');
}

test();  //1 2 3


//Bất đồng bộ là các đoạn code ở phía dưới có thể chạy dù code bên trên chưa thực thi và trả về kết quả
function test(){
    setTimeout(() => console.log('1'), 0);
    console.log('2');
    console.log('3');
}

test();  //2 3 1

//callback
//Là cách thực thi bất đồng bộ
//đc truyền qua đối số của 1 function khác
//và đc gọi lại trong hàm nhận đối số
//Tránh dùng vì callback Hell
function asyncFunction(callback) {
    console.log("Start");
    setTimeout(() => {
        callback();
    }, 1000);
    console.log("Waiting");
}

let printEnd = function() {
    console.log("End");
}

asyncFunction(printEnd)

//Promise
//Promise là cách xử lý bất đồng bộ
// Promise sẽ nhận vào một hàm callback gồm 2 tham số:
    // resolve: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise chạy thành công.
    // reject: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra.
// Promise cũng cung cấp cho chúng ta 2 phương thức để xử lý sau khi được thực hiện:
    // then(): Dùng để xử lý sau khi Promise được thực hiện thành công (khi resolve được gọi).
    // catch(): Dùng để xử lý sau khi Promise có bất kỳ lỗi nào đó (khi reject được gọi).

//1. Pendding
//2. Fulfilled
//3. Rejected

var promise = new Promise(
    //Executor
    function(resolve, reject){
        //Logic
        //Thành công: resolve
        //Thất bại: reject
    }
)

promise
    .then()
    .catch()
    .finally()

    
//Async/Await
//Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ
//await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async