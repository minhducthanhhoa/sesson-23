let number = parseInt(prompt("Nhập một số nguyên dương: "));

if (isNaN(number) || number < 0) {
  console.log("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  console.log(`Giai thừa của ${number} là: ${factorial}`);
}