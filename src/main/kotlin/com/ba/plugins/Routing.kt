package com.ba.plugins

import com.ba.data.*
import com.ba.serverScope
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.resources.Resources
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.cancel
import kotlinx.serialization.Serializable
import java.io.File
import java.text.SimpleDateFormat
import java.util.*

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
            user.ipAddress = call.request.origin.remoteAddress
            call.respond(UserResponse(userDAO.addUser(user), combinator.next()/* listOf("b", "pblan", "p")*/))
        }
        post("/addset") {
            val dataSet = call.receive<DataSet>()
            dataSetDAO.addDataSet(dataSet)
            val count = dataSetDAO.getNumberOfSets(dataSet.userId)
            call.respond(DataSetResponse(count))
        }
        delete("/removeuser/{code}") {
            val code = call.parameters["code"] ?: return@delete call.respond(HttpStatusCode.BadRequest)
            if (userDAO.deleteByCode(code)){
                call.respond(HttpStatusCode.OK)
            } else{
                call.respond(HttpStatusCode.NotFound)
            }
        }
        delete("/everything"){
            if (File("/data/db.mv.db").delete()){
                call.respond("Database deleted successfully. Please restart container")
            } else {
                call.respond(HttpStatusCode.InternalServerError)
            }
            serverScope.cancel()
        }
        get("/stats") {
            call.respond(StatResponse(userDAO.getAllUsers().size, dataSetDAO.getDataSetCounts()))
        }
        get("/csv") {
            val csvData = generateCsv(userDAO.getAllUsersWithId(), dataSetDAO.getAllDataSets())
            call.respondText(csvData, ContentType.Text.CSV)
        }
        get("/backup") {
            val dbFile = File("/data/db.mv.db")
            if (dbFile.exists()) {
                val timeStamp = SimpleDateFormat("yyyyMMdd_HHmmss").format(Date())
                val backupFileName = "backup_${timeStamp}_db.mv.db"
                val backupFile = File("/data/$backupFileName")
                dbFile.copyTo(backupFile, overwrite = true)
                call.respondText("Backup created successfully: $backupFileName", status = HttpStatusCode.OK)
            } else {
                call.respondText("Database file not found.", status = HttpStatusCode.NotFound)
            }
        }

        get("/downloaddb") {
            val dbFile = File("/data/db.mv.db")
            if (dbFile.exists()) {
                call.response.header(HttpHeaders.ContentDisposition, "attachment; filename=\"db.mv.db\"")
                call.respondFile(dbFile)
            } else {
                call.respondText("Database file not found.", status = HttpStatusCode.NotFound)
            }
        }
    }
}

@Serializable
data class UserResponse(val userId: Int, val gamifiedElements: List<String>)

@Serializable
data class DataSetResponse(val round: Int)

@Serializable
data class StatResponse(val users: Int, val dataSets: DataSetCounts)