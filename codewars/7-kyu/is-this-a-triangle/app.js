//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//P
//3 integer values a, b, c

//R
//boolean

//E
//isTriangle(1,2,2), true
//isTriangle(7,2,2), false

//P
//ternary
//triangle inequality theorem

function isTriangle(a,b,c) {
    return a + b > c && a + c > b && b + c > a 
  }