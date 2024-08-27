//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

//P
//num as string

//R
//num with each character repeated by itself as string

//E
// ["312", "333122"],
// ["102269", "12222666666999999999"],
// ["0", ""],
// ["000", ""],
// ["123", "122333"]

//P
//split
//map
  //repeat
//join

function explode(s) {
    return s.split('').map((e) => {
      return e.repeat(Number(e))
    }).join('')
  }