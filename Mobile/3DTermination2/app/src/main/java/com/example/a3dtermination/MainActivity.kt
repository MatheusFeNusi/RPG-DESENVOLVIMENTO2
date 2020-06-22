package com.example.a3dtermination

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.startActivity

class MainActivity : AppCompatActivity() {

    var preferencias: SharedPreferences? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mostrarFragment()
        val preferencias = getPreferences(Context.MODE_PRIVATE)
        email.setText(preferencias.getString("emailOffline",""))
        senha.setText(preferencias.getString("senhaOffline",""))
    }
    fun validacaoLongin(V:View) {
        val loginMocado = "admin"
        val senhaMocado = "admin"
        val emailLogin = email.text.toString()
        val senhaLogin = senha.text.toString()
        val editor = preferencias?.edit()
        val editor2 = preferencias?.edit()
        val telaCadastroPerson = Intent(this, CadastroPerson::class.java)
        if(emailLogin.isEmpty() && senhaLogin.isEmpty()){
            Toast.makeText(this, "Todos campos estão vazios", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this, "Sucesso", Toast.LENGTH_SHORT).show()
            if (loginMocado == emailLogin && senhaMocado == senhaLogin) {
                editor?.putString("emailOffline", emailLogin)
                editor2?.putString("senha", senhaLogin)
                editor?.apply()
                editor2?.apply()
                startActivity(telaCadastroPerson)
            } else {
                Toast.makeText(this, "Email ou senha incorretos", Toast.LENGTH_SHORT).show()
            }
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
