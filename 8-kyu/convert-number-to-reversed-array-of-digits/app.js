function digitize(n) {
    let reversedArr = String(n).split('').reverse().map((n) => {
      return Number(n)
    })
    return reversedArr
  }