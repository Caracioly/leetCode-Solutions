fun main(s: String, t: String): Boolean {
    if (s.isNotEmpty()) {
        var sIndex: Int = 0
        var tIndex: Int = 0

        while (s.length > sIndex && t.length > tIndex) {
            if (s[sIndex] == t[tIndex]) {
                sIndex++
            }
            tIndex++
        }
        return sIndex == s.length
    }
    return false
}

main("abc", "ahbgdc")
// "acb"
// "ahbgdc"