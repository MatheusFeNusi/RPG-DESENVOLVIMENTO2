package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	public ResponseEntity<String> validarLogin(
			@RequestBody Credenciais credenciais) {
		if(credenciais.getEmail().equals(credenciais.getSenha())) {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body("Sucesso");
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("Login não autorizado");
		}
	}
	
	
	
	
	
	
	   List<Credenciais> logado = new ArrayList<>();
	    

	   

	    private void logout(Credenciais credenciais){
	        if(todosUsuarios.existe(credenciais.getEmail(), credenciais.getSenha()) != null) {
	            logado.remove(credenciais);
	        }
	    }

	    @DeleteMapping("/logout")
	    public ResponseEntity<String> logoutUsuario(@RequestBody Credenciais credenciais){
	        logout(credenciais);
	        return ResponseEntity.ok("Sucesso");
	    }
	



}
	
	
	
