package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import com.example.a3dtermination.REST.Taks.GetPersonTaks
import kotlinx.android.synthetic.main.activity_meus_personagens.*
import org.jetbrains.anko.startActivity

class MeusPersonagens : AppCompatActivity() {

    var usuario_id = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_meus_personagens)
        inicializaVariables()
        val usuario = intent.extras?.getInt("usuario_id")
        //usuario_id = usuario.toString().toInt()
        usuario_id = 1
        //Toast.makeText(this, "$usuario_id", Toast.LENGTH_LONG).show()
    }
    fun inicializaVariables() {
        mostrarFragment()
        btSalvar.setVisibility(View.INVISIBLE);
        desabilitarInput()
    }
    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
    fun desabilitarInput() {
        nomePersonagem.isEnabled = false
        vantagensPersonEditar.isEnabled = false
        desvantagemPersonEditar.isEnabled = false
        tipoDanoPersonEditar.isEnabled = false
        magiaConhecidaEditar.isEnabled = false
        dinheiroItensEditar.isEnabled = false
        historiaEditar.isEnabled = false
    }
    fun editarDetalhes(v:View) {
        btEditar.setVisibility(View.INVISIBLE);
        nomePersonagem.isEnabled = true
        vantagensPersonEditar.isEnabled = true
        desvantagemPersonEditar.isEnabled = true
        tipoDanoPersonEditar.isEnabled = true
        magiaConhecidaEditar.isEnabled = true
        dinheiroItensEditar.isEnabled = true
        historiaEditar.isEnabled = true
        btSalvar.setVisibility(View.VISIBLE);
    }
    fun salvarEditarDetalhes(v: View) {
        nomePersonagem.isEnabled = false
        vantagensPersonEditar.isEnabled = false
        desvantagemPersonEditar.isEnabled = false
        tipoDanoPersonEditar.isEnabled = false
        magiaConhecidaEditar.isEnabled = false
        dinheiroItensEditar.isEnabled = false
        historiaEditar.isEnabled = false
        btEditar.setVisibility(View.VISIBLE);
        Toast.makeText(this, "Dados alterados", Toast.LENGTH_SHORT).show()

        val nome = nomePersonagem?.text.toString()
        val vantagens = vantagensPersonEditar?.text.toString()
        val desvantagens = desvantagemPersonEditar?.text.toString()
        val tipoDano = tipoDanoPersonEditar?.text.toString()
        val magiaConhecida = magiaConhecidaEditar?.text.toString()
        val dinheiroItens = dinheiroItensEditar?.text.toString()
        val historia = historiaEditar?.text.toString()

        // aqui será mandada o requisição para o banco
    }
    fun trocarTelaCadastroPerson(v: View){
        val telaCadastroPerson = Intent(this,CadastroPerson::class.java)
        startActivity(telaCadastroPerson)
    }
    fun entrarChat(v:View) {
        startActivity<EntranceActivity>()
    }
    fun mostrarCard1(v:View) {
        val person1 = GetPersonTaks().execute().get()
        var cont_card1 = 0
        Log.i("Card1: ", person1.toString())
        person1.forEach { elemento ->
            if (usuario_id == elemento.usuario.id) {
                var desvantagens = elemento.desvantagens
                if (desvantagens.isNullOrEmpty()) {
                    desvantagens = "."
                }
                var vantagens = elemento.vantagens
                if (vantagens.isNullOrEmpty()) {
                    vantagens = "."
                }
                var nome_person = elemento.nome
                if (nome_person.isNullOrEmpty()) {
                    nome_person = "."
                }
                var tipo_dano = elemento.tipoDano
                if (tipo_dano.isNullOrEmpty()) {
                    tipo_dano = "."
                }
                var historia = elemento.historia
                if (historia.isNullOrEmpty()) {
                    historia = "."
                }
                var dinheiro_itens = elemento.dinheiroItens
                if (dinheiro_itens.isNullOrEmpty()) {
                    dinheiro_itens = "."
                }
                var magia_conhecidas = elemento.magiasConhecidas
                if (magia_conhecidas.isNullOrEmpty()) {
                    magia_conhecidas = "."
                }
                if (cont_card1 == 0) {
                    if (nome_person === "." && vantagens === "." && desvantagens === "." && tipo_dano === "." &&
                        magia_conhecidas === "." && dinheiro_itens === "." && historia === "."
                    ) {
                        card1.isEnabled = false
                        Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                    } else {
                        nomePersonagem.setText(nome_person)
                        vantagensPersonEditar.setText(vantagens)
                        desvantagemPersonEditar.setText(desvantagens)
                        tipoDanoPersonEditar.setText(tipo_dano)
                        magiaConhecidaEditar.setText(magia_conhecidas)
                        dinheiroItensEditar.setText(dinheiro_itens)
                        historiaEditar.setText(historia)
                    }
                }
                cont_card1++
            }
        }
        if(person1.size == 0) {
            Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
        }
    }
    fun mostrarCard2(v:View) {
        val person2 = GetPersonTaks().execute().get()
        var cont_card2 = 0
        Log.i("Card2: ", person2.toString())
        person2.forEach { elemento ->
            if (usuario_id == elemento.usuario.id) {
                var desvantagens = elemento.desvantagens
                if (desvantagens.isNullOrEmpty()) {
                    desvantagens = "."
                }
                var vantagens = elemento.vantagens
                if (vantagens.isNullOrEmpty()) {
                    vantagens = "."
                }
                var nome_person = elemento.nome
                if (nome_person.isNullOrEmpty()) {
                    nome_person = "."
                }
                var tipo_dano = elemento.tipoDano
                if (tipo_dano.isNullOrEmpty()) {
                    tipo_dano = "."
                }
                var historia = elemento.historia
                if (historia.isNullOrEmpty()) {
                    historia = "."
                }
                var dinheiro_itens = elemento.dinheiroItens
                if (dinheiro_itens.isNullOrEmpty()) {
                    dinheiro_itens = "."
                }
                var magia_conhecidas = elemento.magiasConhecidas
                if (magia_conhecidas.isNullOrEmpty()) {
                    magia_conhecidas = "."
                }
                if (cont_card2 == 1) {
                    if (nome_person == "." && vantagens == "." && desvantagens == "." && tipo_dano == "." &&
                        magia_conhecidas == "." && dinheiro_itens == "." && historia == "."
                    ) {
                        Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                    } else {
                        nomePersonagem.setText(nome_person)
                        vantagensPersonEditar.setText(vantagens)
                        desvantagemPersonEditar.setText(desvantagens)
                        tipoDanoPersonEditar.setText(tipo_dano)
                        magiaConhecidaEditar.setText(magia_conhecidas)
                        dinheiroItensEditar.setText(dinheiro_itens)
                        historiaEditar.setText(historia)
                    }
                }
                cont_card2++
            }
        }
        if(person2.size == 1 || person2.size == 0) {
            Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
            nomePersonagem.text = null
            vantagensPersonEditar.text = null
            desvantagemPersonEditar.text = null
            tipoDanoPersonEditar.text = null
            magiaConhecidaEditar.text = null
            dinheiroItensEditar.text = null
            historiaEditar.text = null
        }
    }
        fun mostrarCard3(v:View) {
            val person3 = GetPersonTaks().execute().get()
            var cont_card3 = 0
            Log.i("Card3: ", person3.toString())
            person3.forEach { elemento ->
                if (usuario_id == elemento.usuario.id) {
                    var desvantagens = elemento.desvantagens
                    if (desvantagens.isNullOrEmpty()) {
                        desvantagens = "."
                    }
                    var vantagens = elemento.vantagens
                    if (vantagens.isNullOrEmpty()) {
                        vantagens = "."
                    }
                    var nome_person = elemento.nome
                    if (nome_person.isNullOrEmpty()) {
                        nome_person = "."
                    }
                    var tipo_dano = elemento.tipoDano
                    if (tipo_dano.isNullOrEmpty()) {
                        tipo_dano = "."
                    }
                    var historia = elemento.historia
                    if (historia.isNullOrEmpty()) {
                        historia = "."
                    }
                    var dinheiro_itens = elemento.dinheiroItens
                    if (dinheiro_itens.isNullOrEmpty()) {
                        dinheiro_itens = "."
                    }
                    var magia_conhecidas = elemento.magiasConhecidas
                    if (magia_conhecidas.isNullOrEmpty()) {
                        magia_conhecidas = "."
                    }
                    if (cont_card3 == 2) {
                        if (nome_person == "." && vantagens == "." && desvantagens == "." && tipo_dano == "." &&
                            magia_conhecidas == "." && dinheiro_itens == "." && historia == "."
                        ) {
                            Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                        } else {
                            nomePersonagem.setText(nome_person)
                            vantagensPersonEditar.setText(vantagens)
                            desvantagemPersonEditar.setText(desvantagens)
                            tipoDanoPersonEditar.setText(tipo_dano)
                            magiaConhecidaEditar.setText(magia_conhecidas)
                            dinheiroItensEditar.setText(dinheiro_itens)
                            historiaEditar.setText(historia)
                        }
                    }
                    cont_card3++
                }
            }
            if(person3.size == 2 || person3.size == 1|| person3.size == 0) {
                Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                nomePersonagem.text = null
                vantagensPersonEditar.text = null
                desvantagemPersonEditar.text = null
                tipoDanoPersonEditar.text = null
                magiaConhecidaEditar.text = null
                dinheiroItensEditar.text = null
                historiaEditar.text = null
            }
        }
            fun mostrarCard4(v:View) {
                val person4 = GetPersonTaks().execute().get()
                var cont_card4 = 0
                Log.i("Card4: ", person4.toString())
                person4.forEach { elemento ->
                    if (usuario_id == elemento.usuario.id) {
                        var desvantagens = elemento.desvantagens
                        if (desvantagens.isNullOrEmpty()) {
                            desvantagens = "."
                        }
                        var vantagens = elemento.vantagens
                        if (vantagens.isNullOrEmpty()) {
                            vantagens = "."
                        }
                        var nome_person = elemento.nome
                        if (nome_person.isNullOrEmpty()) {
                            nome_person = "."
                        }
                        var tipo_dano = elemento.tipoDano
                        if (tipo_dano.isNullOrEmpty()) {
                            tipo_dano = "."
                        }
                        var historia = elemento.historia
                        if (historia.isNullOrEmpty()) {
                            historia = "."
                        }
                        var dinheiro_itens = elemento.dinheiroItens
                        if (dinheiro_itens.isNullOrEmpty()) {
                            dinheiro_itens = "."
                        }
                        var magia_conhecidas = elemento.magiasConhecidas
                        if (magia_conhecidas.isNullOrEmpty()) {
                            magia_conhecidas = "."
                        }
                        if (cont_card4 == 3) {
                            if (nome_person == "." && vantagens == "." && desvantagens == "." && tipo_dano == "." &&
                                magia_conhecidas == "." && dinheiro_itens == "." && historia == "."
                            ) {
                                Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                            } else {
                                nomePersonagem.setText(nome_person)
                                vantagensPersonEditar.setText(vantagens)
                                desvantagemPersonEditar.setText(desvantagens)
                                tipoDanoPersonEditar.setText(tipo_dano)
                                magiaConhecidaEditar.setText(magia_conhecidas)
                                dinheiroItensEditar.setText(dinheiro_itens)
                                historiaEditar.setText(historia)
                            }
                        }
                        cont_card4++
                    }
                }
                if(person4.size == 3 || person4.size == 1|| person4.size == 0) {
                    Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                    nomePersonagem.text = null
                    vantagensPersonEditar.text = null
                    desvantagemPersonEditar.text = null
                    tipoDanoPersonEditar.text = null
                    magiaConhecidaEditar.text = null
                    dinheiroItensEditar.text = null
                    historiaEditar.text = null
                }
            }
                fun mostrarCard5(v:View) {
                    val person5 = GetPersonTaks().execute().get()
                    var cont_card5 = 0
                    Log.i("Card5: ", person5.toString())
                    person5.forEach { elemento ->
                        if (usuario_id == elemento.usuario.id) {
                            var desvantagens = elemento.desvantagens
                            if (desvantagens.isNullOrEmpty()) {
                                desvantagens = "."
                            }
                            var vantagens = elemento.vantagens
                            if (vantagens.isNullOrEmpty()) {
                                vantagens = "."
                            }
                            var nome_person = elemento.nome
                            if (nome_person.isNullOrEmpty()) {
                                nome_person = "."
                            }
                            var tipo_dano = elemento.tipoDano
                            if (tipo_dano.isNullOrEmpty()) {
                                tipo_dano = "."
                            }
                            var historia = elemento.historia
                            if (historia.isNullOrEmpty()) {
                                historia = "."
                            }
                            var dinheiro_itens = elemento.dinheiroItens
                            if (dinheiro_itens.isNullOrEmpty()) {
                                dinheiro_itens = "."
                            }
                            var magia_conhecidas = elemento.magiasConhecidas
                            if (magia_conhecidas.isNullOrEmpty()) {
                                magia_conhecidas = "."
                            }
                            if (cont_card5 == 4) {
                                if (nome_person == "." && vantagens == "." && desvantagens == "." && tipo_dano == "." &&
                                    magia_conhecidas == "." && dinheiro_itens == "." && historia == "."){
                                    Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                                } else {
                                    nomePersonagem.setText(nome_person)
                                    vantagensPersonEditar.setText(vantagens)
                                    desvantagemPersonEditar.setText(desvantagens)
                                    tipoDanoPersonEditar.setText(tipo_dano)
                                    magiaConhecidaEditar.setText(magia_conhecidas)
                                    dinheiroItensEditar.setText(dinheiro_itens)
                                    historiaEditar.setText(historia)
                                    card5.isEnabled = true
                                }
                                }
                            cont_card5++
                            }
                        }
                    if(person5.size == 3 || person5.size == 1 || person5.size == 2 || person5.size == 0) {
                        Toast.makeText(this, "Não existe personagem neste card", Toast.LENGTH_LONG).show()
                        nomePersonagem.text = null
                        vantagensPersonEditar.text = null
                        desvantagemPersonEditar.text = null
                        tipoDanoPersonEditar.text = null
                        magiaConhecidaEditar.text = null
                        dinheiroItensEditar.text = null
                        historiaEditar.text = null
                    }
                }
}



