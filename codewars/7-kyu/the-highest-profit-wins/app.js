//Write a function that returns both the minimum and maximum number of the given list/array.

//P
//array of num

//R
//array of min and max

//E
//minMax([1, 2, 3, 4, 5]), [1, 5]

//P
//Math.min and Math.max
  //spread operator

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
  }