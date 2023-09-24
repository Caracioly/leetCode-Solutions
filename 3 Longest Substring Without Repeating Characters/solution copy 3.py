class Solution():
    def lengthOfLongestSubstring(self, s):
        repeated_characters = []
        solution_list = list(s)
        count = 0
        if not solution_list:
            return 0
        for word in solution_list:
            if word not in repeated_characters:
                repeated_characters.append(word)
            else:
                count += 1
        return len(solution_list) - count


solution = Solution()
print(solution.lengthOfLongestSubstring("pwwkew"))
# pwwkew  #array busca rápida / lista inserçao rápida
# abcabcbb
# bbbbb
# au
# aab
# ""
# " "
# "dvdf"