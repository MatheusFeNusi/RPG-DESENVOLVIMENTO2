package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosPersonagens;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

import Entidades.Personagens;

@RestController
public class PersonagemController {
	
	private TodosPersonagens todosPersonagens;
	
	//autoriza essa classe usar a classe todosUsuarios
	@Autowired
	public PersonagemController( TodosPersonagens todosPersonagens) {
		
		this.todosPersonagens = todosPersonagens;
	}
	//cria uma rota /register para ser salvo os dados da tabela usuario 
	//save é um metodo que o propio jpa cria sozinho para gravar informações 
	//basta apenas passar o JSON
	
	@PostMapping("/registerPersonagem")
	public ResponseEntity<String> salvar(@RequestBody Personagens personagem){
		this.todosPersonagens.save(personagem);
		return ResponseEntity.ok("cadastrado");
	}
	
	
	

}


