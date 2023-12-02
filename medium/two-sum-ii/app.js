/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length - 1; j > i; j--) {
            if ((numbers[i] + numbers[j]) === target) {
                return [i + 1, j + 1]
            }
        }
    }
};