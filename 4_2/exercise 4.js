//Then, make a pyramid with n base asterisks
function pyramid() {
   var row = 5;
   for(i=1; i <= row; i++){
       for(j=1; j<=(row-i);j++){
        document.write("&nbsp;");
       }
       for(k = 1; k <= i; k++){
           document.write("*");
       }
       document.write("<br/>");
   }
console.log("hello, world")
}
console.log(pyramid());