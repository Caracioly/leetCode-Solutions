[557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

Solved

Easy

Topics

Companies

Given a string  `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"
**Output:** "s'teL ekat edoCteeL tsetnoc"

**Example 2:**

**Input:** s = "God Ding"
**Output:** "doG gniD"

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    var subString: String= ""
    var subStringFinal: String = ""
    fun reverseWords(s: String): String {
        for(word in s){
            if (word == ' '){
                subString = subString.reversed()
                subString += word
                subStringFinal += subString
                subString = ""
            }else {
                subString += word
            }
        }
        subString = subString.reversed()
        subStringFinal += subString
        return subStringFinal
    }
}
```
