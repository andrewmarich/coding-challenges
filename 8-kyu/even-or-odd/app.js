//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P
//integer

//R
//'Even' or 'Odd'

//E
evenOrOdd(2) //"Even"
evenOrOdd(7) //"Odd"
evenOrOdd(-42) //"Even"

//P
//ternary operator
//modulus
//return 'even' or 'odd'

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}