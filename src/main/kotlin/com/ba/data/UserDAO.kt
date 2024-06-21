package com.ba.data

import com.ba.data.DatabaseFactory.dbQuery
import com.ba.data.Users.age
import com.ba.data.Users.deletionCode
import com.ba.data.Users.gender
import com.ba.data.Users.id
import com.ba.data.Users.ipAddress
import com.ba.data.Users.studyProgram
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

class UserDAO {
    private fun resultRowToUser(row: ResultRow) = User(
        gender = row[gender],
        age = row[age],
        studyProgram = row[studyProgram],
        deletionCode = row[deletionCode],
        ipAddress = row[ipAddress]
    )
    private fun resultRowToUserWithId(row: ResultRow) = UserWithId(
        id = row[id],
        gender = row[gender],
        age = row[age],
        studyProgram = row[studyProgram],
        deletionCode = row[deletionCode],
        ipAddress = row[ipAddress]
    )

    suspend fun getAllUsers(): List<User> = dbQuery {
        Users.selectAll().map(::resultRowToUser)
    }
    suspend fun getAllUsersWithId(): List<UserWithId> = dbQuery {
        Users.selectAll().map(::resultRowToUserWithId)
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

    suspend fun deleteByCode(deletionCode: String): Boolean = dbQuery {
        Users.deleteWhere { Users.deletionCode eq deletionCode } > 0
    }

    suspend fun deleteEverything(): Boolean = dbQuery {
        Users.deleteAll() > 0
    }
}

val userDAO: UserDAO = UserDAO()