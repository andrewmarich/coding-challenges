//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

//P
//array of num

//R
//array of num with lowest removed

//E
//removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]
//removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]
//removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]

//P
//min variable
//filter
  //indexOf

  function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    return numbers.filter((e, i, a) => {
      return a.indexOf(min) !== i
    })
  }