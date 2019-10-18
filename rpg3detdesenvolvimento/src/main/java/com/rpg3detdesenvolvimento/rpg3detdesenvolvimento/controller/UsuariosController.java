package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;

@RestController
public class UsuariosController {
	
	private TodosUsuarios todosUsuarios;
	
	@Autowired
	public UsuariosController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario){
		todosUsuarios.save(usuario);
		return ResponseEntity.status(HttpStatus.OK).body(usuario);
	}
	
	@GetMapping("/usuarios/nome/{nomeDoUsuario}")
	public ResponseEntity<List<Usuario>> obterPorNome(
			@PathVariable("nomeDoUsuario") String nome){
		
		List<Usuario> usuarios = todosUsuarios.obterPorNome(nome);
		if(usuarios.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.status(HttpStatus.OK).body(usuarios); 
	}
}
