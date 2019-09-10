package br.com.bandtec.rpgdesenvolvimento.domain;

public class Usuario {

	private String nome;
	private Integer idade;
	
	public Usuario(String nome, Integer idade) {
		this.nome = nome;
		this.idade = idade;
	}
	
	public String getNome() {
		return nome;
	}
	
	public Integer getIdade() {
		return idade;
	}
}
