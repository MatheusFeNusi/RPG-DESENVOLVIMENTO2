package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;

@Entity
@Table(name="usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY	)
	private Long id;
	
	@Embedded
	@JsonProperty
	private Credenciais credenciais;
	
	@JsonProperty
	private String nome;

	@JsonProperty
	private String idade;
	
	public Usuario(){

	}

}
