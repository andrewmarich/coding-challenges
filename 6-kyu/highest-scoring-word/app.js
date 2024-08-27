//Given a string of words, you need to find the highest scoring word.

//P
//string of words

//R
//highest scoring word as string

//E
//high('man i need a taxi up to ubud'), 'taxi'

//P
//scores var
  //split into separate strings
  //map
    //iterate through all chars in a string
      //reduce
        //charCodeAt minus 96
//split
//index of max value

function high(x){
    let scores = x.split(' ').map(char => [...char].reduce((a,b) => a + b.charCodeAt(0)-96, 0))
    return x.split(' ')[scores.indexOf(Math.max(...scores))]
  }