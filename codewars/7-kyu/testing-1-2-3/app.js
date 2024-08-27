//Write a function which takes a list of strings and returns each line prepended by the correct number.

//P
//array of strings

//R
//array of strings perpended by ascending number

//E
//number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]

//P
//answer var
//for loop
  //conditional
    //empty arr
    //template literal

    var number=function(array){
        let answer = []
        for (let i = 0; i < array.length; i++) {
          if (array.length === 0) {
            return []
          } else {
            answer.push(`${i+1}: ${array[i]}`)
          }
        }
        return answer
      }