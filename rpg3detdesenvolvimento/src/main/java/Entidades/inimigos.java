package Entidades;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity 
public class inimigos {

	
	@Id
	@GeneratedValue
	private Long id;
	
	@JsonProperty
	private String nome;
	
	@JsonProperty
	private int forcadeAtaque;
	
	@JsonProperty
	private int vida;
	
	
	public inimigos(String nome, int forcadeAtaque) {
		this.nome = nome;
		this.forcadeAtaque = forcadeAtaque;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public int getForcadeAtaque() {
		return forcadeAtaque;
	}


	public void setForcadeAtaque(int forcadeAtaque) {
		this.forcadeAtaque = forcadeAtaque;
	}


	public int getVida() {
		return vida;
	}


	public void setVida(int vida) {
		this.vida = vida;
	}
	
	
	
	
	
	
	
}
