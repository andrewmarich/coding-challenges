//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//P
//array of numbers

//R
//sort odd numbers ascending while retaining evens in original place

//E
//sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]
//sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]
//sortArray([]),[]

//P
//odd var
//map
  //ternary
    //conditional
    //shift

    function sortArray(array) {
        let odd = array.filter(e => e % 2 !== 0).sort((a,b) => a-b)
        return array.map(e => e % 2 === 0 ? e : odd.shift())
      }