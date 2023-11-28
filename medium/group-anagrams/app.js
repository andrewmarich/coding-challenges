/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {}

    for (const str of strs) {

        const sortedStrs = str.split('').sort().join('')

        if (map[sortedStrs]) {
            map[sortedStrs].push(str)
        } else {
            map[sortedStrs] = [str]
        }
    }
    return Object.values(map)
};