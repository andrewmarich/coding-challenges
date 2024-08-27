//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//P
//string

//R
//boolean

//E
//validatePIN("1"),false
//validatePIN("12"),false
//validatePIN("1234"),true
//validatePIN("0000"),true

//P
//ternary
//length
//match and regex

function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6) && (pin.match(/^\d+$/)) ? true : false
  }