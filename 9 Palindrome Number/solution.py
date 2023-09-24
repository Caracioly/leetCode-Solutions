class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        x_list = list(str(x))
        indice = 1
        for number in range(int(len(x_list) / 2)):
            if x_list[number] != x_list[-indice]:
                return False
            indice += 1
        return True


print(Solution().isPalindrome(10))

# 121
# -121
# 10
