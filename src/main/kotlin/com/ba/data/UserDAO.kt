package com.ba.data

import com.ba.data.DatabaseFactory.dbQuery
import org.jetbrains.exposed.sql.insert

class UserDAO {
    /*   private fun resultRowToUser(row: ResultRow) = User(
           id = row[Users.id],
           title = row[Users.title],
           content = row[Users.content]
       )
       suspend fun getAllUsers(): List<User> = dbQuery {
           Users.selectAll().map(::resultRowToUser)
       }

       suspend fun getUser(id: Long): User? = dbQuery {
           Users
               .select { Users.id eq id }
               .map(::resultRowToUser)
               .singleOrNull()
       }*/

    suspend fun addUser(user: User): Int = dbQuery {
        val insertStatement = Users.insert {
            it[age] = user.age
            it[gender] = user.gender
            it[studyProgram] = user.studyProgram
        }
        insertStatement get Users.id
    }
/*
    suspend fun editUser(id:Long, User: UserManipulationItem): Boolean = dbQuery {
        Users.update({ Users.id eq id }) {
            it[title] = User.title
            it[content] = User.content
        } > 0
    }

    suspend fun deleteUser(id: Long): Boolean = dbQuery {
        Users.deleteWhere { Users.id eq id } > 0
    }*/
}

val userDAO: UserDAO = UserDAO()