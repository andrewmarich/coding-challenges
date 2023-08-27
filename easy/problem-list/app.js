/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter((e, i, a) => {
        return a.indexOf(e) === a.lastIndexOf(e)
    })
};