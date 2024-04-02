/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; right = height.length - 1;
    let res = 0;

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        res = Math.max(res, area);

        if (height[left] < height[right]) left++;
        else right--;
    }
    return res;
};