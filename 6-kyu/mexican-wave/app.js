//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

//P
//string of words

//R
//string of words which each character alternates uppercase based on index

//E
//str('hello'), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//P
//empty arr
//for loop
  //split var
  //if not empty str
    //toUpperCase
    //push
      //join

      function wave(str){
        let arr = []
        for (let i = 0; i < str.length; i++) {
          let split = str.split('')
          if (split[i] !== ' ') {
            split[i] = split[i].toUpperCase()
            arr.push(split.join(''))
          } 
        }
        return arr