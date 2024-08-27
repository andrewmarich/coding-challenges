//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//P
//non-negative integer

//R
//next perfect square

//E
//findNextSquare(121), 144
//findNextSquare(625), 676
//findNextSquare(155), -1

//P
//ternary
  //determine if decimal
    //Math.pow & Math.sqrt

    function findNextSquare(sq) {
        return Math.sqrt(sq) % 1 === 0 ? Math.pow((Math.sqrt(sq) + 1), 2) : -1
      }