package com.example.a3dtermination

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import com.example.a3dtermination.REST.Credenciais
import com.example.a3dtermination.REST.Taks.ApiTaks
import com.example.a3dtermination.REST.Taks.PutUserTaks
//import com.example.a3dtermination.REST.Taks.PutUserTaks
//import com.example.a3dtermination.REST.Taks.PutUserTaks
import com.example.a3dtermination.REST.Usuario
import kotlinx.android.synthetic.main.activity_esqueceu_senha.*
import kotlinx.android.synthetic.main.activity_main.*

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
        val telaLogin = Intent(this,MainActivity::class.java)
        if(novaSenha == confirmaSenha && novaSenha.isNotEmpty() && confirmaSenha.isNotEmpty() && email.isNotEmpty()) {


            val resultado = ApiTaks().execute().get()
            resultado.forEach { elemento ->
                val email_bd =   elemento.credencial.email
                val nome_bd = elemento.nome
                val id = elemento.id
                Log.i("id: ", id.toString())
                Log.i("email_bd: ", email_bd)
                Log.i("email: ", email)
                if (email == email_bd) {
                 val res =   PutUserTaks().execute(Usuario(id,nome_bd,Credenciais(email,novaSenha))).get()
                    Toast.makeText(this, res, Toast.LENGTH_SHORT).show()
                    startActivity(telaLogin)
                }
            }

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
