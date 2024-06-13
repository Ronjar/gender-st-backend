package com.ba.data

class Combinator {
    private var items = generateItems()
    fun next(): List<String> {
        val result = items.removeFirst()
        if (items.isEmpty()) {
            items = generateItems()
        }
        return result
    }

    private fun generateItems(): MutableList<List<String>> {
        val items = mutableListOf("p", "b", "l", "a", "n", "pbla", "pblan", "")
        var itemsList = mutableListOf<String>()
        val returnList = mutableListOf<List<String>>()
        var flag: Boolean
        do {
            flag = false
            itemsList.clear()
            returnList.clear()
            repeat(3) {
                itemsList.addAll(items)
                itemsList.shuffle()
            }
            while (itemsList.isNotEmpty()) {
                val newItems = itemsList.take(3)
                itemsList = itemsList.drop(3).toMutableList()
                if (newItems.distinct().size ==3){
                    returnList.add(newItems)
                } else {
                    flag = true
                    break
                }

            }
        } while (flag)
        return returnList
    }
}

val combinator: Combinator = Combinator()