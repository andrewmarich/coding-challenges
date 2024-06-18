class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = []

        for c in s:
            if c.isalnum():
                res.append(c.lower())

        newStr = ''.join(res)
        return newStr == newStr[::-1]