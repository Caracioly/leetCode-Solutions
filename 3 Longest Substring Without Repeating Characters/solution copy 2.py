class Solution(object):
    def lengthOfLongestSubstring(self, s):
        self.solution = 0
        solution_list = list(s)
        while len(solution_list) > 0:
            self.repeated_characteres = []
            self.count = 0
            for self.character in solution_list:
                self.add_character_to_current_chars()
            solution_list.pop(0)
        return self.solution

    def add_character_to_current_chars(self):
        if self.character not in self.repeated_characteres:
            self.count += 1
            self.repeated_characteres.append(self.character)
            self.update_max_length()

    def update_max_length(self):
        if self.count > self.solution:
            self.solution = self.count
        else:
            self.count = 0
            self.repeated_characteres = []


solution = Solution()
print(solution.lengthOfLongestSubstring("dvdf"))
# pwwkew  #array busca rápida / lista inserçao rápida
# abcabcbb
# bbbbb
# au
# aab
# ""
# " "
# "dvdf"
