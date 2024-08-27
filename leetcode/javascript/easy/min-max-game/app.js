/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    while (nums.length > 1) {
        let arr = []
        for (let i = 0; i < nums.length / 2; i++) {

            let even = 2 * i
            let odd = 2 * i + 1

            let min = Math.min(nums[even], nums[odd])
            let max = Math.max(nums[even], nums[odd])

            if (i % 2 === 0) {
                arr.push(min)
            } else {
                arr.push(max)
            }
        }

    nums = arr
    }

    return nums[0]
};