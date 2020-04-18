package com.example.a3dtermination

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class EsqueceuSenha : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_esqueceu_senha)
    }
    fun trocarTelaLogin2(v: View){
        val telaLogin = Intent(this,MainActivity::class.java)
        startActivity(telaLogin)
    }
}
