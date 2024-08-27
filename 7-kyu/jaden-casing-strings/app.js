//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//P
//string

//R
//string with each word capitalized

//E
//str.toJadenCase() //"How Can Mirrors Be Real If Our Eyes Aren't Real"

//P
//split
//map
//toUpperCase + slice
//join

String.prototype.toJadenCase = function () {
  return this.split(' ').map(char => char[0].toUpperCase() + char.slice(1)).join(' ')
};