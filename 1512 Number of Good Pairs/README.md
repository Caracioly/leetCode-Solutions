Given an array of integers `nums`, return _the number of **good pairs**_.

A pair `(i, j)` is called _good_ if `nums[i] == nums[j]` and `i` < `j`.

**Example 1:**

**Input:** nums = [1,2,3,1,1,3]
**Output:** 4
**Explanation:** There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

**Example 2:**

**Input:** nums = [1,1,1,1]
**Output:** 6
**Explanation:** Each pair in the array are _good_.

**Example 3:**

**Input:** nums = [1,2,3]
**Output:** 0

# Complexity
- Time complexity: O(n2)

# Code
```Kotlin
class Solution {
    fun numIdenticalPairs(nums: IntArray): Int {
        var goodPairs: Int = 0
        var j: Int = 0
        var i: Int = 1
        while (j < nums.size) {
            i = j + 1
            while (i < nums.size) {
                if (nums[i] == nums[j]) {
                    goodPairs++
                }
                i++
            }
            j++
        }
        return goodPairs
    }
}
```