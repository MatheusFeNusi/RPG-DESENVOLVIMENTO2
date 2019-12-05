package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Credenciais;
import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.Entidades.Usuario;


@Repository
public interface TodosUsuarios 
	extends JpaRepository<Usuario, Long> {
	
//	@Query("select u from Usuario u where u.email = :email and u.senha = :senha")
//	public Usuario existe(@Param("email") String email, @Param("senha") String senha);
	
	@Query("select u from Usuario u where u.credenciais = :credenciais")
	public Usuario buscarUsando(@Param("credenciais") Credenciais credenciais);
}
