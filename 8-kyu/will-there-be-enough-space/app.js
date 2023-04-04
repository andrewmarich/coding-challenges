function enough(cap, on, wait) {
    let space = cap - on
    let deficit = wait - space
    if (space >= wait) {
      return 0
    } else {
      return deficit
    }
  }