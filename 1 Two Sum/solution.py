class Solution(object):
    def twoSum(self, nums, target):
        for i in range(0, len(nums)):
            if i == 0:
                result = nums[i]
            for k in range(nums.index(result) + 1, len(nums)):
                if result + nums[k] == target:
                    return nums.index(result), k
            result = nums[i]
