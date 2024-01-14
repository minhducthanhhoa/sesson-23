
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;


var userNumber = parseInt(prompt("Nhập một số:"));
if (isPerfectNumber(userNumber)) {
    console.log(userNumber + " là số hoàn hảo.");
} else {
    console.log(userNumber + " không phải là số hoàn hảo.");
}