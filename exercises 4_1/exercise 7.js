/* - Write a program that converts a grade given as a percentage (from 0 to 100) into concepts from A to F. 
Follow these rules:
Percentage> = 90 -> A
Percentage> = 80 -> B
Percentage> = 70 -> C
Percentage> = 60 -> D
Percentage> = 50 -> E
Percentage <50 -> F
The program should return an error message and end if the grade passed is less than 0 or greater than 100.
 */
function studentGrade() {
let grade = 50;
if( grade >= 90 && grade < 101) {
    return "A"
}
if( grade >= 80 && grade < 90) {
    return "B"
}
if( grade >= 70 && grade < 80) {
    return "C"
}
if( grade >= 60 && grade < 70) {
    return "D"
}
if( grade >= 50 && grade < 60) {
    return "E"
}
if( grade < 50 && grade > 0) {
    return "F"
}
else {
    return "The number is not valid"
}
}
console.log("hello, world");
console.log(studentGrade());