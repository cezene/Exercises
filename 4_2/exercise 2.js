//For the second exercise, do the same as before, but print a right triangle with 5 base asterisks
function generatePyramid() {
    var n = 5;
    var output = '';
    var content = '*';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            output += content + '  ';
        }
        console.log(output);
        output = '';
    }
}
console.log(generatePyramid());
console.log("hello, world")