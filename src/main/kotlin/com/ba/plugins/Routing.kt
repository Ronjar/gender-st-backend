package com.ba.plugins

import com.ba.data.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.*
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
            user.ipAdress = call.request.origin.remoteAddress
            call.respond(UserResponse(userDAO.addUser(user), combinator.next()))
        }
        post("/addset") {
            val dataSet = call.receive<DataSet>()
            dataSetDAO.addDataSet(dataSet)
            val count = dataSetDAO.getNumberOfSets(dataSet.userId)
            call.respond(DataSetResponse(count))
        }
        get("/csv"){
            val csvData = generateCsv(userDAO.getAllUsers(), dataSetDAO.getAllDataSets())
            call.respondText(csvData, ContentType.Text.CSV)
        }
    }
}

@Serializable
data class UserResponse(val userId: Int, val gamifiedElements: List<String>)

@Serializable
data class DataSetResponse(val round: Int)