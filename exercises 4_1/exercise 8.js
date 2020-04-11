/* Write a program that defines three numbers in variables at the beginning and returns true
 if one of the three is even.Otherwise, it returns false. */
 function evenNumber() {
     let n1 = 10;
     let n2 = 25;
     let n3 = 40;
     if (n1 % 2 == 0 || n2 % 2 == 0 ||n1 % 3 == 0 ) {
         return true
     }
     else {
         return false
     }
 }
 console.log("hello, world");
 console.log(evenNumber());