function findDifference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous*current,1) - b.reduce((previous, current) => previous*current,1))
  }