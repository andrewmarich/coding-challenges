/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length

    for (let i = 1; i <= len / 2; i++) {
        if (len % i === 0) {
            const substr = s.slice(0, i)
            if (substr.repeat(len / i) === s) {
                return true
            }
        }
    }
    return false
};