package com.example.a3dtermination.REST.Taks

import android.os.AsyncTask
import android.util.Log
import com.example.a3dtermination.REST.ClientApi
import com.example.a3dtermination.REST.Usuario
import feign.FeignException

class ApiTaks : AsyncTask<Void, Void, ArrayList<Usuario>>() {

    override fun doInBackground(vararg params: Void): ArrayList<Usuario>? {
        try {
            return ClientApi.criar().getUsuario()
        } catch (e: FeignException) {
            Log.i("Teste", e.toString())
            return null
        }
    }

}