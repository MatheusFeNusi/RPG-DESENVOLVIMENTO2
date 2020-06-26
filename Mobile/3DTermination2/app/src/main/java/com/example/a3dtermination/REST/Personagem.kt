package com.example.a3dtermination.REST

data class Personagem(
    val id: Int,
    val nome: String,
    val pontosTotal: Int,
    val forca: Int,
    val habilidade: Int,
    val resistencia: Int,
    val armadura: Int,
    val poderFogo: Int,
    val pontosVida: Int,
    val pontoMagia: Int,
    val pontoExperiencia: Int,
    val historia: String,
    val vantagens: String,
    val desvantagens: String,
    val tipoDano: String,
    val magiasConhecidas: String,
    val dinheiroItens: String,
    val usuario: Usuario
)