/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let letters = []
    let numbers = []

    for (char of s) {
        isNaN(char) ? letters.push(char) : numbers.push(char)
    }
    if (letters.length < numbers.length) {
        [letters, numbers] = [numbers, letters]
    }
    return letters.length - numbers.length <= 1 ?
        letters.map((e, i) => e + (numbers[i] ? numbers[i] : '')).join('') : ''
};