//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P
//string

//R
//string without first and last characters

//E
removeChar('eloquent') //'loquen'

//P
//slice

function removeChar(str){
  return str.slice(1, -1)
}