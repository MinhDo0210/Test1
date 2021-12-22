//React Hook chỉ dùng trong function component (16.8.0)
//Component đơn giản, dễ hiểu hơn
    //Không bị chia logic như method trong lifecycle của Class Component
    //Không cần sử dụng this

//useState:
//Đơn giản hóa việc thể hiện trạng thái của dữ liệu ra giao diện người dùng (dữ liệu thay dổi => giao diện thay đổi)
const [state, setState] = useState([]);
//Trả về 1 mảng với 2 phần tử: 
    //state: định nghĩa tên của state
    //setState: định nghĩa tên function dùng để cập nhật giá trị 
    //initialStateValue: là giá trị ban đầu của state
//Component được re-render sau khi 'setState'

