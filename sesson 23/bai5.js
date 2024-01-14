// Tạo số ngẫu nhiên từ 1 đến 10
var random_number = Math.floor(Math.random() * 10) + 1;

while (true) {
    // Yêu cầu người dùng nhập một số
    var user_number = parseInt(prompt("Nhập một số từ 1 đến 10:"));

    if (user_number > random_number) {
        console.log("Số bạn nhập lớn hơn số ngẫu nhiên.");
    } else if (user_number < random_number) {
        console.log("Số bạn nhập nhỏ hơn số ngẫu nhiên.");
    } else {
        console.log("Chúc mừng! Số bạn nhập đúng.");
        break;
    }
}