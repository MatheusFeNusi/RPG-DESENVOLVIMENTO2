package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Personagens;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosPersonagens;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;

@RestController
public class RegisterController {
	
	//{ 
		//  "nome":"matheus",
		//  "idade":19,
		//  "credenciais": {
		//    "Email": "matheus@matheus",
		//    "senha": "123"
		//  }
	//	} se testa assim no Json para cadastrar no api rest client 
	
	private TodosUsuarios todosUsuarios;
	
	private TodosPersonagens todosPersonagens;
	
	//autoriza essa classe usar a classe todosUsuarios
	@Autowired
	public RegisterController(TodosUsuarios todosUsuarios, TodosPersonagens todosPersonagens) {
		this.todosUsuarios = todosUsuarios;
		this.todosPersonagens = todosPersonagens;
	}
	
	//cria uma rota /register para ser salvo os dados da tabela usuario 
	//save é um metodo que o propio jpa cria sozinho para gravar informações 
	//basta apenas passar o JSON
	@PostMapping("/register")
	public ResponseEntity<String> salvar(@RequestBody Usuario usuario){
		this.todosUsuarios.save(usuario);
		return ResponseEntity.ok("cadastrado");
	}
	
	@PostMapping("/registerPersonagem")
	public ResponseEntity<String> salvar(@RequestBody Personagens personagem){
		this.todosPersonagens.save(personagem);
		return ResponseEntity.ok("cadastrado");
	}
	
	
	

}
