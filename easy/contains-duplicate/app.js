/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    return sorted.some((e, i) => e === sorted[i+1])
};