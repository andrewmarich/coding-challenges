function addLength(str) {
    let split = str.split(' ')
    let arr = []
    for (let i = 0; i < split.length; i++) {
      arr.push(split[i] + " " + `${split[i].length}`)
    }
    return arr
  }
  