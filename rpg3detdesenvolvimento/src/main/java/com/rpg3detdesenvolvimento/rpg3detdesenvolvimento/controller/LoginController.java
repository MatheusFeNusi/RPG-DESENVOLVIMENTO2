package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

@RestController
public class LoginController {

	private TodosUsuarios todosUsuarios;
	
	@Autowired
	public LoginController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(
			@RequestBody Credenciais credenciais) {
		//if(credenciais.getLogin().equals(credenciais.getSenha())) {
		if(todosUsuarios
				.buscarUsando(credenciais) != null) {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body("Sucesso");
			//return ResponseEntity.ok("Sucesso");
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("Erro");
		}
	}

}
