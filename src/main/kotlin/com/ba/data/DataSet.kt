package com.ba.data

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Table

@Serializable
data class DataSet(val userId: Int, val gamifiedElements: String, val pretestAnswers: Array<Int>, val posttestAnswers: Array<Int>, val questions: Array<Boolean>, val answerTime: Array<Int>)

object DataSets: Table(){
    val id = integer("id").autoIncrement()
    val gamifiedElements = varchar("gamified_elements", 5)
    val userId = integer("user_id").references(Users.id)
    val pretestAnswers = varchar("pretest_answers", 255)
    val posttestAnswers = varchar("posttest_answers", 255)
    val questions = varchar("questions", 255)
    val answerTime = text("answer_time")

    override val primaryKey = PrimaryKey(id)
}