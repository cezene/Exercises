/* Write a program that defines three numbers in variables at the beginning and returns true 
if one of the three is odd. Otherwise, it returns false. */
function oddNumber() {
    let n1 = 10;
    let n2 = 20;
    let n3 = 30;
    if (n1 % 2 > 0 || n2 % 2 > 0 ||n3 % 2 > 0 ) {
        return true
    }
    else {
        return false
    }
}
console.log("hello, world");
console.log(oddNumber());