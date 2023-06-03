//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//P
//string

//R
//count of distinct repeat occurences of a char/digit 

//E
//duplicateCount(""), 0
//duplicateCount("abcde"), 0
//duplicateCount("aabbcde"), 2

//P
//toLowerCase
//split
//filter & function with ternary
//length


function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length
  }