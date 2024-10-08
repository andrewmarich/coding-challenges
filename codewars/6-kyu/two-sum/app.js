//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

//P
//array of integers

//R
//array of two indices of two integers that when summed equal target value

//E
//twoSum([1,2,3], 4), [0, 2]

//P
//nested for loop

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j=i+1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {return [i, j]}
      }
    }
  }