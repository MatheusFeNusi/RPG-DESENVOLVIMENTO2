package com.example.a3dtermination.REST

import feign.Headers
import feign.Param
import feign.RequestLine

interface ApiRequest {

    @RequestLine("GET /usuarios")
    @Headers("Content-Type: application/json")
    fun getUsuario(): ArrayList<Usuario>

    @RequestLine("GET /mestre/{id}")
    @Headers("Content-Type: application/json")
    fun getMestre(@Param("id") usuario_id: Int): Mestre

    @RequestLine("GET /ficha")
    @Headers("Content-Type: application/json")
    fun getPersonagem(): ArrayList<Personagem>


    @RequestLine("POST /usuarios")
    @Headers("Content-Type: application/json")
    fun postUsuario(user: Usuario): String

    @RequestLine("POST /mestre/{id}")
    @Headers("Content-Type: application/json")
    fun postMestre(@Param("id") usuario_id: Int): Mestre

    @RequestLine("POST /ficha")
    @Headers("Content-Type: application/json")
    fun postPersonagem(person: Personagem): String

    @RequestLine("PUT /usuarios/1")
    @Headers("Content-Type: application/json")
    fun putUsuario(@Param("id") user: Usuario): String
}