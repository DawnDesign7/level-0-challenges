function maxNumber(num1, num2, num3, num4) {
    var num1 = parseFloat(prompt("Enter first number"));
    var num2 = parseFloat(prompt("Enter second number"));
    var num3 = parseFloat(prompt("Enter third number"));
    var num4 = parseFloat(prompt("Enter fourth number"));

    let largestNumber;
        if(num1 >= num2 && num1 >= num3 && num1 >= num4) {
            largestNumber = num1;
        } else if(num2 >=num1 && num2 >= num3 && num2 >= num4) {
            largestNumber = num2;
        } else if(num3 >=num1 && num3 >= num2 && num3 >= num4) { 
            largestNumber = num3;
        } else {
            largestNumber = num4;
        }
    console.log(largestNumber);
}  