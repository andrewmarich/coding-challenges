/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let oddCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            oddCount = 0
        } else if (arr[i] % 2 !== 0) {
            oddCount++
            if (oddCount === 3) return true
        }
    }
    return false
};