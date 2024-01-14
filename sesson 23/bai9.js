var limit;
    var sequence = [0, 1];
    var sum = 1;

    while (sum < limit) {
        var next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
        sum += next;
    }

    return sequence;


var userNumber = parseInt(prompt("Nhập một số nguyên dương:"));

console.log("Dãy Fibonacci nhỏ hơn " + userNumber + " là:");
var fibonacci = fibonacciSequence(userNumber);
for (var i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}