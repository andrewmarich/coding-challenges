//Your task is to write a function which returns the sum of following series upto nth term(parameter).

//P
//integer

//R
//sum of series to 2 decimal places as string

//E
//SeriesSum(1), "1.00")
//SeriesSum(2), "1.25")
//SeriesSum(3), "1.39")

//P
//empty sum
//for loop
//toFixed

function SeriesSum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
      if (i === 1) {
        sum += 1
      } else if (i > 1) {
        sum += 1/(1+(3*(i-1)))
      }
    }
    return sum.toFixed(2)
  }