//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//P
//string

//R
//string of space separated alphabet positions

//E
//alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//P
//toLowerCase
//split
//filter
  //charCodeAt
//map
  //charCodeAt
//join

function alphabetPosition(text) {
    return text.toLowerCase().split('').filter((element, index) => {
      return element.charCodeAt(element[index]) >= 97 && element.charCodeAt(element[index]) <= 122
    }).map((element, index) => {
      return element.charCodeAt(element[index])-96
    }).join(' ')
  }