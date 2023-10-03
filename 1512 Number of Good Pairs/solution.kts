fun main(nums: IntArray): Int {
    val countMap = HashMap<Int, Int>()
    var goodPairs = 0

    for (num in nums){
        countMap[num] = countMap.getOrDefault(num, 0) + 1
    }

    for (count in countMap.values){
        goodPairs += count * (count - 1) / 2
    }

    return goodPairs
}

//The good one, but idk how to make it properly

fun oldGoodPairs(nums: IntArray): Int {
    var goodPairs: Int = 0
    var j: Int = 0
    var i: Int = 1
    while (j < nums.size) {
        i = j + 1
        while (i < nums.size) {
            if (nums[i] == nums[j]) {
                goodPairs++
            }
            i++
        }
        j++
    }
    return goodPairs
}

main(intArrayOf(1,2,3))

// 1, 2, 3, 1, 1, 3
// 1,1,1,1
// 1,2,3