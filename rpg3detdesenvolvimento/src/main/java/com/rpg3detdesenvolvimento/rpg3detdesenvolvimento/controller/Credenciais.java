package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import javax.persistence.Embeddable;

@Embeddable
public class Credenciais {
	
	private String Email;
	private String senha;
	
	public Credenciais(String Email, String senha) {
		this.Email = Email;
		this.senha = senha;
	}
	
	public String getEmail() {
		return Email;
	}

	public String getSenha() {
		return senha;
	}
}