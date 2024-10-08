//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//P
//string

//R
//string

//E
//duplicateEncode("din"),"((("
//duplicateEncode("recede"),"()()()"
//duplicateEncode("Success"),")())())"

//P
//toLowerCase
//split
//map
//ternary
//indexOf and lastIndexOf
//join

function duplicateEncode(word){
    return word.toLowerCase().split('').map((element, index, array) => {
      return array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')'
    }).join('')
  }