class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        #1-indexed, sorted increasing
        #add up to target, only one solution, not re-use element
        numMap = {}

        for i, n in enumerate(numbers, start=1):
            numMap[n] = i    
            left, right = 0, len(numbers) - 1

        while left < right:
            currSum = numbers[left] + numbers[right]
            if currSum == target:
                return [left + 1, right + 1]
            elif currSum < target:
                left += 1
            else:
                right -= 1