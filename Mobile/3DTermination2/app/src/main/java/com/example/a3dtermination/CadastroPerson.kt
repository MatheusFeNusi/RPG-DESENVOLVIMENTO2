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
    }
    fun pegarImagemGaleria(v: View){
        val PICK_IMAGE = 1234
        val i = Intent(
            Intent.ACTION_PICK,
            MediaStore.Images.Media.INTERNAL_CONTENT_URI
        )
        startActivityForResult(Intent.createChooser(i, "Selecione uma imagem"), PICK_IMAGE)

        fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
            super.onActivityResult(requestCode, resultCode!!, data)
            // Check which request we're responding to
            if (resultCode !== Activity.RESULT_CANCELED) {
                if (requestCode === PICK_IMAGE) {
                    val selectedImage = data!!.data
                    Toast.makeText(
                        applicationContext,
                        selectedImage.toString(),
                        Toast.LENGTH_SHORT
                    ).show()
                    ivImage.setImageURI(selectedImage)
                }
            }
        }
    }
}
