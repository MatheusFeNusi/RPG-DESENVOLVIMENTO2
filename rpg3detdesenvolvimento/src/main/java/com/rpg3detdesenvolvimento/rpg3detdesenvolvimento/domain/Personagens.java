package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="personagens")
public class Personagens {
     

	@Id
	@GeneratedValue
	private Long id;
	

	@JsonProperty
	private String forca;
	
	@JsonProperty
	private String habilidade;
	
	
	@JsonProperty
	private Integer resistencia;
	
	@JsonProperty
	private String armadura;
	
	
	@JsonProperty
	private Integer poderdefogo;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getForca() {
		return forca;
	}


	public void setForca(String forca) {
		this.forca = forca;
	}


	public String getHabilidade() {
		return habilidade;
	}


	public void setHabilidade(String habilidade) {
		this.habilidade = habilidade;
	}


	public Integer getResistencia() {
		return resistencia;
	}


	public void setResistencia(Integer resistencia) {
		this.resistencia = resistencia;
	}


	public String getArmadura() {
		return armadura;
	}


	public void setArmadura(String armadura) {
		this.armadura = armadura;
	}


	public Integer getPoderdefogo() {
		return poderdefogo;
	}


	public void setPoderdefogo(Integer poderdefogo) {
		this.poderdefogo = poderdefogo;
	}
	
	
	
	
	
	
}
