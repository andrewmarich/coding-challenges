//Your task is to write a function that takes a string and return a new string with all vowels removed.

//P
//string

//R
//string without vowels

//E
disemvowel("This website is for losers LOL!") //"Ths wbst s fr lsrs LL!"

//P

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}