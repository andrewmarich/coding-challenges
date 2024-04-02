/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums = nums.sort((a,b) => a-b)
    let currentCount = 1;
    let maxCount = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            currentCount++;
        } else if (nums[i] === nums[i-1]) continue;
        else {
            currentCount = 1;
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
};