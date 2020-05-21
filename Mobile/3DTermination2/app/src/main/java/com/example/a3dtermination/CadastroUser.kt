package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class CadastroUser : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_user)
    }
    fun trocarTelaLogin(v: View){
        val telaLogin = Intent(this,MainActivity::class.java)
        startActivity(telaLogin)
    }

    fun pesquisarEndereco(v:View){
        //val cepPesquisa = etCep.text.toString()

        // criei uma GetCepTask e fiz a chamada assicrona que usa o Feigh p/ consumir o Endpoint
       // val resultado = GetCepTask().execute(cepPesquisa).get()
        //val msg = "Logradouro: ${resultado.logradouro} - ${resultado.bairro} - ${resultado.localidade}"
        //tvEndereco.text = msg
    }

}
