package com.example.a3dtermination

import android.os.AsyncTask

class GetCepTask : AsyncTask<String, Void, Cep>() {

    override fun doInBackground(vararg params: String?): Cep {
        return ClienteViaCep.criar().getCep(params[0]!!)
    }
}