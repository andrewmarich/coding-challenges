/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (const str of strs) {
        const sortedStrs = str.split('').sort().join('');

        if (!map[sortedStrs]) {
            map[sortedStrs] = [str];
        } else {
            map[sortedStrs].push(str);
        }
    }
    return Object.values(map);
};