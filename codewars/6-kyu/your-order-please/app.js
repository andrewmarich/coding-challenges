//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//P
//string

//R
//sorted string

//E
//order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est"

//P
//arr var using split
//newArr empty var
//nested for loop
//join and return

function order(words){
    let array = words.split(' ')
    let newArr = []
    for (let i = 0; i <= array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j].indexOf(i) >= 0) {
          newArr.push(array[j])
        }
      }
    }
    return newArr.join(' ')
  }