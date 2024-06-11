package com.ba.data

class Combinator {
    private var items = generateItems()
    fun next(): MutableList<String> {
        val result = mutableListOf<String>()
        for (i in 0 until 3) {
            result.add(items.removeFirst())
        }
        if (items.isEmpty()) {
            items = generateItems()
        }
        return result
    }

    private fun generateItems(): MutableList<String> {
        val options = mutableListOf("p", "b", "l", "a", "n", "pbla", "pblan", "")
        val list: MutableList<String> = ArrayList()
        repeat(3) {
            list.addAll(options.shuffled())
        }
        return list
    }
}

val combinator: Combinator = Combinator()