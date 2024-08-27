//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//P
//string

//R
//boolean

//E
// isAnagram("foefet", "toffee") //true
// isAnagram("Buckethead", "DeathCubeK" //true
// isAnagram("dumble", "bumble") //false
// isAnagram("ound", "round") //false

//P
//re-assign test and original
//split, lowercase, sort, join
//conditional and return

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test === original
  }