class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # sort
        return sorted(s) == sorted(t)