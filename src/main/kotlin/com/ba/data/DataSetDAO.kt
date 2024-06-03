package com.ba.data

import com.ba.data.DatabaseFactory.dbQuery
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import javax.xml.crypto.Data

class DataSetDAO {
    /*   private fun resultRowToDataSet(row: ResultRow) = DataSet(
           id = row[DataSets.id],
           title = row[DataSets.title],
           content = row[DataSets.content]
       )
       suspend fun getAllDataSets(): List<DataSet> = dbQuery {
           DataSets.selectAll().map(::resultRowToDataSet)
       }

       suspend fun getDataSet(id: Long): DataSet? = dbQuery {
           DataSets
               .select { DataSets.id eq id }
               .map(::resultRowToDataSet)
               .singleOrNull()
       }*/

    suspend fun addDataSet(dataSet: DataSet): Boolean = dbQuery {
        val insertStatement = DataSets.insert {
            it[userId] = dataSet.userId
            it[gamifiedElements] = dataSet.gamifiedElements
            it[preTest] = dataSet.preTest.joinToString("|")
            it[postTest] = dataSet.postTest.joinToString("|")
            it[questions] = dataSet.questions.map { bool -> if (bool) 1 else 0  }.joinToString("|")
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
        val statement = DataSets..select(DataSets.gamifiedElements) {
            DataSets.userId eq userId
        }
    }
    /*
        suspend fun editDataSet(id:Long, DataSet: DataSetManipulationItem): Boolean = dbQuery {
            DataSets.update({ DataSets.id eq id }) {
                it[title] = DataSet.title
                it[content] = DataSet.content
            } > 0
        }
    
        suspend fun deleteDataSet(id: Long): Boolean = dbQuery {
            DataSets.deleteWhere { DataSets.id eq id } > 0
        }*/
}

val dataSetDAO: DataSetDAO = DataSetDAO()