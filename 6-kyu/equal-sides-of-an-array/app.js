//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

//P
//array of integers

//R
//index N where sum of integers left and right of N are equal

//E
//findEvenIndex([1,2,3,4,3,2,1]),3
//findEvenIndex([1,100,50,-51,1,1]),1
//findEvenIndex([1,2,3,4,5,6]),-1

//P
//left and right vars
  //reduce
//for loop

function findEvenIndex(arr) {
    let left = 0, right = arr.reduce((a,b) => a+b, 0)
    for (let i = 0; i < arr.length; i++) {
      right -= arr[i]
      if (left === right) return i
      left += arr[i]
    }
    return -1
  }