//we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

//P
//positive integer n and positive integer p

//R
//positive integer k, such that the sum of the digits of n taken to the successive powers of p is equal to k * n

//E
//digPow(89, 1), 1)
//digPow(92, 1), -1)
//digPow(46288, 3), 51)

//P
//digit var
  //String and split
//total var set to zero
//for loop
  //increment total
//ternary

function digPow(n, p){
    let digit = String(n).split('')
    let total = 0 
    for (let i = 0; i < digit.length; i++) {
      total += Math.pow(digit[i], p+i)
    }
    return total % n === 0 ? total / n : -1
  }