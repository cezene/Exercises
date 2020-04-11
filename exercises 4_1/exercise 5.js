/* Make a program that defines three variables with the values of the three internal angles of a triangle. 
Return true if the angles represent the angles of a triangle and false otherwise.
For the angles to be a valid triangle, the sum of the three must be 180 degrees. */
let angle1 = 20;
let angle2 = 70;
let angle3 = 100;
let result = angle1 + angle2 + angle3;
function triangle() {
    if (result === 180) {
        return true;
    }
    else 
     return false;
}
console.log("hello, world")
console.log(triangle());