import time
start = time.time()


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
end = time.time()
delta = round(end-start, 2)
print(f"build in {delta}")
# pwwkew  #array busca rápida / lista inserçao rápida
# abcabcbb
# bbbbb
# au
# aab

start = time.time()

