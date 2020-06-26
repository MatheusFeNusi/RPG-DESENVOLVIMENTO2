package com.example.a3dtermination.REST.Taks

import android.os.AsyncTask
import android.util.Log
import com.example.a3dtermination.REST.ClientApi
import com.example.a3dtermination.REST.Personagem
import feign.FeignException

class GetPersonTaks : AsyncTask<Void, Void, ArrayList<Personagem>>() {

    override fun doInBackground(vararg params: Void): ArrayList<Personagem>? {
        try {
            return ClientApi.criar().getPersonagem()
        } catch (e: FeignException) {
            Log.i("Get personagem error: ", e.toString())
            return null
        }
    }
}