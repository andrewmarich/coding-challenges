//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//P
//string

//R
//string

//E
DNAStrand("AAAA") //"TTTT"
DNAStrand("ATTGC") //"TAACG"
DNAStrand("GTAT") //"CATA"

//P
//object pairs
//split
//map
//join

function DNAStrand(dna){
  let pairs = {A: 'T', T: 'A', C: 'G', G: 'C'}
  return dna.split('').map(letter => {
    return pairs[letter]
  }).join('')
}