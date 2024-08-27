//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//P
//integer n and string s

//R
//string s repeated n times

//E
repeatStr(3, "*") //"***"
repeatStr(5, "#") //"#####"
repeatStr(2, "ha ") //"ha ha "

//P
//repeat method

function repeatStr (n, s) {
  return s.repeat(n);
}