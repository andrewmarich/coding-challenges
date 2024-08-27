//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//P
//array of strings

//R
//sorted array of strings from shortest to longest

//E
sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]

//P
//sort

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
}