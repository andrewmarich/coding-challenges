/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const cols = Array.from({ length: 9 }, () => new Set());
    const rows = Array.from({ length: 9 }, () => new Set());
    const squares = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                continue;
            }

            if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || squares[Math.floor(r / 3) + Math.floor(c / 3) * 3].has(board[r][c])) {
                return false;
            } else {
                cols[c].add(board[r][c]);
                rows[r].add(board[r][c]);
                squares[Math.floor(r / 3) + Math.floor(c / 3) * 3].add(board[r][c]);
            }
        }
    }
    return true;
};