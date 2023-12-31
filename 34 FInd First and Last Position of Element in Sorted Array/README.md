Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

**Input:** nums = [5,7,7,8,8,10], target = 8
**Output:** [3,4]

**Example 2:**

**Input:** nums = [5,7,7,8,8,10], target = 6
**Output:** [-1,-1]

**Example 3:**

**Input:** nums = [], target = 0
**Output:** [-1,-1]

**Constraints:**

-   `0 <= nums.length <= 105`
-   `-109 <= nums[i] <= 109`
-   `nums` is a non-decreasing array.
-   `-109 <= target <= 109`

# Complexity
- Time complexity: O(log n)


# Code
```Kotlin
class Solution {
     fun searchRange(nums: IntArray, target: Int): IntArray {
        val firstIndex = findFirstIndex(nums, target)
        if (firstIndex == -1) {
            return intArrayOf(-1, -1)
        }
        
        val lastIndex = findLastIndex(nums, target)
        return intArrayOf(firstIndex, lastIndex)
    }

    fun findFirstIndex(nums: IntArray, target: Int): Int {
        var left = 0
        var right = nums.size - 1
        var result = -1
        
        while (left <= right) {
            val mid = left + (right - left) / 2
            
            if (nums[mid] >= target) {
                right = mid - 1
                if (nums[mid] == target) {
                    result = mid
                }
            } else {
                left = mid + 1
            }
        }
        
        return result
    }
    
    fun findLastIndex(nums: IntArray, target: Int): Int {
        var left = 0
        var right = nums.size - 1
        var result = -1
        
        while (left <= right) {
            val mid = left + (right - left) / 2
            
            if (nums[mid] <= target) {
                left = mid + 1
                if (nums[mid] == target) {
                    result = mid
                }
            } else {
                right = mid - 1
            }
        }
        
        return result
    }
}
```