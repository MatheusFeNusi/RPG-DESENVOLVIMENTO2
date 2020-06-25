package com.example.a3dtermination

import android.app.Activity
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.example.a3dtermination.REST.Credenciais
import com.example.a3dtermination.REST.Personagem
import com.example.a3dtermination.REST.Taks.ApiTaks
import com.example.a3dtermination.REST.Taks.PostPersonTaks
import com.example.a3dtermination.REST.Taks.PostUserTaks
import com.example.a3dtermination.REST.Usuario
import kotlinx.android.synthetic.main.activity_cadastro_person.*
import kotlinx.android.synthetic.main.fragment_mestre.*


class CadastroPerson : AppCompatActivity() {

    private var usuario_id: Int? = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_person)
        mostrarFragment()
        val usuario = intent.extras?.getInt("usuario_id")
        usuario_id = usuario

        //Toast.makeText(this, "$usuario_id", Toast.LENGTH_LONG).show()

    }

    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }

    fun checkNull(v: View) {
        val pontos_total = pontosPersonagem?.text.toString()
        val forca = forcaPersonagem?.text.toString()
        val habilidade = habilidadePersonagem?.text.toString()
        val resistencia = resistenciaPersonagem?.text.toString()
        val armadura = armaduraPersonagem?.text.toString()
        val poderFogo = poderFogoPersonagem?.text.toString()
        val pontoVida = pontosVidaPersonagem?.text.toString()
        val pontoMagia = pontosMagiaPersonagem?.text.toString()
        val pontoExp = pontosExperienciaPersonagem?.text.toString()

        val nomePersonagem = nomePersonagem?.text.toString()
        val vantagens = vantagensPersonagem?.text.toString()
        val desvantagnes = desvantagemPersonagem?.text.toString()
        val tipoDano = tipoDanoPersonagem?.text.toString()
        val magiaConhecida = magiaConhecida?.text.toString()
        val dinheiroItens = dinheiroItensPersonagem?.text.toString()
        val historia = historiaPerson?.text.toString()

        if (pontos_total.isEmpty() && forca.isEmpty() && habilidade.isEmpty() && resistencia.isEmpty() &&
            armadura.isEmpty() && poderFogo.isEmpty() && pontoVida.isEmpty() && pontoMagia.isEmpty() &&
            pontoExp.isEmpty() && nomePersonagem.isEmpty() && vantagens.isEmpty() && desvantagnes.isEmpty() &&
            tipoDano.isEmpty() && magiaConhecida.isEmpty() && dinheiroItens.isEmpty() && historia.isEmpty()
        ) {
            Toast.makeText(this, "Todos campos estão vazios", Toast.LENGTH_SHORT).show()
        } else {
            if (pontos_total.isNotEmpty() && forca.isNotEmpty() && habilidade.isNotEmpty() &&
                resistencia.isNotEmpty() && armadura.isNotEmpty() && poderFogo.isNotEmpty() &&
                pontoVida.isNotEmpty() && pontoMagia.isNotEmpty() && pontoExp.isNotEmpty() &&
                nomePersonagem.isNotEmpty() && vantagens.isNotEmpty() && desvantagnes.isNotEmpty() &&
                tipoDano.isNotEmpty() && magiaConhecida.isNotEmpty() && dinheiroItens.isNotEmpty() &&
                historia.isNotEmpty()
            ) {

                enviarDados()

            } else {
                Toast.makeText(this, "Preencha todos os campos.", Toast.LENGTH_SHORT).show()

            }

        }
    }

    fun enviarDados() {
        val pontos_total = pontosPersonagem?.text.toString().toInt()
        val forca = forcaPersonagem?.text.toString().toInt()
        val habilidade = habilidadePersonagem?.text.toString().toInt()
        val resistencia = resistenciaPersonagem?.text.toString().toInt()
        val armadura = armaduraPersonagem?.text.toString().toInt()
        val poderFogo = poderFogoPersonagem?.text.toString().toInt()
        val pontoVida = pontosVidaPersonagem?.text.toString().toInt()
        val pontoMagia = pontosMagiaPersonagem?.text.toString().toInt()
        val pontoExp = pontosExperienciaPersonagem?.text.toString().toInt()
        val nomePersonagem = nomePersonagem?.text.toString()
        val vantagens = vantagensPersonagem?.text.toString()
        val desvantagnes = desvantagemPersonagem?.text.toString()
        val tipoDano = tipoDanoPersonagem?.text.toString()
        val magiaConhecida = magiaConhecida?.text.toString()
        val dinheiroItens = dinheiroItensPersonagem?.text.toString()
        val historia = historiaPerson?.text.toString()
        val telaEsquePassword = Intent(this, MeusPersonagens::class.java)
        val soma = forca + habilidade + resistencia + armadura
        if (soma > pontos_total || soma < pontos_total) {

            Toast.makeText(
                this,
                "A soma das caracteristicas não pode ser maior ou menor que ${pontos_total}",
                Toast.LENGTH_SHORT
            ).show()

        } else {
            val resultado = ApiTaks().execute().get()
            resultado.forEach { elemento ->
                if (elemento.id == usuario_id) {
                    val nome = elemento.nome
                    val email = elemento.credencial.email
                    val senha = elemento.credencial.senha
                    //Log.i("Aqui","nome: $nome")

                    val res = PostPersonTaks().execute(
                        Personagem(
                            97,
                            nomePersonagem,
                            pontos_total,
                            forca,
                            habilidade,
                            resistencia,
                            armadura,
                            poderFogo,
                            pontoVida,
                            pontoMagia,
                            pontoExp,
                            historia,
                            vantagens,
                            desvantagnes,
                            tipoDano,
                            magiaConhecida,
                            dinheiroItens,
                            Usuario(usuario_id!!, nome, Credenciais(email, senha))
                        )
                    ).get()
                    Toast.makeText(this, "Sucesso", Toast.LENGTH_SHORT).show()
                    startActivity(telaEsquePassword)
                }
            }

        }

    }


    fun trocarTelaMeusPerson(v: View) {
        val telaMeusPerson = Intent(this, MeusPersonagens::class.java)
        telaMeusPerson.putExtra("usuario_id", usuario_id)
        startActivity(telaMeusPerson)
    }

    fun switcTest(v: View) {
        val switch_boolean = swichBolear.isChecked
        if (switch_boolean == true) {
            val telaCadastroMestre = Intent(this, CadastroMestre::class.java)
            telaCadastroMestre.putExtra("usuario_id", usuario_id)
            startActivity(telaCadastroMestre)
        }
    }

}
