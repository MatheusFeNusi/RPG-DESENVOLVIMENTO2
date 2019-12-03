package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades;



import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="usuarios")
public class Usuario {

	@Id
	@GeneratedValue
	private Long id;

	@JsonProperty
	private String email;
	
	@JsonProperty
	private String senha;	
	
	@JsonProperty
	private String nome;
	@JsonProperty
	private Integer idade;
	
	

	public Usuario() {
		
		
	}
	
	public Usuario(Long id, String email, String senha, String nome, Integer idade) {
		this.id = id;
		this.email = email;
		this.senha = senha;
		this.nome = nome;
		this.idade = idade;
	}

	public  String getNome() {
		return nome;
	}
	
	public Integer getIdade() {
		return idade;
	}
	
	
	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}
	
	
}
