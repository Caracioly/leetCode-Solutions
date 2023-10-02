An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` _if the given array is monotonic, or_ `false` _otherwise_.

**Example 1:**

**Input:** nums = [1,2,2,3]
**Output:** true

**Example 2:**

**Input:** nums = [6,5,4,4]
**Output:** true

**Example 3:**

**Input:** nums = [1,3,2]
**Output:** false
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```Kotlin
class Solution {
    fun isMonotonic(nums: IntArray): Boolean {
        var isIncreasing: Boolean = false
        var isDecreasing: Boolean = false
        if (nums.isNotEmpty()) {
            for(i in 1 until nums.size){
                if(nums[i] > nums[i - 1]){
                    if (isDecreasing){
                        return false
                    }
                    isIncreasing = true
                }else if(nums[i] < nums[i - 1]){
                    if (isIncreasing){
                        return false
                    }
                    isDecreasing = true
                }
            }
        }
        return true
    }
}
```