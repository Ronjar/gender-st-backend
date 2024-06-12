package com.ba.data

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Table

@Serializable
data class User(val gender: String, val age: Int, val studyProgram: String, val deletionCode: String)


object Users: Table(){
    val id = integer("id").autoIncrement()
    val gender = varchar("gender", 255)
    val age = integer("age")
    val studyProgram = varchar("studyProgram", 255)
    val deletionCode = varchar("deletionCode", 10)

    override val primaryKey = PrimaryKey(id)
}