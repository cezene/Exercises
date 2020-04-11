/* Make a program that, given a value defined in a variable,
returns “positive” if that value is positive, “negative” if it is negative and “zero” otherwise. */
let num = 10;
function positiveNumber() {
    if (num < 0) {
        return "negative"
    }
    if (num > 0) {
        return "positive"
    }
    else 
    return "zero"
}
console.log("hello, world");
console.log(positiveNumber());