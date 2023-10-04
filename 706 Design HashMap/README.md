Design a HashMap without using any built-in hash table libraries.

Implement the `MyHashMap` class:

-   `MyHashMap()` initializes the object with an empty map.
-   `void put(int key, int value)` inserts a `(key, value)` pair into the HashMap. If the `key` already exists in the map, update the corresponding `value`.
-   `int get(int key)` returns the `value` to which the specified `key` is mapped, or `-1` if this map contains no mapping for the `key`.
-   `void remove(key)` removes the `key` and its corresponding `value` if the map contains the mapping for the `key`.

**Example 1:**

**Input**
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
**Output**
[null, null, null, 1, -1, null, 1, null, -1]

**Explanation**
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

**Constraints:**

-   `0 <= key, value <= 106`
-   At most `104` calls will be made to `put`, `get`, and `remove`.
# Disclaimer 
I barely touch the code because i could not figure it out things like The iterator, the array with an array inside, 
the data class(idk what it is), but i did some parts by myself and i'm very proud of it, and the best of all is that I can complete
understand the code ! 

*"90% Chat Gpt this one"*

# Code
```Kotlin
class MyHashMap() {
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
}

```