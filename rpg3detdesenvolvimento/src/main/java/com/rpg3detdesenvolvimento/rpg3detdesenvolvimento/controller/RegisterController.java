package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;


public class RegisterController {
	
	private TodosUsuarios todosUsuarios;
	
	
	@Autowired
	public RegisterController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	@PostMapping("/Register")
	public ResponseEntity<String> salvar(@RequestBody Usuario usuario){
		this.todosUsuarios.save(usuario);
		return ResponseEntity.ok("cadastrado");
	}
	
	

}
