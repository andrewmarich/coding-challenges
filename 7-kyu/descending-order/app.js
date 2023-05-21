//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//P
//non-negative integer

//R
//non-negative integer, descending

//E
descendingOrder(0) //0
descendingOrder(15) //51
descendingOrder(123456789) //987654321

//P
//split n into array
//map through array
//sort in descending
//join the sorted array
//return the joined num

function descendingOrder(n) {
  return Number(n.toString().split('').sort((a,b) => b-a).join(''))
}