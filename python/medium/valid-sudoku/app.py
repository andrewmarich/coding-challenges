class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        res = []

        for row in range(9):
            for col in range(9):
                ele = board[row][col]
                if ele != ".":
                    res += [(row, ele), (ele, col), (row // 3, col // 3, ele)]
        return len(res) == len(set(res))