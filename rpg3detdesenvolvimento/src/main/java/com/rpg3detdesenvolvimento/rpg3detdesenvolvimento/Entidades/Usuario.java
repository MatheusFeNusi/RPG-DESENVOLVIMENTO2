package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "usuarios")
public class Usuario {

	@Id
	@GeneratedValue
	private Long id;

	@Embedded
	private Credenciais credenciais;

	@JsonProperty
	private String nome;
	@JsonProperty
	private Integer idade;

	public Usuario() {}

	public Usuario(Credenciais credenciais, String nome, Integer idade) {
		this.credenciais = credenciais;
		this.nome = nome;
		this.idade = idade;
	}

	public String getNome() {
		return nome;
	}

	public Integer getIdade() {
		return idade;
	}

	public Credenciais getCredenciais() {
		return credenciais;
	}

}
