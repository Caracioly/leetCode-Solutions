class Solution(object):
    def lengthOfLongestSubstring(self, s):
        if not s or len(s) > 30000:
            return 0
        maior_valor = 0
        s_list = list(s)
        while len(s_list) > 0:
            sub_str = []
            count = 0
            for char in s_list:
                if char not in sub_str:
                    count += 1
                    sub_str.append(char)
                    print(f"count: {count} sub_str: {sub_str}")
                    if count >= maior_valor:
                        maior_valor = count
                else:
                    count = 0
                    print(f"maior valor {maior_valor}")
                    sub_str = []
            s_list.pop(0)
        return print(f" retornou aqui {maior_valor}")


objeto = Solution()
print(objeto.lengthOfLongestSubstring(""))
# pwwkew
# abcabcbb
# bbbbb
# au
# print(f"{}")
