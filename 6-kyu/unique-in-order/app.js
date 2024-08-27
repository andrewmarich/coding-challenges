//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//P
//string

//R
//array of unique elements

//E
//(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']

//P
//re-assign iterable
//empty arr
//for loop
  //conditional
    //push
//return arr

var uniqueInOrder=function(iterable){
    iterable = Array.isArray(iterable) ? iterable : iterable.split('')
    let arr = []
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i+1]) {
          arr.push(iterable[i])
        }
    }
    return arr
  }