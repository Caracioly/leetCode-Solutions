import java.lang.Exception
import java.lang.reflect.Executable

val myList: Array<Int> = emptyArray()
fun main(nums: IntArray): Boolean {
    for (i in nums.indices)
        if(myList.isEmpty()) {
            myList.plus(nums[i] - nums[i + 1])

            if (nums[i] != myList[0]) {
                return false
            }
        }
    return true
}
main(intArrayOf(1,2,2,3))

// 1, 3, 2
// 6, 5, 4, 4