/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        res.push(nums.reduce((acc, num, idx) => idx !== i ? acc * num : acc));

    }
    return res;
};