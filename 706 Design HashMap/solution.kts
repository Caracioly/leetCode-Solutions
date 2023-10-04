class MyHashMap {
    private data class KeyValuePair(val key: Int, var value: Int)

    private val size = 10000
    private val data = Array<MutableList<KeyValuePair>>(size) { mutableListOf() }

    fun put(key: Int, value: Int) {
        val index = hash(key)
        for (pair in data[index]) {
            if (pair.key == key) {
                pair.value = value
                return
            }
        }
        data[index].add(KeyValuePair(key, value))
    }

    fun get(key: Int): Int {
        val index = hash(key)
        for (pair in data[index]) {
            if (pair.key == key) {
                return pair.value
            }
        }
        return -1
    }

    fun remove(key: Int) {
        val index = hash(key)
        val iterator = data[index].iterator()
        while (iterator.hasNext()) {
            val pair = iterator.next()
            if (pair.key == key) {
                iterator.remove()
                return
            }
        }
    }

    private fun hash(key: Int): Int {
        return key % size
    }

    fun main() {

    }
}

