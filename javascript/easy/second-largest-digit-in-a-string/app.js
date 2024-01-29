/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let uniqueDigits = new Set([])
    for (let val of s) {
        if (!isNaN(val)) {
            uniqueDigits.add(parseInt(val))
        }
    }
    let sorted = [...uniqueDigits].sort((a,b) => b-a)
    return sorted.length <= 1 ? -1 : sorted[1]
};