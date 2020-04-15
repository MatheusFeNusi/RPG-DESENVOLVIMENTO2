package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Credenciais;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Usuario;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

@RestController
public class LoginController {

	private TodosUsuarios todosUsuarios;

	@Autowired
	public LoginController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;

	}

	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<Usuario> validarLogin(@RequestBody Credenciais credenciais) {
		Usuario user = todosUsuarios.buscarUsando(credenciais);
		return user == null ? ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()
				: ResponseEntity.ok(user);

	}

}
