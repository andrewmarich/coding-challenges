//Complete the solution so that the function will break up camel casing, using a space between words.

//P
//string

//R
//string with spacing between camel casing

//E
//solution('camelCasing'), 'camel Casing'

//P
//split and regex
//join

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
  }