package com.example.a3dtermination.REST.Taks

import android.os.AsyncTask
import android.util.Log
import com.example.a3dtermination.REST.ClientApi
import com.example.a3dtermination.REST.Credenciais
import com.example.a3dtermination.REST.Usuario
import feign.Body
import feign.FeignException

class PostUserTaks: AsyncTask<Usuario, Void, String>() {
    override fun doInBackground(vararg params: Usuario?): String? {
        try {
            return ClientApi.criar().postUsuario(params[0]!!)
        } catch (e: FeignException) {
            Log.i("postUsuario: ", e.toString())
            return null
        }
    }
}