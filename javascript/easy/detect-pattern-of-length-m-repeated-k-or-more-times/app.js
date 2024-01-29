/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    let count = 0
    for (let i = 0, j = m; i < arr.length - m; i++, j++) {
        if (arr[i] === arr[j]) {
            count++
        } else {
            count = 0
        }

        if (count === m * (k - 1)) {
            return true
        }
    }
    return false
};