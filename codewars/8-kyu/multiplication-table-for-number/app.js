//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//P
//num, whole, 1-10

//R
//1-10 * num

//E
multiTable(5) //'1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'

//P
//empty string
//for loop
//template literal

function multiTable(number) {
  let string = ''
  for (let i = 1; i <= 10; i++) {
    string += `${i > 1 ? '\n' : ''}${i} * ${number} = ${i * number}`
  }
  return string
}