package com.ba.data

class Combinator {
    private var items = generateItems()
    fun next(): List<String> {
        val result = items.first()
        if (items.isEmpty()) {
            items = generateItems()
        }
        return result
    }

    private fun generateItems(): MutableList<List<String>> {
        val items = mutableListOf("p", "b", "l", "a", "n", "pbla", "pblan", "")
        val itemsList = mutableListOf<String>()
        val returnList = mutableListOf<List<String>>()
        var flag: Boolean
        do {
            flag = false
            repeat(3) {
                itemsList.addAll(items)
                itemsList.shuffle()
            }
            while (itemsList.isNotEmpty()) {
                val newItems = itemsList.take(3)
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