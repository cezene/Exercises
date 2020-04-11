/* Make a program that returns the largest of three numbers.
Define three variables at the beginning of the program with the values to be compared. */
let number1 = 15;
let number2 = 20;
let number3 = 30;
function bigNumber() {
    if (number1 > number2 && number3) {
        return number1;
    }
    if (number2 > number3 && number1) {
        return number2;
    }
    else 
        return number3;
}
console.log("hello, world");
console.log(bigNumber());