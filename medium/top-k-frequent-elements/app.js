/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let sorted = [...map.entries()].sort((a,b) => b[1] - a[1]);

    const result = []

    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }

    return result;

};