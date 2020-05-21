package com.example.a3dtermination

import feign.Param
import feign.RequestLine

interface CepRequest {

    // a anotação @RequestLine faz um metodo ficar maepado a UM Endpoint
    @RequestLine("GET /ws/{cep}/json") //  Endpoint: metodo GET. URI /ws/{cep}/json
    fun getCep(@Param("cep") cep:String): Cep
    // Ja que o retorno da função é um Cep
    // Estou assumindo que o Endpoint me trará um JSON compativel com a classe Cep
    //JSON é o tipo PADRÃO do Feigh

}