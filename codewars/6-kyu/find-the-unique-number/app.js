//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//P
//array of num

//R
//unique num

//E
//findUniq([ 1, 0, 0 ]), 1
//findUniq([ 1, 1, 1, 2, 1, 1 ]), 2
//findUniq([ 3, 10, 3, 3, 3 ]), 10

//P
//sorted var
  //sort
//ternary
  //slice

  function findUniq(arr) {
    let sorted = arr.sort((a,b) => a-b)
    return sorted[0] === sorted[1] ? Number(sorted.slice(-1)) : sorted[0]
  }