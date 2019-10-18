package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;



import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;

@Entity
@Table(name="usuarios")
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
