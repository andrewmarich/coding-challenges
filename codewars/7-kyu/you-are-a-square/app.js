//Given an integral number, determine if it's a square number

//P
//integer

//R
//boolean

//E
// isSquare(-1) //false
// isSquare (0) //true
// isSquare (3) //false

//P
//determine if n is a square root
//use ternary operator
//return boolean

var isSquare = function(n){
    return n >= 0 && Math.sqrt(n) % 1 === 0;
  }