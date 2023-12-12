/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function dfs(str, open, close) {
        if (open > close) {
            return;
        }

        if (open === 0 && close === 0) {
            res.push(str);
            return;

        }
        if (open > 0) {
            dfs(`${str}(`, open - 1, close);
        }

        if (close > 0) {
            dfs(`${str})`, open, close - 1);
        }
    };

    dfs('', n, n);

    return res;
};