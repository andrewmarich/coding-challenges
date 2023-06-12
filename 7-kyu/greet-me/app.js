//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//P
//string

//R
//string

//E
//greet('riley'), 'Hello Riley!'

//P
//template literal
//charAt and toUpperCase
//slice and toLowerCase

var greet = function(name) {
    return `Hello ${name.charAt(0).toUpperCase()}` + `${name.slice(1).toLowerCase()}!`
  }