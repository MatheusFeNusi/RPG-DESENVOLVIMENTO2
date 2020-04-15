package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Usuario;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

@RestController
public class UsuariosController {
	
	private TodosUsuarios todosUsuarios;
	
	@Autowired
	public UsuariosController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	
	@CrossOrigin
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario){
		todosUsuarios.save(usuario);
		return ResponseEntity.status(HttpStatus.OK).body(usuario);
	}
	
}
