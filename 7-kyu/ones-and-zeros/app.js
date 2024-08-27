//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//P
//array of num

//R
//num to binary equivalent

//E
//inaryArrayToNumber([0,0,0,1]), 1
//binaryArrayToNumber([0,0,1,0]), 2
//binaryArrayToNumber([1,1,1,1]), 15

//P
//parseInt
  //join

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
}