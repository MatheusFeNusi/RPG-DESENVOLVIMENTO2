package com.example.a3dtermination

import feign.Feign
import feign.gson.GsonDecoder
import feign.gson.GsonEncoder

object ClienteViaCep {

    // nesta função: modificamos o necessário para o feign criar, em tempo de execução
    // uma implementação do CepRequest. A URL bas da API é iniciada aqui (https://viacep.com.br/)
    fun criar():CepRequest {
        return Feign.builder()
            .decoder(GsonDecoder())  //como o Feign vai consome os JSON
            .encoder(GsonEncoder()) //como o Feign vai cria os JSON
            .target(CepRequest::class.java, "https://viacep.com.br/")
    }

}