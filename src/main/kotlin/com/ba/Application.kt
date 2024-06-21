package com.ba

import com.ba.data.DatabaseFactory
import com.ba.plugins.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch

lateinit var serverScope: CoroutineScope

suspend fun main() {
    serverScope = CoroutineScope(Dispatchers.IO)
    serverScope.launch {
        embeddedServer(Netty, port = 80, host = "0.0.0.0", module = Application::module)
            .start(wait = true)
    }.join()
}

fun Application.module() {
    configureSerialization()
    DatabaseFactory.init()
    configureRouting()
    install(CORS) {
        anyHost()
        allowHeaders { true }
        HttpMethod.DefaultMethods.forEach { allowMethod(it) }
        allowNonSimpleContentTypes = true
    }
}
