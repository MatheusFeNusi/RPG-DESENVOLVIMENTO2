package com.example.a3dtermination.REST.Taks

import android.os.AsyncTask
import android.util.Log
import com.example.a3dtermination.REST.ClientApi
import com.example.a3dtermination.REST.Personagem
import feign.FeignException

class PostPersonTaks : AsyncTask<Personagem, Void, String>() {
    override fun doInBackground(vararg params: Personagem?): String? {
        try {
            return ClientApi.criar().postPersonagem(params[0]!!)
        } catch (e: FeignException) {
            return  e.toString()
        }
    }
}