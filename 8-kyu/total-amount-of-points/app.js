function points(games) {
    let sum = 0
    games.map(game => {
      if (game[0] === game[2]) {
        sum += 1
      } else if (game[0] > game[2]) {
        sum += 3
      } else {
        sum += 0
      }
    })
    return sum
  }