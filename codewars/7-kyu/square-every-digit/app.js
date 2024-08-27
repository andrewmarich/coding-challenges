//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//P
//integer

//R
//each integer squared and concatenated

//E
squareDigits(3212) //9414
squareDigits(2112) //4114
squareDigits(0) //0

//P
//num to str
//empty arr
//loop
//return arr

function squareDigits(num){
  let str = String(num).split('').map(n => {
    return Number(n)
  }) 
  let arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i] * str[i])
  }
  return Number(arr.join(''))
}