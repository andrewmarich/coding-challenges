function spinWords(string){
    return string.split(' ').map(function (string) {
      return (string.length >= 5) ? string.split('').reverse().join('') : string
    }).join(' ')
  }