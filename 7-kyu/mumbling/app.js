//This time no story, no theory. The examples below show you how to write function accum:

//P
//string

//R
//string repeating each character by increasing increment

//E
accum("ZpglnRxqenU") //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

//P
//lowercase
//split
//loop and repeat
//loop and uppercase
//join

function accum(s) {
  let lowercase = s.toLowerCase()
  let split = lowercase.split('')
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].repeat(i+1)
  }
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
  }
  return split.join('-')
}