package com.example.a3dtermination.REST.Taks

import android.os.AsyncTask
import android.util.Log
import com.example.a3dtermination.REST.ClientApi
import com.example.a3dtermination.REST.Usuario
import feign.FeignException

class PutUserTaks : AsyncTask<Usuario, Void, String>() {
    override fun doInBackground(vararg params: Usuario?): String? {
        try {
            //Log.i("Put user: ", params[0]!!.toString())
            return ClientApi.criar().putUsuario(params[0]!!)
        } catch (e: FeignException) {
            //Log.i("Put user err: ", e.toString())
            return e.toString()
        }

    }


}