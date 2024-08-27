//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

//P
//string of letters from a-z

//R
//string of number of letters from n-z divided by string length

//E
//printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56"

//P
//match
  //length
//length

function printerError(s) {
    return (s.length > 0) && (s.match(/[n-z]/g)) ? `${s.match(/[n-z]/g).length}/${s.length}` : `0/${s.length}`
  }