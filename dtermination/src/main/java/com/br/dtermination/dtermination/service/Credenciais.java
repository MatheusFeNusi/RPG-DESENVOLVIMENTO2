package service;

import javax.persistence.Embeddable;

@Embeddable
public class Credenciais {
    private String nome;
    private String senha;

    public Credenciais(String nome, String senha) {
        this.nome = nome;
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }
    public String getSenha() {
        return senha;
    }
}
