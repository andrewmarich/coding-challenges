//Given a list of integers, determine whether the sum of its elements is odd or even.

//P
//array of num

//R
//'odd' or 'even'

//E
//oddOrEven([0]), 'even'
//oddOrEven([1]), 'odd'

//P
//ternary
  //reduce

  function oddOrEven(array) {
    return array.reduce((a,b) => a+b, 0) % 2 === 0 ? 'even' : 'odd'
  }