function hollowPyramid(){
    var row = 5
for (i = 1; i <= row; i++) {
  for (j = 1; j < i; j++) {
    document.write("&nbsp;&nbsp;");
  } {
    for (j = 1; j <= (row * 2 - (2 * i - 1)); j++) {
      if (i == 1 || j == 1 || j == (row * 2 - (2 * i - 1))) {
        document.write("*");
      } else {
        document.write("&nbsp;&nbsp;");
      }
    }
  }
  document.write("<br/>")
}
}
console.log(hollowPyramid());