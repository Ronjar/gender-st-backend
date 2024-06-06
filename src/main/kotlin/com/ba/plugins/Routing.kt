package com.ba.plugins

import com.ba.data.*
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
            call.respond(UserResponse(userDAO.addUser(user), /*getRandomGE()*/ "pblan"))
        }
        post("/addset") {
            val dataSet = call.receive<DataSet>()
            dataSetDAO.addDataSet(dataSet)
            val count = dataSetDAO.getNumberOfSets(dataSet.userId)
            call.respond(DataSetResponse(count, getRandomGE(dataSetDAO.getGEbyUserId(dataSet.userId))))
            //call.respond(if(count < 3 ) {count} else "finished")
        }
    }
}

fun getRandomGE(blockedSequences: List<String>): String {
    val options = mutableListOf("p", "b", "l", "a", "n", "pbla", "pblan", "")
    options.removeIf { blockedSequences.contains(it) }
    return options.random()
}

@Serializable
data class UserResponse(val userId: Int, val gamifiedElements: String)

@Serializable
data class DataSetResponse(val round: Int, val gamifiedElements: String)