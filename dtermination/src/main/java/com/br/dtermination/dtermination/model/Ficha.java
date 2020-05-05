package com.br.dtermination.dtermination.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ficha {

public Ficha() {}

 @Id
 @GeneratedValue (strategy = GenerationType.IDENTITY)
    Long id;
    int forca;
    int habilidade;
    int resistencia;
    int armadura;
    int poderFogo;
    int pontosVida;
    int pontoMagia;
    int pontoExperiencia;
    String historia;
    @ElementCollection(targetClass=String.class)
    List<String> vantagens;
    @ElementCollection(targetClass=String.class)
    List<String> desvantagens;
    @ElementCollection(targetClass=String.class)
    List<String> tipoDano;
    @ElementCollection(targetClass=String.class)
    List<String> magiasConhecidas;
    @ElementCollection(targetClass=String.class)
    List<String> dinheiroItens;

    public int getForca(){
        return forca;
    }
     public void setForca( int forca){
         this.forca = forca;
        }

      public int getHabilidade(){
        return habilidade;
      }

      public void setHabilidade(int habilidade){
        this.habilidade = habilidade;
      }

      public int getResistencia(){
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

    public int getPoderFogo() {
        return poderFogo;
    }

    public void setPoderFogo(int poderFogo) {
        this.poderFogo = poderFogo;
    }

    public int getPontoMagia() {
        return pontoMagia;
    }

    public void setPontoMagia(int pontoMagia) {
        this.pontoMagia = pontoMagia;
    }

    public int getPontosVida() {
        return pontosVida;
    }

    public void setPontosVida(int pontosVida) {
        this.pontosVida = pontosVida;
    }

    public int getPontoExperiencia() {
        return pontoExperiencia;
    }

    public void setPontoExperiencia(int pontoExperiencia) {
        this.pontoExperiencia = pontoExperiencia;
    }

    public List<String> getVantagens(){
        return this.vantagens;
    }
    public void setVantagens(List<String> vantagens) {
        this.vantagens = vantagens;
    }
    public List<String> getDesvantagens(){
        return this.desvantagens;
    }
    public void setDesvantagens(List<String> desvantagens) {
        this.desvantagens = desvantagens;
    }
    public List<String> getTipoDano(){
        return this.tipoDano;
    }
    public void setTipoDano(List<String> tipoDano) {
        this.tipoDano = tipoDano;
    }
    public List<String> getMagiasConhecidas(){
        return this.magiasConhecidas;
    }
    public void setMagiasConhecidas(List<String> magiasConhecidas) {
        this.magiasConhecidas = magiasConhecidas;
    }
    public List<String> getDinheiroItens(){
        return this.dinheiroItens;
    }
    public void setDinheiroItens(List<String> dinheiroItens){
        this.dinheiroItens = dinheiroItens;
    }

    public Ficha(int forca, int habilidade, int resistencia, int armadura, int poderFogo, int pontosVida, int pontoMagia, int pontoExperiencia, String historia, List<String> vantagens, List<String> desvantagens, List<String> tipoDano, List<String> magiasConhecidas, List<String> dinheiroItens) {
        this.forca = forca;
        this.habilidade = habilidade;
        this.resistencia = resistencia;
        this.armadura = armadura;
        this.poderFogo = poderFogo;
        this.pontosVida = pontosVida;
        this.pontoMagia = pontoMagia;
        this.pontoExperiencia = pontoExperiencia;
        this.historia = historia;
        this.vantagens = vantagens;
        this.desvantagens = desvantagens;
        this.tipoDano = tipoDano;
        this.magiasConhecidas = magiasConhecidas;
        this.dinheiroItens = dinheiroItens;
    }
}



