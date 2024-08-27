//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//P
//string

//R
//boolean

//E
XO('xo') //true
XO("xxOo") //true
XO("xxxm") //false

//P
//lowercase
//split
//two loops
//ternary operator

function XO(str) {
  let lowercase = str.toLowerCase()
  let split = lowercase.split('')
  let countX = 0
  let countO = 0
  for (let i = 0; i < split.length; i++) {
    if (lowercase[i] === 'x') {
      countX++
    } 
  }
  for (let j = 0; j < split.length; j++) {
    if (lowercase[j] === 'o') {
      countO++
   }
  }
  return (countX === countO) ? true : false;
}