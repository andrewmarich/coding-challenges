class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #map to store the count of each unique number
        count = {}
        #list to store lists of numbers based on their frequencies
        freq = [[] for i in range(len(nums) + 1)]

        #iterates through nums and increments count of num
        for n in nums:
            count[n] = 1 + count.get(n, 0)

        #iterates through count dict and groups nums based on freq
        for n, i in count.items():
            freq[i].append(n)

        res = []
        #decrements through freq list
        for i in range(len(freq) - 1, 0, -1):
            #iterates through list of nums and appends to res
            for n in freq[i]:
                res.append(n)
            if len(res) == k:
                return res

        