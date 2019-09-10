package br.com.bandtec.rpgdesenvolvimento.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class LoginControllerTest {

	@Test
	public void loginComSucesso() {
		LoginController controller = new LoginController();
		
		ResponseEntity<String> resposta =  
				controller.validarLogin(new Credenciais("login", "login"));
		
		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals("Sucesso", resposta.getBody());
	}
	
	@Test
	public void loginComFalha() {
		LoginController controller  = new LoginController();
		
		ResponseEntity<String> resposta = 
				controller.validarLogin(new Credenciais("login", "senha"));
		
		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
		assertEquals("Erro", resposta.getBody());
	}
	
	
	
	
	
	
	
	
	
	
	
}
