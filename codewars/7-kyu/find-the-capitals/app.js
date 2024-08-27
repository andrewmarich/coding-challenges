//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.//

//P
//string

//R
//array of indexes

//E
//capitals('CodEWaRs'), [0,3,4,6]

//P
//split
//empty array
//loop
//conditional with toUpperCase
//push to empty array
//return array

var capitals = function (word) {
    word = word.split('')
    let arr = []
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        arr.push(i)
      }
    }
    return arr
  };