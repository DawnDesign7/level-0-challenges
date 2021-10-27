function maxNumber(num1, num2, num3,) {

    let largestNumber;
        if(num1 >= num2 && num1 >= num3) {
            largestNumber = num1;
        } else if(num2 >=num1 && num2 >= num3) {
            largestNumber = num2;
        } else {
            largestNumber = num3;
        }
    return largestNumber;
}  

maxNumber(7,1,9);