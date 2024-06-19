package com.ba.data

import com.ba.data.DatabaseFactory.dbQuery
import com.ba.data.Users.age
import com.ba.data.Users.deletionCode
import com.ba.data.Users.gender
import com.ba.data.Users.ipAddress
import com.ba.data.Users.studyProgram
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll

class UserDAO {
    private fun resultRowToUser(row: ResultRow) = User(
        gender = row[gender],
        age = row[age],
        studyProgram = row[studyProgram],
        deletionCode = row[deletionCode],
        ipAddress = row[ipAddress]
    )

    suspend fun getAllUsers(): List<User> = dbQuery {
        Users.selectAll().map(::resultRowToUser)
    }

    suspend fun addUser(user: User): Int = dbQuery {
        val insertStatement = Users.insert {
            it[age] = user.age
            it[gender] = user.gender
            it[studyProgram] = user.studyProgram
            it[deletionCode] = user.deletionCode
            it[ipAddress] = user.ipAddress
        }
        insertStatement get Users.id
    }
}

val userDAO: UserDAO = UserDAO()