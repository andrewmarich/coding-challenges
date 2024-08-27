//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//P
//integer

//R
//negative integer

//E
makeNegative(42) //-42
makeNegative(-42) //-42

//P
//ternary operator

function makeNegative(num) {
  return num > 0 ? -num : num
}