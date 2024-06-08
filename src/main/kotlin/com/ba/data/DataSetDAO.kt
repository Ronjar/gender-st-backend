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
        pretestAnswers = row[DataSets.pretestAnswers].split("|").map { it.trim().toInt() }.toTypedArray(),
        posttestAnswers = row[DataSets.posttestAnswers].split("|").map { it.trim().toInt() }.toTypedArray(),
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
            it[pretestAnswers] = dataSet.pretestAnswers.joinToString("|")
            it[posttestAnswers] = dataSet.posttestAnswers.joinToString("|")
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

    suspend fun getGEbyUserId(userId: Int): List<String> = dbQuery {
        DataSets
            .slice(DataSets.gamifiedElements)
            .select { DataSets.userId eq userId }
            .map { it[DataSets.gamifiedElements] }
    }
}

val dataSetDAO: DataSetDAO = DataSetDAO()