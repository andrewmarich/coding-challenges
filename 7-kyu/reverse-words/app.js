//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//P
//string

//R
//reverses each word in string

//E
reverseWords('apple') //'elppa'
reverseWords('a b c d') //'a b c d'
reverseWords('double  spaced  words') //'elbuod  decaps  sdrow'

//P
//split
//map
//join

function reverseWords(str) {
  return str.split(' ').map(substr => {
    return substr.split('').reverse().join('')
  }).join(' ')
}