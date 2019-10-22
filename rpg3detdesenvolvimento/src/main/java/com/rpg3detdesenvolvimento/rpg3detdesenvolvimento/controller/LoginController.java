package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;

@RestController
public class LoginController {

	private TodosUsuarios todosUsuarios;
	
	
	@Autowired
	public LoginController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(@RequestBody Credenciais credenciais) {
		ResponseEntity<String> resposta = ResponseEntity.ok("Sucesso");
		
		if(todosUsuarios.existe(credenciais.getEmail(), credenciais.getSenha()) == null) {
			resposta = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login/senha não conferem");
		}
		return resposta;
	}

}
