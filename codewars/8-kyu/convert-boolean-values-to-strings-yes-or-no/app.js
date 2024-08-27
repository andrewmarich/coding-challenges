//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//P
//boolean

//R
//'yes' or 'no'

//E
boolToWord(true) //'Yes'
boolToWord(false) //'No'

//P
//ternary operator
//conditional

function boolToWord( bool ){
  return bool === true ? 'Yes' : 'No'
}