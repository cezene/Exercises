/* Make a program that returns the greater of two numbers. 
Define two variables at the beginning of the program with the values to be compared. */
let num1 = 15;
let num2 = 10;
function biggerNumber(num1,num2) {
    if (num1 > num2) {
        return num1;
    }
    else
    return num2;
    
}
console.log("hello, world")
console.log(biggerNumber(15,10));