//Count the numbers of digits d used in the writing of all the k**2.

//P
//integer n greater than zero and digit d between 0 and 9

//R
//square all num between 0 and n, 

//E
// assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
// assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
// assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
// assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");

//P
//empty arr
//for loop
  //push i squared
//return
  //toString
  //split
  //filter
    //equal to value of d
  //length

  function nbDig(n, d) {
    let arr = []
    for (let i = 0; i <= n; i++) {
      arr.push(i*i)
    }
    return arr.toString().split('').filter((e) => {
      return e == d
    }).length
  }