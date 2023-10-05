Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

**Example 1:**

**Input:** nums = [3,2,3]
**Output:** [3]

**Example 2:**

**Input:** nums = [1]
**Output:** [1]

**Example 3:**

**Input:** nums = [1,2]
**Output:** [1,2]

**Constraints:**

-   `1 <= nums.length <= 5 * 104`
-   `-109 <= nums[i] <= 109`

**Follow up:** Could you solve the problem in linear time and in `O(1)` space?
I could not

# Complexity
- Time complexity: O(n2)

# Code
```Kotlin
class Solution {
    fun majorityElement(nums: IntArray): List<Int> {
        val numbersThatAppears: MutableList<Int> = mutableListOf()
        for(element in nums){
            val count = nums.count{it == element}
            if (count > nums.size / 3){
                if (element !in numbersThatAppears){
                    numbersThatAppears.add(element)
                }
            }
        }
        return numbersThatAppears
    }
}
```