package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_cadastro_user.*

class CadastroUser : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_user)
        mostrarFragment()
    }
    fun trocarTelaLogin(v: View){
        val telaLogin = Intent(this,MainActivity::class.java)
        startActivity(telaLogin)
    }

    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
    fun pesquisarEndereco(v:View){
        //val cepPesquisa = etCep.text.toString()

        // criei uma GetCepTask e fiz a chamada assicrona que usa o Feigh p/ consumir o Endpoint
       // val resultado = GetCepTask().execute(cepPesquisa).get()
        //val msg = "Logradouro: ${resultado.logradouro} - ${resultado.bairro} - ${resultado.localidade}"
        //tvEndereco.text = msg
    }
    fun cadastrarUser(v:View) {
        val email = emailCadastro?.text.toString()
        val senha = SenhaCadastro?.text.toString()
        val nome = nomeCadastro?.text.toString()
        val confirmarSenha = SenhaConfirmaCadastro?.text.toString()

        if(senha == confirmarSenha){
            Toast.makeText(this, "Sucesso", Toast.LENGTH_SHORT).show()
            val telaLogin = Intent(this,MainActivity::class.java)
            startActivity(telaLogin)
        } else {
            Toast.makeText(this, "Senhas incorretas", Toast.LENGTH_SHORT).show()
        }
    }
}
