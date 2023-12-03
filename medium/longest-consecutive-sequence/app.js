/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let sorted = nums.sort((a,b) => a-b);
    let currentCount = 1;
    let maxCount = 1;
    let previousNum = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (nums[i] === previousNum + 1) {
            currentCount++;
        } else {
            currentCount = 1;
        }
        maxCount = Math.max(maxCount, currentCount);
        previousNum = nums[i];
    }
    return maxCount;
};