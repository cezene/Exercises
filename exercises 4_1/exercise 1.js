/* Make five programs, one for each basic arithmetic operation. Your program must have two variables, a and b, defined at the beginning with the values to be operated. Make programs for:
Addition
Subtraction
Multiplication
Division
Module */
let a = 2;
let b = 3;
function sum (a,b) {
    return a + b;
}

function subtraction (a,b) {
    return a - b;
}

function mult (a,b) {
    return a * b;
}

function division (a,b) {
    return a / b;
}

function module (a,b) {
    return a % b;
}
console.log("hello, world")
console.log(sum(2,3));
console.log(subtraction(2,3));
console.log(mult(2,3));
console.log(division(2,3));
console.log(module(2,3));