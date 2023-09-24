# muda a chave para true se ja foi analizado
# ai vai passando para frente na lista
# tudo dentro de um while
# o while vai quebrar se todos os objetos da lista forem True


class Solution(object):
    def lengthOfLongestSubstring(self, s):
        s_list = [*s]
        count = 0
        for indice, char in enumerate(s_list):
            try:
                if s_list.index(char, indice + 1):
                    char_index = s_list.index(char, indice + 1)
                    if count <= char_index - indice:
                        count = char_index - indice
            except ValueError:
                if count <= len(s_list) - indice:
                    count = len(s_list) - indice
        return count


solution = Solution()
print(solution.lengthOfLongestSubstring("abcabcbb"))
# pwwkew  #array busca rápida / lista inserçao rápida
# abcabcbb
# bbbbb
# au
# aab
# ""
# " "
# "dvdf"