//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//P
//arrays a and b

//R
//array filtering b from a

//E
//arrayDiff([1,2], [1]), [2]
//arrayDiff([1,2,2], [1]), [2,2]
//arrayDiff([1,2,2], [2]), [1]

//P
//filter
  //includes

  function arrayDiff(a, b) {
    return a.filter((element) => !b.includes(element))
  }