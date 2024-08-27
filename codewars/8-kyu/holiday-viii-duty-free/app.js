function dutyFree(normPrice, discount, hol){
    let percentage = discount/100
    let price = normPrice * percentage
    return Math.floor(hol / price)
  }