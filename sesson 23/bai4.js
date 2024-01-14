function printNumbersDivisibleByB(a, b) {
    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
}

// Yêu cầu nhập vào hai số nguyên dương a và b từ người dùng
const a = parseInt(prompt("Nhập giá trị của a: "));
const b = parseInt(prompt("Nhập giá trị của b: "));

// Gọi hàm để in ra các số chia hết cho b trong khoảng từ 1 đến a
console.log(`Các số chia hết cho ${b} trong khoảng từ 1 đến ${a} là:`);
printNumbersDivisibleByB(a, b);