function expressionMatter(a, b, c) {
    let prod1 = a*b*c
    let prod2 = (a*b)+c
    let prod3 = a+(b*c)
    let prod4 = a+b+c
    let prod5 = (a+b)*c
    let prod6 = a*(b+c)
    return Math.max(prod1, prod2, prod3, prod4, prod5, prod6)
  }