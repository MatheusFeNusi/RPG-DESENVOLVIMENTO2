package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Usuario;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.LoginController;
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

}
