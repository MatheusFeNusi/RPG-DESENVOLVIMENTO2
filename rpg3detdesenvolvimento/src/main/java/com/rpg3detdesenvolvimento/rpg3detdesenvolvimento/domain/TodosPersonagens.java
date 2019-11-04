package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Entidades.Personagens;

@Repository
public interface TodosPersonagens 
	extends JpaRepository<Personagens, Long> {
	
	
}
