/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('') === s.replace(/[^a-z0-9]/gi, '').toLowerCase();
};