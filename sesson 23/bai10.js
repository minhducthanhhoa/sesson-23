var rows;
    // In tam giác vuông theo chiều tăng dần
    for (var i = 1; i <= rows; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }

    console.log(""); // In một dòng trắng để tách hai tam giác

    // In tam giác vuông theo chiều giảm dần
    for (var i = rows; i >= 1; i--) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }


var userNumber = parseInt(prompt("Nhập một số nguyên dương:"));

console.log("Tam giác vuông có " + userNumber + " hàng:");
printTriangle(userNumber);