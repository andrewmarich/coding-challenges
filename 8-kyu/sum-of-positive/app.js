//You get an array of numbers, return the sum of all of the positives ones.

//P
//array of numbers

//R
//sum of positive numbers

//E
positiveSum([1,2,3,4,5]) //15
positiveSum([1,-2,3,4,5]) //13
positiveSum([-1,-2,-3,-4,-5]) //0

//P
//sum variable
//loop
//conditional
//return sum

function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  } return sum
}