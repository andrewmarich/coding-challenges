/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (a / b) >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };

    for (char of tokens) {
        if (operators[char]) {
            const first = stack.pop();
            const next = stack.pop();

            stack.push(operators[char](next, first));
        } else {
            stack.push(Number(char));
        }
    }
    return stack.pop();
};