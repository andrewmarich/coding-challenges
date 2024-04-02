/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 0;
    let max = 1;
    let maxProfit = 0;

    while (max < prices.length) {
        if (prices[max] > prices[min]) {
            profit = prices[max] - prices[min];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            min = max;
        }
        max++;
    }
    return maxProfit;
};