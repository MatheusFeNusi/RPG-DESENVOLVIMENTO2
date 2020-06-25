package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import com.example.a3dtermination.REST.Credenciais
import com.example.a3dtermination.REST.Personagem
import com.example.a3dtermination.REST.Taks.PostPersonTaks
import com.example.a3dtermination.REST.Usuario
import kotlinx.android.synthetic.main.activity_cadastro_mestre.*
import kotlinx.android.synthetic.main.activity_cadastro_person.*
import kotlinx.android.synthetic.main.activity_cadastro_person.swichBolear

class CadastroMestre : AppCompatActivity() {

    var usuario_id = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_mestre)
        mostrarFragment()
        val usuario = intent.extras?.getInt("usuario_id")
        usuario_id = usuario.toString().toInt()

        //Toast.makeText(this, "$usuario_id", Toast.LENGTH_LONG).show()
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

        if(historia1.isEmpty() && historia2.isEmpty() && historia3.isEmpty() && nome.isEmpty()) {
            Toast.makeText(this, "Insira o nome e uma história!", Toast.LENGTH_SHORT).show()
        } else {
            if(nome.isNotEmpty() && (historia1.isNotEmpty() || historia2.isNotEmpty() || historia3.isNotEmpty() )){
                val telaMeusPerson = Intent(this,MeusPersonagens::class.java)
                if (historia1.isNotEmpty()){
                    PostPersonTaks().execute(
                        Personagem(20,nome,0,0,0,0,0,
                            0,0,0,0,historia1,".",".",".",".",
                            ".",
                            Usuario(usuario_id,nome, Credenciais(".","."))
                            )
                        ).get()
                    }
                if (historia2.isNotEmpty()){
                    PostPersonTaks().execute(
                        Personagem(20,nome,0,0,0,0,0,
                            0,0,0,0,historia2,".",".",".",".",
                            ".",
                            Usuario(usuario_id,nome, Credenciais(".","."))
                        )
                    ).get()
                }
                if (historia3.isNotEmpty()){
                    PostPersonTaks().execute(
                        Personagem(20,nome,0,0,0,0,0,
                            0,0,0,0,historia3,".",".",".",".",
                            ".",
                            Usuario(usuario_id,nome, Credenciais(".","."))
                        )
                    ).get()
                }
                Toast.makeText(this, "Sucesso!", Toast.LENGTH_SHORT).show()
                telaMeusPerson.putExtra("usuario_id", usuario_id)
                startActivity(telaMeusPerson)
            } else {
                Toast.makeText(this, "Insira o nome e uma história!", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
