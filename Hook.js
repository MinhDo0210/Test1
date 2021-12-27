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
`https://codesandbox.io/s/usestate-b7qip`

//useEffect:
//Thực hiện các side Effects
//Side Effect: một chương trình phần mềm mà khi có một tác động làm thay đổi dữ liệu
//Upadate DOM, call API, Listen DOM event, Cleanup
//Nhận 2 đối số: callback (Bắt buộc), dependencies (Không bắt buộc)
//1. useEffect(callback)
// - Gọi callback mỗi khi Component re-render
// - Gọi callback sau khi Component thêm element vào DOM
//2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
//- Gọi callback mỗi khi deps thay đổi
//----------------------------------------
//callback luôn luôn được gọi khi component mounted
//cleanup function luôn luôn được gọi trước khi component unmounted
//cleanup function luôn luôn được gọi trước khi callback được gọi (trừ lần mounted)
`https://codesandbox.io/s/useeffect-800j4?file=/src/App.js`

//useContext(): đơn giản hóa việc chuyền dữ liệu từ compnent cha xuống các component con mà không cần dùng đến props
//cho phép làm việc với React Context trong một functional component
//1. Tạo Context
//2. Provider
//3. Cunsumer

//useReducer(): 
// Một phiên bản nâng cao của useState
// Kết hợp với context để quản lý state mà không cần dùng đến redux
// Dùng trong trường hợp Local State, nhiều action làm thay đổi state
// Nhận vào reducer và initalState và trả về state hiện tại và dispatch function
// Trong useReducer có 3 thành phần:
// ACTION: string hoặc Object, action cho reducer biết nó phải xử lý với state 
// View(UI): tạo ra state và action gửi đến reducer thông qua dispatch
// Reducers: gồm 2 tham số là 1 state và 1 action
// reuducer có thế chứa nhiều các action, với mỗi một action khác nhau được gọi
// reducer sẽ xử lý state theo các trường hợp khác nhau và tạo ra một state mới


//React.memo()
// Là một Higher Order Component (HOC)
// Ghi nhớ props của Component để quyết định có render lại hay không (tối ưu về hiệu năng)
// Nếu props mới giống props cũ thì kết quả cũ sẽ được sử dụng lại
// Xử lý Component để tranh re-render khi không cần thiết

//useCallback():
// Dùng để tránh tạo ra 1 hàm mới một cách không cần thiết trong function Component
// Nhận 2 đối số: callback (Bắt buộc), dependencies (Không bắt buộc) (tương tự useEffect)
// Chỉ nên dùng khi sử dụng Reat.memo

//useMemo()
// Là một Hook
// Tránh thực hiện lại 1 logic không cần thiết
// Xử lý Component để tranh re-render khi không cần thiết
// Nhận vào 2 tham số:
// 1. Function trả về một hàm (plusFive)
// 2. Một mảng phụ thuộc
// Khi nào mảng phụ thuộc thay đổi thì function mới được gọi