//    fun main(nums: IntArray, target: Int): IntArray {
//        val result = IntArray(2)
//
//        result[0] = nums.indexOfFirst { it == target }
//        result[1] = nums.indexOfLast { it == target }
//        println(result.joinToString(", "))
//        return result
//    }

fun searchRange(nums: IntArray, target: Int): IntArray {
    val firstIndex = findFirstIndex(nums, target)
    if (firstIndex == -1) {
        return intArrayOf(-1, -1)
    }

    val lastIndex = findLastIndex(nums, target)
    return intArrayOf(firstIndex, lastIndex)
}

fun findFirstIndex(nums: IntArray, target: Int): Int {
    var left = 0
    var right = nums.size - 1
    var result = -1

    while (left <= right) {
        val mid = left + (right - left) / 2

        if (nums[mid] >= target) {
            right = mid - 1
            if (nums[mid] == target) {
                result = mid
            }
        } else {
            left = mid + 1
        }
    }

    return result
}

fun findLastIndex(nums: IntArray, target: Int): Int {
    var left = 0
    var right = nums.size - 1
    var result = -1

    while (left <= right) {
        val mid = left + (right - left) / 2

        if (nums[mid] <= target) {
            left = mid + 1
            if (nums[mid] == target) {
                result = mid
            }
        } else {
            right = mid - 1
        }
    }

    return result
}

fun main() {
    val indicesEncontrados = searchRange(intArrayOf(5, 7, 7, 8, 8, 10), 8)
    println("Índices encontrados: ${indicesEncontrados.joinToString(", ")}")
}

main()
