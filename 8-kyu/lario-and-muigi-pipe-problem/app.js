//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

//P
//array, num, whole, integer

//R
//array, incremented by 1

//E
pipeFix([1,2,3,5,6,8,9]) //[1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12]) //[1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9]) //[6,7,8,9]

//P
//empty array
//loop, increment by 1
//push to empty array
//return array

function pipeFix(numbers){
  let arr = []
  for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
    arr.push(i)
  }
  return arr
}