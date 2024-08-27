//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

//P
//num, integer

//R
//num

//E
addFive(5) //10
addFive(0) //5
addFive(-5) //0

//P
//return num + 5

function addFive(num) {
  return num += 5
}