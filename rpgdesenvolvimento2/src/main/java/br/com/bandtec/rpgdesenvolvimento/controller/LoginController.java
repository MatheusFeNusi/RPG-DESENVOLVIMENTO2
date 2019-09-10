package br.com.bandtec.rpgdesenvolvimento.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Credenciais credenciais) {
		if(credenciais.getLogin().equals(credenciais.getSenha())) {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body("Você Está logado");
			//return ResponseEntity.ok("Sucesso");
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("Erro");
		}
	}
	
	@PostMapping("/logout")
	public ResponseEntity<String> logout()  { 
		
		
		return ResponseEntity.ok("Você está deslogado !!!"); // sucesso
	}

	
}
