//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//P
//array of numbers

//R
//true if any value in array is less than or equal to limit value, otherwise false

//E
//smallEnough([66, 101], 200), true
//smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100
//smallEnough([101, 45, 75, 105, 99, 107], 107

//P
//ternary
  //every

  function smallEnough(a, limit) {
    return a.every((e) => e <= limit)
  }