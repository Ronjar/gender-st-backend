package com.ba.data

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Table

@Serializable
data class DataSet(val userId: Int, val gamifiedElements: String, val stai: Array<Int>, val ngse: Array<Int>, val sims: Array<Int>, val questions: Array<Boolean>, val answerTime: Array<Int>)

object DataSets: Table(){
    val id = integer("id").autoIncrement()
    val gamifiedElements = varchar("gamified_elements", 5)
    val userId = integer("user_id").references(Users.id)
    val staiTest = varchar("stai_test", 255)
    val ngseTest = varchar("ngse_test", 255)
    val simsTest = varchar("sims_test", 255)
    val questions = varchar("questions", 255)
    val answerTime = text("answer_time")

    override val primaryKey = PrimaryKey(id)
}