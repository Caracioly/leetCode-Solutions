fun main(n: Int): Int {
    if (n == 2) {
        return n - 1
    }
    val k: MutableList<Int> = mutableListOf()
    var index: Int = 3
    while (k.sum() + index <= n) {
        if (n - k.sum() >= index) {
            k.add(index)
        } else {
            index++
            k.add(index)
        }
    }
    return k.fold(1) { accumulator, element -> accumulator * element }
}

main(10)


//if i can use a number(k) greater than 2
//it's better to me use many numbers I can
//because the more numbers I get, greater will be
//the product