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