package com.ba.data

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Table

@Serializable
data class DataSet(val userId: Int, val gamifiedElements: String, val pretestAnswers: Array<Int>, val posttestAnswers: Array<Int>, val questions: Array<Boolean>)

object DataSets: Table(){
    val id = integer("id").autoIncrement()
    val gamifiedElements = varchar("gamified_elements", 5)
    val userId = integer("user_id").references(Users.id)
    val preTest = varchar("preTest", 255)
    val postTest = varchar("postTest", 255)
    val questions = varchar("questions", 255)

    override val primaryKey = PrimaryKey(id)
}