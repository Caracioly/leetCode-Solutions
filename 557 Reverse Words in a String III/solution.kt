class Solution {
    var subString: String= ""
    var subStringFinal: String = ""
    fun reverseWords(s: String): String {
        for(word in s){
            if (word == ' '){
                subString = subString.reversed()
                subString += word
                subStringFinal += subString
                subString = ""
            }else {
                subString += word
            }
        }
        subString = subString.reversed()
        subStringFinal += subString
        return subStringFinal
    }
}