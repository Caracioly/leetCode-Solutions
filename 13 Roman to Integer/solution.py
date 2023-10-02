class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = {"I": 1, "V": 5, "X": 10, "L": 50,
                 "C": 100, "D": 500, "M": 1000}
        number = 0
        is_substraction = True
        for indice, char in enumerate(s):
            if char in roman:
                if s[indice - 1] != char and s[indice - 1] < char and indice >= 1:
                        number -= roman[char]

        return number


print(Solution().romanToInt("LVIII"))

# "III"
# "LVIII"
# "MCMXCIV"