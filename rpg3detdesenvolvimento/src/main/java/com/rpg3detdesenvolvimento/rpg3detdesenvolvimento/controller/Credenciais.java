package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class Credenciais {
	
	
	private String email;
	
	private String senha;
	
	public Credenciais() {		
	}
	
	public Credenciais(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}
}