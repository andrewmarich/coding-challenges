//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

//P
//positive integer

//R
//pyramid of asterisks

//E
//Test.assertDeepEquals(towerBuilder(1), ["*"]);
//Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
//Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);

//P
//pyramid arr
//for loop
  //repeat
//return pyramid

function towerBuilder(nFloors) {
    let pyramid = []
    for (let i = 0; i < nFloors; i++) {
      pyramid.push(" ".repeat(nFloors - i - 1)
                  + "*".repeat((i * 2) + 1)
                  + " ".repeat(nFloors - i - 1))
    }
    return pyramid
  }