class Solution(object):
    def lengthOfLongestSubstring(self, s):
        maior_valor = 0
        s_list = list(s)
        while len(s_list) > 0:
            sub_str = []
            count = 0
            for char in s_list:
                if char not in sub_str:
                    count += 1
                    sub_str.append(char)
                    if count > maior_valor:
                        maior_valor = count
                else:
                    count = 0
                    sub_str = []
            s_list.pop(0)
        return maior_valor


objeto = Solution()
objeto.lengthOfLongestSubstring("abcabcbb")
# pwwkew
# abcabcbb
# bbbbb
# au
# aab

