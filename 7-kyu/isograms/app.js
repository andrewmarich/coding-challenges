function isIsogram(str){
    let word = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++) {
        if (word[i] === word[j]) {
          return false
        } 
      }
    }
    return true
  }