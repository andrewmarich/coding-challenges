/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

//every array is staggered by one

var isToeplitzMatrix = function(matrix) {
    const row = matrix.length
    const column = matrix[0].length
    
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (matrix[i][j] !== matrix[i-1][j-1]) return false
        }
    }
    return true
};