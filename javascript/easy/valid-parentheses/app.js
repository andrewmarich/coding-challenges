/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    let hash = {')' : '(', '}' : '{', ']' : '['};

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            if (hash[s[i]] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return !stack.length
};