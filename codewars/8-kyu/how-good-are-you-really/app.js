function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a,b) => a+b, 0)/classPoints.length
    return yourPoints > average;
  }