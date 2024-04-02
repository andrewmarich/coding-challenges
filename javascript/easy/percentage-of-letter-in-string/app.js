/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) {
            count++
        }
    }
    return Math.floor(100*(count/s.length))
};