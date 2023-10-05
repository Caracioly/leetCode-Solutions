fun main(s: String, t: String): Boolean {
    var currentIndex: Int = 0
    for (charIndex in s.indices) {
        if (t.contains(s[charIndex]) && currentIndex < charIndex) {
            currentIndex = t.indexOf(s[charIndex])
        } else {
            return false
        }
    }
    return true
}

main("abc", "ahbgdc")