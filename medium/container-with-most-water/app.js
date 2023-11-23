/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;

    for (let l = 0; l < height.length; l++) {
        for (let r = l + 1; r < height.length; r++) {
            const area = (r - l) * Math.min(height[l], height[r]);
            res = Math.max(res, area);
        }
    }
    return res;
};