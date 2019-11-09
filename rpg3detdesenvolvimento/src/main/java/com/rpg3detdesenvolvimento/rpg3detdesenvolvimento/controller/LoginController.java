package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Usuario;


@RestController
public class LoginController {

	private TodosUsuarios todosUsuarios;
	
	
	@Autowired
	public LoginController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(
			@RequestBody  Usuario usuario) {
		if(usuario.getEmail().equals(usuario.getSenha())) {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body("Sucesso");
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("Login não autorizado");
		}
	}
	
	
	
	
	
	
	   List<Usuario> logado = new ArrayList<>();
	    

	   

	    private void logout(Usuario usuario){
	        if(todosUsuarios.existe(usuario.getEmail(), usuario.getSenha()) != null) {
	            logado.remove(usuario);
	        }
	    }

	    @DeleteMapping("/logout")
	    public ResponseEntity<String> logoutUsuario(@RequestBody Usuario usuario){
	        logout(usuario);
	        return ResponseEntity.ok("Sucesso");
	    }
	



}
	
	
	
