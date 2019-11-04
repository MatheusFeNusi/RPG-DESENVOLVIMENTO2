package Entidades;

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
	private int vida;
	

	@JsonProperty
	private int forca;
	
	@JsonProperty
	private int habilidade;
	
	
	@JsonProperty
	private int resistencia;
	
	@JsonProperty
	private int armadura;
	
	
	@JsonProperty
	private int poderdefogo;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getVida() {
		return vida;
	}


	public void setVida(int vida) {
		this.vida = vida;
	}


	public int getForca() {
		return forca;
	}


	public void setForca(int forca) {
		this.forca = forca;
	}


	public int getHabilidade() {
		return habilidade;
	}


	public void setHabilidade(int habilidade) {
		this.habilidade = habilidade;
	}


	public int getResistencia() {
		return resistencia;
	}


	public void setResistencia(int resistencia) {
		this.resistencia = resistencia;
	}


	public int getArmadura() {
		return armadura;
	}


	public void setArmadura(int armadura) {
		this.armadura = armadura;
	}


	public int getPoderdefogo() {
		return poderdefogo;
	}


	public void setPoderdefogo(int poderdefogo) {
		this.poderdefogo = poderdefogo;
	}


	
	
	
	
}
