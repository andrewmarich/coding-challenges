var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = (humanYears == 1) ? 15 : (humanYears === 2) ? 15 + 9 : (humanYears >= 3) ? 15 + 9 + 4 * (humanYears-2) : 0
    
    let dogYears = (humanYears == 1) ? 15 : (humanYears === 2) ? 15 + 9 : (humanYears >= 3) ? 15 + 9 + 5 * (humanYears-2) : 0
    
    return [humanYears, catYears, dogYears];
  }