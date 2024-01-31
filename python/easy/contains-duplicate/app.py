class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = {}

        for num in nums:
            if num in map:
                return True
            map[num] = map.get(num, 0) + 1
        return False