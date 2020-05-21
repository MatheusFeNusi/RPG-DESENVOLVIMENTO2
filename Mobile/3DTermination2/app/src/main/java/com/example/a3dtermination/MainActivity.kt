package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    fun trocarTelaCadastro(v: View){
        val telaCadastro = Intent(this,CadastroUser::class.java)
         startActivity(telaCadastro)
    }
    fun trocarTelaCadastroPerson(v: View){
        val telaCadastroPerson = Intent(this,CadastroPerson::class.java)
        startActivity(telaCadastroPerson)
    }
    fun trocarTelaEsqueciSenha(v: View){
        val telaEsquePassword = Intent(this,EsqueceuSenha::class.java)
        startActivity(telaEsquePassword)
    }

}
