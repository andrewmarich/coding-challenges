//Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

//P
//string

//R
//sorted string

//E
// Test.assertEquals(sortGiftCode('abcdef'), 'abcdef');
// Test.assertEquals(sortGiftCode('pqksuvy'), 'kpqsuvy');
// Test.assertEquals(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');

//P
//split
//sort
//join

function sortGiftCode(code){
  return code.split('').sort().join('')
}