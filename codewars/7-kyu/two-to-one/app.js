//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//P
//two strings s1 and s2

//R
//sorted string, longest possible, distinct letters

//E
//longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu"
//longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy"

//P
//split
//sort
//filter
  //ternary
    //indexOf
//join

function longest(s1, s2) {
    return s1.concat(s2).split('').sort().filter((e, i, a) => {
      return a.indexOf(e) === i
    }).join('')
  }