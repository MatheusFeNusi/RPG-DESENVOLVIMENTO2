package com.example.a3dtermination

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_esqueceu_senha.*

class EsqueceuSenha : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_esqueceu_senha)
        mostrarFragment()
    }
    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
    fun checkNull(v: View){
        val novaSenha = esqueciSenha.text.toString()
        val confirmaSenha = esqueciRepeteSenha.text.toString()
        val email = esqueciEmail.text.toString()
        if(novaSenha.isEmpty() && confirmaSenha.isEmpty() && email.isEmpty()) {
            Toast.makeText(this, "Todos campos estão vazios", Toast.LENGTH_SHORT).show()
        } else {
            validacaoSenhaLogin()
        }
    }
    fun validacaoSenhaLogin(){
        val novaSenha = esqueciSenha.text.toString()
        val confirmaSenha = esqueciRepeteSenha.text.toString()
        val email = esqueciEmail.text.toString()
        if(novaSenha == confirmaSenha && novaSenha.isNotEmpty() && confirmaSenha.isNotEmpty() && email.isNotEmpty()) {
                Toast.makeText(this, "Sucesso!", Toast.LENGTH_SHORT).show()
              val telaLogin = Intent(this,MainActivity::class.java)
                  startActivity(telaLogin)

        } else {
            Toast.makeText(this, "Senha ou email incorretos", Toast.LENGTH_SHORT).show()
            esqueciSenha.text = null
            esqueciRepeteSenha.text = null
        }
    }
    fun trocarTelaLogin2(v: View){
        val telaLogin = Intent(this,MainActivity::class.java)
        startActivity(telaLogin)
    }
}
