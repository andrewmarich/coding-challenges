//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

//P
//non-negative integer

//R
//binary format

//E
toBinary(1) //1
toBinary(2) //10
toBinary(3) //11

//P
//use toString(2) method
//return as number

function toBinary(n){
  return Number(n.toString(2));
}