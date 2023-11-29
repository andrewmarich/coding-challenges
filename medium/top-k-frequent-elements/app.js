/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const bucket = [];

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        bucket[count] = (bucket[count] || new Set().add(num));
    }

    const result = []

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }
        if (result.length === k) {
            break;
        }
    }
    return result;
};