package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.startActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mostrarFragment()
    }
    fun validacaoLongin(V:View) {
        val loginMocado = "admin"
        val senhaMocado = "admin"
        val email = email.text.toString()
        val senha = senha.text.toString()
        if(loginMocado == email && senhaMocado == senha){
            val telaCadastroPerson = Intent(this,CadastroPerson::class.java)
            startActivity(telaCadastroPerson)
        } else {
            Toast.makeText(this, "Email ou senha incorretos", Toast.LENGTH_SHORT).show()
        }
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
    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
//    fun trocarInteracao(v: View) {
//        val telaInteracao = Intent(this,EntranceActivity::class.java)
//        startActivity(telaInteracao)
//        val teste = "Luis"
//        startActivity<EntranceActivity>(
//            "id" to teste
//        )
//    }
}
