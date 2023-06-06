//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//P
//two integers

//R
//binary number as string

//E
//addBinary(1,1), "10"
//addBinary(5,9), "1110"

//P
//add inputs
//toString

function addBinary(a,b) {
    let num = a + b
    return num.toString(2)
  }