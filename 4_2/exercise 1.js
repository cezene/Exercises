/* Make a program that, given any value n, whether n> 1,
print on the screen a square made of side asterisks of size n. */
function pyramidGenerator() {
let nColumns = 5;
let nRows = 5;
for(i = 1; i <= nRows; i++){
    for(j=1; j<= nColumns; j++) {
        document.write('*');
    }
    document.write('<br>');
}
}
console.log(pyramidGenerator());
console.log("hello, world")