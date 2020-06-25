package com.example.a3dtermination.REST

import feign.Feign
import feign.gson.GsonDecoder
import feign.gson.GsonEncoder

object ClientApi {
    fun criar(): ApiRequest {
        return Feign.builder()
            .decoder(GsonDecoder()) // como o Feign vai consumir os JSON
            .encoder(GsonEncoder()) // como o Feign vai criar os JSON
            .target(ApiRequest::class.java, "http://192.168.19.65:8080")
    }
}