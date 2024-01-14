let number = parseInt(prompt("Nhập một số nguyên dương: "));

if (isNaN(number) || number <= 0) {
  console.log("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}