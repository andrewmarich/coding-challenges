/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x
    }

    let min = 0
    let max = x

    while (min < max) {
        const midpoint = Math.floor((min + max) / 2)
        const square = midpoint * midpoint

        if (square === x) {
            return midpoint
        } else if (square < x) {
            min = midpoint + 1
        } else if (square > x) {
            max = midpoint
        }
    }

    return min * min > x ? min - 1 : min
};