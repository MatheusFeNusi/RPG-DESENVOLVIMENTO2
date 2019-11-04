package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;


@Repository
public interface TodosUsuarios 
	extends JpaRepository<Usuario, Long> {
	
	@Query("select u from Usuario u where u.credenciais = :c ")
	public Usuario existe(@Param("c")Credenciais credenciais);
}
