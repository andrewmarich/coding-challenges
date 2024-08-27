//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//P
//string

//R
//array

//E
//capitalize("abcdef"),['AbCdEf', 'aBcDeF']
//capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']

//P
//split
//for loop
//toUpperCase
//join
//return as array

function capitalize(s) {
 
    let str1 = s.split('')
    for (let i = 0; i < str1.length; i++) {
      if (i % 2 === 0) {
        str1[i] = str1[i].toUpperCase()
      }
    }
    
    let str2 = s.split('')
    for (let j = 0; j < str2.length; j++) {
      if (j % 2 !== 0) {
        str2[j] = str2[j].toUpperCase()
      }
    }
    
    let arr = [str1.join(''), str2.join('')]
    return arr
  }