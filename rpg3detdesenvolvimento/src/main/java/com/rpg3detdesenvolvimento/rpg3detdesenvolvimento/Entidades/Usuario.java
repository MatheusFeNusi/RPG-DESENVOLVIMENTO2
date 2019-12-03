package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades;



import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="usuarios")
public class Usuario implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonProperty
//	@NotBlank
	private String nome;
	
//	@NotBlank
//	@JsonProperty
//	private Integer idade;
	
	@Email
//	@NotBlank
	@JsonProperty
	private String email;
	
//	@NotBlank
	@JsonProperty
	private String senha;	
	
	

//	public Usuario(@NotBlank String nome, @Email @NotBlank String email,
//			@NotBlank String senha) {
//		this.nome = nome;
//		this.email = email;
//		this.senha = senha;
//	}

	public Usuario(String nome, @Email String email, String senha) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
	}
	
	public Usuario() {	
	
	}


	public  String getNome() {
		return nome;
	}
//	
//	public Integer getIdade() {
//		return idade;
//	}
	
	
	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}
}
