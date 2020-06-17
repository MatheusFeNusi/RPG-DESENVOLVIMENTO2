package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_cadastro_mestre.*
import kotlinx.android.synthetic.main.activity_cadastro_person.*
import kotlinx.android.synthetic.main.activity_cadastro_person.swichBolear

class CadastroMestre : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_mestre)
        mostrarFragment()
    }
    fun telaPersonagem(v:View) {
        val switch_boolean = swichBolear.isChecked
        if(switch_boolean == true) {
            val telaCadastroPerson = Intent(this,CadastroPerson::class.java)
            startActivity(telaCadastroPerson)
        }
    }
    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
    fun criarMestre(v:View)  {
        val historia1 = historiaCriarMestre1?.text.toString()
        val historia2 = historiaCriarMestre2?.text.toString()
        val historia3 = historiaCriarMestre3?.text.toString()
        val nome = nomePersonagemMestre?.text.toString()

        val valida = null
        if(historia1.isEmpty() && historia2.isEmpty() && historia3.isEmpty() && nome.isEmpty()) {
            Toast.makeText(this, "Insira o nome e uma história!", Toast.LENGTH_SHORT).show()
        } else {
            if(nome.isNotEmpty() && (historia1.isNotEmpty() || historia2.isNotEmpty() || historia3.isNotEmpty() )){
                // conexão banco
                val telaMeusPerson = Intent(this,MeusPersonagens::class.java)
                startActivity(telaMeusPerson)
            } else {
                Toast.makeText(this, "Insira o nome e uma história!", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
