package com.ba.data

fun generateCsv(users: List<UserWithId>, dataSets: List<DataSet>): String {
    val stringBuilder = StringBuilder()
    val header = generateHeader()
    stringBuilder.append(header.joinToString(";")).append("\n")

    users.forEach { user ->
        val userRows = dataSets.filter { it.userId == user.id }
        val row = mutableListOf(
            user.id.toString(),
            user.gender,
            user.age.toString(),
            user.studyProgram
        )

        userRows.forEachIndexed { index, dataSet ->
            row.add(dataSet.gamifiedElements)
            row.addAll(dataSet.questions.map { if (it) "true" else "false" })
            row.addAll(dataSet.answerTime.map { it.toString() })
            row.addAll(dataSet.stai.map { it.toString() })
            row.addAll(dataSet.ngse.map { it.toString() })
            row.addAll(dataSet.sims.map { it.toString() })
        }

        stringBuilder.append(row.joinToString(";")).append("\n")
    }

    return stringBuilder.toString()
}

fun generateHeader(): Array<String> {
    val header = mutableListOf("id", "gender", "age", "studyProgram")
    for (i in 1..3) {
        header.add("r${i}_gamifiedElement")
        for (j in 1..20) header.add("r${i}_q_$j")
        for (j in 1..20) header.add("r${i}_time_$j")
        for (j in 1..6) header.add("r${i}_stai_$j")
        for (j in 1..8) header.add("r${i}_ngse_$j")
        for (j in 1..16) header.add("r${i}_sims_$j")
    }
    return header.toTypedArray()
}