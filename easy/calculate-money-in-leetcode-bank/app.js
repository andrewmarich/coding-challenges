/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function(n) {
    let total = 0
    let current = 1

    for (let i = 1; i <= n; i++) {
        total += current
        if (i % 7 === 0) {
            current = (i / 7) + 1
        } else {
            current++
        }
    }
    return total
};