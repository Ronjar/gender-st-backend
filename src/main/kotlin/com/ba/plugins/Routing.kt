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
        get("/adduser") {
            val user = call.receive<User>()
            call.respond(UserResponse(userDAO.addUser(user), "pblan"))
        }
        post("/addset") {
            val dataSet = call.receive<DataSet>()
            dataSetDAO.addDataSet(dataSet)
            if(dataSetDAO.getNumberOfSets(dataSet.userId) < 3){
                call.respond("next")
            } else {
                call.respond("finished")
            }
            call.respond(dataSetDAO.addDataSet(dataSet))
        }
    }
}

@Serializable
data class UserResponse(val id: Int, val gamifiedElements: String)