package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;

import javax.validation.Valid;

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
	
	ArrayList<Usuario> Partida = new ArrayList<Usuario>(6);
	ArrayBlockingQueue<Integer> salaDeEspera = new ArrayBlockingQueue<Integer>(4);

	private TodosUsuarios todosUsuarios;
	
	@Autowired
	public LoginController(TodosUsuarios todosUsuarios) {
		this.todosUsuarios = todosUsuarios;
	}
	
//	@CrossOrigin
//	@PostMapping("/login")
//	public ResponseEntity<String> validarLogin(
//			@RequestBody @Valid Usuario usuario) {
//		if(usuario.getEmail().equals(usuario.getSenha())) {		
//			partida.add()
//			return ResponseEntity
//					.status(HttpStatus.OK)
//					.body("Sucesso");
//		}	
//		else {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body("Login não autorizado");
//		}
//	}
	
	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<String> validarLogin(
			@RequestBody @Valid Usuario usuario) {
		usuario = todosUsuarios.existe(usuario.getEmail(), usuario.getSenha());
		if(usuario!=null) {
			return new ResponseEntity<String>(HttpStatus.ACCEPTED);			
		}else {
			return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);
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