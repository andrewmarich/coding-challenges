//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//P
//two integers a and b

//R
//sum of num between, and including, a and b

//E
getSum(0,-1) //-1
getSum(0, 1) //1
getSum(2, 2) //2

//P
//variable sum
//conditionals and loops
//return sum

function getSum(a, b) {
  let sum = 0
  if (b > a) {
    for (let i = a; i <= b; i++) {
      sum += i
    }
  } else if (a > b) {
    for (let j = a; j >= b; j--) {
      sum += j
    }
  } else {
    return a
  }
  return sum
}