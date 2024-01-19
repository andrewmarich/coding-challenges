class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = defaultdict(list)

        for str in strs:
            sortedStr = ''.join(sorted(str))
            map[sortedStr].append(str)

        return list(map.values())