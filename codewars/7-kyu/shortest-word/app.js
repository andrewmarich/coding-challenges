//Simple, given a string of words, return the length of the shortest word(s).

//P
//string of words

//R
//length of shortest word

//E
findShort("bitcoin take over the world maybe who knows perhaps") //3

//P
//split
//sort
//return length

function findShort(s){
  return (s.split(' ').sort((a,b) => a.length-b.length)[0]).length
}