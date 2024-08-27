//Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

//P
//array of non-negative num, num of elements to return

//R
//array of num of desired length

//E
//tribonacci([1,1,1], 10]), [1,1,1,3,5,9,17,31,57,105]

//P
//sequence variable
//for loop
  //push
//conditional
  //length
  //slice

  function tribonacci(signature,n){
    let sequence = signature
    for (let i = 3; i < n; i++) {
      sequence.push(signature[i-1] + signature[i-2] + signature[i-3])
    }
    if (signature.length === 0 || n === 0) {
      return []
    } else if (n < signature.length) {
      return signature.slice(0, signature[n])
    } else {
      return sequence
    }
  }