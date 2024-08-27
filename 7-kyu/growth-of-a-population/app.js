//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//P
//population at year zero (p0)
//percent growth (percent)
//inhabitants coming or leaving (aug)
//population to equal or surpass (p)

//R
//num years

//E
//nbYear(1500, 5, 100, 5000), 15
//nbYear(1500000, 2.5, 10000, 2000000), 10
//nbYear(1500000, 0.25, 1000, 2000000), 94

//P
//for loop
//declare var
//re-assign p0 using formula
//return var

function nbYear(p0, percent, aug, p) {
    for (var i = 0; p0 < p; i++) {
      p0 = Math.floor(p0 + (p0 * percent/100) + aug)
    }
    return i
  }