//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//P
//num, + or -, whole or floated

//R
//val multiplied by 50 increased by 6 OR 'Error'

//E
problem(1) //56
problem(5) //256
problem(0) //6

//P
//ternary operator
//typeof operator
//return val or err

function problem(x){
  return (typeof x === 'number') ? (x*50)+6 : 'Error'
}