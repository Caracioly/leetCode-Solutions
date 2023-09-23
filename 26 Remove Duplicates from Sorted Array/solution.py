class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        elif len(nums) == 1:
            return len(nums)
        expectedNums = list(set(nums))
        expectedNums = sorted(expectedNums)
        for i in nums:
            if nums.count(i) > 1:
                nums.remove(i)
        if expectedNums != nums:
            self.removeDuplicates(nums)
        return len(nums)


print(Solution().removeDuplicates([-1, 0, 0, 0, 0, 3, 3]))

# [1, 1, 2]
# [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
# [1, 1, 1, 1]
# [-1, 0, 0, 0, 0, 3, 3]
