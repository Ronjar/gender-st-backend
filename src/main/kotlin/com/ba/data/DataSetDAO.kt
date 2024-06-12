package com.ba.data

import com.ba.data.DatabaseFactory.dbQuery
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import javax.xml.crypto.Data

class DataSetDAO {
    private fun resultRowToDataSet(row: ResultRow) = DataSet(
        userId = row[DataSets.userId],
        gamifiedElements = row[DataSets.gamifiedElements],
        stai = row[DataSets.staiTest].split("|").map { it.trim().toInt() }.toTypedArray(),
        ngse = row[DataSets.ngseTest].split("|").map { it.trim().toInt() }.toTypedArray(),
        sims = row[DataSets.simsTest].split("|").map { it.trim().toInt() }.toTypedArray(),
        questions = row[DataSets.questions].split("|").map { it.trim().toInt() == 0 }.toTypedArray(),
        answerTime = row[DataSets.answerTime].split("|").map { it.trim().toInt() }.toTypedArray(),
    )

    suspend fun getAllDataSets(): List<DataSet> = dbQuery {
        DataSets.selectAll().map(::resultRowToDataSet)
    }

    suspend fun addDataSet(dataSet: DataSet): Boolean = dbQuery {
        val insertStatement = DataSets.insert {
            it[userId] = dataSet.userId
            it[gamifiedElements] = dataSet.gamifiedElements
            it[staiTest] = dataSet.stai.joinToString("|")
            it[ngseTest] = dataSet.ngse.joinToString("|")
            it[simsTest] = dataSet.sims.joinToString("|")
            it[questions] = dataSet.questions.map { bool -> if (bool) 1 else 0 }.joinToString("|")
            it[answerTime] = dataSet.answerTime.joinToString("|")
        }
        insertStatement.insertedCount > 0
    }

    suspend fun getNumberOfSets(userId: Int): Int = dbQuery {
        val statement = DataSets.select {
            DataSets.userId eq userId
        }
        statement.count().toInt()
    }
}

val dataSetDAO: DataSetDAO = DataSetDAO()