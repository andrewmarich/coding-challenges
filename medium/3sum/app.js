/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1, sum = 0;

        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right++;

                while (nums[left] === nums[left - 1]) {
                    left++;
                }

                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            }
            while (nums[i + 1] === nums[i]) i++;
        }
    }
    return res;
};