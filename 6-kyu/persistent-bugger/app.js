//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//P
//positive num

//R
//num of times you must mulitiply the digits in num to reach a single digit

//E
//persistence(39),3
//persistence(4),0
//persistence(25),2

//P
//for loop
  //var i
  //num
    //toString
    //split
    //reduce
//return i

function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((a,b) => a * b)
    }
    return i
  }