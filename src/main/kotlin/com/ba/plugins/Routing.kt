package com.ba.plugins

import com.ba.data.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.resources.Resources
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

fun Application.configureRouting() {
    install(Resources)
    routing {
        singlePageApplication {
            useResources = true
            filesPath = "frontend"
            defaultPage = "index.html"
            ignoreFiles { it.endsWith(".txt") }
        }
        post("/adduser") {
            val user = call.receive<User>()
            call.respond(UserResponse(userDAO.addUser(user), /*getRandomGE()*/ combinator.next()))
        }
        post("/addset") {
            val dataSet = call.receive<DataSet>()
            dataSetDAO.addDataSet(dataSet)
            val count = dataSetDAO.getNumberOfSets(dataSet.userId)
            call.respond(DataSetResponse(count, getRandomGE(dataSetDAO.getGEbyUserId(dataSet.userId))))
            //call.respond(if(count < 3 ) {count} else "finished")
        }
        get("/csv"){
            val csvData = buildString {
                append("gender,age,studyProgram,userId,gamifiedElements,pretestAnswers,posttestAnswers,questions,answerTime\n")
                for ((user, dataSet) in userDAO.getAllUsers().zip(dataSetDAO.getAllDataSets())) {
                    append("${user.gender},${user.age},${user.studyProgram},${dataSet.userId},${dataSet.gamifiedElements}," +
                            "${dataSet.pretestAnswers.joinToString(";")},${dataSet.posttestAnswers.joinToString(";")}," +
                            "${dataSet.questions.joinToString(";")},${dataSet.answerTime.joinToString(";")}\n")
                }
            }
            call.respondText(csvData, ContentType.Text.CSV)
        }
    }
}

fun getRandomGE(blockedSequences: List<String>): String {
    val options = mutableListOf("p", "b", "l", "a", "n", "pbla", "pblan", "")
    options.removeIf { blockedSequences.contains(it) }
    return options.random()
}

@Serializable
data class UserResponse(val userId: Int, val gamifiedElements: List<String>)

@Serializable
data class DataSetResponse(val round: Int, val gamifiedElements: String)