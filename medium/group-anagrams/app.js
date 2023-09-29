/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let map = new Map()

    for (let str of strs) {
        let frequency = new Array(26).fill(0)
        
        for (let char of str) {
            let charCode = char.charCodeAt(char) - 'a'.charCodeAt(0)
            frequency[charCode]++
        }

        let hash = frequency.join('-')
        let group = map.get(hash) || []
        group.push(str)
        map.set(hash, group)
    }

    return [...map.values()]
};