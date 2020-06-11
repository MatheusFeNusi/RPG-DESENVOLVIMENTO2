package com.example.a3dtermination

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_cadastro_person.*


class CadastroPerson : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_person)
        mostrarFragment()
    }
    fun mostrarFragment() {
        supportFragmentManager.beginTransaction().replace(R.id.topbar, FragmentTopbar()).commit()
    }
//    fun pegarImagemGaleria(v: View){
//        val PICK_IMAGE = 1234
//        val i = Intent(
//            Intent.ACTION_PICK,
//            MediaStore.Images.Media.INTERNAL_CONTENT_URI
//        )
//        startActivityForResult(Intent.createChooser(i, "Selecione uma imagem"), PICK_IMAGE)
//
//        fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
//            super.onActivityResult(requestCode, resultCode!!, data)
//            // Check which request we're responding to
//            if (resultCode !== Activity.RESULT_CANCELED) {
//                if (requestCode === PICK_IMAGE) {
//                    val selectedImage = data!!.data
//                    Toast.makeText(
//                        applicationContext,
//                        selectedImage.toString(),
//                        Toast.LENGTH_SHORT
//                    ).show()
//                    /*ivImage.setImageURI(selectedImage)*/
//                }
//            }
//        }
//    }
    fun enviarDados(v:View) {

    val pontos_total = pontosPersonagem?.text.toString().toInt()
    var forca = forcaPersonagem?.text.toString().toInt()
    var habilidade = habilidadePersonagem?.text.toString().toInt()
    var resistencia = resistenciaPersonagem?.text.toString().toInt()
    var armadura = armaduraPersonagem?.text.toString().toInt()
    val poderFogo = poderFogoPersonagem?.text.toString().toInt()
    val pontoVida = pontosVidaPersonagem?.text.toString().toInt()
    val pontoMagia = pontosMagiaPersonagem?.text.toString().toInt()
    val pontoExp = pontosExperienciaPersonagem?.text.toString().toInt()

    val nomePersonagem = nomePersonagem?.text.toString()
    val vantagens = vantagensPersonagem?.text.toString()
    val desvantagnes = desvantagemPersonagem?.text.toString()
    val tipoDano = tipoDanoPersonagem?.text.toString()
    val magiaConhecida = magiaConhecidaCriar?.text.toString()
    val dinheiroItens = dinheiroItensCriar?.text.toString()
    val historia = historiaCriar?.text.toString()

    val soma = forca + habilidade + resistencia + armadura

    if(soma > pontos_total || soma < pontos_total) {
        Toast.makeText(this, "A soma das caracteristicas não de ser maior ou menor que ${pontos_total}", Toast.LENGTH_SHORT).show()
         forca = 0
         habilidade = 0
         resistencia = 0
         armadura = 0
    } else {
        val jsonString = """
    {
       "type":"criar",
       "data":[
          {
             "nome":${nomePersonagem},
             "pontos_total":${pontos_total},
             "habilidade":${habilidade},
             "resistencia":${resistencia},
             "armadura":${armadura},
             "poder_fogo":${poderFogo},
             "pontos_vida':${pontoVida},
             "pontos_magia":${pontoMagia},
             "pontos_xp":${pontoExp},
             "vantagens":${vantagens},
             "desvantagens":${desvantagnes},
             "tipo_dano":${tipoDano},
             "magia_conhecida":${magiaConhecida},
             "dinheiro_itens":${dinheiroItens},
             "historia"::${historia},
          }
       ]
    }        
"""
        val telaEsquePassword = Intent(this,MeusPersonagens::class.java)
        startActivity(telaEsquePassword)
    }

}


    fun trocarTelaMeusPerson(v: View){
        val telaEsquePassword = Intent(this,MeusPersonagens::class.java)
        startActivity(telaEsquePassword)
    }

}
