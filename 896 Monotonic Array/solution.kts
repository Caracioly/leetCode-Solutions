import java.lang.Exception
import java.lang.reflect.Executable

fun main(nums: IntArray): Boolean {
    var isIncreasing: Boolean = false
    var isDecreasing: Boolean = false
    if (nums.isNotEmpty()) {
        for(i in 1 until nums.size){
            if(nums[i] > nums[i - 1]){
                if (isDecreasing){
                    return false
                }
                isIncreasing = true
            }else if(nums[i] < nums[i - 1]){
                if (isIncreasing){
                    return false
                }
                isDecreasing = true
            }
        }
    }
    return true
}
main(intArrayOf(1, 3, 2))

// 1, 3, 2
// 6, 5, 4, 4
// 1, 2, 2, 3
// 1, 1, 2