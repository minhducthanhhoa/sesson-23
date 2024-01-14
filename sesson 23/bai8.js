var number;
    if (number < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;


var userNumber = parseInt(prompt("Nhập một số nguyên dương:"));

console.log("Các số nguyên tố nhỏ hơn " + userNumber + " là:");
for (var i = 2; i < userNumber; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}