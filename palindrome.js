var arr = ["mom", "js", "malayalam", "html", "css", "dad"]; // op=>["mom","dad","malayalam"]
out=[]
for (str of arr) {
//   str = "mom";
  emp = "";
  for (i = str.length - 1; i >= 0; i--) {
    emp += str[i];
  }
  if (str === emp) {
    out.push(str)
  }
}
console.log(out);
// ----------------------------------------------------------------------------------------------->
