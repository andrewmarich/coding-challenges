//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//P
//string

//R
//first string ends with second string

//E
solution('abcde', 'cde') //true
solution('abcde', 'abc') //false
         
//P
//endsWith method

function solution(str, ending){
  return str.endsWith(ending)
}