//Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

//P
//string

//R
//'Right side wins!' OR 'Left side wins!' OR 'Let's fight again!'

//E
// Test.assertEquals( alphabetWar("z") , "Right side wins!" );
// Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );
// Test.assertEquals( alphabetWar("zzzzs"), "Right side wins!" );
// Test.assertEquals( alphabetWar("wwwwww"), "Left side wins!" );

//P
//split
//left and right objects
//leftCount and rightCount
//for loop
//ternary

function alphabetWar(fight) {
  fight = fight.split('')
  let left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
  let countLeft = 0
  let right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
  let countRight = 0
  for (let i = 0; i < fight.length; i++) {
    if (left[fight[i]]) {
      countLeft += left[fight[i]]
    } else if (right[fight[i]]) {
      countRight += right[fight[i]]
    }
  }
  return countLeft === countRight ? "Let's fight again!" : countLeft > countRight ? 'Left side wins!' : 'Right side wins!'
}