//Given an array of integers, find the one that appears an odd number of times.

//P
//array of integers

//R
//integer

//E
//findOdd([7]), 7
//findOdd([1,1,2]), 2
//findOdD([0,1,0,1,0]), 0

//P
//answer and count vars
//sort
//for loop
//conditional and nested conditional with break

function findOdd(A) {
    let answer, count = 0
    
    A = A.sort()
    for (let i = 0; i < A.length; i++) {
      if (A[i] === A[i+1]) {
        count++
      } else {
        count++
        if (count % 2 !== 0) {
          answer = A[i]
          break;
        }
      }
    }
    return answer
  }