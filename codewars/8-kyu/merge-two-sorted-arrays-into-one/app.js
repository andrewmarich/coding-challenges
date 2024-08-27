//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

//P
//arrays, sorted, integers

//R
//merged array, ascending

//E
mergeArrays([1,2,3,4], [5,6,7,8]) //[1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) //[1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) //[1,2,3,4,5,7,9,10,11,12]

//P
//merge and sort
//empty array
//loop through array and remove duplicates
//return array

function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2).sort((a,b) => a-b)
  let newArr = []
  for (let i = 0; i <= merged.length; i++)
    if (merged[i] !== merged[i+1]) {
      newArr.push(merged[i])
    }
  return newArr
}