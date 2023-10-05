fun main(nums: IntArray): List<Int> {
    val numbersThatAppears: MutableList<Int> = mutableListOf()
    for(element in nums){
        val count = nums.count{it == element}
        if (count > nums.size / 3){
            if (element !in numbersThatAppears){
                numbersThatAppears.add(element)
            }
        }
    }
    return numbersThatAppears
}


main(intArrayOf(1, 2))