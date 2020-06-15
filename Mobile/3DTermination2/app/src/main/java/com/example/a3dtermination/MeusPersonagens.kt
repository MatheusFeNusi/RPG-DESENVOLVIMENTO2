package com.example.a3dtermination

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_meus_personagens.*
import org.jetbrains.anko.startActivity

class MeusPersonagens : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_meus_personagens)
        inicializaVariables()
    }
    fun inicializaVariables() {
        mostrarFragment()
        btSalvar.setVisibility(View.INVISIBLE);
        desabilitarInput()
        nomePersonagem.setText("Natsu Dragnell")
        vantagensPersonEditar.setText("Punho de fogo")
        desvantagemPersonEditar.setText("Transporte")
        tipoDanoPersonEditar.setText("Combustão")
        magiaConhecidaEditar.setText("Dragon force")
        dinheiroItensEditar.setText("R$: 100")
        historiaEditar.setText("Nasceu de um dragão")
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
}
