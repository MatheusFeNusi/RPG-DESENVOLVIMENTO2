package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.LoginController;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.TodosUsuarios;

@SpringBootTest
class Rpg3detdesenvolvimentoApplicationTests {
    
	
	private TodosUsuarios todosUsuarios;
	
	@Before
	public void setUp() {
		this.todosUsuarios = Mockito.mock(TodosUsuarios.class);
	}
	
	@Test
	void contextLoads() {
	}

	
	@Test
	public void loginComSucesso() {
		Credenciais c = new Credenciais("login", "login");
		Mockito.when(todosUsuarios.buscarUsando(c))
			.thenReturn(new Usuario("Rodrigo", 39));
		LoginController controller = new LoginController(todosUsuarios);
		
		ResponseEntity<String> resposta =  
				controller.validarLogin(c);
		
		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals("Sucesso", resposta.getBody());
	}
	
	@Test
	public void loginComFalha() {
		Credenciais c = new Credenciais("login", "senha");
		Mockito.when(todosUsuarios.buscarUsando(c)).thenReturn(null);
		LoginController controller  = new LoginController(todosUsuarios);
		
		ResponseEntity<String> resposta = 
				controller.validarLogin(c);
		
		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
		assertEquals("Erro", resposta.getBody());
	}
}
