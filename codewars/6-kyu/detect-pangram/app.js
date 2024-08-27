//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P
//string

//R
//boolean

//E
//isPangram("The quick brown fox jumps over the lazy dog."), true
//isPangram("This is not a pangram."), false

//P
//alphabet var
//return
  //toLowerCase
  //match
  //sort
  //filter
    //conditional
  //join
  //includes

  function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return string.toLowerCase().match(/[a-z]/g).sort().filter((e, i, a) => {
      return a[i] !== a[i+1]
    }).join('').includes(alphabet)
  }